import type { MetadataRoute } from "next";
import industries from "@/content/industries.json";
import services from "@/content/services.json";

const BASE = "https://aiquire.siprahub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/packages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/claude-training`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${BASE}/claude-training/business-track`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/claude-training/engineering-track`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${BASE}/industries`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((ind) => ({
    url: `${BASE}/industries/${ind.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
