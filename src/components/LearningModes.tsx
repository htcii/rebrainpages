"use client";

import { useState } from "react";
import Image from "next/image";

const modes = [
  { id: "flash", label: "フラッシュカード", icon: "🃏" },
  { id: "typing", label: "タイピング", icon: "⌨️" },
  { id: "quiz", label: "クイズ", icon: "🎯" },
  { id: "red", label: "赤シート", icon: "🟥" },
];

const modeDetails: Record<string, { title: string; desc: string }> = {
  flash: {
    title: "フラッシュカード",
    desc: "カードをスワイプして素早く記憶を確認。スクロールするだけで意味を確認できます。",
  },
  typing: {
    title: "タイピング",
    desc: "実際にスペルを入力して書き取り力を強化。入力することで記憶の定着率が大幅にアップします。",
  },
  quiz: {
    title: "クイズ",
    desc: "4択クイズで理解度を確認。複数の選択肢から選ぶことで識別力と文脈理解を深めます。",
  },
  red: {
    title: "赤シートモード",
    desc: "\"赤シート\"みたいに隠して学習。昔ながらの暗記法をデジタルで快適に再現しました。",
  },
};

export default function LearningModes() {
  const [active, setActive] = useState("flash");

  return (
    <section
      id="learn"
      className="dotted-top"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "80px 30px 100px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <p className="feature-tag" style={{ marginBottom: 12 }}>Learning</p>
          <h2
            style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#fff",
              margin: "0 0 12px",
            }}
          >
            様々な学習方法
          </h2>
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 500,
              fontSize: 16,
              color: "rgba(255,255,255,0.65)",
              margin: 0,
            }}
          >
            様々な学習方法で飽きずに学習できます
          </p>
        </div>

        {/* Mode tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 22px",
                borderRadius: 99,
                border: active === m.id
                  ? "2px solid rgba(255,255,255,0.8)"
                  : "2px solid rgba(255,255,255,0.2)",
                background: active === m.id
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(255,255,255,0.05)",
                color: active === m.id ? "#fff" : "rgba(255,255,255,0.6)",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span>{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div
          className="glass-card"
          style={{
            borderRadius: 24,
            padding: "40px 48px",
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>
            {modes.find((m) => m.id === active)?.icon}
          </div>
          <h3
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 800,
              fontSize: 24,
              color: "#fff",
              margin: "0 0 12px",
            }}
          >
            {modeDetails[active].title}
          </h3>
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {modeDetails[active].desc}
          </p>
        </div>

        {/* Screenshot */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 60,
          }}
        >
          <Image
            src="/assets/s-1920x1920_v-frms_webp_7a1f2636-6414-4345-b432-d028ef354759_regular.webp"
            alt="学習モードのスクリーンショット"
            width={380}
            height={380}
            style={{
              maxWidth: "min(380px, 90vw)",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
