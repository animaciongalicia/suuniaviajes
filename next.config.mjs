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
      // SECOND BATCH — 404s from Search Console (Sept 2026)
      // =============================================

      // Old blog posts → best matching guide page
      { source: "/los-rincones-de-la-ribeira-sacra-que-no", destination: "/guias/ribeira-sacra", permanent: true },
      { source: "/los-rincones-de-la-ribeira-sacra-que-no/", destination: "/guias/ribeira-sacra", permanent: true },
      { source: "/la-belleza-singular-de-combarro", destination: "/guias/rias-baixas", permanent: true },
      { source: "/la-belleza-singular-de-combarro/", destination: "/guias/rias-baixas", permanent: true },
      { source: "/rias-baixas-paradores-turismo", destination: "/guias/rias-baixas", permanent: true },
      { source: "/rias-baixas-paradores-turismo/", destination: "/guias/rias-baixas", permanent: true },
      { source: "/excursion-de-primaria-de-3-dias-por-las-rias-baixas", destination: "/guias/rias-baixas", permanent: true },
      { source: "/excursion-de-primaria-de-3-dias-por-las-rias-baixas/", destination: "/guias/rias-baixas", permanent: true },
      { source: "/la-increible-playa-de-las-catedrales", destination: "/guias", permanent: true },
      { source: "/la-increible-playa-de-las-catedrales/", destination: "/guias", permanent: true },
      { source: "/los-6-pueblos-mas-emblematicos-de", destination: "/guias", permanent: true },
      { source: "/los-6-pueblos-mas-emblematicos-de/", destination: "/guias", permanent: true },
      { source: "/norte-del-camino-de-santiago", destination: "/tours-privados-galicia", permanent: true },
      { source: "/norte-del-camino-de-santiago/", destination: "/tours-privados-galicia", permanent: true },
      { source: "/jardines-y-pazos-ruta-camelia", destination: "/tours-privados-galicia", permanent: true },
      { source: "/jardines-y-pazos-ruta-camelia/", destination: "/tours-privados-galicia", permanent: true },
      { source: "/ruta-del-vino-por-las-rias-baixas", destination: "/gastronomia-bodegas-galicia", permanent: true },
      { source: "/ruta-del-vino-por-las-rias-baixas/", destination: "/gastronomia-bodegas-galicia", permanent: true },
      { source: "/la-fiesta-del-marisco-de-o-grove", destination: "/gastronomia-bodegas-galicia", permanent: true },
      { source: "/la-fiesta-del-marisco-de-o-grove/", destination: "/gastronomia-bodegas-galicia", permanent: true },
      { source: "/descubre-galicia-en-cinco-dias", destination: "/grandes-rutas-galicia", permanent: true },
      { source: "/descubre-galicia-en-cinco-dias/", destination: "/grandes-rutas-galicia", permanent: true },
      { source: "/ruta-en-coche-de-3-dias-por-galicia", destination: "/grandes-rutas-galicia", permanent: true },
      { source: "/ruta-en-coche-de-3-dias-por-galicia/", destination: "/grandes-rutas-galicia", permanent: true },
      { source: "/un-camino-de-santiago-de-lujo", destination: "/galicia-premium", permanent: true },
      { source: "/un-camino-de-santiago-de-lujo/", destination: "/galicia-premium", permanent: true },
      { source: "/excursiones-organizadas-galicia", destination: "/excursiones-privadas-galicia", permanent: true },
      { source: "/excursiones-organizadas-galicia/", destination: "/excursiones-privadas-galicia", permanent: true },
      { source: "/oferta-salida-navegar-dormida-barco-sanxenxo", destination: "/nautica-galicia", permanent: true },
      { source: "/oferta-salida-navegar-dormida-barco-sanxenxo/", destination: "/nautica-galicia", permanent: true },
      { source: "/5-festivales-de-musica-en-galicia", destination: "/experiencias", permanent: true },
      { source: "/5-festivales-de-musica-en-galicia/", destination: "/experiencias", permanent: true },
      { source: "/descubre-los-campos-de-golf-de-galicia", destination: "/experiencias", permanent: true },
      { source: "/descubre-los-campos-de-golf-de-galicia/", destination: "/experiencias", permanent: true },
      { source: "/romeria-vikinga-en-catoira", destination: "/experiencias", permanent: true },
      { source: "/romeria-vikinga-en-catoira/", destination: "/experiencias", permanent: true },
      { source: "/la-guia-definitiva-para-planificar-la-luna-de-miel-de-ensueno", destination: "/receptivo-galicia", permanent: true },
      { source: "/la-guia-definitiva-para-planificar-la-luna-de-miel-de-ensueno/", destination: "/receptivo-galicia", permanent: true },
      { source: "/la-mejor-guia-para-viajeros-que-les-gusta-viajar-solo", destination: "/receptivo-galicia", permanent: true },
      { source: "/la-mejor-guia-para-viajeros-que-les-gusta-viajar-solo/", destination: "/receptivo-galicia", permanent: true },

      // Old /empresas subpaths → correct service pages
      { source: "/empresas/eventos", destination: "/eventos-corporativos-galicia", permanent: true },
      { source: "/empresas/eventos/", destination: "/eventos-corporativos-galicia", permanent: true },
      { source: "/empresas/team-building", destination: "/team-building-galicia", permanent: true },
      { source: "/empresas/team-building/", destination: "/team-building-galicia", permanent: true },
      { source: "/empresas/incentivos", destination: "/incentivos-empresa-galicia", permanent: true },
      { source: "/empresas/incentivos/", destination: "/incentivos-empresa-galicia", permanent: true },
      { source: "/empresas/alquiler-de-vehiculos", destination: "/logistica-servicios-galicia", permanent: true },
      { source: "/empresas/alquiler-de-vehiculos/", destination: "/logistica-servicios-galicia", permanent: true },

      // Old /experiencias subpaths → matching service pages
      { source: "/experiencias/mar", destination: "/nautica-galicia", permanent: true },
      { source: "/experiencias/mar/", destination: "/nautica-galicia", permanent: true },

      // Old /contacto subpaths
      { source: "/contacto/solicitud-de-presupuesto", destination: "/#contacto", permanent: true },
      { source: "/contacto/solicitud-de-presupuesto/", destination: "/#contacto", permanent: true },
      { source: "/contacto/pagos-online", destination: "/#contacto", permanent: true },
      { source: "/contacto/pagos-online/", destination: "/#contacto", permanent: true },

      // Old structural sections → catch-all redirects
      { source: "/viajes-tematicos", destination: "/viajes", permanent: true },
      { source: "/viajes-tematicos/:path*", destination: "/viajes", permanent: true },
      { source: "/perfil-del-viajero", destination: "/receptivo-galicia", permanent: true },
      { source: "/perfil-del-viajero/:path*", destination: "/receptivo-galicia", permanent: true },
      { source: "/viajes-a-medida", destination: "/receptivo-galicia", permanent: true },
      { source: "/viajes-a-medida/:path*", destination: "/receptivo-galicia", permanent: true },
      { source: "/seguros", destination: "/", permanent: true },
      { source: "/seguros/:path*", destination: "/", permanent: true },
      { source: "/textos-legales", destination: "/", permanent: true },
      { source: "/textos-legales/:path*", destination: "/", permanent: true },

      // Non-Galicia content and misc → home
      { source: "/circuito-roma-florencia-estudiantes-fin-de-curso", destination: "/", permanent: true },
      { source: "/circuito-roma-florencia-estudiantes-fin-de-curso/", destination: "/", permanent: true },
      { source: "/12-experiencias-gratis-para-hacer-en-nueva-york", destination: "/", permanent: true },
      { source: "/12-experiencias-gratis-para-hacer-en-nueva-york/", destination: "/", permanent: true },
      { source: "/design-photography", destination: "/", permanent: true },
      { source: "/design-photography/", destination: "/", permanent: true },
      { source: "/regala-viajes", destination: "/", permanent: true },
      { source: "/regala-viajes/", destination: "/", permanent: true },
      { source: "/subvenciones-y-ayudas", destination: "/", permanent: true },
      { source: "/subvenciones-y-ayudas/", destination: "/", permanent: true },
      { source: "/gestion-de-viajes", destination: "/receptivo-galicia", permanent: true },
      { source: "/gestion-de-viajes/", destination: "/receptivo-galicia", permanent: true },
      { source: "/visita-express-galicia", destination: "/grandes-rutas-galicia", permanent: true },
      { source: "/visita-express-galicia/", destination: "/grandes-rutas-galicia", permanent: true },

      // /coruna-especial exact match (catch-all only covers subpaths)
      { source: "/coruna-especial", destination: "/tours-privados-galicia", permanent: true },

      // Old Michelin restaurant page from WP
      { source: "/homepages/viajes-a-medida/destinos/excursiones-por-galicia/restaurantes-galicia-estrella-michelin", destination: "/guias/restaurantes-michelin-galicia", permanent: true },
      { source: "/homepages/viajes-a-medida/destinos/excursiones-por-galicia/restaurantes-galicia-estrella-michelin/", destination: "/guias/restaurantes-michelin-galicia", permanent: true },

      // =============================================
      // GENERIC catch-all patterns for remaining WP URLs
      // =============================================

      // WordPress blog and post patterns
      { source: "/blog", destination: "/guias", permanent: true },
      { source: "/blog/:path*", destination: "/guias", permanent: true },
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
      { source: "/team-building", destination: "/team-building-galicia", permanent: true },
      { source: "/eventos-corporativos", destination: "/eventos-corporativos-galicia", permanent: true },
      { source: "/eventos", destination: "/eventos-corporativos-galicia", permanent: true },
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
