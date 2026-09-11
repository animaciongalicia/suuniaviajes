import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Las 5 denominaciones de origen del vino gallego — Guía completa",
  description:
    "Rías Baixas, Ribeira Sacra, Valdeorras, Monterrei y Ribeiro: uvas, bodegas, rutas del vino y cómo organizar una experiencia enológica en Galicia.",
  alternates: { canonical: "https://suunia.com/guias/vinos-denominaciones-origen-galicia" },
  openGraph: {
    title: "Las 5 DOs del vino gallego – Guía Suunia",
    description:
      "Todo sobre las cinco denominaciones de origen del vino en Galicia: Albariño, Godello, Mencía, Treixadura, bodegas que visitar y rutas del vino.",
    url: "https://suunia.com/guias/vinos-denominaciones-origen-galicia",
    images: [
      {
        url: "/images/tours-gastronomia.jpg",
        width: 1200,
        height: 630,
        alt: "Copas de vino gallego y viñedos, guía de las denominaciones de origen de Galicia",
      },
    ],
  },
};

const denominaciones = [
  {
    name: "Rías Baixas",
    subtitle: "La más famosa",
    grapeIcon: "Albariño (95 %+ de la producción)",
    bodegas: "~180 bodegas",
    description:
      "La DO más conocida internacionalmente y la que puso el vino gallego en el mapa. Se extiende por la provincia de Pontevedra y el sur de A Coruña, con cinco subzonas: Val do Salnés (el corazón histórico), Condado do Tea, O Rosal, Ribeira do Ulla y Soutomaior. El clima atlántico — húmedo, templado, con influencia marina directa — marca el carácter de los vinos: aromáticos, minerales, con notas cítricas y de fruta de hueso, y un final salino que los hace perfectos para maridar con marisco.",
    bodegasDestacadas: [
      { name: "Pazo de Señorans", nota: "Uno de los Albariños más emblemáticos de España. El pazo del siglo XVI es espectacular." },
      { name: "Mar de Frades", nota: "Conocida por su botella azul. Bodega moderna con vistas excepcionales a los viñedos." },
      { name: "Zárate", nota: "Bodega familiar boutique en Meaño. Vinos de parcela con mucha personalidad." },
      { name: "Pazo de Barrantes", nota: "Propiedad de la familia del Marqués de Murrieta. Pazo del siglo XV y Albariño de finca." },
      { name: "Martín Codax", nota: "Cooperativa con instalaciones modernas en Cambados. Vistas a la ría y visitas accesibles." },
    ],
    link: "/guias/rias-baixas",
    linkText: "Ver guía completa de Rías Baixas",
  },
  {
    name: "Ribeira Sacra",
    subtitle: "La más espectacular",
    grapeIcon: "Mencía (tinto) y Godello (blanco)",
    bodegas: "~90 bodegas",
    description:
      "Los viñedos más dramáticos de Europa. Viticultura heroica en bancales tallados en laderas casi verticales sobre los cañones del Sil y del Miño, con pendientes que superan el 60 %. Aquí no entran máquinas: todo se hace a mano, a veces con ayuda de monorraíles. El resultado son vinos con una personalidad única. Los tintos de Mencía son elegantes, de cuerpo medio, con notas de fruta roja, mineral y un tanino fino. Los blancos de Godello son frescos, con aromas florales y buen potencial de envejecimiento.",
    bodegasDestacadas: [
      { name: "Algueira", nota: "Viñedos en bancales espectaculares sobre el Sil. Vinos de autor con mucha precisión." },
      { name: "Dominio do Bibei", nota: "Proyecto ambicioso en Manzaneda. Blancos y tintos de altura, literalmente." },
      { name: "Rectoral de Amandi", nota: "En la subzona histórica de Amandi. Mencía clásica de Ribeira Sacra." },
      { name: "Adega Moure", nota: "Bodega pequeña y familiar con viñedos en terrazas centenarias." },
    ],
    link: "/guias/ribeira-sacra",
    linkText: "Ver guía completa de Ribeira Sacra",
  },
  {
    name: "Valdeorras",
    subtitle: "La cuna del Godello",
    grapeIcon: "Godello (blanco, estrella) y Mencía (tinto)",
    bodegas: "~40 bodegas",
    description:
      "En el extremo oriental de Galicia, a lo largo del río Sil, el clima cambia radicalmente: es más seco, más continental, con veranos cálidos e inviernos fríos. Aquí se cultiva el Godello, una uva blanca autóctona que estuvo al borde de la extinción en los años 70 y que fue rescatada por un puñado de viticultores visionarios. Hoy está considerada una de las grandes uvas blancas de España. Los vinos son blancos de cuerpo medio a lleno, con notas de fruta de hueso, miel y en ocasiones crianza en barrica. También se elaboran tintos de Mencía con más estructura que los de Ribeira Sacra.",
    bodegasDestacadas: [
      { name: "Rafael Palacios", nota: "Uno de los productores de vino blanco más prestigiosos de España. Su Godello «As Sortes» es referencia." },
      { name: "Godeval", nota: "Pionera en la recuperación del Godello en los años 80. Bodega histórica imprescindible." },
      { name: "A Coroa", nota: "Godellos con personalidad en O Barco de Valdeorras. Visitas íntimas y cercanas." },
      { name: "Valdesil", nota: "Viñedos en ladera sobre pizarra. Godellos minerales y con buena capacidad de guarda." },
    ],
    link: null,
    linkText: null,
  },
  {
    name: "Monterrei",
    subtitle: "La más desconocida",
    grapeIcon: "Godello, Treixadura (blancos), Mencía, Merenzao (tintos)",
    bodegas: "~25 bodegas",
    description:
      "La DO más meridional y cálida de Galicia, en la frontera con Portugal, cerca de Verín. El clima es el más continental de las cinco denominaciones, con menos lluvia y más horas de sol. El resultado son vinos más maduros y redondos que los de la costa: los blancos tienen más cuerpo y los tintos más fruta y estructura. Es la DO con menor producción, lo que significa que las visitas a bodegas son más personales y auténticas. Monterrei es también una zona de aguas termales — se puede combinar una ruta del vino con una visita a los balnearios de la zona.",
    bodegasDestacadas: [
      { name: "Terras do Cigarrón", nota: "Referencia de la DO. Blancos y tintos que demuestran el potencial de Monterrei." },
      { name: "Gargalo", nota: "Bodega moderna con vinos que expresan bien el terroir cálido del valle." },
      { name: "Ladairo", nota: "Proyecto familiar con viñedos viejos. Vinos con carácter y honestidad." },
    ],
    link: null,
    linkText: null,
  },
  {
    name: "Ribeiro",
    subtitle: "La más antigua",
    grapeIcon: "Treixadura (blanco principal), Torrontés, Lado, Loureira",
    bodegas: "~50 bodegas",
    description:
      "La región vinícola más antigua de Galicia. En la Edad Media, los vinos del Ribeiro ya se exportaban a Inglaterra y eran los más apreciados de la península. Su centro es Ribadavia, una villa medieval preciosa que vale la pena visitar por sí misma. A diferencia de Rías Baixas (donde domina una sola uva), el Ribeiro apuesta por los coupages — mezclas de variedades autóctonas como Treixadura, Torrontés, Lado y Loureira. El resultado son blancos frescos, florales, complejos y con una relación calidad-precio excelente. Son probablemente los vinos gallegos más infravalorados.",
    bodegasDestacadas: [
      { name: "Viña Costeira", nota: "La mayor cooperativa de la DO. Buena puerta de entrada al Ribeiro con visitas bien organizadas." },
      { name: "Coto de Gomariz", nota: "Viñedos en ladera con cepas viejas. Treixaduras de mucha finura y elegancia." },
      { name: "Manuel Formigo", nota: "Bodega artesanal con producción limitada. Vinos con mucha autenticidad." },
    ],
    link: null,
    linkText: null,
  },
];

