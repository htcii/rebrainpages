const APP_STORE_URL =
  "https://apps.apple.com/jp/app/rebrain-%E5%8D%98%E8%AA%9E%E5%B8%B3%E3%82%A2%E3%83%97%E3%83%AA/id6742406188";

export default function Download() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-700/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <div className="glass rounded-3xl p-12 border border-violet-500/20">
          <div className="text-6xl mb-6">🧠</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            今すぐ<span className="gradient-text">ReBrain</span>を
            <br />
            はじめよう
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
            無料で始められます。AIと一緒に、あなたの記憶力を最大化しましょう。
          </p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 font-bold px-10 py-5 rounded-2xl hover:bg-white/90 transition-all shadow-2xl hover:shadow-violet-500/30 hover:scale-105 text-lg"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500 font-normal">App Store からダウンロード</div>
              <div className="text-xl leading-tight">無料で始める</div>
            </div>
          </a>

          <p className="text-white/30 text-sm mt-6">
            iOS 16.0 以上対応 • App Store にて公開中
          </p>
        </div>
      </div>
    </section>
  );
}
