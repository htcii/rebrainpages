import Image from "next/image";

const moreFeatures = [
  {
    icon: "↕️",
    tag: "FEATURE",
    title: "並び替えとフィルタで効率的に",
    desc: "様々な順番で並び替え可能。苦手順にするとユーザーが苦手だと感じている順番に表示できます。学習したい単語をブックマークすることでそれらの単語だけ学習できます。",
  },
  {
    icon: "🔍",
    tag: "FEATURE",
    title: "わからない単語を即検索",
    desc: "わからない単語があったら「QuickSearch」アプリ内ブラウザで即検索できます。検索エンジンを変更することができます。現在対応：Google, Perplexity, ChatGPT, Weblio",
  },
  {
    icon: "📡",
    tag: "FEATURE",
    title: "セットを近くの人と共有",
    desc: "近距離共有を使用して近くの人とセットの単語を共有できます。友達が作ったセットを自分の端末でプレイしたり友達にセットをあげることができます。",
  },
  {
    icon: "⬆️",
    tag: "FEATURE",
    title: "連続学習でレベルを上げよう",
    desc: "たくさん学習・毎日学習することでアプリ内レベルをあげることができます！友達と競ってみてね✌🏻",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Smart Learning */}
      <div
        className="dotted-top"
        style={{
          padding: "80px 30px 100px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 380px" }}>
            <p className="feature-tag" style={{ marginBottom: 12 }}>Smart Learning</p>
            <h2
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#fff",
                margin: "0 0 20px",
              }}
            >
              スマート学習
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 16px",
              }}
            >
              忘却曲線に基づいた効率的な学習。
            </p>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400,
                fontSize: 15,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              忘却曲線に基づき、1回目の学習の後に、<strong style={{ color: "rgba(255,255,255,0.85)" }}>10分後・1時間後・1日後・1週間後・1ヶ月後</strong>と、自動で復習間隔を調整し、しっかりと定着するような学習サイクルを行える機能です。
              <br /><br />
              あまり定着していないカードの復習間隔は短く、もう定着しているカードの復習間隔は長くなります。
            </p>
          </div>

          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              { label: "1回目", time: "学習直後" },
              { label: "2回目", time: "10分後" },
              { label: "3回目", time: "1時間後" },
              { label: "4回目", time: "1日後" },
              { label: "5回目", time: "1週間後" },
              { label: "6回目", time: "1ヶ月後" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "12px 20px",
                  borderRadius: 12,
                  minWidth: 220,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 800,
                    fontSize: 13,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 推しと学習 + テーマ (Pro) */}
      <div
        className="dotted-top"
        style={{ padding: "80px 30px 100px" }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
          }}
        >
          {/* 推しと学習 */}
          <div
            className="glass-card"
            style={{ borderRadius: 24, padding: "40px 36px" }}
          >
            <span className="badge-pro" style={{ marginBottom: 20, display: "inline-block" }}>Pro</span>
            <h3
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 800,
                fontSize: 28,
                color: "#fff",
                margin: "0 0 12px",
              }}
            >
              推しと学習 🎀
            </h3>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400,
                fontSize: 15,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              アプリの背景に好きな画像を設定できます。
              <br />
              <br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>こちらの機能はPro限定です</span>
            </p>
          </div>

          {/* 様々なテーマ */}
          <div
            className="glass-card"
            style={{ borderRadius: 24, padding: "40px 36px" }}
          >
            <span className="badge-pro" style={{ marginBottom: 20, display: "inline-block" }}>Pro</span>
            <h3
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 800,
                fontSize: 28,
                color: "#fff",
                margin: "0 0 12px",
              }}
            >
              様々なテーマ 🎨
            </h3>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400,
                fontSize: 15,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              アプリの色やフォント、アイコンなどをカスタマイズできます。
              <br />
              <br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>こちらの機能はPro限定です</span>
            </p>
          </div>
        </div>
      </div>

      {/* More Features */}
      <div
        className="dotted-top"
        style={{ padding: "80px 30px 100px" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="feature-tag" style={{ marginBottom: 12 }}>More Features</p>
            <h2
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#fff",
                margin: 0,
              }}
            >
              もっと様々な機能
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {moreFeatures.map((f) => (
              <div
                key={f.title}
                className="glass-card"
                style={{
                  borderRadius: 20,
                  padding: "32px 28px",
                  transition: "transform 0.2s",
                }}
              >
                <p
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 700,
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    margin: "0 0 8px",
                  }}
                >
                  {f.tag}
                </p>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 800,
                    fontSize: 17,
                    color: "#fff",
                    margin: "0 0 10px",
                    lineHeight: 1.4,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
