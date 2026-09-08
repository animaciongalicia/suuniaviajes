import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Santiago de Compostela más allá del Camino — Guía completa",
  description:
    "Guía completa de Santiago de Compostela: casco histórico, Mercado de Abastos, mejores restaurantes, vida nocturna y excursiones. Lo que los locales saben y las guías no cuentan.",
  alternates: { canonical: "https://suunia.com/guias/santiago-de-compostela" },
  openGraph: {
    title: "Santiago de Compostela más allá del Camino – Guía Suunia",
    description:
      "Todo lo que hay que ver, comer y hacer en Santiago de Compostela más allá del Camino: el casco histórico, el Mercado de Abastos, restaurantes, vida nocturna y excursiones.",
    url: "https://suunia.com/guias/santiago-de-compostela",
    images: [
      {
        url: "/images/tours-santiago.jpg",
        width: 1200,
        height: 630,
        alt: "Catedral de Santiago de Compostela y su casco histórico visto desde la Praza do Obradoiro",
      },
    ],
  },
};

const plazas = [
  {
    name: "Praza do Obradoiro",
    description:
      "La plaza más conocida de Santiago y una de las más espectaculares de Europa. Cada uno de sus cuatro edificios cuenta una historia diferente: el Hostal de los Reyes Católicos (hoy Parador), mandado construir por los Reyes Católicos como hospital de peregrinos; el Pazo de Raxoi, sede del Ayuntamiento y de la Presidencia de la Xunta; el Colegio de San Xerome, con su portada gótica; y el Colegio de Fonseca, que alberga la biblioteca universitaria. La fachada barroca de la Catedral preside el conjunto.",
  },
  {
    name: "Praza da Quintana",
    description:
      "La plaza más atmosférica de Santiago, dividida en dos niveles: Quintana de Mortos (la parte baja) y Quintana de Vivos (la parte alta). Aquí se encuentra la Puerta Santa de la Catedral, que solo se abre en Años Santos Compostelanos. De día es un espacio sereno con estudiantes leyendo en las escalinatas; de noche, la iluminación transforma la piedra y el silencio le da un carácter completamente distinto.",
  },
  {
    name: "Praza de Praterías",
    description:
      "La única fachada románica que conserva la Catedral da a esta plaza. La Fuente de los Caballos en el centro, la Casa del Cabildo con su fachada-pantalla barroca y las tiendas de los antiguos plateros que dieron nombre a la plaza completan un rincón que merece detenerse. Desde aquí se accede a la Torre del Reloj, conocida como la Berenguela.",
  },
];

const restaurantes = [
  {
    name: "Abastos 2.0",
    tipo: "Cocina de mercado contemporánea",
    detalle:
      "Situado dentro del propio Mercado de Abastos, trabaja con el producto que se vende a pocos metros. Cocina gallega actualizada con presentación cuidada y precios razonables para la calidad que ofrece. Imprescindible reservar.",
  },
  {
    name: "Casa Marcelo",
    tipo: "Fusión gallego-japonesa",
    detalle:
      "Marcelo Tejedor fusiona la despensa gallega con técnicas japonesas en un formato de barra y menú degustación. Platos sorprendentes en un espacio pequeño. No es barato, pero la experiencia es única en Santiago.",
  },
  {
    name: "O Curro da Parra",
    tipo: "Tapas contemporáneas",
    detalle:
      "En un edificio histórico precioso de la Rúa do Curro da Parra, ofrece tapas y raciones de autor con producto gallego de temporada. La relación calidad-precio es excelente y el ambiente es animado sin ser ruidoso.",
  },
  {
    name: "A Tafona",
    tipo: "Cocina gallega de temporada",
    detalle:
      "Elegante pero sin pretensiones, con una carta que cambia según lo que llega del mercado y de los productores locales. Buen trabajo con las verduras de temporada y los pescados de lonja. Vinos gallegos bien seleccionados.",
  },
  {
    name: "Bierzo Enxebre",
    tipo: "Cocina tradicional gallega",
    detalle:
      "El restaurante de los compostelanos. Raciones generosas, producto honesto y precios justos. Aquí no hay fusiones ni platos de autor: caldo gallego, lacón con grelos, pulpo y empanada como los de siempre. Lleno de locales a mediodía.",
  },
];