const consejosRuta = [
  {
    title: "Reserva con antelación",
    text: "La mayoría de bodegas en Galicia requieren reserva previa para las visitas. Contacta con 2-3 días de antelación como mínimo. Las bodegas más pequeñas suelen necesitar más margen.",
  },
  {
    title: "Máximo 2-3 bodegas por día",
    text: "Las visitas suelen durar entre 1 y 1,5 horas con cata incluida (10-25 euros por persona). Tres bodegas en un día es un ritmo intenso pero viable. Dos es lo ideal si quieres disfrutar sin prisas.",
  },
  {
    title: "Transporte privado o conductor designado",
    text: "Es imprescindible. Las bodegas están en zonas rurales sin transporte público y las catas implican beber. La opción más cómoda es contratar un transporte privado con conductor.",
  },
  {
    title: "Combina con gastronomía",
    text: "Muchas bodegas tienen restaurante propio o colaboran con restaurantes cercanos. Una buena ruta del vino incluye siempre una comida con producto local maridada con los vinos de la zona.",
  },
  {
    title: "Mejor época: septiembre-octubre",
    text: "La vendimia (cosecha) es el momento más emocionante para visitar. Los viñedos están en plena actividad, las bodegas huelen a mosto y se respira la energía de la cosecha. Pero primavera y principios de verano también son excelentes: viñedos verdes, buen tiempo y menos afluencia.",
  },
];

