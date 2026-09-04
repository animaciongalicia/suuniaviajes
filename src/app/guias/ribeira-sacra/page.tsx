import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Ribeira Sacra — Viñedos, cañones del Sil y monasterios románicos",
  description:
    "Guía completa de la Ribeira Sacra: cañones del Sil, viñedos en bancales, bodegas de Mencía, monasterios románicos, catamarán y dónde comer. Escrita por locales.",
  alternates: { canonical: "https://suunia.com/guias/ribeira-sacra" },
  openGraph: {
    title: "Ribeira Sacra – Guía Suunia",
    description:
      "Cañones del Sil, viñedos heroicos, monasterios y la zona vinícola más espectacular de Europa. Guía completa.",
    url: "https://suunia.com/guias/ribeira-sacra",
    images: [{ url: "/images/Ribeira-Sacra-Mundiplus.jpg", width: 1200, height: 630 }],
  },
};

const zonas = [
  {
    name: "Cañones del Sil",
    text: "El corazón de la Ribeira Sacra. El río Sil ha excavado durante millones de años un cañón de más de 500 metros de profundidad que serpentea entre paredes de roca cubiertas de vegetación. En las laderas más empinadas, los viticultores gallegos llevan siglos cultivando la uva en bancales (socalcos) que bajan hasta el agua. Es lo que se llama viticultura heroica: vendimia manual en pendientes de más del 50%, a veces con el racimo solo accesible desde un barco. Los miradores de Balcones de Madrid, Santo Estevo y A Cividade ofrecen las mejores panorámicas.",
    imagen: "/images/Ribeira-Sacra-Mundiplus.jpg",
    alt: "Cañones del río Sil vistos desde arriba con el río serpenteando entre montañas de roca y vegetación",
  },
  {
    name: "Viñedos en bancales",
    text: "La DO Ribeira Sacra produce principalmente vinos tintos de Mencía y blancos de Godello. Los viñedos en bancales (socalcos) son la imagen más icónica de la zona: terrazas de piedra construidas a mano que se escalonan por las laderas del cañón hasta el nivel del río. La orientación sur y el microclima del cañón (más cálido y protegido que el resto de Galicia) producen uvas con una maduración y una concentración excepcionales. Es una de las zonas vinícolas más antiguas de Europa — hay documentos del siglo II que mencionan la viticultura aquí.",
    imagen: "/images/visitar-de-galicia.jpg",
    alt: "Vista aérea de viñedos en bancales sobre el río en la Ribeira Sacra con aldea gallega",
  },
];

const monasterios = [
  {
    name: "Mosteiro de Santo Estevo de Ribas de Sil",
    ubicacion: "Nogueira de Ramuín (Ourense)",
    texto: "El más imponente de todos. Monasterio benedictino fundado en el siglo VI con tres claustros de diferentes épocas (románico, gótico y renacentista). Hoy es Parador de Turismo, lo que permite dormir en celdas reconvertidas en habitaciones con vistas al cañón del Sil. Se puede visitar aunque no se esté alojado: los claustros, la iglesia y la terraza con vistas son accesibles.",
  },
  {
    name: "San Pedro de Rocas",
    ubicacion: "Esgos (Ourense)",
    texto: "El monasterio más antiguo de Galicia, documentado desde el año 573. Lo extraordinario de San Pedro de Rocas es que sus capillas están excavadas directamente en la roca — tres celdas rupestres que servían de iglesia. En el suelo de la iglesia hay un mapa medieval tallado en piedra que representa los lugares santos de peregrinación. Un lugar único que muy poca gente conoce.",
  },
  {
    name: "Santa Cristina de Ribas de Sil",
    ubicacion: "Parada de Sil (Ourense)",
    texto: "Escondido en un bosque de castaños a orillas del Sil, Santa Cristina es una joya del románico gallego. La iglesia del siglo XII tiene capiteles con figuras vegetales y animales de una calidad excepcional. La ubicación, en plena ladera del cañón rodeada de bosque, le da un aura de recogimiento que los grandes monasterios no tienen. Se llega por una carretera estrecha que baja hasta el nivel del río.",
  },
  {
    name: "Mosteiro de San Vicente do Pino",
    ubicacion: "Monforte de Lemos (Lugo)",
    texto: "En lo alto de Monforte de Lemos, junto a la Torre del Homenaje y el Palacio de los Condes. El conjunto monumental — torre, palacio y monasterio — domina toda la comarca. El monasterio fue reconstruido tras un incendio y hoy es Parador. Monforte tiene además un casco antiguo con la iglesia de los Escolapios (llamada 'El Escorial gallego') y un puente medieval sobre el río Cabe.",
  },
];

