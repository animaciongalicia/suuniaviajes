import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Restaurantes con estrella Michelin en Galicia — Guía completa",
  description:
    "Guía completa de los restaurantes con estrella Michelin en Galicia: cocina de autor, producto atlántico, chefs que reinventan la tradición gallega. Escrita por locales.",
  alternates: { canonical: "https://suunia.com/guias/restaurantes-michelin-galicia" },
  openGraph: {
    title: "Restaurantes Michelin en Galicia – Guía Suunia",
    description:
      "Los restaurantes con estrella Michelin de Galicia: quién está detrás, qué se come, cuánto cuesta y cómo reservar.",
    url: "https://suunia.com/guias/restaurantes-michelin-galicia",
    images: [{ url: "/images/gastronomia-galicia.jpg", width: 1200, height: 630 }],
  },
};

const restaurantes = [
  {
    name: "Culler de Pau",
    chef: "Javier Olleros",
    estrellas: 2,
    ubicacion: "O Grove (Pontevedra)",
    descripcion:
      "Dos estrellas Michelin y estrella verde por su compromiso con la sostenibilidad. Javier Olleros trabaja casi exclusivamente con producto de su propio huerto y de las rías que tiene a 200 metros. La cocina es un ejercicio de coherencia: cada plato cuenta la historia de un territorio a través de vegetales, pescados y mariscos tratados con una técnica impecable y una presentación que parece sencilla pero esconde una complejidad enorme. El menú degustación largo es una experiencia de tres horas que justifica el viaje.",
    precio: "Menú degustación desde 155 €",
    consejo: "Reservar con al menos 3-4 semanas de antelación. El menú largo es la mejor opción.",
  },
  {
    name: "Pepe Vieira — Camiño da Serpe",
    chef: "Xosé T. Cannas",
    estrellas: 2,
    ubicacion: "Raxó, Poio (Pontevedra)",
    descripcion:
      "Dos estrellas Michelin en un entorno privilegiado frente a la Ría de Pontevedra. Pepe Vieira ha creado en Camiño da Serpe un restaurante donde el paisaje y la cocina se funden: un edificio de cristal rodeado de huerta propia que se asoma a la ría. La propuesta gastronómica es radical en su compromiso con el territorio — prácticamente todo lo que llega al plato procede de un radio de pocos kilómetros. Los menús degustación son viajes sensoriales largos donde los vegetales y el mar se llevan todo el protagonismo.",
    precio: "Menú degustación desde 160 €",
    consejo: "La ubicación es espectacular. Reservar con al menos 3 semanas. Los menús son largos, ve con tiempo.",
  },
  {
    name: "Retiro da Costiña",
    chef: "Manuel Costiña",
    estrellas: 2,
    ubicacion: "Santa Comba (A Coruña)",
    descripcion:
      "Dos estrellas Michelin en un lugar inesperado: un pueblo del interior de A Coruña, en plena Costa da Morte. Manuel Costiña trabaja con producto local — carnes, verduras de huerta, pescados de la costa cercana — en una cocina que respeta la tradición pero la eleva sin complejos. El restaurante tiene un ambiente rural y acogedor que contrasta con la sofisticación de los platos. El salto de una a dos estrellas ha confirmado lo que los que conocían este rincón ya sabían: aquí se come de forma extraordinaria.",
    precio: "Menú degustación desde 90 €",
    consejo: "Vale la pena combinarlo con una ruta por la Costa da Morte. El entorno rural suma mucho a la experiencia.",
  },
  {
    name: "Pepe Solla",
    chef: "Pepe Solla",
    estrellas: 1,
    ubicacion: "Poio (Pontevedra)",
    descripcion:
      "Una estrella Michelin desde 2014. Pepe Solla es uno de los chefs que mejor entiende la relación entre la cocina gallega tradicional y la vanguardia. Su restaurante, en una antigua casa de piedra rodeada de jardín, ofrece una cocina basada en el producto del mar con toques internacionales que nunca pierden la raíz. Los arroces, los pescados y los mariscos son excepcionales. El ambiente es elegante pero relajado.",
    precio: "Menú degustación desde 120 €",
    consejo: "La terraza en verano es espectacular. Los arroces son la especialidad de la casa.",
  },
  {
    name: "Árbore da Veira",
    chef: "Luis Veira",
    estrellas: 1,
    ubicacion: "A Coruña",
    descripcion:
      "Una estrella Michelin en pleno centro de A Coruña. Luis Veira cocina con una filosofía clara: producto gallego de temporada, tratado con técnica depurada y sin artificios. La carta es corta y cambia según la temporada y el mercado del día. El espacio es pequeño e íntimo. Los platos de pescado y marisco son extraordinarios, y los postres están a la altura. Una de las mejores relaciones calidad-precio de la alta cocina gallega.",
    precio: "Menú degustación desde 85 €",
    consejo: "Restaurante pequeño, reservar con antelación. Uno de los más accesibles en precio.",
  },
  {
    name: "Maruja Limón",
    chef: "Rafa Centeno",
    estrellas: 1,
    ubicacion: "Vigo",
    descripcion:
      "Una estrella Michelin desde 2009, lo que la convierte en una de las más veteranas de Galicia. Rafa Centeno trabaja con el producto de la Ría de Vigo — uno de los ecosistemas marinos más ricos del mundo — y lo transforma en platos que combinan tradición gallega con influencias internacionales. El espacio es elegante y la carta de vinos gallegos es una de las más completas de la comunidad.",
    precio: "Menú degustación desde 95 €",
    consejo: "La carta de vinos gallegos es excepcional. Ideal combinar con un paseo por el casco vello de Vigo.",
  },
  {
    name: "Nova",
    chef: "Daniel López",
    estrellas: 1,
    ubicacion: "Ourense",
    descripcion:
      "Una estrella Michelin en el corazón de Ourense. Daniel López apuesta por una cocina gallega contemporánea donde el mercado manda: los menús cambian según la temporada y el producto disponible. El restaurante combina la tradición del interior de Galicia con una visión moderna y depurada. Los platos de verduras de temporada, las carnes de la zona y los pescados son los puntos fuertes.",
    precio: "Menú degustación desde 75 €",
    consejo: "Excelente relación calidad-precio. Perfecto para completar una visita a Ourense y sus termas.",
  },
  {
    name: "Yayo Daporta",
    chef: "Yayo Daporta",
    estrellas: 1,
    ubicacion: "Cambados (Pontevedra)",
    descripcion:
      "Una estrella Michelin en la capital del Albariño. Yayo Daporta lleva años trabajando con el producto de las Rías Baixas — marisco, pescado y verduras — desde una perspectiva creativa pero siempre respetuosa con la materia prima. Su cocina es precisa, con platos que buscan la esencia del sabor sin sobrecargar. El restaurante está en el centro de Cambados, a pocos minutos del puerto y de los viñedos de Albariño.",
    precio: "Menú degustación desde 85 €",
    consejo: "Combina perfectamente con una ruta de bodegas por el Val do Salnés.",
  },
  {
    name: "Casa Marcelo",
    chef: "Marcelo Tejedor",
    estrellas: 1,
    ubicacion: "Santiago de Compostela",
    descripcion:
      "Una estrella Michelin en Santiago de Compostela. Casa Marcelo es una referencia de la ciudad, con un formato de cocina abierta donde los comensales se sientan alrededor de la barra y ven trabajar al equipo. La propuesta combina producto gallego con influencias asiáticas y latinoamericanas en un formato de platos para compartir que rompe con el concepto tradicional de restaurante de estrella.",
    precio: "Menú degustación desde 80 €",
    consejo: "El formato de barra y cocina abierta hace que la experiencia sea única. Reservar siempre.",
  },
  {
    name: "Asador O Pazo",
    chef: "Equipo Asador O Pazo",
    estrellas: 1,
    ubicacion: "Padrón (A Coruña)",
    descripcion:
      "Una estrella Michelin en Padrón, la tierra de los pimientos y de Rosalía de Castro. Asador O Pazo destaca por una cocina gallega de raíz con un dominio absoluto del producto: carnes a la brasa, pescados del día y verduras de la huerta padronesa. El asador eleva la cocina tradicional gallega a su máxima expresión con técnica impecable y producto irreprochable.",
    precio: "Menú degustación desde 75 €",
    consejo: "Los pimientos de Padrón aquí son otra cosa. La combinación de brasa y producto local es excepcional.",
  },
  {
    name: "As Garzas",
    chef: "Fernando Agrasar",
    estrellas: 1,
    ubicacion: "Malpica de Bergantiños (A Coruña)",
    descripcion:
      "Una estrella Michelin en plena Costa da Morte. As Garzas es un restaurante que nace del mar: el producto llega directamente de la lonja de Malpica y de los pescadores de la zona. Fernando Agrasar cocina con lo que el Atlántico le da cada día, en una propuesta que combina respeto absoluto por la materia prima con una técnica que saca lo mejor de cada pieza. El entorno — un pueblo pesquero auténtico frente a las Islas Sisargas — es parte inseparable de la experiencia.",
    precio: "Menú degustación desde 70 €",
    consejo: "Uno de los restaurantes con estrella más auténticos de Galicia. El pueblo y el entorno merecen la visita.",
  },
  {
    name: "Terra",
    chef: "Equipo Terra",
    estrellas: 1,
    ubicacion: "Fisterra (A Coruña)",
    descripcion:
      "Una estrella Michelin en el fin del mundo. Terra está en Fisterra, el punto que durante siglos se consideró el confín de la tierra conocida. La cocina trabaja con producto local de costa y huerta en un formato que rinde homenaje al territorio. Comer aquí después de ver la puesta de sol en el cabo es una de las experiencias gastronómicas más memorables que se pueden vivir en Galicia.",
    precio: "Menú degustación desde 70 €",
    consejo: "Combinar con la puesta de sol en el Cabo de Fisterra. Reservar con antelación en verano.",
  },
  {
    name: "Vértigo",
    chef: "Equipo Vértigo",
    estrellas: 1,
    ubicacion: "Rober (Lugo)",
    descripcion:
      "Una estrella Michelin en la provincia de Lugo. Vértigo es una propuesta que pone en valor el producto del interior de Galicia — carnes, verduras, legumbres, lácteos — con una cocina de autor que sorprende por su nivel en un entorno rural. Una de las estrellas más recientes de la comunidad, que confirma que la alta cocina gallega no se limita a la costa.",
    precio: "Menú degustación desde 70 €",
    consejo: "Merece la pena desviarse para descubrir esta propuesta del interior de Galicia.",
  },
];

