import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O la fuente que estés usando
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- AQUÍ EMPIEZA LA MAGIA DE LOS METADATOS ---
export const metadata: Metadata = {
  // Título que aparece en la pestaña del navegador
  title: "Sisters Events | Decoración de Fiestas y Eventos en Lima",
  
  // Descripción para Google (SEO básico)
  description: "Organización y decoración de eventos exclusivos en Lima. Cumpleaños, Baby Showers y temáticas personalizadas. ¡Creamos momentos inolvidables!",
  
  // Palabras clave (ayuda un poco a Google)
  keywords: ["eventos lima", "decoración cumpleaños", "sisters events", "fiestas infantiles", "baby shower", "globos"],
  
  // Autor
  authors: [{ name: "Sisters Events Team" }],

  // --- OPEN GRAPH (Para WhatsApp, Facebook, LinkedIn) ---
  openGraph: {
    title: "Sisters Events ✨ Coleccionando Momentos",
    description: "¿Planeas una fiesta? Descubre nuestras decoraciones exclusivas y cotiza tu evento hoy mismo.",
    url: "https://sistersevents.vercel.app/", // TU URL REAL DE VERCEL
    siteName: "Sisters Events",
    images: [
      {
        url: "/images/og-image.jpg", // La ruta a tu imagen en public
        width: 1200,
        height: 630,
        alt: "Sisters Events Decoraciones Exclusivas",
      },
    ],
    locale: "es_PE", // Español Perú
    type: "website",
  },

  // --- TWITTER CARD (Para cuando compartan en X) ---
  twitter: {
    card: "summary_large_image",
    title: "Sisters Events | Decoración Premium en Lima",
    description: "Transformamos tus celebraciones en recuerdos inolvidables. Mira nuestra galería.",
    images: ["/images/og-image.jpg"], // Reusamos la misma imagen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}