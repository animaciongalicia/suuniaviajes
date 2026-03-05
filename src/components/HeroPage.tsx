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
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
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
          <a href="mailto:info@sunia.com" className="btn-outline border-white/40 text-white hover:bg-white/10 hover:text-white">
            Contactar por email
          </a>
        </div>
      </div>
    </section>
  );
}
