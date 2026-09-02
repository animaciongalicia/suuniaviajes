import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Grandes rutas por Galicia — Itinerarios de varios días",
  description:
    "Grandes rutas organizadas por Galicia: itinerarios de varios días recorriendo costa atlántica, Rías Baixas, Ribeira Sacra, Camino de Santiago y más. Organizados por Suunia.",
  alternates: { canonical: "https://suunia.com/grandes-rutas-galicia" },
  openGraph: {
    title: "Grandes rutas por Galicia – Suunia",
    description:
      "Itinerarios de varios días por Galicia: costa, interior, patrimonio y gastronomía.",
    url: "https://suunia.com/grandes-rutas-galicia",
    images: [{ url: "/images/ruta-mar-galicia.jpg", width: 1200, height: 630 }],
  },
};

const rutas = [
  {
    title: "Ruta Costa Atlántica",
    days: "5-7 días",
    description:
      "De A Coruña a Vigo recorriendo toda la costa gallega: Torre de Hércules, Costa da Morte, Fisterra, Rías Baixas e Islas Cíes.",
  },
  {
    title: "Ruta Interior y Ribeira Sacra",
    days: "4-5 días",
    description:
      "Cañones del Sil, monasterios, bodegas de Ribeira Sacra, Ourense termal y la Galicia que pocos conocen.",
  },
  {
    title: "Galicia Completa",
    days: "7-10 días",
    description:
      "El programa más completo: costa, interior, Santiago, Rías, gastronomía y cultura. Para quienes quieren conocer Galicia en profundidad.",
  },
];

export default function GrandesRutasGalicia() {
  return (
    <>
      <HeroPage
        title="Grandes rutas por Galicia"
        subtitle="Itinerarios de varios días para recorrer Galicia en profundidad. Diseñamos la ruta, coordinamos la logística y acompañamos el viaje."
        imageSrc="/images/ruta-mar-galicia.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Rutas diseñadas para descubrir Galicia</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Las grandes rutas son programas de varios días que combinan costa, interior, patrimonio y gastronomía en un itinerario completo. Cada ruta se diseña a medida según el perfil del grupo, sus intereses y el tiempo disponible.
            </p>
            <p>
              Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva en Galicia</Link>, nos encargamos de todo: alojamiento, transporte, restaurantes, guías y actividades. También organizamos estas rutas como parte de nuestros <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes para grupos</Link> o como <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link> para familias y parejas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section text-center">Ejemplos de grandes rutas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Estos itinerarios son orientativos. Todos se adaptan al grupo, las fechas y las preferencias de cada viajero.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {rutas.map((ruta) => (
              <div key={ruta.title} className="card-elegant">
                <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                  {ruta.days}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {ruta.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {ruta.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Te interesa una gran ruta por Galicia?"
        description="Cuéntanos cuántos días tienes, qué os interesa y qué tipo de grupo sois. Te preparamos un itinerario a medida."
      />
    </>
  );
}
