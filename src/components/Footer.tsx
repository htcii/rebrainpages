import { Brain } from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/rebrain-%E5%8D%98%E8%AA%9E%E5%B8%B3%E3%82%A2%E3%83%97%E3%83%AA/id6742406188";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">ReBrain</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-white/40">
            <a href="#features" className="hover:text-white/70 transition-colors">機能</a>
            <a href="#how-it-works" className="hover:text-white/70 transition-colors">使い方</a>
            <a href="#pricing" className="hover:text-white/70 transition-colors">料金</a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              ダウンロード
            </a>
          </nav>

          <p className="text-white/20 text-sm">
            © 2025 ReBrain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
