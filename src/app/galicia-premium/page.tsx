import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Galicia Premium — Experiencias exclusivas y viajes de lujo en Galicia",
  description:
    "Viajes premium en Galicia: alojamientos de lujo, gastronomía de autor, experiencias privadas y accesos exclusivos. Organizados por Suunia, tu agencia receptiva local.",
  alternates: { canonical: "https://suunia.com/galicia-premium" },
  openGraph: {
    title: "Galicia Premium – Suunia",
    description:
      "Experiencias exclusivas en Galicia: lujo, gastronomía de autor, privacidad y atención personalizada.",
    url: "https://suunia.com/galicia-premium",
    images: [{ url: "/images/gastronomia-galicia.jpg", width: 1200, height: 630 }],
  },
};

const experiencias = [
  {
    title: "Alojamientos de lujo",
    text: "Pazos restaurados del siglo XVII con jardines de camelias, hoteles boutique frente al Atlántico, quintas vinícolas con bodega propia y las mejores suites de Galicia. No trabajamos con cadenas: seleccionamos alojamientos con personalidad, historia y un nivel de servicio que justifica cada noche.",
    details: [
      "Pazos señoriales con encanto e historia",
      "Hoteles boutique y relais con spa privado",
      "Quintas vinícolas en Rías Baixas y Ribeira Sacra",
      "Suites con vistas al Atlántico o a las rías",
    ],
  },
  {
    title: "Gastronomía de autor",
    text: "Galicia cuenta con restaurantes con estrella Michelin, chefs que reinventan la cocina gallega tradicional y productos de una calidad difícil de encontrar en otro lugar del mundo. Organizamos cenas privadas con chef, maridajes exclusivos en bodegas cerradas al público, visitas a lonjas al amanecer y experiencias culinarias que van mucho más allá de una buena comida.",
    details: [
      "Cenas privadas con chef en pazos o bodegas",
      "Restaurantes con estrella Michelin y reserva preferente",
      "Maridajes exclusivos con vinos de producción limitada",
      "Visita a lonjas al amanecer con los pescadores",
    ],
  },
  {
    title: "Experiencias privadas y exclusivas",
    text: "Lo que diferencia un viaje premium no es solo dónde duermes o dónde comes. Es acceder a experiencias que no están al alcance del turismo convencional. Navegación en velero privado al atardecer, catas en bodegas que no abren al público, visitas a pazos privados con sus propietarios, acceso a zonas restringidas de las Islas Atlánticas o un recorrido nocturno por la catedral de Santiago sin nadie más.",
    details: [
      "Navegación en velero privado por las rías",
      "Catas en bodegas cerradas al público general",
      "Visitas a pazos privados con los propietarios",
      "Accesos especiales a monumentos fuera de horario",
    ],
  },
  {
    title: "Transporte y atención VIP",
    text: "Vehículos de alta gama con chófer profesional, asistencia personal permanente, coordinación integral de cada jornada y la tranquilidad de tener un interlocutor único que resuelve todo. El viajero premium no quiere preocuparse de nada: ni de horarios, ni de reservas, ni de imprevistos. Eso es exactamente lo que ofrecemos.",
    details: [
      "Vehículos de alta gama con chófer privado",
      "Asistente personal durante todo el viaje",
      "Coordinación integral y resolución de imprevistos",
      "Transfers VIP desde aeropuerto o estación",
    ],
  },
];

const programas = [
  {
    title: "Escapada premium 2 noches",
    days: "3 días / 2 noches",
    description:
      "Llegada y check-in en pazo con encanto. Cena privada con chef y maridaje de Albariño. Segundo día con tour privado por Santiago o la Costa da Morte y almuerzo en restaurante con estrella Michelin. Navegación al atardecer por la ría. Tercer día con visita a bodega exclusiva y brunch de despedida.",
  },
  {
    title: "Galicia Premium completa",
    days: "5–7 días",
    description:
      "El programa más completo para quienes buscan lo mejor de Galicia sin concesiones. Combina los mejores alojamientos, restaurantes de autor, experiencias privadas y accesos exclusivos en un itinerario que recorre costa e interior. Cada día está diseñado para sorprender sin saturar.",
  },
  {
    title: "Premium para parejas",
    days: "A medida",
    description:
      "Viajes románticos diseñados para parejas que buscan privacidad, exclusividad y momentos especiales. Alojamientos íntimos, cenas privadas, navegación en velero y experiencias pensadas para compartir. Ideal para aniversarios, celebraciones o simplemente para regalar un viaje inolvidable.",
  },
];

