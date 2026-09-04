import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Las 5 denominaciones de origen del vino gallego — Guia completa",
  description:
    "Rias Baixas, Ribeira Sacra, Valdeorras, Monterrei y Ribeiro: uvas, bodegas, rutas del vino y como organizar una experiencia enologica en Galicia.",
  alternates: { canonical: "https://suunia.com/guias/vinos-denominaciones-origen-galicia" },
  openGraph: {
    title: "Las 5 DOs del vino gallego – Guia Suunia",
    description:
      "Todo sobre las cinco denominaciones de origen del vino en Galicia: Albarino, Godello, Mencia, Treixadura, bodegas que visitar y rutas del vino.",
    url: "https://suunia.com/guias/vinos-denominaciones-origen-galicia",
    images: [{ url: "/images/tours-gastronomia.jpg", width: 1200, height: 630 }],
  },
};

const denominaciones = [
  {
    name: "Rias Baixas",
    subtitle: "La mas famosa",
    grapeIcon: "Albarino (95 %+ de la produccion)",
    bodegas: "~180 bodegas",
    description:
      "La DO mas conocida internacionalmente y la que puso el vino gallego en el mapa. Se extiende por la provincia de Pontevedra y el sur de A Coruna, con cinco subzonas: Val do Salnes (el corazon historico), Condado do Tea, O Rosal, Ribeira do Ulla y Soutomaior. El clima atlantico — humedo, templado, con influencia marina directa — marca el caracter de los vinos: aromaticos, minerales, con notas citricas y de fruta de hueso, y un final salino que los hace perfectos para maridar con marisco.",
    bodegasDestacadas: [
      { name: "Pazo de Senorans", nota: "Uno de los Albarinos mas emblematicos de Espana. El pazo del siglo XVI es espectacular." },
      { name: "Mar de Frades", nota: "Conocida por su botella azul. Bodega moderna con vistas excepcionales a los vinedos." },
      { name: "Zarate", nota: "Bodega familiar boutique en Meano. Vinos de parcela con mucha personalidad." },
      { name: "Pazo de Barrantes", nota: "Propiedad de la familia del Marques de Murrieta. Pazo del siglo XV y Albarino de finca." },
      { name: "Martin Codax", nota: "Cooperativa con instalaciones modernas en Cambados. Vistas a la ria y visitas accesibles." },
    ],
    link: "/guias/rias-baixas",
    linkText: "Ver guia completa de Rias Baixas",
  },
  {
    name: "Ribeira Sacra",
    subtitle: "La mas espectacular",
    grapeIcon: "Mencia (tinto) y Godello (blanco)",
    bodegas: "~90 bodegas",
    description:
      "Los vinedos mas dramaticos de Europa. Viticultura heroica en bancales tallados en laderas casi verticales sobre los canones del Sil y del Mino, con pendientes que superan el 60 %. Aqui no entran maquinas: todo se hace a mano, a veces con ayuda de monorrailes. El resultado son vinos con una personalidad unica. Los tintos de Mencia son elegantes, de cuerpo medio, con notas de fruta roja, mineral y un tanino fino. Los blancos de Godello son frescos, con aromas florales y buen potencial de envejecimiento.",
    bodegasDestacadas: [
      { name: "Algueira", nota: "Vinedos en bancales espectaculares sobre el Sil. Vinos de autor con mucha precision." },
      { name: "Dominio do Bibei", nota: "Proyecto ambicioso en Manzaneda. Blancos y tintos de altura, literalmente." },
      { name: "Rectoral de Amandi", nota: "En la subzona historica de Amandi. Mencia clasica de Ribeira Sacra." },
      { name: "Adega Moure", nota: "Bodega pequena y familiar con vinedos en terrazas centenarias." },
    ],
    link: "/guias/ribeira-sacra",
    linkText: "Ver guia completa de Ribeira Sacra",
  },
  {
    name: "Valdeorras",
    subtitle: "La cuna del Godello",
    grapeIcon: "Godello (blanco, estrella) y Mencia (tinto)",
    bodegas: "~40 bodegas",
    description:
      "En el extremo oriental de Galicia, a lo largo del rio Sil, el clima cambia radicalmente: es mas seco, mas continental, con veranos calidos e inviernos frios. Aqui se cultiva el Godello, una uva blanca autoctona que estuvo al borde de la extincion en los anos 70 y que fue rescatada por un punado de viticultores visionarios. Hoy esta considerada una de las grandes uvas blancas de Espana. Los vinos son blancos de cuerpo medio a lleno, con notas de fruta de hueso, miel y en ocasiones crianza en barrica. Tambien se elaboran tintos de Mencia con mas estructura que los de Ribeira Sacra.",
    bodegasDestacadas: [
      { name: "Rafael Palacios", nota: "Uno de los productores de vino blanco mas prestigiosos de Espana. Su Godello «As Sortes» es referencia." },
      { name: "Godeval", nota: "Pionera en la recuperacion del Godello en los anos 80. Bodega historica imprescindible." },
      { name: "A Coroa", nota: "Godellos con personalidad en O Barco de Valdeorras. Visitas intimas y cercanas." },
      { name: "Valdesil", nota: "Vinedos en ladera sobre pizarra. Godellos minerales y con buena capacidad de guarda." },
    ],
    link: null,
    linkText: null,
  },
  {
    name: "Monterrei",
    subtitle: "La mas desconocida",
    grapeIcon: "Godello, Treixadura (blancos), Mencia, Merenzao (tintos)",
    bodegas: "~25 bodegas",
    description:
      "La DO mas meridional y calida de Galicia, en la frontera con Portugal, cerca de Verin. El clima es el mas continental de las cinco denominaciones, con menos lluvia y mas horas de sol. El resultado son vinos mas maduros y redondos que los de la costa: los blancos tienen mas cuerpo y los tintos mas fruta y estructura. Es la DO con menor produccion, lo que significa que las visitas a bodegas son mas personales y autenticas. Monterrei es tambien una zona de aguas termales — se puede combinar una ruta del vino con una visita a los balnearios de la zona.",
    bodegasDestacadas: [
      { name: "Terras do Cigarron", nota: "Referencia de la DO. Blancos y tintos que demuestran el potencial de Monterrei." },
      { name: "Gargalo", nota: "Bodega moderna con vinos que expresan bien el terroir calido del valle." },
      { name: "Ladairo", nota: "Proyecto familiar con vinedos viejos. Vinos con caracter y honestidad." },
    ],
    link: null,
    linkText: null,
  },
  {
    name: "Ribeiro",
    subtitle: "La mas antigua",
    grapeIcon: "Treixadura (blanco principal), Torrontes, Lado, Loureira",
    bodegas: "~50 bodegas",
    description:
      "La region vinicola mas antigua de Galicia. En la Edad Media, los vinos del Ribeiro ya se exportaban a Inglaterra y eran los mas apreciados de la peninsula. Su centro es Ribadavia, una villa medieval preciosa que vale la pena visitar por si misma. A diferencia de Rias Baixas (donde domina una sola uva), el Ribeiro apuesta por los coupages — mezclas de variedades autoctonas como Treixadura, Torrontes, Lado y Loureira. El resultado son blancos frescos, florales, complejos y con una relacion calidad-precio excelente. Son probablemente los vinos gallegos mas infravalorados.",
    bodegasDestacadas: [
      { name: "Vina Costeira", nota: "La mayor cooperativa de la DO. Buena puerta de entrada al Ribeiro con visitas bien organizadas." },
      { name: "Coto de Gomariz", nota: "Vinedos en ladera con cepas viejas. Treixaduras de mucha finura y elegancia." },
      { name: "Manuel Formigo", nota: "Bodega artesanal con produccion limitada. Vinos con mucha autenticidad." },
    ],
    link: null,
    linkText: null,
  },
];

