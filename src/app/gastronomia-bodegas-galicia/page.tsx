import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Gastronomía y bodegas en Galicia — Estrellas Michelin, bodegas premium y templos del producto",
  description:
    "Recorre Galicia a través de su gastronomía: restaurantes con estrella Michelin, templos del producto, bodegas premium por denominación de origen, lonjas, marisquerías y experiencias culinarias de lujo.",
  alternates: { canonical: "https://suunia.com/gastronomia-bodegas-galicia" },
  openGraph: {
    title: "Gastronomía y bodegas en Galicia – Suunia",
    description:
      "Estrellas Michelin, bodegas premium, templos del producto y experiencias gastronómicas de lujo en Galicia.",
    url: "https://suunia.com/gastronomia-bodegas-galicia",
    images: [{ url: "/images/gastronomia-galicia.jpg", width: 1200, height: 630 }],
  },
};

const experiencias = [
  {
    title: "Ruta por los restaurantes con estrella Michelin",
    text: "Galicia cuenta con más de una decena de restaurantes distinguidos con estrellas Michelin que reinventan la cocina gallega con técnica de vanguardia y producto de una calidad excepcional. Desde las creaciones atlánticas de los chefs del norte hasta las propuestas de interior que elevan la cocina rural gallega a la alta gastronomía. Organizamos rutas gastronómicas de varios días que recorren los mejores restaurantes con estrella de Galicia: reserva preferente, maridajes exclusivos y la posibilidad de cenar en la mesa del chef o en espacios privados.",
    details: [
      "Reserva preferente en restaurantes con estrella Michelin",
      "Maridajes exclusivos con vinos gallegos seleccionados",
      "Posibilidad de mesa del chef y espacios privados",
      "Rutas gastronómicas de varios días por toda Galicia",
    ],
  },
  {
    title: "Templos del producto: donde el ingrediente es la estrella",
    text: "Galicia tiene algo que pocos destinos del mundo pueden ofrecer: un producto de una calidad brutal a pocas horas de donde se captura, se recolecta o se cría. Los templos del producto son esos restaurantes donde el protagonista absoluto es la materia prima: percebes servidos minutos después de ser arrancados del acantilado, centollos que llegan vivos de la lonja, ternera gallega madurada en cámara durante semanas, pulpo de la ría cocido en olla de cobre. No son sitios con mantel de diseño: son lugares donde se come la mejor versión posible de cada producto gallego. Conocemos cada uno de ellos — muchos no aparecen en guías turísticas — y los incluimos en nuestras rutas.",
    details: [
      "Marisquerías de referencia con producto directo de lonja",
      "Pulperías, furanchos y tabernas con siglos de tradición",
      "Asadores de ternera gallega y lacón con grelos",
      "Restaurantes de producto donde come la gente del lugar",
    ],
  },
  {
    title: "Cenas privadas con chef y experiencias exclusivas",
    text: "Para quienes buscan ir más allá de una reserva en restaurante. Organizamos cenas privadas con chef en espacios únicos: la bodega de un pazo del siglo XVII, una terraza sobre la ría al atardecer, un comedor privado dentro de una bodega con las barricas como telón de fondo o una sala exclusiva en un restaurante con estrella. El chef diseña un menú a medida con el mejor producto de temporada, el sumiller selecciona los vinos y el servicio es totalmente privado. También experiencias como visitas a lonjas al amanecer para ver la subasta del marisco, desayunos en mercados de abastos y brunches en bodegas con vistas a los viñedos.",
    details: [
      "Cenas privadas con chef en pazos, bodegas o espacios exclusivos",
      "Menú a medida con producto de temporada y maridaje",
      "Visitas a lonjas al amanecer con subasta de marisco",
      "Brunches en bodegas y desayunos en mercados de abastos",
    ],
  },
];

