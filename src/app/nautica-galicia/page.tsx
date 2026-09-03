import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Experiencias náuticas en Galicia — Navegación, kayak y mar",
  description:
    "Actividades náuticas en Galicia: navegación en velero, kayak por las rías, marisqueo, avistamiento de cetáceos y paseos en barco. Organizadas por Suunia.",
  alternates: { canonical: "https://suunia.com/nautica-galicia" },
  openGraph: {
    title: "Náutica en Galicia – Suunia",
    description:
      "Navegación, kayak, marisqueo y experiencias en el mar atlántico gallego.",
    url: "https://suunia.com/nautica-galicia",
    images: [{ url: "/images/ruta-mar-galicia.jpg", width: 1200, height: 630 }],
  },
};

const actividades = [
  {
    title: "Navegación en velero por las rías",
    text: "Las rías gallegas ofrecen unas condiciones de navegación privilegiadas: aguas protegidas, viento constante y paisajes que cambian a cada milla. Organizamos salidas en velero con patrón profesional desde media jornada hasta travesías de varios días por la costa atlántica. Se puede combinar con fondeo en calas aisladas, baño en playas a las que solo se accede desde el mar y comida a bordo con marisco recién traído de las bateas. Para viajes premium, veleros exclusivos con tripulación y servicio completo.",
    details: [
      "Salidas de medio día, jornada completa o travesías",
      "Veleros privados con patrón profesional",
      "Fondeo en calas y playas inaccesibles por tierra",
      "Opción premium con tripulación y catering a bordo",
    ],
  },
  {
    title: "Kayak y paddle surf en las rías",
    text: "Recorrer las rías en kayak es una de las mejores formas de descubrir la costa gallega a un ritmo diferente. Organizamos rutas guiadas por calas, playas, acantilados y zonas de bateas con monitor profesional y todo el material incluido. Hay rutas para todos los niveles, desde salidas tranquilas por aguas calmas hasta recorridos más exigentes por la costa abierta. También paddle surf en las rías y playas más protegidas, ideal como actividad de grupo o experiencia de team building.",
    details: [
      "Rutas guiadas con monitor y material incluido",
      "Itinerarios para todos los niveles de experiencia",
      "Recorridos por calas, bateas y acantilados",
      "Paddle surf en playas protegidas y rías",
    ],
  },
  {
    title: "Marisqueo en la ría",
    text: "Una experiencia que conecta directamente con la tradición marinera de Galicia. Las mariscadoras de la ría enseñan a recoger almejas, berberechos y otros moluscos con las técnicas que llevan usando generaciones. Después, degustación de lo recogido con vino Albariño. Es una actividad que funciona especialmente bien para grupos, familias y programas de incentivos porque combina actividad al aire libre, cultura local y gastronomía en una misma experiencia.",
    details: [
      "Marisqueo con mariscadoras locales en la ría",
      "Recogida de almejas, berberechos y navajas",
      "Degustación posterior con vino Albariño",
      "Ideal para grupos, familias e incentivos de empresa",
    ],
  },
  {
    title: "Avistamiento de cetáceos",
    text: "Las aguas atlánticas frente a la costa gallega son zona de paso y alimentación de delfines, marsopas y, en determinadas épocas, rorcuales y otros cetáceos. Organizamos salidas en barco con biólogo marino a bordo que explica las especies, el ecosistema y las condiciones del Atlántico. Las salidas se hacen desde puertos de las Rías Baixas y la Costa da Morte, y se pueden combinar con una ruta de navegación o una comida en un restaurante costero.",
    details: [
      "Salidas en barco con biólogo marino a bordo",
      "Delfines, marsopas y cetáceos del Atlántico",
      "Desde puertos de Rías Baixas y Costa da Morte",
      "Combinable con navegación y comida en costa",
    ],
  },
  {
    title: "Paseos en barco y catamarán",
    text: "Para quienes buscan una experiencia más relajada en el agua sin necesidad de actividad deportiva. Organizamos paseos en barco y catamarán por las rías gallegas con paradas en puntos de interés: bateas de mejillones, islas Atlánticas, faros, acantilados y pueblos costeros. También paseos fluviales por la Ribeira Sacra, navegando entre los cañones del Sil con los viñedos en bancales como telón de fondo.",
    details: [
      "Paseos por las rías con paradas en bateas e islas",
      "Catamarán por las Islas Atlánticas (Cíes, Ons)",
      "Navegación fluvial por los cañones del Sil",
      "Formato relajado apto para todos los públicos",
    ],
  },
];

const zonas = [
  {
    title: "Rías Baixas",
    text: "La zona náutica por excelencia. Aguas protegidas, playas de arena blanca, bateas de mejillones e islas Atlánticas. Puertos deportivos en Sanxenxo, Portonovo, Baiona y Vigo.",
  },
  {
    title: "Costa da Morte",
    text: "Acantilados, faros legendarios y una costa atlántica sin domesticar. Navegación con carácter, ideal para velero y avistamiento de cetáceos.",
  },
  {
    title: "Rías Altas",
    text: "Menos transitada y más salvaje. Playas inmensas, acantilados espectaculares y puertos pesqueros auténticos. Kayak y navegación en un entorno natural intacto.",
  },
  {
    title: "Ribeira Sacra (fluvial)",
    text: "Navegación por el río Sil entre cañones de más de 500 metros de profundidad. Una experiencia única que se combina con visitas a bodegas y monasterios.",
  },
];

