import type { Metadata } from "next";
import Link from "next/link";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Viajes de incentivos y experiencias corporativas en Galicia",
  description:
    "Programas de incentivos para empresas en Galicia: team building, viajes de motivación, experiencias premium para equipos. Organización completa por Suunia.",
  alternates: { canonical: "https://suunia.com/incentivos-empresa-galicia" },
  openGraph: {
    title: "Incentivos y viajes corporativos en Galicia – Suunia",
    description:
      "Programas de incentivos, team building y experiencias premium para empresas en Galicia.",
    url: "https://suunia.com/incentivos-empresa-galicia",
    images: [{ url: "/images/experiencias-galicia.jpg", width: 1200, height: 630 }],
  },
};

const programas = [
  {
    title: "Programa de 1 día – Experiencia express",
    subtitle: "Ideal para equipos que disponen de una jornada completa",
    actividades: [
      "09:00 – Llegada y bienvenida en punto de encuentro (hotel, aeropuerto o estación)",
      "09:30 – Actividad de team building: regata en velero por la ría, gymkana gastronómica por Santiago o taller de cocina gallega competitivo",
      "13:30 – Almuerzo de grupo en restaurante seleccionado con menú especial",
      "15:30 – Visita guiada privada (Santiago de Compostela, bodega de Albariño o experiencia marinera)",
      "18:00 – Brindis de cierre y entrega de detalles gallegos para los participantes",
      "18:30 – Traslados de regreso",
    ],
    incluye: "Transporte, coordinación, actividad de team building, almuerzo, visita guiada, material y detalles.",
  },
  {
    title: "Programa de 2 días / 1 noche – Escapada corporativa",
    subtitle: "El formato más solicitado para viajes de incentivos",
    actividades: [
      "DÍA 1:",
      "Llegada y check-in en hotel con encanto o pazo gallego",
      "Actividad de team building a elegir: regata, kayak, taller gastronómico, escape room al aire libre",
      "Tiempo libre para disfrutar del hotel y la zona",
      "Cena de grupo en restaurante exclusivo con maridaje de vinos gallegos",
      "",
      "DÍA 2:",
      "Desayuno y check-out",
      "Visita cultural o experiencia gastronómica (visita guiada, ruta de tapas, bodega)",
      "Almuerzo en restaurante con vistas",
      "Actividad de cierre: navegación en barco privado por la ría o visita a mercado local",
      "Brindis de despedida y traslados",
    ],
    incluye: "Alojamiento, transporte completo, 2 actividades de team building, comidas, visitas, coordinación y soporte.",
  },
  {
    title: "Programa de 3 días / 2 noches – Experiencia completa",
    subtitle: "Para empresas que quieren una experiencia inmersiva en Galicia",
    actividades: [
      "DÍA 1:",
      "Llegada y bienvenida con cocktail en hotel",
      "Actividad de team building competitiva (regata, cooking challenge o gymkana)",
      "Cena de bienvenida en restaurante con vistas",
      "",
      "DÍA 2:",
      "Excursión de día completo: Rías Baixas con navegación, visita a bateas, almuerzo marinero",
      "Tarde: visita a bodega de Albariño con cata privada",
      "Noche libre con recomendaciones personalizadas",
      "",
      "DÍA 3:",
      "Visita guiada a Santiago de Compostela (catedral, casco histórico, mercado de abastos)",
      "Almuerzo de despedida en restaurante gastronómico",
      "Entrega de obsequios y traslados",
    ],
    incluye: "Alojamiento 2 noches, transporte completo, todas las actividades, comidas principales, guías, coordinación y soporte.",
  },
];

