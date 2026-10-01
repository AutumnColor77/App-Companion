import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/download", priority: 0.9 },
  { path: "/faq", priority: 0.7 },
  { path: "/qa", priority: 0.5 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/cheese-stick", priority: 0.9 },
  { path: "/cheese-stick/guide", priority: 0.8 },
  { path: "/cheese-stick/faq", priority: 0.7 },
  { path: "/cheese-stick/privacy", priority: 0.3 },
  { path: "/cheese-stick/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
