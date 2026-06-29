import { NextResponse } from "next/server";
import { COOKIE_NAME, createAuthToken, isPasswordProtectionEnabled } from "@/lib/auth";

export async function POST(request: Request) {
  if (!isPasswordProtectionEnabled()) {
    return NextResponse.json({ ok: true });
  }

  const body = (await request.json()) as { password?: string };
  const password = body.password ?? "";

  if (password !== process.env.SITE_PASSWORD) {
    return NextResponse.json({ error: "パスワードが正しくありません" }, { status: 401 });
  }

  const token = await createAuthToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
