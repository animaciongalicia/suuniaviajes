import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Santiago de Compostela mas alla del Camino — Guia completa",
  description:
    "Guia completa de Santiago de Compostela: casco historico, Mercado de Abastos, mejores restaurantes, vida nocturna y excursiones. Lo que los locales saben y las guias no cuentan.",
  alternates: { canonical: "https://suunia.com/guias/santiago-de-compostela" },
  openGraph: {
    title: "Santiago de Compostela mas alla del Camino – Guia Suunia",
    description:
      "Todo lo que hay que ver, comer y hacer en Santiago de Compostela mas alla del Camino: el casco historico, el Mercado de Abastos, restaurantes, vida nocturna y excursiones.",
    url: "https://suunia.com/guias/santiago-de-compostela",
    images: [{ url: "/images/tours-santiago.jpg", width: 1200, height: 630 }],
  },
};

const plazas = [
  {
    name: "Praza do Obradoiro",
    description:
      "La plaza mas conocida de Santiago y una de las mas espectaculares de Europa. Cada uno de sus cuatro edificios cuenta una historia diferente: el Hostal de los Reyes Catolicos (hoy Parador), mandado construir por los Reyes Catolicos como hospital de peregrinos; el Pazo de Raxoi, sede del Ayuntamiento y de la Presidencia de la Xunta; el Colegio de San Xerome, con su portada gotica; y el Colegio de Fonseca, que alberga la biblioteca universitaria. La fachada barroca de la Catedral preside el conjunto.",
  },
  {
    name: "Praza da Quintana",
    description:
      "La plaza mas atmosferica de Santiago, dividida en dos niveles: Quintana de Mortos (la parte baja) y Quintana de Vivos (la parte alta). Aqui se encuentra la Puerta Santa de la Catedral, que solo se abre en Anos Santos Compostelanos. De dia es un espacio sereno con estudiantes leyendo en las escalinatas; de noche, la iluminacion transforma la piedra y el silencio le da un caracter completamente distinto.",
  },
  {
    name: "Praza de Praterias",
    description:
      "La unica fachada romanica que conserva la Catedral da a esta plaza. La Fuente de los Caballos en el centro, la Casa del Cabildo con su fachada-pantalla barroca y las tiendas de los antiguos plateros que dieron nombre a la plaza completan un rincon que merece detenerse. Desde aqui se accede a la Torre del Reloj, conocida como la Berenguela.",
  },
];

const restaurantes = [
  {
    name: "Abastos 2.0",
    tipo: "Cocina de mercado contemporanea",
    detalle:
      "Situado dentro del propio Mercado de Abastos, trabaja con el producto que se vende a pocos metros. Cocina gallega actualizada con presentacion cuidada y precios razonables para la calidad que ofrece. Imprescindible reservar.",
  },
  {
    name: "Casa Marcelo",
    tipo: "Fusion gallego-japonesa",
    detalle:
      "Marcelo Tejedor fusiona la despensa gallega con tecnicas japonesas en un formato de barra y menu degustacion. Platos sorprendentes en un espacio pequeno. No es barato, pero la experiencia es unica en Santiago.",
  },
  {
    name: "O Curro da Parra",
    tipo: "Tapas contemporaneas",
    detalle:
      "En un edificio historico precioso de la Rua do Curro da Parra, ofrece tapas y raciones de autor con producto gallego de temporada. La relacion calidad-precio es excelente y el ambiente es animado sin ser ruidoso.",
  },
  {
    name: "A Tafona",
    tipo: "Cocina gallega de temporada",
    detalle:
      "Elegante pero sin pretensiones, con una carta que cambia segun lo que llega del mercado y de los productores locales. Buen trabajo con las verduras de temporada y los pescados de lonja. Vinos gallegos bien seleccionados.",
  },
  {
    name: "Bierzo Enxebre",
    tipo: "Cocina tradicional gallega",
    detalle:
      "El restaurante de los compostelanos. Raciones generosas, producto honesto y precios justos. Aqui no hay fusiones ni platos de autor: caldo gallego, lacón con grelos, pulpo y empanada como los de siempre. Lleno de locales a mediodia.",
  },
];

