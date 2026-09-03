import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Grandes rutas por Galicia — Itinerarios de varios días a medida",
  description:
    "Grandes rutas organizadas por Galicia: itinerarios de varios días recorriendo costa atlántica, Rías Baixas, Ribeira Sacra, Camino de Santiago y más. Organizados por Suunia, tu agencia receptiva local.",
  alternates: { canonical: "https://suunia.com/grandes-rutas-galicia" },
  openGraph: {
    title: "Grandes rutas por Galicia – Suunia",
    description:
      "Itinerarios de varios días por Galicia: costa, interior, patrimonio y gastronomía. Rutas diseñadas a medida.",
    url: "https://suunia.com/grandes-rutas-galicia",
    images: [{ url: "/images/ruta-mar-galicia.jpg", width: 1200, height: 630 }],
  },
};

const rutas = [
  {
    title: "Ruta Costa Atlántica",
    days: "5–7 días",
    description:
      "De A Coruña a Vigo recorriendo toda la fachada atlántica gallega. Un viaje que combina la fuerza del océano con la delicadeza de las rías. Empezamos en la Torre de Hércules y el paseo marítimo de A Coruña, bajamos por los acantilados salvajes de la Costa da Morte — Malpica, Camariñas, el cabo Vilán y Muxía — hasta llegar a Fisterra, el fin del mundo. Desde allí, la ruta se abre hacia las Rías Baixas: Muros, Noia, la ría de Arousa con sus bateas de mejillones, Cambados, O Grove, Sanxenxo y la ría de Vigo con las Islas Cíes como broche final.",
    highlights: [
      "Torre de Hércules y casco histórico de A Coruña",
      "Acantilados de la Costa da Morte y faro de Fisterra",
      "Navegación por la Ría de Arousa con parada en bateas",
      "Ruta del Albariño en Cambados y Rías Baixas",
      "Islas Cíes: playa de Rodas, senderismo y fondeo",
      "Pueblos marineros: Combarro, Muros, O Grove",
    ],
  },
  {
    title: "Ruta Interior y Ribeira Sacra",
    days: "4–5 días",
    description:
      "La Galicia que pocos conocen. Un viaje por el interior gallego que descubre paisajes inesperados: los cañones del río Sil con viñedos plantados en bancales verticales, monasterios románicos escondidos entre bosques, la Ourense termal con sus pozas naturales a orillas del Miño, y la Galicia celta de castros y petroglifos. Esta ruta es perfecta para quienes ya conocen la costa o buscan una Galicia más íntima, donde la naturaleza, el vino y el silencio son los protagonistas.",
    highlights: [
      "Cañones del Sil en catamarán con vistas a los viñedos",
      "Bodegas de Ribeira Sacra: Mencía en bancales imposibles",
      "Monasterios románicos: Santo Estevo, San Pedro de Rocas",
      "Ourense termal: pozas naturales y Burgas en la ciudad",
      "Lugo: muralla romana y tapeo en la Rúa Nova",
      "Castro de Santa Tegra y desembocadura del Miño",
    ],
  },
  {
    title: "Galicia Completa",
    days: "7–10 días",
    description:
      "El programa más ambicioso para quienes quieren conocer Galicia en profundidad. Combina lo mejor de la costa atlántica con el interior, Santiago de Compostela, las Rías Baixas y la Ribeira Sacra en un itinerario que no deja nada importante fuera. Es el viaje ideal para quienes vienen por primera vez y quieren llevarse una imagen completa de Galicia, o para quienes repiten y quieren llegar a los rincones que se quedaron sin ver.",
    highlights: [
      "Santiago de Compostela: catedral, casco histórico, mercado",
      "Costa da Morte: acantilados, faros, Fisterra",
      "Rías Baixas: navegación, Albariño, marisco",
      "Ribeira Sacra: cañones del Sil, bodegas, monasterios",
      "A Coruña: Torre de Hércules, gastronomía urbana",
      "Ourense termal y Lugo amurallada",
      "Islas Cíes o Islas Atlánticas",
      "Gastronomía gallega: mercados, bodegas, marisquerías",
    ],
  },
  {
    title: "Camino de Santiago a medida",
    days: "3–7 días",
    description:
      "No es necesario recorrer el Camino entero para vivir su esencia. Diseñamos programas que combinan etapas seleccionadas del Camino Francés, Portugués o del Norte con experiencias gastronómicas, visitas culturales y alojamientos con encanto. Caminamos por las etapas más bonitas, nos saltamos las más monótonas y completamos la experiencia con todo lo que rodea al Camino: los pueblos, la gente, la comida y las historias que se cuentan al atardecer.",
    highlights: [
      "Etapas seleccionadas según nivel y preferencias",
      "Transporte de equipaje entre etapas",
      "Alojamiento en hoteles con encanto (no albergues)",
      "Guía acompañante opcional durante las etapas",
      "Visitas culturales en los pueblos del Camino",
      "Llegada a Santiago y visita privada a la catedral",
    ],
  },
];

