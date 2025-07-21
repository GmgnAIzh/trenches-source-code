import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: "如何在噪音中发现 Alpha：早期信号的识别与验证",
    excerpt: "市场充满了无数的噪音和虚假信号。本文将探讨我们如何运用多维度数据分析，结合链上行为与社交情绪，来识别那些真正具有潜力的早期 Alpha 信号..."
  },
  {
    id: 2,
    title: "分析师工具论：为什么原生桌面端是更优选择？",
    excerpt: "网页工具很方便，但对于需要毫秒级响应和绝对稳定性的专业分析师来说，原生桌面应用是不可替代的。本文将深入探讨其在性能、稳定性和专注度上的核心优势..."
  }
];

export default function BlogIndex() {
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
          <h1 className="text-5xl font-bold text-white mb-6 text-center">文章与见解</h1>
          <p className="text-xl text-zinc-400 text-center mb-12">我们对市场分析工具与方法的深度思考。</p>
          <div className="space-y-12">
            {posts.map((post) => (
              <div key={post.id}>
                <h2 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"><Link href={`/blog/${post.id}`}>{post.title}</Link></h2>
                <p className="text-lg text-zinc-400 mt-2">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-blue-400 font-bold mt-4 inline-block">阅读全文 &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
