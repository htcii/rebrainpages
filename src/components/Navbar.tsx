"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/rebrain-%E5%8D%98%E8%AA%9E%E5%B8%B3%E3%82%A2%E3%83%97%E3%83%AA/id6742406188";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 80,
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s",
        background: scrolled ? "rgba(84,96,245,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Image
          src="/assets/s-1024x1024_v-fs_webp_8d0fe0a7-ee9c-4652-9cb1-ffae16789edd_small.webp"
          alt="ReBrain icon"
          width={38}
          height={38}
          style={{ borderRadius: 10 }}
        />
        <span
          style={{
            color: "#fff",
            fontFamily: "Figtree, sans-serif",
            fontWeight: 800,
            fontSize: 28,
            lineHeight: 1,
          }}
        >
          ReBrain
        </span>
      </a>

      {/* Nav links (desktop) */}
      <div
        className="hidden md:flex"
        style={{ gap: 40, alignItems: "center" }}
      >
        <a href="#learn" className="nav-link">学習方法</a>
        <a href="#features" className="nav-link">機能</a>
        <a href="#pricing" className="nav-link">料金</a>
        <a href="#faq" className="nav-link">FAQ</a>
      </div>

      {/* CTA button */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "#fff",
          color: "#5460f5",
          fontFamily: "Figtree, sans-serif",
          fontWeight: 800,
          fontSize: 14,
          padding: "8px 20px",
          borderRadius: 99,
          textDecoration: "none",
          transition: "opacity 0.2s, transform 0.2s",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.9";
          (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#5460f5">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        App Store
      </a>
    </nav>
  );
}
