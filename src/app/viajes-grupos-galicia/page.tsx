import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Viajes organizados para grupos en Galicia",
  description:
    "Organizamos viajes completos para grupos en Galicia: tours privados, rutas culturales, experiencias gastronómicas, actividades en el mar y escapadas personalizadas.",
  alternates: { canonical: "https://suunia.com/viajes-grupos-galicia" },
  openGraph: {
    title: "Viajes para grupos en Galicia – Suunia",
    description:
      "Tours organizados para grupos privados en Galicia. Rutas culturales, gastronomía, naturaleza y experiencias a medida.",
    url: "https://suunia.com/viajes-grupos-galicia",
    images: [{ url: "/images/viajes-grupos-hero.jpg", width: 1200, height: 630 }],
  },
};

const tiposViaje = [
  {
    title: "Tours privados para grupos",
    image: "/images/viajes-grupos-tours.jpg",
    alt: "Grupo de viajeros en tour privado recorriendo el casco histórico de Santiago de Compostela con guía local",
    description:
      "Rutas diseñadas específicamente para vuestro grupo, con guía privado, transporte exclusivo y un programa que se ajusta a vuestros intereses y ritmo. Desde medio día hasta viajes de una semana.",
    details: [
      "Guía local privado en español, inglés, francés o portugués",
      "Transporte adaptado al tamaño del grupo",
      "Paradas y visitas seleccionadas según intereses",
      "Flexibilidad para adaptar el programa sobre la marcha",
    ],
  },
  {
    title: "Rutas culturales y patrimoniales",
    image: "/images/viajes-grupos-cultura.jpg",
    alt: "Interior de la Catedral de Santiago de Compostela con el botafumeiro durante una visita cultural guiada",
    description:
      "Santiago de Compostela, la catedral, el casco histórico, el Camino de Santiago, monasterios románicos, pazos señoriales y la huella celta. Galicia tiene un patrimonio cultural que abarca siglos y que se vive en cada piedra.",
    details: [
      "Visitas guiadas a Santiago de Compostela con acceso preferente",
      "Recorridos por el Camino de Santiago (etapas seleccionadas)",
      "Pazos gallegos con visita y degustación",
      "Monasterios de la Ribeira Sacra con navegación por el Sil",
    ],
  },
  {
    title: "Excursiones y naturaleza",
    image: "/images/viajes-grupos-naturaleza.jpg",
    alt: "Acantilados de la Costa da Morte con vistas al océano Atlántico y vegetación verde gallega",
    description:
      "La naturaleza gallega ofrece paisajes atlánticos, bosques milenarios, cañones fluviales y parques naturales. Organizamos excursiones que combinan senderismo accesible, miradores espectaculares y contacto con la naturaleza.",
    details: [
      "Parque Nacional de las Islas Atlánticas (Cíes, Ons)",
      "Costa da Morte: acantilados, faros y playas salvajes",
      "Ribeira Sacra: viñedos en bancales y cañones del Sil",
      "Fragas do Eume: el último bosque atlántico de Europa",
    ],
  },
  {
    title: "Experiencias gastronómicas",
    image: "/images/viajes-grupos-gastronomia.jpg",
    alt: "Mesa con marisco gallego fresco, pulpo a feira y copas de vino Albariño en restaurante de las Rías Baixas",
    description:
      "La gastronomía es el gran motivo por el que muchos viajeros eligen Galicia. Organizamos experiencias culinarias que van más allá de la simple comida: talleres de cocina, visitas a bodegas, recorridos por mercados, marisqueo en la ría y cenas privadas con chef.",
    details: [
      "Ruta de tapas y marisquerías en ciudades gallegas",
      "Visitas a bodegas de Albariño con cata maridaje",
      "Talleres de cocina gallega con productos locales",
      "Experiencia de marisqueo en la ría con degustación",
    ],
  },
  {
    title: "Actividades en el mar",
    image: "/images/viajes-grupos-mar.jpg",
    alt: "Catamarán navegando por la Ría de Arousa con las bateas de mejillones y la costa gallega al fondo",
    description:
      "Galicia es un destino marítimo por excelencia. Las rías, las islas y la costa atlántica ofrecen un abanico de actividades náuticas que complementan cualquier programa de viaje para grupos.",
    details: [
      "Navegación en velero o catamarán por las Rías Baixas",
      "Paseos en barco con patrón privado (SeaGalicia)",
      "Kayak, paddle surf y snorkel en playas de las Cíes",
      "Experiencia marinera: pesca, marisqueo y lonjas",
    ],
  },
  {
    title: "Escapadas personalizadas",
    image: "/images/viajes-grupos-escapada.jpg",
    alt: "Pazo gallego de piedra rodeado de jardines y camelias utilizado como alojamiento rural con encanto",
    description:
      "A veces el mejor viaje es el que no tiene un programa rígido. Diseñamos escapadas donde el grupo tiene margen para improvisar, con una base logística sólida y recomendaciones locales que garantizan que cada momento valga la pena.",
    details: [
      "Alojamiento en hoteles con encanto, pazos o casas rurales",
      "Listado personalizado de restaurantes y actividades",
      "Transporte disponible para desplazamientos opcionales",
      "Contacto local permanente para consultas y reservas",
    ],
  },
];

