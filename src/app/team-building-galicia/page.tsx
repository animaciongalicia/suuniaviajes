import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Team building en Galicia — Actividades de equipo en mar, naturaleza y gastronomía",
  description:
    "Actividades de team building en Galicia: regatas, kayak, talleres de cocina, marisqueo, gymkanas, rutas de aventura y experiencias en la naturaleza atlántica. Organizadas por Suunia.",
  alternates: { canonical: "https://suunia.com/team-building-galicia" },
  openGraph: {
    title: "Team building en Galicia – Suunia",
    description:
      "Actividades de team building en Galicia: mar, gastronomía, aventura y naturaleza para equipos de empresa.",
    url: "https://suunia.com/team-building-galicia",
    images: [{ url: "/images/experiencias-galicia.jpg", width: 1200, height: 630 }],
  },
};

const categorias = [
  {
    title: "Team building náutico",
    intro: "El mar gallego es el escenario perfecto para actividades que combinan trabajo en equipo, adrenalina y un entorno natural impresionante. Las rías ofrecen aguas protegidas ideales para todo tipo de actividades náuticas, desde competiciones de alto nivel hasta experiencias relajadas en el agua.",
    actividades: [
      {
        name: "Regata de veleros por equipos",
        text: "Cada equipo tripula un velero con patrón profesional y compite en una regata amistosa por la ría. Nadie necesita experiencia previa: el patrón enseña las maniobras básicas y los equipos aprenden a coordinarse en tiempo real. Incluye briefing, competición, trofeo para el equipo ganador y brindis de cierre en puerto. Una de las actividades más valoradas por directivos y equipos comerciales.",
      },
      {
        name: "Kayak y aventura en la ría",
        text: "Rutas en kayak por las rías con pruebas de orientación, trabajo en equipo y paradas en calas y playas. Se puede combinar con marisqueo, picnic en playa privada o incluso una gymkana acuática con pruebas entre los kayaks. Monitor profesional, material completo y seguro incluidos. Adaptable a todos los niveles.",
      },
      {
        name: "Experiencia marinera",
        text: "Jornada a bordo de un barco de pesca tradicional aprendiendo las artes de pesca de la ría. Los participantes faenan como los pescadores locales, aprenden a calar las nasas y participan en un marisqueo. Después, preparación del producto capturado para el almuerzo del equipo en el propio puerto. Una experiencia auténtica que conecta con la tradición marinera de Galicia.",
      },
      {
        name: "Paddle surf en equipo",
        text: "Competiciones de paddle surf por equipos en playas protegidas de las Rías Baixas. Carreras de relevos, pruebas de equilibrio y desafíos en el agua que ponen a prueba la coordinación y generan momentos memorables. Incluye monitor, material y fotógrafo para capturar las mejores imágenes del equipo.",
      },
    ],
  },
  {
    title: "Team building gastronómico",
    intro: "La gastronomía gallega es un argumento de venta por sí sola para cualquier evento de empresa. Transformamos los ingredientes y la tradición culinaria de Galicia en actividades competitivas, participativas y divertidas que unen a los equipos alrededor de una mesa.",
    actividades: [
      {
        name: "Cooking challenge gallego",
        text: "Taller de cocina competitivo donde los equipos preparan platos típicos gallegos — empanada, pulpo, lacón, tarta de Santiago — bajo la supervisión de un chef profesional. Un jurado puntúa presentación, sabor y trabajo en equipo. Después, todos comen lo que han cocinado. Incluye ingredientes premium, delantal personalizable y diplomas.",
      },
      {
        name: "Cata competitiva de vinos",
        text: "Visita a bodega de Albariño o Mencía con cata a ciegas por equipos. Los participantes aprenden sobre variedades, técnicas de elaboración y maridaje mientras compiten por identificar vinos, añadas y matices. Incluye visita a viñedos, cata guiada por el enólogo y maridaje con productos locales.",
      },
      {
        name: "Ruta de tapas por Santiago",
        text: "Gymkana gastronómica por el casco histórico de Santiago de Compostela. Los equipos reciben un mapa con pistas, pruebas culinarias y retos que deben resolver recorriendo bares, restaurantes y rincones de la ciudad. Incluye paradas con degustación, pruebas de conocimiento gastronómico y brindis final.",
      },
      {
        name: "Marisqueo y cocina en la playa",
        text: "Los equipos salen a la ría con mariscadoras locales a recoger almejas, berberechos y navajas. Después, compiten por preparar el mejor plato con lo capturado, guiados por un chef, en una cocina improvisada junto al mar. Una experiencia que combina naturaleza, tradición y gastronomía de la forma más auténtica.",
      },
    ],
  },
  {
    title: "Team building de aventura y naturaleza",
    intro: "Galicia ofrece un entorno natural de una diversidad sorprendente: costa atlántica, bosques milenarios, ríos, montañas y paisajes que cambian en cada kilómetro. Actividades al aire libre que sacan a los equipos de su zona de confort y generan experiencias compartidas que refuerzan la cohesión.",
    actividades: [
      {
        name: "Orientación y supervivencia en el bosque",
        text: "Pruebas de orientación por equipos en bosques atlánticos gallegos: Fragas do Eume, O Courel o bosques de castaños centenarios. Los equipos usan brújula, mapas y pistas naturales para encontrar checkpoints, resolver pruebas y completar un recorrido diseñado para trabajar liderazgo, comunicación y toma de decisiones.",
      },
      {
        name: "Senderismo temático en equipo",
        text: "Rutas de senderismo con pruebas de equipo integradas: ruta de los faros en la Costa da Morte, ruta de miradores en la Ribeira Sacra o recorrido por la costa de las Rías Baixas. Cada parada incluye un reto (cultural, fotográfico, de ingenio) que los equipos deben resolver. Monitor, guía y avituallamiento incluidos.",
      },
      {
        name: "Multiaventura en la ría",
        text: "Circuito de actividades combinadas: kayak, tiro con arco, tirolina, escalada en roca y pruebas de equilibrio en un entorno natural junto al mar. Los equipos compiten en todas las pruebas acumulando puntos. Incluye monitores profesionales, material homologado y seguro de actividades.",
      },
      {
        name: "Gymkana rural gallega",
        text: "Competición por equipos en un entorno rural gallego: ordeñar, hacer queso, pisar la uva, preparar una queimada, resolver acertijos sobre tradiciones gallegas y pruebas de habilidad con herramientas del campo. Una actividad que divierte, sorprende y conecta con la Galicia más auténtica.",
      },
    ],
  },
  {
    title: "Team building cultural y creativo",
    intro: "No todo el team building tiene que ser físico o competitivo. Galicia ofrece un patrimonio cultural y artístico que inspira actividades creativas, reflexivas y participativas que funcionan especialmente bien para equipos directivos, grupos internacionales o programas que buscan un tono más sofisticado.",
    actividades: [
      {
        name: "Gymkana cultural por Santiago",
        text: "Recorrido por el casco histórico de Santiago de Compostela resolviendo pruebas culturales, históricas y de ingenio. Los equipos descubren la catedral, las plazas, los rincones ocultos y las leyendas de la ciudad mientras compiten por puntos. Incluye guía coordinador, material de juego y brindis de cierre.",
      },
      {
        name: "Taller de queimada y leyendas",
        text: "Experiencia nocturna en un pazo o bodega donde los participantes preparan una queimada tradicional (el conjuro del fuego gallego) mientras un narrador cuenta las leyendas de meigas, la Santa Compaña y la Galicia mística. Una actividad envolvente que funciona como cierre de jornada o preludio de cena.",
      },
      {
        name: "Fotografía creativa en equipo",
        text: "Rally fotográfico por equipos en una zona de Galicia con paisajes espectaculares: Costa da Morte, Rías Baixas o Santiago. Cada equipo recibe un briefing creativo con temas y retos visuales. Un fotógrafo profesional evalúa los resultados y los mejores se imprimen como recuerdo del evento.",
      },
      {
        name: "Construcción de un barco tradicional",
        text: "Taller de carpintería de ribeira donde los equipos construyen una maqueta de un barco gallego tradicional (dornas, gamelas) con la ayuda de artesanos locales. Trabajo en equipo manual, creativo y colaborativo que conecta con la tradición marinera de Galicia. Las maquetas se llevan como recuerdo.",
      },
    ],
  },
];

