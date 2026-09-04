import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Qué ver en las Rías Baixas — Guía completa para viajar",
  description:
    "Guía completa de las Rías Baixas: Cambados, O Grove, Sanxenxo, Combarro, Isla de la Toja, mejores playas, bodegas de Albariño y restaurantes. Escrita por locales.",
  alternates: { canonical: "https://suunia.com/guias/rias-baixas" },
  openGraph: {
    title: "Qué ver en las Rías Baixas – Guía Suunia",
    description:
      "Todo lo que hay que saber para recorrer las Rías Baixas con criterio: pueblos, playas, bodegas, marisco y experiencias que no están en las guías turísticas.",
    url: "https://suunia.com/guias/rias-baixas",
    images: [{ url: "/images/tours-rias-baixas.jpg", width: 1200, height: 630 }],
  },
};

const zonas = [
  {
    name: "Cambados",
    description:
      "Capital del Albariño y una de las villas más elegantes de las Rías Baixas. Su plaza de Fefiñáns es una de las más bonitas de Galicia: un pazo señorial, una iglesia románica y una bodega centenaria forman un conjunto que merece una mañana entera. La Fiesta del Albariño (primer domingo de agosto) es el evento vinícola más importante de Galicia, pero Cambados funciona igual de bien cualquier día del año. El paseo marítimo hasta las ruinas de Santa Mariña Dozo y la lonja del puerto completan la visita.",
  },
  {
    name: "O Grove y A Toxa",
    description:
      "O Grove es la península del marisco por excelencia. En octubre se celebra la Festa do Marisco, pero cualquier día del año puedes comer percebes, navajas, zamburiñas y centolla a precios razonables en las marisquerías del puerto. La Isla de A Toxa, conectada por un puente, tiene un carácter completamente distinto: el Gran Hotel, la ermita cubierta de conchas de vieira y los jardines de las villas termales. Desde O Grove salen las rutas de catamarán por la Ría de Arousa, con parada en los viveros de mejillón.",
  },
  {
    name: "Combarro",
    description:
      "El pueblo más fotografiado de las Rías Baixas, y con razón. Sus hórreos alineados frente al mar, las cruces de piedra (cruceiros) y las calles empedradas con soportales forman un conjunto único. Es pequeño — se recorre en una hora — pero la estampa no se olvida. La mejor luz es a primera hora de la mañana o al atardecer, cuando los grupos organizados ya se han ido. Combina bien con Poio (monasterio con uno de los cruceiros más grandes de Galicia) y con Pontevedra, que está a 7 kilómetros.",
  },
  {
    name: "Sanxenxo y Portonovo",
    description:
      "Sanxenxo es el destino de playa por excelencia en Galicia. Playas de arena fina (Silgar, Areas, Montalvo), vida nocturna en verano y una oferta gastronómica que ha crecido mucho en los últimos años. Portonovo, su vecino, tiene un carácter más tranquilo y marinero. Las playas de Canelas y Baltar son excelentes y menos masificadas. Desde aquí se accede fácilmente a la Isla de Ons (parque nacional) en barco.",
  },
  {
    name: "Pontevedra ciudad",
    description:
      "Muchos viajeros pasan de largo y es un error. Pontevedra tiene uno de los cascos históricos mejor conservados de Galicia: todo peatonal, con plazas conectadas por calles de soportales, iglesias medievales y una vida de tapeo que rivaliza con la de Santiago. La Praza da Leña, la Praza da Ferrería y las ruinas de Santo Domingo merecen una tarde completa. La ciudad fue pionera en España en peatonalización y el resultado se nota.",
  },
];

const playas = [
  { name: "Playa de la Lanzada", zona: "Sanxenxo–O Grove", detalle: "3 km de arena abierta al Atlántico. Una de las playas más impresionantes de Galicia. Mar bravo, viento y dunas protegidas." },
  { name: "Praia de Areas", zona: "Sanxenxo", detalle: "Playa urbana con arena blanca y aguas relativamente tranquilas. Perfecta para familias." },
  { name: "Playa de Rodas (Cíes)", zona: "Islas Atlánticas", detalle: "Elegida \"mejor playa del mundo\" por The Guardian. Acceso en barco desde Vigo o Cangas." },
  { name: "Praia de Nerga", zona: "Cangas", detalle: "Playa salvaje rodeada de pinar. Pocas infraestructuras, mucha naturaleza." },
  { name: "Playa de Montalvo", zona: "Sanxenxo", detalle: "Playa larga y protegida, ideal para paseos. Menos masificada que Silgar." },
  { name: "Praia da Illa de Arousa", zona: "Illa de Arousa", detalle: "La isla está conectada por puente. Playas tranquilas con vistas a las bateas de mejillón." },
];