export default function IncentivosEmpresaGalicia() {
  return (
    <>
      <HeroPage
        title="Viajes de incentivos y experiencias corporativas en Galicia"
        subtitle="Programas motivacionales para equipos que combinan actividades exclusivas, gastronomía de primer nivel y la naturaleza atlántica de Galicia."
        imageSrc="/images/experiencias-galicia.jpg"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section">Galicia como destino de incentivos: mucho más que un viaje</h2>
          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Un viaje de incentivos bien organizado es una de las herramientas más potentes para motivar equipos, premiar resultados y reforzar la cultura de empresa. Pero para que funcione de verdad, necesita un destino que sorprenda, una logística impecable y experiencias que dejen huella. Galicia ofrece todo eso.
            </p>
            <p>
              En Suunia diseñamos programas de incentivos para empresas que van más allá del típico hotel con spa y cena de gala. Creamos experiencias auténticas que conectan al equipo con el territorio: navegar por las rías, cocinar en grupo con un chef local, competir en una regata de veleros, recorrer viñedos al atardecer o descubrir los secretos de Santiago de Compostela con nuestros <Link href="/tours-privados-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">tours privados guiados</Link>.
            </p>
            <p>
              Cada programa se diseña a medida según los objetivos de la empresa, el perfil del grupo, el presupuesto y las fechas. No vendemos paquetes cerrados: construimos experiencias que tienen sentido para cada equipo. Como <Link href="/receptivo-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">agencia receptiva en Galicia</Link>, nos encargamos de absolutamente todo: desde la <Link href="/logistica-servicios-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">logística y el transporte</Link> hasta el último detalle. Para grupos más grandes, consulta también nuestros <Link href="/viajes-grupos-galicia" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">viajes organizados para grupos</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué Galicia para incentivos */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">¿Por qué Galicia para un viaje de incentivos?</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Destino diferente", text: "Galicia sorprende porque no es el destino típico de sol y playa. Ofrece algo que pocos territorios pueden igualar: autenticidad, gastronomía excepcional y paisajes atlánticos que impresionan." },
              { title: "Variedad de actividades", text: "Desde actividades náuticas hasta talleres gastronómicos, desde rutas culturales hasta experiencias en la naturaleza. Galicia permite diseñar programas variados y equilibrados." },
              { title: "Gastronomía de primer nivel", text: "Marisco, pulpo, empanada, Albariño, Mencía... La gastronomía gallega es un argumento de venta en sí mismo. Las cenas de grupo en Galicia se recuerdan durante años." },
              { title: "Logística accesible", text: "Aeropuertos en Santiago y Vigo con conexiones nacionales e internacionales. Distancias manejables entre puntos de interés. Buena red hotelera y de servicios." },
              { title: "Relación calidad-precio", text: "Galicia ofrece experiencias de altísima calidad a precios significativamente más bajos que otros destinos de incentivos en España y Europa." },
              { title: "No masificado", text: "A diferencia de Barcelona, Madrid o las islas, Galicia mantiene su autenticidad. Los equipos disfrutan de experiencias genuinas, sin aglomeraciones ni turismo masivo." },
            ].map((item) => (
              <div key={item.title} className="card-elegant">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actividades de team building */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Actividades de team building en Galicia</h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Experiencias diseñadas para fortalecer la cohesión de equipo en un entorno natural y estimulante.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Regata de veleros", text: "Competición por equipos en veleros en la ría. Cada equipo aprende a navegar con un patrón profesional y compite en una regata amistosa. Incluye trofeo y brindis de cierre." },
              { title: "Cooking challenge", text: "Taller de cocina competitivo con ingredientes gallegos. Los equipos preparan platos típicos bajo la supervisión de un chef y un jurado decide el ganador." },
              { title: "Gymkana por Santiago", text: "Recorrido por el casco histórico resolviendo pruebas culturales, gastronómicas y de ingenio. Una forma divertida de conocer la ciudad mientras se trabaja en equipo." },
              { title: "Kayak y aventura en la ría", text: "Actividad en kayak por la ría con pruebas de orientación y trabajo en equipo. Combinable con marisqueo o picnic en playa privada." },
              { title: "Cata competitiva de vinos", text: "Visita a bodega con cata a ciegas por equipos. Los participantes aprenden sobre vinos gallegos mientras compiten por identificar variedades y añadas." },
              { title: "Experiencia marinera", text: "Jornada en un barco de pesca tradicional, aprendiendo las artes de pesca de la ría, con marisqueo y preparación del producto capturado para el almuerzo." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-100 bg-white p-6">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas ejemplo */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Ejemplos de programas de incentivos</h2>
            <p className="mt-4 text-lg text-gray-600">
              Estos programas son orientativos. Cada uno se adapta y personaliza según las necesidades de la empresa.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            {programas.map((prog) => (
              <div key={prog.title} className="card-elegant">
                <span className="text-xs font-semibold uppercase tracking-wider text-atlantic-600">
                  {prog.subtitle}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {prog.title}
                </h3>
                <div className="mt-6 space-y-2">
                  {prog.actividades.map((act, i) =>
                    act === "" ? (
                      <div key={i} className="h-2" />
                    ) : act.endsWith(":") ? (
                      <p key={i} className="mt-4 font-semibold text-gray-800">
                        {act}
                      </p>
                    ) : (
                      <p key={i} className="text-sm leading-relaxed text-gray-600">
                        {act}
                      </p>
                    )
                  )}
                </div>
                <p className="mt-6 text-sm font-medium text-atlantic-700">
                  Incluye: {prog.incluye}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MilEventosGalicia */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-section">Eventos corporativos con MilEventosGalicia</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Para eventos corporativos más complejos que incluyan producción, montaje, catering de gala, entretenimiento o escenografía, trabajamos con MilEventosGalicia, nuestra empresa partner especializada en la producción de eventos de empresa. Ellos se encargan de la parte de evento y nosotros de toda la logística de viaje, transporte y experiencias.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Juntos cubrimos todo el espectro: desde un viaje de incentivos con cena de gala hasta una convención con jornadas de trabajo y actividades lúdicas. Una sola llamada para organizar todo.
          </p>
          <a
            href="https://wa.me/34678288284"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Consultar programa de incentivos
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Organizamos el próximo incentivo de tu empresa en Galicia?"
        description="Cuéntanos el perfil de tu equipo, las fechas y el presupuesto orientativo. Te preparamos una propuesta personalizada que sorprenderá a tu equipo."
      />

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">Preguntas frecuentes sobre viajes de incentivos</h2>
          <div className="mt-12 space-y-8">
            {[
              {
                question: "¿Qué es exactamente un viaje de incentivos para empresas?",
                answer: "Un viaje de incentivos es un programa de viaje organizado por una empresa para premiar, motivar o fidelizar a sus empleados, equipos comerciales o clientes. Incluye experiencias exclusivas, actividades de team building, gastronomía de nivel y logística completa. El objetivo es generar un impacto emocional que refuerce la vinculación con la empresa y mejore el rendimiento.",
              },
              {
                question: "¿Cuántas personas pueden participar en un programa de incentivos?",
                answer: "Trabajamos con grupos desde 10 hasta más de 150 personas. El tamaño del grupo condiciona el tipo de actividades, los alojamientos y la logística, pero tenemos experiencia gestionando programas de cualquier escala. Para cada tamaño de grupo diseñamos la propuesta óptima.",
              },
              {
                question: "¿Se pueden personalizar las actividades de team building?",
                answer: "Absolutamente. Todas las actividades se adaptan al perfil del grupo, los objetivos de la empresa y el nivel de exigencia física. Podemos diseñar desde una regata competitiva para equipos deportivos hasta un taller de cocina relajado para un equipo directivo. Cada actividad se plantea en función de lo que la empresa quiere conseguir.",
              },
              {
                question: "¿Cuánto cuesta un viaje de incentivos en Galicia?",
                answer: "El presupuesto varía según la duración, el número de personas, el tipo de alojamiento y las actividades incluidas. Galicia ofrece una relación calidad-precio excelente comparada con otros destinos de incentivos. Te enviamos un presupuesto detallado y sin compromiso adaptado a las necesidades de tu empresa.",
              },
              {
                question: "¿Con cuánta antelación hay que organizar un incentivo?",
                answer: "Lo recomendable es comenzar la planificación con 2-3 meses de antelación, especialmente para grupos grandes o en temporada alta. Para programas más sencillos o grupos pequeños, podemos trabajar con plazos más cortos. Cuanto antes nos contactes, más opciones de alojamiento y actividades podremos garantizar.",
              },
              {
                question: "¿Podéis gestionar también la parte de evento corporativo (producción, escenografía, catering)?",
                answer: "Sí. Para eventos corporativos que requieran producción, montaje, catering de gala o entretenimiento, trabajamos con MilEventosGalicia, nuestra empresa partner especializada en producción de eventos. Ellos se encargan de la parte de evento y nosotros de toda la logística de viaje, transporte y experiencias. Una sola llamada para organizarlo todo.",
              },
            ].map((faq, i) => (
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
            mainEntity: [
              { question: "¿Qué es exactamente un viaje de incentivos para empresas?", answer: "Un viaje de incentivos es un programa de viaje organizado por una empresa para premiar, motivar o fidelizar a sus empleados, equipos comerciales o clientes. Incluye experiencias exclusivas, actividades de team building, gastronomía de nivel y logística completa. El objetivo es generar un impacto emocional que refuerce la vinculación con la empresa y mejore el rendimiento." },
              { question: "¿Cuántas personas pueden participar en un programa de incentivos?", answer: "Trabajamos con grupos desde 10 hasta más de 150 personas. El tamaño del grupo condiciona el tipo de actividades, los alojamientos y la logística, pero tenemos experiencia gestionando programas de cualquier escala. Para cada tamaño de grupo diseñamos la propuesta óptima." },
              { question: "¿Se pueden personalizar las actividades de team building?", answer: "Absolutamente. Todas las actividades se adaptan al perfil del grupo, los objetivos de la empresa y el nivel de exigencia física. Podemos diseñar desde una regata competitiva para equipos deportivos hasta un taller de cocina relajado para un equipo directivo. Cada actividad se plantea en función de lo que la empresa quiere conseguir." },
              { question: "¿Cuánto cuesta un viaje de incentivos en Galicia?", answer: "El presupuesto varía según la duración, el número de personas, el tipo de alojamiento y las actividades incluidas. Galicia ofrece una relación calidad-precio excelente comparada con otros destinos de incentivos. Te enviamos un presupuesto detallado y sin compromiso adaptado a las necesidades de tu empresa." },
              { question: "¿Con cuánta antelación hay que organizar un incentivo?", answer: "Lo recomendable es comenzar la planificación con 2-3 meses de antelación, especialmente para grupos grandes o en temporada alta. Para programas más sencillos o grupos pequeños, podemos trabajar con plazos más cortos. Cuanto antes nos contactes, más opciones de alojamiento y actividades podremos garantizar." },
              { question: "¿Podéis gestionar también la parte de evento corporativo (producción, escenografía, catering)?", answer: "Sí. Para eventos corporativos que requieran producción, montaje, catering de gala o entretenimiento, trabajamos con MilEventosGalicia, nuestra empresa partner especializada en producción de eventos. Ellos se encargan de la parte de evento y nosotros de toda la logística de viaje, transporte y experiencias. Una sola llamada para organizarlo todo." },
            ].map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Viajes de incentivos para empresas en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: { "@type": "Place", name: "Galicia, España" },
            description:
              "Programas de incentivos, team building y experiencias corporativas en Galicia. Diseño a medida, coordinación completa y experiencias premium.",
          }),
        }}
      />
    </>
  );
}