const incluye = [
  "Diseño completo del itinerario según intereses y ritmo del grupo",
  "Alojamiento seleccionado: hoteles con encanto, pazos, casas rurales o boutique",
  "Transporte privado con conductor durante toda la ruta",
  "Restaurantes reservados con menús acordados previamente",
  "Guías locales especializados en cada zona",
  "Actividades y experiencias integradas en el programa",
  "Navegaciones, visitas a bodegas y accesos incluidos",
  "Documentación completa del viaje para todos los participantes",
  "Coordinación integral y soporte permanente durante la ruta",
  "Flexibilidad para adaptar el programa sobre la marcha",
];

const faqs = [
  {
    question: "¿Las rutas son fijas o se adaptan al grupo?",
    answer:
      "Todas las rutas se diseñan a medida. Los itinerarios que mostramos son propuestas base que adaptamos según los intereses del grupo, el número de personas, las fechas y el presupuesto. Podemos combinar elementos de distintas rutas, añadir o quitar paradas, cambiar alojamientos y ajustar el ritmo. Cada gran ruta es un programa único.",
  },
  {
    question: "¿Qué tamaño de grupo es ideal para una gran ruta?",
    answer:
      "Las grandes rutas funcionan bien con grupos de 2 a 50 personas. Para parejas y familias usamos vehículos privados; para grupos medianos, minibuses; para grupos grandes, autocares con todas las comodidades. El tamaño del grupo no limita la experiencia, solo cambia la logística, y eso es lo que mejor hacemos.",
  },
  {
    question: "¿Qué nivel de actividad física requieren las rutas?",
    answer:
      "Adaptamos el nivel de actividad a cada grupo. Las rutas pueden ser completamente relajadas (con desplazamientos en vehículo privado y paseos cortos) o incluir senderismo, kayak o etapas del Camino de Santiago. Lo hablamos antes de diseñar el programa y ajustamos cada jornada al perfil de los participantes.",
  },
  {
    question: "¿Cuánto cuesta una gran ruta por Galicia?",
    answer:
      "El precio depende de la duración, el número de personas, el tipo de alojamiento y las experiencias incluidas. Preparamos presupuestos detallados y sin compromiso para que puedas valorar opciones. Como referencia, trabajamos con rangos que van desde programas accesibles hasta experiencias premium con alojamientos de lujo y actividades exclusivas.",
  },
  {
    question: "¿Cuándo es la mejor época para recorrer Galicia?",
    answer:
      "Galicia se puede visitar todo el año. De mayo a octubre es la temporada más demandada por el buen tiempo y las horas de luz. Pero el otoño tiene una luz espectacular y los colores de los bosques gallegos son únicos. El invierno es ideal para rutas gastronómicas y termales. Cada estación tiene su encanto y adaptamos el programa a la época del año.",
  },
  {
    question: "¿Puedo combinar una gran ruta con el norte de Portugal?",
    answer:
      "Sí. La frontera entre Galicia y el norte de Portugal es muy permeable y muchos de nuestros clientes combinan ambos destinos. Podemos extender la ruta con paradas en Oporto, el valle del Duero, Braga o Guimarães. Lo coordinamos todo como parte del mismo programa.",
  },
];

