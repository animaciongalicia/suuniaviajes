import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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
    text: "La catedral, el Pórtico de la Gloria, el casco histórico declarado Patrimonio de la Humanidad, el mercado de abastos y los rincones que no aparecen en las guías turísticas. Un guía local que conoce la historia, las leyendas y los secretos de cada calle hace que Santiago sea una experiencia completamente diferente a visitarla por libre. Se puede completar con una comida en uno de los mejores restaurantes de la ciudad.",
    highlights: [
      "Catedral y Pórtico de la Gloria con explicación histórica",
      "Casco histórico: plazas, callejones y rincones ocultos",
      "Mercado de abastos con degustación",
      "Opción de comida en restaurante seleccionado",
    ],
  },
  {
    title: "Costa da Morte y Fisterra",
    duration: "Jornada completa",
    text: "La costa más salvaje y espectacular de Galicia. Acantilados que caen al Atlántico, faros legendarios, pueblos marineros donde el tiempo parece haberse detenido y el cabo de Fisterra, donde los romanos creían que terminaba el mundo. Recorremos Muxía, el santuario de A Virxe da Barca, Camariñas con sus encajeras de bolillos y el faro de Fisterra al atardecer. Incluye parada en marisquería o restaurante costero.",
    highlights: [
      "Faro de Fisterra y el fin del mundo",
      "Muxía y el Santuario de A Virxe da Barca",
      "Pueblos marineros: Camariñas, Corcubión, Cée",
      "Comida en marisquería de pueblo costero",
    ],
  },
  {
    title: "Rías Baixas",
    duration: "Jornada completa",
    text: "Cambados (la capital del Albariño), O Grove, A Illa da Toxa con su ermita de conchas, Combarro con sus hórreos frente al mar y las playas más bonitas de Galicia. Se puede incluir navegación por la ría, visita a bateas de mejillones, degustación de Albariño en bodega y comida de marisco. Una jornada que combina paisaje, gastronomía y cultura marinera de la mejor zona de la costa gallega.",
    highlights: [
      "Cambados, Combarro y sus hórreos frente al mar",
      "O Grove y la Illa da Toxa",
      "Navegación por la ría y visita a bateas",
      "Cata de Albariño y comida de marisco",
    ],
  },
  {
    title: "Ribeira Sacra",
    duration: "Jornada completa",
    text: "Cañones del Sil con más de 500 metros de profundidad, viñedos en bancales que bajan hasta el río, monasterios románicos perdidos en el bosque y un paisaje que quita el aliento. Incluye navegación por el río Sil en catamarán, visita a bodega con cata de Mencía y comida en restaurante con vistas al cañón. Una de las excursiones más impresionantes y menos conocidas de toda Galicia.",
    highlights: [
      "Navegación en catamarán por los cañones del Sil",
      "Viñedos en bancales: viticultura heroica",
      "Visita a bodega con cata de Mencía",
      "Monasterios románicos de Santo Estevo y San Pedro de Rocas",
    ],
  },
  {
    title: "A Coruña",
    duration: "Medio día",
    text: "La Torre de Hércules — el único faro romano del mundo que sigue en funcionamiento y Patrimonio de la Humanidad —, el paseo marítimo más largo de Europa, la ciudad vieja, la plaza de María Pita y los barrios con más personalidad de la ciudad. Un paseo que mezcla historia milenaria con la vida urbana más auténtica de Galicia. Se completa con una ruta de tapas o comida en restaurante del centro.",
    highlights: [
      "Torre de Hércules: faro romano y Patrimonio UNESCO",
      "Paseo marítimo y playas urbanas",
      "Ciudad vieja y plaza de María Pita",
      "Ruta de tapas por los barrios del centro",
    ],
  },
  {
    title: "Lugo y muralla romana",
    duration: "Medio día",
    text: "Lugo es la única ciudad del mundo que conserva íntegra su muralla romana, declarada Patrimonio de la Humanidad. Paseo por el adarve de la muralla, catedral románica con la capilla de la Virgen de los Ojos Grandes, casco histórico y la famosa Rúa Nova, donde las tapas son un ritual. Una excursión que combina historia romana, patrimonio medieval y la mejor cultura gastronómica de bar de toda Galicia.",
    highlights: [
      "Muralla romana íntegra: Patrimonio de la Humanidad",
      "Catedral románica de Santa María",
      "Casco histórico y termas romanas",
      "Tapas en la Rúa Nova y el centro",
    ],
  },
];

const incluye = [
  "Guía local profesional durante toda la excursión",
  "Transporte privado con conductor profesional",
  "Itinerario personalizado según intereses del grupo",
  "Reservas en restaurantes y actividades gestionadas",
  "Asistencia y coordinación durante toda la jornada",
  "Flexibilidad para adaptar horarios y paradas",
  "Recomendaciones personalizadas del guía local",
  "Seguro de responsabilidad civil incluido",
];

