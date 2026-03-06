import Image from "next/image";

export default function HeroPage({
  title,
  subtitle,
  imageSrc = "/images/hero-galicia.jpg",
}: {
  title: string;
  subtitle: string;
  imageSrc?: string;
}) {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/34678288284"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-8 py-4 text-base"
          >
            Solicitar presupuesto
          </a>
          <a
            href="mailto:info@sunia.com"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Contactar por email
          </a>
        </div>
      </div>
    </section>
  );
}