const excursiones = [
  {
    destino: "Rias Baixas",
    tiempo: "1 hora en coche",
    descripcion:
      "Cambados, O Grove, Sanxenxo, playas atlanticas y bodegas de Albarino. La excursion mas popular desde Santiago.",
    enlace: "/guias/rias-baixas",
  },
  {
    destino: "Costa da Morte",
    tiempo: "1,5 horas en coche",
    descripcion:
      "Finisterre, Muxia, acantilados salvajes y pueblos marineros. Galicia en estado puro, sin concesiones al turismo de masas.",
    enlace: "/guias/costa-da-morte",
  },
  {
    destino: "Ribeira Sacra",
    tiempo: "1,5 horas en coche",
    descripcion:
      "Canones del Sil, monasterios romanicos, vinas en bancales y navegacion fluvial. El interior mas espectacular de Galicia.",
    enlace: "/guias/ribeira-sacra",
  },
  {
    destino: "Finisterre",
    tiempo: "1,5 horas en coche",
    descripcion:
      "El fin del mundo conocido para los romanos. El faro, la puesta de sol y la sensacion de estar en el ultimo punto de Europa. Se puede combinar con Muxia.",
    enlace: null,
  },
  {
    destino: "A Coruna",
    tiempo: "50 minutos en coche",
    descripcion:
      "La Torre de Hercules (unico faro romano en funcionamiento del mundo), la Ciudad Vieja, las galerias acristaladas del paseo maritimo y una escena gastronomica excelente.",
    enlace: null,
  },
];

const consejos = [
  {
    title: "Mejor epoca para visitar",
    text: "Primavera (abril-junio) y septiembre son los meses ideales: temperaturas agradables, menos peregrinos que en verano y la ciudad funciona a pleno ritmo con la vida universitaria. Julio y agosto tienen mas horas de sol pero tambien mucho mas turismo. El invierno tiene su encanto — las plazas vacias, la niebla y los cafes llenos de estudiantes — pero llueve con frecuencia.",
  },
  {
    title: "Ano Santo Compostelano",
    text: "Cuando el 25 de julio (dia del Apostol Santiago) cae en domingo, se celebra el Ano Santo y se abre la Puerta Santa de la Catedral. El proximo sera en 2027. El anterior fue en 2021-2022, extendido excepcionalmente por la pandemia. En anos santos la ciudad recibe muchos mas peregrinos y hay celebraciones especiales durante todo el ano.",
  },
  {
    title: "Como llegar",
    text: "El aeropuerto de Santiago (SCQ) tiene conexiones directas con Madrid, Barcelona, Londres y otras ciudades europeas, ademas de vuelos estacionales. En tren, Renfe conecta Santiago con Madrid en unas 4 horas (Alvia) y con Vigo y A Coruna en menos de una hora. La estacion de tren esta a 15 minutos a pie del casco historico.",
  },
  {
    title: "Moverse por la ciudad",
    text: "Todo el casco historico es peatonal y se recorre a pie sin problema. Si llegas en coche, utiliza los aparcamientos subterraneos de la Praza de Galicia o el de Bonaval, ambos a pocos minutos a pie del centro. No intentes aparcar dentro del casco antiguo: las calles son estrechas, de piedra y la mayoria estan restringidas.",
  },
  {
    title: "La lluvia",
    text: "Santiago es una de las ciudades mas lluviosas de Espana, con unos 1.800 mm anuales. Pero la lluvia suele ser fina e intermitente (el orballo gallego), no torrencial. Trae siempre una chaqueta impermeable, incluso en verano. Y no dejes que la lluvia te desanime: Santiago con lluvia tiene un encanto especial, esa morrina que los gallegos llevan con orgullo.",
  },
];

