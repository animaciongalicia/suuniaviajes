import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Náutica en Galicia — Yates, veleros y rutas de navegación por las rías",
  description:
    "Descubre Galicia navegando: alquiler de yates y veleros premium, rutas de fin de semana por las rías, travesías a las Islas Atlánticas y chárter de lujo de una semana. Organizado por Suunia.",
  alternates: { canonical: "https://suunia.com/nautica-galicia" },
  openGraph: {
    title: "Náutica en Galicia – Suunia",
    description:
      "Yates, veleros premium y rutas de navegación para conocer Galicia desde el mar. Charter de lujo por las rías gallegas.",
    url: "https://suunia.com/nautica-galicia",
    images: [{ url: "/images/playa-rodas-islas-cies-suunia-jpg.jpg", width: 1200, height: 630 }],
  },
};

const rutas = [
  {
    title: "Escapada de fin de semana en velero",
    days: "3 días / 2 noches",
    text: "La forma perfecta de descubrir una ría gallega en profundidad. Salida el viernes por la tarde desde un puerto deportivo de las Rías Baixas. Navegación al atardecer con fondeo en una cala protegida para la primera noche. Sábado recorriendo la ría: pueblos marineros que solo se ven bien desde el agua, parada en bateas de mejillones, baño en playas inaccesibles por tierra y comida en una marisquería a pie de puerto que solo conocen los locales. Domingo: fondeo frente a una isla atlántica, paseo y regreso al puerto a media tarde. Incluye velero con patrón, catering a bordo y reservas en los mejores restaurantes de la ría.",
    highlights: [
      "Velero premium con patrón profesional y catering",
      "Fondeo en calas y playas solo accesibles por mar",
      "Comidas en marisquerías seleccionadas a pie de puerto",
      "Baño, snorkel y paseos por playas desiertas",
      "Puesta de sol fondeados en la ría",
      "Recogida y traslado desde hotel incluidos",
    ],
  },
  {
    title: "Travesía Islas Atlánticas",
    days: "3–4 días",
    text: "Las Islas Cíes, Ons, Sálvora y Cortegada forman el Parque Nacional marítimo-terrestre de las Islas Atlánticas: playas de arena blanca con aguas transparentes, acantilados con colonias de aves marinas y fondos que son uno de los secretos mejor guardados del Atlántico. Esta travesía recorre las islas fondeando cada noche en una cala diferente. Navegamos entre islas, hacemos senderismo por los senderos del parque, nos bañamos en la playa de Rodas (considerada una de las mejores del mundo), comemos marisco en cubierta y cenamos en los puertos de Baiona, Cangas o Vigo. Una travesía que combina navegación, naturaleza virgen y la mejor gastronomía de la costa.",
    highlights: [
      "Fondeo en Islas Cíes, Ons y Sálvora",
      "Playa de Rodas, senderismo y naturaleza del Parque Nacional",
      "Snorkel en fondos marinos protegidos",
      "Cenas en puertos de Baiona, Cangas y Vigo",
      "Gestión de permisos de acceso al Parque Nacional incluida",
      "Velero o yate con tripulación y avituallamiento",
    ],
  },
  {
    title: "Ruta gastronómica por las Rías Baixas",
    days: "4–5 días",
    text: "La manera más exclusiva de recorrer las Rías Baixas: navegando de ría en ría y parando en los mejores restaurantes y marisquerías de cada zona. Empezamos en la Ría de Muros-Noia, subimos a la Ría de Arousa — la más grande de Galicia, con sus bateas y pueblos como Cambados y O Grove — continuamos por la Ría de Pontevedra hasta Sanxenxo y Combarro, y terminamos en la Ría de Vigo con parada en las Islas Cíes. Cada día navegamos por la mañana, fondeamos para comer en marisquerías seleccionadas y visitamos bodegas de Albariño en tierra. Por la noche, fondeo en puerto o cena en restaurante con reserva preferente.",
    highlights: [
      "Recorrido completo de las cuatro Rías Baixas",
      "Comidas en marisquerías de referencia de cada ría",
      "Visitas a bodegas de Albariño con cata privada",
      "Fondeo en puertos de Cambados, Sanxenxo, Baiona",
      "Parada en bateas de mejillones con degustación",
      "Cenas en restaurantes con vistas al mar y reserva preferente",
    ],
  },
  {
    title: "Chárter premium de una semana",
    days: "7 días / 6 noches",
    text: "El programa más completo para conocer toda la costa gallega navegando. Un yate o velero de lujo con tripulación profesional — patrón, marinero y chef a bordo — recorriendo las rías gallegas de norte a sur (o de sur a norte, según el viento y la preferencia). Cada día descubrimos una ría diferente, fondeamos en las mejores calas, visitamos pueblos costeros con encanto, comemos en los restaurantes que marcan la diferencia en cada zona y cenamos a bordo con menú del chef preparado con producto del día comprado en lonja. Incluye todo: embarcación, tripulación completa, combustible, amarres, avituallamiento gourmet, reservas en restaurantes y excursiones en tierra con guía cuando se desee.",
    highlights: [
      "Yate o velero de lujo con tripulación completa",
      "Chef a bordo con producto fresco de lonja diaria",
      "Recorrido de todas las rías: Altas y Baixas",
      "Cenas a bordo y comidas en los mejores restaurantes de la costa",
      "Excursiones en tierra con guía privado: pueblos, bodegas, mercados",
      "Fondeo en Islas Atlánticas (Cíes, Ons, Sálvora)",
      "Todo incluido: combustible, amarres, avituallamiento, seguros",
      "Transfers desde aeropuerto o hotel al puerto",
    ],
  },
];

