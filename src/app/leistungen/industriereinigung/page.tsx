import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Industriereinigung NRW • Produktionshallen, Lagerhallen & Werkstätten • 24/7 Service | Schmitter",
  description: "✓ Professionelle Industriereinigung in NRW ✓ Produktionshallen ✓ Lagerhallen ✓ Maschinenreinigung ✓ HACCP-konform ✓ Flexible Zeiten ✓ Kostenlose Beratung ➤ Jetzt anfragen!",
  keywords: [
    "Industriereinigung NRW", 
    "Hallenreinigung Düsseldorf", 
    "Produktionshalle reinigen", 
    "Lagerhalle Reinigung", 
    "Werksreinigung",
    "Maschinenreinigung Industrie", 
    "Gewerbereinigung NRW",
    "Industriebodenreinigung",
    "HACCP Reinigung",
    "24/7 Industriereinigung",
    "Hochdruckreinigung Industrie",
    "Hallenreinigung Köln",
    "Fabrikreinigung",
    "Werkstattreinigung"
  ],
  openGraph: {
    title: "Professionelle Industriereinigung in NRW | Schmitter Gebäudereinigung",
    description: "Leistungsstarke Reinigungslösungen für Produktionshallen, Lagerhallen und Betriebsstätten. 24/7 Service, HACCP-konform, modernste Technik.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80&fm=webp",
        width: 1200,
        height: 630,
        alt: "Professionelle Industriereinigung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Industriereinigung NRW • 24/7 Service | Schmitter",
    description: "Professionelle Reinigung für Produktionshallen, Lagerhallen & Betriebsstätten in NRW",
  },
  alternates: {
    canonical: "https://schmitter-gebaeudereinigung.de/leistungen/industriereinigung"
  }
};

