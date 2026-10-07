import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/",         priority: 1.0, changeFrequency: "weekly"  },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about",    priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact",  priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy",  priority: 0.3, changeFrequency: "yearly"  },
    { path: "/terms",    priority: 0.3, changeFrequency: "yearly"  },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}