import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Servicios logísticos para viajes y eventos en Galicia",
  description:
    "Servicios logísticos en Galicia: transporte VIP, traslados aeropuerto, alquiler de barcos con patrón, coordinación de proveedores y soporte para agencias.",
  alternates: { canonical: "https://suunia.com/logistica-servicios-galicia" },
  openGraph: {
    title: "Servicios logísticos en Galicia – Suunia",
    description:
      "Logística completa para viajes y eventos en Galicia. Transporte VIP, barcos, coordinación de proveedores.",
    url: "https://suunia.com/logistica-servicios-galicia",
    images: [{ url: "/images/ruta-mar-galicia.jpg", width: 1200, height: 630 }],
  },
};

const servicios = [
  {
    title: "Transporte VIP y traslados",
    partner: "LuxeGalicia",
    description:
      "Servicio de transporte privado con vehículos premium y conductores profesionales. Desde sedanes ejecutivos para traslados individuales hasta minibuses y autocares para grupos grandes. Todos los vehículos son de última generación, con climatización, WiFi y confort máximo.",
    detalles: [
      "Traslados aeropuerto Santiago (SCQ) y Vigo (VGO)",
      "Traslados desde estaciones de tren y autobús",
      "Servicio de vehículo con conductor durante todo el viaje",
      "Coches ejecutivos, monovolúmenes, minibuses y autocares",
      "Rutas turísticas con paradas programadas",
      "Servicio disponible 24 horas para eventos y emergencias",
    ],
  },
  {
    title: "Alquiler de barcos con patrón",
    partner: "SeaGalicia",
    description:
      "Experiencias náuticas en las rías gallegas con barcos de diferentes tamaños y patrones profesionales. Desde veleros para grupos reducidos hasta catamaranes y yates para eventos corporativos. Navegación por las Rías Baixas, visita a las Islas Cíes, excursiones de pesca y experiencias de marisqueo.",
    detalles: [
      "Veleros para 4-12 personas con patrón",
      "Catamaranes para grupos de hasta 40 personas",
      "Lanchas rápidas para traslados a islas",
      "Yates para eventos premium y celebraciones",
      "Rutas de navegación personalizadas por las rías",
      "Experiencias combinadas: navegación + marisqueo + gastronomía",
    ],
  },
  {
    title: "Coordinación de proveedores",
    description:
      "Gestionamos y coordinamos toda la red de proveedores necesaria para un viaje o evento: hoteles, restaurantes, guías, transportes, actividades, salas, catering y cualquier servicio que se necesite. Nuestro conocimiento del mercado local nos permite seleccionar a los mejores proveedores para cada tipo de programa y negociar condiciones ventajosas.",
    detalles: [
      "Selección y contratación de hoteles y alojamientos",
      "Reserva y coordinación de restaurantes con menús especiales",
      "Contratación de guías locales en varios idiomas",
      "Gestión de permisos y autorizaciones (Islas Cíes, espacios naturales)",
      "Coordinación de proveedores de actividades y experiencias",
      "Negociación de tarifas grupales y condiciones especiales",
    ],
  },
  {
    title: "Organización de actividades",
    description:
      "Diseñamos, organizamos y ejecutamos actividades para grupos de cualquier tamaño. Desde actividades de team building hasta experiencias gastronómicas, culturales y deportivas. Nos encargamos de toda la producción: materiales, monitores, permisos, seguros y coordinación.",
    detalles: [
      "Actividades de team building (regatas, gymkanas, talleres)",
      "Experiencias gastronómicas (catas, talleres, rutas de tapas)",
      "Actividades deportivas y de aventura (kayak, senderismo, surf)",
      "Visitas guiadas culturales y patrimoniales",
      "Experiencias marineras (pesca, marisqueo, bateas)",
      "Actividades nocturnas y de entretenimiento",
    ],
  },
  {
    title: "Soporte para agencias de viajes",
    description:
      "Si eres agencia de viajes y necesitas un receptivo de confianza en Galicia, somos tu partner. Ofrecemos servicio completo de receptivo para agencias: diseño de programas, cotización, confirmación de servicios, coordinación en destino y soporte durante la operación. Trabajamos con rapidez, profesionalidad y comisiones competitivas.",
    detalles: [
      "Diseño de programas a medida para tus clientes",
      "Cotizaciones detalladas con precios netos para agencias",
      "Confirmación y gestión de todos los servicios",
      "Documentación completa del viaje (programa, vouchers, contactos)",
      "Coordinación en destino con acompañante si se necesita",
      "Soporte telefónico 24h durante la operación",
    ],
  },
];