const faqs = [
  {
    question: "¿Qué diferencia hay entre una excursión privada y un tour en grupo?",
    answer:
      "En una excursión privada, el guía, el transporte y el itinerario son exclusivamente para vuestro grupo. No compartís bus con desconocidos, no seguís un programa rígido y podéis parar donde queráis, el tiempo que queráis. El guía se adapta a vuestros intereses y ritmo, no al revés.",
  },
  {
    question: "¿Para cuántas personas se organizan las excursiones privadas?",
    answer:
      "Desde 2 personas hasta grupos de 50. El vehículo y el guía se adaptan al tamaño del grupo. Para parejas y grupos pequeños usamos coches o minivans; para grupos más grandes, minibuses o autobuses con guía a bordo.",
  },
  {
    question: "¿Se pueden combinar varias excursiones en un viaje de varios días?",
    answer:
      "Sí, y es lo más recomendable si tenéis varios días en Galicia. Podemos diseñar un programa que combine excursiones de medio día y jornada completa con experiencias gastronómicas y náuticas. Es lo que hacemos en nuestras grandes rutas por Galicia y en los tours privados de varios días.",
  },
  {
    question: "¿Las excursiones incluyen comida?",
    answer:
      "Las excursiones de jornada completa incluyen una parada para comer en un restaurante seleccionado previamente. La comida no suele estar incluida en el precio base para dar flexibilidad al grupo, pero se puede incluir como parte del paquete. Siempre reservamos con antelación para garantizar mesa y menú adaptado.",
  },
  {
    question: "¿Con cuánta antelación hay que reservar?",
    answer:
      "Recomendamos reservar con al menos 2-3 semanas de antelación para garantizar disponibilidad de guía y transporte. En temporada alta (junio-septiembre) y fechas especiales como Semana Santa o puentes, cuanto antes mejor. Para grupos grandes, al menos un mes.",
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

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Tu excursión, a tu ritmo</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Las excursiones privadas son la forma más flexible de conocer Galicia. Guía local que conoce la zona de verdad, transporte privado con conductor profesional y un recorrido diseñado según lo que os interese: patrimonio, gastronomía, naturaleza, fotografía o una combinación de todo. Sin prisas, sin horarios rígidos, sin compartir con otros grupos.
              </p>
              <p>
                Se pueden reservar como experiencia independiente o integrarlas en un <Link href="/viajes" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viaje organizado</Link> más amplio. También las incluimos en programas de <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">incentivos de empresa</Link>, <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes en grupo</Link> y <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">grandes rutas por Galicia</Link>. Para quienes buscan un nivel de exclusividad superior, las excursiones privadas se pueden elevar a formato <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">Galicia Premium</Link>.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, nuestros guías no son intérpretes que leen un guion: son profesionales que viven en Galicia, conocen cada rincón y adaptan la visita en tiempo real según las preguntas, la curiosidad y el ritmo de cada grupo.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Excursiones detalladas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Excursiones destacadas</h2>
              <p className="mt-4 text-lg text-gray-600">
                Estas son las rutas más solicitadas. Todas se personalizan según las preferencias de cada grupo. También diseñamos excursiones a medida por cualquier zona de Galicia.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-12">
            {excursiones.map((exc) => (
              <AnimateOnScroll key={exc.title}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                    {exc.duration}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{exc.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{exc.text}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {exc.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-600">
                        <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluyen */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Qué incluyen nuestras excursiones privadas</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {incluye.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Por qué con Suunia */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué elegir Suunia para tu excursión privada</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "Guías que viven aquí", text: "Nuestros guías no leen un guion: viven en Galicia, conocen los sitios que no aparecen en las guías turísticas y adaptan la visita en tiempo real según los intereses del grupo." },
                { title: "Itinerarios a medida", text: "Cada excursión se diseña desde cero. Si queréis más gastronomía, más naturaleza, más historia o una combinación, el recorrido se adapta. Sin programas cerrados ni rutas fijas." },
                { title: "Logística resuelta", text: "Transporte, reservas, tiempos y coordinación. El grupo solo tiene que disfrutar. Nosotros nos encargamos de que todo funcione, incluidos los imprevistos." },
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
        title="¿Organizamos tu excursión privada?"
        description="Dinos qué zona de Galicia te interesa, cuántas personas sois y qué os gustaría ver. Preparamos una propuesta a medida sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre excursiones privadas</h2>
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
            serviceType: "Excursiones privadas con guía local en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Excursiones privadas por Santiago, Costa da Morte, Rías Baixas, Ribeira Sacra, A Coruña y Lugo. Con guía local, transporte privado e itinerario a medida.",
          }),
        }}
      />
    </>
  );
}
