import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";

export const metadata: Metadata = {
  title: "Guías de viaje por Galicia — Rutas, consejos y destinos",
  description:
    "Guías de viaje por Galicia escritas por nuestro equipo local: rutas recomendadas, mejores épocas, qué ver en cada zona, gastronomía, bodegas y experiencias imprescindibles.",
  alternates: { canonical: "https://suunia.com/guias" },
  openGraph: {
    title: "Guías de viaje por Galicia – Suunia",
    description:
      "Todo lo que necesitas saber para viajar a Galicia: rutas, destinos, gastronomía y experiencias recomendadas por locales.",
    url: "https://suunia.com/guias",
    images: [{ url: "/images/hero-galicia.jpg", width: 1200, height: 630 }],
  },
};

const categorias = [
  { name: "Todas", slug: "todas" },
  { name: "Rutas", slug: "rutas" },
  { name: "Gastronomía", slug: "gastronomia" },
  { name: "Destinos", slug: "destinos" },
  { name: "Consejos", slug: "consejos" },
];

const guias = [
  {
    title: "Qué ver en las Rías Baixas: la guía definitiva",
    excerpt:
      "Cambados, O Grove, Sanxenxo, Combarro, la Illa da Toxa y las mejores playas. Todo lo que hay que saber para recorrer las Rías Baixas con criterio, sin dejarse lo mejor ni caer en trampas turísticas.",
    categoria: "Destinos",
    imagen: "/images/tours-rias-baixas.jpg",
    alt: "Vista aérea de la Ría de Arousa con bateas de mejillones y pueblos marineros en la costa gallega",
    tiempo: "12 min",
    href: "/guias/rias-baixas",
  },
  {
    title: "Los restaurantes con estrella Michelin de Galicia",
    excerpt:
      "Galicia concentra más de una decena de estrellas Michelin repartidas entre la costa y el interior. Un recorrido por los restaurantes que están redefiniendo la alta cocina gallega con producto atlántico y técnica de vanguardia.",
    categoria: "Gastronomía",
    imagen: "/images/gastronomia-galicia.jpg",
    alt: "Plato de alta cocina gallega con mariscos frescos y presentación de autor",
    tiempo: "10 min",
    href: "/guias/restaurantes-michelin-galicia",
  },
  {
    title: "Costa da Morte: ruta completa de 2-3 días",
    excerpt:
      "Desde Malpica hasta Fisterra, recorriendo los acantilados más salvajes de Europa. Los faros que hay que visitar, los pueblos donde parar a comer y los miradores con la mejor luz al atardecer.",
    categoria: "Rutas",
    imagen: "/images/tours-costa-da-morte.jpg",
    alt: "Acantilados de la Costa da Morte con el faro de Fisterra al fondo bajo un cielo atlántico",
    tiempo: "15 min",
    href: "/guias/costa-da-morte",
  },
  {
    title: "Ribeira Sacra: viñedos, cañones y monasterios",
    excerpt:
      "La zona vinícola más espectacular de Europa. Cómo recorrerla, qué bodegas visitar, la navegación por los cañones del Sil y los monasterios románicos que no te puedes perder.",
    categoria: "Destinos",
    imagen: "/images/tours-ribeira-sacra.jpg",
    alt: "Viñedos en bancales sobre los cañones del río Sil en la Ribeira Sacra gallega",
    tiempo: "14 min",
    href: "/guias/ribeira-sacra",
  },
  {
    title: "Cuándo viajar a Galicia: la mejor época según lo que busques",
    excerpt:
      "Galicia no es solo verano. Cada estación tiene su encanto, sus fiestas, sus productos de temporada y su luz. Una guía mes a mes para elegir el momento perfecto según tus intereses.",
    categoria: "Consejos",
    imagen: "/images/viajes-grupos-naturaleza.jpg",
    alt: "Paisaje verde de Galicia con bosques atlánticos y cielo despejado",
    tiempo: "8 min",
    href: "/guias/cuando-viajar-galicia",
  },
  {
    title: "Las 5 denominaciones de origen del vino gallego",
    excerpt:
      "Rías Baixas, Ribeira Sacra, Valdeorras, Monterrei y Ribeiro. Qué uvas se cultivan, qué bodegas merece la pena visitar y cómo organizar una ruta del vino por Galicia.",
    categoria: "Gastronomía",
    imagen: "/images/tours-gastronomia.jpg",
    alt: "Viñedos gallegos con uvas Albariño madurando al sol con el mar de fondo",
    tiempo: "11 min",
    href: "/guias/vinos-denominaciones-origen-galicia",
  },
  {
    title: "Santiago de Compostela más allá del Camino",
    excerpt:
      "La catedral y el Obradoiro son solo el principio. El mercado de abastos, los mejores restaurantes, los rincones del casco histórico que los turistas no encuentran y la vida nocturna compostelana.",
    categoria: "Destinos",
    imagen: "/images/tours-santiago.jpg",
    alt: "Plaza del Obradoiro con la Catedral de Santiago de Compostela iluminada al atardecer",
    tiempo: "13 min",
    href: "/guias/santiago-de-compostela",
  },
  {
    title: "Islas Atlánticas: Cíes, Ons, Sálvora y Cortegada",
    excerpt:
      "Cómo conseguir los permisos, qué isla elegir según lo que busques, las rutas de senderismo, las mejores playas y todo lo práctico para visitar el único parque nacional marítimo-terrestre de Galicia.",
    categoria: "Rutas",
    imagen: "/images/tours-islas-cies.jpg",
    alt: "Playa de Rodas en las Islas Cíes con arena blanca y aguas cristalinas del Atlántico",
    tiempo: "10 min",
    href: "/guias/islas-atlanticas",
  },
  {
    title: "Cómo organizar un viaje en grupo a Galicia",
    excerpt:
      "Logística, transporte, alojamientos, restaurantes para grupos grandes y actividades que funcionan. Una guía práctica con todo lo que necesitas saber antes de organizar un viaje de grupo a Galicia.",
    categoria: "Consejos",
    imagen: "/images/viajes-grupos-hero.jpg",
    alt: "Grupo de viajeros recorriendo un paseo marítimo gallego con vistas al Atlántico",
    tiempo: "9 min",
    href: "/guias/viaje-grupo-galicia",
  },
];

