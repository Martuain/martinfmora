export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "strategy-that-survives-contact-with-delivery",
    title: "Strategy That Survives Contact With Delivery",
    excerpt:
      "The strongest operating strategies are designed around decision quality, execution loops, and visible tradeoffs.",
    category: "Operating Strategy",
    date: "2026-01-12",
    readTime: "5 min",
    body: [
      "A strategy becomes useful when it changes what teams choose to do next. That means it needs a direct relationship with delivery, not just an elegant narrative.",
      "The most resilient plans make tradeoffs visible, connect work to measurable business outcomes, and create review loops that show whether the system is learning.",
      "Leaders do not need more dashboards. They need fewer, sharper signals that help them decide what to stop, what to accelerate, and where the next bottleneck is forming."
    ]
  },
  {
    slug: "ai-is-an-operating-model-problem",
    title: "AI Is an Operating Model Problem",
    excerpt:
      "AI value usually comes from redesigning workflows, incentives, and feedback loops around new capability.",
    category: "AI Transformation",
    date: "2026-02-06",
    readTime: "6 min",
    body: [
      "AI pilots are easy to start and hard to scale because the hard part is rarely the model. The hard part is the operating model around the model.",
      "Teams need clear ownership, quality thresholds, escalation paths, and measurement systems before automation becomes trustworthy enough to compound.",
      "The useful question is not where AI can be inserted. It is where the shape of work should change now that judgment, generation, and analysis can move faster."
    ]
  },
  {
    slug: "the-best-digital-products-reduce-managerial-drag",
    title: "The Best Digital Products Reduce Managerial Drag",
    excerpt:
      "A high-leverage product removes ambiguity from coordination and gives teams cleaner ways to act.",
    category: "Digital Products",
    date: "2026-03-18",
    readTime: "4 min",
    body: [
      "Digital products are often judged by adoption, but the deeper signal is whether they reduce the coordination cost of running the business.",
      "Great internal tools compress context, expose exceptions, and make the next action obvious without flattening the complexity of the work.",
      "The product is doing its job when leaders spend less time asking for status and more time making better decisions."
    ]
  }
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
