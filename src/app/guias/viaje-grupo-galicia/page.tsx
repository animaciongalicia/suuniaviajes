import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title:
    "Cómo organizar un viaje en grupo a Galicia — Guía práctica completa",
  description:
    "Todo lo que necesitas saber para organizar un viaje en grupo a Galicia: transporte, alojamiento, restaurantes para grupos, actividades, presupuesto y logística. Guía escrita por especialistas.",
  alternates: {
    canonical: "https://suunia.com/guias/viaje-grupo-galicia",
  },
  openGraph: {
    title: "Cómo organizar un viaje en grupo a Galicia – Guía Suunia",
    description:
      "Logística, transporte, alojamientos, restaurantes y actividades para grupos. La guía práctica definitiva para organizar un viaje de grupo a Galicia.",
    url: "https://suunia.com/guias/viaje-grupo-galicia",
    images: [
      { url: "/images/viajes-grupos-hero.jpg", width: 1200, height: 630 },
    ],
  },
};

const pasos = [
  {
    num: 1,
    titulo: "Define el perfil del grupo",
    texto:
      "No es lo mismo un grupo de 15 amigos de 30 años que un viaje de 50 personas de una asociación cultural. El perfil del grupo determina todo lo demás: el ritmo del viaje, el tipo de alojamiento, los restaurantes y las actividades. Antes de planificar nada, responde a estas preguntas: ¿cuántas personas? ¿Edades y condición física? ¿Qué les motiva — gastronomía, naturaleza, cultura, aventura? ¿Hay alguna fecha inamovible?",
  },
  {
    num: 2,
    titulo: "Elige la zona y la duración",
    texto:
      "Galicia tiene mucho que ver, pero intentar abarcarlo todo en un viaje de grupo es un error. Es mejor centrarse en una o dos zonas y recorrerlas con calma. Para 3-4 días, las Rías Baixas o Santiago + Costa da Morte funcionan muy bien. Para 5-7 días se puede combinar costa e interior (Rías Baixas + Ribeira Sacra, por ejemplo). Los viajes de más de una semana permiten recorrer toda Galicia con paradas en A Coruña, Lugo y Ourense.",
  },
  {
    num: 3,
    titulo: "Resuelve el transporte",
    texto:
      "Para grupos de 15-20 personas, un minibús con conductor es la opción más cómoda y flexible. Para grupos de 20-55, un autocar. Los conductores locales conocen las carreteras secundarias y saben dónde parar con un vehículo grande (no todas las bodegas o pueblos tienen aparcamiento para autocares). Los transfers aeropuerto-hotel son imprescindibles. Si el grupo es de 8-12 personas, varios vehículos 4x4 o furgonetas pueden ser una alternativa más ágil.",
  },
  {
    num: 4,
    titulo: "Busca alojamiento adecuado para grupos",
    texto:
      "Los pazos (casas señoriales gallegas) son una opción excelente para grupos de hasta 20-25 personas: exclusividad, jardines, ambiente. Los Paradores (hoteles en edificios históricos) como el de Santo Estevo o el de Baiona aceptan grupos y ofrecen una experiencia memorable. Para grupos grandes, los hoteles de 4 estrellas en Santiago, Vigo o A Coruña tienen capacidad y salas para reuniones. Reserva con al menos 2-3 meses de antelación en temporada alta.",
  },
  {
    num: 5,
    titulo: "Planifica las comidas con antelación",
    texto:
      "Comer bien en grupo en Galicia es fácil, pero requiere reserva previa. Los restaurantes gallegos suelen tener aforo limitado y no siempre pueden sentar a 20-30 personas de golpe. Lo ideal es negociar menús de grupo con antelación: así el restaurante prepara mejor producto, el precio es cerrado y no hay sorpresas. Para experiencias gastronómicas especiales (marisquería, pulpería, cata de vinos), avisa siempre con al menos una semana de antelación.",
  },
  {
    num: 6,
    titulo: "Selecciona actividades que funcionen en grupo",
    texto:
      "No todas las experiencias escalan bien a 30 personas. Funcionan muy bien en grupo: catamaranes por las rías, visitas a bodegas (muchas tienen salas para grupos grandes), rutas de senderismo guiadas, talleres de cocina, paseos en barco por los cañones del Sil, y visitas culturales con guía. Funcionan peor: restaurantes con mucha demanda y pocas mesas, senderos estrechos, playas pequeñas. Alterna actividades en grupo con tiempo libre para que cada uno explore a su ritmo.",
  },
];