export default function LogisticaServiciosGalicia() {
  return (
    <>
      <HeroPage
        title="Servicios logísticos para viajes y eventos en Galicia"
        subtitle="Transporte VIP, barcos con patrón, coordinación de proveedores y soporte operativo completo. La logística que necesitas para que todo funcione."
        imageSrc="/images/ruta-mar-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Logística profesional en Galicia para viajes y eventos</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Detrás de cada <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viaje de grupo</Link>, cada evento corporativo y cada experiencia turística hay una logística compleja que alguien tiene que gestionar. Transporte que funcione, proveedores que cumplan, reservas que estén confirmadas, permisos que estén tramitados y alguien en el terreno que resuelva lo que surja.
            </p>
            <p>
              En Suunia no solo diseñamos programas y experiencias: somos los que hacemos que todo funcione sobre el terreno. Nuestra red de proveedores seleccionados, nuestra capacidad operativa y nuestro conocimiento del territorio gallego nos permiten gestionar la logística de cualquier tipo de viaje o evento con la garantía de que todo saldrá según lo previsto. Ya sea para <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link> o <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">programas de incentivos corporativos</Link>, cubrimos toda la operativa.
            </p>
            <p>
              Si eres una agencia de viajes que necesita un <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">receptivo fiable en Galicia</Link>, una empresa que organiza un evento y necesita logística local, o un particular que quiere un viaje organizado sin preocupaciones, nuestros servicios logísticos cubren todas tus necesidades.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Nuestros servicios logísticos</h2>
          </div>
          <div className="mt-12 space-y-12">
            {servicios.map((srv) => (
              <div key={srv.title} className="card-elegant">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {srv.title}
                    </h3>
                    {"partner" in srv && srv.partner && (
                      <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                        Partner: {srv.partner}
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {srv.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {srv.detalles.map((det, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {det}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Nuestros partners logísticos</h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Trabajamos con empresas especializadas en Galicia para ofrecer los mejores servicios en cada área.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card-elegant">
              <h3 className="text-lg font-semibold text-atlantic-800">SeaGalicia</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Nuestra empresa partner para experiencias náuticas. SeaGalicia dispone de una flota de veleros, catamaranes y lanchas con patrones profesionales que conocen cada rincón de las rías gallegas. Desde un paseo en velero para una pareja hasta una regata para 60 personas, SeaGalicia cubre cualquier necesidad náutica con profesionalidad y seguridad.
              </p>
            </div>
            <div className="card-elegant">
              <h3 className="text-lg font-semibold text-atlantic-800">LuxeGalicia</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Partner especializado en transporte premium en Galicia. LuxeGalicia ofrece vehículos de alta gama con conductores profesionales para traslados, servicios durante el viaje y rutas turísticas. Desde un traslado ejecutivo desde el aeropuerto hasta un servicio de autocar con guía para un grupo de 50 personas, LuxeGalicia garantiza puntualidad, confort y profesionalidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Ventajas de trabajar con Suunia</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Un solo interlocutor", text: "No necesitas hablar con 10 proveedores diferentes. Nos cuentas lo que necesitas y nosotros coordinamos todo." },
              { title: "Proveedores verificados", text: "Cada proveedor de nuestra red ha sido probado y evaluado. Trabajamos solo con profesionales de confianza." },
              { title: "Precios competitivos", text: "Al trabajar volumen con nuestros proveedores, conseguimos tarifas que un cliente directo no puede obtener." },
              { title: "Resolución de imprevistos", text: "Si algo falla durante el viaje, tenemos alternativas preparadas y la capacidad de resolver sobre la marcha." },
              { title: "Cobertura total en Galicia", text: "Desde Santiago hasta Vigo, desde A Coruña hasta Ourense. Trabajamos en todas las provincias y comarcas gallegas." },
              { title: "Experiencia real", text: "Conocemos el terreno porque vivimos y trabajamos aquí. Sabemos qué funciona, qué no y cómo sacar el máximo partido a cada destino." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <svg aria-hidden="true" className="mt-1 h-6 w-6 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Necesitas logística en Galicia?"
        description="Transporte, barcos, proveedores, coordinación... Cuéntanos qué necesitas y te damos solución. Un solo contacto para toda la logística de tu viaje o evento."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre servicios logísticos</h2>
          <div className="mt-12 space-y-8">
            {[
              {
                question: "¿Qué tipo de transporte ofrecéis en Galicia?",
                answer: "A través de nuestro partner LuxeGalicia, ofrecemos vehículos premium con conductor profesional: coches ejecutivos para traslados individuales, monovolúmenes para grupos pequeños, minibuses para grupos medianos y autocares para grupos grandes. Todos los vehículos son de última generación con climatización y WiFi. Servicio disponible 24 horas.",
              },
              {
                question: "¿Podéis organizar experiencias náuticas para nuestro grupo?",
                answer: "Sí. Con SeaGalicia, nuestro partner náutico, disponemos de veleros para 4-12 personas, catamaranes para hasta 40 personas, lanchas rápidas y yates para eventos premium. Todas las embarcaciones incluyen patrón profesional. Organizamos desde paseos tranquilos por la ría hasta regatas competitivas de team building.",
              },
              {
                question: "¿Gestionáis los permisos para visitar las Islas Cíes?",
                answer: "Sí, nos encargamos de gestionar los permisos de acceso a las Islas Cíes y otros espacios naturales protegidos de Galicia. Estos permisos tienen cupo limitado, especialmente en temporada alta, por lo que recomendamos contactarnos con la mayor antelación posible.",
              },
              {
                question: "¿Trabajáis con agencias de viajes como receptivo?",
                answer: "Sí, somos receptivo de confianza para agencias de viajes que necesitan un partner local en Galicia. Ofrecemos diseño de programas, cotizaciones con precios netos, confirmación de servicios, documentación completa y soporte 24h durante la operación. Trabajamos con rapidez y comisiones competitivas.",
              },
              {
                question: "¿Cuál es la ventaja de contratar la logística con Suunia en lugar de hacerlo directamente?",
                answer: "Al trabajar con nosotros tienes un solo interlocutor para todos los servicios. Nos encargamos de coordinar proveedores, gestionar reservas, negociar tarifas grupales y resolver imprevistos. Además, al trabajar volumen con nuestros proveedores, conseguimos precios que un cliente directo difícilmente puede obtener.",
              },
              {
                question: "¿En qué zonas de Galicia ofrecéis servicios logísticos?",
                answer: "Cubrimos toda Galicia: desde A Coruña y Santiago hasta Vigo y Pontevedra, pasando por Lugo, Ourense, Rías Baixas, Costa da Morte, Ribeira Sacra y cualquier punto del territorio gallego. Nuestra base está en A Coruña, pero nos desplazamos y coordinamos servicios en cualquier ubicación.",
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
              { question: "¿Qué tipo de transporte ofrecéis en Galicia?", answer: "A través de nuestro partner LuxeGalicia, ofrecemos vehículos premium con conductor profesional: coches ejecutivos para traslados individuales, monovolúmenes para grupos pequeños, minibuses para grupos medianos y autocares para grupos grandes. Todos los vehículos son de última generación con climatización y WiFi. Servicio disponible 24 horas." },
              { question: "¿Podéis organizar experiencias náuticas para nuestro grupo?", answer: "Sí. Con SeaGalicia, nuestro partner náutico, disponemos de veleros para 4-12 personas, catamaranes para hasta 40 personas, lanchas rápidas y yates para eventos premium. Todas las embarcaciones incluyen patrón profesional. Organizamos desde paseos tranquilos por la ría hasta regatas competitivas de team building." },
              { question: "¿Gestionáis los permisos para visitar las Islas Cíes?", answer: "Sí, nos encargamos de gestionar los permisos de acceso a las Islas Cíes y otros espacios naturales protegidos de Galicia. Estos permisos tienen cupo limitado, especialmente en temporada alta, por lo que recomendamos contactarnos con la mayor antelación posible." },
              { question: "¿Trabajáis con agencias de viajes como receptivo?", answer: "Sí, somos receptivo de confianza para agencias de viajes que necesitan un partner local en Galicia. Ofrecemos diseño de programas, cotizaciones con precios netos, confirmación de servicios, documentación completa y soporte 24h durante la operación. Trabajamos con rapidez y comisiones competitivas." },
              { question: "¿Cuál es la ventaja de contratar la logística con Suunia en lugar de hacerlo directamente?", answer: "Al trabajar con nosotros tienes un solo interlocutor para todos los servicios. Nos encargamos de coordinar proveedores, gestionar reservas, negociar tarifas grupales y resolver imprevistos. Además, al trabajar volumen con nuestros proveedores, conseguimos precios que un cliente directo difícilmente puede obtener." },
              { question: "¿En qué zonas de Galicia ofrecéis servicios logísticos?", answer: "Cubrimos toda Galicia: desde A Coruña y Santiago hasta Vigo y Pontevedra, pasando por Lugo, Ourense, Rías Baixas, Costa da Morte, Ribeira Sacra y cualquier punto del territorio gallego. Nuestra base está en A Coruña, pero nos desplazamos y coordinamos servicios en cualquier ubicación." },
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
            serviceType: "Servicios logísticos para viajes y eventos en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Servicios logísticos en Galicia: transporte VIP, barcos con patrón, coordinación de proveedores, organización de actividades y soporte para agencias.",
          }),
        }}
      />
    </>
  );
}
