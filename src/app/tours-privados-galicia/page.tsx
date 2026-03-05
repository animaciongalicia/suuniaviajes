import type { Metadata } from "next";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
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
    images: [{ url: "/images/gastronomia-galicia.jpg", width: 1200, height: 630 }],
  },
};

const tours = [
  {
    title: "Santiago de Compostela esencial",
    duration: "Medio día (4-5 horas)",
    description:
      "Recorrido privado por la ciudad que lleva siglos recibiendo peregrinos. La catedral y su Pórtico de la Gloria, las plazas del casco histórico, el mercado de abastos, las calles empedradas del centro y los rincones que los turistas no encuentran solos. El tour incluye guía privado, acceso preferente a la catedral y parada en alguno de los mejores locales de la ciudad para tapear como un compostelano.",
    image: "/images/experiencias-galicia.jpg",
  },
  {
    title: "Costa da Morte: el fin del mundo",
    duration: "Día completo",
    description:
      "La Costa da Morte es uno de los tramos de litoral más impresionantes de Europa. Acantilados que caen al Atlántico, faros en el borde del mundo, playas salvajes y pueblos donde el tiempo parece haberse detenido. La ruta recorre Malpica, Camariñas (capital del encaje de bolillos), el cabo Vilán, Muxía y Fisterra. Incluye almuerzo en restaurante marinero con pescado del día y parada en el faro de Fisterra al atardecer.",
    image: "/images/ruta-mar-galicia.jpg",
  },
  {
    title: "Rías Baixas: mar, vino y marisco",
    duration: "Día completo",
    description:
      "Las Rías Baixas son la cara más luminosa de Galicia. Navegación en barco privado por la ría de Arousa o Pontevedra, visita a una batea de mejillones, parada en una isla o playa virgen, y almuerzo con el mejor marisco de la ría. Por la tarde, visita a bodega de Albariño con cata de vinos y paseo por Cambados, la capital del Albariño, o Sanxenxo.",
    image: "/images/gastronomia-galicia.jpg",
  },
  {
    title: "Islas Cíes: el paraíso atlántico",
    duration: "Día completo",
    description:
      "Las Islas Cíes forman parte del Parque Nacional de las Islas Atlánticas y su playa de Rodas ha sido considerada una de las mejores del mundo. Organizamos la visita con traslado al puerto, barco (público o privado según disponibilidad), permisos de acceso y planificación de la jornada. Senderismo por los senderos de la isla, baño en aguas cristalinas y almuerzo con vistas al océano.",
    image: "/images/ruta-mar-galicia.jpg",
  },
  {
    title: "Ruta gastronómica por Galicia",
    duration: "1 o varios días",
    description:
      "Galicia se come. Este tour se diseña según los intereses gastronómicos del viajero: puede centrarse en el marisco de las rías, el pulpo del interior, las empanadas tradicionales, los quesos artesanos, los vinos de las cinco denominaciones de origen o la cocina de autor. Incluye visitas a mercados, lonjas, bodegas, queserías y talleres de cocina, con almuerzo y cena en restaurantes seleccionados.",
    image: "/images/gastronomia-galicia.jpg",
  },
  {
    title: "Ribeira Sacra y ruta del vino",
    duration: "Día completo",
    description:
      "La Ribeira Sacra es una de las zonas vinícolas más espectaculares del mundo: viñedos plantados en bancales verticales sobre los cañones del río Sil. El tour incluye navegación en catamarán por los cañones, visita a bodega con cata de Mencía, almuerzo en restaurante con vistas al cañón y visita a monasterios románicos. Un paisaje que no se parece a nada que hayas visto.",
    image: "/images/experiencias-galicia.jpg",
  },
];

export default function ToursPrivadosGalicia() {
  return (
    <>
      <HeroPage
        title="Tours privados y experiencias auténticas en Galicia"
        subtitle="Recorre Galicia a tu ritmo con experiencias diseñadas para ti. Guías locales, transporte privado y acceso a lugares que solo los gallegos conocen."
        imageSrc="/images/gastronomia-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Experiencias personalizadas para descubrir Galicia de verdad</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Un tour privado no es simplemente un viaje con menos gente. Es la posibilidad de descubrir un destino a tu ritmo, según tus intereses, con alguien que conoce el terreno como la palma de su mano. En Suunia diseñamos cada experiencia desde cero, adaptándola a lo que realmente te motiva: gastronomía, naturaleza, patrimonio, vino, mar o una combinación de todo.
            </p>
            <p>
              Nuestros tours privados incluyen guía local profesional, transporte privado adaptado al grupo y un itinerario flexible que se puede ajustar sobre la marcha. No hay prisas, no hay autobuses turísticos y no hay visitas obligatorias a tiendas de souvenirs. Solo Galicia auténtica, contada por quienes la vivimos cada día.
            </p>
            <p>
              Trabajamos con parejas, familias, grupos de amigos y grupos reducidos de hasta 15-20 personas. Para grupos más grandes, nuestro servicio de viajes en grupo es la opción ideal. Cada tour se puede disfrutar como experiencia independiente o integrarse en un programa de varios días.
            </p>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Nuestros tours destacados</h2>
            <p className="mt-4 text-lg text-gray-600">
              Estas son algunas de las experiencias que más solicitan nuestros clientes. Todas se adaptan y personalizan según tus preferencias.
            </p>
          </div>
          <div className="mt-12 space-y-16">
            {tours.map((tour, i) => (
              <div
                key={tour.title}
                className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}
              >
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
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
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
        </div>
      </section>

      {/* Destinos */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl">
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
                <svg className="h-5 w-5 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">{destino}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Diseña tu tour privado en Galicia"
        description="Cuéntanos qué te gustaría ver, hacer y comer en Galicia. Nosotros nos encargamos de crear una experiencia a tu medida."
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
