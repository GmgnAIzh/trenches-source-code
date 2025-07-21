import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: "跨链聚合分析",
    description: "打破信息孤岛，在一个界面中聚合分析来自不同区块链的核心数据，助您发现跨链机会。",
  },
  {
    title: "早期信号探测",
    description: "通过我们专有的算法，从海量地址和社媒讨论中，为您探测到市场情绪转向的早期信号。",
  },
  {
    title: "原生桌面性能",
    description: "享受比网页版更流畅、更稳定的性能。毫秒级响应，杜绝浏览器卡顿，让您的分析心流不被打断。",
  }
];

export default function Home() {
  return (
    <div className="bg-[#1a1a2e] min-h-screen flex flex-col font-mono text-zinc-300">
      <header className="w-full container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-white">奇点透镜</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="hover:text-[#f72585] transition-colors">功能</Link>
          <Link href="/about" className="hover:text-[#f72585] transition-colors">关于</Link>
          <Link href="/contact" className="hover:text-[#f72585] transition-colors">联系</Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-[#9d4edd]">
          洞察市场奇点
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8">
          一款为专业分析师打造的独立桌面客户端，聚合早期信号，助您在市场变化前做出决策。
        </p>
        <a href="#" className="inline-block bg-gradient-to-r from-[#9d4edd] to-[#7b2ff2] text-white text-xl uppercase font-bold py-3 px-8 pixel-corners shadow-[0_0_20px_#9d4edd] hover:shadow-[0_0_30px_#f72585] transition-shadow duration-300">
          <Download className="inline-block w-6 h-6 mr-3" />
          客户端
        </a>
      </main>

      <section id="features" className="w-full bg-[#101020]/50 py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white">核心功能</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#1a1a2e] p-6 border-2 border-[#5f0a87] pixel-corners">
                <h4 className="text-2xl font-bold mb-3 text-white">{feature.title}</h4>
                <p className="text-zinc-400 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full text-center p-6 text-zinc-600">
        <p>&copy; 2025 奇点透镜. All rights reserved.</p>
      </footer>
    </div>
  );
}