const bodegas = [
  { name: "Adega Algueira", zona: "Doade (Lugo)", nota: "Referente absoluto de la DO Ribeira Sacra. Fernando González elabora Mencías de parcela en bancales sobre el Sil. Sus vinos de finca (Pizarra, Brancellao) son de los más reconocidos de Galicia. La visita incluye paseo por los viñedos en bancales y cata comentada." },
  { name: "Dominio do Bibei", zona: "Manzaneda (Ourense)", nota: "Bodega espectacular enclavada en el cañón del río Bibei. Javier Domínguez trabaja con variedades autóctonas casi extintas (Brancellao, Mouratón, Merenzao). Vinos de producción limitada con una personalidad única. La bodega en sí merece la visita." },
  { name: "Rectoral de Amandi", zona: "Sober (Lugo)", nota: "La subzona de Amandi es la más reputada de la DO. Esta bodega trabaja con Mencía de viñas viejas plantadas en bancales. Vinos elegantes y con estructura. La visita permite ver de cerca la viticultura heroica de la zona." },
  { name: "Adega Moure", zona: "Pantón (Lugo)", nota: "Bodega familiar pequeña con viñedos propios en la ribera del Sil. Producción artesanal, visitas íntimas y una relación calidad-precio excelente. Ideal para quienes buscan una experiencia más cercana y menos turística." },
];

const practico = [
  {
    title: "Cuántos días necesitas",
    text: "Un mínimo de 2 días para ver lo esencial: cañones, un monasterio, una bodega y la navegación en catamarán. Con 3 días puedes recorrer la zona con calma, visitar varios miradores, dos o tres bodegas y cenar bien cada noche. Se combina muy bien con las Rías Baixas o con Ourense (termas y gastronomía) para un viaje de 5-7 días.",
  },
  {
    title: "Cómo moverse",
    text: "Coche imprescindible. Las carreteras son estrechas y con curvas (estamos en un cañón), pero están bien mantenidas. El GPS a veces se pierde en las zonas más rurales — llevar un mapa de apoyo no sobra. La distancia desde Santiago es de unos 100 km (hora y media); desde Ourense, 30 km.",
  },
  {
    title: "La navegación en catamarán",
    text: "El catamarán por los cañones del Sil sale desde los embarcaderos de Santo Estevo o Abeleda. El recorrido dura unas 2 horas y atraviesa la parte más estrecha y profunda del cañón. Es la mejor forma de ver los viñedos en bancales desde abajo. Funciona de marzo a noviembre y conviene reservar con antelación en temporada alta.",
  },
  {
    title: "Dónde dormir",
    text: "El Parador de Santo Estevo es la opción premium: dormir en un monasterio del siglo VI con vistas al cañón. Fuera del Parador, hay casas rurales excelentes en la zona: A Palleira (Pantón), Casa Grande de Cristosende (Castro Caldelas). Monforte de Lemos tiene más opciones de hotel convencional.",
  },
  {
    title: "Dónde comer",
    text: "La cocina de la Ribeira Sacra es de interior: pulpo, empanada, lacón, cocido, castañas y carne de vacuno. En Monforte de Lemos: O Grelo (tapas gallegas de nivel) y Restaurante Spencer. En Castro Caldelas: A Casa do Pazo. En las bodegas, algunas ofrecen comida maridada con sus vinos.",
  },
  {
    title: "Mejor época",
    text: "Octubre es el mejor mes: la vendimia está en marcha, los castaños cambian de color y la luz es espectacular. Septiembre también es excelente. Primavera (abril-mayo) ofrece un paisaje muy verde. En verano hace más calor que en la costa (el cañón retiene el calor), pero las mañanas y tardes son agradables.",
  },
];

const faqs = [
  {
    question: "¿Qué es la viticultura heroica?",
    answer:
      "Se denomina viticultura heroica al cultivo de la vid en terrenos con pendientes superiores al 30%, en altitudes elevadas o en pequeñas islas o terrazas. En la Ribeira Sacra, los viñedos se plantan en bancales (socalcos) con pendientes que pueden superar el 50%, en laderas que bajan hasta el río Sil. La vendimia se hace a mano, muchas veces con la uva solo accesible con cuerdas o desde barcos. El CERVIM (Centro de Investigación de la Viticultura de Montaña) reconoce la Ribeira Sacra como una de las zonas de viticultura heroica más importantes de Europa.",
  },
  {
    question: "¿Merece la pena hacer la navegación en catamarán por el Sil?",
    answer:
      "Sí, es una de las experiencias imprescindibles. Ver los cañones y los viñedos en bancales desde abajo, al nivel del agua, es algo que no se puede replicar desde los miradores de arriba. El recorrido dura unas 2 horas y pasa por la parte más espectacular del cañón. En temporada alta (julio-septiembre) conviene reservar con antelación porque las plazas son limitadas.",
  },
  {
    question: "¿Cuántas bodegas se pueden visitar en un día?",
    answer:
      "Recomendamos 2-3 bodegas por día como máximo, dejando tiempo entre visitas para disfrutar del paisaje y los miradores. Las visitas suelen durar entre 1 y 2 horas e incluyen paseo por los viñedos y cata. Nosotros organizamos rutas del vino a medida con transporte privado para que nadie tenga que conducir después de las catas.",
  },
  {
    question: "¿Se puede combinar la Ribeira Sacra con otros destinos de Galicia?",
    answer:
      "Sí, y es lo más habitual. La Ribeira Sacra se combina muy bien con las Rías Baixas (costa + interior), con Santiago de Compostela (a hora y media por autopista), con Ourense (termas, gastronomía, Valdeorras) o con O Courel (naturaleza, bosques, sierras). Diseñamos itinerarios de varios días que combinan la Ribeira Sacra con otros destinos gallegos.",
  },
];

