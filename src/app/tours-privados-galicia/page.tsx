import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tours privados y experiencias auténticas en Galicia",
  description:
    "Tours privados en Galicia: rutas por Santiago, Costa da Morte, Rías Baixas, Islas Cíes, gastronomía gallega y rutas del vino. Experiencias personalizadas con guía local.",
  alternates: { canonical: "https://suunia.com/tours-privados-galicia" },
  openGraph: {
    title: "Tours privados en Galicia – Suunia",
    description:
      "Experiencias privadas y personalizadas en Galicia. Rutas gastronómicas, costa atlántica, patrimonio y naturaleza.",
    url: "https://suunia.com/tours-privados-galicia",
    images: [{ url: "/images/tours-privados-hero.jpg", width: 1200, height: 630 }],
  },
};

const tours = [
  {
    title: "Santiago de Compostela esencial",
    duration: "Medio día (4-5 horas)",
    description:
      "Recorrido privado por la ciudad que lleva siglos recibiendo peregrinos. La catedral y su Pórtico de la Gloria, las plazas del casco histórico, el mercado de abastos, las calles empedradas del centro y los rincones que los turistas no encuentran solos. El tour incluye guía privado, acceso preferente a la catedral y parada en alguno de los mejores locales de la ciudad para tapear como un compostelano.",
    image: "/images/tours-santiago.jpg",
    alt: "Plaza del Obradoiro con la fachada barroca de la Catedral de Santiago de Compostela al atardecer",
  },
  {
    title: "Costa da Morte: el fin del mundo",
    duration: "Día completo",
    description:
      "La Costa da Morte es uno de los tramos de litoral más impresionantes de Europa. Acantilados que caen al Atlántico, faros en el borde del mundo, playas salvajes y pueblos donde el tiempo parece haberse detenido. La ruta recorre Malpica, Camariñas (capital del encaje de bolillos), el cabo Vilán, Muxía y Fisterra. Incluye almuerzo en restaurante marinero con pescado del día y parada en el faro de Fisterra al atardecer.",
    image: "/images/tours-costa-da-morte.jpg",
    alt: "Faro de Fisterra sobre los acantilados de la Costa da Morte con el océano Atlántico al fondo",
  },
  {
    title: "Rías Baixas: mar, vino y marisco",
    duration: "Día completo",
    description:
      "Las Rías Baixas son la cara más luminosa de Galicia. Navegación en barco privado por la ría de Arousa o Pontevedra, visita a una batea de mejillones, parada en una isla o playa virgen, y almuerzo con el mejor marisco de la ría. Por la tarde, visita a bodega de Albariño con cata de vinos y paseo por Cambados, la capital del Albariño, o Sanxenxo.",
    image: "/images/tours-rias-baixas.jpg",
    alt: "Velero navegando entre las bateas de mejillones en la Ría de Arousa con pueblos marineros en la costa",
  },
  {
    title: "Islas Cíes: el paraíso atlántico",
    duration: "Día completo",
    description:
      "Las Islas Cíes forman parte del Parque Nacional de las Islas Atlánticas y su playa de Rodas ha sido considerada una de las mejores del mundo. Organizamos la visita con traslado al puerto, barco (público o privado según disponibilidad), permisos de acceso y planificación de la jornada. Senderismo por los senderos de la isla, baño en aguas cristalinas y almuerzo con vistas al océano.",
    image: "/images/tours-islas-cies.jpg",
    alt: "Playa de Rodas en las Islas Cíes con arena blanca y aguas turquesas del Parque Nacional Islas Atlánticas",
  },
  {
    title: "Ruta gastronómica por Galicia",
    duration: "1 o varios días",
    description:
      "Galicia se come. Este tour se diseña según los intereses gastronómicos del viajero: puede centrarse en el marisco de las rías, el pulpo del interior, las empanadas tradicionales, los quesos artesanos, los vinos de las cinco denominaciones de origen o la cocina de autor. Incluye visitas a mercados, lonjas, bodegas, queserías y talleres de cocina, con almuerzo y cena en restaurantes seleccionados.",
    image: "/images/tours-gastronomia.jpg",
    alt: "Puesto del mercado de abastos de Santiago con marisco fresco, percebes y nécoras recién traídos de la lonja",
  },
  {
    title: "Ribeira Sacra y ruta del vino",
    duration: "Día completo",
    description:
      "La Ribeira Sacra es una de las zonas vinícolas más espectaculares del mundo: viñedos plantados en bancales verticales sobre los cañones del río Sil. El tour incluye navegación en catamarán por los cañones, visita a bodega con cata de Mencía, almuerzo en restaurante con vistas al cañón y visita a monasterios románicos. Un paisaje que no se parece a nada que hayas visto.",
    image: "/images/tours-ribeira-sacra.jpg",
    alt: "Viñedos en bancales sobre los cañones del río Sil en la Ribeira Sacra con el río al fondo",
  },
];