const faqs = [
  {
    question: "¿Cuántas personas pueden participar en las actividades de team building?",
    answer:
      "Desde 10 hasta más de 150 personas. Adaptamos el formato de cada actividad al tamaño del grupo: para grupos grandes dividimos en subgrupos que rotan por distintas pruebas, y para grupos pequeños diseñamos experiencias más inmersivas. Cada formato tiene su logística optimizada.",
  },
  {
    question: "¿Las actividades se adaptan a personas con diferentes niveles de forma física?",
    answer:
      "Sí, siempre. Tenemos actividades de alta intensidad (regata, kayak, multiaventura) y actividades tranquilas (cata de vinos, taller de cocina, gymkana cultural). Dentro de cada actividad, los monitores adaptan la intensidad al grupo. Nadie se queda fuera por nivel físico.",
  },
  {
    question: "¿Se puede hacer team building como parte de un viaje de incentivos más largo?",
    answer:
      "Es lo más habitual. La mayoría de empresas integran una o dos actividades de team building dentro de un programa de incentivos de 2-3 días que incluye alojamiento, comidas, visitas y momentos de ocio libre. Diseñamos el programa completo para que todo encaje.",
  },
  {
    question: "¿Qué época del año es mejor para team building en Galicia?",
    answer:
      "Todo el año. Las actividades al aire libre funcionan mejor de abril a octubre, pero incluso en invierno Galicia tiene un clima suave que permite actividades náuticas y de naturaleza. Las actividades gastronómicas y culturales no dependen del tiempo. Siempre tenemos plan B para lluvia.",
  },
  {
    question: "¿Incluís coordinador durante la actividad?",
    answer:
      "Siempre. Cada actividad tiene un coordinador de Suunia que gestiona tiempos, grupos, materiales e imprevistos. Además, cada disciplina cuenta con sus propios monitores y profesionales especializados. La empresa solo tiene que participar y disfrutar.",
  },
  {
    question: "¿Se pueden personalizar las actividades con la imagen de la empresa?",
    answer:
      "Sí. Podemos personalizar materiales (dorsales, banderas, delantales), incorporar mensajes corporativos en las pruebas, crear un vídeo resumen del evento y adaptar la temática de las actividades a los valores o campaña de la empresa. Todo se habla y se diseña a medida.",
  },
];

