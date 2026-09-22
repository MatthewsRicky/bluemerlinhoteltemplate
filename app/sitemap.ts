import type { MetadataRoute } from "next";

import { rooms } from "@/data/rooms";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/rooms",
    "/experiences",
    "/kite-surfing",
    "/wellness",
    "/dining",
    "/weddings",
    "/gallery",
    "/contact",
    "/book",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority:
      route === "" ? 1 : route === "/rooms" || route === "/book" || route ==="/kite-surfing" ? 0.9 : 0.7,
  }));

  const roomPages = rooms.map((room) => ({
    url: `${siteConfig.url}/rooms/${room.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...roomPages];
}
