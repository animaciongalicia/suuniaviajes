import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Agencia receptiva en Galicia (DMC) para grupos y empresas",
  description:
    "Somos tu agencia receptiva en Galicia. Organizamos viajes, experiencias y logística para grupos privados y empresas. DMC con base en A Coruña y cobertura en toda Galicia.",
  alternates: { canonical: "https://suunia.com/receptivo-galicia" },
  openGraph: {
    title: "Agencia receptiva en Galicia (DMC) – Suunia",
    description:
      "DMC en Galicia. Viajes para grupos, tours privados, incentivos de empresa y servicios logísticos completos.",
    url: "https://suunia.com/receptivo-galicia",
    images: [{ url: "/images/experiencias-galicia.jpg", width: 1200, height: 630 }],
  },
};

const programas = [
  {
    title: "Viaje gastronómico por Galicia",
    days: "3 días / 2 noches",
    description:
      "Un recorrido por la esencia culinaria gallega. Visita al mercado de abastos de Santiago, almuerzo en pulpería tradicional, cata de Albariño en bodega de las Rías Baixas, cena maridaje con marisco fresco y taller de cocina gallega. Cada comida es una experiencia que conecta con el territorio, los productores y las recetas que llevan siglos perfeccionándose.",
  },
  {
    title: "Ruta Costa Atlántica",
    days: "4 días / 3 noches",
    description:
      "La costa gallega desde A Coruña hasta las Rías Baixas. Torre de Hércules, acantilados de la Costa da Morte, Fisterra, Carnota, Muros y navegación por la Ría de Arousa. Incluye paradas en pueblos marineros, lonjas de pescado, faros y miradores con vistas al Atlántico. Un programa que combina naturaleza, patrimonio y gastronomía en uno de los litorales más espectaculares de Europa.",
  },
  {
    title: "Experiencia mar y cultura",
    days: "2 días / 1 noche",
    description:
      "Santiago de Compostela por la mañana con guía privado: catedral, casco histórico y mercado. Por la tarde, traslado a la ría y navegación en barco privado con patrón. Marisqueo, baño en playa virgen y cena con puesta de sol en restaurante frente al mar. Al día siguiente, visita a bodega y regreso.",
  },
  {
    title: "Programa corporativo premium",
    days: "2 días / 1 noche",
    description:
      "Programa diseñado para equipos de empresa. Llegada y check-in en hotel con encanto. Actividad de team building en la ría (vela, kayak o regata). Cena de grupo en restaurante exclusivo. Segundo día con visita cultural y experiencia gastronómica. Cierre con brindis de despedida. Incluye coordinación completa, transporte y material.",
  },
];

const faqs = [
  {
    question: "¿Qué es exactamente una agencia receptiva o DMC?",
    answer:
      "Una agencia receptiva (DMC – Destination Management Company) es una empresa local especializada en organizar y gestionar todos los servicios turísticos en un destino concreto. Nos diferenciamos de una agencia de viajes convencional porque no vendemos vuelos ni paquetes estándar: nos encargamos de toda la operativa sobre el terreno. Eso incluye seleccionar proveedores, coordinar logística, diseñar programas a medida y resolver cualquier situación durante el viaje. Trabajamos directamente con hoteles, restaurantes, transportistas, guías y proveedores de actividades en Galicia.",
  },
  {
    question: "¿En qué zonas de Galicia trabajáis?",
    answer:
      "Cubrimos toda Galicia: A Coruña, Santiago de Compostela, Rías Baixas, Pontevedra, Vigo, Lugo, Ourense, Ribeira Sacra, Costa da Morte, Islas Cíes y cualquier punto del territorio gallego. Nuestra base está en A Coruña, pero nos desplazamos y coordinamos servicios en cualquier ubicación.",
  },
  {
    question: "¿Trabajáis solo con agencias de viajes o también con clientes directos?",
    answer:
      "Trabajamos tanto con agencias de viajes (como su receptivo local en Galicia) como con clientes directos: empresas que organizan viajes de incentivos, grupos privados que quieren un viaje organizado, y particulares que buscan experiencias personalizadas. Nos adaptamos al tipo de cliente y a sus necesidades.",
  },
  {
    question: "¿Cuánto tiempo de antelación necesitáis para organizar un viaje?",
    answer:
      "Lo ideal es contactarnos con al menos 3-4 semanas de antelación para grupos pequeños y 6-8 semanas para grupos grandes o programas complejos. Dicho esto, hemos resuelto peticiones con plazos más cortos porque conocemos bien el terreno y tenemos relaciones directas con los proveedores.",
  },
  {
    question: "¿Qué tamaño de grupo podéis gestionar?",
    answer:
      "Desde parejas o familias pequeñas hasta grupos de más de 100 personas. Hemos organizado tours privados para 4 personas y eventos corporativos para más de 150. El tamaño del grupo no es un problema; lo que cambia es la planificación y la logística, y eso es precisamente lo que hacemos bien.",
  },
  {
    question: "¿Los programas son cerrados o se pueden personalizar?",
    answer:
      "Todos nuestros programas son 100% personalizables. No vendemos paquetes cerrados. Tomamos como base las preferencias del cliente (intereses, presupuesto, fechas, número de personas) y diseñamos un programa a medida. Cada viaje es único porque cada grupo es diferente.",
  },
];

