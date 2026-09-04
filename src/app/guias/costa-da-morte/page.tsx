import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Costa da Morte — Ruta completa de 2-3 días por la costa más salvaje de Galicia",
  description:
    "Guía completa de la Costa da Morte: Malpica, Camariñas, Muxía, Fisterra, faros, acantilados, playas salvajes y dónde comer. Ruta de 2-3 días escrita por locales.",
  alternates: { canonical: "https://suunia.com/guias/costa-da-morte" },
  openGraph: {
    title: "Ruta por la Costa da Morte – Guía Suunia",
    description:
      "De Malpica a Fisterra: acantilados, faros, playas salvajes y pueblos marineros. La guía definitiva para recorrer la Costa da Morte.",
    url: "https://suunia.com/guias/costa-da-morte",
    images: [{ url: "/images/faro-de-Finisterre-1.jpg", width: 1200, height: 630 }],
  },
};

const etapas = [
  {
    dia: "Día 1",
    titulo: "De A Coruña a Camariñas",
    paradas: [
      {
        name: "Malpica y las Islas Sisargas",
        text: "Primera parada de la ruta. Malpica es un pueblo pesquero auténtico con un puerto activo donde cada tarde llegan las barcas con la pesca del día. Frente a la costa, las Islas Sisargas albergan una de las mayores colonias de cormoranes moñudos de Europa. El paseo desde el puerto hasta la playa de Area Maior permite ver el pueblo desde arriba.",
      },
      {
        name: "Laxe y playa de Traba",
        text: "Laxe tiene una de las playas urbanas más bonitas de la Costa da Morte: arena fina, oleaje moderado y un paseo marítimo tranquilo. A pocos kilómetros, la playa de Traba es uno de los secretos mejor guardados de la costa: un arenal enorme rodeado de dunas y humedales, sin apenas construcciones. Playa salvaje en estado puro.",
      },
      {
        name: "Camariñas y el encaje de bolillos",
        text: "Camariñas es la capital del encaje de bolillos (encaixe de palillos). Esta tradición artesanal, con siglos de historia, sigue viva en las escuelas y talleres del pueblo. El Museo do Encaixe explica la técnica y conserva piezas históricas. Desde Camariñas se accede al Cabo Vilán, uno de los faros más emblemáticos de Galicia, con un centro de interpretación sobre naufragios en la zona.",
      },
    ],
    imagen: "/images/ruta-por-los-mejores-faros-de-a-costa-da-morte.jpg",
    alt: "Faro en la Costa da Morte de Galicia al atardecer con luz dorada sobre el Atlántico",
  },
  {
    dia: "Día 2",
    titulo: "De Camariñas a Fisterra",
    paradas: [
      {
        name: "Muxía y el Santuario da Virxe da Barca",
        text: "Muxía es uno de los puntos más intensos de la Costa da Morte. El Santuario da Virxe da Barca, al borde del acantilado, es un lugar de peregrinación que compite en emoción con la propia catedral de Santiago. Junto al santuario, las rocas sagradas (A Pedra de Abalar y A Pedra dos Cadrís) forman parte de una tradición ancestral que mezcla fe cristiana y creencias anteriores. Es también el punto final del Camino de Santiago a Fisterra-Muxía.",
      },
      {
        name: "Cascada del Ézaro",
        text: "La única cascada de Europa continental que cae directamente al mar. El río Xallas se precipita desde unos 40 metros de altura sobre la ensenada del Ézaro. Se puede ver desde abajo (carretera de acceso hasta la base) o desde el mirador de arriba (acceso desde la carretera de Dumbría). La perspectiva desde arriba es más espectacular. En verano se ilumina por las noches.",
      },
      {
        name: "Carnota: playa y hórreo",
        text: "La playa de Carnota es la más larga de Galicia: más de 7 kilómetros de arena blanca con dunas, marismas y monte detrás. Sin chiringuitos, sin paseo marítimo, sin urbanización. Playa salvaje como pocas quedan en Europa. En el pueblo de Carnota está el hórreo más largo de Galicia (34,76 metros, siglo XVIII), declarado Monumento Nacional. Merece una parada y una foto.",
      },
      {
        name: "Fisterra y el faro",
        text: "El fin del mundo. Durante siglos, Fisterra fue el punto más occidental conocido del mundo y el lugar donde los romanos vieron cómo el sol se hundía en el mar. El faro de Fisterra, situado en el Cabo, es probablemente el faro más famoso de España. La puesta de sol desde aquí es una de las experiencias más potentes de todo el viaje. El pueblo de Fisterra tiene buen puerto, buenas lonjas y restaurantes donde se come pescado fresco del día.",
      },
    ],
    imagen: "/images/faro-de-Finisterre-1.jpg",
    alt: "Faro de Finisterre al atardecer con persona contemplando la puesta de sol sobre el Atlántico",
  },
  {
    dia: "Día 3 (opcional)",
    titulo: "Costa sur y regreso",
    paradas: [
      {
        name: "Corcubión y Cée",
        text: "Dos pueblos separados por una ría pequeña. Corcubión tiene un casco histórico declarado Conjunto Histórico-Artístico, con casas blasonadas, una iglesia románica y un paseo marítimo que bordea la ría. Cée es más funcional pero tiene buenos restaurantes. Juntos forman una parada agradable para un café o un paseo antes de emprender el regreso.",
      },
      {
        name: "Muros y Noia",
        text: "Si el regreso es hacia Santiago, el camino pasa por Muros — un pueblo marinero con uno de los cascos históricos más bonitos de las Rías Baixas — y por Noia, la «pequeña Florencia» gallega, con la iglesia de Santa María A Nova y su colección de lápidas gremiales medievales en el cementerio. Ambos merecen una parada de al menos media hora.",
      },
    ],
    imagen: "/images/playa-carnota-galiaic-suunia.jpg",
    alt: "Playa de Carnota en Galicia, arena blanca y rocas de granito con agua turquesa y cielo azul",
  },
];