const consejosRuta = [
  {
    title: "Reserva con antelacion",
    text: "La mayoria de bodegas en Galicia requieren reserva previa para las visitas. Contacta con 2-3 dias de antelacion como minimo. Las bodegas mas pequenas suelen necesitar mas margen.",
  },
  {
    title: "Maximo 2-3 bodegas por dia",
    text: "Las visitas suelen durar entre 1 y 1,5 horas con cata incluida (10-25 euros por persona). Tres bodegas en un dia es un ritmo intenso pero viable. Dos es lo ideal si quieres disfrutar sin prisas.",
  },
  {
    title: "Transporte privado o conductor designado",
    text: "Es imprescindible. Las bodegas estan en zonas rurales sin transporte publico y las catas implican beber. La opcion mas comoda es contratar un transporte privado con conductor.",
  },
  {
    title: "Combina con gastronomia",
    text: "Muchas bodegas tienen restaurante propio o colaboran con restaurantes cercanos. Una buena ruta del vino incluye siempre una comida con producto local maridada con los vinos de la zona.",
  },
  {
    title: "Mejor epoca: septiembre-octubre",
    text: "La vendimia (cosecha) es el momento mas emocionante para visitar. Los vinedos estan en plena actividad, las bodegas huelen a mosto y se respira la energia de la cosecha. Pero primavera y principios de verano tambien son excelentes: vinedos verdes, buen tiempo y menos afluencia.",
  },
];