const faqs = [
  {
    question: "¿Cuál es el mejor vino gallego?",
    answer:
      "Depende del gusto de cada uno. El Albariño (Rías Baixas) es el más famoso y el más fácil de encontrar fuera de Galicia. El Godello (Valdeorras) está ganando reconocimiento internacional como una de las grandes uvas blancas de España. La Mencía (Ribeira Sacra) es la referencia para quien busque tintos gallegos con personalidad. Y los coupages de Treixadura (Ribeiro) ofrecen probablemente la mejor relación calidad-precio de toda Galicia.",
  },
  {
    question: "¿Se puede visitar bodegas en Galicia sin reserva previa?",
    answer:
      "Algunas bodegas grandes aceptan visitas sin cita, pero la mayoría requieren reserva. Lo recomendable es contactar con al menos 2-3 días de antelación. Si prefieres no preocuparte de la logística, una agencia como nosotros se encarga de gestionar las reservas, el transporte y el itinerario completo.",
  },
  {
    question: "¿Cuál es la mejor época para una ruta del vino en Galicia?",
    answer:
      "Septiembre y octubre, durante la vendimia, es la época más emocionante: los viñedos están en plena actividad y se vive la energía de la cosecha. Pero primavera (mayo-junio) y principios de verano también son periodos excelentes — los viñedos están verdes, el clima es agradable y las bodegas están menos concurridas.",
  },
  {
    question: "¿Galicia solo produce vinos blancos?",
    answer:
      "No. Aunque los blancos dominan la producción (alrededor del 75 %) y el Albariño es la estrella internacional, Galicia produce excelentes tintos. La uva Mencía, cultivada sobre todo en Ribeira Sacra y Monterrei, da tintos elegantes, de cuerpo medio, con notas de fruta roja y mineral. Ribeira Sacra es una de las zonas más interesantes de España para tinto.",
  },
];

