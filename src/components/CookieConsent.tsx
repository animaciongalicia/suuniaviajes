"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function loadGtag() {
  if (document.getElementById("gtag-script")) return;
  const s = document.createElement("script");
  s.id = "gtag-script";
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-TJFNSFX0NK";
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-TJFNSFX0NK");
}

function loadGtm() {
  if (document.getElementById("gtm-script")) return;
  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PSCKD2PM";
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie-consent");
      if (consent === "accepted") {
        loadGtag();
        loadGtm();
      } else if (consent !== "rejected") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem("cookie-consent", "accepted"); } catch {}
    loadGtag();
    loadGtm();
    setVisible(false);
  };

  const reject = () => {
    try { localStorage.setItem("cookie-consent", "rejected"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200 bg-white px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-600">
          Utilizamos cookies propias y de terceros para analizar el uso del sitio web.
          Puedes consultar nuestra{" "}
          <Link href="/politica-cookies" className="text-atlantic-700 underline decoration-atlantic-300 underline-offset-2 hover:decoration-atlantic-600">
            política de cookies
          </Link>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-atlantic-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-atlantic-800"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