const faqs = [
  {
    question: "¿Qué diferencia a Galicia Premium de un tour privado convencional?",
    answer:
      "Un tour privado ofrece guía local y transporte adaptado al grupo. Galicia Premium va más allá: alojamientos de lujo seleccionados individualmente, gastronomía de autor con reservas en restaurantes exclusivos, experiencias que no están disponibles para el turismo general (accesos privados, navegaciones exclusivas, visitas a bodegas cerradas), asistente personal durante todo el viaje y un nivel de atención al detalle que cuida cada momento del programa.",
  },
  {
    question: "¿Para cuántas personas está pensado Galicia Premium?",
    answer:
      "Galicia Premium funciona especialmente bien para parejas, familias y grupos reducidos de hasta 8-10 personas. Para grupos más grandes, adaptamos el concepto premium a formatos que permitan mantener la exclusividad: eventos privados en pazos, cenas de grupo en espacios cerrados, navegaciones en embarcaciones más grandes. Todo se puede adaptar.",
  },
  {
    question: "¿Cuánto cuesta un viaje Galicia Premium?",
    answer:
      "El precio varía según la duración, el número de personas y las experiencias incluidas. Cada programa se presupuesta de forma individualizada. Como referencia, los programas premium tienen un nivel de inversión superior al de nuestros tours estándar porque incluyen alojamientos, restaurantes y experiencias de gama alta. Enviamos presupuesto detallado y sin compromiso.",
  },
  {
    question: "¿Con cuánta antelación debo reservar?",
    answer:
      "Los programas premium requieren más tiempo de preparación porque trabajamos con proveedores exclusivos que tienen disponibilidad limitada. Recomendamos contactarnos con al menos 6-8 semanas de antelación, y hasta 3 meses en temporada alta (junio-septiembre). Para fechas especiales como Semana Santa o puentes, cuanto antes mejor.",
  },
  {
    question: "¿Puedo regalar un viaje Galicia Premium?",
    answer:
      "Sí, y es una de las opciones más valoradas por nuestros clientes. Preparamos una propuesta personalizada que se puede presentar como regalo: con documentación elegante, un programa detallado y toda la flexibilidad para que quien recibe el regalo elija las fechas que mejor le convengan.",
  },
];

export default function GaliciaPremium() {
  return (
    <>
      <HeroPage
        title="Galicia Premium"
        subtitle="Para quienes buscan lo mejor de Galicia. Experiencias exclusivas, privacidad absoluta y una atención que cuida cada detalle."
        imageSrc="/images/gastronomia-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">Galicia como nunca la has vivido</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Galicia tiene todo lo que un viajero exigente puede buscar: una gastronomía que compite con las mejores regiones del mundo, una costa atlántica de una belleza salvaje que no se encuentra en el Mediterráneo, un patrimonio cultural milenario y una autenticidad que los destinos más conocidos han perdido hace tiempo. Lo que le faltaba era alguien que supiera mostrar todo eso al nivel que merece.
              </p>
              <p>
                Galicia Premium es nuestra línea de viajes para viajeros que buscan exclusividad, privacidad y experiencias que van más allá de lo convencional. No se trata solo de dormir en el mejor hotel o comer en el restaurante más caro: se trata de vivir Galicia desde dentro, con accesos que no están al alcance del turismo general y con la atención de un equipo que cuida cada detalle del viaje.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, conocemos a los mejores proveedores, los rincones más exclusivos y las personas que hacen posible experiencias irrepetibles. Cada programa premium se diseña desde cero combinando <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link> con servicios de alta gama, y se puede integrar en una <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">gran ruta por Galicia</Link> de varios días.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Experiencias */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Qué incluye una experiencia premium</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cada elemento del viaje está seleccionado para ofrecer lo mejor de Galicia. Sin concesiones.
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

      {/* Programas ejemplo */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Programas premium de referencia</h2>
              <p className="mt-4 text-lg text-gray-600">
                Estos programas son propuestas orientativas. Cada viaje premium se diseña desde cero según las preferencias del viajero.
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

      {/* Por qué Premium con Suunia */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué elegir Galicia Premium con Suunia</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "Accesos que otros no tienen", text: "Años de relación con los mejores proveedores de Galicia nos permiten abrir puertas que no se abren al turismo convencional. Pazos privados, bodegas cerradas, experiencias fuera de catálogo." },
                { title: "Un interlocutor único", text: "No tendrás que hablar con diez proveedores diferentes. Suunia coordina todo: alojamiento, transporte, restaurantes, actividades y cualquier petición especial. Un solo contacto para todo el viaje." },
                { title: "Atención al detalle", text: "Desde las flores en la habitación hasta la mesa con mejor vista del restaurante. Cuidamos los detalles que convierten un buen viaje en una experiencia memorable. Lo que no se ve es lo que más se nota." },
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
        title="¿Buscas una experiencia premium en Galicia?"
        description="Cuéntanos qué tipo de viaje tienes en mente y te diseñamos una propuesta exclusiva. Sin compromiso, sin prisas, a tu medida."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre Galicia Premium</h2>
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
            serviceType: "Viajes premium y experiencias exclusivas en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Viajes premium en Galicia con alojamientos de lujo, gastronomía de autor, experiencias privadas y accesos exclusivos. Programas a medida organizados por una agencia receptiva local.",
          }),
        }}
      />
    </>
  );
}
