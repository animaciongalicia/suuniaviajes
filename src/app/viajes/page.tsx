import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Viajes organizados en Galicia — Grupos, rutas y experiencias a medida",
  description:
    "Organizamos viajes a medida en Galicia: grupos, tours privados, grandes rutas y experiencias premium. Tu agencia receptiva local con cobertura en toda Galicia.",
  alternates: { canonical: "https://suunia.com/viajes" },
  openGraph: {
    title: "Viajes en Galicia – Suunia",
    description:
      "Viajes organizados en Galicia para grupos, tours privados, grandes rutas y experiencias premium.",
    url: "https://suunia.com/viajes",
    images: [{ url: "/images/experiencias-galicia.jpg", width: 1200, height: 630 }],
  },
};

const categorias = [
  {
    title: "Viajes en grupo",
    href: "/viajes-grupos-galicia",
    description:
      "Programas completos para grupos privados, asociaciones, colegios y colectivos. Transporte, alojamiento, actividades y guía incluidos.",
  },
  {
    title: "Tours privados",
    href: "/tours-privados-galicia",
    description:
      "Experiencias personalizadas con guía local privado. Desde medio día hasta rutas de varios días adaptadas a tus intereses.",
  },
  {
    title: "Grandes rutas por Galicia",
    href: "/grandes-rutas-galicia",
    description:
      "Itinerarios de varios días que recorren las zonas más representativas de Galicia: costa atlántica, interior, Camino de Santiago y Rías.",
  },
  {
    title: "Galicia Premium",
    href: "/galicia-premium",
    description:
      "Experiencias exclusivas para viajeros que buscan lo mejor de Galicia: alojamientos de lujo, gastronomía de autor y accesos privilegiados.",
  },
];

export default function Viajes() {
  return (
    <>
      <HeroPage
        title="Viajes organizados en Galicia"
        subtitle="Diseñamos viajes a medida para grupos, parejas y viajeros independientes. Conocemos cada rincón de Galicia y nos encargamos de toda la organización."
        imageSrc="/images/experiencias-galicia.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">
            Elige tu forma de viajar por Galicia
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            Cada viaje es diferente. Por eso ofrecemos distintas formas de
            descubrir Galicia, todas con la organización y el acompañamiento de
            un equipo local que conoce el terreno.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-8 md:grid-cols-2">
          {categorias.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="card-elegant group block"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-atlantic-700 transition-colors">
                {cat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {cat.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-atlantic-700">
                Ver más &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="¿Planificamos tu viaje a Galicia?"
        description="Cuéntanos qué tipo de viaje te interesa y te preparamos una propuesta personalizada sin compromiso."
      />
    </>
  );
}