const masalla = [
  {
    title: "Bib Gourmand destacados",
    text: "La distinción Bib Gourmand reconoce buena cocina a precios moderados. Entre los más destacados de Galicia: Térreo en A Coruña, con una propuesta de producto atlántico y de temporada en un espacio moderno; Morrofino en Vigo, cocina gallega creativa con producto de la ría; y Abastos 2.0 en Santiago, dentro del Mercado de Abastos, donde se trabaja con el producto fresco del mercado a pocos metros de los puestos.",
  },
  {
    title: "Marisquerías de lonja",
    text: "La gran mayoría del marisco que se come en Galicia no pasa por restaurantes con estrella. Las marisquerías de O Grove, Cangas, Bueu y A Coruña sirven producto de primera sacado de la ría esa misma mañana. No tienen guía Michelin pero tienen algo que muchos restaurantes de autor no pueden ofrecer: inmediatez y frescura absolutas.",
  },
  {
    title: "Pulperías y tabernas",
    text: "La cocina gallega cotidiana se come en pulperías, tabernas y casas de comidas. Pulpo á feira, empanada, caldo gallego, lacón con grelos, raxo, zorza... Platos contundentes, honestos y a precios accesibles. Cada comarca tiene sus especialidades y sus locales de referencia.",
  },
];

