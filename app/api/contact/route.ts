import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/components/lib/site";

export const runtime = "nodejs";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  details?: unknown;
  website?: unknown; // honeypot
  turnstileToken?: unknown; // opcionális
};

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
};

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 320;
const MIN_DETAILS_LENGTH = 10;
const MAX_DETAILS_LENGTH = 2000;

let cachedTransporter: nodemailer.Transporter | null = null;

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeHeaderValue(input: string) {
  return input.replace(/[\r\n]+/g, " ").trim();
}

function normalizeText(value: unknown) {
  if (typeof value !== "string") return "";
  return value.replace(/\u0000/g, "").trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(req: Request) {
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  return "unknown";
}

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secureRaw = process.env.SMTP_SECURE;

  if (!host || !portRaw || !user || !pass) {
    console.error("CONTACT_EMAIL_CONFIG_MISSING_KEYS", {
      missingKeys: [
        !host ? "SMTP_HOST" : null,
        !portRaw ? "SMTP_PORT" : null,
        !user ? "SMTP_USER" : null,
        !pass ? "SMTP_PASS" : null,
      ].filter(Boolean),
    });

    return null;
  }

  const port = Number(portRaw);

  if (!Number.isInteger(port) || port <= 0) {
    console.error("CONTACT_EMAIL_CONFIG_INVALID_PORT", { portRaw });
    return null;
  }

  return {
    host,
    port,
    secure: secureRaw === "true",
    auth: {
      user,
      pass,
    },
  };
}

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    return null;
  }

  cachedTransporter = nodemailer.createTransport(smtpConfig);
  return cachedTransporter;
}

async function parseJsonBody(req: Request): Promise<ContactBody | null> {
  const contentType = req.headers.get("content-type") || "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return null;
  }

  try {
    const body = (await req.json()) as unknown;

    if (!body || typeof body !== "object") {
      return null;
    }

    return body as ContactBody;
  } catch {
    return null;
  }
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // Ha nincs beállítva, akkor nem kötelező a Turnstile
  if (!secret) {
    return true;
  }

  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);

  if (ip !== "unknown") {
    formData.append("remoteip", ip);
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("TURNSTILE_HTTP_ERROR", {
        status: response.status,
      });
      return false;
    }

    const data = (await response.json()) as { success?: boolean };
    return data.success === true;
  } catch (error) {
    console.error("TURNSTILE_VERIFY_ERROR", {
      error: error instanceof Error ? error.message : String(error),
    });
    return false;
  }
}

function validateBody(body: ContactBody) {
  const name = normalizeText(body.name);
  const email = normalizeText(body.email).toLowerCase();
  const details = normalizeText(body.details);
  const website = normalizeText(body.website);
  const turnstileToken = normalizeText(body.turnstileToken);

  if (!name || !email || !details) {
    return {
      ok: false as const,
      error: "Invalid request.",
    };
  }

  // Honeypot: normál user ezt nem tölti ki
  if (website) {
    return {
      ok: false as const,
      error: "Invalid request.",
    };
  }

  if (name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH) {
    return {
      ok: false as const,
      error: "Invalid request.",
    };
  }

  if (email.length > MAX_EMAIL_LENGTH || !isValidEmail(email)) {
    return {
      ok: false as const,
      error: "Invalid request.",
    };
  }

  if (
    details.length < MIN_DETAILS_LENGTH ||
    details.length > MAX_DETAILS_LENGTH
  ) {
    return {
      ok: false as const,
      error: "Invalid request.",
    };
  }

  return {
    ok: true as const,
    value: {
      name,
      email,
      details,
      turnstileToken,
    },
  };
}

export async function POST(req: Request) {
  const ip = getClientIp(req);

  const origin = req.headers.get("origin");
  const host = req.headers.get("host");

  if (origin && host) {
    try {
      const originUrl = new URL(origin);

      if (originUrl.host !== host) {
        return jsonResponse({ ok: false, error: "Invalid request." }, 400);
      }
    } catch {
      return jsonResponse({ ok: false, error: "Invalid request." }, 400);
    }
  }

  const body = await parseJsonBody(req);
  if (!body) {
    return jsonResponse({ ok: false, error: "Invalid request." }, 400);
  }

  const validated = validateBody(body);
  if (!validated.ok) {
    return jsonResponse({ ok: false, error: validated.error }, 400);
  }

  const { name, email, details, turnstileToken } = validated.value;

  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!turnstileToken) {
      return jsonResponse({ ok: false, error: "Verification failed." }, 400);
    }

    const turnstileOk = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileOk) {
      return jsonResponse({ ok: false, error: "Verification failed." }, 400);
    }
  }

  const transporter = getTransporter();
  if (!transporter) {
    console.error("CONTACT_EMAIL_TRANSPORTER_UNAVAILABLE");
    return jsonResponse({ ok: false, error: "Service unavailable." }, 500);
  }

  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || site.email;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeDetails = escapeHtml(details).replace(/\r?\n/g, "<br />");
  const safeIp = escapeHtml(ip);
  const safeSubjectName = sanitizeHeaderValue(name || "Névtelen");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Új kapcsolatfelvétel - ${safeSubjectName}`,
      text: [
        `Név: ${name}`,
        `Email: ${email}`,
        ip !== "unknown" ? `IP: ${ip}` : "",
        "",
        "Üzenet:",
        details,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
            <div style="background:#0f172a;color:#ffffff;padding:16px 20px;font-size:18px;font-weight:700;">
              Új kapcsolatfelvétel
            </div>
            <div style="padding:20px;">
              <p style="margin:0 0 12px;"><strong>Név:</strong> ${safeName}</p>
              <p style="margin:0 0 12px;"><strong>Email:</strong> ${safeEmail}</p>
              ${
                ip !== "unknown"
                  ? `<p style="margin:0 0 12px;"><strong>IP:</strong> ${safeIp}</p>`
                  : ""
              }
              <p style="margin:0 0 8px;"><strong>Üzenet:</strong></p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;line-height:1.6;">
                ${safeDetails}
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return jsonResponse({ ok: true }, 200);
  } catch (error) {
    console.error("CONTACT_EMAIL_SEND_ERROR", {
      ip,
      error: error instanceof Error ? error.message : String(error),
    });

    return jsonResponse({ ok: false, error: "Could not send email." }, 500);
  }
}
