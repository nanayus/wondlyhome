import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/privacy", "/terms", "/contact"];
  return routes.map((route) => ({ url: `https://wondly.net${route}`, lastModified: new Date("2026-08-27"), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
