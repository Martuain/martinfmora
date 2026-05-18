import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/content/insights";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Insights() {
  return (
    <section id="insights" className="section-shell py-24">
      <Reveal>
        <SectionHeader
          eyebrow="Insights"
          title="Thinking for leaders building the next operating model."
          copy="Short essays on strategy, AI, product systems, and the practical mechanics of execution."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {insights.map((insight) => (
          <Reveal key={insight.slug}>
            <Link
              href={`/insights/${insight.slug}`}
              className="group flex min-h-[310px] flex-col justify-between rounded-3xl border border-line bg-white/55 p-6 transition hover:-translate-y-1 hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em] text-clay">
                  <span>{insight.category}</span>
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-ink">{insight.title}</h3>
                <p className="mt-4 leading-7 text-ink/68">{insight.excerpt}</p>
              </div>
              <p className="mt-8 text-sm font-semibold text-ink/50">{insight.readTime}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