const faros = [
  { name: "Faro de Fisterra", ubicacion: "Cabo Fisterra", nota: "El más famoso. Puesta de sol imprescindible. Centro de interpretación del naufragio y la leyenda del fin del mundo." },
  { name: "Faro de Cabo Vilán", ubicacion: "Camariñas", nota: "Primer faro eléctrico de España (1896). Museo de naufragios. Paisaje lunar de roca y viento alrededor." },
  { name: "Faro de Touriñán", ubicacion: "Muxía", nota: "El punto más occidental de la Europa continental (no Fisterra, como se cree). Menos visitado y más salvaje." },
  { name: "Faro de Punta Nariga", ubicacion: "Malpica", nota: "Diseñado por César Portela. Forma de barco varado. Acantilados espectaculares en los alrededores." },
];

const consejos = [
  {
    title: "La mejor época",
    text: "Septiembre y octubre son los meses ideales: buen tiempo, menos viento que en verano, luz espectacular al atardecer y pocos turistas. Primavera (abril-mayo) también funciona bien. En invierno, los temporales atlánticos son un espectáculo en sí mismos, pero hay que ir preparado.",
  },
  {
    title: "Cómo moverse",
    text: "Coche imprescindible. No hay transporte público entre los puntos de interés. Las carreteras son estrechas pero están en buen estado. El recorrido completo (A Coruña-Fisterra por la costa) son unos 160 km, pero las paradas hacen que se necesiten al menos 2 días.",
  },
  {
    title: "Dónde dormir",
    text: "Camariñas, Muxía y Fisterra tienen buena oferta de hoteles pequeños y casas rurales. Para algo especial, el Hotel Rustico Lugar do Cotariño en Carnota o el Semáforo de Fisterra (un antiguo semáforo marítimo reconvertido en hotel boutique) son opciones excelentes.",
  },
  {
    title: "Dónde comer",
    text: "El marisco y el pescado de la Costa da Morte están entre los mejores de Galicia — percebes, centolla, nécora y pescado de roca. En Fisterra: O Fragón, Tira do Cordel. En Corcubión: El Molino. En Muxía: A de Lolo. En Camariñas: las marisquerías del puerto. Evitar los restaurantes con menú turístico de la carretera general.",
  },
  {
    title: "Qué no hacer",
    text: "No intentes hacer toda la costa en un día — te perderás lo mejor por ir con prisas. No te bañes en playas sin vigilancia si no conoces las corrientes — el Atlántico aquí es traicionero. Y no te vayas de Fisterra sin ver la puesta de sol desde el faro.",
  },
];

const faqs = [
  {
    question: "¿Por qué se llama Costa da Morte?",
    answer:
      "El nombre \"Costa de la Muerte\" viene de los numerosos naufragios históricos que se han producido en esta zona. Los acantilados, las corrientes, la niebla y los temporales atlánticos convirtieron esta costa en una de las más peligrosas del mundo para la navegación. Se calcula que hay más de 600 naufragios documentados. Hoy esa misma fuerza del mar es lo que convierte la Costa da Morte en un paisaje de una belleza salvaje única.",
  },
  {
    question: "¿Es seguro visitar la Costa da Morte?",
    answer:
      "Completamente seguro como destino turístico. El nombre se refiere a los naufragios históricos, no a peligros para el visitante. La única precaución real es respetar el mar: no bañarse en playas sin vigilancia si no se conocen las corrientes, y tener cuidado en los acantilados cuando hay viento fuerte o lluvia.",
  },
  {
    question: "¿Se puede hacer la ruta en un solo día?",
    answer:
      "Se puede hacer una versión reducida en un día largo saliendo temprano desde Santiago o A Coruña y centrándose en los puntos principales (Muxía, Carnota, Fisterra). Pero para disfrutar de verdad la Costa da Morte y ver la puesta de sol en Fisterra sin prisas, recomendamos al menos 2 noches.",
  },
  {
    question: "¿Cuánto cuesta organizar una ruta por la Costa da Morte con Suunia?",
    answer:
      "Cada programa se presupuesta de forma individualizada según el número de personas, los días, los alojamientos y las experiencias incluidas. Enviamos presupuesto detallado y sin compromiso. Como referencia, una ruta de 2-3 días con transporte privado, guía local, alojamiento en hoteles seleccionados y restaurantes reservados tiene un nivel de inversión razonable comparado con otros destinos europeos equivalentes.",
  },
];

