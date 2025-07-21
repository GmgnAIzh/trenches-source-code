import Link from 'next/link';

const roadmap = [
  {
    quarter: "2025 Q3",
    title: "macOS 版本发布",
    description: "将完整的原生桌面体验带给苹果用户，实现全平台覆盖。",
    status: "进行中"
  },
  {
    quarter: "2025 Q4",
    title: "新增数据源整合",
    description: "整合更多链上数据平台与社交媒体，提供更全面的信号聚合。",
    status: "计划中"
  },
  {
    quarter: "2026 Q1",
    title: "AI 策略辅助系统",
    description: "引入 AI 模型，根据您的习惯辅助生成和优化分析策略。",
    status: "探索中"
  }
];

export default function RoadmapPage() {
  return (
    <div className="bg-[#111827] text-zinc-300 min-h-screen font-sans">
      <header className="bg-[#111827]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">智讯核心</Link>
          <nav>
            <Link href="/contact" className="text-zinc-400 hover:text-white">申请试用</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6 text-center">产品路线图</h1>
            <p className="text-xl text-zinc-400 text-center mb-12">我们致力于持续创新，不断为您带来更强大的功能。这是我们未来的发展方向。</p>
            <div className="space-y-8 border-l-2 border-blue-500/30 ml-4">
              {roadmap.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-3.5 top-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#111827]"></div>
                  <p className={`absolute -left-2 top-8 w-px h-full ${index === roadmap.length - 1 ? 'bg-transparent' : 'bg-blue-500/30'}`}></p>
                  <p className="text-blue-400 font-bold mb-1">{item.quarter}</p>
                  <h2 className="text-3xl font-bold text-white mb-2">{item.title} <span className="text-sm align-top text-yellow-400 bg-yellow-900/50 px-2 py-1 rounded">{item.status}</span></h2>
                  <p className="text-lg text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    </div>
  );
}
