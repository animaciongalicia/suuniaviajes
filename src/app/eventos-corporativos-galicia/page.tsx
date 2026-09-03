import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Eventos corporativos en Galicia — Congresos, convenciones y programas de empresa",
  description:
    "Organización de eventos corporativos en Galicia: congresos, convenciones, jornadas para directivos, programas de acompañantes, cenas de gala y experiencias para empleados. Suunia, agencia receptiva.",
  alternates: { canonical: "https://suunia.com/eventos-corporativos-galicia" },
  openGraph: {
    title: "Eventos corporativos en Galicia – Suunia",
    description:
      "Congresos, convenciones, jornadas directivas y programas de empresa en Galicia. Logística, experiencias y coordinación integral.",
    url: "https://suunia.com/eventos-corporativos-galicia",
    images: [{ url: "/images/experiencias-galicia.jpg", width: 1200, height: 630 }],
  },
};

const servicios = [
  {
    title: "Programas para asistentes a congresos y convenciones",
    text: "Cuando una empresa o asociación organiza un congreso o convención en Galicia, los asistentes necesitan algo más que las sesiones del evento. Diseñamos programas complementarios para los tiempos libres: visitas guiadas privadas por Santiago de Compostela, excursiones a la Costa da Morte o las Rías Baixas, experiencias gastronómicas, actividades náuticas y rutas culturales. Todo coordinado con el horario del congreso para que los asistentes aprovechen al máximo su tiempo en Galicia.",
    details: [
      "Visitas guiadas en los tiempos libres del congreso",
      "Excursiones de medio día o jornada completa",
      "Experiencias gastronómicas y catas de vinos",
      "Coordinación de horarios con el programa del evento",
    ],
  },
  {
    title: "Programas para acompañantes",
    text: "En congresos y convenciones, los acompañantes de los asistentes necesitan un programa propio mientras el evento está en sesión. Organizamos programas paralelos adaptados al perfil del grupo: rutas culturales, shopping, spa, talleres de cocina, visitas a mercados y experiencias en la naturaleza. Cada programa se diseña con el mismo nivel de detalle que el evento principal.",
    details: [
      "Programa paralelo durante las sesiones del congreso",
      "Rutas culturales, gastronomía y compras",
      "Actividades de bienestar: spa, yoga, naturaleza",
      "Guía acompañante durante todo el programa",
    ],
  },
  {
    title: "Experiencias para directivos y comités",
    text: "Programas diseñados para grupos reducidos de directivos, consejos de administración o comités ejecutivos que buscan un entorno diferente para reunirse, tomar decisiones y cohesionar el equipo de liderazgo. Combinamos espacios de trabajo privados en pazos o hoteles boutique con experiencias de alto nivel: cenas privadas con chef, navegación en velero, visitas a bodegas exclusivas y actividades que facilitan la conversación fuera del entorno habitual.",
    details: [
      "Espacios de reunión privados en pazos y hoteles boutique",
      "Cenas privadas con chef y maridaje exclusivo",
      "Navegación en velero y experiencias premium",
      "Formato de retiro ejecutivo de 1 a 3 días",
    ],
  },
  {
    title: "Cenas de gala y eventos sociales",
    text: "Organizamos cenas de gala, cocktails de bienvenida, fiestas de cierre y eventos sociales dentro de programas corporativos. Seleccionamos los mejores espacios de Galicia — pazos, bodegas, restaurantes con encanto, terrazas con vistas al mar — y coordinamos catering, decoración, música, iluminación y producción. Para eventos que requieran producción completa, trabajamos con MilEventosGalicia, nuestra empresa partner especializada.",
    details: [
      "Selección de espacios exclusivos: pazos, bodegas, restaurantes",
      "Coordinación de catering, decoración y ambientación",
      "Cocktails de bienvenida y fiestas de cierre",
      "Producción completa con MilEventosGalicia",
    ],
  },
  {
    title: "Regalos y experiencias para empleados",
    text: "Cada vez más empresas regalan experiencias en lugar de objetos. Diseñamos paquetes de experiencias en Galicia que la empresa puede ofrecer a sus empleados como premio, regalo de Navidad o incentivo: escapadas de fin de semana con alojamiento y gastronomía, experiencias de un día (bodega, navegación, spa), cestas gourmet con productos gallegos seleccionados o bonos para actividades a elegir. Todo presentado con packaging y documentación personalizable.",
    details: [
      "Escapadas de fin de semana para empleados y familias",
      "Experiencias de un día: bodega, navegación, spa",
      "Cestas gourmet con productos gallegos premium",
      "Presentación y packaging personalizable con imagen corporativa",
    ],
  },
  {
    title: "Jornadas de empresa y convenciones internas",
    text: "Cuando una empresa quiere sacar a su equipo de la oficina para un kick-off, una convención de ventas, una presentación de resultados o una jornada de planificación estratégica, Galicia ofrece espacios inspiradores y una logística que facilita el trabajo. Nos encargamos de todo lo que rodea las sesiones de trabajo: transporte, alojamiento, comidas, actividades de team building en los descansos y programa social para las tardes y noches.",
    details: [
      "Gestión de espacios de reunión y salas de trabajo",
      "Logística de transporte y alojamiento para el equipo",
      "Actividades de team building entre sesiones",
      "Programa social: comidas, cenas y ocio coordinado",
    ],
  },
];

