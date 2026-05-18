import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="bg-white/45 py-24">
      <div className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <Reveal>
          <SectionHeader eyebrow="About" title="A practical partner for ambiguous, high-leverage work." />
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-8 text-ink/72">
          <p>
            I work with leaders who need to connect vision with execution: founders, operators, product teams, and
            organizations moving through AI and digital change.
          </p>
          <p>
            My role is to make the work clearer, sharper, and more useful. That often means translating complexity
            into priorities, turning ideas into systems, and building the decision loops that keep momentum alive.
          </p>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {["Strategic clarity", "Product discipline", "AI pragmatism"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-paper/70 p-4 text-sm font-bold text-ink/72">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
