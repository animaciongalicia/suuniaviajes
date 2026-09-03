import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Empresas en Galicia — Incentivos, team building y eventos corporativos",
  description:
    "Servicios para empresas en Galicia: viajes de incentivos, team building, eventos corporativos y experiencias de grupo. Organizados por Suunia, agencia receptiva local.",
  alternates: { canonical: "https://suunia.com/empresas" },
  openGraph: {
    title: "Empresas en Galicia – Suunia",
    description:
      "Incentivos, team building y eventos corporativos en Galicia. Todo organizado por una agencia receptiva local.",
    url: "https://suunia.com/empresas",
    images: [{ url: "/images/experiencias-galicia.jpg", width: 1200, height: 630 }],
  },
};

const servicios = [
  {
    title: "Viajes de incentivos",
    text: "Programas motivacionales para equipos que combinan actividades exclusivas, gastronomía de primer nivel y experiencias que dejan huella. Diseñados para premiar, fidelizar y reforzar la cultura de empresa.",
    href: "/incentivos-empresa-galicia",
    cta: "Ver programas de incentivos",
  },
  {
    title: "Team building",
    text: "Actividades de equipo conectadas con Galicia: regatas en velero, talleres de cocina, gymkanas, kayak, marisqueo y experiencias en la naturaleza atlántica. Cohesión de equipo en un entorno que inspira.",
    href: "/team-building-galicia",
    cta: "Ver actividades de team building",
  },
  {
    title: "Eventos corporativos",
    text: "Organización integral de eventos de empresa en Galicia: congresos, convenciones, jornadas, presentaciones, cenas de gala y programas para acompañantes. Logística, experiencias y producción de eventos.",
    href: "/eventos-corporativos-galicia",
    cta: "Ver eventos corporativos",
  },
];

export default function Empresas() {
  return (
    <>
      <HeroPage
        title="Empresas en Galicia"
        subtitle="Incentivos, team building y eventos corporativos. Galicia como destino para tu empresa, con la logística y la experiencia de una agencia receptiva local."
        imageSrc="/images/experiencias-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Galicia, destino de empresa</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Galicia ofrece todo lo que una empresa necesita para organizar un viaje de incentivos, un programa de team building o un evento corporativo: un destino diferente que sorprende, experiencias auténticas que conectan a los equipos, una gastronomía de primer nivel y una logística accesible con aeropuertos, hoteles y servicios de calidad.
              </p>
              <p>
                En Suunia somos <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link> especializada en el segmento corporativo. Nos encargamos de todo: diseño del programa, <Link href="/logistica-servicios-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">logística y transporte</Link>, actividades, restaurantes, alojamiento y coordinación durante todo el evento. Un solo interlocutor para que la empresa solo tenga que disfrutar.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Nuestros servicios para empresas</h2>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {servicios.map((s) => (
              <AnimateOnScroll key={s.title}>
                <div className="card-elegant flex h-full flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">{s.text}</p>
                  <Link href={s.href} className="btn-primary mt-6 justify-center">
                    {s.cta}
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Galicia */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">¿Por qué Galicia para tu empresa?</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Destino que sorprende", text: "Galicia no es el destino corporativo típico. Eso es precisamente lo que lo hace memorable: paisajes atlánticos, gastronomía excepcional y autenticidad sin turismo masivo." },
                { title: "Variedad de experiencias", text: "Mar, montaña, gastronomía, cultura, aventura. Un abanico de actividades que permite diseñar programas equilibrados y diferentes cada vez." },
                { title: "Logística accesible", text: "Aeropuertos en Santiago y Vigo con conexiones nacionales e internacionales. Distancias cortas entre puntos de interés. Buena red hotelera." },
                { title: "Relación calidad-precio", text: "Experiencias de altísima calidad a precios más competitivos que Barcelona, Madrid, Baleares o destinos europeos equivalentes." },
                { title: "Gastronomía como argumento", text: "Marisco, Albariño, pulpo, empanada, restaurantes con estrella Michelin. Las cenas corporativas en Galicia se recuerdan durante años." },
                { title: "Agencia receptiva local", text: "Suunia conoce el territorio, los proveedores y la logística de primera mano. No subcontratamos: diseñamos, coordinamos y ejecutamos directamente." },
              ].map((item) => (
                <div key={item.title} className="card-elegant">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Organizamos el próximo evento de tu empresa en Galicia?"
        description="Cuéntanos qué necesitáis: número de personas, fechas, tipo de evento y objetivos. Preparamos una propuesta a medida sin compromiso."
      />

      {/* JSON-LD Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Servicios corporativos y eventos de empresa en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Viajes de incentivos, team building y eventos corporativos en Galicia. Diseño a medida y coordinación completa por una agencia receptiva local.",
          }),
        }}
      />
    </>
  );
}