const denominaciones = [
  {
    title: "Rías Baixas — Albariño",
    text: "La denominación de origen más internacional de Galicia. Vinos blancos de Albariño con carácter atlántico: frescos, aromáticos, con notas florales y minerales. Organizamos visitas a bodegas familiares de producción limitada y a grandes nombres que han puesto el Albariño en las cartas de los mejores restaurantes del mundo. Cada visita incluye recorrido por viñedos, explicación del enólogo y cata comentada con maridaje de mariscos y quesos gallegos.",
    subzonas: "O Salnés · Condado do Tea · O Rosal · Soutomaior · Val do Salnés",
  },
  {
    title: "Ribeira Sacra — Mencía",
    text: "Viticultura heroica en bancales sobre los cañones del río Sil. Los viñedos se plantan en pendientes de hasta 85 grados donde toda la vendimia se hace a mano. El resultado son vinos tintos de Mencía con personalidad única: intensos, elegantes, con notas de fruta roja y mineral. Muchas bodegas no están abiertas al público general. Nosotros abrimos esas puertas. La visita incluye navegación en catamarán por los cañones del Sil para ver los viñedos desde el río.",
    subzonas: "Amandi · Ribeiras do Sil · Chantada · Quiroga-Bibei",
  },
  {
    title: "Valdeorras — Godello",
    text: "La resurrección de una variedad casi perdida. El Godello de Valdeorras es uno de los blancos más elegantes de España: mineral, con estructura, capaz de envejecer y sorprender a los paladares más exigentes. Bodegas que están ganando premios internacionales y que aún se pueden visitar con la cercanía de un proyecto familiar. Valdeorras es también zona de pizarra, castaños centenarios y una gastronomía de interior potente.",
    subzonas: "O Barco de Valdeorras · A Rúa · Vilamartín",
  },
  {
    title: "Monterrei — Tintos y blancos de frontera",
    text: "La DO más meridional y continental de Galicia, en la frontera con Portugal. Clima más seco y cálido que produce vinos con más cuerpo y concentración. Blancos de Godello y Treixadura con estructura y tintos de Mencía y Bastardo con personalidad propia. Bodegas modernas con instalaciones espectaculares en un valle protegido por montañas. Zona menos conocida, más exclusiva y con un potencial enorme.",
    subzonas: "Val de Monterrei · Ladera de Monterrei",
  },
  {
    title: "Ribeiro — La tradición viva",
    text: "La denominación de origen más antigua de Galicia. Vinos blancos de coupage (Treixadura, Torrontés, Godello, Loureira) con una identidad propia que los distingue de cualquier otro blanco gallego. Bodegas centenarias en Ribadavia, capital histórica del vino gallego, donde el patrimonio y el vino se funden. Visita a bodegas con degustación y recorrido por el casco histórico medieval.",
    subzonas: "Ribadavia · Arnoia · Carballiño",
  },
];

const programas = [
  {
    title: "Ruta Michelin por Galicia",
    days: "3–5 días",
    description:
      "Recorrido gastronómico de lujo por los mejores restaurantes con estrella Michelin de Galicia. Cada día una zona diferente: costa, interior, ciudad. Comidas y cenas en restaurantes de autor con maridaje exclusivo de vinos gallegos. Alojamiento en hoteles boutique y pazos. Transporte premium con chófer.",
  },
  {
    title: "Ruta de bodegas y denominaciones de origen",
    days: "4–6 días",
    description:
      "Recorrido por las cinco denominaciones de origen de Galicia: Rías Baixas, Ribeira Sacra, Valdeorras, Monterrei y Ribeiro. Visitas privadas a bodegas de referencia con cata guiada por el enólogo. Comidas en restaurantes de producto de cada zona. Incluye navegación por los cañones del Sil y alojamiento en quintas vinícolas.",
  },
  {
    title: "Escapada gourmet de fin de semana",
    days: "2–3 días",
    description:
      "Fin de semana gastronómico intenso: cena de viernes en restaurante con estrella, sábado con visita a bodega, mercado de abastos y almuerzo en templo del producto. Domingo con brunch en pazo y visita a una segunda bodega. Alojamiento en hotel boutique o pazo con encanto. Transporte privado incluido.",
  },
];

