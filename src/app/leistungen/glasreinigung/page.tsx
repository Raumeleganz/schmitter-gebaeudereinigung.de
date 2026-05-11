import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Professionelle Glasreinigung & Fensterreinigung in NRW - Streifenfrei & Kristallklar | Schmitter Gebäudereinigung",
  description: "Professionelle Fensterreinigung in Düsseldorf, Köln & NRW. Glasfassaden, Wintergärten, Schaufenster. Mit modernster Technik für perfekte Durchsicht.",
  keywords: ["Glasreinigung", "Fensterreinigung", "Fensterputzer", "Glasfassade reinigen", "Schaufenster reinigen", "NRW"],
  openGraph: {
    title: "Professionelle Glasreinigung in NRW | Schmitter Gebäudereinigung",
    description: "Streifenfreie Fensterreinigung für perfekte Durchsicht.",
    type: "website",
  },
};

export default function GlasreinigungPage() {
  const features = [
    {
      title: "Innen- & Außenreinigung",
      description: "Komplette Reinigung aller Fensterflächen von innen und außen",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Rahmen- & Fensterbankreinigung",
      description: "Gründliche Reinigung aller Rahmen, Fensterbänke und Dichtungen",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Glasfassaden & Wintergärten",
      description: "Spezialisierte Reinigung großflächiger Glasflächen und Wintergärten",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Schaufenster & Vitrinen",
      description: "Perfekte Präsentation durch kristallklare Schaufenster",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Oberlichter & Dachfenster",
      description: "Sichere Reinigung schwer erreichbarer Fenster und Oberlichter",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Streifenfreies Ergebnis",
      description: "Mit professioneller Technik und umweltfreundlichen Mitteln",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const techniques = [
    {
      name: "Traditionelle Methode",
      description: "Mit Einwascher und Gummiabzieher für perfekte Ergebnisse",
      suitable: "Ideal für Standardfenster"
    },
    {
      name: "Teleskop-Reinigung",
      description: "Für schwer erreichbare Fenster bis 12m Höhe",
      suitable: "Ohne Gerüst oder Hebebühne"
    },
    {
      name: "Reinwasser-Technologie",
      description: "Osmose-Wasser mit speziellen Bürstensystemen",
      suitable: "Für Glasfassaden und große Flächen"
    },
  ];

  return (
    <>
      <div className="pt-20">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <Breadcrumbs />
        </div>

        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&fm=webp"
            alt="Professionelle Glasreinigung"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="mb-4">
                  <Link href="/leistungen" className="text-blue-400 hover:text-blue-300 font-semibold">
                    ← Zurück zu Leistungen
                  </Link>
                </div>
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Kristallklare Durchsicht
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Professionelle Glasreinigung
                </h1>
                <p className="text-xl text-gray-200">
                  Für klare Sicht statt Fingerabdruck-Galerie (NRW-weit)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Intro Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Streifenfreier Glanz für Ihre Fenster
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Fensterputzen ist simpel – wenn man’s kann. Wir sorgen für klare Scheiben, saubere Rahmen und den Unterschied zwischen „geht so“ und „wow, da war ja ein Fenster“.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Ob Wohnung, Büro, Schaufenster oder Glasfassade: Wir stimmen vorher kurz ab, was erreichbar ist – und liefern dann streifenfrei. Mit professionellem Equipment und Mitteln, die nicht unnötig aggressiv sind.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Schnelle Terminvergabe
                  </h3>
                  <p className="text-gray-600 mb-4">Oft klappt’s noch in derselben Woche – einfach kurz anfragen.</p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-bold"
                  >
                    Termin klarmachen
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80&fm=webp"
                  alt="Saubere Fenster"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Sorgfältig</div>
                    <div className="text-xs text-gray-600">streifenfrei</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Öko</div>
                    <div className="text-xs text-gray-600">Umweltfreundlich</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Flexibel</div>
                    <div className="text-xs text-gray-600">bei Zeiten</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unser Leistungsumfang</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Techniques Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Reinigungsmethoden</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {techniques.map((technique, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{technique.name}</h3>
                    <p className="text-gray-600 mb-4">{technique.description}</p>
                    <div className="bg-blue-50 px-3 py-2 rounded-lg inline-block">
                      <span className="text-sm text-blue-600 font-semibold">{technique.suitable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Us Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Warum Schmitter Gebäudereinigung?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Professionelle Ausrüstung für alle Fensterhöhen</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Umweltfreundliche Reinigungsmittel</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Geschultes und versichertes Personal</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexible Terminvereinbarung</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Jetzt Angebot einholen!</h3>
                  <p className="text-blue-100 mb-6">Kostenlose Besichtigung und unverbindliches Angebot innerhalb von 24 Stunden</p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center w-full bg-white text-blue-600 px-6 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold"
                  >
                    Kostenlos anfragen
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bereit für kristallklare Fenster?</h2>
              <p className="text-xl text-gray-600 mb-8">Kontaktieren Sie uns für eine kostenlose Beratung</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg"
                >
                  Jetzt Termin vereinbaren
                </Link>
                <a
                  href="tel:+4920189083050"
                  className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-bold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0201-89083050
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