const embarcaciones = [
  {
    title: "Veleros de 40-50 pies",
    text: "Veleros de crucero con 3-4 camarotes, salón confortable, cocina equipada y cubierta amplia. Ideales para parejas, familias o grupos de amigos de hasta 8 personas. Navegación pura con la emoción del viento y el silencio del mar. Patrón profesional incluido.",
  },
  {
    title: "Yates a motor de 50-70 pies",
    text: "Mayor espacio, estabilidad y velocidad. Salón amplio, flybridge, cocina completa y camarotes de lujo. Para quienes priorizan la comodidad y quieren cubrir más millas sin depender del viento. Tripulación profesional y servicio de catering a bordo.",
  },
  {
    title: "Catamaranes de lujo",
    text: "La opción más espaciosa y estable. Cubierta amplia ideal para tomar el sol, salón panorámico, camarotes independientes en cada casco y mínimo balanceo. Perfectos para familias con niños, grupos que buscan espacio o quienes prefieren la navegación más suave.",
  },
  {
    title: "Goletas y embarcaciones clásicas",
    text: "Para quienes buscan una experiencia con carácter. Embarcaciones de madera restauradas con la elegancia de la navegación clásica. Una forma diferente de recorrer las rías, con el encanto de un barco con historia y toda la seguridad de una embarcación moderna.",
  },
];

const rias = [
  {
    title: "Ría de Vigo",
    text: "La más espectacular. Las Islas Cíes como telón de fondo, Baiona con su parador sobre la fortaleza, el puerto de Cangas y las playas de la península del Morrazo. Restaurantes de marisco en Vigo que están entre los mejores de España.",
  },
  {
    title: "Ría de Pontevedra",
    text: "Sanxenxo, Portonovo, la Isla de Ons, la Illa da Toxa y Combarro con sus hórreos frente al mar. Puertos deportivos bien equipados y una selección de restaurantes costeros excepcional.",
  },
  {
    title: "Ría de Arousa",
    text: "La más grande de las Rías Baixas. Cambados (capital del Albariño), O Grove, A Illa de Arousa, miles de bateas de mejillones y una tradición marinera que se vive en cada puerto. La mejor zona para combinar navegación con bodegas.",
  },
  {
    title: "Ría de Muros-Noia",
    text: "La más tranquila y auténtica. Pueblos marineros sin prisas, playas salvajes, marisquerías de toda la vida y un paisaje que parece no haber cambiado en décadas. Ideal para fondear en silencio y desconectar.",
  },
];

