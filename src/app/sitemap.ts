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
    {
      url: `${baseUrl}/experiencias`,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gastronomia-bodegas-galicia`,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nautica-galicia`,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/excursiones-privadas-galicia`,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cultura-naturaleza-galicia`,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/empresas`,
      lastModified: new Date("2026-09-03"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team-building-galicia`,
      lastModified: new Date("2026-09-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/eventos-corporativos-galicia`,
      lastModified: new Date("2026-09-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guias`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guias/rias-baixas`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guias/restaurantes-michelin-galicia`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guias/costa-da-morte`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guias/ribeira-sacra`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guias/islas-atlanticas`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guias/santiago-de-compostela`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guias/vinos-denominaciones-origen-galicia`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guias/cuando-viajar-galicia`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guias/viaje-grupo-galicia`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
