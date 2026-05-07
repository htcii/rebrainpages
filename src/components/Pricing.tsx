import { Check, X } from "lucide-react";

const freeFeatures = [
  { label: "単語帳の作成・編集", available: true },
  { label: "フラッシュカード学習", available: true },
  { label: "タイピングモード", available: true },
  { label: "4択クイズモード", available: true },
  { label: "赤シートモード", available: true },
  { label: "基本の学習統計", available: true },
  { label: "AI単語帳生成（月3回）", available: true },
  { label: "カスタムテーマ", available: false },
  { label: "無制限AI生成", available: false },
  { label: "クラウド同期", available: false },
];

const proFeatures = [
  { label: "単語帳の作成・編集", available: true },
  { label: "フラッシュカード学習", available: true },
  { label: "タイピングモード", available: true },
  { label: "4択クイズモード", available: true },
  { label: "赤シートモード", available: true },
  { label: "詳細な学習統計・グラフ", available: true },
  { label: "AI単語帳生成（無制限）", available: true },
  { label: "カスタムテーマ", available: true },
  { label: "無制限AI生成", available: true },
  { label: "クラウド同期", available: true },
];

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/rebrain-%E5%8D%98%E8%AA%9E%E5%B8%B3%E3%82%A2%E3%83%97%E3%83%AA/id6742406188";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            まずは無料で始めよう
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            主要な学習機能はすべて無料。さらに便利な機能はProプランで。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free plan */}
          <div className="glass rounded-2xl p-8 border border-white/10">
            <div className="mb-6">
              <p className="text-white/50 text-sm font-semibold mb-1">Free</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-white">¥0</span>
                <span className="text-white/40 pb-1">/ 月</span>
              </div>
              <p className="text-white/40 text-sm mt-2">登録不要ですぐ始められます</p>
            </div>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center glass border border-white/20 text-white font-semibold py-3 rounded-xl hover:bg-white/10 transition-colors mb-8"
            >
              無料でダウンロード
            </a>

            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm">
                  {f.available ? (
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-white/20 flex-shrink-0" />
                  )}
                  <span className={f.available ? "text-white/70" : "text-white/30"}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro plan */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-br from-violet-900/60 to-indigo-900/60 border border-violet-500/40 overflow-hidden">
            <div className="absolute top-4 right-4 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-600/20 rounded-full blur-2xl" />

            <div className="mb-6">
              <p className="text-violet-300 text-sm font-semibold mb-1">Pro</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-white">¥480</span>
                <span className="text-white/40 pb-1">/ 月</span>
              </div>
              <p className="text-white/40 text-sm mt-2">年間プランなら¥3,800（約35%お得）</p>
            </div>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 rounded-xl transition-colors mb-8"
            >
              Proを試す（7日間無料）
            </a>

            <ul className="space-y-3 relative">
              {proFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span className="text-white/80">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