const faqs = [
  {
    question: "¿Necesito experiencia en navegación?",
    answer:
      "No. Todas nuestras embarcaciones navegan con patrón profesional que se encarga de la navegación y la seguridad. El viajero no necesita ningún conocimiento náutico. Si quieres participar en las maniobras y aprender, el patrón estará encantado de enseñarte, pero es completamente opcional.",
  },
  {
    question: "¿Qué embarcaciones están disponibles?",
    answer:
      "Trabajamos con veleros de 40-50 pies, yates a motor de hasta 70 pies, catamaranes de lujo y embarcaciones clásicas. La embarcación se elige según el número de personas, el tipo de experiencia y las preferencias del grupo. Todas están en perfecto estado, con seguros actualizados y tripulación profesional.",
  },
  {
    question: "¿Cuántas personas caben en un chárter?",
    answer:
      "Depende de la embarcación. Un velero de 45 pies aloja cómodamente a 4-6 personas en 3 camarotes. Un yate de 60 pies puede alojar 6-8 personas. Los catamaranes ofrecen espacio para hasta 10 personas con total comodidad. Para grupos más grandes, organizamos travesías con varias embarcaciones navegando juntas.",
  },
  {
    question: "¿Cuánto cuesta un chárter de una semana en Galicia?",
    answer:
      "El precio varía según la embarcación, la temporada y los servicios incluidos. Preparamos presupuestos detallados y personalizados. Galicia ofrece una relación calidad-precio muy competitiva en chárter comparada con el Mediterráneo, con la ventaja de navegar en aguas menos masificadas y con una gastronomía incomparable.",
  },
  {
    question: "¿Qué época del año es mejor para navegar en Galicia?",
    answer:
      "De mayo a octubre es la temporada principal. Junio y septiembre son meses excelentes con buen tiempo, menos tráfico y disponibilidad de embarcaciones. Julio y agosto tienen las mejores condiciones pero mayor demanda. El otoño temprano ofrece una luz espectacular y menos afluencia. Las Rías Baixas, por su orientación protegida, permiten navegación cómoda durante casi todo el año.",
  },
  {
    question: "¿Se puede combinar la navegación con experiencias en tierra?",
    answer:
      "Es precisamente nuestra especialidad. Las rutas incluyen paradas para visitar pueblos costeros, bodegas de Albariño, mercados de abastos y restaurantes de referencia. Podemos organizar excursiones con guía privado en cada puerto de escala, visitas a pazos y cualquier experiencia que enriquezca el viaje por mar.",
  },
];

