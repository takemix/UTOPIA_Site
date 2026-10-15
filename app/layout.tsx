import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Nunito, Space_Mono } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-nunito",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const siteDescription =
  "UTOPIA — TECHNO & HOUSE PARTY。2026/11/19 Thu 20:00〜1:00 @KIETH FLACK 1F。GUEST DJ DJ OSAWA (3D)。CHARGE FREE! (1Drink Order)";

export const viewport: Viewport = {
  themeColor: "#8c3e70",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "UTOPIA — 2026/11/19 GUEST DJ DJ OSAWA",
    description: siteDescription,
    metadataBase: new URL(origin),
    openGraph: {
      title: "UTOPIA — 2026/11/19 GUEST DJ DJ OSAWA",
      description: siteDescription,
      images: [`${origin}/images/utopia1119_insta.png`],
      type: "website",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: "UTOPIA — 2026/11/19 GUEST DJ DJ OSAWA",
      description: siteDescription,
      images: [`${origin}/images/utopia1119_insta.png`],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${nunito.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
