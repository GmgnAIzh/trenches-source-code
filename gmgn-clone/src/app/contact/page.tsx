import { Button } from "@/components/ui/button";
import { Mail, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] text-zinc-200 min-h-screen font-sans">
      <header className="bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">战壕市场分析简化软件</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-4">联系我们</h1>
            <p className="text-xl text-zinc-400">我们随时乐意听取您的意见和建议。</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center"><Mail className="mr-3 text-emerald-500"/>通过邮件联系</h2>
                <p className="text-zinc-400 mb-4">对于任何问题、技术支持或合作机会，请发送邮件至我们的官方邮箱。我们会在 24 小时内回复。</p>
                <a href="mailto:kots9603@gmail.com" className="text-emerald-400 font-bold text-lg hover:underline">kots9603@gmail.com</a>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center"><Send className="mr-3 text-emerald-500"/>社交媒体</h2>
                <p className="text-zinc-400 mb-4">在 X (Twitter) 上关注我们，获取最新的产品更新和市场见解。</p>
                <a href="https://x.com/gmgnai" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold text-lg hover:underline">@gmgnai on X</a>
            </div>
        </div>
      </main>
    </div>
  );
}