const bodegas = [
  { name: "Pazo de Señoráns", zona: "Meis", nota: "Uno de los Albariños más emblemáticos de Galicia. El pazo es espectacular y las visitas incluyen cata comentada." },
  { name: "Mar de Frades", zona: "Meis", nota: "Conocida por su botella azul. La bodega es moderna y las vistas a los viñedos desde la terraza son excepcionales." },
  { name: "Martín Códax", zona: "Cambados", nota: "Cooperativa con instalaciones modernas y vistas a la ría. Visitas accesibles y vinos que representan bien la denominación." },
  { name: "Zárate", zona: "Meaño", nota: "Pequeña bodega familiar con vinos de parcela. Visitas más íntimas, estilo boutique." },
  { name: "Pazo de Barrantes", zona: "Ribadumia", nota: "Propiedad de la familia del Marqués de Murrieta. Visita al pazo del siglo XV y cata del Albariño de finca." },
];

const faqs = [
  {
    question: "¿Cuántos días necesito para recorrer las Rías Baixas?",
    answer:
      "Un mínimo de 3 días para ver lo esencial: Cambados, O Grove, Combarro, una bodega y un par de playas. Con 5 días puedes recorrer la zona con calma, incluyendo Pontevedra, una excursión a las Islas Cíes o Ons, y varias experiencias gastronómicas. Si combinamos las Rías Baixas con Santiago o con la Ribeira Sacra, lo ideal son 6-7 días.",
  },
  {
    question: "¿Cuál es la mejor época para visitar las Rías Baixas?",
    answer:
      "De junio a septiembre es la época más cálida y con más horas de sol. Julio y agosto son los meses más concurridos. Septiembre es probablemente el mejor mes: buen tiempo, menos gente, precios más bajos y el marisco está en temporada. Mayo y octubre también funcionan muy bien para viajes culturales y gastronómicos, con temperaturas suaves.",
  },
  {
    question: "¿Se puede hacer una ruta del vino por las Rías Baixas?",
    answer:
      "Sí, y es una de las mejores experiencias que se pueden hacer en la zona. La DO Rías Baixas agrupa más de 180 bodegas repartidas entre Cambados, Meaño, Ribadumia, O Rosal y el Valle del Salnés. Lo ideal es visitar 2-3 bodegas en un día con transporte privado, combinando bodegas grandes con otras boutique. Nosotros organizamos rutas del vino a medida con guía enológico.",
  },
  {
    question: "¿Cómo llego a las Rías Baixas?",
    answer:
      "El aeropuerto más cercano es el de Vigo (a 30 minutos del centro de las Rías Baixas). También se puede llegar desde el aeropuerto de Santiago (a una hora). En coche, la autopista AP-9 conecta Santiago y Vigo pasando por Pontevedra. En tren, la línea de cercanías conecta Vigo-Pontevedra-Vilagarcía con paradas en la zona.",
  },
];