const errores = [
  {
    titulo: "Querer ver demasiado",
    texto:
      "Galicia tiene 1.660 km de costa y cuatro provincias. No se puede ver todo en un viaje. Es mejor profundizar en una zona que correr de un sitio a otro. Los desplazamientos largos en autocar cansan al grupo y restan tiempo de disfrute.",
  },
  {
    titulo: "No reservar restaurantes",
    texto:
      "Llegar con 25 personas a una marisquería sin reserva un sábado de agosto es garantía de desastre. En Galicia, los buenos restaurantes son pequeños y se llenan. Reserva siempre, y negocia menú cerrado.",
  },
  {
    titulo: "Ignorar el clima",
    texto:
      "Galicia puede tener lluvia cualquier día del año. Un plan B bajo techo para las actividades al aire libre no es un extra, es una necesidad. Bodegas, museos, mercados cubiertos y talleres gastronómicos funcionan con cualquier tiempo.",
  },
  {
    titulo: "No contratar guía local",
    texto:
      "Un guía local no solo explica la historia — conoce los atajos, sabe qué puertas se abren con una llamada y resuelve imprevistos sobre la marcha. Para grupos, es la diferencia entre un viaje bueno y uno memorable.",
  },
  {
    titulo: "Presupuesto demasiado ajustado en temporada alta",
    texto:
      "En julio y agosto, los precios de alojamiento y transporte suben considerablemente. Si el presupuesto es limitado, junio y septiembre ofrecen la misma experiencia a un coste un 25-35 % menor.",
  },
];

const presupuesto = [
  {
    concepto: "Alojamiento",
    rango: "60-180 €/persona/noche",
    nota: "Hotel 3★ desde 60 €, 4★ desde 90 €, pazo exclusivo desde 120 €, Parador desde 150 €.",
  },
  {
    concepto: "Transporte (autocar)",
    rango: "400-800 €/día",
    nota: "Minibús (hasta 19 plazas) desde 400 €/día. Autocar (hasta 55 plazas) desde 600 €/día. Incluye conductor y combustible.",
  },
  {
    concepto: "Comidas",
    rango: "30-70 €/persona",
    nota: "Menú de grupo en restaurante de calidad: 30-45 €. Marisquería o restaurante premium: 50-70 €. Vinos aparte.",
  },
  {
    concepto: "Actividades",
    rango: "15-60 €/persona",
    nota: "Visita a bodega con cata: 15-25 €. Catamarán por la ría: 20-30 €. Ruta guiada medio día: 25-40 €. Taller gastronómico: 40-60 ���.",
  },
  {
    concepto: "Guía local",
    rango: "250-400 €/día",
    nota: "Guía oficial de turismo, idioma a elegir. Medio día desde 150 €. Día completo desde 250 €.",
  },
];