export default function NauticaGalicia() {
  return (
    <>
      <HeroPage
        title="Náutica en Galicia"
        subtitle="Descubre Galicia navegando. Yates y veleros premium, rutas por las rías, travesías a las Islas Atlánticas y chárter de lujo con los mejores restaurantes de la costa."
        imageSrc="/images/playa-rodas-islas-cies-suunia-jpg.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Galicia desde el mar</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Las rías gallegas son uno de los mejores escenarios de navegación de Europa: aguas protegidas entre montañas que caen al mar, pueblos marineros con puertos donde amarrar y cenar marisco a pie de muelle, islas declaradas Parque Nacional con playas desiertas de arena blanca, y una costa que cambia de carácter cada pocas millas. Navegar por Galicia es descubrir un destino que desde tierra solo se intuye.
              </p>
              <p>
                En Suunia organizamos experiencias náuticas premium para quienes quieren conocer Galicia de la forma más exclusiva: a bordo de un velero o un yate, parando en los mejores restaurantes y marisquerías de cada ría, fondeando en calas a las que solo se llega por mar y visitando pueblos, bodegas y mercados en cada escala. No es solo navegación: es una forma de viajar por Galicia donde el barco es tu hotel, tu medio de transporte y tu mirador privado.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, conocemos cada ría, cada puerto, cada restaurante costero que merece una parada. Seleccionamos las mejores embarcaciones con tripulación profesional y diseñamos rutas que combinan la navegación con lo mejor de cada zona: <Link href="/gastronomia-bodegas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">gastronomía y bodegas</Link>, <Link href="/cultura-naturaleza-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">cultura y naturaleza</Link>, y todo lo que convierte un chárter en Galicia en algo que no se puede vivir en ningún otro lugar. Se puede integrar en una <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">gran ruta por Galicia</Link> o en un programa <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">Galicia Premium</Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Rutas de navegación */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Rutas de navegación por Galicia</h2>
              <p className="mt-4 text-lg text-gray-600">
                Desde una escapada de fin de semana hasta un chárter de lujo de una semana recorriendo toda la costa. Cada ruta se adapta al grupo.
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
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{ruta.title}</h3>
                    <p className="mt-4 leading-relaxed text-gray-600">{ruta.text}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {ruta.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm text-gray-600">
                          <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/34678288284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-8 justify-center"
                    >
                      Solicitar presupuesto
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Embarcaciones */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Embarcaciones disponibles</h2>
              <p className="mt-4 text-lg text-gray-600">
                Seleccionamos la embarcación según el número de personas, el tipo de experiencia y las preferencias del grupo. Todas con patrón profesional.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {embarcaciones.map((emb) => (
              <AnimateOnScroll key={emb.title}>
                <div className="card-elegant h-full">
                  <h3 className="font-semibold text-gray-900">{emb.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{emb.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Las Rías */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Las rías gallegas: tu ruta de navegación</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cada ría tiene su personalidad, sus restaurantes y sus rincones que solo se descubren desde el agua. Te ayudamos a elegir la ruta perfecta.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {rias.map((ria) => (
              <AnimateOnScroll key={ria.title}>
                <div className="card-elegant h-full">
                  <h3 className="font-semibold text-gray-900">{ria.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{ria.text}</p>
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
            <h2 className="heading-section text-center">Qué incluyen nuestros chárters</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Embarcación premium con patrón profesional",
                "Tripulación según duración y tipo de barco",
                "Diseño de la ruta adaptada al grupo y las condiciones",
                "Avituallamiento a bordo: comidas, bebidas y snacks",
                "Reservas en restaurantes y marisquerías de cada escala",
                "Gestión de amarres y permisos (Islas Atlánticas)",
                "Combustible, seguros y tasas portuarias incluidos",
                "Excursiones en tierra con guía si se desea",
                "Transfers desde aeropuerto u hotel al puerto",
                "Coordinación y asistencia durante toda la travesía",
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

      {/* Por qué con Suunia */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué navegar con Suunia</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "No solo navegación, sino viaje", text: "Nuestros chárters no son solo alquiler de barco. Son rutas de viaje por Galicia donde la embarcación es el medio: diseñamos cada escala con restaurantes, bodegas, visitas y experiencias que convierten la travesía en un viaje completo." },
                { title: "Conocimiento local de cada ría", text: "Sabemos en qué cala fondear para comer con vistas, cuál es la mejor marisquería de cada puerto, dónde fondear para el atardecer perfecto y qué bodega visitar entre escalas. Ese conocimiento no se encuentra en una app de navegación." },
                { title: "Todo organizado, nada improvisado", text: "Reservas en restaurantes, permisos de Islas Atlánticas, amarres, avituallamiento, transfers y cualquier excursión en tierra. El viajero solo tiene que disfrutar. Nosotros nos encargamos de todo, incluidos los imprevistos." },
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
        title="¿Navegamos por Galicia?"
        description="Cuéntanos cuántas personas sois, qué fechas tenéis y qué tipo de experiencia buscáis. Diseñamos la ruta, seleccionamos la embarcación y organizamos cada escala. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre navegación en Galicia</h2>
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
            serviceType: "Chárter náutico y rutas de navegación premium por Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Alquiler de yates y veleros premium en Galicia, rutas de navegación por las rías gallegas, travesías a las Islas Atlánticas y chárter de lujo de una semana con tripulación y gastronomía. Organizado por una agencia receptiva local.",
          }),
        }}
      />
    </>
  );
}
