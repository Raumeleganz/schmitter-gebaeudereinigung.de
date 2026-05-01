import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ParallaxProvider } from "@/components/animations/ParallaxProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://ABED-gebaeudereinigung.de'),
  title: {
    default: "ABED - Gebäudereinigung | Professionelle Reinigung in NRW",
    template: "%s | ABED - Gebäudereinigung"
  },
  description: "Professionelle Gebäudereinigung in ganz Nordrhein-Westfalen. Über 15 Jahre Erfahrung, 500+ zufriedene Kunden. ISO-zertifiziert und umweltfreundlich.",
  keywords: ["Gebäudereinigung", "Büroreinigung", "Reinigungsdienst", "NRW", "Düsseldorf", "Köln", "Dortmund", "ABED"],
  authors: [{ name: "ABED - Gebäudereinigung" }],
  creator: "ABED - Gebäudereinigung",
  publisher: "ABED - Gebäudereinigung",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://ABED-gebaeudereinigung.de',
    siteName: 'ABED - Gebäudereinigung',
    title: 'ABED - Gebäudereinigung | Professionelle Reinigung in NRW',
    description: 'Professionelle Gebäudereinigung in ganz Nordrhein-Westfalen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABED - Gebäudereinigung | Professionelle Reinigung in NRW',
    description: 'Professionelle Gebäudereinigung in ganz Nordrhein-Westfalen.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <ParallaxProvider>
          <Navigation />
          {children}
          <Footer />
          <CookieBanner />
          <BackToTop />
        </ParallaxProvider>
      </body>
    </html>
  );
}
