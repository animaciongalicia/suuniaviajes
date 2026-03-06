import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const experiencias = [
  {
    title: "Rutas gastronómicas",
    description:
      "Marisquerías, pulperías, bodegas de Albariño y mercados locales. La gastronomía gallega es una experiencia sensorial completa que conecta con la cultura y la tradición de cada comarca.",
    image: "/images/gastronomia-galicia.jpg",
    href: "/tours-privados-galicia",
  },
  {
    title: "Costa Atlántica y mar",
    description:
      "Navegación por las Rías Baixas, visita a las Islas Cíes, paseos en barco con patrón privado y experiencias marineras. Galicia es mar, y desde el mar se entiende su esencia.",
    image: "/images/ruta-mar-galicia.jpg",
    href: "/viajes-grupos-galicia",
  },
  {
    title: "Cultura y patrimonio",
    description:
      "Santiago de Compostela, la Costa da Morte, pazos gallegos y rincones con siglos de historia. Recorridos diseñados para descubrir el patrimonio vivo de Galicia con guías locales.",
    image: "/images/experiencias-galicia.jpg",
    href: "/receptivo-galicia",
  },
];

const servicios = [
  {
    title: "Viajes para grupos",
    description:
      "Organizamos viajes completos para grupos privados, asociaciones y colectivos. Diseñamos cada programa según vuestras preferencias, gestionamos toda la logística y os acompañamos durante el viaje.",
    href: "/viajes-grupos-galicia",
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Incentivos y viajes corporativos",
    description:
      "Programas de incentivos, team building y experiencias premium para empresas. Creamos viajes motivacionales que combinan actividades exclusivas, gastronomía y naturaleza en un entorno único.",
    href: "/incentivos-empresa-galicia",
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Tours privados",
    description:
      "Experiencias personalizadas para parejas, familias o grupos reducidos. Desde rutas del vino hasta navegación por las Rías, cada tour se adapta a vuestros intereses y ritmo.",
    href: "/tours-privados-galicia",
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "Servicios logísticos",
    description:
      "Transporte VIP, traslados aeropuerto, alquiler de barcos con patrón, coordinación de proveedores y soporte operativo completo. Todo lo que necesitas para que tu evento o viaje funcione sin contratiempos.",
    href: "/logistica-servicios-galicia",
    icon: (
      <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

const partners = [
  {
    name: "SeaGalicia",
    description:
      "Experiencias náuticas y alquiler de barcos con patrón en las Rías Baixas y la costa atlántica gallega.",
  },
  {
    name: "LuxeGalicia",
    description:
      "Transporte VIP, vehículos premium y traslados privados en toda Galicia con conductores profesionales.",
  },
  {
    name: "MilEventosGalicia",
    description:
      "Organización de eventos corporativos, cenas de gala, team building y producción de experiencias para empresas.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden lg:min-h-[75vh]">
        <Image
          src="/images/hero-galicia.jpg"
          alt="Paisaje de la costa atlántica de Galicia"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-white lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-300">
            Agencia receptiva · DMC Galicia
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Agencia receptiva en Galicia para viajes, experiencias y eventos
            corporativos
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
            Somos tu partner local en Galicia. Organizamos viajes para grupos,
            tours privados, programas de incentivos y toda la logística para que
            cada experiencia sea memorable.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/34678288284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar presupuesto
            </a>
            <Link
              href="/receptivo-galicia"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Descubrir Galicia
            </Link>
          </div>
        </div>
      </section>

      {/* Presentación */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Tu partner local en Galicia</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Suunia es una agencia receptiva con base en A Coruña que trabaja en
                toda Galicia. Nos especializamos en organizar viajes, experiencias y
                logística para grupos privados, agencias de viajes y empresas que
                buscan descubrir el noroeste de España con un servicio profesional y
                personalizado.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <AnimateOnScroll>
              <h3 className="text-xl font-semibold text-gray-900">
                ¿Qué es una agencia receptiva?
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Una agencia receptiva (o DMC, Destination Management Company) es el
                socio local que se encarga de toda la operativa en destino. Mientras
                la agencia emisora o el cliente planifica el viaje desde su ciudad,
                nosotros nos ocupamos de que todo funcione sobre el terreno en
                Galicia: alojamiento, transporte, actividades, restaurantes, guías,
                permisos y cualquier detalle logístico.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Trabajamos con proveedores locales seleccionados, conocemos cada
                rincón del territorio y tenemos la experiencia necesaria para
                resolver cualquier imprevisto. Eso nos permite ofrecer programas
                fiables, con precios competitivos y una atención cercana.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <h3 className="text-xl font-semibold text-gray-900">
                Galicia: un destino excepcional
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Galicia reúne todo lo que un viajero exigente busca: una
                gastronomía reconocida internacionalmente, paisajes de costa
                atlántica y montaña interior, patrimonio cultural milenario con
                Santiago de Compostela como referente, y una autenticidad que la
                diferencia de otros destinos masificados.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Desde las Rías Baixas hasta la Ribeira Sacra, desde la Costa da
                Morte hasta los viñedos de Albariño, Galicia ofrece experiencias
                diversas y complementarias que permiten diseñar programas de
                varios días sin repetirse. Y todo ello en un territorio compacto,
                con distancias manejables y una red de servicios turísticos de
                calidad creciente.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900">
              ¿Qué problemas resolvemos?
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Organizar un viaje de grupo sin conocer Galicia ni sus proveedores locales.",
                "Coordinar transporte, alojamiento y actividades para muchas personas a la vez.",
                "Encontrar restaurantes, experiencias y lugares que no aparecen en las guías turísticas habituales.",
                "Gestionar permisos, reservas y logística compleja para eventos corporativos.",
                "Necesitar un contacto local de confianza que resuelva imprevistos sobre el terreno.",
                "Diseñar un programa equilibrado que combine cultura, gastronomía, naturaleza y tiempo libre.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <svg aria-hidden="true" className="mt-1 h-5 w-5 flex-shrink-0 text-atlantic-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm leading-relaxed text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Experiencias destacadas */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Experiencias en Galicia</h2>
              <p className="mt-4 text-lg text-gray-600">
                Descubre Galicia a través de experiencias diseñadas para conectar
                con lo auténtico. Gastronomía, mar, cultura y naturaleza en
                programas personalizados.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-12">
            <div className="grid gap-8 md:grid-cols-3">
              {experiencias.map((exp) => (
                <Link
                  key={exp.title}
                  href={exp.href}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlantic-600 focus-visible:ring-offset-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {exp.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-atlantic-700">
                      Descubrir más
                      <svg aria-hidden="true" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Servicios principales</h2>
              <p className="mt-4 text-lg text-gray-600">
                Desde la idea inicial hasta el último detalle sobre el terreno.
                Estos son los servicios que ofrecemos como agencia receptiva en
                Galicia.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-12">
            <div className="grid gap-8 md:grid-cols-2">
              {servicios.map((srv) => (
                <Link key={srv.title} href={srv.href} className="card-elegant group">
                  <div className="mb-4 text-atlantic-600">{srv.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-atlantic-700">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {srv.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-atlantic-700">
                    Ver más
                    <svg aria-hidden="true" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA mitad de página */}
      <CTASection />

      {/* Partners */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">Nuestros partners</h2>
              <p className="mt-4 text-lg text-gray-600">
                Trabajamos con empresas especializadas en Galicia para ofrecer
                servicios de máxima calidad en cada área.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-12">
            <div className="grid gap-8 md:grid-cols-3">
              {partners.map((p) => (
                <div key={p.name} className="card-elegant text-center">
                  <h3 className="text-lg font-semibold text-atlantic-800">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Por qué Suunia */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-section">¿Por qué elegir Suunia?</h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Conocimiento local",
                  text: "Vivimos y trabajamos en Galicia. Conocemos cada rincón, cada proveedor y cada detalle que marca la diferencia en un viaje.",
                },
                {
                  title: "Servicio personalizado",
                  text: "Cada programa se diseña desde cero según las necesidades del grupo. No vendemos paquetes cerrados, creamos experiencias a medida.",
                },
                {
                  title: "Operativa profesional",
                  text: "Coordinamos toda la logística en destino: transporte, alojamiento, actividades, restaurantes y soporte durante el viaje.",
                },
                {
                  title: "Red de proveedores",
                  text: "Trabajamos con una red seleccionada de proveedores locales que garantizan calidad, fiabilidad y precios competitivos.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-atlantic-50 text-atlantic-700">
                    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="Hablemos de tu viaje a Galicia"
        description="Ya sea un viaje de grupo, un incentivo de empresa o un tour privado, estamos aquí para hacerlo realidad. Contacta con nosotros y te enviamos una propuesta personalizada."
      />

      {/* JSON-LD Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Agencia receptiva en Galicia",
            provider: {
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
            },
            areaServed: {
              "@type": "Place",
              name: "Galicia, España",
            },
            description:
              "Servicios de agencia receptiva en Galicia: viajes para grupos, tours privados, incentivos de empresa y logística completa en destino.",
          }),
        }}
      />
    </>
  );
}