export default function GuiaVinosGalicia() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/bodegas-Granbazan.jpg"
          alt="Viñedos gallegos con vistas a la ría al atardecer, copa de vino blanco Albariño en primer plano"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Gastronomía
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Las 5 denominaciones de origen del vino gallego
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Rías Baixas, Ribeira Sacra, Valdeorras, Monterrei y Ribeiro: cinco regiones vinícolas protegidas, cada una con su microclima, sus uvas autóctonas y su personalidad. Guía completa para entender y disfrutar el vino de Galicia.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              11 min de lectura
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-400" />
            <span>Equipo Suunia</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="border-b border-gray-100 bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-atlantic-700">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/guias" className="hover:text-atlantic-700">Guías</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium">Vinos de Galicia</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Galicia tiene cinco Denominaciones de Origen (DOs) — regiones vinícolas protegidas con identidad propia. Cada una responde a un microclima, un suelo y unas variedades de uva diferentes. El resultado es un mosaico de vinos que pocas regiones de Europa pueden igualar en diversidad para un territorio tan compacto.
              </p>
              <p>
                La vid lleva en Galicia más de 2.000 años — los romanos ya plantaron los primeros viñedos —, pero el mundo internacional del vino no empezó a prestarle atención hasta los años 90. Hoy, los blancos gallegos (especialmente Albariño, Godello y Treixadura) están entre los más emocionantes de Europa, y los tintos de Mencía de Ribeira Sacra se han convertido en un descubrimiento para enólogos de todo el mundo.
              </p>
              <p>
                Esta guía recorre las cinco DOs con criterio de local: qué las hace únicas, qué uvas definen cada zona, qué bodegas merece la pena visitar y cómo organizar una{" "}
                <Link href="/gastronomia-bodegas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  ruta del vino en Galicia
                </Link>{" "}
                de verdad.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Las 5 DOs */}
      {denominaciones.map((do_, i) => (
        <section key={do_.name} className={i % 2 === 0 ? "section-padding bg-gray-50" : "section-padding"}>
          <div className="mx-auto max-w-7xl">
            <AnimateOnScroll>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-atlantic-600">
                    {do_.subtitle}
                  </span>
                </div>
                <h2 className="heading-section">DO {do_.name}</h2>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 shadow-sm">
                    <svg aria-hidden="true" className="h-4 w-4 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    {do_.grapeIcon}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 shadow-sm">
                    <svg aria-hidden="true" className="h-4 w-4 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                    {do_.bodegas}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* In-article image for Ribeira Sacra */}
            {do_.name === "Ribeira Sacra" && (
              <AnimateOnScroll>
                <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl">
                  <Image
                    src="/images/visitar-de-galicia.jpg"
                    alt="Vista aérea de los viñedos en bancales de la Ribeira Sacra sobre el cañón del río Sil"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              </AnimateOnScroll>
            )}

            <AnimateOnScroll>
              <div className="mx-auto mt-8 max-w-3xl">
                <p className="text-lg leading-relaxed text-gray-600">
                  {do_.description}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Bodegas destacadas */}
            <AnimateOnScroll>
              <div className="mx-auto mt-10 max-w-4xl">
                <h3 className="mb-6 text-center text-lg font-semibold text-gray-900">
                  Bodegas destacadas
                </h3>
                <div className={`grid gap-4 ${do_.bodegasDestacadas.length > 3 ? "sm:grid-cols-2 lg:grid-cols-3" : do_.bodegasDestacadas.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
                  {do_.bodegasDestacadas.map((bodega) => (
                    <div key={bodega.name} className="card-elegant h-full">
                      <h4 className="font-semibold text-gray-900">{bodega.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">{bodega.nota}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Link to full guide if exists */}
            {do_.link && (
              <AnimateOnScroll>
                <div className="mt-8 text-center">
                  <Link
                    href={do_.link}
                    className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600 font-medium"
                  >
                    {do_.linkText} &rarr;
                  </Link>
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </section>
      ))}

      {/* Comparativa rapida */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Comparativa rápida</h2>
              <p className="mt-4 text-lg text-gray-600">
                Las cinco DOs en un vistazo: uva principal, estilo de vino y carácter de cada zona.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="px-6 py-4 font-semibold text-gray-900">DO</th>
                    <th className="px-6 py-4 font-semibold text-gray-900">Uva estrella</th>
                    <th className="px-6 py-4 font-semibold text-gray-900">Tipo</th>
                    <th className="px-6 py-4 font-semibold text-gray-900">Carácter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Rías Baixas</td>
                    <td className="px-6 py-4 text-gray-600">Albariño</td>
                    <td className="px-6 py-4 text-gray-600">Blanco</td>
                    <td className="px-6 py-4 text-gray-600">Aromático, cítrico, mineral, salino</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Ribeira Sacra</td>
                    <td className="px-6 py-4 text-gray-600">Mencía</td>
                    <td className="px-6 py-4 text-gray-600">Tinto (y blanco)</td>
                    <td className="px-6 py-4 text-gray-600">Elegante, fruta roja, tanino fino</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Valdeorras</td>
                    <td className="px-6 py-4 text-gray-600">Godello</td>
                    <td className="px-6 py-4 text-gray-600">Blanco</td>
                    <td className="px-6 py-4 text-gray-600">Cuerpo medio-lleno, fruta de hueso, miel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Monterrei</td>
                    <td className="px-6 py-4 text-gray-600">Godello / Mencía</td>
                    <td className="px-6 py-4 text-gray-600">Blanco y tinto</td>
                    <td className="px-6 py-4 text-gray-600">Maduro, redondo, más cuerpo</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Ribeiro</td>
                    <td className="px-6 py-4 text-gray-600">Treixadura (coupage)</td>
                    <td className="px-6 py-4 text-gray-600">Blanco</td>
                    <td className="px-6 py-4 text-gray-600">Fresco, floral, complejo, gran valor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Como organizar una ruta del vino */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Cómo organizar una ruta del vino en Galicia</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Recorrer las bodegas gallegas por tu cuenta es posible, pero requiere planificación. Estos son los puntos clave para que la experiencia funcione.
            </p>
            <div className="mt-10 space-y-8">
              {consejosRuta.map((consejo, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{consejo.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{consejo.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Enlace a servicios */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">¿Prefieres que organicemos tu ruta del vino?</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Esta guía te da el conocimiento para planificar tu experiencia enológica en Galicia por tu cuenta. Pero si prefieres que nos encarguemos de todo — selección de bodegas, reservas, transporte con conductor, maridajes gastronómicos y alojamiento — eso es exactamente lo que hacemos como{" "}
                <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  agencia receptiva local
                </Link>.
              </p>
              <p>
                Diseñamos{" "}
                <Link href="/gastronomia-bodegas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  rutas de gastronomía y bodegas
                </Link>{" "}
                a medida por las cinco DOs, con guía enológico y acceso a bodegas que no abren al público general. También ofrecemos experiencias{" "}
                <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  premium
                </Link>{" "}
                que combinan catas privadas, cenas con chef y alojamiento en pazos.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Organizamos tu ruta del vino en Galicia?"
        description="Cuéntanos qué DOs te interesan y qué tipo de experiencia buscas. Te preparamos un itinerario enológico completo a medida. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre el vino gallego</h2>
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

      {/* Breadcrumb de vuelta */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/guias" className="transition-colors hover:text-atlantic-700">
              Guías de viaje
            </Link>
            <span>/</span>
            <span className="text-gray-900">Vinos de Galicia</span>
          </nav>
        </div>
      </section>

      
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://suunia.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guías de viaje",
                item: "https://suunia.com/guias",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Vinos y denominaciones de origen",
              },
            ],
          }),
        }}
      />

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Las 5 denominaciones de origen del vino gallego",
            description:
              "Guía completa de las cinco DOs del vino en Galicia: Rías Baixas, Ribeira Sacra, Valdeorras, Monterrei y Ribeiro. Uvas, bodegas, rutas del vino y consejos prácticos.",
            url: "https://suunia.com/guias/vinos-denominaciones-origen-galicia",
            image: "https://suunia.com/images/tours-gastronomia.jpg",
            author: { "@id": "https://suunia.com/#organization" },
            publisher: { "@id": "https://suunia.com/#organization" },
            mainEntityOfPage: "https://suunia.com/guias/vinos-denominaciones-origen-galicia",
            datePublished: "2026-09-02",
            dateModified: "2026-09-11",
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
