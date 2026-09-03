import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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
    title: "Visitas a bodegas con cata y maridaje",
    text: "Galicia cuenta con cinco denominaciones de origen — Rías Baixas, Ribeira Sacra, Monterrei, Valdeorras y Ribeiro — cada una con un carácter, un paisaje y unos vinos completamente diferentes. Organizamos visitas privadas a bodegas familiares y de referencia donde el enólogo explica el proceso de elaboración, se recorren los viñedos y se hace una cata comentada con maridaje de productos locales. En Ribeira Sacra, los viñedos en bancales sobre el río Sil crean uno de los paisajes vitícolas más espectaculares de Europa.",
    details: [
      "Rías Baixas: Albariño con vistas a las rías",
      "Ribeira Sacra: Mencía en bancales sobre el Sil",
      "Monterrei y Valdeorras: Godello y variedades autóctonas",
      "Ribeiro: la cuna del vino gallego más tradicional",
    ],
  },
  {
    title: "Mercados de abastos y lonjas",
    text: "Los mercados de abastos son el corazón gastronómico de las ciudades gallegas. Santiago, A Coruña, Vigo, Pontevedra y Ourense tienen mercados donde el producto local se vende cada mañana con una frescura y calidad difíciles de encontrar en otro lugar. Organizamos recorridos guiados por los mercados con degustación incluida: quesos, conservas, marisco, pan de millo, pimientos de Padrón y todo lo que define la despensa gallega. También visitas a lonjas al amanecer para ver la subasta del pescado recién llegado del Atlántico.",
    details: [
      "Recorridos guiados con degustación incluida",
      "Visita a lonjas al amanecer con los pescadores",
      "Compra directa de producto local y artesano",
      "Paradas en queserías, panaderías y conserveras",
    ],
  },
  {
    title: "Marisco, restaurantes y marisquerías",
    text: "Galicia es sinónimo de marisco: percebes, nécoras, centollos, cigalas, zamburiñas, berberechos y almejas de una calidad que no se encuentra fuera de aquí. Seleccionamos las mejores marisquerías y restaurantes de referencia según la zona del viaje y el perfil del grupo: desde furanchos con encanto hasta restaurantes con estrella Michelin. También organizamos comidas en viveros frente al mar donde el marisco sale directamente de las bateas a la mesa.",
    details: [
      "Marisquerías seleccionadas en cada zona",
      "Furanchos: tabernas con encanto y vino de la casa",
      "Restaurantes con estrella Michelin y reserva preferente",
      "Comidas en viveros y bateas frente al mar",
    ],
  },
  {
    title: "Talleres de cocina y experiencias participativas",
    text: "Para quienes quieren ir más allá de probar la gastronomía gallega y quieren aprender a prepararla. Organizamos talleres de cocina gallega donde los participantes elaboran empanada, lacón con grelos, pulpo á feira o tarta de Santiago con la guía de un chef local. También experiencias de marisqueo en la ría — recoger almejas y berberechos con las mariscadoras — seguidas de una degustación con vino Albariño de lo que se acaba de capturar.",
    details: [
      "Talleres de empanada, pulpo y cocina tradicional",
      "Marisqueo con mariscadoras locales y degustación",
      "Show cooking con chef y maridaje de vinos",
      "Experiencias culinarias para team building empresarial",
    ],
  },
];

const zonas = [
  {
    title: "Rías Baixas",
    text: "La capital del Albariño. Bodegas entre viñedos con vistas a las rías, marisquerías en O Grove y Cambados, y el mercado de Pontevedra. La zona gastronómica más completa de Galicia.",
  },
  {
    title: "Ribeira Sacra",
    text: "Viticultura heroica en bancales sobre el Sil. Bodegas con Mencía de altísima calidad, monasterios y una gastronomía de interior con carne de ternera gallega, castañas y setas.",
  },
  {
    title: "Santiago y comarca",
    text: "El mercado de abastos de Santiago, restaurantes de referencia, teterías artesanales y la mejor tarta de Santiago. El punto de partida perfecto para cualquier ruta gastronómica.",
  },
  {
    title: "Costa da Morte y A Coruña",
    text: "Percebes de roca, nécoras, lonjas al amanecer y marisquerías de toda la vida. La costa más auténtica de Galicia con un producto del mar de calidad excepcional.",
  },
];

