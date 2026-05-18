import { Bot, ChartSpline, Layers3, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const expertise = [
  { icon: Target, label: "Commercial strategy" },
  { icon: Bot, label: "AI transformation" },
  { icon: Layers3, label: "Digital product systems" },
  { icon: ChartSpline, label: "Growth and analytics" },
  { icon: ShieldCheck, label: "Governance and quality" },
  { icon: Sparkles, label: "Executive narratives" }
];

export function ExpertiseEcosystem() {
  return (
    <section id="expertise" className="section-shell py-24">
      <Reveal>
        <SectionHeader
          eyebrow="Expertise ecosystem"
          title="Connected capabilities, applied as one operating system."
          copy="The value is in combining strategy, AI, product, data, and leadership communication without treating them as separate workstreams."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item) => (
          <Reveal key={item.label} className="rounded-3xl border border-line bg-white/55 p-6">
            <item.icon className="size-6 text-cobalt" aria-hidden="true" />
            <p className="mt-8 text-xl font-semibold text-ink">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
