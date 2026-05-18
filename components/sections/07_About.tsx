export default function About() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="aspect-square rounded-[40px] bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/5 overflow-hidden" />

        <div>
          <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
            About
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-10">
            Helping organizations navigate complexity through structured transformation leadership.
          </h2>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Over the past 15+ years, I’ve worked across banking, fintech, blockchain and digital product ecosystems leading transformation initiatives involving operations, delivery, platform scalability and organizational execution.
            </p>

            <p>
              My experience combines enterprise-scale environments with high-growth innovation initiatives, allowing me to bridge strategic business objectives with technical and operational realities.
            </p>

            <p>
              Today, I help organizations modernize operational systems, accelerate delivery execution and structure scalable AI-enabled transformation initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