const faqs = [
  {
    question: "¿Cuántos restaurantes con estrella Michelin hay en Galicia?",
    answer:
      "Galicia cuenta con 13 restaurantes con estrella Michelin, incluyendo tres con dos estrellas (Culler de Pau, Pepe Vieira y Retiro da Costiña) y diez con una estrella repartidos entre las cuatro provincias. Además, hay numerosos restaurantes con Bib Gourmand — entre ellos Térreo (A Coruña), Morrofino (Vigo) y Abastos 2.0 (Santiago) — y una estrella verde de sostenibilidad.",
  },
  {
    question: "¿Hay que reservar con mucha antelación?",
    answer:
      "Depende del restaurante y la temporada. Culler de Pau (2 estrellas) requiere 3-4 semanas de antelación en temporada alta y al menos 2 semanas el resto del año. Los restaurantes de una estrella suelen tener disponibilidad con 1-2 semanas de antelación entre semana, aunque los fines de semana conviene reservar con más margen. Nosotros gestionamos las reservas como parte de nuestros programas.",
  },
  {
    question: "¿Se puede hacer una ruta gastronómica por los Michelin de Galicia?",
    answer:
      "Sí, y es una de las experiencias más completas que se pueden hacer en Galicia. Una ruta de 5-7 días permite visitar 3-4 restaurantes con estrella combinándolos con bodegas, mercados, lonjas y experiencias gastronómicas complementarias. Nosotros diseñamos rutas gastronómicas a medida que incluyen transporte, alojamiento y reservas en todos los restaurantes.",
  },
  {
    question: "¿Cuánto cuesta comer en un restaurante Michelin en Galicia?",
    answer:
      "Los menús degustación en restaurantes de una estrella en Galicia van desde 70 € hasta 120 € por persona (sin bebidas ni maridaje). Los tres restaurantes con dos estrellas (Culler de Pau, Pepe Vieira y Retiro da Costiña) tienen menús desde 90 € hasta 160 €. En comparación con las estrellas Michelin de Madrid o Barcelona, los precios en Galicia son significativamente más accesibles manteniendo un nivel de producto y técnica equivalente o superior.",
  },
];