export default function IndustriereinigungPage() {
  const features = [
    {
      title: "Produktionshallen & Werkstätten",
      description: "Gründliche Reinigung von Fertigungsbereichen und Werkstätten",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Lager- & Logistikbereiche",
      description: "Professionelle Reinigung von Lagerhallen und Umschlagplätzen",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Maschinen- & Anlagenreinigung",
      description: "Fachgerechte Reinigung von Produktionsanlagen und Maschinen",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Industrieböden & Beschichtungen",
      description: "Spezialreinigung für Beton-, Epoxid- und Industrieböden",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Hochregallager & Bühnensysteme",
      description: "Sichere Reinigung in großen Höhen mit speziellem Equipment",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    },
    {
      title: "Absauganlagen & Filtersysteme",
      description: "Reinigung und Wartung von Lüftungs- und Absaugsystemen",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  const industries = [
    {
      name: "Metallverarbeitung",
      challenges: ["Metallspäne", "Kühlmittel", "Öl & Fett"],
      icon: "⚙️"
    },
    {
      name: "Lebensmittelindustrie",
      challenges: ["HACCP-Konformität", "Hygienezonen", "Schnellreinigung"],
      icon: "🏭"
    },
    {
      name: "Logistik & Lager",
      challenges: ["Große Flächen", "Hochregale", "24/7 Betrieb"],
      icon: "📦"
    },
    {
      name: "Automotive",
      challenges: ["Lackiererei", "Schweißhallen", "Montagelinien"],
      icon: "🚗"
    },
  ];

  const equipment = [
    "Industriesauger & Nass-Trockensauger",
    "Scheuersaugmaschinen für große Flächen",
    "Hochdruckreiniger bis 250 bar",
    "Kehrmaschinen & Kehrsaugmaschinen",
    "Hubarbeitsbühnen & Teleskoplader",
    "Spezialreinigungsgeräte je nach Bedarf"
  ];

  const faqItems = [
    {
      question: "Was kostet eine Industriereinigung?",
      answer: "Die Kosten für Industriereinigung variieren je nach Objektgröße, Verschmutzungsgrad, Reinigungsintervall und benötigter Spezialausrüstung. Nach einer kostenlosen Objektbesichtigung erstellen wir Ihnen ein individuelles, transparentes Angebot. Faktoren wie Flächengröße, Bodenbelag, Maschinenreinigung und Arbeitszeiten (Tag/Nacht/Wochenende) beeinflussen den Preis."
    },
    {
      question: "Können Sie auch im laufenden Betrieb reinigen?",
      answer: "Ja, wir bieten flexible Reinigungszeiten an und können auch während Ihres laufenden Betriebs arbeiten. Unsere Mitarbeiter sind geschult, sicher in Produktionsumgebungen zu arbeiten, ohne Ihre Abläufe zu stören. Alternativ bieten wir auch Reinigung in Pausen, Schichtwechseln, nachts oder am Wochenende an."
    },
    {
      question: "Welche Branchen betreuen Sie?",
      answer: "Wir reinigen Industriebetriebe aus allen Branchen: Metallverarbeitung, Lebensmittelindustrie, Logistik & Lager, Automotive, Pharma, Chemie, Kunststoffverarbeitung, Elektronikfertigung und viele mehr. Jede Branche hat spezifische Anforderungen, die wir kennen und umsetzen."
    },
    {
      question: "Sind Sie HACCP-zertifiziert?",
      answer: "Ja, unsere Mitarbeiter sind in HACCP-konformen Reinigungsverfahren geschult. Wir verwenden lebensmittelsichere Reinigungsmittel und dokumentieren alle Reinigungsvorgänge gemäß Hygienevorschriften. Dies ist besonders wichtig für Betriebe der Lebensmittel- und Pharmaindustrie."
    },
    {
      question: "Welche Maschinen und Geräte setzen Sie ein?",
      answer: "Wir verfügen über professionelles Industriereinigungsequipment: Hochleistungs-Industriesauger, Scheuersaugmaschinen für große Flächen, Hochdruckreiniger bis 250 bar, Kehrmaschinen, Hubarbeitsbühnen für große Höhen und Spezialgeräte je nach Bedarf. Alle Geräte werden regelmäßig gewartet."
    },
    {
      question: "Wie schnell können Sie starten?",
      answer: "Nach der kostenlosen Objektbesichtigung und Angebotserstellung können wir in der Regel innerhalb von 1-2 Wochen mit der Reinigung beginnen. Bei Notfällen oder dringenden Reinigungsbedarfen (z.B. nach Produktionsausfällen) sind auch kurzfristigere Einsätze möglich."
    },
    {
      question: "Sind Ihre Mitarbeiter versichert?",
      answer: "Ja, alle unsere Mitarbeiter sind vollständig versichert (Haftpflicht, Unfallversicherung). Wir verfügen über umfassende Betriebshaftpflicht- und Berufshaftpflichtversicherungen. Sicherheit hat bei uns oberste Priorität – sowohl für unsere Mitarbeiter als auch für Ihr Eigentum."
    },
    {
      question: "Bieten Sie auch Sonderreinigungen an?",
      answer: "Ja, neben der regelmäßigen Unterhaltsreinigung bieten wir auch Sonderreinigungen an: Grundreinigung nach Baumaßnahmen, Maschinenreinigung, Reinigung nach Produktionsstörungen, Hochregalreinigung, Fassadenreinigung von Industriehallen und Reinigung von Lüftungs- und Absauganlagen."
    }
  ];

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Industriereinigung",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Schmitter Gebäudereinigung",
              "image": "https://schmitter-gebaeudereinigung.de/logo.png",
              "telephone": "+49-211-12345678",
              "email": "info@schmitter-gebaeudereinigung.de",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Düsseldorf",
                "addressRegion": "NRW",
                "addressCountry": "DE"
              }
            },
            "areaServed": {
              "@type": "State",
              "name": "Nordrhein-Westfalen"
            },
            "description": "Professionelle Industriereinigung für Produktionshallen, Lagerhallen, Werkstätten und Betriebsstätten in NRW. 24/7 Service, HACCP-konform, modernste Reinigungstechnik.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "EUR"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      <div className="pt-20">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <Breadcrumbs />
        </div>

        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&q=80&fm=webp"
            alt="Professionelle Industriereinigung"
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
                  Leistungsstark
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Professionelle Industriereinigung
                </h1>
                <p className="text-xl text-gray-200">
                  Für Hallen & Produktion, die laufen sollen – ohne Schmutz-Drama
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Intro */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reinigung für Industrie & Produktion
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  In der Industrie geht’s nicht um Deko – sondern um Sicherheit, Ablauf und Qualität. Wenn Öl, Staub, Späne oder Abrieb liegen bleiben, wird’s schnell rutschig, teuer oder beides.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Schmitter Gebäudereinigung bringt dafür das passende Equipment und ein Team mit Erfahrung in Hallen, Lagern und Produktionsbereichen. Und wir planen so, dass Ihr Betrieb nicht stillstehen muss: laufender Betrieb, Schichtwechsel, Nacht/Wochenende – was eben passt.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Kostenlose Objektanalyse
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Wir schauen uns Flächen, Verschmutzung und Sicherheitsregeln an – und sagen dann klar, was sinnvoll ist (und was Quatsch wäre).
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-bold"
                  >
                    Objektanalyse anfragen
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <Image
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&fm=webp"
                  alt="Saubere Produktionshalle"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Verfügbar</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-xs text-gray-600">Versichert</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Profi</div>
                    <div className="text-xs text-gray-600">Equipment</div>
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

            {/* Industries Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Spezialisiert auf verschiedene Branchen</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{industry.name}</h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Section */}
            <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Professionelles Equipment</h2>
                  <p className="text-gray-300 mb-6">
                    Für optimale Reinigungsergebnisse setzen wir auf modernste Industriereinigungstechnik:
                  </p>
                  <ul className="space-y-3">
                    {equipment.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Maßgeschneiderte Lösungen</h3>
                  <p className="text-gray-200 mb-6">
                    Jeder Industriebetrieb hat besondere Anforderungen. Wir entwickeln individuelle Reinigungskonzepte für Ihre spezifischen Bedürfnisse.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Flexible Arbeitszeiten</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Wochenend- & Nachtarbeit möglich</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Reinigung im laufenden Betrieb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vorteile Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Warum Schmitter für Ihre Industriereinigung?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">24/7 Verfügbar</h3>
                  <p className="text-gray-600 text-sm">Flexibel zu Ihren Produktionszeiten – auch nachts und am Wochenende</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Versichert & Zertifiziert</h3>
                  <p className="text-gray-600 text-sm">HACCP-konform, vollständig versichert, geschultes Personal</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Profi-Equipment</h3>
                  <p className="text-gray-600 text-sm">Modernste Industriereinigungstechnik für beste Ergebnisse</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Individuelle Konzepte</h3>
                  <p className="text-gray-600 text-sm">Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen</p>
                </div>
              </div>
            </div>

            {/* Prozess Section */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unser Reinigungsprozess</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                    <h3 className="font-bold text-gray-900 mb-2">Objektbesichtigung</h3>
                    <p className="text-gray-600 text-sm">Kostenlose Vor-Ort-Analyse Ihrer Räumlichkeiten und Anforderungen</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-blue-400 rounded-full transform -translate-y-1/2 z-10"></div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                    <h3 className="font-bold text-gray-900 mb-2">Angebot & Planung</h3>
                    <p className="text-gray-600 text-sm">Transparentes Angebot und detaillierte Reinigungsplan-Erstellung</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-blue-400 rounded-full transform -translate-y-1/2 z-10"></div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                    <h3 className="font-bold text-gray-900 mb-2">Durchführung</h3>
                    <p className="text-gray-600 text-sm">Professionelle Reinigung nach höchsten Standards und Ihrem Zeitplan</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-blue-400 rounded-full transform -translate-y-1/2 z-10"></div>
                </div>
                
                <div>
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">4</div>
                    <h3 className="font-bold text-gray-900 mb-2">Qualitätskontrolle</h3>
                    <p className="text-gray-600 text-sm">Regelmäßige Überprüfung und Dokumentation der Reinigungsqualität</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Häufig gestellte Fragen</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Alles, was Sie über unsere Industriereinigung wissen müssen
              </p>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <details key={index} className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all overflow-hidden">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      <span>{item.question}</span>
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* SEO-Content Section */}
            <div className="mb-16 prose prose-lg max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professionelle Industriereinigung in NRW – Ihr Partner für saubere Produktionsumgebungen</h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Industriereinigung in Düsseldorf, Köln und ganz NRW</strong> – Schmitter Gebäudereinigung ist Ihr verlässlicher Partner für die professionelle Reinigung von Produktionshallen, Lagerhallen, Werkstätten und Industriegebäuden. Mit über 15 Jahren Erfahrung und modernster Reinigungstechnik sorgen wir für hygienische, sichere und produktive Arbeitsumgebungen in Industriebetrieben aller Branchen.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warum ist professionelle Industriereinigung so wichtig?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In industriellen Produktionsumgebungen ist Sauberkeit kein Luxus, sondern eine Notwendigkeit. <strong>Produktionshallen und Lagerhallen</strong> sind täglich starken Beanspruchungen ausgesetzt: Staub, Schmutz, Öl, Fett, Metallspäne, Kühlmittel und andere Produktionsrückstände sammeln sich an. Ohne regelmäßige professionelle Reinigung können diese Verunreinigungen zu Sicherheitsrisiken, Maschinenverschleiß, Qualitätsproblemen und Hygienevorschriften-Verstößen führen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unsere <strong>Industriereinigung</strong> trägt dazu bei:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Arbeitssicherheit zu erhöhen durch Entfernung von Rutschgefahren und Stolperfallen</li>
                <li>Produktionsqualität zu steigern durch saubere Arbeitsumgebungen</li>
                <li>Maschinenlebensdauer zu verlängern durch regelmäßige Anlagenreinigung</li>
                <li>Hygienevorschriften einzuhalten (besonders in der Lebensmittel- und Pharmaindustrie)</li>
                <li>Mitarbeitermotivation zu fördern durch angenehme Arbeitsbedingungen</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unsere Industriereinigungsleistungen im Detail</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Hallenreinigung</strong>: Wir reinigen <strong>Produktionshallen</strong> und <strong>Lagerhallen</strong> jeder Größe – von kleinen Werkstätten bis zu mehreren tausend Quadratmetern großen Industriehallen. Mit leistungsstarken Scheuersaugmaschinen, Kehrmaschinen und Industriesaugern bewältigen wir große Flächen effizient und gründlich.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Industriebodenreinigung</strong>: Industrieböden aus Beton, Epoxidharz, PVC oder anderen Materialien erfordern spezialisierte Reinigungsverfahren. Wir kennen die richtigen Techniken und Reinigungsmittel für jeden Bodentyp und entfernen hartnäckige Verschmutzungen wie Öl, Fett, Gummiabrieb und Produktionsrückstände.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Maschinenreinigung</strong>: Produktionsmaschinen und Anlagen müssen regelmäßig gereinigt werden, um optimal zu funktionieren. Unsere Mitarbeiter sind geschult in der fachgerechten Reinigung von Maschinen, CNC-Anlagen, Schweißanlagen, Förderanlagen und weiteren Industriemaschinen – ohne die empfindliche Technik zu beschädigen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Hochdruckreinigung</strong>: Für hartnäckige Verschmutzungen setzen wir professionelle <strong>Hochdruckreiniger bis 250 bar</strong> ein. Ideal für die Reinigung von Außenflächen, Verladezonen, Maschinen und stark verschmutzten Hallenbereichen.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Branchenspezifische Industriereinigung</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jede Branche hat spezifische Anforderungen an die Industriereinigung. Bei Schmitter kennen wir die Besonderheiten:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Metallverarbeitung</strong>: Entfernung von Metallspänen, Kühlmitteln, Öl und Fett</li>
                <li><strong>Lebensmittelindustrie</strong>: HACCP-konforme Reinigung mit lebensmittelsicheren Produkten</li>
                <li><strong>Logistik & Lager</strong>: Effiziente Reinigung großer Flächen und Hochregalsysteme</li>
                <li><strong>Automotive</strong>: Spezialreinigung von Lackierereien, Schweißhallen und Montagelinien</li>
                <li><strong>Pharma & Chemie</strong>: Reinraumreinigung nach GMP-Standards</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">24/7 Industriereinigung – flexibel zu Ihren Zeiten</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wir wissen, dass Produktionsstillstände teuer sind. Deshalb bieten wir <strong>flexible Reinigungszeiten</strong> an:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Reinigung im laufenden Betrieb während der Produktion</li>
                <li>Reinigung in Produktionspausen und Schichtwechseln</li>
                <li>Nachtarbeit und Wochenend-Reinigung</li>
                <li>Notfall-Reinigung bei Produktionsstörungen</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Modernste Reinigungstechnik für beste Ergebnisse</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Für optimale Reinigungsergebnisse in Industrieumgebungen ist professionelles Equipment unverzichtbar. Unsere Ausstattung umfasst:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Hochleistungs-Industriesauger für grobe und feine Verschmutzungen</li>
                <li>Große Scheuersaugmaschinen für effiziente Flächenreinigung</li>
                <li>Hochdruckreiniger bis 250 bar für hartnäckige Verschmutzungen</li>
                <li>Kehrmaschinen und Kehrsaugmaschinen für schnelle Hallenreinigung</li>
                <li>Hubarbeitsbühnen und Teleskoplader für große Höhen</li>
                <li>Spezialgeräte je nach individuellen Anforderungen</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kostenlose Objektanalyse und individuelles Angebot</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jeder Industriebetrieb ist einzigartig. Deshalb erstellen wir nach einer <strong>kostenlosen Vor-Ort-Besichtigung</strong> ein maßgeschneidertes Reinigungskonzept für Ihre spezifischen Anforderungen. Wir analysieren Ihre Räumlichkeiten, Verschmutzungsgrad, Bodenbeläge, Maschinen und Produktionsabläufe und entwickeln einen effizienten, kostengünstigen Reinigungsplan.
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Bereit für optimale Betriebshygiene?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose Objektanalyse und ein individuelles Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-bold shadow-xl hover:scale-105 transform"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Kostenlose Objektanalyse
                </Link>
                <a
                  href="tel:+4920189083050"
                  className="inline-flex items-center justify-center bg-blue-800 text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-all font-bold shadow-xl hover:scale-105 transform"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0201-89083050
                </a>
              </div>
              <p className="text-blue-200 text-sm mt-6">
                Kostenlose Beratung • Transparente Preise • Schneller Start
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

