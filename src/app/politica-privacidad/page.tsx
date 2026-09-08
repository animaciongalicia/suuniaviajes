import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Política de privacidad — Suunia" },
  description:
    "Política de privacidad de Suunia (Inversiones SHISO SL). Información sobre tratamiento de datos personales conforme al RGPD.",
  alternates: { canonical: "https://suunia.com/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 lg:px-8">
      <h1 className="heading-section mb-10">Política de privacidad</h1>

      <div className="space-y-8 text-sm leading-relaxed text-gray-600">
        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">1. Responsable del tratamiento</h2>
          <ul className="list-none space-y-1 pl-0">
            <li><strong>Responsable:</strong> Inversiones SHISO SL</li>
            <li><strong>CIF:</strong> B70319223</li>
            <li><strong>Domicilio:</strong> Ronda de Montealto, 4 – 5ºA, 15002 A Coruña, España</li>
            <li><strong>Email de contacto:</strong> info@suunia.com</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">2. Finalidades del tratamiento</h2>
          <p>Los datos personales que pudieran recogerse a través de este sitio web serán tratados con las siguientes finalidades:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Atender solicitudes de información, consultas y presupuestos realizados por el usuario a través de correo electrónico o WhatsApp.</li>
            <li>Gestionar la relación comercial y la prestación de los servicios contratados.</li>
            <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios, siempre que el usuario haya dado su consentimiento.</li>
            <li>Analizar el uso del sitio web mediante cookies analíticas, previo consentimiento del usuario.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">3. Base legal del tratamiento</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Consentimiento del interesado</strong> (art. 6.1.a RGPD): para el envío de comunicaciones comerciales y el uso de cookies analíticas.</li>
            <li><strong>Ejecución de un contrato</strong> (art. 6.1.b RGPD): para la gestión de servicios contratados.</li>
            <li><strong>Interés legítimo</strong> (art. 6.1.f RGPD): para atender solicitudes de contacto.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">4. Destinatarios de los datos</h2>
          <p>
            Los datos personales no serán cedidos a terceros, salvo obligación legal. Se utilizan
            herramientas de terceros para el análisis web (Google Analytics) que pueden implicar
            transferencias internacionales de datos, amparadas por las cláusulas contractuales tipo
            aprobadas por la Comisión Europea.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">5. Plazo de conservación</h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para cumplir con la
            finalidad para la que se recogieron y, posteriormente, durante los plazos legalmente
            establecidos para atender las posibles responsabilidades derivadas del tratamiento.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">6. Derechos del interesado</h2>
          <p>
            El usuario puede ejercer los siguientes derechos dirigiéndose a info@suunia.com:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Derecho de acceso a sus datos personales.</li>
            <li>Derecho de rectificación de datos inexactos o incompletos.</li>
            <li>Derecho de supresión («derecho al olvido»).</li>
            <li>Derecho a la limitación del tratamiento.</li>
            <li>Derecho a la portabilidad de los datos.</li>
            <li>Derecho de oposición al tratamiento.</li>
            <li>Derecho a retirar el consentimiento otorgado.</li>
          </ul>
          <p className="mt-2">
            El usuario tiene derecho a presentar una reclamación ante la Agencia Española de
            Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">www.aepd.es</a>)
            si considera que sus derechos no han sido debidamente atendidos.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">7. Cookies</h2>
          <p>
            Este sitio web utiliza cookies propias y de terceros. Para más información, consulte
            nuestra{" "}
            <Link href="/politica-cookies" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
              política de cookies
            </Link>.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">8. Seguridad</h2>
          <p>
            Inversiones SHISO SL ha adoptado los niveles de seguridad adecuados a los datos
            facilitados y ha instalado los medios técnicos a su alcance para evitar la pérdida,
            mal uso, alteración o acceso no autorizado a los datos personales.
          </p>
        </div>

        <p className="pt-4 text-xs text-gray-400">
          Última actualización: septiembre de 2026.
        </p>
      </div>
    </section>
  );
}