export default function GrandesRutasGalicia() {
  return (
    <>
      <HeroPage
        title="Grandes rutas por Galicia"
        subtitle="Itinerarios de varios días para recorrer Galicia en profundidad. Costa, interior, patrimonio y gastronomía en un viaje diseñado a tu medida."
        imageSrc="/images/ruta-mar-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Galicia merece más de un día</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Galicia no es un destino que se pueda entender en una visita rápida. Su costa tiene más de 1.600 kilómetros de acantilados, playas y rías. Su interior esconde cañones fluviales, bosques milenarios y viñedos imposibles. Su patrimonio abarca desde la catedral de Santiago hasta castros celtas de 2.000 años. Y su gastronomía es, por sí sola, motivo suficiente para un viaje de una semana.
              </p>
              <p>
                Las grandes rutas son programas de varios días diseñados para recorrer Galicia con calma, sin prisas, descubriendo cada zona con la profundidad que merece. No son circuitos turísticos al uso: son itinerarios creados a medida por un equipo local que conoce cada pueblo, cada restaurante y cada mirador que vale la pena.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva en Galicia</Link>, nos encargamos de toda la organización: alojamiento, transporte privado, restaurantes, guías, actividades y logística. Cada ruta se puede disfrutar como <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tour privado</Link> para parejas y familias, o como programa para <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">grupos</Link> de cualquier tamaño. También diseñamos rutas en formato <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">Galicia Premium</Link> con alojamientos de lujo y experiencias exclusivas.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Rutas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Nuestras rutas más solicitadas</h2>
              <p className="mt-4 text-lg text-gray-600">
                Estos itinerarios son propuestas base que adaptamos a cada grupo. Se pueden combinar, acortar, ampliar o modificar completamente.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-16">
            {rutas.map((ruta) => (
              <AnimateOnScroll key={ruta.title}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="rounded-full bg-atlantic-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-atlantic-700">
                        {ruta.days}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {ruta.title}
                      </h3>
                    </div>
                    <p className="mt-6 leading-relaxed text-gray-600">
                      {ruta.description}
                    </p>
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                        Puntos destacados
                      </h4>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {ruta.highlights.map((h, j) => (
                          <li key={j} className="flex gap-3 text-sm text-gray-600">
                            <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/34678288284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-8"
                    >
                      Pedir presupuesto para esta ruta
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Qué incluyen nuestras grandes rutas</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {incluye.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm leading-relaxed text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Por qué con Suunia */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué hacer una gran ruta con Suunia</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "Conocemos cada kilómetro", text: "No planificamos desde un despacho mirando Google Maps. Hemos recorrido cada carretera, probado cada restaurante y dormido en cada hotel que recomendamos. Sabemos qué mirador tiene la mejor luz por la tarde y qué pueblo merece una parada que no aparece en las guías." },
                { title: "Flexibilidad real", text: "Si un día llueve en la costa, movemos la ruta hacia el interior. Si el grupo descubre un pueblo que le encanta, alargamos la parada. Si alguien quiere quedarse en el hotel descansando, reorganizamos. Nuestras rutas son vivas, no rígidas." },
                { title: "Todo resuelto", text: "El grupo solo tiene que disfrutar. Nosotros nos encargamos de las reservas, los horarios, las distancias, los aparcamientos, los permisos y cualquier imprevisto. Coordinamos toda la logística para que cada día fluya sin contratiempos." },
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
        title="¿Diseñamos tu gran ruta por Galicia?"
        description="Cuéntanos cuántos días tienes, qué os interesa y qué tipo de grupo sois. Te preparamos un itinerario a medida con presupuesto detallado y sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre grandes rutas</h2>
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
            serviceType: "Grandes rutas organizadas por Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Itinerarios de varios días por Galicia diseñados a medida: costa atlántica, Rías Baixas, Ribeira Sacra, Camino de Santiago. Transporte, alojamiento, guías y experiencias incluidos.",
          }),
        }}
      />
    </>
  );
}
