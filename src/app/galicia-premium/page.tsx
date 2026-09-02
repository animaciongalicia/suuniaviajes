import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Galicia Premium — Experiencias exclusivas en Galicia",
  description:
    "Viajes premium en Galicia: alojamientos de lujo, gastronomía de autor, experiencias privadas y accesos exclusivos. Organizados por Suunia, tu agencia receptiva local.",
  alternates: { canonical: "https://suunia.com/galicia-premium" },
  openGraph: {
    title: "Galicia Premium – Suunia",
    description:
      "Experiencias exclusivas en Galicia: lujo, gastronomía, privacidad y atención personalizada.",
    url: "https://suunia.com/galicia-premium",
    images: [{ url: "/images/gastronomia-galicia.jpg", width: 1200, height: 630 }],
  },
};

const servicios = [
  {
    title: "Alojamientos de lujo",
    text: "Pazos restaurados, hoteles boutique, casas rurales con encanto y las mejores suites con vistas al Atlántico.",
  },
  {
    title: "Gastronomía de autor",
    text: "Restaurantes con estrella Michelin, cenas privadas con chef, maridajes exclusivos y experiencias culinarias irrepetibles.",
  },
  {
    title: "Experiencias privadas",
    text: "Navegación en velero, catas en bodegas cerradas al público, visitas a pazos privados y accesos que no aparecen en ninguna guía.",
  },
  {
    title: "Transporte y atención VIP",
    text: "Vehículos de alta gama, chófer privado, asistencia personal durante todo el viaje y coordinación integral.",
  },
];

export default function GaliciaPremium() {
  return (
    <>
      <HeroPage
        title="Galicia Premium"
        subtitle="Para quienes buscan lo mejor de Galicia. Experiencias exclusivas, privacidad absoluta y una atención que cuida cada detalle."
        imageSrc="/images/gastronomia-galicia.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Galicia como nunca la has vivido</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Galicia Premium es nuestra línea de viajes para viajeros exigentes que buscan exclusividad, privacidad y experiencias que van más allá de lo convencional. No se trata solo de alojarse en el mejor hotel: se trata de vivir Galicia desde dentro, con accesos y experiencias que no están al alcance del turismo general.
            </p>
            <p>
              Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, conocemos a los mejores proveedores, los rincones más exclusivos y las experiencias que marcan la diferencia. Cada programa premium se diseña desde cero, combinando <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link> con servicios de alta gama.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section text-center">Qué incluye una experiencia premium</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {servicios.map((s) => (
              <div key={s.title} className="card-elegant">
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Buscas una experiencia premium en Galicia?"
        description="Cuéntanos qué tipo de viaje tienes en mente y te diseñamos una propuesta exclusiva a la medida."
      />
    </>
  );
}
