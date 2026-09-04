import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Cultura y naturaleza en Galicia — Patrimonio, paisajes y rutas",
  description:
    "Experiencias culturales y de naturaleza en Galicia: Camino de Santiago, catedrales románicas, pazos, parques naturales, bosques atlánticos y paisajes únicos.",
  alternates: { canonical: "https://suunia.com/cultura-naturaleza-galicia" },
  openGraph: {
    title: "Cultura y naturaleza en Galicia – Suunia",
    description:
      "Patrimonio milenario, Camino de Santiago, parques naturales y paisajes atlánticos en Galicia.",
    url: "https://suunia.com/cultura-naturaleza-galicia",
    images: [{ url: "/images/acantilados-san-andres-teixido.jpg", width: 1200, height: 630 }],
  },
};

const experienciasCultura = [
  {
    title: "Camino de Santiago a medida",
    text: "El Camino de Santiago es mucho más que una ruta de peregrinación: es una experiencia cultural, espiritual y paisajística que atraviesa lo mejor de Galicia. Organizamos etapas seleccionadas del Camino con guía local, transporte de equipaje entre alojamientos, reservas gestionadas y asistencia durante todo el recorrido. Se puede hacer el Camino Francés, el Portugués, el del Norte o la Vía de la Plata, adaptando la distancia y la dificultad al nivel del grupo. También para quienes quieren caminar solo los últimos 100 km y obtener la Compostela.",
    details: [
      "Etapas seleccionadas según nivel y tiempo disponible",
      "Transporte de equipaje entre alojamientos",
      "Guía local y asistencia durante el recorrido",
      "Todos los Caminos: Francés, Portugués, del Norte, Vía de la Plata",
    ],
  },
  {
    title: "Patrimonio y monumentos",
    text: "Galicia concentra un patrimonio arquitectónico e histórico de una densidad sorprendente: la catedral de Santiago con el Pórtico de la Gloria, catedrales románicas en Ourense, Tui y Lugo, monasterios cistercienses en la Ribeira Sacra, pazos señoriales rodeados de jardines de camelias, castillos medievales, hórreos centenarios frente al mar y cascos históricos que conservan siglos de historia. Organizamos visitas guiadas privadas con historiadores y guías especializados que hacen que cada piedra cuente una historia.",
    details: [
      "Catedral de Santiago y Pórtico de la Gloria",
      "Monasterios románicos de la Ribeira Sacra",
      "Pazos señoriales con jardines de camelias",
      "Cascos históricos: Santiago, Lugo, Pontevedra, Ourense",
    ],
  },
  {
    title: "Galicia celta y mística",
    text: "Antes de los romanos, los celtas dejaron su huella en Galicia con castros (poblados fortificados), petroglifos grabados en la piedra hace miles de años, tradiciones que perviven en fiestas y rituales, y una mitología propia que habla de meigas, la Santa Compaña y bosques encantados. Organizamos rutas temáticas por los principales castros (Santa Tegra, Baroña, Viladonga), visitas a conjuntos de petroglifos con explicación arqueológica y experiencias que conectan con la Galicia más ancestral y misteriosa.",
    details: [
      "Castros celtas: Santa Tegra, Baroña, Viladonga",
      "Petroglifos y arte rupestre con guía arqueológico",
      "Tradiciones celtas: Samaín, magosto, rituales",
      "Bosques mágicos: Fragas do Eume, Souto de Rozabales",
    ],
  },
];

