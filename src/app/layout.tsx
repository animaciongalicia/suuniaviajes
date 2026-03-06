import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://suunia.com"),
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
      <body className="antialiased">
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
              email: "info@sunia.com",
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