const faqs = [
  {
    question: "¿Cuántas personas se consideran un viaje de grupo?",
    answer:
      "A efectos prácticos, a partir de 10-12 personas ya conviene planificar como grupo: reservar restaurantes con menú cerrado, contratar transporte colectivo y buscar alojamiento con capacidad. A partir de 20, la logística se complica significativamente y es muy recomendable contar con una agencia que gestione todo. Los grupos más habituales que organizamos están entre 15 y 45 personas.",
  },
  {
    question:
      "¿Cuánto cuesta organizar un viaje de grupo a Galicia?",
    answer:
      "Depende del nivel y la duración. Un viaje de 4 días para 20 personas con hotel 4★, autocar, comidas en restaurantes de calidad y actividades puede estar en torno a 500-700 € por persona. Con alojamiento premium (pazos, Paradores) y experiencias exclusivas, sube a 800-1.200 € por persona. Pedimos presupuesto sin compromiso — cada grupo es diferente y ajustamos la propuesta al presupuesto disponible.",
  },
  {
    question: "¿Con cuánta antelación hay que organizar un viaje de grupo?",
    answer:
      "Lo ideal es empezar a planificar con 3-4 meses de antelación, sobre todo si el viaje es en temporada alta (junio-septiembre). Para grupos grandes (+30 personas) o fechas muy demandadas, 6 meses de margen es más seguro. En temporada baja (octubre-mayo), con 1-2 meses suele ser suficiente. Lo que más tarda en confirmarse es el alojamiento — los hoteles y pazos con encanto tienen pocas habitaciones.",
  },
  {
    question: "¿Qué ventajas tiene contratar una agencia local?",
    answer:
      "Una agencia receptiva local como Suunia conoce el terreno: sabe qué carreteras son aptas para autocares, qué restaurantes aceptan grupos sin perder calidad, qué bodegas ofrecen las mejores visitas, y tiene contactos directos con proveedores locales (hoteles, guías, empresas de actividades). Esto se traduce en un viaje mejor diseñado, precios más competitivos (por los acuerdos directos) y resolución inmediata de cualquier imprevisto sobre el terreno.",
  },
];

