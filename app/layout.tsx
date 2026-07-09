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
  description:
    "福岡のテクノシーンで20年間に渡りKieth Flackを拠点に2か月に1回開催されてきたテクノ&ハウスパーティー「UTOPIA」。レジデントDJに加えゲストDJを迎え贅沢な一夜をお届け。次回は2026/7/23 Thu 20:00〜、CHARGE FREE!(1 Drink Order)で開催。",
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
