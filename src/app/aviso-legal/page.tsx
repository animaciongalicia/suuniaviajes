import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Aviso legal — Suunia" },
  description:
    "Aviso legal de Suunia (Inversiones SHISO SL). Datos identificativos, condiciones de uso y propiedad intelectual.",
  alternates: { canonical: "https://suunia.com/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-32 lg:px-8">
      <h1 className="heading-section mb-10">Aviso legal</h1>

      <div className="prose-legal space-y-8 text-sm leading-relaxed text-gray-600">
        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">1. Datos identificativos</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa al usuario de
            los datos del titular de este sitio web:
          </p>
          <ul className="mt-3 list-none space-y-1 pl-0">
            <li><strong>Razón social:</strong> Inversiones SHISO SL</li>
            <li><strong>CIF:</strong> B70319223</li>
            <li><strong>Domicilio social:</strong> Ronda de Montealto, 4 – 5ºA, 15002 A Coruña, España</li>
            <li><strong>Email:</strong> info@suunia.com</li>
            <li><strong>Teléfono:</strong> +34 678 288 284</li>
            <li><strong>Nombre comercial:</strong> Suunia</li>
            <li><strong>Sitio web:</strong> suunia.com</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">2. Objeto</h2>
          <p>
            El presente aviso legal regula el uso y acceso al sitio web suunia.com, propiedad de
            Inversiones SHISO SL. El acceso al sitio web es gratuito y no requiere suscripción ni
            registro previo, salvo en aquellos servicios que así se indique expresamente.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos de este sitio web —incluyendo textos, fotografías, gráficos, imágenes,
            logotipos, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o
            sonoros— así como su diseño gráfico y código fuente, son propiedad intelectual de Inversiones
            SHISO SL o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al
            usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en
            materia de propiedad intelectual sobre los mismos.
          </p>
          <p className="mt-2">
            La reproducción, distribución, comunicación pública, transformación o cualquier otra
            actividad que se realice con los contenidos de este sitio web queda expresamente prohibida
            sin la autorización escrita previa de Inversiones SHISO SL.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">4. Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que
            Inversiones SHISO SL ofrece a través de su sitio web y, con carácter enunciativo pero no
            limitativo, a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena
            fe y al ordenamiento legal.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">5. Exclusión de responsabilidad</h2>
          <p>
            Inversiones SHISO SL no se hace responsable de la información y contenidos almacenados en
            foros, redes sociales o cualesquiera otros medios que permitan a terceros publicar contenidos
            de forma independiente. Sin perjuicio de lo anterior, Inversiones SHISO SL se compromete a
            actuar con diligencia para la retirada o bloqueo de aquellos contenidos que pudieran
            afectar o contravenir la legislación nacional o internacional, los derechos de terceros, o
            la moral y el orden público.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-gray-900">6. Legislación aplicable y jurisdicción</h2>
          <p>
            Las presentes condiciones de uso se regirán por la legislación española. Para la resolución
            de cualquier controversia que pudiera derivarse del acceso al sitio web, Inversiones SHISO
            SL y el usuario acuerdan someterse a los Juzgados y Tribunales de A Coruña, salvo que la
            normativa aplicable imponga otro fuero.
          </p>
        </div>

        <p className="pt-4 text-xs text-gray-400">
          Última actualización: septiembre de 2026.
        </p>
      </div>
    </section>
  );
}