const faqs = [
  {
    question: "Cuantos dias necesito en Santiago de Compostela?",
    answer:
      "Un minimo de 2 dias para ver la ciudad con calma: el casco historico, la Catedral, el Mercado de Abastos y cenar bien. Con 3-4 dias puedes anadir excursiones de un dia a las Rias Baixas, la Costa da Morte o A Coruna. Si usas Santiago como base para explorar Galicia, una semana te permite combinar la ciudad con varias rutas por la region.",
  },
  {
    question: "Que es el Ano Santo Compostelano?",
    answer:
      "El Ano Santo Compostelano (o Ano Xacobeo) se celebra cuando el 25 de julio, festividad del Apostol Santiago, cae en domingo. En esos anos se abre la Puerta Santa de la Catedral y se conceden indulgencias especiales a los peregrinos. El proximo Ano Santo sera en 2027. Hay celebraciones especiales durante todo el ano, mas actos liturgicos y la ciudad recibe un numero de visitantes significativamente mayor.",
  },
  {
    question: "Donde comer bien sin caer en trampas turisticas?",
    answer:
      "Evita los restaurantes de la Rua do Franco que tienen fotos de los platos en la puerta: suelen ser trampas turisticas con precios inflados y calidad mediocre. Ve al Mercado de Abastos y prueba el concepto de cocina do mercado (compras el producto y te lo cocinan). Pregunta a los locales o sigue a los universitarios: las calles secundarias suelen tener mejor relacion calidad-precio que las principales.",
  },
  {
    question: "Llueve mucho en Santiago?",
    answer:
      "Si, Santiago recibe alrededor de 1.800 mm de precipitacion al ano, lo que la convierte en una de las ciudades mas lluviosas de Espana. Sin embargo, la lluvia suele ser fina e intermitente (lo que en gallego se llama orballo), no torrencial. Trae una buena chaqueta impermeable y abraza la morrina, esa bruma caracteristica que envuelve la ciudad y le da parte de su encanto.",
  },
];

