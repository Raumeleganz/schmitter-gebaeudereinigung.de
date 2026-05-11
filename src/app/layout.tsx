import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ParallaxProvider } from "@/components/animations/ParallaxProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://schmitter-gebaeudereinigung.de'),
  title: {
    default: "Schmitter Gebäudereinigung NRW | Büro- & Unterhaltsreinigung ohne Fachwort-Stress",
    template: "%s | Schmitter Gebäudereinigung"
  },
  description:
    "Gebäudereinigung & Büroreinigung in NRW einfach erklärt: feste Teams, Festpreise statt Überraschung, Büro-, Praxis- und Unterhaltsreinigung. Zuverlässig – ohne Fachwort-Dschungel.",
  keywords: ["Gebäudereinigung", "Büroreinigung", "Reinigungsdienst", "NRW", "Düsseldorf", "Köln", "Dortmund", "Schmitter"],
  authors: [{ name: "Schmitter Gebäudereinigung" }],
  creator: "Schmitter Gebäudereinigung",
  publisher: "Schmitter Gebäudereinigung",
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
    url: 'https://schmitter-gebaeudereinigung.de',
    siteName: 'Schmitter Gebäudereinigung',
    title: 'Schmitter Gebäudereinigung NRW | Büro- & Unterhaltsreinigung ohne Fachwort-Stress',
    description:
      'Gebäudereinigung in NRW: klare Absprachen, faire Festpreise, Büro-, Praxis- und Unterhaltsreinigung – zuverlässig und planbar.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schmitter Gebäudereinigung NRW | Büro- & Unterhaltsreinigung ohne Fachwort-Stress',
    description:
      'Reinigungsdienst für Büro und Praxis in NRW – menschlich erklärt, zuverlässig gemacht.',
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
