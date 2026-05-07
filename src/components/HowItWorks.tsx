const steps = [
  {
    number: "01",
    title: "単語帳を作る",
    desc: "テキスト入力・AI自動生成・テンプレートから単語帳を作成。テスト範囲をすぐに学習開始できます。",
    emoji: "📚",
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    title: "好きなモードで学ぶ",
    desc: "フラッシュカード・タイピング・4択クイズ・赤シートから、その日に合ったモードを選択。",
    emoji: "🎮",
    color: "from-blue-500 to-cyan-600",
  },
  {
    number: "03",
    title: "AIが最適化してくれる",
    desc: "学習データをAIが分析し、忘れそうな単語を自動で復習リストへ追加。効率的に記憶が定着します。",
    emoji: "🤖",
    color: "from-pink-500 to-rose-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            たった3ステップ
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            シンプルな操作で、すぐに科学的な学習を始められます。
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.number} className="flex flex-col items-center text-center">
                <div className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${s.color} flex flex-col items-center justify-center mb-6 shadow-2xl`}>
                  <span className="text-4xl mb-1">{s.emoji}</span>
                  <span className="text-white/60 text-xs font-bold">STEP {i + 1}</span>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#0a0618] border border-violet-500/50 rounded-full flex items-center justify-center">
                    <span className="text-violet-400 text-xs font-black">{s.number.slice(1)}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
