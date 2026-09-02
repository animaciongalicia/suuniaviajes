import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Experiencias náuticas en Galicia — Navegación, kayak y mar",
  description:
    "Actividades náuticas en Galicia: navegación en velero, kayak por las rías, marisqueo, avistamiento de cetáceos y paseos en barco. Organizadas por Suunia.",
  alternates: { canonical: "https://suunia.com/nautica-galicia" },
  openGraph: {
    title: "Náutica en Galicia – Suunia",
    description:
      "Navegación, kayak, marisqueo y experiencias en el mar atlántico gallego.",
    url: "https://suunia.com/nautica-galicia",
    images: [{ url: "/images/ruta-mar-galicia.jpg", width: 1200, height: 630 }],
  },
};

const actividades = [
  {
    title: "Navegación en velero",
    text: "Paseos en velero por las rías gallegas con patrón. Desde salidas de medio día hasta travesías de varios días por la costa atlántica.",
  },
  {
    title: "Kayak y paddle surf",
    text: "Rutas en kayak por las rías, playas y calas. Adaptadas a todos los niveles, con monitor y material incluido.",
  },
  {
    title: "Marisqueo",
    text: "Experiencia de marisqueo tradicional con mariscadoras locales. Recolección de almejas y berberechos con degustación posterior.",
  },
  {
    title: "Avistamiento de cetáceos",
    text: "Salidas en barco para ver delfines y ballenas en las aguas atlánticas de Galicia. Con biólogo marino a bordo.",
  },
];

export default function NauticaGalicia() {
  return (
    <>
      <HeroPage
        title="Experiencias náuticas en Galicia"
        subtitle="Velero, kayak, marisqueo y actividades en el mar. Galicia se vive desde el agua."
        imageSrc="/images/ruta-mar-galicia.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">El mar como parte del viaje</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Galicia tiene más de 1.600 km de costa, rías que se adentran en la tierra y una tradición marinera que forma parte de su identidad. Las experiencias náuticas permiten descubrir Galicia desde una perspectiva diferente.
            </p>
            <p>
              Organizamos actividades náuticas como parte de <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes en grupo</Link>, <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link> o <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">programas de incentivos para empresas</Link>. También como experiencias sueltas para quienes ya están en Galicia.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section text-center">Actividades náuticas disponibles</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {actividades.map((act) => (
              <div key={act.title} className="card-elegant">
                <h3 className="font-semibold text-gray-900">{act.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{act.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres una experiencia náutica en Galicia?"
        description="Cuéntanos qué tipo de actividad os interesa, cuántos sois y en qué zona estaréis. Te preparamos una propuesta."
      />
    </>
  );
}
