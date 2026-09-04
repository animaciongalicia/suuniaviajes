import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title:
    "Cuándo viajar a Galicia — La mejor época según lo que busques",
  description:
    "Guía mes a mes para elegir la mejor época para viajar a Galicia: clima, fiestas, temporada de marisco, vendimia, playas, Camino de Santiago y precios. Escrita por locales.",
  alternates: {
    canonical: "https://suunia.com/guias/cuando-viajar-galicia",
  },
  openGraph: {
    title: "Cuándo viajar a Galicia – Guía Suunia",
    description:
      "Cada estación tiene su encanto en Galicia. Descubre la mejor época para visitar según tus intereses: playas, gastronomía, naturaleza, fiestas o tranquilidad.",
    url: "https://suunia.com/guias/cuando-viajar-galicia",
    images: [
      {
        url: "/images/viajes-grupos-naturaleza.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const estaciones = [
  {
    nombre: "Primavera",
    meses: "Marzo – Mayo",
    emoji: "🌿",
    temperatura: "12-20 °C",
    ideal: "Naturaleza, Camino de Santiago, cultura",
    descripcion:
      "La primavera es la estación más subestimada de Galicia. Los bosques explotan de verde, las cascadas llevan su máximo caudal tras las lluvias de invierno y las temperaturas son perfectas para caminar. El Camino de Santiago tiene buen clima sin las aglomeraciones de verano. Las camelias florecen entre febrero y abril — Galicia es la región con más variedades de camelia de Europa. La Semana Santa se celebra con procesiones solemnes en Santiago, Viveiro y Ferrol.",
    highlights: [
      "Ruta de las Camelias (Pazo de Oca, Pazo de Lourizán)",
      "Camino de Santiago con buen tiempo y menos gente",
      "Semana Santa en Santiago, Viveiro y Ferrol",
      "Cascadas y ríos en su máximo esplendor",
      "Precios de alojamiento más bajos que en verano",
    ],
  },
  {
    nombre: "Verano",
    meses: "Junio – Agosto",
    emoji: "☀️",
    temperatura: "18-28 °C",
    ideal: "Playas, fiestas, islas, gastronomía",
    descripcion:
      "Julio y agosto son los meses más cálidos y con más horas de sol. Las playas de las Rías Baixas, la Costa da Morte y las Islas Atlánticas están en su mejor momento. Es temporada alta: más gente, precios más altos y hay que reservar con antelación (especialmente los permisos para las Islas Cíes). Junio es el mes más equilibrado — buen tiempo, menos turistas que julio-agosto y los días más largos del año. Las fiestas populares se concentran en verano: la Fiesta del Albariño en Cambados (agosto), las hogueras de San Juan en toda la costa (23 de junio), y la Festa do Marisco en O Grove (octubre, pero las fiestas gastronómicas empiezan en verano).",
    highlights: [
      "Islas Cíes, Ons y Sálvora (permisos obligatorios)",
      "Playas de Rías Baixas y Costa da Morte",
      "San Juan (23 junio): hogueras en todas las playas",
      "Fiesta del Albariño en Cambados (agosto)",
      "Días de hasta 16 horas de luz",
    ],
  },
  {
    nombre: "Otoño",
    meses: "Septiembre – Noviembre",
    emoji: "🍂",
    temperatura: "10-22 °C",
    ideal: "Vendimia, gastronomía, senderismo",
    descripcion:
      "Septiembre es probablemente el mejor mes para visitar Galicia. Las temperaturas siguen siendo agradables, el agua del mar está en su punto más cálido del año, los turistas se han ido y los precios bajan. Es época de vendimia en las cinco denominaciones de origen — varias bodegas permiten participar en la recogida de la uva. El marisco entra en temporada plena: centolla, nécora, buey de mar, berberechos. Octubre trae la Festa do Marisco de O Grove y los bosques empiezan a teñirse de ocres y rojos. Noviembre es más lluvioso pero tiene el encanto de la Galicia más auténtica, con los magostos (castañadas populares) y el comienzo de la temporada del cocido.",
    highlights: [
      "Vendimia en Rías Baixas y Ribeira Sacra (septiembre-octubre)",
      "Festa do Marisco de O Grove (octubre)",
      "Marisco en temporada: centolla, nécora, buey de mar",
      "Bosques atlánticos con colores de otoño",
      "Magostos: castañadas populares (noviembre)",
    ],
  },
  {
    nombre: "Invierno",
    meses: "Diciembre – Febrero",
    emoji: "🌧️",
    temperatura: "6-14 °C",
    ideal: "Gastronomía, termalismo, cultura, precios bajos",
    descripcion:
      "El invierno gallego tiene mala fama, pero es la temporada favorita de muchos locales. Las temperaturas rara vez bajan de 5 °C en la costa (no nieva salvo en montaña). Es temporada de cocido gallego, de lacón con grelos, de marisco en su mejor momento (la centolla de invierno es más sabrosa). Los balnearios y spas — Galicia tiene la mayor concentración de aguas termales de España — son perfectos en esta época. Navidad en Santiago es especial, con el mercado navideño en la Alameda y la misa del Botafumeiro en la Catedral. Enero y febrero son los meses más tranquilos y baratos, ideales para un viaje de gastronomía y cultura sin prisas. El Entroido (carnaval gallego) en febrero marca la transición hacia la primavera.",
    highlights: [
      "Cocido gallego, lacón con grelos, caldo gallego",
      "Centolla y marisco de invierno (más sabroso)",
      "Termalismo: balnearios de Ourense, Lugo, Pontevedra",
      "Navidad en Santiago (Botafumeiro, mercado navideño)",
      "Entroido (carnaval) en Laza, Verín, Xinzo de Limia (febrero)",
    ],
  },
];

const temporadas = [
  {
    interes: "Playas y sol",
    mejor: "Junio – septiembre",
    nota: "Julio-agosto más cálido pero masificado. Junio y septiembre ofrecen el mejor equilibrio.",
  },
  {
    interes: "Marisco",
    mejor: "Octubre – marzo",
    nota: "La centolla se pesca de noviembre a junio. Los percebes todo el año. El pulpo no tiene temporada definida.",
  },
  {
    interes: "Camino de Santiago",
    mejor: "Mayo – junio / septiembre",
    nota: "Julio-agosto es temporada alta con mucha gente en los albergues. Mayo y septiembre tienen buen clima y menos peregrinos.",
  },
  {
    interes: "Ruta del vino",
    mejor: "Septiembre – octubre",
    nota: "Época de vendimia. Pero las bodegas se visitan todo el año con cita previa.",
  },
  {
    interes: "Naturaleza y senderismo",
    mejor: "Abril – junio / septiembre – octubre",
    nota: "Temperaturas suaves y paisaje en su máxima expresión. En primavera, cascadas y bosques verdes. En otoño, colores y vendimia.",
  },
  {
    interes: "Termalismo",
    mejor: "Noviembre – marzo",
    nota: "Los balnearios funcionan todo el año, pero en invierno la experiencia de las pozas termales al aire libre es inmejorable.",
  },
  {
    interes: "Fiestas populares",
    mejor: "Junio – octubre",
    nota: "San Juan (junio), Albariño en Cambados (agosto), Marisco en O Grove (octubre), Rapa das Bestas en Sabucedo (julio).",
  },
  {
    interes: "Presupuesto ajustado",
    mejor: "Noviembre – marzo",
    nota: "Alojamiento un 30-40 % más barato. Restaurantes menos llenos. Vuelos más económicos.",
  },
];

const faqs = [
  {
    question: "¿Llueve mucho en Galicia?",
    answer:
      "Galicia recibe más lluvia que la media española, pero la realidad es más matizada. Santiago tiene unos 1.800 mm anuales, pero la lluvia se concentra entre octubre y marzo. En verano (junio-agosto) los días de lluvia son poco frecuentes y las temperaturas rondan los 20-25 °C. Además, hay diferencias enormes entre la costa atlántica (más húmeda) y el interior sur (Ourense tiene veranos secos y calurosos, por encima de 35 °C). La lluvia gallega suele ser fina e intermitente — los locales la llaman «orballo» — y rara vez arruina un día de turismo.",
  },
  {
    question: "¿Cuál es el mes más barato para viajar a Galicia?",
    answer:
      "Enero y febrero son los meses con precios más bajos en alojamiento y vuelos. Noviembre y marzo también ofrecen buenos precios. La diferencia con julio-agosto puede ser de un 30-40 % en hoteles. Los restaurantes mantienen precios similares todo el año, pero en temporada baja es más fácil conseguir mesa en los más demandados.",
  },
  {
    question: "¿Se puede bañar en el mar en Galicia?",
    answer:
      "Sí, sobre todo en las Rías Baixas, donde el agua está más resguardada. La temperatura del agua oscila entre 14 °C en mayo y 20-21 °C en agosto-septiembre. En la Costa da Morte y la costa norte, el agua es más fría y el oleaje más fuerte. Septiembre es el mes con el agua más cálida del año. Las playas de las Islas Cíes y Ons tienen aguas especialmente transparentes y algo más templadas.",
  },
  {
    question: "¿Cuándo es la temporada de marisco en Galicia?",
    answer:
      "Depende de la especie. La centolla tiene veda y su temporada va de noviembre a junio (la de invierno es la más sabrosa). Los percebes se pescan todo el año, pero el mar bravo de invierno los hace más escasos y caros. Las zamburiñas, navajas y berberechos están en su mejor momento en otoño-invierno. El pulpo no tiene temporada definida y se encuentra fresco todo el año. La Festa do Marisco de O Grove (octubre) es la cita gastronómica más popular.",
  },
];

export default function GuiaCuandoViajar() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/viajes-grupos-naturaleza.jpg"
          alt="Paisaje verde de Galicia con bosques atlánticos y montañas bajo un cielo atlántico cambiante"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Consejos
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Cuándo viajar a Galicia: la mejor época según lo que busques
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Galicia no es solo verano. Cada estación tiene su encanto, sus
            fiestas, sus productos de temporada y su luz. Una guía mes a mes
            para elegir el momento perfecto.
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
              8 min de lectura
            </span>
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
            <li className="font-medium text-gray-900">Cuándo viajar</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Una de las preguntas que más nos hacen como{" "}
              <Link
                href="/receptivo-galicia"
                className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
              >
                agencia receptiva en Galicia
              </Link>{" "}
              es cuándo es el mejor momento para venir. La respuesta honesta es
              que depende de lo que busques. Galicia no tiene una temporada mala
              — tiene temporadas diferentes, cada una con sus propias ventajas.
            </p>
            <p>
              El clima atlántico hace que los cambios de estación se noten de
              verdad. No es lo mismo la Galicia de las hogueras de San Juan en
              junio que la de los magostos con castañas en noviembre, ni la de
              los viñedos en vendimia que la de las camelias floreciendo en
              marzo. Esta guía te ayuda a elegir la mejor fecha según lo que
              quieras hacer, ver y comer.
            </p>
          </div>
        </div>
      </section>

      {/* Las 4 estaciones */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section">Galicia estación por estación</h2>
          <div className="mt-12 space-y-10">
            {estaciones.map((est) => (
              <AnimateOnScroll key={est.nombre}>
                <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <span className="text-3xl">{est.emoji}</span>
                        <h3 className="mt-2 text-2xl font-bold text-gray-900">
                          {est.nombre}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-atlantic-700">
                          {est.meses} · {est.temperatura}
                        </p>
                      </div>
                      <span className="rounded-full bg-atlantic-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-atlantic-700">
                        {est.ideal}
                      </span>
                    </div>

                    <p className="mt-6 leading-relaxed text-gray-600">
                      {est.descripcion}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                        Lo mejor de la temporada
                      </h4>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {est.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <svg
                              aria-hidden="true"
                              className="mt-0.5 h-4 w-4 flex-shrink-0 text-atlantic-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* In-article image */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
            <Image
              src="/images/paisajes-de-galicia.jpg"
              alt="Cascada en un bosque atlántico de Galicia rodeada de vegetación verde exuberante"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="mt-3 text-center text-sm text-gray-400">
            Los bosques atlánticos de Galicia alcanzan su máximo esplendor en
            primavera y otoño.
          </p>
        </div>
      </section>

      {/* Tabla: mejor época según interés */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">
            La mejor época según lo que busques
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Resumen rápido para elegir fecha en función de tus intereses
            principales.
          </p>

          <AnimateOnScroll>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="px-6 py-4 font-semibold text-gray-900">
                      Interés
                    </th>
                    <th className="px-6 py-4 font-semibold text-gray-900">
                      Mejor época
                    </th>
                    <th className="hidden px-6 py-4 font-semibold text-gray-900 sm:table-cell">
                      Nota
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {temporadas.map((t, i) => (
                    <tr
                      key={t.interes}
                      className={
                        i < temporadas.length - 1
                          ? "border-b border-gray-50"
                          : ""
                      }
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {t.interes}
                      </td>
                      <td className="px-6 py-4 text-atlantic-700 font-medium">
                        {t.mejor}
                      </td>
                      <td className="hidden px-6 py-4 text-gray-500 sm:table-cell">
                        {t.nota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          {/* Mobile: notes below table */}
          <div className="mt-6 space-y-4 sm:hidden">
            {temporadas.map((t) => (
              <div key={t.interes} className="text-sm">
                <span className="font-medium text-gray-900">{t.interes}:</span>{" "}
                <span className="text-gray-500">{t.nota}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos prácticos */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Consejos prácticos sobre el clima</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                titulo: "La lluvia no es lo que piensas",
                texto:
                  "La lluvia gallega típica es el «orballo»: fina, intermitente y casi nunca arruina el día. Los chubascos fuertes se concentran en otoño-invierno. En verano, los días de lluvia son la excepción. Lleva siempre una chaqueta ligera e impermeable, pero no dejes que la lluvia te quite las ganas de venir.",
              },
              {
                titulo: "La costa y el interior son mundos distintos",
                texto:
                  "Ourense puede superar los 35 °C en julio mientras que la costa rara vez pasa de 25 °C. En invierno, el interior es más frío (heladas en montaña) pero la costa mantiene temperaturas suaves. Si tu viaje combina costa e interior, lleva ropa para ambos climas.",
              },
              {
                titulo: "Las horas de luz importan",
                texto:
                  "En junio, Galicia tiene casi 16 horas de luz solar. En diciembre, apenas 9. Esto afecta mucho a la experiencia: los atardeceres de verano en la Costa da Morte son legendarios precisamente porque el sol no se pone hasta las 22:00.",
              },
              {
                titulo: "Reserva con tiempo en temporada alta",
                texto:
                  "Julio y agosto requieren reservar alojamiento con semanas de antelación, sobre todo en la costa de las Rías Baixas y las Islas Atlánticas. Los permisos para Cíes y Ons se agotan con rapidez. En cambio, en septiembre-octubre encontrarás disponibilidad sin problemas y precios más bajos.",
              },
            ].map((consejo) => (
              <article key={consejo.titulo} className="card-elegant p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {consejo.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {consejo.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-section">
            ¿Ya sabes cuándo vienes? Nosotros diseñamos el viaje
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Una vez tengas las fechas, podemos encargarnos de todo: itinerario,
            alojamiento, transporte, restaurantes y experiencias adaptadas a la
            temporada. Organizamos{" "}
            <Link
              href="/tours-privados-galicia"
              className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
            >
              tours privados
            </Link>
            ,{" "}
            <Link
              href="/grandes-rutas-galicia"
              className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
            >
              grandes rutas
            </Link>{" "}
            y{" "}
            <Link
              href="/viajes-grupos-galicia"
              className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
            >
              viajes de grupo
            </Link>{" "}
            durante todo el año.
          </p>
          <a
            href="https://wa.me/34678288284"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Cuéntanos tu viaje
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Preguntas frecuentes</h2>
          <div className="mt-10 divide-y divide-gray-100">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900">
                  {faq.question}
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Cuándo viajar a Galicia: la mejor época según lo que busques",
              description:
                "Guía mes a mes para elegir la mejor época para viajar a Galicia según tus intereses.",
              url: "https://suunia.com/guias/cuando-viajar-galicia",
              publisher: {
                "@type": "Organization",
                name: "Suunia",
                url: "https://suunia.com",
              },
              image: "/images/viajes-grupos-naturaleza.jpg",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            },
          ]),
        }}
      />
    </>
  );
}