export default function TeamBuildingGalicia() {
  return (
    <>
      <HeroPage
        title="Team building en Galicia"
        subtitle="Actividades de equipo que conectan con el mar, la gastronomía, la aventura y la naturaleza de Galicia. Cohesión real en un entorno que inspira."
        imageSrc="/images/experiencias-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Team building que deja huella</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Un buen team building no es una dinámica de oficina trasladada a un hotel con vistas. Es una experiencia real, en un entorno que saca a los equipos de su zona de confort y les hace vivir algo juntos que recordarán durante años. Galicia ofrece ese escenario: un mar atlántico donde aprender a navegar en equipo, una gastronomía que convierte cocinar en una competición memorable, bosques milenarios donde orientarse juntos y una tradición cultural que inspira actividades creativas imposibles en otro lugar.
              </p>
              <p>
                En Suunia diseñamos actividades de team building conectadas con el territorio gallego: no son dinámicas genéricas, son experiencias que solo pueden hacerse aquí. Cada actividad se adapta al perfil del grupo, los objetivos de la empresa y el tono del evento — desde competiciones de alto nivel para equipos comerciales hasta experiencias relajadas para encuentros directivos.
              </p>
              <p>
                Las actividades pueden funcionar de forma independiente o integrarse en un <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viaje de incentivos</Link>, un <Link href="/eventos-corporativos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">evento corporativo</Link> o un programa de varios días. Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, nos encargamos de todo: diseño de la actividad, monitores profesionales, material, transporte, catering y coordinación.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Categorías de actividades */}
      {categorias.map((cat) => (
        <section key={cat.title} className="section-padding odd:bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <AnimateOnScroll>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="heading-section">{cat.title}</h2>
                <p className="mt-4 text-lg text-gray-600">{cat.intro}</p>
              </div>
            </AnimateOnScroll>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {cat.actividades.map((act) => (
                <AnimateOnScroll key={act.name}>
                  <div className="card-elegant h-full">
                    <h3 className="font-semibold text-gray-900">{act.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">{act.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Qué incluyen */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Qué incluyen nuestras actividades de team building</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Diseño de la actividad adaptada al grupo",
                "Monitores y profesionales especializados",
                "Todo el material necesario (náutico, cocina, aventura)",
                "Coordinador de Suunia durante toda la actividad",
                "Transporte al punto de la actividad si es necesario",
                "Seguro de responsabilidad civil y accidentes",
                "Plan alternativo en caso de mal tiempo",
                "Posibilidad de branding corporativo en materiales",
              ].map((item, i) => (
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

      {/* CTA */}
      <CTASection
        title="¿Organizamos el team building de tu equipo en Galicia?"
        description="Cuéntanos cuántas personas sois, qué perfil tiene el grupo y qué tono buscáis. Preparamos una propuesta con las actividades que mejor encajen."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre team building</h2>
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
            serviceType: "Actividades de team building para empresas en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Team building en Galicia: regatas, kayak, talleres de cocina, marisqueo, gymkanas, rutas de aventura y experiencias culturales. Actividades conectadas con el mar, la gastronomía y la naturaleza atlántica.",
          }),
        }}
      />
    </>
  );
}