const excursiones = [
  {
    destino: "Rías Baixas",
    tiempo: "1 hora en coche",
    descripcion:
      "Cambados, O Grove, Sanxenxo, playas atlánticas y bodegas de Albariño. La excursión más popular desde Santiago.",
    enlace: "/guias/rias-baixas",
  },
  {
    destino: "Costa da Morte",
    tiempo: "1,5 horas en coche",
    descripcion:
      "Finisterre, Muxía, acantilados salvajes y pueblos marineros. Galicia en estado puro, sin concesiones al turismo de masas.",
    enlace: "/guias/costa-da-morte",
  },
  {
    destino: "Ribeira Sacra",
    tiempo: "1,5 horas en coche",
    descripcion:
      "Cañones del Sil, monasterios románicos, viñas en bancales y navegación fluvial. El interior más espectacular de Galicia.",
    enlace: "/guias/ribeira-sacra",
  },
  {
    destino: "Finisterre",
    tiempo: "1,5 horas en coche",
    descripcion:
      "El fin del mundo conocido para los romanos. El faro, la puesta de sol y la sensación de estar en el último punto de Europa. Se puede combinar con Muxía.",
    enlace: null,
  },
  {
    destino: "A Coruña",
    tiempo: "50 minutos en coche",
    descripcion:
      "La Torre de Hércules (único faro romano en funcionamiento del mundo), la Ciudad Vieja, las galerías acristaladas del paseo marítimo y una escena gastronómica excelente.",
    enlace: null,
  },
];

const consejos = [
  {
    title: "Mejor época para visitar",
    text: "Primavera (abril-junio) y septiembre son los meses ideales: temperaturas agradables, menos peregrinos que en verano y la ciudad funciona a pleno ritmo con la vida universitaria. Julio y agosto tienen más horas de sol pero también mucho más turismo. El invierno tiene su encanto — las plazas vacías, la niebla y los cafés llenos de estudiantes — pero llueve con frecuencia.",
  },
  {
    title: "Año Santo Compostelano",
    text: "Cuando el 25 de julio (día del Apóstol Santiago) cae en domingo, se celebra el Año Santo y se abre la Puerta Santa de la Catedral. El próximo será en 2027. El anterior fue en 2021-2022, extendido excepcionalmente por la pandemia. En años santos la ciudad recibe muchos más peregrinos y hay celebraciones especiales durante todo el año.",
  },
  {
    title: "Cómo llegar",
    text: "El aeropuerto de Santiago (SCQ) tiene conexiones directas con Madrid, Barcelona, Londres y otras ciudades europeas, además de vuelos estacionales. En tren, Renfe conecta Santiago con Madrid en unas 4 horas (Alvia) y con Vigo y A Coruña en menos de una hora. La estación de tren está a 15 minutos a pie del casco histórico.",
  },
  {
    title: "Moverse por la ciudad",
    text: "Todo el casco histórico es peatonal y se recorre a pie sin problema. Si llegas en coche, utiliza los aparcamientos subterráneos de la Praza de Galicia o el de Bonaval, ambos a pocos minutos a pie del centro. No intentes aparcar dentro del casco antiguo: las calles son estrechas, de piedra y la mayoría están restringidas.",
  },
  {
    title: "La lluvia",
    text: "Santiago es una de las ciudades más lluviosas de España, con unos 1.800 mm anuales. Pero la lluvia suele ser fina e intermitente (el orballo gallego), no torrencial. Trae siempre una chaqueta impermeable, incluso en verano. Y no dejes que la lluvia te desanime: Santiago con lluvia tiene un encanto especial, esa morriña que los gallegos llevan con orgullo.",
  },
];

const faqs = [
  {
    question: "Cuántos días necesito en Santiago de Compostela?",
    answer:
      "Un mínimo de 2 días para ver la ciudad con calma: el casco histórico, la Catedral, el Mercado de Abastos y cenar bien. Con 3-4 días puedes añadir excursiones de un día a las Rías Baixas, la Costa da Morte o A Coruña. Si usas Santiago como base para explorar Galicia, una semana te permite combinar la ciudad con varias rutas por la región.",
  },
  {
    question: "Qué es el Año Santo Compostelano?",
    answer:
      "El Año Santo Compostelano (o Año Xacobeo) se celebra cuando el 25 de julio, festividad del Apóstol Santiago, cae en domingo. En esos años se abre la Puerta Santa de la Catedral y se conceden indulgencias especiales a los peregrinos. El próximo Año Santo será en 2027. Hay celebraciones especiales durante todo el año, más actos litúrgicos y la ciudad recibe un número de visitantes significativamente mayor.",
  },
  {
    question: "Dónde comer bien sin caer en trampas turísticas?",
    answer:
      "Evita los restaurantes de la Rúa do Franco que tienen fotos de los platos en la puerta: suelen ser trampas turísticas con precios inflados y calidad mediocre. Ve al Mercado de Abastos y prueba el concepto de cocina do mercado (compras el producto y te lo cocinan). Pregunta a los locales o sigue a los universitarios: las calles secundarias suelen tener mejor relación calidad-precio que las principales.",
  },
  {
    question: "Llueve mucho en Santiago?",
    answer:
      "Sí, Santiago recibe alrededor de 1.800 mm de precipitación al año, lo que la convierte en una de las ciudades más lluviosas de España. Sin embargo, la lluvia suele ser fina e intermitente (lo que en gallego se llama orballo), no torrencial. Trae una buena chaqueta impermeable y abraza la morriña, esa bruma característica que envuelve la ciudad y le da parte de su encanto.",
  },
];

