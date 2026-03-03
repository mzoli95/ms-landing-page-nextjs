import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/components/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  details?: string;
};

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestStore = new Map<string, number[]>();

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const existing = requestStore.get(ip) ?? [];
  const recent = existing.filter((timestamp) => timestamp >= windowStart);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestStore.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestStore.set(ip, recent);
  return false;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !portRaw || !user || !pass) {
    return null;
  }

  const port = Number(portRaw);
  if (!Number.isFinite(port)) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  };
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests." }, { status: 429 });
  }

  const body = (await req.json().catch(() => null)) as ContactBody | null;

  if (!body?.email || !body?.details) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email).trim();
  const details = String(body.details).trim();

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (details.length < 2 || details.length > 500) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    console.error("CONTACT_EMAIL_CONFIG_ERROR");
    return NextResponse.json(
      { ok: false, error: "Service unavailable." },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.SMTP_FROM || smtpConfig.auth.user;
  const safeName = escapeHtml(name || "-");
  const safeEmail = escapeHtml(email);
  const safeDetails = escapeHtml(details).replace(/\n/g, "<br />");

  try {
    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Új kapcsolatfelvétel - ${name || "Névtelen"}`,
      text: [
        `Név: ${name || "-"}`,
        `Email: ${email}`,
        "",
        "Üzenet:",
        details,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
            <div style="background:#0f172a;color:#ffffff;padding:16px 20px;font-size:18px;font-weight:700;">
              Új kapcsolatfelvétel
            </div>
            <div style="padding:20px;">
              <p style="margin:0 0 12px;"><strong>Név:</strong> ${safeName}</p>
              <p style="margin:0 0 12px;"><strong>Email:</strong> ${safeEmail}</p>
              <p style="margin:0 0 8px;"><strong>Üzenet:</strong></p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;line-height:1.6;">
                ${safeDetails}
              </div>
            </div>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("CONTACT_EMAIL_ERROR", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { ok: false, error: "Could not send email." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