export default function ViajesGruposGalicia() {
  return (
    <>
      <HeroPage
        title="Viajes organizados para grupos en Galicia"
        subtitle="Diseñamos y gestionamos viajes completos para grupos privados en Galicia. Cada programa se crea a medida según los intereses, el tamaño y el presupuesto de tu grupo."
        imageSrc="/images/viajes-grupos-hero.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Viajes de grupo diseñados para disfrutar, no para preocuparse</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Organizar un viaje de grupo es complicado. Coordinar horarios, gustos, presupuestos y logística para varias personas multiplica las decisiones y los posibles problemas. ¿Dónde comer para 20 personas sin reservar con semanas de antelación? ¿Qué transporte funciona para un grupo de 40? ¿Cómo asegurar que el programa gusta a todos?
              </p>
              <p>
                En Suunia nos encargamos de todo eso. Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva en Galicia</Link>, diseñamos el programa según las preferencias del grupo, reservamos todos los servicios, coordinamos la <Link href="/logistica-servicios-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">logística completa</Link> y proporcionamos soporte durante el viaje. Nuestro trabajo es que el grupo solo tenga que preocuparse de una cosa: disfrutar de Galicia.
              </p>
              <p>
                Trabajamos con grupos de cualquier tamaño: desde 8-10 personas hasta más de 100. Para grupos pequeños o parejas, nuestros <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link> son la opción ideal. Para empresas que buscan motivar equipos, ofrecemos <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes de incentivos corporativos</Link>. Atendemos a grupos de amigos, familias, asociaciones, clubes, colegios profesionales y cualquier colectivo que quiera vivir una experiencia de calidad en Galicia con la tranquilidad de tener todo organizado por profesionales locales.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Cómo organizamos un viaje de grupo */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Cómo organizamos tu viaje</h2>
              <p className="mt-4 text-lg text-gray-600">
                Un proceso claro y profesional para que desde el primer contacto hasta el último día todo fluya.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "1", title: "Escuchamos", text: "Nos cuentas qué tipo de grupo es, cuántas personas, qué fechas manejáis, qué intereses tenéis y cuál es vuestro presupuesto orientativo. Con esa información ya podemos trabajar." },
                { step: "2", title: "Diseñamos", text: "Creamos un programa a medida con propuestas de alojamiento, restaurantes, actividades y transporte. Te enviamos un itinerario detallado con opciones y precios para que elijas." },
                { step: "3", title: "Coordinamos", text: "Una vez aprobado el programa, nos encargamos de todas las reservas, confirmaciones y coordinación con proveedores. Preparamos documentación completa para el grupo." },
                { step: "4", title: "Acompañamos", text: "Durante el viaje, estamos disponibles para cualquier necesidad. Acompañamiento presencial si lo prefieres, o soporte telefónico permanente para resolver cualquier incidencia." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-atlantic-700 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tipos de viaje */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Tipos de viajes para grupos</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cada grupo es diferente. Por eso ofrecemos distintos tipos de experiencias que se pueden combinar en un programa único.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 space-y-16">
            {tiposViaje.map((tipo, i) => (
              <AnimateOnScroll key={tipo.title}>
                <div className="grid items-start gap-8 md:grid-cols-2">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <h3 className="text-xl font-semibold text-gray-900">{tipo.title}</h3>
                    <p className="mt-4 leading-relaxed text-gray-600">{tipo.description}</p>
                    <ul className="mt-6 space-y-3">
                      {tipo.details.map((detail, j) => (
                        <li key={j} className="flex gap-3 text-sm text-gray-600">
                          <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative h-64 overflow-hidden rounded-2xl md:h-80 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <Image
                      src={tipo.image}
                      alt={tipo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluyen nuestros viajes */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">¿Qué incluyen nuestros viajes de grupo?</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                "Diseño de itinerario personalizado según preferencias del grupo",
                "Alojamiento seleccionado (hoteles, pazos, casas rurales, boutique)",
                "Transporte adaptado al grupo (minibús, autocar, vehículos VIP)",
                "Restaurantes reservados con menús acordados previamente",
                "Guías locales especializados en las visitas programadas",
                "Actividades y experiencias coordinadas y confirmadas",
                "Documentación completa del viaje para todos los participantes",
                "Contacto y soporte permanente durante todo el viaje",
                "Seguro de responsabilidad civil y cumplimiento normativo",
                "Gestión de imprevistos y alternativas en caso de cambios",
              ].map((item, i) => (
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

      {/* CTA */}
      <CTASection
        title="¿Tienes un grupo que quiere venir a Galicia?"
        description="Envíanos los datos básicos (fechas, número de personas, intereses) y te preparamos una propuesta detallada sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre viajes de grupo en Galicia</h2>
          <div className="mt-12 space-y-8">
            {[
              {
                question: "¿Qué tamaño de grupo podéis gestionar?",
                answer: "Trabajamos con grupos desde 8-10 personas hasta más de 100. Hemos organizado viajes para grupos de amigos de 12 personas y programas para asociaciones de más de 80. El tamaño del grupo condiciona la logística (transporte, restaurantes, alojamiento), pero eso es precisamente lo que gestionamos con experiencia.",
              },
              {
                question: "¿Los viajes son paquetes cerrados o se diseñan a medida?",
                answer: "Todos nuestros viajes de grupo se diseñan a medida. No vendemos paquetes cerrados. Partimos de las preferencias del grupo (intereses, fechas, presupuesto, perfil de los participantes) y construimos un programa personalizado. Cada viaje es único porque cada grupo es diferente.",
              },
              {
                question: "¿Cuánto tiempo de antelación necesitáis?",
                answer: "Lo recomendable es contactarnos con al menos 4-6 semanas de antelación para grupos pequeños y 8-10 semanas para grupos grandes o en temporada alta (junio-septiembre). En algunos casos hemos resuelto viajes con plazos más cortos, pero cuanto más margen tengamos, mejores opciones de alojamiento y restaurantes podemos conseguir.",
              },
              {
                question: "¿Qué incluye el precio del viaje de grupo?",
                answer: "Depende del programa, pero normalmente incluye: diseño del itinerario, alojamiento, transporte adaptado al grupo, restaurantes con menús acordados, guías locales, actividades y experiencias programadas, documentación del viaje y soporte durante toda la estancia. Te enviamos un presupuesto detallado sin compromiso.",
              },
              {
                question: "¿Proporcionáis acompañante durante el viaje?",
                answer: "Sí, ofrecemos servicio de acompañamiento presencial durante todo el viaje si el grupo lo necesita. También proporcionamos soporte telefónico permanente para resolver cualquier incidencia. La mayoría de grupos con programas de varios días prefieren tener un coordinador de Suunia presente.",
              },
              {
                question: "¿Podéis organizar viajes para empresas o solo para grupos privados?",
                answer: "Trabajamos con ambos perfiles. Para empresas que buscan viajes de motivación, team building o premiar resultados, contamos con un servicio específico de viajes de incentivos corporativos con actividades diseñadas para equipos profesionales. Para grupos privados (amigos, familias, asociaciones), diseñamos programas centrados en disfrutar de Galicia.",
              },
            ].map((faq, i) => (
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
            mainEntity: [
              { question: "¿Qué tamaño de grupo podéis gestionar?", answer: "Trabajamos con grupos desde 8-10 personas hasta más de 100. Hemos organizado viajes para grupos de amigos de 12 personas y programas para asociaciones de más de 80. El tamaño del grupo condiciona la logística (transporte, restaurantes, alojamiento), pero eso es precisamente lo que gestionamos con experiencia." },
              { question: "¿Los viajes son paquetes cerrados o se diseñan a medida?", answer: "Todos nuestros viajes de grupo se diseñan a medida. No vendemos paquetes cerrados. Partimos de las preferencias del grupo (intereses, fechas, presupuesto, perfil de los participantes) y construimos un programa personalizado. Cada viaje es único porque cada grupo es diferente." },
              { question: "¿Cuánto tiempo de antelación necesitáis?", answer: "Lo recomendable es contactarnos con al menos 4-6 semanas de antelación para grupos pequeños y 8-10 semanas para grupos grandes o en temporada alta (junio-septiembre). En algunos casos hemos resuelto viajes con plazos más cortos, pero cuanto más margen tengamos, mejores opciones de alojamiento y restaurantes podemos conseguir." },
              { question: "¿Qué incluye el precio del viaje de grupo?", answer: "Depende del programa, pero normalmente incluye: diseño del itinerario, alojamiento, transporte adaptado al grupo, restaurantes con menús acordados, guías locales, actividades y experiencias programadas, documentación del viaje y soporte durante toda la estancia. Te enviamos un presupuesto detallado sin compromiso." },
              { question: "¿Proporcionáis acompañante durante el viaje?", answer: "Sí, ofrecemos servicio de acompañamiento presencial durante todo el viaje si el grupo lo necesita. También proporcionamos soporte telefónico permanente para resolver cualquier incidencia. La mayoría de grupos con programas de varios días prefieren tener un coordinador de Suunia presente." },
              { question: "¿Podéis organizar viajes para empresas o solo para grupos privados?", answer: "Trabajamos con ambos perfiles. Para empresas que buscan viajes de motivación, team building o premiar resultados, contamos con un servicio específico de viajes de incentivos corporativos con actividades diseñadas para equipos profesionales. Para grupos privados (amigos, familias, asociaciones), diseñamos programas centrados en disfrutar de Galicia." },
            ].map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Viajes organizados para grupos en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Organización completa de viajes para grupos en Galicia: tours privados, rutas culturales, experiencias gastronómicas, actividades marítimas y escapadas personalizadas.",
          }),
        }}
      />
    </>
  );
}
