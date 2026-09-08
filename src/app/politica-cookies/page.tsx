import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Política de cookies — Suunia" },
  description:
    "Política de cookies de Suunia (Inversiones SHISO SL). Tipos de cookies utilizadas, finalidad y opciones de configuración.",
  alternates: { canonical: "https://suunia.com/politica-cookies" },
  robots: { index: true, follow: true },
};

export default function PoliticaCookiesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 lg:px-8">
      <h1 className="heading-section mb-10">Política de cookies</h1>

      <div className="space-y-8 text-sm leading-relaxed text-gray-600">
        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo
            del usuario cuando lo visita. Se utilizan para recordar preferencias, analizar el
            comportamiento de navegación y mejorar la experiencia del usuario.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">2. ¿Qué cookies utilizamos?</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200 text-gray-900">
                  <th className="pb-2 pr-4 font-semibold">Cookie</th>
                  <th className="pb-2 pr-4 font-semibold">Tipo</th>
                  <th className="pb-2 pr-4 font-semibold">Proveedor</th>
                  <th className="pb-2 pr-4 font-semibold">Finalidad</th>
                  <th className="pb-2 font-semibold">Duración</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 pr-4 font-mono">cookie-consent</td>
                  <td className="py-2 pr-4">Técnica</td>
                  <td className="py-2 pr-4">Propia</td>
                  <td className="py-2 pr-4">Almacena la decisión de consentimiento del usuario</td>
                  <td className="py-2">Persistente</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono">_ga</td>
                  <td className="py-2 pr-4">Analítica</td>
                  <td className="py-2 pr-4">Google Analytics</td>
                  <td className="py-2 pr-4">Distinguir usuarios únicos</td>
                  <td className="py-2">2 años</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono">_ga_*</td>
                  <td className="py-2 pr-4">Analítica</td>
                  <td className="py-2 pr-4">Google Analytics</td>
                  <td className="py-2 pr-4">Mantener el estado de la sesión</td>
                  <td className="py-2">2 años</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono">_gid</td>
                  <td className="py-2 pr-4">Analítica</td>
                  <td className="py-2 pr-4">Google Analytics</td>
                  <td className="py-2 pr-4">Distinguir usuarios únicos durante 24h</td>
                  <td className="py-2">24 horas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">3. Cookies técnicas (necesarias)</h2>
          <p>
            La cookie <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">cookie-consent</code> es
            estrictamente necesaria para recordar tu decisión sobre el uso de cookies. Se almacena
            en el navegador (localStorage) y no recoge datos personales. No se puede desactivar sin
            que el banner de consentimiento aparezca en cada visita.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">4. Cookies analíticas</h2>
          <p>
            Utilizamos Google Analytics (GA4) y Google Tag Manager para analizar cómo los usuarios
            utilizan el sitio web. Estas cookies solo se instalan si el usuario acepta
            expresamente su uso a través del banner de consentimiento. Los datos recogidos son
            anónimos y se utilizan exclusivamente para mejorar el funcionamiento del sitio.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">5. ¿Cómo gestionar las cookies?</h2>
          <p>
            Puedes aceptar o rechazar las cookies analíticas a través del banner que aparece al
            acceder al sitio web. También puedes configurar tu navegador para bloquear o eliminar
            cookies en cualquier momento:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
            <li>Firefox: Configuración → Privacidad y seguridad</li>
            <li>Safari: Preferencias → Privacidad</li>
            <li>Edge: Configuración → Cookies y permisos del sitio</li>
          </ul>
          <p className="mt-2">
            Ten en cuenta que desactivar las cookies puede afectar al correcto funcionamiento de
            algunas funcionalidades del sitio web.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">6. Más información</h2>
          <p>
            Para más información sobre el tratamiento de tus datos personales, consulta nuestra{" "}
            <Link href="/politica-privacidad" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
              política de privacidad
            </Link>.
            Si tienes dudas, puedes contactarnos en{" "}
            <a href="mailto:info@suunia.com" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
              info@suunia.com
            </a>.
          </p>
        </div>

        <p className="pt-4 text-xs text-gray-400">
          Última actualización: septiembre de 2026.
        </p>
      </div>
    </section>
  );
}
