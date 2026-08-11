import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://suunia.com"),
  verification: {
    google: "Q-pkvUOoidjIbwztKcHy_4Gi8yCRuupRayCxG91YkwI",
  },
  title: {
    default: "Suunia – Agencia receptiva en Galicia | DMC Galicia",
    template: "%s | Suunia – DMC Galicia",
  },
  description:
    "Agencia receptiva en Galicia especializada en viajes, experiencias y logística para grupos privados y empresas. DMC en A Coruña con cobertura en toda Galicia.",
  keywords: [
    "agencia receptiva galicia",
    "receptivo galicia",
    "dmc galicia",
    "viajes en grupo galicia",
    "incentivos empresa galicia",
    "tours privados galicia",
    "experiencias galicia",
    "servicios receptivos galicia",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://suunia.com",
    siteName: "Suunia",
    title: "Suunia – Agencia receptiva en Galicia | DMC Galicia",
    description:
      "Agencia receptiva en Galicia especializada en viajes, experiencias y logística para grupos privados y empresas.",
    images: [
      {
        url: "/images/hero-galicia.jpg",
        width: 1200,
        height: 630,
        alt: "Suunia – Agencia receptiva en Galicia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suunia – Agencia receptiva en Galicia",
    description:
      "DMC en Galicia. Viajes, experiencias y logística para grupos y empresas.",
    images: ["/images/hero-galicia.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://suunia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TJFNSFX0NK"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TJFNSFX0NK');`}
        </Script>
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSCKD2PM');`}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSCKD2PM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Suunia",
              url: "https://suunia.com",
              logo: "https://suunia.com/images/logo-suunia.svg",
              description:
                "Agencia receptiva en Galicia especializada en viajes, experiencias y logística para grupos privados y empresas.",
              telephone: "+34678288284",
              email: "info@suunia.com",
              areaServed: {
                "@type": "Place",
                name: "Galicia, España",
              },
              serviceType: [
                "Agencia receptiva",
                "DMC",
                "Viajes en grupo",
                "Tours privados",
                "Incentivos empresas",
                "Servicios logísticos",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