export default function Guias() {
  return (
    <>
      <HeroPage
        title="Guías de viaje por Galicia"
        subtitle="Todo lo que necesitas saber para descubrir Galicia con criterio. Rutas, destinos, gastronomía y consejos escritos por quienes viven aquí."
        imageSrc="/images/hero-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Galicia contada por locales</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Estas guías no son listas genéricas copiadas de otras webs. Son el conocimiento real de un equipo que vive en Galicia, recorre sus carreteras cada semana, come en sus restaurantes y conoce cada ría, cada bosque y cada pueblo que merece una parada. Escribimos sobre lo que sabemos de primera mano para que tu viaje empiece antes de llegar.
            </p>
            <p>
              Encontrarás rutas detalladas para recorrer las zonas más interesantes de Galicia, recomendaciones gastronómicas que van más allá del tópico, guías de destinos que profundizan en lo que realmente importa y consejos prácticos basados en años organizando viajes por todo el territorio gallego como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de categoría */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categorias.map((cat) => (
              <span
                key={cat.slug}
                className={`flex-shrink-0 cursor-default rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat.slug === "todas"
                    ? "bg-atlantic-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de guías */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {guias.map((guia) => (
              <Link key={guia.title} href={guia.href} className="group">
                <article className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={guia.imagen}
                      alt={guia.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-atlantic-700 backdrop-blur-sm">
                      {guia.categoria}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-atlantic-700">
                      {guia.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {guia.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {guia.tiempo} de lectura
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-section">¿Prefieres que organicemos tu viaje?</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Las guías te dan el conocimiento, pero si prefieres que nos encarguemos de todo — itinerario, alojamiento, transporte, restaurantes y experiencias — eso es exactamente lo que hacemos. Diseñamos <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link>, <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">grandes rutas de varios días</Link> y <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes completos para grupos</Link>.
          </p>
          <a
            href="https://wa.me/34678288284"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Cuéntanos tu viaje
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Guías de viaje por Galicia",
            description:
              "Guías de viaje escritas por el equipo de Suunia: rutas, destinos, gastronomía y consejos para viajar a Galicia.",
            url: "https://suunia.com/guias",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
          }),
        }}
      />
    </>
  );
}
