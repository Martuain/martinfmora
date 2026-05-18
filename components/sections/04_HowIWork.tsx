import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "Diagnose the operating reality",
    copy: "Map goals, constraints, decision flows, incentives, and current performance signals."
  },
  {
    title: "Design the highest-leverage moves",
    copy: "Separate attractive ideas from the moves that can change trajectory with the least noise."
  },
  {
    title: "Build the execution system",
    copy: "Shape product, process, AI, data, and governance into a practical cadence."
  },
  {
    title: "Measure, learn, and compound",
    copy: "Use tight feedback loops to improve decisions and keep the system honest."
  }
];

export function HowIWork() {
  return (
    <section id="process" className="bg-ink py-24 text-paper">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            eyebrow="How I work"
            title="Structured enough to create momentum. Flexible enough for reality."
            copy="The process is designed for senior teams that need clarity without theatre."
            tone="dark"
          />
        </Reveal>
        <div className="mt-12 grid gap-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              className="grid gap-5 rounded-3xl border border-white/12 bg-white/[0.06] p-6 md:grid-cols-[120px_1fr]"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-paper/55">
                <CheckCircle2 className="size-5 text-moss" aria-hidden="true" />
                Step {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-paper/68">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
