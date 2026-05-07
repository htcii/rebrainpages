import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReBrain - 単語帳・暗記フラッシュカードアプリ",
  description: "可愛いデザインでスマートに学習できるiOS向けの暗記・フラッシュカードアプリ",
  openGraph: {
    title: "ReBrain - 単語帳・暗記フラッシュカードアプリ",
    description: "可愛いデザインでスマートに学習できるiOS向けの暗記・フラッシュカードアプリ",
    type: "website",
    images: ["/assets/e52b567b-b4dc-4b5f-823c-7b346a671ea2.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/e52b567b-b4dc-4b5f-823c-7b346a671ea2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700;800;900&family=Noto+Sans+JP:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/webp"
          href="/assets/s-1024x1024_v-fs_webp_8d0fe0a7-ee9c-4652-9cb1-ffae16789edd_small.webp"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
