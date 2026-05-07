import { Brain, RotateCcw, Zap, Search, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI学習分析",
    description:
      "苦手な単語を自動検出し、忘れそうなタイミングで復習をスケジューリング。間隔反復法で記憶の定着率を最大化します。",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: RotateCcw,
    title: "スマート復習スケジュール",
    description:
      "エビングハウスの忘却曲線に基づき、最適な復習タイミングを自動計算。無駄なく効率的に学習できます。",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Zap,
    title: "4つの学習モード",
    description:
      "フラッシュカード・タイピング・4択クイズ・赤シートから、その日の気分や目的に合わせてモードを選択。",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: Sparkles,
    title: "AI単語帳生成",
    description:
      "テキストや画像から単語帳を自動生成。テスト範囲の教科書を撮影するだけで、すぐに学習を開始できます。",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: Search,
    title: "高速単語検索",
    description:
      "学習中にわからない単語はその場で即検索。アプリを切り替える手間なく、学習リズムを崩さずに続けられます。",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Shield,
    title: "学習データ管理",
    description:
      "学習履歴・正答率・連続学習日数を可視化。グラフで成長を実感しながら、モチベーションを維持できます。",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Features</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            学習を、もっと賢く。
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            科学的な記憶メカニズムとAI技術を組み合わせた、次世代の暗記体験。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`glass rounded-2xl p-6 card-hover border ${f.border}`}
            >
              <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-4`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
