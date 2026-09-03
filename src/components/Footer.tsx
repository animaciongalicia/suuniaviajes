import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/logo-suunia.svg"
                alt="Suunia logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                SUUNIA
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Agencia receptiva en Galicia. Viajes premium, experiencias exclusivas y servicios para empresas y agencias.
            </p>
          </div>

          {/* Col 2 — Viajes */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Viajes
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "Viajes en grupo", href: "/viajes-grupos-galicia" },
                { name: "Tours privados", href: "/tours-privados-galicia" },
                { name: "Grandes rutas", href: "/grandes-rutas-galicia" },
                { name: "Galicia Premium", href: "/galicia-premium" },
                { name: "Náutica", href: "/nautica-galicia" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-atlantic-700"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Empresas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Empresas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { name: "Viajes de incentivos", href: "/incentivos-empresa-galicia" },
                { name: "Team building", href: "/team-building-galicia" },
                { name: "Eventos corporativos", href: "/eventos-corporativos-galicia" },
                { name: "Servicios logísticos", href: "/logistica-servicios-galicia" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-atlantic-700"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Para agencias
            </h3>
            <ul className="mt-3 space-y-2.5">
              {[
                { name: "Receptivo Galicia", href: "/receptivo-galicia" },
                { name: "Gastronomía y bodegas", href: "/gastronomia-bodegas-galicia" },
                { name: "Excursiones privadas", href: "/excursiones-privadas-galicia" },
                { name: "Cultura y naturaleza", href: "/cultura-naturaleza-galicia" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-atlantic-700"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
              <li>
                <a href="tel:+34678288284" className="transition-colors hover:text-atlantic-700">
                  +34 678 288 284
                </a>
              </li>
              <li>
                <a href="mailto:info@suunia.com" className="transition-colors hover:text-atlantic-700">
                  info@suunia.com
                </a>
              </li>
              <li>
                <a href="mailto:suuniaviajes@gmail.com" className="transition-colors hover:text-atlantic-700">
                  suuniaviajes@gmail.com
                </a>
              </li>
              <li className="pt-1">A Coruña, Galicia, España</li>
            </ul>
            <a
              href="https://wa.me/34678288284"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-5"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Suunia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
