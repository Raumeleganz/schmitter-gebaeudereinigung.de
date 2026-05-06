import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen | Büro-, Praxis- & Gebäudereinigung NRW | Schmitter",
  description:
    "Übersicht ohne Marketing-Lärm: Büro-, Unterhalts-, Glas-, Praxis- und Industriereinigung – erklärt in normalem Deutsch, gebucht mit klarem Plan für NRW.",
  keywords: [
    "Büroreinigung",
    "Unterhaltsreinigung",
    "Glasreinigung",
    "Praxisreinigung",
    "Industriereinigung",
    "Gebäudereinigung NRW",
    "Schmitter",
  ],
  alternates: { canonical: "https://schmitter-gebaeudereinigung.de/leistungen" },
  openGraph: {
    title: "Leistungen | Schmitter Gebäudereinigung NRW",
    description:
      "Von Büro bis Produktionshalle: Wir sagen vorab, wer wann wo putzt – transparent und nachvollziehbar.",
    type: "website",
    url: "https://schmitter-gebaeudereinigung.de/leistungen",
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
                "item": "https://schmitter-gebaeudereinigung.de"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Leistungen",
                "item": "https://schmitter-gebaeudereinigung.de/leistungen"
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