const faqs = [
  {
    question: "¿Qué restaurantes con estrella Michelin hay en Galicia?",
    answer:
      "Galicia cuenta con más de una decena de restaurantes distinguidos por la guía Michelin, repartidos entre Santiago, A Coruña, Pontevedra, O Grove, Cambados, Ourense y otras localidades. Trabajamos con información actualizada y gestionamos reservas con antelación en todos ellos, incluyendo espacios privados y mesas del chef cuando están disponibles.",
  },
  {
    question: "¿Se pueden combinar experiencias gastronómicas con navegación o visitas culturales?",
    answer:
      "Es lo que mejor sabemos hacer. Una jornada típica combina una visita a bodega por la mañana, comida en restaurante de producto, navegación en velero por la ría por la tarde y cena en restaurante con estrella por la noche. Todo coordinado con transporte privado y sin prisas.",
  },
  {
    question: "¿Las experiencias gastronómicas se adaptan a restricciones alimentarias?",
    answer:
      "Siempre. Coordinamos con cada restaurante, bodega y proveedor para adaptar menús a intolerancias, alergias, dietas vegetarianas o cualquier necesidad. En restaurantes de alto nivel esto se gestiona previamente con el chef para que la experiencia sea igual de memorable.",
  },
  {
    question: "¿Cuánto cuesta una ruta gastronómica premium por Galicia?",
    answer:
      "El precio varía según la duración, el número de personas, los restaurantes incluidos y el tipo de alojamiento. Las rutas con restaurantes Michelin y bodegas premium tienen un nivel de inversión superior al de un viaje estándar. Enviamos presupuesto detallado y sin compromiso adaptado a cada grupo.",
  },
  {
    question: "¿Qué época del año es mejor para una ruta gastronómica?",
    answer:
      "Galicia tiene producto excepcional todo el año. El marisco es mejor en invierno (percebes, centollos, nécoras). La primavera y el otoño son ideales para bodegas y vendimia. El verano combina producto del mar con comer al aire libre. Cada temporada tiene sus joyas gastronómicas y adaptamos la ruta al calendario del producto.",
  },
  {
    question: "¿Para cuántas personas se organizan las experiencias?",
    answer:
      "Desde parejas hasta grupos de 20-30 personas. Los restaurantes con estrella suelen tener aforos limitados, por lo que para grupos grandes coordinamos reservas en varios turnos o seleccionamos espacios privados. Las visitas a bodegas se adaptan al tamaño del grupo con facilidad.",
  },
];

