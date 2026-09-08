"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Receptivo Galicia", href: "/receptivo-galicia" },
  {
    name: "Viajes",
    href: "/viajes",
    children: [
      { name: "Viajes en grupo", href: "/viajes-grupos-galicia" },
      { name: "Tours privados", href: "/tours-privados-galicia" },
      { name: "Grandes rutas por Galicia", href: "/grandes-rutas-galicia" },
      { name: "Galicia Premium", href: "/galicia-premium" },
    ],
  },
  {
    name: "Experiencias",
    href: "/experiencias",
    children: [
      { name: "Gastronomía y bodegas", href: "/gastronomia-bodegas-galicia" },
      { name: "Náutica", href: "/nautica-galicia" },
      { name: "Excursiones privadas", href: "/excursiones-privadas-galicia" },
      { name: "Cultura y naturaleza", href: "/cultura-naturaleza-galicia" },
    ],
  },
  {
    name: "Empresas",
    href: "/empresas",
    children: [
      { name: "Viajes de incentivos", href: "/incentivos-empresa-galicia" },
      { name: "Team building", href: "/team-building-galicia" },
      { name: "Eventos corporativos", href: "/eventos-corporativos-galicia" },
    ],
  },
  { name: "Guías", href: "/guias" },
  { name: "Contacto", href: "/#contacto" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 10 6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

function isActive(pathname: string, href: string, children?: { href: string }[]): boolean {
  if (href === "/" ) return pathname === "/";
  if (pathname === href) return true;
  if (pathname.startsWith(href + "/")) return true;
  if (children?.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"))) return true;
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileExpanded = (name: string) => {
    setMobileExpanded((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-atlantic-700 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        Ir al contenido
      </a>
      <header
        ref={headerRef}
        className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlantic-600 focus-visible:ring-offset-2"
          >
            <Image
              src="/images/logo-suunia.svg"
              alt="Suunia — Agencia receptiva en Galicia"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gray-900">
                SUUNIA
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:block">
                Galicia DMC
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href, item.children);
              return item.children ? (
                <div key={item.name} className="relative" ref={openDropdown === item.name ? dropdownRef : undefined}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`rounded-l-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlantic-600 ${
                        active
                          ? "text-atlantic-700"
                          : "text-gray-600 hover:text-atlantic-700"
                      }`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                      {active && (
                        <span className="absolute bottom-0 left-3 right-8 h-0.5 rounded-full bg-atlantic-600" />
                      )}
                    </Link>
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      className="rounded-r-md px-1 py-2 text-gray-400 transition-colors hover:text-atlantic-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlantic-600"
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                      aria-label={`Abrir submenú de ${item.name}`}
                    >
                      <ChevronDown
                        className={`h-2.5 w-2.5 transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 hover:text-atlantic-700 ${
                            pathname === child.href
                              ? "bg-atlantic-50 font-medium text-atlantic-700"
                              : "text-gray-600"
                          }`}
                          aria-current={pathname === child.href ? "page" : undefined}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlantic-600 ${
                    active
                      ? "text-atlantic-700"
                      : "text-gray-600 hover:text-atlantic-700"
                  }`}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-atlantic-600" />
                  )}
                </Link>
              );
            })}
            <a
              href="https://wa.me/34678288284"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="rounded-md p-2 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlantic-600"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              if (mobileOpen) setMobileExpanded(null);
            }}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
            mobileOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0 border-t-0"
          }`}
        >
          <div className="px-6 pb-6 pt-4">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href, item.children);
              return item.children ? (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "text-atlantic-700"
                          : "text-gray-600 hover:text-atlantic-700"
                      }`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => toggleMobileExpanded(item.name)}
                      className="rounded-md p-2 text-gray-400 hover:text-atlantic-700"
                      aria-expanded={mobileExpanded === item.name}
                      aria-label={`Abrir submenú de ${item.name}`}
                    >
                      <ChevronDown
                        className={`h-2.5 w-2.5 transition-transform duration-200 ${
                          mobileExpanded === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileExpanded === item.name
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={closeAll}
                        className={`block py-2.5 pl-4 text-sm transition-colors ${
                          pathname === child.href
                            ? "font-medium text-atlantic-700"
                            : "text-gray-500 hover:text-atlantic-700"
                        }`}
                        aria-current={pathname === child.href ? "page" : undefined}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeAll}
                  className={`block py-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                    active
                      ? "text-atlantic-700"
                      : "text-gray-600 hover:text-atlantic-700"
                  }`}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="https://wa.me/34678288284"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 w-full justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
