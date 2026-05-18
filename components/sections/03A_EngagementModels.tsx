const models = [
  {
    title: "Fractional Product Leadership",
    description:
      "Strategic product leadership for fintechs and digital organizations scaling complex initiatives.",
  },
  {
    title: "AI Transformation Advisory",
    description:
      "Operational AI enablement, workflow automation and transformation strategy.",
  },
  {
    title: "Delivery Acceleration",
    description:
      "Improving execution velocity, delivery alignment and operational scalability.",
  },
  {
    title: "Strategic Workshops",
    description:
      "Focused transformation sessions for leadership alignment, prioritization and execution planning.",
  },
];

export default function EngagementModels() {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
          Engagement Models
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mb-20">
          Flexible ways to support transformation initiatives.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model) => (
            <div
              key={model.title}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-10"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {model.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-lg">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
