import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suunia.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/receptivo-galicia`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/viajes-grupos-galicia`,
      lastModified: new Date("2025-06-10"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tours-privados-galicia`,
      lastModified: new Date("2025-06-10"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/incentivos-empresa-galicia`,
      lastModified: new Date("2025-06-10"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/logistica-servicios-galicia`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/viajes`,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grandes-rutas-galicia`,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/galicia-premium`,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
