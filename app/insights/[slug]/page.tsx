import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getInsight, insights } from "@/content/insights";
import { siteConfig } from "@/lib/site";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    return {};
  }

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/insights/${insight.slug}`
    },
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
      publishedTime: insight.date
    }
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="section-shell py-16">
      <Link href="/#insights" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/65 hover:text-ink">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to insights
      </Link>
      <article className="mx-auto mt-14 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">{insight.category}</p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.02] text-ink text-balance md:text-7xl">{insight.title}</h1>
        <p className="mt-6 text-lg leading-8 text-ink/68">{insight.excerpt}</p>
        <div className="mt-6 border-y border-line py-4 text-sm font-semibold text-ink/50">
          {new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(insight.date))}
          {" / "}
          {insight.readTime}
        </div>
        <div className="mt-10 space-y-7 text-xl leading-9 text-ink/76">
          {insight.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
