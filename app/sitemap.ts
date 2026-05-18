import type { MetadataRoute } from "next";
import { insights } from "@/content/insights";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    ...insights.map((insight) => ({
      url: `${siteConfig.url}/insights/${insight.slug}`,
      lastModified: new Date(insight.date),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
