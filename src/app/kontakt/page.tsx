import Contact from "@/components/Contact";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Jetzt unverbindlich anfragen | ABED - Gebäudereinigung",
  description: "Kontaktieren Sie ABED - Gebäudereinigung für professionelle Gebäudereinigung in NRW. Kostenlose Beratung und individuelles Angebot. Tel: 0211 123 456 78",
  keywords: ["Kontakt", "Anfrage", "Beratung", "Angebot", "ABED - Gebäudereinigung", "Gebäudereinigung"],
  openGraph: {
    title: "Kontakt - ABED - Gebäudereinigung",
    description: "Kontaktieren Sie uns für ein unverbindliches Angebot.",
    type: "website",
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

