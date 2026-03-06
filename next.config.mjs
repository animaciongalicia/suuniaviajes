/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
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

      // EMPRESA / CORPORATIVO
      {
        source: "/empresas/",
        destination: "/incentivos-empresa-galicia",
        permanent: true,
      },
      {
        source: "/empresas",
        destination: "/incentivos-empresa-galicia",
        permanent: true,
      },

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
    ];
  },
};

export default nextConfig;
