import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gastronomía y bodegas en Galicia — Catas, visitas y experiencias culinarias",
  description:
    "Experiencias gastronómicas en Galicia: catas de Albariño, visitas a bodegas en Rías Baixas y Ribeira Sacra, mercados de abastos, marisquerías y talleres de cocina.",
  alternates: { canonical: "https://suunia.com/gastronomia-bodegas-galicia" },
  openGraph: {
    title: "Gastronomía y bodegas en Galicia – Suunia",
    description:
      "Catas, bodegas, mercados y experiencias culinarias auténticas en Galicia.",
    url: "https://suunia.com/gastronomia-bodegas-galicia",
    images: [{ url: "/images/gastronomia-galicia.jpg", width: 1200, height: 630 }],
  },
};

const experiencias = [
  {
    title: "Visitas a bodegas",
    text: "Rías Baixas (Albariño), Ribeira Sacra (Mencía), Monterrei, Valdeorras y Ribeiro. Visita, cata y maridaje con productos locales.",
  },
  {
    title: "Mercados de abastos",
    text: "Santiago, A Coruña, Vigo, Pontevedra... Recorrido guiado por los mercados más auténticos de Galicia con degustación incluida.",
  },
  {
    title: "Marisco y restaurantes",
    text: "Marisquerías, furanchos, pulperías y restaurantes de referencia. Seleccionamos los mejores sitios según la zona y el perfil del grupo.",
  },
  {
    title: "Talleres y cocina",
    text: "Talleres de cocina gallega, empanada, marisqueo con degustación y experiencias culinarias participativas.",
  },
];

export default function GastronomiaBodegasGalicia() {
  return (
    <>
      <HeroPage
        title="Gastronomía y bodegas en Galicia"
        subtitle="Catas, bodegas, mercados, marisquerías y talleres de cocina. La gastronomía gallega vivida desde dentro."
        imageSrc="/images/gastronomia-galicia.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">La cocina gallega como experiencia</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              La gastronomía es uno de los principales motivos por los que los viajeros eligen Galicia. Marisco, pulpo, empanada, vinos con denominación de origen y una tradición culinaria que se mantiene viva en cada comarca.
            </p>
            <p>
              Organizamos experiencias gastronómicas como parte de un <Link href="/viajes" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viaje organizado</Link>, integradas en <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link> o como actividades independientes para grupos que ya están en Galicia. Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, conocemos los mejores proveedores y restaurantes de cada zona.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section text-center">Tipos de experiencias gastronómicas</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {experiencias.map((exp) => (
              <div key={exp.title} className="card-elegant">
                <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{exp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Organizamos una experiencia gastronómica?"
        description="Cuéntanos qué os gusta, cuántos sois y qué zona de Galicia visitáis. Preparamos una propuesta a medida."
      />
    </>
  );
}