const faqs = [
  {
    question: "¿Las experiencias gastronómicas se pueden hacer como actividad suelta?",
    answer:
      "Sí. Se pueden reservar como experiencia independiente si ya estáis en Galicia, o integrarlas dentro de un viaje organizado, tour privado o programa de incentivos. Nos adaptamos a vuestra agenda y ubicación.",
  },
  {
    question: "¿Para cuántas personas se organizan las experiencias?",
    answer:
      "Desde parejas y familias hasta grupos de 40-50 personas. Para grupos grandes adaptamos el formato: reservamos espacios privados en bodegas, organizamos marisqueos por turnos y seleccionamos restaurantes con capacidad adecuada.",
  },
  {
    question: "¿Se adaptan a restricciones alimentarias o dietas especiales?",
    answer:
      "Siempre. Coordinamos con cada restaurante y proveedor para adaptar menús a intolerancias, alergias, dietas vegetarianas o cualquier necesidad específica del grupo. Lo gestionamos previamente para que no haya sorpresas.",
  },
  {
    question: "¿Qué zona de Galicia es mejor para una experiencia gastronómica?",
    answer:
      "Depende de lo que busquéis. Para vino y marisco, Rías Baixas. Para viticultura paisajística, Ribeira Sacra. Para variedad de restaurantes y mercados, Santiago y A Coruña. Podemos diseñar una ruta que combine varias zonas si tenéis varios días.",
  },
  {
    question: "¿Incluís el transporte en las experiencias gastronómicas?",
    answer:
      "Sí, siempre que sea necesario. Las visitas a bodegas y zonas rurales incluyen transporte privado con conductor profesional. Es fundamental sobre todo en las catas de vino, donde la seguridad del grupo es prioritaria.",
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

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">La cocina gallega como experiencia</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                La gastronomía es uno de los principales motivos por los que los viajeros eligen Galicia. Marisco del Atlántico, pulpo, empanada, vinos con cinco denominaciones de origen y una tradición culinaria que se mantiene viva en cada comarca. Pero la diferencia entre comer bien en Galicia y vivir una experiencia gastronómica real está en conocer los sitios que no aparecen en las guías, acceder a bodegas familiares que no reciben turistas, sentarse en un furancho que solo abren cuando hay cosecha nueva o participar en un marisqueo con las mariscadoras de la ría.
              </p>
              <p>
                Organizamos experiencias gastronómicas como parte de un <Link href="/viajes" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viaje organizado por Galicia</Link>, integradas en <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link> o como actividades independientes para grupos que ya están en la zona. También diseñamos programas gastronómicos completos para <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes de incentivos</Link> y experiencias <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">Galicia Premium</Link> con cenas privadas y accesos exclusivos.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, conocemos personalmente a los bodegueros, los chefs y los productores. No trabajamos con catálogos genéricos: cada experiencia se monta con proveedores que hemos visitado, probado y seleccionado por su calidad real.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Experiencias detalladas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Tipos de experiencias gastronómicas</h2>
              <p className="mt-4 text-lg text-gray-600">
                Desde catas de vino hasta talleres de cocina, cada experiencia se adapta al perfil del grupo y la zona del viaje.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-12">
            {experiencias.map((exp) => (
              <AnimateOnScroll key={exp.title}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{exp.text}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {exp.details.map((d, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-600">
                        <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Zonas gastronómicas */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Zonas gastronómicas de Galicia</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cada zona tiene su propia identidad culinaria. Te ayudamos a elegir la mejor ruta según lo que busques.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {zonas.map((zona) => (
              <AnimateOnScroll key={zona.title}>
                <div className="card-elegant">
                  <h3 className="font-semibold text-gray-900">{zona.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{zona.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué con Suunia */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué organizar experiencias gastronómicas con Suunia</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "Proveedores seleccionados", text: "No trabajamos con intermediarios. Conocemos personalmente cada bodega, restaurante y proveedor. Hemos probado todo lo que recomendamos y mantenemos una relación directa con cada uno." },
                { title: "Experiencias auténticas", text: "Nada montado para turistas. Llevamos a nuestros grupos a los sitios donde comen los gallegos, a bodegas familiares que no aparecen en las guías y a lonjas donde se vive el ritmo real del mar." },
                { title: "Todo coordinado", text: "Transporte, reservas, horarios, menús adaptados y coordinación integral. El grupo solo tiene que disfrutar. Nosotros nos encargamos de que todo funcione sin imprevistos." },
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
        title="¿Organizamos una experiencia gastronómica?"
        description="Cuéntanos qué os gusta, cuántos sois y qué zona de Galicia visitáis. Preparamos una propuesta a medida con los mejores proveedores de la zona."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre gastronomía en Galicia</h2>
          <div className="mt-12 space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-8 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* JSON-LD Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Experiencias gastronómicas y visitas a bodegas en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Catas de vino, visitas a bodegas, mercados de abastos, marisquerías, talleres de cocina y experiencias culinarias en Galicia. Organizadas por una agencia receptiva local.",
          }),
        }}
      />
    </>
  );
}
