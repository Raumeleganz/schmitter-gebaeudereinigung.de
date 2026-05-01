import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns - 15+ Jahre Erfahrung in Gebäudereinigung | ABED - Gebäudereinigung",
  description: "Erfahren Sie mehr über ABED - Gebäudereinigung: 15+ Jahre Erfahrung, 500+ zufriedene Kunden, ISO-zertifiziert. Ihr zuverlässiger Partner für professionelle Gebäudereinigung in NRW.",
  keywords: ["Über uns", "ABED - Gebäudereinigung", "Gebäudereinigung", "Erfahrung", "ISO-zertifiziert", "NRW"],
  openGraph: {
    title: "Über uns - ABED - Gebäudereinigung",
    description: "15+ Jahre Erfahrung in professioneller Gebäudereinigung.",
    type: "website",
  },
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cleanpro-nrw.de"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Über uns",
                "item": "https://cleanpro-nrw.de/ueber-uns"
              }
            ]
          })
        }}
      />
      
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ABED - Gebäudereinigung Gebäudereinigung",
            "description": "Professionelle Gebäudereinigung in NRW",
            "url": "https://cleanpro-nrw.de",
            "logo": "https://cleanpro-nrw.de/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Musterstraße 123",
              "addressLocality": "Düsseldorf",
              "postalCode": "40212",
              "addressCountry": "DE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49-211-12345678",
              "contactType": "customer service",
              "areaServed": "DE",
              "availableLanguage": "de"
            }
          })
        }}
      />
      
      <div className="pt-20">
        <About />
        <Testimonials />
      </div>
    </>
  );
}

