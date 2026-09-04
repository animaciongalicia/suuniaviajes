import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title:
    "Islas Atlánticas de Galicia — Guía completa: Cíes, Ons, Sálvora y Cortegada",
  description:
    "Guía completa del Parque Nacional de las Islas Atlánticas: Islas Cíes, Ons, Sálvora y Cortegada. Permisos, ferris, playas, rutas de senderismo y consejos prácticos. Escrita por locales.",
  alternates: { canonical: "https://suunia.com/guias/islas-atlanticas" },
  openGraph: {
    title: "Islas Atlánticas de Galicia — Guía Suunia",
    description:
      "Todo lo que necesitas saber para visitar las Islas Cíes, Ons, Sálvora y Cortegada: permisos, ferris, playas, rutas y consejos prácticos de un equipo local.",
    url: "https://suunia.com/guias/islas-atlanticas",
    images: [
      { url: "/images/tours-islas-cies.jpg", width: 1200, height: 630 },
    ],
  },
};

const islas = [
  {
    name: "Islas Cíes",
    subtitle: "El paraíso atlántico más famoso de Galicia",
    highlights: [
      "3 islas: Monteagudo, Faro y San Martiño",
      "Playa de Rodas, elegida mejor playa del mundo por The Guardian",
      "Ruta al Faro de Cíes (~2 h ida y vuelta), con vistas espectaculares",
      "Límite de 1.800 visitantes/día — permiso obligatorio de la Xunta",
      "Ferri desde Vigo (Estación Marítima), Cangas y Baiona",
      "Camping con reserva (agotar plazas meses antes en verano)",
    ],
    description:
      "Las Islas Cíes son el emblema del Parque Nacional y el destino más demandado de toda la costa gallega. Las tres islas forman una barrera natural que protege la Ría de Vigo y crea unas aguas de una transparencia difícil de encontrar en el Atlántico. La Playa de Rodas, que conecta las islas de Monteagudo y Faro, es un arco de arena blanca con aguas turquesas que no tiene nada que envidiar al Caribe. La ruta de senderismo hasta el faro de la isla del Faro es la excursión más popular: un sendero bien señalizado que en menos de dos horas (ida y vuelta) te lleva a uno de los miradores más impresionantes de Galicia. La isla de San Martiño solo es accesible en embarcación privada y tiene algunas de las calas más vírgenes de todo el archipiélago.",
  },
  {
    name: "Isla de Ons",
    subtitle: "La alternativa tranquila con carácter propio",
    highlights: [
      "Menos masificada que las Cíes, con ambiente más rural",
      "Playa de Melide: playa nudista con agua turquesa",
      "O Buraco do Inferno: impresionante soplador costero",
      "Aldea con 2-3 restaurantes de marisco fresco",
      "Ferri desde Bueu, Sanxenxo y Portonovo",
      "Camping disponible — mismo sistema de permisos que las Cíes",
    ],
    description:
      "Ons es la isla para quienes buscan la experiencia atlántica sin las aglomeraciones de las Cíes. Tiene un carácter más rural y auténtico: una pequeña aldea habitada todo el año, con un par de restaurantes que sirven marisco fresco de las rías. La Playa de Melide, en la cara oeste, es una de las playas nudistas más bonitas de Galicia, con arena fina y agua turquesa protegida por acantilados. O Buraco do Inferno (el agujero del infierno) es un soplador natural en el borde de un acantilado donde el mar entra con fuerza en días de oleaje, creando un espectáculo sonoro y visual. Las rutas de senderismo recorren toda la isla y permiten ver la costa desde perspectivas que no se consiguen en ningún otro punto de las Rías Baixas.",
  },
  {
    name: "Isla de Sálvora",
    subtitle: "La más salvaje y exclusiva del archipiélago",
    highlights: [
      "Deshabitada — la más remota de las cuatro",
      "Parte del Parque Nacional desde 2002",
      "Visitas guiadas exclusivamente — máximo ~100 personas/día",
      "Ruinas de antigua aldea pesquera y caballos salvajes",
      "Rica vida marina: avistamiento de delfines frecuente",
      "Acceso desde O Grove y Ribeira (solo operadores autorizados)",
    ],
    description:
      "Sálvora es la isla más inaccesible y, por eso mismo, la más especial. Está deshabitada desde mediados del siglo XX y solo se puede visitar con guía autorizado, lo que limita el número de visitantes a unas 100 personas al día. Eso significa que cuando pisas Sálvora estás en uno de los rincones más exclusivos de toda la costa atlántica europea. Las ruinas de la antigua aldea pesquera, los caballos salvajes que pastan en libertad y la riqueza de su fondo marino (los avistamientos de delfines son habituales) hacen de esta visita una experiencia que no se parece a nada. El acceso se realiza desde O Grove o Ribeira, siempre con operadores autorizados por el Parque Nacional.",
  },
  {
    name: "Isla de Cortegada",
    subtitle: "El bosque de laureles dentro de la Ría de Arousa",
    highlights: [
      "La más pequeña y menos visitada del parque",
      "Bosque de laureles: uno de los más extensos de Europa",
      "Conectada a tierra firme con la marea baja",
      "Acceso desde Carril (Vilagarcía de Arousa)",
      "No se permite acampar — solo visitas de día",
      "Acceso libre y gratuito (no necesita permiso)",
    ],
    description:
      "Cortegada es la gran desconocida de las Islas Atlánticas y una sorpresa para quien la visita. A diferencia del resto del archipiélago, no destaca por sus playas sino por su bosque de laureles, uno de los más grandes y mejor conservados de Europa, que cubre prácticamente toda la isla y crea un microclima húmedo y sombrío que contrasta con la luminosidad de las otras islas. En mareas bajas, Cortegada queda conectada con la localidad de Carril por un paso que se puede recorrer a pie. Es la única de las cuatro islas que no requiere permiso: el acceso es libre y gratuito, lo que la convierte en una opción perfecta para quienes quieren visitar el Parque Nacional sin la planificación que exigen las Cíes o las Ons.",
  },
];