export default function ToursPrivadosGalicia() {
  return (
    <>
      <HeroPage
        title="Tours privados y experiencias auténticas en Galicia"
        subtitle="Recorre Galicia a tu ritmo con experiencias diseñadas para ti. Guías locales, transporte privado y acceso a lugares que solo los gallegos conocen."
        imageSrc="/images/tours-privados-hero.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Experiencias personalizadas para descubrir Galicia de verdad</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Un tour privado no es simplemente un viaje con menos gente. Es la posibilidad de descubrir un destino a tu ritmo, según tus intereses, con alguien que conoce el terreno como la palma de su mano. En Suunia diseñamos cada experiencia desde cero, adaptándola a lo que realmente te motiva: gastronomía, naturaleza, patrimonio, vino, mar o una combinación de todo.
              </p>
              <p>
                Nuestros tours privados incluyen guía local profesional, <Link href="/logistica-servicios-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">transporte privado</Link> adaptado al grupo y un itinerario flexible que se puede ajustar sobre la marcha. No hay prisas, no hay autobuses turísticos y no hay visitas obligatorias a tiendas de souvenirs. Solo Galicia auténtica, contada por quienes la vivimos cada día.
              </p>
              <p>
                Trabajamos con parejas, familias, grupos de amigos y grupos reducidos de hasta 15-20 personas. Para grupos más grandes, nuestro servicio de <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes en grupo</Link> es la opción ideal. Para empresas que buscan premiar a sus equipos, organizamos <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes de incentivos</Link>. Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, cada tour se puede disfrutar como experiencia independiente o integrarse en un programa de varios días.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tours */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Nuestros tours destacados</h2>
              <p className="mt-4 text-lg text-gray-600">
                Estas son algunas de las experiencias que más solicitan nuestros clientes. Todas se adaptan y personalizan según tus preferencias.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 space-y-16">
            {tours.map((tour, i) => (
              <AnimateOnScroll key={tour.title}>
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                      {tour.duration}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                      {tour.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-gray-600">
                      {tour.description}
                    </p>
                    <a
                      href="https://wa.me/34678288284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-6"
                    >
                      Solicitar este tour
                    </a>
                  </div>
                  <div className={`relative h-72 overflow-hidden rounded-2xl md:h-96 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <Image
                      src={tour.image}
                      alt={tour.alt}
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

      {/* Qué incluye */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Qué incluyen nuestros tours privados</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {[
                { title: "Guía local privado", text: "Guías profesionales que viven en Galicia, conocen cada rincón y adaptan el relato a los intereses del grupo. Disponibles en español, inglés, francés y portugués." },
                { title: "Transporte privado", text: "Vehículo con conductor adaptado al tamaño del grupo. Desde coches para parejas hasta minibuses para grupos de 15-20 personas. Todos los desplazamientos incluidos." },
                { title: "Reservas y accesos", text: "Nos encargamos de reservar restaurantes, entradas, visitas a bodegas y cualquier actividad del programa. Sin colas, sin esperas y con acceso preferente cuando es posible." },
                { title: "Programa flexible", text: "El itinerario se adapta sobre la marcha. Si el grupo quiere alargar una parada, cambiar de restaurante o improvisar una visita, lo hacemos sin problema." },
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

      {/* Destinos */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Destinos que cubrimos en Galicia</h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              Nuestros tours llegan a cualquier punto de Galicia. Estos son algunos de los destinos más solicitados.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Santiago de Compostela",
                "A Coruña y Torre de Hércules",
                "Rías Baixas (Arousa, Pontevedra, Vigo)",
                "Islas Cíes y Parque Nacional",
                "Costa da Morte (Fisterra, Muxía)",
                "Ribeira Sacra y cañones del Sil",
                "Lugo y su muralla romana",
                "Ourense y termas naturales",
                "Cambados y ruta del Albariño",
                "O Grove y la Isla de La Toja",
                "Combarro y pueblos marineros",
                "Camino de Santiago (etapas)",
              ].map((destino) => (
                <div key={destino} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{destino}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Diseña tu tour privado en Galicia"
        description="Cuéntanos qué te gustaría ver, hacer y comer en Galicia. Nosotros nos encargamos de crear una experiencia a tu medida."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre tours privados en Galicia</h2>
          <div className="mt-12 space-y-8">
            {[
              {
                question: "¿Cuántas personas pueden participar en un tour privado?",
                answer: "Nuestros tours privados están diseñados para grupos de 2 a 15-20 personas. Para parejas y familias usamos coches o monovolúmenes; para grupos más grandes, minibuses con conductor. Si tu grupo supera las 20 personas, te recomendamos nuestro servicio de viajes organizados para grupos, que está preparado para gestionar logísticas más complejas.",
              },
              {
                question: "¿Los tours se pueden personalizar o son rutas fijas?",
                answer: "Todos nuestros tours son 100% personalizables. Los itinerarios que mostramos son propuestas base que adaptamos según los intereses, el ritmo y las preferencias de cada cliente. Puedes combinar elementos de distintos tours, añadir paradas o cambiar el enfoque completamente. Diseñamos cada experiencia desde cero.",
              },
              {
                question: "¿Qué incluye el precio de un tour privado?",
                answer: "Cada tour incluye guía local profesional, transporte privado con conductor, reservas de restaurantes y accesos, y un programa flexible. Las comidas y entradas a monumentos o bodegas se indican en cada presupuesto. No hay costes ocultos: te detallamos todo antes de confirmar.",
              },
              {
                question: "¿En qué idiomas están disponibles los guías?",
                answer: "Disponemos de guías profesionales en español, inglés, francés y portugués. Para otros idiomas, consúltanos con antelación y buscaremos la mejor solución.",
              },
              {
                question: "¿Con cuánta antelación debo reservar un tour privado?",
                answer: "Lo ideal es contactarnos con al menos 2-3 semanas de antelación, especialmente en temporada alta (junio-septiembre) y para tours que incluyen visitas a bodegas, restaurantes populares o las Islas Cíes, donde los permisos de acceso se agotan. Para temporada baja, podemos organizar tours con menos margen.",
              },
              {
                question: "¿Se pueden combinar varios tours en un programa de varios días?",
                answer: "Por supuesto. De hecho, es una de las opciones más solicitadas. Podemos diseñar un programa de 2, 3 o más días combinando diferentes tours y experiencias, con alojamiento incluido en hoteles seleccionados, pazos o casas rurales con encanto. Es la mejor forma de conocer Galicia en profundidad.",
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
              { question: "¿Cuántas personas pueden participar en un tour privado?", answer: "Nuestros tours privados están diseñados para grupos de 2 a 15-20 personas. Para parejas y familias usamos coches o monovolúmenes; para grupos más grandes, minibuses con conductor. Si tu grupo supera las 20 personas, te recomendamos nuestro servicio de viajes organizados para grupos, que está preparado para gestionar logísticas más complejas." },
              { question: "¿Los tours se pueden personalizar o son rutas fijas?", answer: "Todos nuestros tours son 100% personalizables. Los itinerarios que mostramos son propuestas base que adaptamos según los intereses, el ritmo y las preferencias de cada cliente. Puedes combinar elementos de distintos tours, añadir paradas o cambiar el enfoque completamente. Diseñamos cada experiencia desde cero." },
              { question: "¿Qué incluye el precio de un tour privado?", answer: "Cada tour incluye guía local profesional, transporte privado con conductor, reservas de restaurantes y accesos, y un programa flexible. Las comidas y entradas a monumentos o bodegas se indican en cada presupuesto. No hay costes ocultos: te detallamos todo antes de confirmar." },
              { question: "¿En qué idiomas están disponibles los guías?", answer: "Disponemos de guías profesionales en español, inglés, francés y portugués. Para otros idiomas, consúltanos con antelación y buscaremos la mejor solución." },
              { question: "¿Con cuánta antelación debo reservar un tour privado?", answer: "Lo ideal es contactarnos con al menos 2-3 semanas de antelación, especialmente en temporada alta (junio-septiembre) y para tours que incluyen visitas a bodegas, restaurantes populares o las Islas Cíes, donde los permisos de acceso se agotan. Para temporada baja, podemos organizar tours con menos margen." },
              { question: "¿Se pueden combinar varios tours en un programa de varios días?", answer: "Por supuesto. De hecho, es una de las opciones más solicitadas. Podemos diseñar un programa de 2, 3 o más días combinando diferentes tours y experiencias, con alojamiento incluido en hoteles seleccionados, pazos o casas rurales con encanto. Es la mejor forma de conocer Galicia en profundidad." },
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
            serviceType: "Tours privados en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Tours privados y experiencias personalizadas en Galicia: Santiago, Costa da Morte, Rías Baixas, Islas Cíes, gastronomía y rutas del vino.",
          }),
        }}
      />
    </>
  );
}
