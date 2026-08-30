import type { MetadataRoute } from "next";
import { stories } from "./stories/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/stories", "/about", "/privacy", "/terms", "/contact"];
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `https://wondly.net${route || "/"}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
    ...(route === "" ? { images: ["https://wondly.net/og.png"] } : {}),
  }));
  const storyRoutes: MetadataRoute.Sitemap = stories.map((story) => ({
    url: `https://wondly.net/stories/${story.slug}`,
    lastModified: new Date(story.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticRoutes, ...storyRoutes];
}