const faqs = [
  {
    question: "¿Qué nivel de experiencia necesito para las actividades náuticas?",
    answer:
      "Ninguno. Todas las actividades se organizan con profesionales certificados — patrones de embarcación, monitores de kayak, biólogos marinos — y están adaptadas a participantes sin experiencia previa. Para actividades como el kayak ofrecemos rutas de diferentes niveles según la forma física y la experiencia del grupo.",
  },
  {
    question: "¿Se pueden hacer actividades náuticas con niños?",
    answer:
      "Sí. Las salidas en barco, los paseos en catamarán, el marisqueo y las rutas de kayak en aguas tranquilas son perfectamente aptas para familias con niños. Adaptamos la duración y la intensidad a la edad del grupo. El material de seguridad infantil está siempre incluido.",
  },
  {
    question: "¿Qué época del año es mejor para las experiencias náuticas?",
    answer:
      "De mayo a octubre es la temporada más favorable por las condiciones meteorológicas y la temperatura del agua. Julio, agosto y septiembre son los meses con más horas de sol. Sin embargo, algunas actividades como la navegación en velero o el avistamiento de cetáceos pueden hacerse durante casi todo el año en las Rías Baixas.",
  },
  {
    question: "¿Se pueden combinar actividades náuticas con otras experiencias?",
    answer:
      "Sí, y de hecho es lo más habitual. Una jornada de navegación se combina con una comida en marisquería, una visita a bodegas o una excursión cultural. También integramos actividades náuticas en programas de varios días, grandes rutas y viajes de incentivos para empresas.",
  },
  {
    question: "¿Qué pasa si el tiempo no acompaña?",
    answer:
      "Monitorizamos las condiciones meteorológicas con antelación y siempre tenemos un plan alternativo preparado. Si una actividad no puede hacerse por seguridad, la sustituimos por otra experiencia de calidad equivalente o se reprograma. El grupo nunca se queda sin plan.",
  },
];

export default function NauticaGalicia() {
  return (
    <>
      <HeroPage
        title="Experiencias náuticas en Galicia"
        subtitle="Velero, kayak, marisqueo y actividades en el mar. Galicia se vive desde el agua."
        imageSrc="/images/ruta-mar-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="heading-section">El mar como parte del viaje</h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Galicia tiene más de 1.600 kilómetros de costa, rías que se adentran en la tierra como fiordos atlánticos, islas declaradas Parque Nacional y una tradición marinera que forma parte de su identidad más profunda. Vivir Galicia sin pisar el agua es perderse una parte esencial de lo que hace este destino diferente a cualquier otro.
              </p>
              <p>
                Organizamos actividades náuticas como parte de <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes en grupo</Link>, <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados</Link>, <Link href="/grandes-rutas-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">grandes rutas</Link> o programas de <Link href="/incentivos-empresa-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">incentivos para empresas</Link>. También como experiencias independientes para quienes ya están en Galicia y quieren un día en el mar diferente.
              </p>
              <p>
                Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva local</Link>, trabajamos con los mejores proveedores náuticos de cada zona: patrones de velero con años de experiencia, empresas de kayak que conocen cada cala y mariscadoras que llevan generaciones trabajando la ría. Todo profesional, todo seguro, todo auténtico.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Actividades detalladas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Actividades náuticas en Galicia</h2>
              <p className="mt-4 text-lg text-gray-600">
                Desde navegación en velero hasta marisqueo en la ría. Cada actividad incluye material, profesional y seguro.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-14 space-y-12">
            {actividades.map((act) => (
              <AnimateOnScroll key={act.title}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                  <h3 className="text-xl font-bold text-gray-900">{act.title}</h3>
                  <p className="mt-4 leading-relaxed text-gray-600">{act.text}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {act.details.map((d, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-600">
                        <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-atlantic-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* Zonas náuticas */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Dónde navegar en Galicia</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cada tramo de costa tiene su propio carácter. Te ayudamos a elegir la mejor zona según lo que busques.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {zonas.map((zona) => (
              <AnimateOnScroll key={zona.title}>
                <div className="card-elegant">
                  <h3 className="font-semibold text-gray-900">{zona.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{zona.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué con Suunia */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <h2 className="heading-section text-center">Por qué organizar actividades náuticas con Suunia</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "Proveedores profesionales", text: "Todos nuestros proveedores náuticos están certificados, asegurados y operan con embarcaciones en perfecto estado. Llevamos años trabajando con ellos y conocemos su nivel de servicio." },
                { title: "Plan B garantizado", text: "El Atlántico manda. Si las condiciones no permiten una actividad, siempre hay una alternativa preparada de calidad equivalente. El grupo nunca se queda sin experiencia." },
                { title: "Integración total", text: "Las actividades náuticas se coordinan con el resto del programa: transporte, comidas, tiempos de descanso. No es una actividad suelta, es parte de una experiencia bien pensada." },
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
        title="¿Quieres una experiencia náutica en Galicia?"
        description="Cuéntanos qué tipo de actividad os interesa, cuántos sois y en qué zona estaréis. Te preparamos una propuesta con los mejores proveedores de la costa."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre actividades náuticas</h2>
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
            serviceType: "Experiencias náuticas y actividades marítimas en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Navegación en velero, kayak, marisqueo, avistamiento de cetáceos y paseos en barco por las rías gallegas. Organizadas por una agencia receptiva local.",
          }),
        }}
      />
    </>
  );
}
