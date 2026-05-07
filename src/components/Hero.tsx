import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/rebrain-%E5%8D%98%E8%AA%9E%E5%B8%B3%E3%82%A2%E3%83%97%E3%83%AA/id6742406188";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          padding: "0 30px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        {/* Left: text content */}
        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            paddingTop: 80,
            paddingBottom: 60,
          }}
        >
          <h1
            style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(64px, 8vw, 100px)",
              color: "#fff",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            ReBrain
          </h1>
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(18px, 2.5vw, 26px)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: 480,
            }}
          >
            可愛いデザインでスマートに学習できる
            <br />iOS向けの暗記・フラッシュカードアプリ
          </p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#fff",
              color: "#5460f5",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 800,
              fontSize: 18,
              padding: "14px 32px",
              borderRadius: 99,
              textDecoration: "none",
              width: "fit-content",
              transition: "transform 0.2s, opacity 0.2s",
              marginTop: 8,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#5460f5">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store からダウンロード
          </a>

          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 400,
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            単語はアプリ内に含まれていません。ご自身で登録して学習することができます
            <br />
            画像はイメージです。アップデートにより変更される場合があります
          </p>

          <p
            style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
              margin: 0,
            }}
          >
            iOS18.2以上のiPhone/iPadで利用可能
          </p>
        </div>

        {/* Right: phone screenshot */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 80,
          }}
        >
          <Image
            src="/assets/s-1920x1920_v-frms_webp_a22e8a77-5586-4512-95a7-0030ebc690d3_regular.webp"
            alt="ReBrain アプリ画面"
            width={420}
            height={420}
            style={{
              maxWidth: "min(420px, 90vw)",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.25))",
            }}
            priority
          />
        </div>
      </div>

      {/* Decorative large text */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <p className="deco-text">ReBrain</p>
      </div>
    </section>
  );
}