const consejos = [
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    title: "Agua y comida",
    text: "Lleva agua y comida suficiente. En las Cíes y Ons hay alguna opción limitada de restauración, pero en Sálvora y Cortegada no hay nada. Los precios en las islas son elevados.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Protección solar",
    text: "Crema solar, gorra y gafas de sol son imprescindibles. Las playas de las islas no tienen sombra y el reflejo del agua intensifica la radiación.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    title: "Efectivo",
    text: "Lleva dinero en efectivo. En las islas la cobertura de datos es irregular y no siempre funcionan los datáfonos. Algunos establecimientos solo aceptan efectivo.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
    title: "Calzado adecuado",
    text: "Escarpines o zapatillas de agua para las calas rocosas. Para las rutas de senderismo, calzado cómodo con suela antideslizante. Las sendas pueden estar resbaladizas.",
  },
];

const faqs = [
  {
    question: "¿Cómo consigo el permiso para visitar las Islas Cíes?",
    answer:
      "El permiso se solicita de forma gratuita en la web autorizacionislasgalicia.xunta.gal. Es imprescindible obtener el permiso antes de comprar el billete del ferri. El sistema suele estar abierto de Semana Santa a septiembre. Los fines de semana y el mes de agosto se agotan con semanas de antelación, así que conviene planificar con tiempo. El mismo sistema se aplica a las Islas Ons y Sálvora.",
  },
  {
    question: "¿Cuál es la mejor isla para visitar?",
    answer:
      "Depende de lo que busques. Las Islas Cíes son la opción ideal si quieres playas espectaculares y la experiencia más completa (Playa de Rodas, rutas de senderismo, camping). La Isla de Ons es perfecta si prefieres tranquilidad y un ambiente más rural, con menos visitantes. Sálvora es para quienes buscan exclusividad y naturaleza virgen en un entorno prácticamente salvaje. Y Cortegada es una visita diferente, centrada en su bosque de laureles, con la ventaja de no necesitar permiso.",
  },
  {
    question: "¿Se puede dormir en las Islas Atlánticas?",
    answer:
      "Sí, pero solo en las Islas Cíes y en la Isla de Ons, que cuentan con zonas de acampada reguladas. Las plazas son limitadas y en verano se agotan meses antes, así que hay que reservar con mucha antelación. En Sálvora y Cortegada no se permite pernoctar: solo se pueden hacer visitas de día. No existe ningún otro tipo de alojamiento (hotel, hostal) en ninguna de las cuatro islas.",
  },
  {
    question: "¿Merece la pena ir en septiembre?",
    answer:
      "Septiembre es probablemente el mejor mes para visitar las Islas Atlánticas. El agua aún conserva la temperatura del verano, hay muchos menos visitantes (lo que significa más permisos disponibles y ferris menos llenos), la luz es espectacular para fotografía y los precios de alojamiento en tierra bajan considerablemente. Junio es la otra opción excelente, sobre todo la segunda quincena.",
  },
];

