import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Cultura y naturaleza en Galicia — Patrimonio, paisajes y rutas",
  description:
    "Experiencias culturales y de naturaleza en Galicia: Camino de Santiago, catedrales románicas, pazos, parques naturales, bosques atlánticos y paisajes únicos.",
  alternates: { canonical: "https://suunia.com/cultura-naturaleza-galicia" },
  openGraph: {
    title: "Cultura y naturaleza en Galicia – Suunia",
    description:
      "Patrimonio milenario, Camino de Santiago, parques naturales y paisajes atlánticos en Galicia.",
    url: "https://suunia.com/cultura-naturaleza-galicia",
    images: [{ url: "/images/viajes-grupos-naturaleza.jpg", width: 1200, height: 630 }],
  },
};

const temas = [
  {
    title: "Camino de Santiago",
    text: "Etapas seleccionadas del Camino con guía, transporte de equipaje y alojamiento reservado. Adaptado a grupos de cualquier nivel.",
  },
  {
    title: "Patrimonio y monumentos",
    text: "Catedrales románicas, pazos gallegos, monasterios, castillos y cascos históricos. Visitas guiadas privadas.",
  },
  {
    title: "Parques naturales",
    text: "Islas Atlánticas (Cíes, Ons), Fragas do Eume, O Invernadeiro, dunas de Corrubedo y más. Rutas de senderismo con guía.",
  },
  {
    title: "Galicia celta y mística",
    text: "Castros, petroglifos, leyendas, carnavales tradicionales y la Galicia más ancestral. Un viaje al origen.",
  },
];

export default function CulturaNaturalezaGalicia() {
  return (
    <>
      <HeroPage
        title="Cultura y naturaleza en Galicia"
        subtitle="Patrimonio milenario, paisajes atlánticos y una identidad que se siente en cada rincón. Galicia es cultura y naturaleza a partes iguales."
        imageSrc="/images/viajes-grupos-naturaleza.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Galicia por descubrir</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Más allá de la gastronomía y la costa, Galicia guarda un patrimonio cultural y natural de primer nivel. Desde el Camino de Santiago hasta los bosques atlánticos, pasando por catedrales románicas, pazos señoriales y parques naturales que sorprenden por su diversidad.
            </p>
            <p>
              Integramos estas experiencias en <Link href="/viajes" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes organizados</Link>, <Link href="/excursiones-privadas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">excursiones privadas</Link> y programas de <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">grandes rutas por Galicia</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section text-center">Experiencias de cultura y naturaleza</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {temas.map((tema) => (
              <div key={tema.title} className="card-elegant">
                <h3 className="font-semibold text-gray-900">{tema.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{tema.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Organizamos una experiencia cultural o de naturaleza?"
        description="Cuéntanos qué os interesa y preparamos una propuesta adaptada a vuestro grupo, fechas y nivel."
      />
    </>
  );
}
