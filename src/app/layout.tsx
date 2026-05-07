import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReBrain - スマート暗記カードアプリ",
  description: "AIが最適な復習タイミングを分析。フラッシュカード・タイピング・4択クイズで効率的に記憶を定着させるiOSアプリ。",
  openGraph: {
    title: "ReBrain - スマート暗記カードアプリ",
    description: "AIが最適な復習タイミングを分析。科学的な学習法で記憶を最大化。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
