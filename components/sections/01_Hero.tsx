import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-clay">
          Business outcomes, AI strategy, digital systems
        </p>
        <h1 className="font-serif text-6xl leading-[0.95] text-ink text-balance md:text-8xl">
          Martin Mora
        </h1>
        <p className="mt-7 max-w-2xl text-xl leading-9 text-ink/72">
          I help leadership teams turn fuzzy ambition into executable systems: sharper strategy, smarter AI adoption,
          better products, and measurable commercial progress.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="#contact">Start a conversation</Button>
          <Button href="#insights" variant="secondary">
            Read the thinking
          </Button>
        </div>
      </Reveal>
      <Reveal className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-line bg-white/45 p-6 shadow-soft backdrop-blur">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,102,69,0.22),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(45,95,154,0.18),transparent_38%)]" />
        <div className="relative grid h-full content-between">
          <div className="grid grid-cols-3 gap-3">
            {["Strategy", "AI", "Product", "Growth", "Ops", "Data"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-paper/65 p-4 text-sm font-semibold text-ink/76">
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-line bg-ink p-6 text-paper">
            <p className="text-sm uppercase tracking-[0.18em] text-paper/50">Operating lens</p>
            <p className="mt-4 font-serif text-4xl leading-tight">Where strategy becomes a system.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