export default function ReceptivoGalicia() {
  return (
    <>
      <HeroPage
        title="Agencia receptiva en Galicia (DMC) para grupos y empresas"
        subtitle="Tu socio local para organizar viajes, experiencias y logística en toda Galicia. Conocemos el terreno, los proveedores y los rincones que marcan la diferencia."
        imageSrc="/images/experiencias-galicia.jpg"
      />

      {/* Qué es una agencia receptiva */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">¿Qué es una agencia receptiva y por qué la necesitas?</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Cuando un grupo, una empresa o una agencia de viajes quiere organizar un viaje a Galicia, se enfrenta a un problema común: no conoce el terreno. No sabe qué hoteles ofrecen la mejor relación calidad-precio, qué restaurantes están a la altura, qué actividades funcionan para su tipo de grupo, ni cómo coordinar todo para que el programa fluya sin contratiempos.
            </p>
            <p>
              Ahí es donde entra una agencia receptiva como Suunia. Somos el socio local que se encarga de toda la operativa en destino. Diseñamos el programa, seleccionamos los proveedores, gestionamos las reservas, coordinamos el transporte, proporcionamos guías y resolvemos cualquier imprevisto sobre el terreno. Desde <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes para grupos</Link> hasta <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados personalizados</Link>, el cliente solo tiene que llegar y disfrutar.
            </p>
            <p>
              Una DMC (Destination Management Company) no es una agencia de viajes convencional. No vendemos vuelos ni paquetes cerrados. Lo que ofrecemos es conocimiento profundo del destino, una red de proveedores de confianza y la capacidad operativa para que todo funcione. Gestionamos toda la <Link href="/logistica-servicios-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">logística y servicios en Galicia</Link>, y también organizamos <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes de incentivos para empresas</Link>. Galicia es nuestro territorio, y lo conocemos como la palma de nuestra mano.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué Galicia */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">¿Por qué Galicia es un destino ideal?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Galicia combina gastronomía de primer nivel, paisajes atlánticos, patrimonio milenario y autenticidad. Un destino completo para cualquier tipo de viaje.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Gastronomía excepcional", text: "Marisco, pulpo, empanada, Albariño, Ribeiro, quesos... La cocina gallega es uno de los principales motivos por los que los viajeros eligen Galicia. Cada comarca tiene su especialidad." },
              { title: "Costa Atlántica", text: "Más de 1.600 km de costa con playas, acantilados, rías, islas y pueblos marineros. Desde las Islas Cíes (declaradas patrimonio) hasta los cabos de la Costa da Morte." },
              { title: "Patrimonio cultural", text: "Santiago de Compostela, el Camino, catedrales románicas, pazos, monasterios y una tradición celta que impregna la identidad gallega." },
              { title: "Naturaleza y paisaje", text: "Bosques atlánticos, cañones del Sil, Ribeira Sacra, parques naturales y una diversidad paisajística que sorprende en un territorio relativamente compacto." },
              { title: "Autenticidad", text: "Galicia no es un destino masificado. Mantiene su carácter, sus tradiciones vivas y una hospitalidad genuina que los viajeros valoran especialmente." },
              { title: "Accesibilidad", text: "Dos aeropuertos internacionales (Santiago y Vigo), conexión AVE con Madrid, autopistas y una red de carreteras que permite moverse con facilidad." },
            ].map((item) => (
              <div key={item.title} className="card-elegant">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios que ofrece Suunia */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Servicios que ofrecemos como receptivo en Galicia</h2>
          <div className="mt-12 space-y-8">
            {[
              { title: "Diseño de programas a medida", text: "Creamos itinerarios personalizados según las preferencias del grupo: intereses, presupuesto, fechas y número de personas. No trabajamos con paquetes cerrados, cada programa se diseña desde cero." },
              { title: "Coordinación completa del viaje", text: "Nos encargamos de toda la logística: reservas de hotel, restaurantes, actividades, guías, permisos y transporte. El cliente recibe un programa completo y solo tiene que seguirlo." },
              { title: "Selección de proveedores locales", text: "Trabajamos con una red de hoteles, restaurantes, transportistas, guías y proveedores de actividades seleccionados por su calidad y fiabilidad. Cada proveedor ha sido probado por nosotros." },
              { title: "Acompañamiento y soporte", text: "Ofrecemos acompañamiento durante el viaje y soporte telefónico permanente. Si surge cualquier imprevisto, estamos ahí para resolverlo de inmediato." },
              { title: "Servicios para agencias de viajes", text: "Si eres agencia emisora, podemos ser tu receptivo de confianza en Galicia. Trabajamos con comisiones competitivas, respondemos con rapidez y entregamos programas profesionales y detallados." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos de programas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Ejemplos de programas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Estos son algunos de los programas que hemos diseñado para nuestros clientes. Todos se adaptan según las necesidades y preferencias de cada grupo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {programas.map((prog) => (
              <div key={prog.title} className="card-elegant">
                <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                  {prog.days}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {prog.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {prog.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Necesitas un receptivo en Galicia?"
        description="Cuéntanos qué tipo de viaje o evento estás organizando y te preparamos una propuesta detallada sin compromiso. Somos rápidos, profesionales y conocemos Galicia como nadie."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes</h2>
          <div className="mt-12 space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-8 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
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
            serviceType: "Agencia receptiva (DMC) en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "DMC local en Galicia: diseño de programas a medida, coordinación de viajes, selección de proveedores, guías locales y soporte en destino para grupos, empresas y agencias.",
          }),
        }}
      />
    </>
  );
}
