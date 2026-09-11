import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Viajes organizados en Galicia — Grupos y rutas",
  description:
    "Organizamos viajes a medida en Galicia: grupos, tours privados, grandes rutas y experiencias premium. Tu agencia receptiva local con cobertura en toda Galicia.",
  alternates: { canonical: "https://suunia.com/viajes" },
  openGraph: {
    title: "Viajes en Galicia – Suunia",
    description:
      "Viajes organizados en Galicia para grupos, tours privados, grandes rutas y experiencias premium.",
    url: "https://suunia.com/viajes",
    images: [{ url: "/images/galicia-increible.jpg", width: 1200, height: 630, alt: "Paisaje de Galicia con costa atlántica, naturaleza verde y cielo despejado" }],
  },
};

const categorias = [
  {
    title: "Viajes en grupo",
    href: "/viajes-grupos-galicia",
    description:
      "Programas completos para grupos privados, asociaciones, colegios y colectivos. Transporte, alojamiento, actividades y guía incluidos.",
    image: "/images/tours-rias-baixas.jpg",
    alt: "Grupo de viajeros disfrutando de las Rías Baixas en Galicia",
  },
  {
    title: "Tours privados",
    href: "/tours-privados-galicia",
    description:
      "Experiencias personalizadas con guía local privado. Desde medio día hasta rutas de varios días adaptadas a tus intereses.",
    image: "/images/tours-santiago.jpg",
    alt: "Tour privado por Santiago de Compostela con guía local",
  },
  {
    title: "Grandes rutas por Galicia",
    href: "/grandes-rutas-galicia",
    description:
      "Itinerarios de varios días que recorren las zonas más representativas de Galicia: costa atlántica, interior, Camino de Santiago y Rías.",
    image: "/images/tours-costa-da-morte.jpg",
    alt: "Costa da Morte con acantilados y paisaje atlántico de Galicia",
  },
  {
    title: "Galicia Premium",
    href: "/galicia-premium",
    description:
      "Experiencias exclusivas para viajeros que buscan lo mejor de Galicia: alojamientos de lujo, gastronomía de autor y accesos privilegiados.",
    image: "/images/tours-ribeira-sacra.jpg",
    alt: "Ribeira Sacra con viñedos en terrazas y cañones del Sil",
  },
];

export default function Viajes() {
  return (
    <>
      <HeroPage
        title="Viajes organizados en Galicia"
        subtitle="Diseñamos viajes a medida para grupos, parejas y viajeros independientes. Conocemos cada rincón de Galicia y nos encargamos de toda la organización."
        imageSrc="/images/galicia-increible.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">
              Elige tu forma de viajar por Galicia
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
              Cada viaje es diferente. Por eso ofrecemos distintas formas de
              descubrir Galicia, todas con la organización y el acompañamiento de
              un equipo local que conoce el terreno.
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
        title="¿Planificamos tu viaje a Galicia?"
        description="Cuéntanos qué tipo de viaje te interesa y te preparamos una propuesta personalizada sin compromiso."
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Viajes organizados en Galicia",
            description:
              "Viajes a medida en Galicia: grupos, tours privados, grandes rutas y experiencias premium. Organizados por Suunia, tu agencia receptiva local.",
            url: "https://suunia.com/viajes",
            publisher: { "@id": "https://suunia.com/#organization" },
          }),
        }}
      />
    </>
  );
}
