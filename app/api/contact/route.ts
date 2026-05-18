import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload?.name || !payload.email || !payload.message || !isEmail(payload.email)) {
    return NextResponse.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
  }

  // Add Resend, Postmark, SendGrid, or CRM integration here.
  // Keep this endpoint server-side so provider keys never reach the browser.
  console.info("Contact inquiry", {
    name: payload.name,
    email: payload.email,
    company: payload.company || "",
    message: payload.message.slice(0, 2000)
  });

  return NextResponse.json({ ok: true });
}