export default function GuiaSantiago() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/tours-santiago.jpg"
          alt="Vista de la Catedral de Santiago de Compostela y el casco histórico desde el Parque de la Alameda"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Guía de destino
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Santiago de Compostela más allá del Camino
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Ciudad universitaria, Patrimonio de la Humanidad y capital gastronómica. Todo lo que Santiago tiene para ofrecer cuando dejas de mirarlo solo como el final del Camino.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              13 min de lectura
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
            <li className="text-gray-900 font-medium">Santiago de Compostela</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Santiago de Compostela es mucho más que el final del Camino. Es una ciudad universitaria con más de 40.000 estudiantes que le dan vida todo el año, una escena gastronómica que va mucho más allá de los menús turísticos, y un casco histórico declarado Patrimonio de la Humanidad por la UNESCO que esconde rincones que la mayoría de los visitantes nunca descubre.
              </p>
              <p>
                Esta guía no va del Camino de Santiago. Va de la ciudad que espera al final: las plazas que hay que ver con calma, el Mercado de Abastos donde los compostelanos compran desde 1873, los restaurantes donde se come de verdad, la vida nocturna que mueve una ciudad joven, y las excursiones que convierten a Santiago en la mejor base para explorar Galicia. Todo desde la experiencia de un equipo que vive aquí y organiza viajes por la zona como{" "}
                <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  agencia receptiva local
                </Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Casco histórico */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">El casco histórico más allá de la Catedral</h2>
              <p className="mt-4 text-lg text-gray-600">
                El centro histórico de Santiago es Patrimonio de la Humanidad desde 1985. Pero la mayoría de los visitantes solo ven la Catedral y la Praza do Obradoiro. Estas son las paradas que no te puedes saltar.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Plazas principales */}
          <div className="mt-14 space-y-10">
            {plazas.map((plaza, i) => (
              <AnimateOnScroll key={plaza.name}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{plaza.name}</h3>
                      <p className="mt-3 leading-relaxed text-gray-600">{plaza.description}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Resto del casco histórico */}
          <div className="mx-auto mt-14 max-w-3xl">
            <AnimateOnScroll>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">Las calles y los paseos</h3>
                <p>
                  La <strong>Rúa do Franco</strong> y la <strong>Rúa do Vilar</strong> son las dos arterias principales del casco histórico, con soportales de piedra, tiendas y restaurantes a ambos lados. La Rúa do Franco es la más turística (y donde hay que ir con más cuidado al elegir restaurante); la Rúa do Vilar es algo más tranquila y tiene librerías, tiendas de artesanía y cafés con carácter.
                </p>
                <p>
                  El <strong>Parque de la Alameda</strong>, al oeste del casco antiguo, ofrece las mejores vistas de la Catedral desde la distancia. El paseo entre robles centenarios, con la silueta de las torres recortada contra el cielo, es una de las estampas clásicas de Santiago. Al atardecer, la luz es excepcional.
                </p>
                <p>
                  El <strong>Convento de San Francisco</strong>, según la tradición fundado por el propio San Francisco de Asís durante su peregrinación a Santiago en el siglo XIII, se encuentra junto al casco histórico y alberga hoy un hotel monumento. Su claustro gótico y la iglesia merecen una visita tranquila.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mercado de Abastos */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">El Mercado de Abastos</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                El Mercado de Abastos de Santiago es el segundo lugar más visitado de la ciudad después de la Catedral, y probablemente el que mejor resume el carácter compostelano. Funciona de forma ininterrumpida desde 1873, y sigue siendo un mercado real: los compostelanos vienen aquí a hacer la compra, no a sacarse fotos.
              </p>
              <p>
                Encontrarás marisco fresco de las rías gallegas — percebes, navajas, zamburiñas, centolla —, verduras de temporada de las huertas del interior, queso de Tetilla con denominación de origen, miel de la zona y embutidos artesanales. Los puestos de flores dan color al conjunto.
              </p>
              <p>
                El concepto más interesante del mercado es la <strong>cocina do mercado</strong>: compras tu pescado o marisco en los puestos y los restaurantes que rodean el mercado te lo cocinan por un precio módico. Es una forma excelente de comer producto de primera calidad a precio razonable y vivir la experiencia completa.
              </p>
              <p>
                El mejor momento para visitarlo es por la mañana, especialmente los <strong>jueves y sábados</strong>, cuando las campesinas de la zona traen sus productos directamente: grelos, pimientos de Padrón, patatas, huevos de aldea y quesos frescos. La actividad empieza a decaer a partir de las 14:00.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Dónde comer */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Dónde comer bien en Santiago</h2>
              <p className="mt-4 text-lg text-gray-600">
                Santiago tiene una oferta gastronómica excelente si sabes dónde buscar. Una regla básica: evita los restaurantes de la Rúa do Franco que tienen fotos de los platos en la puerta. Estos cinco no fallan.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restaurantes.map((rest) => (
              <AnimateOnScroll key={rest.name}>
                <div className="card-elegant h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                    {rest.tipo}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900">{rest.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{rest.detalle}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Vida nocturna */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">La vida nocturna compostelana</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Santiago es, ante todo, una ciudad universitaria. Con más de 40.000 estudiantes repartidos entre la Universidad de Santiago de Compostela (una de las más antiguas de España, fundada en 1495) y varios campus, la vida nocturna tiene una energía que muchos visitantes no esperan.
              </p>
              <p>
                La <strong>zona de vinos</strong> se concentra en torno a la Rúa do Franco y la Praza de Cervantes. Aquí encontrarás bares de vino donde tomar un Albariño o un Mencía de la Ribeira Sacra con una tapa a buen precio. El ambiente es tranquilo al principio de la noche y se anima a medida que avanza.
              </p>
              <p>
                Para <strong>música en directo</strong>, el casco histórico tiene varios locales con programación regular de música celta, folk y jazz. La tradición musical gallega está muy viva en Santiago y no es raro encontrar sesiones improvisadas en bares pequeños.
              </p>
              <p>
                La <strong>Rúa de San Clemente</strong> es la calle de referencia para la noche más tardía, con bares y pubs que cierran de madrugada y una clientela mayoritariamente local y universitaria. En verano, las terrazas de las plazas del casco antiguo — especialmente la Praza da Quintana y la Praza de Cervantes — se llenan hasta bien entrada la noche.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Excursiones desde Santiago */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Excursiones desde Santiago</h2>
              <p className="mt-4 text-lg text-gray-600">
                Santiago es la mejor base para explorar Galicia. En menos de dos horas llegas a las Rías Baixas, la Costa da Morte, la Ribeira Sacra o A Coruña. Estas son las excursiones imprescindibles.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursiones.map((exc) => (
              <AnimateOnScroll key={exc.destino}>
                <div className="card-elegant h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                    {exc.tiempo}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900">{exc.destino}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{exc.descripcion}</p>
                  {exc.enlace && (
                    <Link
                      href={exc.enlace}
                      className="mt-4 inline-block text-sm text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600"
                    >
                      Leer la guía completa
                    </Link>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos prácticos */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Consejos prácticos</h2>
            <div className="mt-10 space-y-8">
              {consejos.map((consejo, i) => (
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
            <h2 className="heading-section">Quieres que organicemos tu viaje a Santiago?</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Esta guía te da las claves para recorrer Santiago por tu cuenta. Pero si prefieres que nos encarguemos de todo — itinerario, alojamiento, restaurantes, transporte y experiencias — eso es exactamente lo que hacemos.
              </p>
              <p>
                Diseñamos{" "}
                <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  tours privados por Santiago y Galicia
                </Link>{" "}
                adaptados a cada grupo,{" "}
                <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  grandes rutas de varios días
                </Link>{" "}
                que combinan Santiago con las Rías Baixas, la Ribeira Sacra o la Costa da Morte, y experiencias{" "}
                <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  premium
                </Link>{" "}
                con visitas exclusivas, cenas privadas y acceso a espacios que no están abiertos al público.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Organizamos tu viaje a Santiago de Compostela?"
        description="Cuéntanos qué tipo de viaje tienes en mente y te preparamos un programa completo a medida. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre Santiago de Compostela</h2>
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
            <span className="text-gray-900">Santiago de Compostela</span>
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
            headline: "Santiago de Compostela más allá del Camino",
            description:
              "Guía completa de Santiago de Compostela: casco histórico, Mercado de Abastos, mejores restaurantes, vida nocturna y excursiones desde la ciudad.",
            url: "https://suunia.com/guias/santiago-de-compostela",
            image: "https://suunia.com/images/tours-santiago.jpg",
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
            mainEntityOfPage: "https://suunia.com/guias/santiago-de-compostela",
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