export default function GastronomiaBodegasGalicia() {
  return (
    <>
      <HeroPage
        title="Gastronomía y bodegas en Galicia"
        subtitle="Estrellas Michelin, templos del producto, bodegas premium y experiencias culinarias de lujo. Recorre Galicia a través de su gastronomía."
        imageSrc="/images/gastronomia-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Galicia, destino gastronómico de primer nivel</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Galicia es uno de los destinos gastronómicos más potentes de Europa. Más de una decena de restaurantes con estrella Michelin, cinco denominaciones de origen vinícolas con personalidad propia, un producto del mar que no tiene equivalente en ningún otro lugar del mundo y una tradición culinaria que convive con la vanguardia de los chefs más creativos de España. Pero lo que hace que la gastronomía gallega sea realmente especial no se encuentra solo en los restaurantes de manteles blancos: está también en la pulpería de pueblo, en el furancho donde sirven el vino de la última cosecha, en la marisquería de puerto donde el percebe llegó hace una hora y en la bodega familiar donde el enólogo te abre una botella que no está a la venta.
              </p>
              <p>
                En Suunia organizamos experiencias gastronómicas premium para viajeros que quieren conocer Galicia a través de su cocina, sus vinos y su producto. No se trata de comer bien — en Galicia eso es fácil —, se trata de acceder a los restaurantes, las bodegas y los productores que marcan la diferencia. Reservas preferentes en estrellas Michelin, cenas privadas con chef, visitas a bodegas que no abren al público, acceso a lonjas al amanecer y rutas diseñadas para recorrer Galicia parando en los mejores sitios de cada zona.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, conocemos personalmente a los chefs, los bodegueros y los productores. Cada experiencia se puede integrar en una <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">gran ruta por Galicia</Link>, un programa <Link href="/galicia-premium" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">Galicia Premium</Link>, un <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tour privado</Link> o combinarse con una <Link href="/nautica-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">ruta de navegación por las rías</Link>.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Imagen */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/tours-gastronomia.jpg"
                alt="Experiencia gastronómica premium en Galicia — maridaje de vinos y productos locales"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Experiencias premium */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Experiencias gastronómicas premium</h2>
              <p className="mt-4 text-lg text-gray-600">
                Estrellas Michelin, templos del producto y experiencias exclusivas. La gastronomía gallega al más alto nivel.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-12">
            {experiencias.map((exp) => (
              <AnimateOnScroll key={exp.title}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{exp.text}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {exp.details.map((d, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-600">
                        <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Denominaciones de origen */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Bodegas por denominación de origen</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cinco denominaciones de origen, cinco mundos vinícolas diferentes. Visitas privadas a bodegas de referencia con cata guiada por el enólogo.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-12">
            {denominaciones.map((doItem) => (
              <AnimateOnScroll key={doItem.title}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <h3 className="text-xl font-bold text-gray-900">{doItem.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{doItem.text}</p>
                  <p className="mt-4 text-sm font-medium text-atlantic-600">
                    Subzonas: {doItem.subzonas}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Programas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Programas gastronómicos de referencia</h2>
              <p className="mt-4 text-lg text-gray-600">
                Propuestas orientativas que se diseñan a medida según las preferencias del viajero.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {programas.map((prog) => (
              <AnimateOnScroll key={prog.title}>
                <div className="card-elegant flex h-full flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {prog.days}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {prog.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                    {prog.description}
                  </p>
                  <a
                    href="https://wa.me/34678288284"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 justify-center"
                  >
                    Solicitar propuesta
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué con Suunia */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué vivir la gastronomía gallega con Suunia</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "Acceso a lo que no se encuentra", text: "Bodegas que no abren al público, mesas de chef en restaurantes con estrella, furanchos que solo abren cuando hay cosecha, lonjas al amanecer. Años de relación con los mejores proveedores de Galicia nos permiten abrir puertas que no se abren al turismo convencional." },
                { title: "Conocimiento real del terreno", text: "No recomendamos por guías ni por reseñas online. Hemos comido en cada restaurante que sugerimos, visitado cada bodega y probado cada producto. Ese conocimiento de primera mano marca la diferencia entre comer bien y vivir una experiencia gastronómica memorable." },
                { title: "Todo coordinado al detalle", text: "Reservas con antelación, menús acordados, transporte con chófer (fundamental en rutas de bodegas), tiempos sin prisas y la flexibilidad para adaptar el programa sobre la marcha si un producto de temporada o una oportunidad especial lo merecen." },
              ].map((item) => (
                <div key={item.title} className="card-elegant">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Diseñamos una experiencia gastronómica a tu medida?"
        description="Cuéntanos qué tipo de gastronomía te interesa, cuántos sois y cuántos días tenéis. Preparamos una ruta con los mejores restaurantes y bodegas de Galicia. Sin compromiso."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre gastronomía en Galicia</h2>
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

      {/* JSON-LD Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Experiencias gastronómicas premium y visitas a bodegas en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Rutas gastronómicas por restaurantes con estrella Michelin, visitas a bodegas premium por denominación de origen, templos del producto, cenas privadas con chef y experiencias culinarias de lujo en Galicia.",
          }),
        }}
      />
    </>
  );
}