export default function GuiaSantiago() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/tours-santiago.jpg"
          alt="Vista de la Catedral de Santiago de Compostela y el casco historico desde el Parque de la Alameda"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Guia de destino
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Santiago de Compostela mas alla del Camino
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Ciudad universitaria, Patrimonio de la Humanidad y capital gastronomica. Todo lo que Santiago tiene para ofrecer cuando dejas de mirarlo solo como el final del Camino.
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
            <li><Link href="/guias" className="hover:text-atlantic-700">Guias</Link></li>
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
                Santiago de Compostela es mucho mas que el final del Camino. Es una ciudad universitaria con mas de 40.000 estudiantes que le dan vida todo el ano, una escena gastronomica que va mucho mas alla de los menus turisticos, y un casco historico declarado Patrimonio de la Humanidad por la UNESCO que esconde rincones que la mayoria de los visitantes nunca descubre.
              </p>
              <p>
                Esta guia no va del Camino de Santiago. Va de la ciudad que espera al final: las plazas que hay que ver con calma, el Mercado de Abastos donde los compostelanos compran desde 1873, los restaurantes donde se come de verdad, la vida nocturna que mueve una ciudad joven, y las excursiones que convierten a Santiago en la mejor base para explorar Galicia. Todo desde la experiencia de un equipo que vive aqui y organiza viajes por la zona como{" "}
                <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  agencia receptiva local
                </Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Casco historico */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">El casco historico mas alla de la Catedral</h2>
              <p className="mt-4 text-lg text-gray-600">
                El centro historico de Santiago es Patrimonio de la Humanidad desde 1985. Pero la mayoria de los visitantes solo ven la Catedral y la Praza do Obradoiro. Estas son las paradas que no te puedes saltar.
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

          {/* Resto del casco historico */}
          <div className="mx-auto mt-14 max-w-3xl">
            <AnimateOnScroll>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">Las calles y los paseos</h3>
                <p>
                  La <strong>Rua do Franco</strong> y la <strong>Rua do Vilar</strong> son las dos arterias principales del casco historico, con soportales de piedra, tiendas y restaurantes a ambos lados. La Rua do Franco es la mas turistica (y donde hay que ir con mas cuidado al elegir restaurante); la Rua do Vilar es algo mas tranquila y tiene librerias, tiendas de artesania y cafes con caracter.
                </p>
                <p>
                  El <strong>Parque de la Alameda</strong>, al oeste del casco antiguo, ofrece las mejores vistas de la Catedral desde la distancia. El paseo entre robles centenarios, con la silueta de las torres recortada contra el cielo, es una de las estampas clasicas de Santiago. Al atardecer, la luz es excepcional.
                </p>
                <p>
                  El <strong>Convento de San Francisco</strong>, segun la tradicion fundado por el propio San Francisco de Asis durante su peregrinacion a Santiago en el siglo XIII, se encuentra junto al casco historico y alberga hoy un hotel monumento. Su claustro gotico y la iglesia merecen una visita tranquila.
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
                El Mercado de Abastos de Santiago es el segundo lugar mas visitado de la ciudad despues de la Catedral, y probablemente el que mejor resume el caracter compostelano. Funciona de forma ininterrumpida desde 1873, y sigue siendo un mercado real: los compostelanos vienen aqui a hacer la compra, no a sacarse fotos.
              </p>
              <p>
                Encontraras marisco fresco de las rias gallegas — percebes, navajas, zamburinas, centolla —, verduras de temporada de las huertas del interior, queso de Tetilla con denominacion de origen, miel de la zona y embutidos artesanales. Los puestos de flores dan color al conjunto.
              </p>
              <p>
                El concepto mas interesante del mercado es la <strong>cocina do mercado</strong>: compras tu pescado o marisco en los puestos y los restaurantes que rodean el mercado te lo cocinan por un precio modico. Es una forma excelente de comer producto de primera calidad a precio razonable y vivir la experiencia completa.
              </p>
              <p>
                El mejor momento para visitarlo es por la manana, especialmente los <strong>jueves y sabados</strong>, cuando las campesinas de la zona traen sus productos directamente: grelos, pimientos de Padron, patatas, huevos de aldea y quesos frescos. La actividad empieza a decaer a partir de las 14:00.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Donde comer */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Donde comer bien en Santiago</h2>
              <p className="mt-4 text-lg text-gray-600">
                Santiago tiene una oferta gastronomica excelente si sabes donde buscar. Una regla basica: evita los restaurantes de la Rua do Franco que tienen fotos de los platos en la puerta. Estos cinco no fallan.
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
                Santiago es, ante todo, una ciudad universitaria. Con mas de 40.000 estudiantes repartidos entre la Universidad de Santiago de Compostela (una de las mas antiguas de Espana, fundada en 1495) y varios campus, la vida nocturna tiene una energia que muchos visitantes no esperan.
              </p>
              <p>
                La <strong>zona de vinos</strong> se concentra en torno a la Rua do Franco y la Praza de Cervantes. Aqui encontraras bares de vino donde tomar un Albarino o un Mencia de la Ribeira Sacra con una tapa a buen precio. El ambiente es tranquilo al principio de la noche y se anima a medida que avanza.
              </p>
              <p>
                Para <strong>musica en directo</strong>, el casco historico tiene varios locales con programacion regular de musica celta, folk y jazz. La tradicion musical gallega esta muy viva en Santiago y no es raro encontrar sesiones improvisadas en bares pequenos.
              </p>
              <p>
                La <strong>Rua de San Clemente</strong> es la calle de referencia para la noche mas tardia, con bares y pubs que cierran de madrugada y una clientela mayoritariamente local y universitaria. En verano, las terrazas de las plazas del casco antiguo — especialmente la Praza da Quintana y la Praza de Cervantes — se llenan hasta bien entrada la noche.
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
                Santiago es la mejor base para explorar Galicia. En menos de dos horas llegas a las Rias Baixas, la Costa da Morte, la Ribeira Sacra o A Coruna. Estas son las excursiones imprescindibles.
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
                      Leer la guia completa
                    </Link>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos practicos */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Consejos practicos</h2>
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
                Esta guia te da las claves para recorrer Santiago por tu cuenta. Pero si prefieres que nos encarguemos de todo — itinerario, alojamiento, restaurantes, transporte y experiencias — eso es exactamente lo que hacemos.
              </p>
              <p>
                Disenamos{" "}
                <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  tours privados por Santiago y Galicia
                </Link>{" "}
                adaptados a cada grupo,{" "}
                <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  grandes rutas de varios dias
                </Link>{" "}
                que combinan Santiago con las Rias Baixas, la Ribeira Sacra o la Costa da Morte, y experiencias{" "}
                <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
                  premium
                </Link>{" "}
                con visitas exclusivas, cenas privadas y acceso a espacios que no estan abiertos al publico.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Organizamos tu viaje a Santiago de Compostela?"
        description="Cuentanos que tipo de viaje tienes en mente y te preparamos un programa completo a medida. Sin compromiso."
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
              Guias de viaje
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
            headline: "Santiago de Compostela mas alla del Camino",
            description:
              "Guia completa de Santiago de Compostela: casco historico, Mercado de Abastos, mejores restaurantes, vida nocturna y excursiones desde la ciudad.",
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
