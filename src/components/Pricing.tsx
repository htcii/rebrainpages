const APP_STORE_URL =
  "https://apps.apple.com/jp/app/rebrain-%E5%8D%98%E8%AA%9E%E5%B8%B3%E3%82%A2%E3%83%97%E3%83%AA/id6742406188";

const freeFeatures = [
  "アプリ全体に広告なし",
  "セットの作成（3アイテムまで）",
  "すべての学習方法",
  "スマート学習機能",
];

const proFeatures = [
  "フリープランの全機能",
  "セットの作成（無制限）",
  "セットのiCloud同期",
  "アプリテーマ・フォントの変更",
  "アプリの背景画像の設定",
  "アプリアイコンの変更",
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.15)" />
      <path
        d="M5 8l2 2 4-4"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="dotted-top"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "80px 30px 100px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <p className="feature-tag" style={{ marginBottom: 12 }}>Pricing</p>
          <h2
            style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#fff",
              margin: "0 0 12px",
            }}
          >
            料金
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 400,
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            margin: "0 0 48px",
            lineHeight: 1.7,
          }}
        >
          広告なし・学習に関する機能は無料で提供
          <br />
          少しでも多くの方の学習のサポートができればいいなと、、！！
          <br />
          支援していただける方は有料プランをご購入いただけると開発の励みになります；；
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            maxWidth: 780,
            margin: "0 auto",
          }}
        >
          {/* Free */}
          <div
            className="glass-card"
            style={{ borderRadius: 24, padding: "40px 36px" }}
          >
            <h3
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 8px",
              }}
            >
              Free
            </h3>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontWeight: 800,
                  fontSize: 52,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                ¥ 0
              </span>
            </div>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                border: "2px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                padding: "12px",
                borderRadius: 12,
                textDecoration: "none",
                margin: "20px 0 24px",
                transition: "background 0.2s",
              }}
            >
              無料でダウンロード
            </a>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {freeFeatures.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckIcon />
                  <span
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div
            style={{
              borderRadius: 24,
              padding: "40px 36px",
              background: "rgba(255,255,255,0.18)",
              border: "2px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(20px)",
              position: "relative",
            }}
          >
            <h3
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "rgba(255,255,255,0.8)",
                margin: "0 0 8px",
              }}
            >
              ReBrain Pro
            </h3>

            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontWeight: 800,
                  fontSize: 52,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                ¥ 250
              </span>
              <span
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "rgba(255,255,255,0.6)",
                  paddingBottom: 8,
                }}
              >
                / 月
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 0",
              }}
            >
              年払い¥980/年 &nbsp;|&nbsp; 買い切り版¥1,800
            </p>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: "#fff",
                color: "#5460f5",
                fontFamily: "Figtree, sans-serif",
                fontWeight: 800,
                fontSize: 15,
                padding: "13px",
                borderRadius: 12,
                textDecoration: "none",
                margin: "20px 0 24px",
                transition: "opacity 0.2s",
              }}
            >
              割引を利用する
            </a>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {proFeatures.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckIcon />
                  <span
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                margin: "20px 0 0",
                textAlign: "center",
              }}
            >
              またはこちらからも支援できます
              <br />
              <a
                href="https://www.buymeacoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}
              >
                Buy me a coffee ☕
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
