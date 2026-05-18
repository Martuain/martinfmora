const capabilities = [
  {
    title: "AI Enablement",
    description: "Operational automation, workflow intelligence and scalable AI adoption.",
  },
  {
    title: "Fintech Infrastructure",
    description: "Payments, reconciliation, orchestration and financial platform modernization.",
  },
  {
    title: "Product Leadership",
    description: "Roadmaps, delivery alignment, prioritization and product execution.",
  },
  {
    title: "Delivery Transformation",
    description: "Cross-functional execution, agile acceleration and operational alignment.",
  },
  {
    title: "Web3 & Tokenization",
    description: "Digital assets, blockchain ecosystems and tokenized operational models.",
  },
  {
    title: "Scalable Platforms",
    description: "Cloud-native systems, distributed architectures and scalability optimization.",
  },
];

export default function ExpertiseEcosystem() {
  return (
    <section id="expertise" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
          Expertise Ecosystem
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-5xl mb-10">
          Multidisciplinary transformation leadership across product, operations and modern digital infrastructure.
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-20">
          My work sits at the intersection of business strategy, operational transformation and scalable technology execution.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 hover:bg-white/[0.04] transition"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {capability.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