export default function GuiaRiasBaixas() {
  return (
    <>
      {/* Hero editorial — sin botones CTA, solo lectura */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/tours-rias-baixas.jpg"
          alt="Vista aérea de la Ría de Arousa con bateas de mejillones y pueblos marineros en la costa de las Rías Baixas"
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
            Qué ver en las Rías Baixas: la guía definitiva
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Cambados, O Grove, Sanxenxo, Combarro, las mejores playas, bodegas de Albariño y restaurantes con marisco fresco. Todo lo que hay que saber para recorrer las Rías Baixas con criterio.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              12 min de lectura
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-400" />
            <span>Equipo Suunia</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Las Rías Baixas son la zona más conocida de Galicia y, probablemente, la que mejor resume todo lo que este territorio tiene para ofrecer: playas atlánticas de arena blanca, pueblos marineros que viven del mar, una gastronomía que gira alrededor del marisco y el Albariño, y un paisaje donde las rías se adentran en la tierra creando uno de los litorales más singulares de Europa.
              </p>
              <p>
                Esta guía no es una lista de lugares turísticos. Es lo que le contaríamos a un amigo que viene a pasar unos días: los pueblos que merecen la pena de verdad, las playas que no están en las guías convencionales, las bodegas donde catar un buen Albariño sin artificios y los restaurantes donde el marisco se come como se debe. Todo desde la experiencia de un equipo que organiza viajes por esta zona cada semana como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mapa de la zona */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Los pueblos imprescindibles</h2>
              <p className="mt-4 text-lg text-gray-600">
                Las Rías Baixas se extienden desde Muros hasta la frontera con Portugal. Estos son los cinco puntos que no se pueden dejar fuera de ningún itinerario.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-10">
            {zonas.map((zona, i) => (
              <AnimateOnScroll key={zona.name}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{zona.name}</h3>
                      <p className="mt-3 leading-relaxed text-gray-600">{zona.description}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Playas */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Las mejores playas de las Rías Baixas</h2>
              <p className="mt-4 text-lg text-gray-600">
                Playas para todos los gustos: desde arenales kilométricos abiertos al Atlántico hasta calas protegidas entre pinos. La costa de las Rías Baixas tiene más de 700 playas.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {playas.map((playa) => (
              <AnimateOnScroll key={playa.name}>
                <div className="card-elegant h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                    {playa.zona}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900">{playa.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{playa.detalle}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gastronomía */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Gastronomía: qué comer y dónde</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Las Rías Baixas son, junto con la Costa da Morte, la zona de Galicia con mayor tradición marisquera. Los productos estrella son el marisco fresco de las rías — mejillón, berberechos, almejas, navajas, zamburiñas, vieiras y pulpo — y el vino Albariño, que es la uva blanca emblemática de la denominación de origen Rías Baixas.
              </p>
              <p>
                En O Grove encontrarás marisquerías especializadas donde el producto llega directamente de la lonja. En Cambados, los restaurantes del centro histórico trabajan con una materia prima excepcional. En Pontevedra, la zona de tapeo alrededor de la Praza da Leña es una de las mejores de Galicia. Y en toda la zona, cualquier restaurante con aspecto modesto pero lleno de locales a mediodía es probablemente una buena elección.
              </p>
              <p>
                Si buscas una experiencia gastronómica más completa, organizamos <Link href="/gastronomia-bodegas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">rutas de gastronomía y bodegas</Link> que combinan visitas a lonjas, comidas en restaurantes seleccionados y catas en las mejores bodegas de Albariño.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bodegas */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Bodegas de Albariño que merece la pena visitar</h2>
              <p className="mt-4 text-lg text-gray-600">
                La DO Rías Baixas tiene más de 180 bodegas. Estas cinco ofrecen visitas de calidad con estilos muy diferentes entre sí.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bodegas.map((bodega) => (
              <AnimateOnScroll key={bodega.name}>
                <div className="card-elegant h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                    {bodega.zona}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900">{bodega.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{bodega.nota}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos prácticos */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Consejos prácticos</h2>
            <div className="mt-10 space-y-8">
              {[
                {
                  title: "Cómo moverse",
                  text: "Las Rías Baixas se recorren mejor en coche. Las distancias son cortas (Cambados-O Grove: 20 min, O Grove-Sanxenxo: 15 min, Sanxenxo-Pontevedra: 20 min) pero el transporte público es limitado entre pueblos costeros. Si vienes sin coche, nosotros organizamos el transporte privado.",
                },
                {
                  title: "Dónde alojarse",
                  text: "Cambados o Pontevedra son las mejores bases para explorar la zona: están bien conectados con todo y tienen buena oferta gastronómica nocturna. Sanxenxo es ideal si el objetivo principal es playa. O Grove si el foco es el marisco. Para una experiencia premium, los pazos reconvertidos en hotel (Pazo de Galegos, Pazo Os Escudos) ofrecen un nivel excepcional.",
                },
                {
                  title: "Temporadas y precios",
                  text: "Julio y agosto son temporada alta: más gente, precios más altos y necesidad de reservar con antelación. Septiembre es el mes perfecto (buen tiempo, menos turismo, marisco en temporada). De octubre a mayo la zona es más tranquila pero los restaurantes y bodegas funcionan con normalidad.",
                },
                {
                  title: "Qué evitar",
                  text: "Evita los restaurantes del paseo marítimo con fotos en la puerta. Evita agosto si no te gusta la masificación en Sanxenxo. Y no intentes hacerlo todo en un día: las Rías Baixas se disfrutan con calma, parando a comer bien y dejando tiempo para perderte por los pueblos.",
                },
              ].map((consejo, i) => (
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
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">¿Prefieres que organicemos tu viaje a las Rías Baixas?</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Esta guía te da el conocimiento para planificar tu viaje por tu cuenta. Pero si prefieres que nos encarguemos de todo — itinerario, alojamiento, restaurantes, bodegas, transporte y experiencias — eso es exactamente lo que hacemos.
              </p>
              <p>
                Diseñamos <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados por las Rías Baixas</Link> adaptados a cada grupo, <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">grandes rutas de varios días</Link> que combinan costa e interior, y experiencias <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">premium</Link> con navegación privada, cenas con chef y visitas a bodegas cerradas al público. También organizamos <Link href="/nautica-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">experiencias náuticas por las rías</Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Organizamos tu viaje a las Rías Baixas?"
        description="Cuéntanos qué tipo de viaje tienes en mente y te preparamos un programa completo a medida. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre las Rías Baixas</h2>
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
            <span className="text-gray-900">Rías Baixas</span>
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
            headline: "Qué ver en las Rías Baixas: la guía definitiva",
            description:
              "Guía completa de las Rías Baixas: pueblos, playas, bodegas de Albariño, restaurantes y consejos prácticos para recorrer la zona.",
            url: "https://suunia.com/guias/rias-baixas",
            image: "https://suunia.com/images/tours-rias-baixas.jpg",
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
            mainEntityOfPage: "https://suunia.com/guias/rias-baixas",
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
