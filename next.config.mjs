/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // =============================================
      // SPECIFIC WordPress URL redirects (from old site)
      // =============================================

      // HOME / corporativo
      {
        source: "/contacto/quienes-somos/",
        destination: "/#contacto",
        permanent: true,
      },
      {
        source: "/contacto/quienes-somos",
        destination: "/#contacto",
        permanent: true,
      },

      // /empresas now has its own page — redirect removed

      // VIAJES EN GRUPO / RECEPTIVO
      {
        source: "/homepages/viajes-a-medida/grupos/",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/grupos",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/agencia-online-fisica-galicia-viaje-novios/",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/agencia-online-fisica-galicia-viaje-novios",
        destination: "/receptivo-galicia",
        permanent: true,
      },

      // LUNAS DE MIEL / VIAJES A MEDIDA ANTIGUOS -> RECEPTIVO
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-vigo/",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-vigo",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-coruna/",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-coruna",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-santiago/",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-santiago",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-pontevedra/",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-pontevedra",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-lugo/",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-lugo",
        destination: "/receptivo-galicia",
        permanent: true,
      },

      // Variante AMP detectada
      {
        source: "/homepages/viajes-a-medida/lunas-de-miel-y-viajes-de-novios-en-coruna/:path*",
        has: [
          {
            type: "query",
            key: "amp",
          },
        ],
        destination: "/receptivo-galicia",
        permanent: true,
      },

      // TOURS PRIVADOS / CULTURA / PATRIMONIO / NATURALEZA
      {
        source: "/ruta-por-los-palacios-gallegos/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/ruta-por-los-palacios-gallegos",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/camino-de-santiago-pazos/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/camino-de-santiago-pazos",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/patrimonio-humanidad-en-galicia/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/patrimonio-humanidad-en-galicia",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/arquitectura-modernista-en-coruna/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/arquitectura-modernista-en-coruna",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/lugares-naturaleza-salvaje-galicia/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/lugares-naturaleza-salvaje-galicia",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/un-paseo-por-el-vigo-industrial/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/un-paseo-por-el-vigo-industrial",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/las-6-visitas-imprescindibles-monumentos/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/las-6-visitas-imprescindibles-monumentos",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/los-pazos-gallegos-mas-bellos/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/los-pazos-gallegos-mas-bellos",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/casas-de-indianos-en-ribadeo/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/casas-de-indianos-en-ribadeo",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/naturaleza-salvaje-rias-altas/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/naturaleza-salvaje-rias-altas",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/coruna-especial/ruta-privada-coruna-y-las-marinas-corunesas/",
        destination: "/tours-privados-galicia",
        permanent: true,
      },
      {
        source: "/coruna-especial/ruta-privada-coruna-y-las-marinas-corunesas",
        destination: "/tours-privados-galicia",
        permanent: true,
      },

      // VIAJES EN GRUPO / GASTRONOMÍA / EXPERIENCIAS
      {
        source: "/5-restaurantes-rias-baixas-marisco/",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/5-restaurantes-rias-baixas-marisco",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/fiestas-gastronomicas-galicia/",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/fiestas-gastronomicas-galicia",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/los-5-mejores-paradores-de-galicia/",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/los-5-mejores-paradores-de-galicia",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/los-mejores-vinos-de-la-ribeira-sacra/",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/los-mejores-vinos-de-la-ribeira-sacra",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/las-5-mejores-playas-de-galicia/",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/las-5-mejores-playas-de-galicia",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/coruna-especial/conoce-coruna-navegando/",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },
      {
        source: "/coruna-especial/conoce-coruna-navegando",
        destination: "/viajes-grupos-galicia",
        permanent: true,
      },

      // CASOS RAROS / MANTENER CERCA DE INTENCIÓN TURÍSTICA
      {
        source: "/los-mejores-consejos-para-reservar-viajes-del-inmerso-en-espana/",
        destination: "/receptivo-galicia",
        permanent: true,
      },
      {
        source: "/los-mejores-consejos-para-reservar-viajes-del-inmerso-en-espana",
        destination: "/receptivo-galicia",
        permanent: true,
      },

      // =============================================
      // GENERIC catch-all patterns for remaining WP URLs
      // =============================================

      // WordPress blog and post patterns
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*", destination: "/", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})/:slug*", destination: "/", permanent: true },

      // WordPress categories and tags
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/tag/:path*", destination: "/", permanent: true },
      { source: "/categoria/:path*", destination: "/", permanent: true },
      { source: "/etiqueta/:path*", destination: "/", permanent: true },

      // WordPress author and archive pages
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/archives/:path*", destination: "/", permanent: true },

      // WordPress pagination
      { source: "/page/:num(\\d+)", destination: "/", permanent: true },

      // WordPress feeds
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },

      // WordPress system paths
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },

      // WordPress common pages (Spanish WP sites)
      { source: "/contacto", destination: "/#contacto", permanent: true },
      { source: "/sobre-nosotros", destination: "/receptivo-galicia", permanent: true },
      { source: "/quienes-somos", destination: "/receptivo-galicia", permanent: true },
      { source: "/servicios", destination: "/receptivo-galicia", permanent: true },
      { source: "/servicios/:path*", destination: "/receptivo-galicia", permanent: true },

      // Generic old service page patterns
      { source: "/tours", destination: "/tours-privados-galicia", permanent: true },
      { source: "/tours/:path*", destination: "/tours-privados-galicia", permanent: true },
      { source: "/excursiones", destination: "/excursiones-privadas-galicia", permanent: true },
      { source: "/excursiones/:path*", destination: "/tours-privados-galicia", permanent: true },
      // /viajes now has its own page — redirect removed
      { source: "/viajes/:path*", destination: "/viajes-grupos-galicia", permanent: true },
      { source: "/grupos", destination: "/viajes-grupos-galicia", permanent: true },
      { source: "/grupos/:path*", destination: "/viajes-grupos-galicia", permanent: true },
      { source: "/incentivos", destination: "/incentivos-empresa-galicia", permanent: true },
      { source: "/incentivos/:path*", destination: "/incentivos-empresa-galicia", permanent: true },
      { source: "/logistica", destination: "/logistica-servicios-galicia", permanent: true },
      { source: "/logistica/:path*", destination: "/logistica-servicios-galicia", permanent: true },

      // Catch-all for homepages subpaths not matched above
      { source: "/homepages/:path*", destination: "/receptivo-galicia", permanent: true },
      { source: "/coruna-especial/:path*", destination: "/tours-privados-galicia", permanent: true },

      // WordPress search
      { source: "/search/:path*", destination: "/", permanent: true },

      // WordPress sample page and privacy
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/politica-de-privacidad", destination: "/", permanent: false },
      { source: "/politica-de-cookies", destination: "/", permanent: false },
      { source: "/aviso-legal", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