const experienciasNaturaleza = [
  {
    title: "Parque Nacional de las Islas Atlánticas",
    text: "Las Islas Cíes, Ons, Sálvora y Cortegada forman el único Parque Nacional marítimo-terrestre de Galicia. Playas de arena blanca con aguas transparentes, acantilados con colonias de aves marinas, fondos marinos protegidos y senderos que recorren bosques de laurel y eucalipto. Organizamos la visita completa: permisos de acceso (obligatorios y limitados), transporte marítimo, rutas de senderismo guiado y opciones de snorkel y kayak.",
    details: [
      "Islas Cíes: la playa de Rodas y los acantilados",
      "Isla de Ons: naturaleza salvaje y faro atlántico",
      "Gestión de permisos de acceso incluida",
      "Snorkel, kayak y senderismo guiado",
    ],
  },
  {
    title: "Fragas do Eume y bosques atlánticos",
    text: "Las Fragas do Eume son el bosque atlántico costero mejor conservado de Europa: un bosque de ribera con robles centenarios, helechos gigantes, líquenes que cubren cada rama y un río que se abre paso entre la vegetación creando un paisaje que parece sacado de otro tiempo. Organizamos rutas de senderismo con guía naturalista por las Fragas y por otros bosques gallegos como la Devesa da Rogueira, el Souto de Rozabales o los soutos de castaños de O Courel.",
    details: [
      "Fragas do Eume: el bosque atlántico de Europa",
      "Devesa da Rogueira en O Courel",
      "Soutos de castaños centenarios",
      "Rutas con guía naturalista especializado",
    ],
  },
  {
    title: "Senderismo y rutas naturales",
    text: "Galicia ofrece una variedad de paisajes que sorprende: acantilados atlánticos, dunas, marismas, cañones fluviales, sierras y valles interiores. Organizamos rutas de senderismo adaptadas a todos los niveles — desde paseos suaves por la costa hasta travesías de montaña por O Courel o los Ancares — con guía local, transporte al punto de inicio y asistencia logística. También rutas temáticas: ruta de los faros en la Costa da Morte, ruta de los miradores en la Ribeira Sacra o ruta de las playas salvajes en las Rías Altas.",
    details: [
      "Rutas costeras: acantilados, faros y playas",
      "Sierras: O Courel, Ancares, Queixa",
      "Cañones y ríos: Sil, Eume, Miño",
      "Rutas temáticas adaptadas a todos los niveles",
    ],
  },
  {
    title: "Observación de aves y fauna",
    text: "Galicia es un paraíso para la observación de aves gracias a sus humedales, acantilados costeros, islas y bosques. Las Rías Baixas y las marismas de O Grove concentran miles de aves migratorias; los acantilados de las Islas Atlánticas albergan colonias de alcatraces y cormoranes; y en las sierras interiores habitan águilas reales y lobos. Organizamos salidas con ornitólogos y guías naturalistas para conocer la fauna gallega en su hábitat natural.",
    details: [
      "Humedales y marismas: aves migratorias",
      "Islas Atlánticas: colonias de aves marinas",
      "Sierras interiores: fauna autóctona",
      "Con ornitólogo o guía naturalista",
    ],
  },
];

const faqs = [
  {
    question: "¿Las experiencias de cultura y naturaleza se pueden combinar en un mismo viaje?",
    answer:
      "Sí, y de hecho es lo más recomendable. Galicia permite combinar patrimonio cultural y naturaleza en una misma jornada: visitar un monasterio románico por la mañana y hacer senderismo por un bosque atlántico por la tarde. Diseñamos itinerarios que combinan ambas facetas sin saturar el programa.",
  },
  {
    question: "¿Qué nivel físico se necesita para las rutas de senderismo?",
    answer:
      "Tenemos rutas para todos los niveles: desde paseos suaves por la costa o bosques llanos hasta travesías de montaña con desnivel significativo. Siempre adaptamos la ruta al perfil del grupo y avisamos previamente del nivel de dificultad. Los guías llevan el ritmo del grupo, nunca al revés.",
  },
  {
    question: "¿Se puede hacer el Camino de Santiago en pocos días?",
    answer:
      "Sí. Organizamos etapas seleccionadas que se pueden hacer en 3-5 días, caminando los últimos 100 km del Camino Francés o Portugués para obtener la Compostela. También etapas sueltas de un día como excursión cultural, sin necesidad de hacer el Camino completo.",
  },
  {
    question: "¿Las visitas culturales son aptas para niños?",
    answer:
      "Sí. Adaptamos las visitas al público familiar: guías que saben enganchar a los niños con historias y leyendas, tiempos más flexibles, paradas frecuentes y actividades participativas. Los castros celtas, las islas y los bosques son especialmente atractivos para familias.",
  },
  {
    question: "¿Organizáis actividades de cultura y naturaleza para empresas?",
    answer:
      "Sí. Las actividades culturales y de naturaleza funcionan muy bien como parte de programas de incentivos y team building: rutas de senderismo en equipo, gymkhanas culturales por Santiago, competiciones de orientación en el bosque o visitas guiadas temáticas. Todo coordinado con el programa del evento.",
  },
];

