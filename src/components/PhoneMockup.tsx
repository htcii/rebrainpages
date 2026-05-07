export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] animate-float">
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[44px] p-3 shadow-2xl border border-white/10 animate-pulse-glow">
        {/* Screen */}
        <div className="bg-[#13072e] rounded-[36px] overflow-hidden w-full aspect-[9/19.5]">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-2 text-white/60 text-[10px]">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2 border border-white/60 rounded-sm">
                <div className="w-2/3 h-full bg-white/60 rounded-sm" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="px-4 py-2 flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-[9px]">今日の学習</p>
                <p className="text-white font-bold text-sm">英単語 Level 3</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center">
                <span className="text-[10px]">🧠</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="bg-white/10 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-violet-500 to-blue-500 h-full rounded-full w-[60%]" />
            </div>
            <p className="text-white/40 text-[9px] -mt-1">18/30 カード完了</p>

            {/* Flashcard */}
            <div className="bg-gradient-to-br from-violet-900/80 to-indigo-900/80 border border-violet-500/30 rounded-2xl p-4 text-center shadow-lg">
              <p className="text-white/50 text-[9px] mb-1">英語 → 日本語</p>
              <p className="text-white text-xl font-bold mb-1">ephemeral</p>
              <p className="text-violet-300 text-[11px]">/ ɪˈfem.ər.əl /</p>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-white/80 text-[11px]">一時的な、はかない</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 mt-1">
              <button className="flex-1 bg-red-500/20 border border-red-500/40 rounded-xl py-2 text-red-400 text-[11px] font-medium">
                😕 難しい
              </button>
              <button className="flex-1 bg-green-500/20 border border-green-500/40 rounded-xl py-2 text-green-400 text-[11px] font-medium">
                ✓ 覚えた
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-1.5 mt-1">
              {[
                { label: "連続", value: "7日" },
                { label: "習得", value: "142" },
                { label: "正答率", value: "87%" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 rounded-xl p-2 text-center"
                >
                  <p className="text-violet-300 font-bold text-[11px]">{s.value}</p>
                  <p className="text-white/40 text-[9px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-2" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 rounded-[44px] bg-violet-600/20 blur-2xl scale-110" />
    </div>
  );
}
