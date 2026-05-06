import Contact from "@/components/Contact";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Schmitter Gebäudereinigung NRW – wir melden uns verständlich zurück",
  description:
    "Schnelle, klare Antworten zu Büro-, Praxis- und Gebäudereinigung in NRW: Kontakt per Formular oder Telefon. Besichtigung unverbindlich, Angebot verständlich aufgebaut.",
  keywords: ["Kontakt", "Anfrage", "Beratung", "Gebäudereinigung NRW", "Schmitter", "Büroreinigung Kontakt"],
  alternates: { canonical: "https://schmitter-gebaeudereinigung.de/kontakt" },
  openGraph: {
    title: "Kontakt | Schmitter Gebäudereinigung",
    description:
      "Gebäudereinigung ohne Fachwort-Dschungel: Kurz beschreiben, was Sie brauchen – wir klären den Rest gemeinsam ein.",
    type: "website",
    url: "https://schmitter-gebaeudereinigung.de/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <Breadcrumbs />
        </div>
        <Contact />
      </div>
    </>
  );
}