const faqs = [
  {
    question: "¿Qué tipo de eventos corporativos organizáis en Galicia?",
    answer:
      "Organizamos la parte logística, de experiencias y de programa social de cualquier evento de empresa en Galicia: congresos, convenciones, jornadas de empresa, kick-offs, convenciones de ventas, presentaciones de producto, retiros ejecutivos, cenas de gala y programas de incentivos. Para la producción técnica de eventos (escenografía, iluminación, producción audiovisual) trabajamos con MilEventosGalicia.",
  },
  {
    question: "¿Organizáis solo la parte de experiencias o también la logística completa?",
    answer:
      "Nos encargamos de todo: transporte, alojamiento, restaurantes, salas de reunión, actividades, coordinación de tiempos, asistencia en destino y cualquier servicio que necesite el grupo. Somos agencia receptiva, así que cubrimos la cadena completa de servicios en Galicia. La empresa solo tiene que llegar.",
  },
  {
    question: "¿Podéis trabajar con la agencia de eventos que ya tiene la empresa?",
    answer:
      "Sí. Muchas empresas y agencias de eventos nacionales nos contratan como su partner receptivo en Galicia. Ellos gestionan la relación con el cliente y la producción del evento, y nosotros aportamos el conocimiento local, los proveedores, la logística en destino y las experiencias. Es un modelo de colaboración muy habitual.",
  },
  {
    question: "¿Para cuántas personas podéis organizar un evento?",
    answer:
      "Desde grupos de 10 directivos hasta convenciones de más de 300 personas. El tamaño del grupo condiciona la selección de espacios, transporte y formato de actividades, pero tenemos experiencia gestionando eventos de cualquier escala en Galicia.",
  },
  {
    question: "¿Qué son los programas para acompañantes?",
    answer:
      "Cuando los asistentes a un congreso o convención viajan con sus parejas, estas necesitan un programa propio durante las horas de sesión. Organizamos visitas guiadas, excursiones, experiencias gastronómicas, compras y actividades de bienestar adaptadas al perfil del grupo de acompañantes, con guía y coordinación propias.",
  },
  {
    question: "¿Cómo funcionan los regalos y experiencias para empleados?",
    answer:
      "La empresa nos indica el presupuesto por persona y el perfil de los destinatarios. Diseñamos un catálogo de experiencias (escapadas, actividades, cestas gourmet) que la empresa puede ofrecer como regalo. Preparamos la documentación con la imagen corporativa y gestionamos las reservas cuando el empleado quiera canjear su experiencia.",
  },
];

export default function EventosCorporativosGalicia() {
  return (
    <>
      <HeroPage
        title="Eventos corporativos en Galicia"
        subtitle="Congresos, convenciones, jornadas directivas, programas de acompañantes, cenas de gala y experiencias para empleados. Todo lo que tu empresa necesita en Galicia."
        imageSrc="/images/experiencias-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Tu evento, nuestro territorio</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Cuando una empresa organiza un evento en Galicia — un congreso, una convención, una jornada de trabajo o un viaje de equipo — necesita mucho más que un hotel y un salón. Necesita alguien en el terreno que conozca los mejores espacios, coordine el transporte, seleccione los restaurantes, organice el programa social y resuelva cualquier imprevisto sin que el organizador tenga que preocuparse de nada.
              </p>
              <p>
                En Suunia somos la <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva de referencia en Galicia</Link> para eventos de empresa. Nos encargamos de toda la logística, las experiencias y el programa social del evento. Para la producción técnica (montaje, escenografía, iluminación, audiovisual), trabajamos con MilEventosGalicia, nuestra empresa partner especializada. Juntos cubrimos todo el espectro.
              </p>
              <p>
                Nuestros servicios funcionan como solución integral para la empresa o como partner local para agencias de eventos nacionales que necesitan un receptivo de confianza en Galicia. En ambos casos, ofrecemos el mismo nivel de servicio: diseño a medida, coordinación impecable y conocimiento real del territorio. Todo se puede integrar con <Link href="/team-building-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">actividades de team building</Link>, <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">programas de incentivos</Link> y experiencias <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">Galicia Premium</Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Servicios detallados */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Servicios para eventos corporativos</h2>
              <p className="mt-4 text-lg text-gray-600">
                Desde la logística de un congreso hasta un regalo de empresa para empleados. Todo lo que necesitas para que tu evento en Galicia funcione.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-12">
            {servicios.map((s) => (
              <AnimateOnScroll key={s.title}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{s.text}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.details.map((d, j) => (
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

      {/* Por qué Suunia */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué organizar tu evento corporativo con Suunia</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "Un interlocutor único", text: "No tendrás que hablar con diez proveedores diferentes. Suunia coordina todo en Galicia: hoteles, transporte, restaurantes, actividades, salas y cualquier necesidad del evento. Una sola llamada para organizarlo todo." },
                { title: "Conocimiento local real", text: "Vivimos y trabajamos en Galicia. Conocemos los espacios, los proveedores, los tiempos de desplazamiento y las particularidades de cada zona. Eso se traduce en propuestas realistas y una ejecución sin sorpresas." },
                { title: "Flexibilidad total", text: "No vendemos paquetes cerrados. Cada evento se diseña desde cero según las necesidades de la empresa. Si algo cambia durante la organización — fechas, número de personas, formato — nos adaptamos sin problemas." },
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
        title="¿Organizamos tu evento corporativo en Galicia?"
        description="Cuéntanos qué tipo de evento tenéis en mente, cuántas personas, fechas y qué necesitáis. Preparamos una propuesta completa sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre eventos corporativos</h2>
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
            serviceType: "Eventos corporativos y servicios para empresas en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Organización de eventos corporativos en Galicia: congresos, convenciones, jornadas directivas, programas de acompañantes, cenas de gala, regalos para empleados y experiencias de empresa.",
          }),
        }}
      />
    </>
  );
}
