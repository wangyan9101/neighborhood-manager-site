import type { MetadataRoute } from "next";
import { publicConfig } from "@/lib/config";

const routes = ["", "/game", "/facilities", "/devlog", "/media", "/play", "/about", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${publicConfig.siteUrl}${route}`,
    changeFrequency: index === 0 || route === "/devlog" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/game" || route === "/facilities" ? 0.8 : 0.6,
  }));
}
