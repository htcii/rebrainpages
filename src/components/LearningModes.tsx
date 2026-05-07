const modes = [
  {
    emoji: "🃏",
    name: "フラッシュカード",
    desc: "左右スワイプで直感的に記憶を確認。スピーディーに大量の単語をこなせます。",
    tag: "定番",
    gradient: "from-violet-600/20 to-indigo-600/20",
    border: "border-violet-500/30",
    tagColor: "bg-violet-500/20 text-violet-300",
  },
  {
    emoji: "⌨️",
    name: "タイピング",
    desc: "実際にスペルを入力することで、書き取り力と記憶の定着度を同時に鍛えられます。",
    tag: "定着力UP",
    gradient: "from-blue-600/20 to-cyan-600/20",
    border: "border-blue-500/30",
    tagColor: "bg-blue-500/20 text-blue-300",
  },
  {
    emoji: "🎯",
    name: "4択クイズ",
    desc: "4つの選択肢から正解を選ぶクイズ形式。文脈理解と識別力を高めます。",
    tag: "理解度UP",
    gradient: "from-green-600/20 to-emerald-600/20",
    border: "border-green-500/30",
    tagColor: "bg-green-500/20 text-green-300",
  },
  {
    emoji: "🟥",
    name: "赤シートモード",
    desc: "赤いシートで答えを隠す、昔ながらの暗記法をデジタルで再現。紙の感覚でスラスラ覚えられます。",
    tag: "懐かしの学習法",
    gradient: "from-red-600/20 to-orange-600/20",
    border: "border-red-500/30",
    tagColor: "bg-red-500/20 text-red-300",
  },
];

export default function LearningModes() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Learning Modes</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            4つの学習モード
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            その日の気分や学習段階に合わせて、最適なモードで学べます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modes.map((m) => (
            <div
              key={m.name}
              className={`relative rounded-2xl p-6 card-hover border ${m.border} bg-gradient-to-br ${m.gradient} overflow-hidden`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{m.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg">{m.name}</h3>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${m.tagColor}`}>
                      {m.tag}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/[0.03] blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