export default function GuiaRestaurantesMichelin() {
  return (
    <>
      {/* Hero editorial */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
        <Image
          src="/images/gastronomia-galicia.jpg"
          alt="Plato de alta cocina gallega con mariscos frescos y presentación de autor en restaurante Michelin"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Guía gastronómica
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Los restaurantes con estrella Michelin de Galicia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Quién está detrás, qué se come, cuánto cuesta y por qué la alta cocina gallega es una de las más interesantes de Europa en este momento.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10 min de lectura
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
                Galicia lleva años consolidándose como uno de los territorios gastronómicos más relevantes de España. La combinación de un producto excepcional — marisco de ría, pescado del Atlántico, verduras de huerta, carnes de pasto, vinos con denominación de origen — con una generación de chefs que ha sabido reinterpretar la tradición sin traicionarla ha puesto a la cocina gallega en un nivel que pocos imaginaban hace una década.
              </p>
              <p>
                Esta guía recorre los restaurantes que la guía Michelin ha distinguido con una o dos estrellas en Galicia. No es una lista fría: contamos quién está detrás de cada cocina, qué hace especial su propuesta, cuánto cuesta comer allí y qué conviene saber antes de reservar. Todo desde la experiencia de un equipo que lleva años organizando <Link href="/gastronomia-bodegas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">experiencias gastronómicas por Galicia</Link> para viajeros exigentes.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Restaurantes */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Los restaurantes con estrella</h2>
              <p className="mt-4 text-lg text-gray-600">
                De los tres restaurantes con dos estrellas a las propuestas con una estrella repartidas por las cuatro provincias gallegas.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-14 space-y-8">
            {restaurantes.map((r) => (
              <AnimateOnScroll key={r.name}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
                          <span className="flex items-center gap-0.5 text-gold-500">
                            {Array.from({ length: r.estrellas }).map((_, i) => (
                              <svg key={i} aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Chef: {r.chef} · {r.ubicacion}
                        </p>
                      </div>
                      <span className="rounded-full bg-atlantic-50 px-4 py-1.5 text-xs font-semibold text-atlantic-700">
                        {r.precio}
                      </span>
                    </div>
                    <p className="mt-5 leading-relaxed text-gray-600">{r.descripcion}</p>
                    <div className="mt-5 flex items-start gap-2 rounded-lg bg-gray-50 p-4">
                      <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-gray-600">{r.consejo}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Más allá de las estrellas */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Más allá de las estrellas</h2>
              <p className="mt-4 text-lg text-gray-600">
                La alta cocina es solo una parte de la escena gastronómica gallega. El verdadero tesoro está en la materia prima y en los miles de restaurantes, marisquerías y tabernas que la trabajan cada día.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {masalla.map((item) => (
              <AnimateOnScroll key={item.title}>
                <div className="card-elegant h-full">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo organizamos rutas gastronómicas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Rutas gastronómicas a medida</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Organizar una ruta gastronómica por los Michelin de Galicia no es solo reservar mesa. Es diseñar un itinerario que combine los restaurantes con visitas a bodegas, mercados de abastos, lonjas de pescado y experiencias que den contexto a lo que se come en cada sitio. Que la ruta del vino en Rías Baixas prepare el paladar para la cena en Culler de Pau. Que la visita a la lonja de A Coruña al amanecer tenga sentido antes de comer en Árbore da Veira.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, nos encargamos de todo: reservas en los restaurantes (algunas requieren contacto directo que no está al alcance del público general), transporte privado entre puntos, alojamiento en hoteles seleccionados y coordinación de cada jornada. El resultado es un viaje donde cada comida es parte de una experiencia más grande. También podemos integrar estas experiencias en un viaje <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">Galicia Premium</Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Organizamos tu ruta gastronómica por Galicia?"
        description="Cuéntanos qué tipo de experiencia gastronómica buscas y diseñamos un programa a medida con los mejores restaurantes, bodegas y experiencias culinarias de Galicia."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes</h2>
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
            <Link href="/guias" className="transition-colors hover:text-atlantic-700">
              Guías de viaje
            </Link>
            <span>/</span>
            <span className="text-gray-900">Restaurantes Michelin en Galicia</span>
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
            headline: "Los restaurantes con estrella Michelin de Galicia",
            description:
              "Guía completa de los restaurantes con estrella Michelin en Galicia: chefs, propuestas, precios y consejos para reservar.",
            url: "https://suunia.com/guias/restaurantes-michelin-galicia",
            image: "https://suunia.com/images/gastronomia-galicia.jpg",
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
            mainEntityOfPage: "https://suunia.com/guias/restaurantes-michelin-galicia",
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
