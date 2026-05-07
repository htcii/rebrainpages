"use client";

import { useState } from "react";

const faqs = [
  {
    q: "どのデバイスで使用できますか？",
    a: "iOS18.2以降のiPhone/iPadで利用できます。他OS向けに配信する予定は今のところありません。",
  },
  {
    q: "単語のデータはどうやって入手すればいいですか？",
    a: "ご自身で単語を登録していただくか、近距離共有を使用してお友達と共有することも可能です。また、CSVのインポート・Quizletからのインポートにも対応しております。アプリ内のコミュニティからダウンロードすることもできます。",
  },
  {
    q: "アプリに不具合があります",
    a: "不具合を見つけた場合は、できるだけ詳細な情報（バグの内容、使用しているiOSバージョンなど）を添えて、アプリ内設定のフォームまたはこのサイトの下部「フィードバック」からご報告ください。このアプリは個人開発のため対応に時間がかかります。申し訳ありません。",
  },
  {
    q: "アプリを紹介したいです",
    a: "このサイトのリンクを共有していただければ嬉しいです。配信プラットフォーム・ブログなどでご紹介いただける場合はぜひ報告していただけると嬉しいです！",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="faq-item"
      style={{ padding: "0" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: "#fff",
            textAlign: "left",
          }}
        >
          {q}
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 20,
            flexShrink: 0,
            transition: "transform 0.2s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
            margin: "0 0 20px",
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="faq"
      className="dotted-top"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "80px 30px 100px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 60,
          }}
        >
          {/* Help Center CTA */}
          <div>
            <p className="feature-tag" style={{ marginBottom: 12 }}>Help Center</p>
            <h2
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#fff",
                margin: "0 0 20px",
              }}
            >
              お友達に紹介してください！
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400,
                fontSize: 15,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                margin: "0 0 28px",
              }}
            >
              アプリをより多くのユーザーに使ってもらうことでアプリがより良くなります！
            </p>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "ReBrain - 単語帳・暗記フラッシュカードアプリ",
                    url: "https://rebrainapp.studio.site/",
                  });
                }
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                color: "#5460f5",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                padding: "12px 28px",
                borderRadius: 99,
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
            >
              🔗 紹介する
            </button>
          </div>

          {/* FAQ */}
          <div>
            <p className="feature-tag" style={{ marginBottom: 12 }}>FAQ</p>
            <h2
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#fff",
                margin: "0 0 24px",
              }}
            >
              Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
