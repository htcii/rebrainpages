export default function Footer() {
  return (
    <footer
      className="dotted-top"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "60px 30px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 32,
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 800,
                fontSize: 28,
                color: "#fff",
                margin: "0 0 8px",
              }}
            >
              ReBrain
            </h3>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                maxWidth: 260,
                lineHeight: 1.6,
              }}
            >
              可愛いデザインでスマートに学習できる iOS向けの暗記・フラッシュカードアプリ
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              gap: 48,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                デベロッパー
              </p>
              <a
                href="https://izanami.dev/user/htci"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{ fontSize: 14 }}
              >
                htci
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                リンク
              </p>
              {[
                { label: "お問い合せ", href: "#faq" },
                { label: "フィードバック", href: "#faq" },
                { label: "利用規約", href: "#" },
                { label: "プライバシーポリシー", href: "#" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="nav-link" style={{ fontSize: 14 }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 400,
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}
          >
            ©︎ 2025 ReBrain
          </p>
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 400,
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}
          >
            Made with ♡ by{" "}
            <a
              href="https://izanami.dev/user/htci"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}
            >
              htci
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