export default function GuiaCostaDaMorte() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/faro-de-Finisterre-1.jpg"
          alt="Faro de Finisterre al atardecer con persona contemplando la puesta de sol sobre el Atlántico"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Guía de ruta
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Costa da Morte: ruta completa de 2-3 días
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Desde Malpica hasta Fisterra, recorriendo los acantilados más salvajes de Europa. Faros legendarios, playas desiertas, pueblos marineros y la puesta de sol más famosa de Galicia.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              15 min de lectura
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
                La Costa da Morte es la Galicia más salvaje. Un litoral de acantilados que caen a pico sobre el Atlántico, faros que llevan siglos guiando a los navegantes, playas kilométricas sin una sola construcción y pueblos marineros donde la vida sigue girando alrededor del puerto y la lonja. El nombre — «Costa de la Muerte» — viene de los más de 600 naufragios documentados en estas aguas, pero hoy lo que mata es la belleza del paisaje.
              </p>
              <p>
                Esta ruta recorre la Costa da Morte de norte a sur en 2-3 días, desde Malpica hasta Fisterra, pasando por Camariñas, Muxía y Carnota. Es una ruta que se puede hacer por libre en coche, pero también la organizamos como <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tour privado con guía local</Link> o como parte de una <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">gran ruta por Galicia</Link> de varios días.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Etapas día a día */}
      {etapas.map((etapa, idx) => (
        <section key={etapa.dia} className={idx % 2 === 0 ? "section-padding bg-gray-50" : "section-padding"}>
          <div className="mx-auto max-w-7xl">
            <AnimateOnScroll>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-atlantic-600">{etapa.dia}</span>
                <h2 className="mt-2 heading-section">{etapa.titulo}</h2>
              </div>
            </AnimateOnScroll>

            {/* Foto de la etapa */}
            <AnimateOnScroll>
              <div className="relative mt-10 h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
                <Image
                  src={etapa.imagen}
                  alt={etapa.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </AnimateOnScroll>

            <div className="mt-10 space-y-8">
              {etapa.paradas.map((parada, i) => (
                <AnimateOnScroll key={parada.name}>
                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{parada.name}</h3>
                        <p className="mt-3 leading-relaxed text-gray-600">{parada.text}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Faros */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Los faros de la Costa da Morte</h2>
              <p className="mt-4 text-lg text-gray-600">
                La Costa da Morte tiene la mayor concentración de faros de toda la costa española. Estos cuatro son los más interesantes de visitar.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {faros.map((faro) => (
              <AnimateOnScroll key={faro.name}>
                <div className="card-elegant h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                    {faro.ubicacion}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900">{faro.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{faro.nota}</p>
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
            <h2 className="heading-section">¿Prefieres que organicemos la ruta?</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Esta guía tiene toda la información que necesitas para recorrer la Costa da Morte por tu cuenta. Pero si prefieres no preocuparte de nada — transporte, alojamiento, restaurantes, guía que te cuente cada leyenda y cada naufragio — eso es exactamente lo que hacemos.
              </p>
              <p>
                Organizamos <Link href="/excursiones-privadas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">excursiones privadas de un día a Fisterra y Muxía</Link>, <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">rutas de varios días por la costa atlántica</Link> y experiencias <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">premium</Link> con alojamientos exclusivos y accesos que no están al alcance del turismo convencional.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Organizamos tu ruta por la Costa da Morte?"
        description="Cuéntanos qué tipo de viaje tienes en mente y te preparamos un programa completo a medida. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre la Costa da Morte</h2>
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

      {/* Breadcrumb */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/guias" className="transition-colors hover:text-atlantic-700">Guías de viaje</Link>
            <span>/</span>
            <span className="text-gray-900">Costa da Morte</span>
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
            headline: "Costa da Morte: ruta completa de 2-3 días",
            description: "Guía completa para recorrer la Costa da Morte: etapas día a día, faros, playas, pueblos marineros y consejos prácticos.",
            url: "https://suunia.com/guias/costa-da-morte",
            image: "https://suunia.com/images/faro-de-Finisterre-1.jpg",
            author: { "@type": "Organization", name: "Suunia", url: "https://suunia.com" },
            publisher: { "@type": "Organization", name: "Suunia", url: "https://suunia.com" },
            mainEntityOfPage: "https://suunia.com/guias/costa-da-morte",
          }),
        }}
      />
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