const faqs = [
  {
    question: "Cual es el mejor vino gallego?",
    answer:
      "Depende del gusto de cada uno. El Albarino (Rias Baixas) es el mas famoso y el mas facil de encontrar fuera de Galicia. El Godello (Valdeorras) esta ganando reconocimiento internacional como una de las grandes uvas blancas de Espana. La Mencia (Ribeira Sacra) es la referencia para quien busque tintos gallegos con personalidad. Y los coupages de Treixadura (Ribeiro) ofrecen probablemente la mejor relacion calidad-precio de toda Galicia.",
  },
  {
    question: "Se puede visitar bodegas en Galicia sin reserva previa?",
    answer:
      "Algunas bodegas grandes aceptan visitas sin cita, pero la mayoria requieren reserva. Lo recomendable es contactar con al menos 2-3 dias de antelacion. Si prefieres no preocuparte de la logistica, una agencia como nosotros se encarga de gestionar las reservas, el transporte y el itinerario completo.",
  },
  {
    question: "Cual es la mejor epoca para una ruta del vino en Galicia?",
    answer:
      "Septiembre y octubre, durante la vendimia, es la epoca mas emocionante: los vinedos estan en plena actividad y se vive la energia de la cosecha. Pero primavera (mayo-junio) y principios de verano tambien son periodos excelentes — los vinedos estan verdes, el clima es agradable y las bodegas estan menos concurridas.",
  },
  {
    question: "Galicia solo produce vinos blancos?",
    answer:
      "No. Aunque los blancos dominan la produccion (alrededor del 75 %) y el Albarino es la estrella internacional, Galicia produce excelentes tintos. La uva Mencia, cultivada sobre todo en Ribeira Sacra y Monterrei, da tintos elegantes, de cuerpo medio, con notas de fruta roja y mineral. Ribeira Sacra es una de las zonas mas interesantes de Espana para tinto.",
  },
];

