import { BarChart3, BrainCircuit, Gauge, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const outcomes = [
  {
    icon: Gauge,
    title: "Sharper executive decisions",
    copy: "Translate ambition into decision frames, outcome metrics, and operating priorities that teams can actually use."
  },
  {
    icon: BrainCircuit,
    title: "AI adoption with business logic",
    copy: "Identify where AI changes workflow economics, not just where a tool can be added."
  },
  {
    icon: Workflow,
    title: "Systems that reduce drag",
    copy: "Design product, data, and process loops that remove avoidable coordination cost."
  },
  {
    icon: BarChart3,
    title: "Progress you can measure",
    copy: "Build leading indicators and review rhythms that show whether strategy is compounding."
  }
];

export function BusinessOutcomes() {
  return (
    <section id="outcomes" className="section-shell py-24">
      <Reveal>
        <SectionHeader
          eyebrow="Business outcomes"
          title="The work is judged by what changes in the business."
          copy="Everything connects back to decisions, momentum, and measurable operating progress."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {outcomes.map((outcome, index) => (
          <Reveal
            key={outcome.title}
            transition={{ delay: index * 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-line bg-white/55 p-6 shadow-sm backdrop-blur"
          >
            <outcome.icon className="size-6 text-clay" aria-hidden="true" />
            <h3 className="mt-6 text-xl font-semibold text-ink">{outcome.title}</h3>
            <p className="mt-3 leading-7 text-ink/68">{outcome.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
