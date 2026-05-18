const insights = [
  {
    title: "AI Operational Transformation in Fintech Organizations",
    category: "AI Transformation",
  },
  {
    title: "Why Payment Operations Become Bottlenecks at Scale",
    category: "Fintech",
  },
  {
    title: "Structuring Product Delivery Across Complex Teams",
    category: "Product Leadership",
  },
  {
    title: "Tokenization Beyond Hype: Operational Reality and Adoption",
    category: "Web3",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
          Insights & Thinking
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold max-w-5xl leading-tight mb-10">
          Perspectives on AI enablement, fintech operations and scalable transformation.
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-20">
          Sharing practical perspectives on operational complexity, product execution and modern digital transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((article) => (
            <div
              key={article.title}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 hover:bg-white/[0.04] transition"
            >
              <div className="text-cyan-400 text-sm mb-6">
                {article.category}
              </div>

              <h3 className="text-2xl font-semibold mb-8 leading-tight">
                {article.title}
              </h3>

              <button className="text-zinc-400 hover:text-white transition">
                Read Insight →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

