export default function WhoIWorkWith() {
  const audiences = [
    "Fintechs scaling operations",
    "Payment infrastructure companies",
    "AI-enabled startups",
    "Innovation and transformation teams",
    "Enterprise modernization initiatives",
    "Digital product organizations",
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="uppercase text-xs tracking-[0.3em] text-zinc-500 mb-6">
          Who I Work With
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-16 max-w-4xl">
          Supporting organizations navigating operational complexity and digital transformation.
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-lg text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