export default function GuiaIslasAtlanticas() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/tours-islas-cies.jpg"
          alt="Vista panorámica de las Islas Cíes con la Playa de Rodas y aguas turquesas del Parque Nacional de las Islas Atlánticas de Galicia"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Guía de rutas
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Islas Atlánticas de Galicia: Cíes, Ons, Sálvora y Cortegada
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Guía completa del Parque Nacional Marítimo-Terrestre de las Islas
            Atlánticas. Cuatro archipiélagos, permisos, ferris, playas, rutas de
            senderismo y todo lo que necesitas para planificar tu visita.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              10 min de lectura
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-400" />
            <span>Equipo Suunia</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        className="border-b border-gray-100 bg-white"
        aria-label="Breadcrumb"
      >
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-atlantic-700">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/guias" className="hover:text-atlantic-700">
                Guías
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900">Islas Atlánticas</li>
          </ol>
        </div>
      </nav>

      {/* Introducción */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                El Parque Nacional Marítimo-Terrestre de las Islas Atlánticas de
                Galicia es el único parque nacional de Galicia y uno de los
                espacios naturales más valiosos de toda la costa atlántica
                europea. Lo forman cuatro archipiélagos — Cíes, Ons, Sálvora y
                Cortegada — repartidos entre las rías de Vigo, Pontevedra,
                Arousa y Muros-Noia, cada uno con un carácter y un paisaje
                completamente distintos.
              </p>
              <p>
                Esta guía recoge todo lo que necesitas para planificar tu visita:
                qué ofrece cada isla, cómo conseguir los permisos, desde dónde
                salen los ferris, qué rutas merece la pena hacer y los consejos
                prácticos que solo conoce quien organiza estas excursiones cada
                semana como{" "}
                <Link
                  href="/receptivo-galicia"
                  className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
                >
                  agencia receptiva local
                </Link>
                .
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Imagen Playa de Rodas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
              <Image
                src="/images/playa-rodas-islas-cies-suunia-jpg.jpg"
                alt="Playa de Rodas en las Islas Cíes, arena blanca y aguas turquesas del Parque Nacional de las Islas Atlánticas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              Playa de Rodas, Islas Cíes — elegida mejor playa del mundo por The
              Guardian
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Las 4 islas */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Los cuatro archipiélagos</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cada isla tiene su propio carácter. Desde la playa más famosa de
                Galicia hasta un bosque de laureles único en Europa, el Parque
                Nacional ofrece cuatro experiencias completamente diferentes.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-14 space-y-12">
            {islas.map((isla, i) => (
              <AnimateOnScroll key={isla.name}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {isla.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-atlantic-600">
                          {isla.subtitle}
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-600">
                          {isla.description}
                        </p>
                        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                          {isla.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <svg
                                aria-hidden="true"
                                className="mt-0.5 h-4 w-4 flex-shrink-0 text-atlantic-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo conseguir los permisos */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">
              Cómo conseguir los permisos de visita
            </h2>
            <div className="mt-8 space-y-6 leading-relaxed text-gray-600">
              <p>
                Para visitar las Islas Cíes, Ons y Sálvora es obligatorio
                obtener una autorización previa de la Xunta de Galicia. El
                permiso es gratuito y se tramita online en{" "}
                <strong className="text-gray-900">
                  autorizacionislasgalicia.xunta.gal
                </strong>
                . Es imprescindible conseguir el permiso antes de comprar el
                billete del ferri: sin permiso no puedes embarcar.
              </p>
              <p>
                El sistema de permisos suele estar operativo desde Semana Santa
                hasta finales de septiembre. Fuera de esa temporada, el acceso
                está restringido o directamente cerrado, dependiendo de la isla
                y de las condiciones meteorológicas.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "Solicita el permiso con antelación",
                  text: "Los fines de semana de julio y todo agosto se agotan con semanas de antelación. Si puedes elegir, ve entre semana en junio o septiembre: más permisos disponibles, menos gente y mejor experiencia.",
                },
                {
                  title: "Primero el permiso, después el billete",
                  text: "El error más habitual es comprar el ferri antes de tener el permiso. Si no consigues autorización para tu fecha, el billete no sirve. Solicita primero el permiso en la web de la Xunta y después compra el ferri.",
                },
                {
                  title: "Cortegada es la excepción",
                  text: "La Isla de Cortegada no requiere permiso ni tiene límite de visitantes. Se accede desde Carril (Vilagarcía de Arousa) de forma libre y gratuita, lo que la convierte en la opción más sencilla para visitar el Parque Nacional.",
                },
                {
                  title: "Sálvora solo con operador autorizado",
                  text: "A diferencia de las Cíes y Ons, donde puedes ir por tu cuenta con el ferri regular, Sálvora solo se visita mediante excursiones guiadas con operadores autorizados por el Parque Nacional, desde O Grove o Ribeira.",
                },
              ].map((paso, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {paso.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600">
                      {paso.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Cómo llegar / Ferris */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Ferris y accesos</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cada isla tiene sus propias rutas de acceso. Aquí tienes los
                puertos de salida y la frecuencia habitual en temporada alta.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                isla: "Islas Cíes",
                puertos: "Vigo (Estación Marítima), Cangas, Baiona",
                frecuencia: "Varias salidas diarias en verano",
                duracion: "~40 min desde Vigo",
              },
              {
                isla: "Isla de Ons",
                puertos: "Bueu, Sanxenxo, Portonovo",
                frecuencia: "2-3 salidas diarias en temporada",
                duracion: "~30 min desde Bueu",
              },
              {
                isla: "Isla de Sálvora",
                puertos: "O Grove, Ribeira",
                frecuencia: "Excursiones guiadas programadas",
                duracion: "~45 min desde O Grove",
              },
              {
                isla: "Isla de Cortegada",
                puertos: "Carril (Vilagarcía de Arousa)",
                frecuencia: "Acceso libre (a pie con marea baja)",
                duracion: "Acceso directo desde tierra",
              },
            ].map((ruta) => (
              <AnimateOnScroll key={ruta.isla}>
                <article className="card-elegant h-full p-6">
                  <h3 className="font-semibold text-gray-900">{ruta.isla}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-medium uppercase tracking-wider text-atlantic-600 text-xs">
                        Puertos de salida
                      </dt>
                      <dd className="mt-1 text-gray-600">{ruta.puertos}</dd>
                    </div>
                    <div>
                      <dt className="font-medium uppercase tracking-wider text-atlantic-600 text-xs">
                        Frecuencia
                      </dt>
                      <dd className="mt-1 text-gray-600">{ruta.frecuencia}</dd>
                    </div>
                    <div>
                      <dt className="font-medium uppercase tracking-wider text-atlantic-600 text-xs">
                        Duración
                      </dt>
                      <dd className="mt-1 text-gray-600">{ruta.duracion}</dd>
                    </div>
                  </dl>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen sendero Cíes */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
              <Image
                src="/images/playas-de-galicia-suunia.jpg"
                alt="Pasarela de madera hacia una cala en las Islas Cíes, rodeada de vegetación atlántica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              Pasarela hacia una de las calas de las Islas Cíes — acceso a pie
              desde el embarcadero
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mejor época */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">La mejor época para visitar</h2>
            <div className="mt-8 space-y-6 leading-relaxed text-gray-600">
              <p>
                La temporada de acceso a las islas va de Semana Santa a
                septiembre, aunque la disponibilidad de ferris y permisos
                depende de cada isla y de las condiciones meteorológicas.
              </p>
              <p>
                <strong className="text-gray-900">Septiembre</strong> es, sin
                duda, el mejor mes: el agua del Atlántico alcanza su temperatura
                máxima tras todo el verano, los permisos son más fáciles de
                conseguir, los ferris van menos llenos y la luz es perfecta para
                fotografía. La segunda quincena de junio es la otra ventana
                ideal.
              </p>
              <p>
                <strong className="text-gray-900">
                  Julio y agosto
                </strong>{" "}
                funcionan bien si planificas con antelación, pero prepárate para
                compartir las islas con más gente y para pelear por los
                permisos, sobre todo los fines de semana. Entre semana la
                experiencia mejora notablemente.
              </p>
              <p>
                <strong className="text-gray-900">
                  De octubre a Semana Santa
                </strong>{" "}
                las islas están mayoritariamente cerradas al público, salvo
                Cortegada, que es accesible todo el año.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Qué llevar */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Qué llevar a las islas</h2>
              <p className="mt-4 text-lg text-gray-600">
                Las islas son espacios naturales protegidos con infraestructuras
                mínimas. Una buena preparación marca la diferencia entre una
                excursión perfecta y una jornada incómoda.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {consejos.map((consejo) => (
              <AnimateOnScroll key={consejo.title}>
                <article className="card-elegant h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-atlantic-100 text-atlantic-700">
                    {consejo.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {consejo.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {consejo.text}
                  </p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Enlace a servicios */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">
              ¿Prefieres que organicemos tu excursión a las islas?
            </h2>
            <div className="mt-8 space-y-6 leading-relaxed text-gray-600">
              <p>
                Esta guía te da toda la información para planificar la visita
                por tu cuenta. Pero si prefieres que nos encarguemos de todo —
                permisos, ferris, guía, itinerario y logística — eso es
                exactamente lo que hacemos.
              </p>
              <p>
                Organizamos{" "}
                <Link
                  href="/nautica-galicia"
                  className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
                >
                  experiencias náuticas por las Islas Atlánticas
                </Link>{" "}
                con embarcación privada,{" "}
                <Link
                  href="/excursiones-privadas-galicia"
                  className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
                >
                  excursiones privadas
                </Link>{" "}
                a las Cíes y Ons con guía local, y{" "}
                <Link
                  href="/tours-privados-galicia"
                  className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
                >
                  tours privados por Galicia
                </Link>{" "}
                que combinan las islas con las Rías Baixas, bodegas de Albariño
                y gastronomía local. Nos encargamos de todo para que tu grupo
                solo tenga que disfrutar.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Organizamos tu visita a las Islas Atlánticas?"
        description="Cuéntanos qué tipo de experiencia buscas y te preparamos un plan a medida: permisos, transporte, guía y todo lo que necesites. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">
            Preguntas frecuentes sobre las Islas Atlánticas
          </h2>
          <div className="mt-12 space-y-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-100 pb-8 last:border-0"
              >
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

      {/* Breadcrumb de vuelta */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link
              href="/guias"
              className="transition-colors hover:text-atlantic-700"
            >
              Guías de viaje
            </Link>
            <span>/</span>
            <span className="text-gray-900">Islas Atlánticas</span>
          </nav>
        </div>
      </section>

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Islas Atlánticas de Galicia: Cíes, Ons, Sálvora y Cortegada — Guía completa",
            description:
              "Guía completa del Parque Nacional de las Islas Atlánticas: permisos, ferris, playas, rutas de senderismo y consejos prácticos para visitar las Islas Cíes, Ons, Sálvora y Cortegada.",
            url: "https://suunia.com/guias/islas-atlanticas",
            image: "https://suunia.com/images/tours-islas-cies.jpg",
            author: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            mainEntityOfPage: "https://suunia.com/guias/islas-atlanticas",
          }),
        }}
      />

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
    </>
  );
}
