import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Experiencias en Galicia — Gastronomía y más",
  description:
    "Experiencias únicas en Galicia: gastronomía y bodegas, actividades náuticas, excursiones privadas, cultura y naturaleza. Organizadas por Suunia, tu agencia receptiva local.",
  alternates: { canonical: "https://suunia.com/experiencias" },
  openGraph: {
    title: "Experiencias en Galicia – Suunia",
    description:
      "Gastronomía, náutica, excursiones privadas, cultura y naturaleza en Galicia. Experiencias organizadas a medida.",
    url: "https://suunia.com/experiencias",
    images: [{ url: "/images/playas-de-galicia-suunia.jpg", width: 1200, height: 630, alt: "Playas de Galicia con arena blanca y aguas atlánticas" }],
  },
};

const categorias = [
  {
    title: "Gastronomía y bodegas",
    href: "/gastronomia-bodegas-galicia",
    description:
      "Catas de Albariño, visitas a bodegas de las Rías Baixas y Ribeira Sacra, mercados de abastos, marisquerías y talleres de cocina gallega.",
    image: "/images/gastronomia-galicia.jpg",
    alt: "Gastronomía gallega con mariscos, vinos y productos locales",
  },
  {
    title: "Náutica",
    href: "/nautica-galicia",
    description:
      "Navegación por las rías, paseos en velero, kayak, marisqueo, avistamiento de cetáceos y experiencias en el mar atlántico gallego.",
    image: "/images/tours-islas-cies.jpg",
    alt: "Islas Cíes con playas paradisíacas y aguas cristalinas del Atlántico",
  },
  {
    title: "Excursiones privadas",
    href: "/excursiones-privadas-galicia",
    description:
      "Rutas de medio día o jornada completa con guía privado. Santiago, Costa da Morte, Rías Baixas, Ribeira Sacra y más.",
    image: "/images/viajes-grupos-cultura.jpg",
    alt: "Excursión cultural por el patrimonio histórico de Galicia",
  },
  {
    title: "Cultura y naturaleza",
    href: "/cultura-naturaleza-galicia",
    description:
      "Patrimonio milenario, catedrales románicas, Camino de Santiago, parques naturales, bosques atlánticos y paisajes únicos.",
    image: "/images/experiencias-galicia.jpg",
    alt: "Naturaleza y cultura de Galicia con paisajes verdes y patrimonio histórico",
  },
];

export default function Experiencias() {
  return (
    <>
      <HeroPage
        title="Experiencias en Galicia"
        subtitle="Actividades, visitas y momentos que convierten un viaje en algo memorable. Todo organizado por un equipo local que conoce cada rincón."
        imageSrc="/images/playas-de-galicia-suunia.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">
              Descubre Galicia a través de sus experiencias
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
              Cada experiencia está diseñada para conectar con lo auténtico de
              Galicia. Se pueden disfrutar de forma independiente o integrarlas en
              un <Link href="/viajes" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viaje organizado</Link> más
              amplio.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-8 md:grid-cols-2">
          {categorias.map((cat) => (
            <AnimateOnScroll key={cat.title}>
              <Link
                href={cat.href}
                className="card-elegant group block overflow-hidden p-0"
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image src={cat.image} alt={cat.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-atlantic-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {cat.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-atlantic-700">
                    Ver más &rarr;
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <CTASection
        title="¿Qué experiencia te gustaría vivir en Galicia?"
        description="Cuéntanos qué os interesa y preparamos una propuesta con las experiencias que mejor encajan con vuestro grupo."
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Experiencias en Galicia",
            description:
              "Experiencias únicas en Galicia: gastronomía y bodegas, actividades náuticas, excursiones privadas, cultura y naturaleza. Organizadas por Suunia.",
            url: "https://suunia.com/experiencias",
            publisher: { "@id": "https://suunia.com/#organization" },
          }),
        }}
      />
    </>
  );
}