export default function GuiaVinosGalicia() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/tours-gastronomia.jpg"
          alt="Vinedos gallegos con vistas a la ria al atardecer, copa de vino blanco Albarino en primer plano"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Gastronomia
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Las 5 denominaciones de origen del vino gallego
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Rias Baixas, Ribeira Sacra, Valdeorras, Monterrei y Ribeiro: cinco regiones vinicolas protegidas, cada una con su microclima, sus uvas autoctonas y su personalidad. Guia completa para entender y disfrutar el vino de Galicia.
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
            <li><Link href="/guias" className="hover:text-atlantic-700">Guias</Link></li>
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
                Galicia tiene cinco Denominaciones de Origen (DOs) — regiones vinicolas protegidas con identidad propia. Cada una responde a un microclima, un suelo y unas variedades de uva diferentes. El resultado es un mosaico de vinos que pocas regiones de Europa pueden igualar en diversidad para un territorio tan compacto.
              </p>
              <p>
                La vid lleva en Galicia mas de 2.000 anos — los romanos ya plantaron los primeros vinedos —, pero el mundo internacional del vino no empezo a prestarle atencion hasta los anos 90. Hoy, los blancos gallegos (especialmente Albarino, Godello y Treixadura) estan entre los mas emocionantes de Europa, y los tintos de Mencia de Ribeira Sacra se han convertido en un descubrimiento para enologos de todo el mundo.
              </p>
              <p>
                Esta guia recorre las cinco DOs con criterio de local: que las hace unicas, que uvas definen cada zona, que bodegas merece la pena visitar y como organizar una{" "}
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
                    alt="Vista aerea de los vinedos en bancales de la Ribeira Sacra sobre el canon del rio Sil"
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
              <h2 className="heading-section">Comparativa rapida</h2>
              <p className="mt-4 text-lg text-gray-600">
                Las cinco DOs en un vistazo: uva principal, estilo de vino y caracter de cada zona.
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
                    <th className="px-6 py-4 font-semibold text-gray-900">Caracter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Rias Baixas</td>
                    <td className="px-6 py-4 text-gray-600">Albarino</td>
                    <td className="px-6 py-4 text-gray-600">Blanco</td>
                    <td className="px-6 py-4 text-gray-600">Aromatico, citrico, mineral, salino</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Ribeira Sacra</td>
                    <td className="px-6 py-4 text-gray-600">Mencia</td>
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
                    <td className="px-6 py-4 text-gray-600">Godello / Mencia</td>
                    <td className="px-6 py-4 text-gray-600">Blanco y tinto</td>
                    <td className="px-6 py-4 text-gray-600">Maduro, redondo, mas cuerpo</td>
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
            <h2 className="heading-section">Como organizar una ruta del vino en Galicia</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Recorrer las bodegas gallegas por tu cuenta es posible, pero requiere planificacion. Estos son los puntos clave para que la experiencia funcione.
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
            <h2 className="heading-section">Prefieres que organicemos tu ruta del vino?</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Esta guia te da el conocimiento para planificar tu experiencia enologica en Galicia por tu cuenta. Pero si prefieres que nos encarguemos de todo — seleccion de bodegas, reservas, transporte con conductor, maridajes gastronomicos y alojamiento — eso es exactamente lo que hacemos como{" "}
                <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  agencia receptiva local
                </Link>.
              </p>
              <p>
                Disenamos{" "}
                <Link href="/gastronomia-bodegas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  rutas de gastronomia y bodegas
                </Link>{" "}
                a medida por las cinco DOs, con guia enologico y acceso a bodegas que no abren al publico general. Tambien ofrecemos experiencias{" "}
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
        title="Organizamos tu ruta del vino en Galicia?"
        description="Cuentanos que DOs te interesan y que tipo de experiencia buscas. Te preparamos un itinerario enologico completo a medida. Sin compromiso."
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
              Guias de viaje
            </Link>
            <span>/</span>
            <span className="text-gray-900">Vinos de Galicia</span>
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
            headline: "Las 5 denominaciones de origen del vino gallego",
            description:
              "Guia completa de las cinco DOs del vino en Galicia: Rias Baixas, Ribeira Sacra, Valdeorras, Monterrei y Ribeiro. Uvas, bodegas, rutas del vino y consejos practicos.",
            url: "https://suunia.com/guias/vinos-denominaciones-origen-galicia",
            image: "https://suunia.com/images/tours-gastronomia.jpg",
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
            mainEntityOfPage: "https://suunia.com/guias/vinos-denominaciones-origen-galicia",
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
