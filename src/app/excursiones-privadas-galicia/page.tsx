import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Excursiones privadas en Galicia — Rutas con guía local",
  description:
    "Excursiones privadas en Galicia con guía local: Santiago, Costa da Morte, Rías Baixas, Ribeira Sacra, A Coruña y más. Medio día o jornada completa, a medida.",
  alternates: { canonical: "https://suunia.com/excursiones-privadas-galicia" },
  openGraph: {
    title: "Excursiones privadas en Galicia – Suunia",
    description:
      "Rutas privadas con guía local por Santiago, Costa da Morte, Rías Baixas, Ribeira Sacra y más.",
    url: "https://suunia.com/excursiones-privadas-galicia",
    images: [{ url: "/images/tours-privados-hero.jpg", width: 1200, height: 630 }],
  },
};

const excursiones = [
  {
    title: "Santiago de Compostela",
    duration: "Medio día",
    text: "Catedral, casco histórico, mercado de abastos y los rincones que no aparecen en las guías.",
  },
  {
    title: "Costa da Morte y Fisterra",
    duration: "Jornada completa",
    text: "Acantilados, faros, pueblos marineros y el cabo donde termina la tierra.",
  },
  {
    title: "Rías Baixas",
    duration: "Jornada completa",
    text: "Cambados, O Grove, Illa da Toxa, navegación por la ría y degustación de Albariño.",
  },
  {
    title: "Ribeira Sacra",
    duration: "Jornada completa",
    text: "Cañones del Sil, monasterios, bodegas en bancales y navegación por el río Sil.",
  },
  {
    title: "A Coruña",
    duration: "Medio día",
    text: "Torre de Hércules, paseo marítimo, ciudad vieja, plaza de María Pita y gastronomía local.",
  },
  {
    title: "Lugo y muralla romana",
    duration: "Medio día",
    text: "Muralla romana (Patrimonio de la Humanidad), catedral, casco histórico y tapas en la Rúa Nova.",
  },
];

export default function ExcursionesPrivadasGalicia() {
  return (
    <>
      <HeroPage
        title="Excursiones privadas en Galicia"
        subtitle="Rutas de medio día o jornada completa con guía local privado. Cada excursión se adapta a los intereses y el ritmo del grupo."
        imageSrc="/images/tours-privados-hero.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Tu excursión, a tu ritmo</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Las excursiones privadas son la forma más flexible de conocer Galicia. Guía local, transporte privado y un recorrido diseñado según lo que os interese: patrimonio, gastronomía, naturaleza o una combinación de todo.
            </p>
            <p>
              Se pueden reservar como experiencia independiente o integrarlas en un <Link href="/viajes" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viaje organizado</Link> más amplio. También las incluimos en programas de <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">incentivos de empresa</Link> y <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes en grupo</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section text-center">Excursiones destacadas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Estas son algunas de las rutas más solicitadas. Todas se personalizan según las preferencias de cada grupo.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {excursiones.map((exc) => (
              <div key={exc.title} className="card-elegant">
                <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                  {exc.duration}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{exc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{exc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Organizamos tu excursión privada?"
        description="Dinos qué zona de Galicia te interesa, cuántas personas sois y qué os gustaría ver. Preparamos una propuesta a medida."
      />
    </>
  );
}
