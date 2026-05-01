import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Leistungen - Professionelle Reinigungsdienstleistungen | DATRA - Gebäudereinigung",
  description: "Professionelle Reinigungsdienstleistungen in NRW: Büroreinigung, Unterhaltsreinigung, Glasreinigung, Praxisreinigung, Industriereinigung. ISO-zertifiziert & umweltfreundlich.",
  keywords: ["Büroreinigung", "Unterhaltsreinigung", "Glasreinigung", "Praxisreinigung", "Industriereinigung", "NRW"],
  openGraph: {
    title: "Unsere Leistungen - DATRA - Gebäudereinigung",
    description: "Maßgeschneiderte Reinigungslösungen für jeden Bedarf in NRW.",
    type: "website",
  },
};

export default function LeistungenPage() {
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
                "name": "Leistungen",
                "item": "https://cleanpro-nrw.de/leistungen"
              }
            ]
          })
        }}
      />
      
      <div className="pt-20">
        <Services />
      </div>
    </>
  );
}

