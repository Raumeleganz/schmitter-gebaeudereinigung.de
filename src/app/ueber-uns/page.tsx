import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Schmitter Gebäudereinigung",
  description:
    "Erfahren Sie mehr über Schmitter Gebäudereinigung: professionelle Reinigung, klare Abläufe und zuverlässiger Service in NRW.",
  keywords: ["Über uns", "Schmitter Gebäudereinigung", "Gebäudereinigung", "NRW"],
  openGraph: {
    title: "Über uns - Schmitter Gebäudereinigung",
    description: "Professionelle Gebäudereinigung mit klaren Abläufen und zuverlässigem Service.",
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
                "item": "https://schmitter-gebaeudereinigung.de"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Über uns",
                "item": "https://schmitter-gebaeudereinigung.de/ueber-uns"
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
            "name": "Schmitter Gebäudereinigung",
            "description": "Professionelle Gebäudereinigung in NRW",
            "url": "https://schmitter-gebaeudereinigung.de",
            "logo": "https://schmitter-gebaeudereinigung.de/logo.png",
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

