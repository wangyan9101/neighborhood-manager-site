import type { MetadataRoute } from "next";
import { publicConfig } from "@/lib/config";
import { devlogs } from "@/content/devlogs";

const routes = ["", "/game", "/facilities", "/devlog", "/press", "/play", "/about", "/faq", ...devlogs.map(post => `/devlog/${post.slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${publicConfig.siteUrl}${route}`,
    changeFrequency: index === 0 || route === "/devlog" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/game" || route === "/facilities" ? 0.8 : 0.6,
  }));
}
