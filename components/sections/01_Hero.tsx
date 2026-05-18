import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <div className="uppercase tracking-[0.3em] text-cyan-400 text-xs mb-6">
          AI • Fintech • Product Transformation
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-8">
          Helping fintechs modernize operations and scale digital products.
        </h1>
        <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-10">
          Fractional product and transformation leadership for organizations navigating AI enablement, operational complexity and platform scale.
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