export default function GuiaViajeGrupo() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/viajes-grupos-hero.jpg"
          alt="Grupo de viajeros recorriendo un paseo marítimo gallego con vistas al océano Atlántico"
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
            Cómo organizar un viaje en grupo a Galicia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Logística, transporte, alojamientos, restaurantes para grupos
            grandes y actividades que funcionan. Todo lo que necesitas saber
            antes de organizar un viaje de grupo.
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
              9 min de lectura
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
            <li className="font-medium text-gray-900">Viajes en grupo</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>
              Galicia es un destino que funciona extraordinariamente bien para
              viajes de grupo. La combinación de gastronomía de primer nivel,
              paisajes espectaculares, patrimonio histórico y una infraestructura
              turística cada vez más preparada hace que los grupos que vienen una
              vez casi siempre repiten. Pero organizar un viaje para 20, 30 o 50
              personas tiene sus particularidades.
            </p>
            <p>
              Como{" "}
              <Link
                href="/receptivo-galicia"
                className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
              >
                agencia receptiva en Galicia
              </Link>
              , llevamos años organizando{" "}
              <Link
                href="/viajes-grupos-galicia"
                className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
              >
                viajes de grupo
              </Link>{" "}
              de todo tipo: asociaciones, empresas, familias, clubs de
              gastronomía, grupos escolares y viajes de incentivos. Esta guía
              recoge todo lo que hemos aprendido.
            </p>
          </div>
        </div>
      </section>

      {/* Los 6 pasos */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">
            Los 6 pasos para organizar tu viaje
          </h2>
          <div className="mt-10 space-y-8">
            {pasos.map((paso) => (
              <AnimateOnScroll key={paso.num}>
                <div className="flex gap-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-700 text-sm font-bold text-white">
                    {paso.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {paso.titulo}
                    </h3>
                    <p className="mt-3 leading-relaxed text-gray-600">
                      {paso.texto}
                    </p>
                  </div>
                </div>
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
              src="/images/playas-islote-areoco-suunia.jpg"
              alt="Islote de Areoso en la ría de Arousa con barcos alrededor, destino popular para excursiones náuticas en grupo"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="mt-3 text-center text-sm text-gray-400">
            Excursiones náuticas como la visita al Islote de Areoso funcionan
            muy bien en grupos.
          </p>
        </div>
      </section>

      {/* Errores comunes */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section">
            Los 5 errores más comunes al organizar viajes de grupo
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {errores.map((error, i) => (
              <AnimateOnScroll key={error.titulo}>
                <article className="card-elegant h-full p-6">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-600">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {error.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {error.texto}
                  </p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Presupuesto orientativo */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Presupuesto orientativo</h2>
          <p className="mt-4 text-lg text-gray-600">
            Estos rangos son orientativos y varían según temporada, tamaño del
            grupo y nivel de servicio. Pedimos presupuesto personalizado sin
            compromiso.
          </p>

          <AnimateOnScroll>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="px-6 py-4 font-semibold text-gray-900">
                      Concepto
                    </th>
                    <th className="px-6 py-4 font-semibold text-gray-900">
                      Rango de precios
                    </th>
                    <th className="hidden px-6 py-4 font-semibold text-gray-900 sm:table-cell">
                      Detalle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {presupuesto.map((p, i) => (
                    <tr
                      key={p.concepto}
                      className={
                        i < presupuesto.length - 1
                          ? "border-b border-gray-50"
                          : ""
                      }
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {p.concepto}
                      </td>
                      <td className="px-6 py-4 font-medium text-atlantic-700">
                        {p.rango}
                      </td>
                      <td className="hidden px-6 py-4 text-gray-500 sm:table-cell">
                        {p.nota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          {/* Mobile notes */}
          <div className="mt-6 space-y-4 sm:hidden">
            {presupuesto.map((p) => (
              <div key={p.concepto} className="text-sm">
                <span className="font-medium text-gray-900">
                  {p.concepto}:
                </span>{" "}
                <span className="text-gray-500">{p.nota}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actividades que funcionan */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">
            Actividades que funcionan bien en grupo
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                titulo: "Catamarán por las Rías",
                texto:
                  "Paseo en catamarán por la Ría de Arousa o la Ría de Vigo con parada en viveros de mejillón. Capacidad para grupos grandes. Incluye degustación de mejillones y vino Albariño a bordo.",
              },
              {
                titulo: "Ruta de bodegas",
                texto:
                  "Visita a 2-3 bodegas en Rías Baixas o Ribeira Sacra con cata comentada. Muchas bodegas tienen salas para 30-40 personas y combinan la visita con un almuerzo maridado.",
              },
              {
                titulo: "Taller gastronómico",
                texto:
                  "Taller de cocina gallega (pulpo, empanada, filloas) en grupo. Se puede organizar en hoteles, restaurantes o espacios rurales. Funciona como team building y como experiencia gastronómica.",
              },
              {
                titulo: "Ruta guiada por Santiago",
                texto:
                  "Visita cultural al casco histórico de Santiago con guía oficial. Se pueden dividir grupos grandes en subgrupos con distintos guías para no perder calidad.",
              },
              {
                titulo: "Senderismo guiado",
                texto:
                  "Rutas de nivel fácil-medio por la Costa da Morte, las Islas Atlánticas o la Ribeira Sacra. Los guías de naturaleza locales adaptan la ruta al nivel del grupo.",
              },
              {
                titulo: "Mariscada en grupo",
                texto:
                  "Una mariscada gallega (percebes, cigalas, nécoras, centolla, navajas, zamburiñas) es una experiencia compartida que funciona como pocas. Hay restaurantes especializados en servir mariscadas para grupos de hasta 50 personas.",
              },
            ].map((act) => (
              <article key={act.titulo} className="card-elegant p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {act.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {act.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-section">
            ¿Organizamos tu viaje de grupo?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Nos encargamos de todo: diseño del itinerario, reservas,
            transporte, guías, restaurantes y gestión del grupo sobre el
            terreno. Desde{" "}
            <Link
              href="/viajes-grupos-galicia"
              className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
            >
              viajes de grupo
            </Link>{" "}
            hasta{" "}
            <Link
              href="/incentivos-empresa-galicia"
              className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
            >
              viajes de incentivos
            </Link>{" "}
            y{" "}
            <Link
              href="/eventos-corporativos-galicia"
              className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
            >
              eventos corporativos
            </Link>
            . Cuéntanos qué necesitas y te hacemos una propuesta sin compromiso.
          </p>
          <a
            href="https://wa.me/34678288284"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Pide presupuesto para tu grupo
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
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
                "Cómo organizar un viaje en grupo a Galicia",
              description:
                "Guía práctica completa para organizar viajes de grupo a Galicia: logística, transporte, alojamiento, restaurantes y actividades.",
              url: "https://suunia.com/guias/viaje-grupo-galicia",
              publisher: {
                "@type": "Organization",
                name: "Suunia",
                url: "https://suunia.com",
              },
              image: "/images/viajes-grupos-hero.jpg",
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
