import type { Metadata } from "next";
import { Nunito, Noto_Sans_JP, Space_Mono } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-nunito",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-noto-sans-jp",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "UTOPIA — TECHNO & HOUSE PARTY",
  description: "2026/7/23 Thu 20:00〜 @Kieth Flack 1F — CHARGE FREE!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${nunito.variable} ${notoSansJP.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
