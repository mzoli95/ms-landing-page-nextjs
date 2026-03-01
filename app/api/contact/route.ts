import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  // TODO: ide köthetsz email szolgáltatót (pl. Resend / SMTP / SendGrid)
  // Most csak "fake send", logolásra jó.
  console.log("CONTACT_FORM", body);

  if (!body?.email || !body?.details) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