export default function CulturaNaturalezaGalicia() {
  return (
    <>
      <HeroPage
        title="Cultura y naturaleza en Galicia"
        subtitle="Patrimonio milenario, paisajes atlánticos y una identidad que se siente en cada rincón. Galicia es cultura y naturaleza a partes iguales."
        imageSrc="/images/acantilados-san-andres-teixido.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Galicia por descubrir</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Más allá de la gastronomía y la costa, Galicia guarda un patrimonio cultural y natural de primer nivel europeo. Desde el Camino de Santiago — una de las rutas culturales más importantes del mundo — hasta bosques atlánticos que parecen de otro tiempo, pasando por catedrales románicas, pazos señoriales, castros celtas, parques naturales y paisajes que sorprenden por su diversidad. Todo en un territorio compacto donde en una misma jornada puedes visitar un monasterio del siglo XII y caminar por un bosque milenario.
              </p>
              <p>
                Integramos estas experiencias en <Link href="/viajes" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes organizados por Galicia</Link>, <Link href="/excursiones-privadas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">excursiones privadas</Link>, <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">grandes rutas de varios días</Link> y programas de <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">incentivos para empresas</Link>. También como experiencias sueltas para quienes ya están en Galicia y quieren profundizar en un tema concreto.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, trabajamos con guías especializados en historia, arqueología, naturaleza y patrimonio que conocen cada rincón y hacen que la visita sea algo completamente diferente a seguir una audioguía.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Experiencias culturales */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Experiencias culturales</h2>
              <p className="mt-4 text-lg text-gray-600">
                Un patrimonio milenario que abarca desde la Galicia celta hasta las grandes catedrales románicas y el Camino de Santiago.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-12">
            {experienciasCultura.map((exp) => (
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

      {/* Experiencias naturaleza */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Experiencias de naturaleza</h2>
              <p className="mt-4 text-lg text-gray-600">
                Parques nacionales, bosques atlánticos, acantilados, cañones fluviales y una biodiversidad que sorprende en cada rincón.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-12">
            {experienciasNaturaleza.map((exp) => (
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

      {/* Por qué con Suunia */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué descubrir cultura y naturaleza con Suunia</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "Guías especializados", text: "Historiadores, arqueólogos, naturalistas y guías del Camino de Santiago. Cada experiencia cuenta con un profesional que domina su campo y hace que la visita tenga una profundidad que no se consigue de otra forma." },
                { title: "Accesos exclusivos", text: "Conocemos a los propietarios de pazos privados, a los gestores de los parques naturales y a las personas que abren puertas que normalmente están cerradas. Eso nos permite ofrecer experiencias que van más allá del turismo convencional." },
                { title: "Programas combinados", text: "Cultura por la mañana, naturaleza por la tarde. O una ruta que mezcla patrimonio, gastronomía y paisaje sin forzar el programa. Diseñamos itinerarios equilibrados donde cada actividad complementa a la anterior." },
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
        title="¿Organizamos una experiencia cultural o de naturaleza?"
        description="Cuéntanos qué os interesa y preparamos una propuesta adaptada a vuestro grupo, fechas y nivel. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre cultura y naturaleza</h2>
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
            serviceType: "Experiencias culturales y de naturaleza en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Camino de Santiago, patrimonio románico, pazos, castros celtas, parques naturales, bosques atlánticos, senderismo y observación de fauna en Galicia. Organizadas por una agencia receptiva local.",
          }),
        }}
      />
    </>
  );
}
