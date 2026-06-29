const COOKIE_NAME = "site-auth";

async function hashToken(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function isPasswordProtectionEnabled(): boolean {
  return Boolean(process.env.SITE_PASSWORD);
}

export async function createAuthToken(): Promise<string> {
  const password = process.env.SITE_PASSWORD ?? "";
  const secret = process.env.AUTH_SECRET ?? password;
  return hashToken(`${password}:${secret}`);
}

export async function isValidAuthToken(token: string | undefined): Promise<boolean> {
  if (!token || !isPasswordProtectionEnabled()) return false;
  const expected = await createAuthToken();
  return token === expected;
}

export { COOKIE_NAME };