export default function GuiaRibeiraSacra() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/Ribeira-Sacra-Mundiplus.jpg"
          alt="Cañones del río Sil en la Ribeira Sacra con el río serpenteando entre paredes de roca"
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
            Ribeira Sacra: viñedos, cañones y monasterios
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            La zona vinícola más espectacular de Europa. Cañones del Sil, viticultura heroica en bancales, monasterios románicos perdidos en el bosque y vinos de Mencía que no se encuentran fuera de aquí.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              14 min de lectura
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
                La Ribeira Sacra es probablemente el secreto mejor guardado de Galicia. Mientras las Rías Baixas y Santiago reciben millones de visitantes cada año, los cañones del Sil, los viñedos en bancales y los monasterios románicos de esta zona del interior pasan desapercibidos para la mayoría de los viajeros. Y eso, paradójicamente, es parte de su encanto.
              </p>
              <p>
                Esta guía recorre lo esencial de la Ribeira Sacra: el paisaje de los cañones, la viticultura heroica, los monasterios que le dan nombre (ribeira sacra = ribera sagrada, por la concentración de monasterios en las orillas del Sil) y las bodegas donde se puede catar el Mencía en su territorio. Todo desde el conocimiento de un equipo que organiza viajes por esta zona como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Zonas principales con fotos */}
      {zonas.map((zona, idx) => (
        <section key={zona.name} className={idx % 2 === 0 ? "section-padding bg-gray-50" : "section-padding"}>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <AnimateOnScroll className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
                  <Image
                    src={zona.imagen}
                    alt={zona.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="heading-section">{zona.name}</h2>
                <p className="mt-6 leading-relaxed text-gray-600">{zona.text}</p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* Monasterios */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Los monasterios de la Ribeira Sacra</h2>
              <p className="mt-4 text-lg text-gray-600">
                La concentración de monasterios en las riberas del Sil y del Miño es lo que dio nombre a esta zona: «ribera sagrada». Estos cuatro son los más interesantes de visitar.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-8">
            {monasterios.map((m) => (
              <AnimateOnScroll key={m.name}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">{m.ubicacion}</span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{m.name}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{m.texto}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bodegas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Bodegas que merece la pena visitar</h2>
              <p className="mt-4 text-lg text-gray-600">
                La DO Ribeira Sacra cuenta con más de 90 bodegas. Estas cuatro representan bien la diversidad de la zona y ofrecen visitas de calidad.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {bodegas.map((bodega) => (
              <AnimateOnScroll key={bodega.name}>
                <div className="card-elegant h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">{bodega.zona}</span>
                  <h3 className="mt-2 font-semibold text-gray-900">{bodega.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{bodega.nota}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Info práctica */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Información práctica</h2>
            <div className="mt-10 space-y-8">
              {practico.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-atlantic-100 text-sm font-bold text-atlantic-700">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{item.text}</p>
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
            <h2 className="heading-section">¿Prefieres que organicemos tu viaje a la Ribeira Sacra?</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                La Ribeira Sacra se puede recorrer por libre, pero tener quien te organice las visitas a bodegas, el catamarán, los alojamientos y la ruta entre miradores y monasterios hace que el viaje sea otra cosa.
              </p>
              <p>
                Organizamos <Link href="/excursiones-privadas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">excursiones privadas de un día a la Ribeira Sacra</Link> desde Santiago o A Coruña, <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">grandes rutas</Link> que combinan la Ribeira Sacra con la costa, y <Link href="/gastronomia-bodegas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">rutas de gastronomía y bodegas</Link> especializadas en la zona vinícola.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Organizamos tu viaje a la Ribeira Sacra?"
        description="Cuéntanos qué tipo de experiencia buscas y diseñamos un programa a medida con bodegas, monasterios, navegación y alojamiento. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre la Ribeira Sacra</h2>
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
            <span className="text-gray-900">Ribeira Sacra</span>
          </nav>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ribeira Sacra: viñedos, cañones del Sil y monasterios románicos",
            description: "Guía completa de la Ribeira Sacra: cañones del Sil, viticultura heroica, bodegas de Mencía, monasterios románicos y consejos prácticos.",
            url: "https://suunia.com/guias/ribeira-sacra",
            image: "https://suunia.com/images/Ribeira-Sacra-Mundiplus.jpg",
            author: { "@type": "Organization", name: "Suunia", url: "https://suunia.com" },
            publisher: { "@type": "Organization", name: "Suunia", url: "https://suunia.com" },
            mainEntityOfPage: "https://suunia.com/guias/ribeira-sacra",
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
