import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Professionelle Praxisreinigung in NRW - Arztpraxen, Kliniken & Medizinische Einrichtungen | Schmitter Gebäudereinigung",
  description:
    "Spezialisierte Praxisreinigung nach RKI-Richtlinien in NRW. Hygienische Reinigung für Arztpraxen, Zahnarztpraxen und Kliniken – klar geplant, zuverlässig umgesetzt.",
  keywords: ["Praxisreinigung", "Arztpraxis reinigen", "Zahnarztpraxis Reinigung", "Klinik Reinigung", "medizinische Reinigung", "Hygiene", "Desinfektion", "Praxisreinigung Düsseldorf", "Praxisreinigung Köln", "Praxisreinigung NRW", "Hygienekonzept"],
  openGraph: {
    title: "Professionelle Praxisreinigung in NRW | Schmitter Gebäudereinigung",
    description: "Hygienische Reinigung für medizinische Einrichtungen nach höchsten Standards.",
    type: "website",
  },
};

export default function PraxisreinigungPage() {
  const features = [
    {
      title: "Desinfektion nach Hygienekonzept",
      description: "Professionelle Flächendesinfektion nach gängigen Hygienerichtlinien – passend zum Bereich und zur Aufgabe",
      icon: "🦠",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80&fm=webp"
    },
    {
      title: "Behandlungs- & Untersuchungsräume",
      description: "Gründliche Reinigung und Desinfektion aller medizinischen Räume und patientennahen Oberflächen",
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=600&q=80&fm=webp"
    },
    {
      title: "Wartebereich & Empfang",
      description: "Freundliche und hygienische Atmosphäre für Ihre Patienten - Ihr Aushängeschild",
      icon: "🪑",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&fm=webp"
    },
    {
      title: "Hygienische Sanitärreinigung",
      description: "Besonders gründliche Reinigung und Desinfektion nach medizinischen Standards",
      icon: "🚿",
      image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80&fm=webp"
    },
    {
      title: "Medizinische Geräteoberflächen",
      description: "Schonende und fachgerechte Reinigung sensibler medizinischer Geräte und Apparaturen",
      icon: "⚕️",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80&fm=webp"
    },
    {
      title: "Abfallentsorgung nach Vorgaben",
      description: "Sachgerechte Trennung und Entsorgung von Praxisabfällen – nachvollziehbar und sauber geregelt",
      icon: "♻️",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80&fm=webp"
    },
  ];

  const standards = [
    {
      title: "RKI-Konformität",
      description: "Alle Reinigungsarbeiten entsprechen den Richtlinien des Robert Koch-Instituts",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Hygiene-Schulungen",
      description: "Unser Personal wird regelmäßig in medizinischer Hygiene geschult",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Passende Desinfektionsmittel",
      description: "Desinfektionsmittel passend zum Bereich – sinnvoll eingesetzt, damit Hygiene stimmt und Materialien geschont werden",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
  ];

  const praxisTypes = [
    {
      name: "Allgemeinarztpraxen",
      services: ["Wartezimmer", "Behandlungsräume", "Empfang", "Sanitär"]
    },
    {
      name: "Zahnarztpraxen",
      services: ["Behandlungszimmer", "Sterilisationsraum", "Röntgenraum", "Labor"]
    },
    {
      name: "Facharztpraxen",
      services: ["Spezialräume", "Diagnosegeräte", "OP-Räume", "Umkleiden"]
    },
    {
      name: "Physiotherapie",
      services: ["Behandlungsräume", "Trainingsbereich", "Umkleiden", "Duschen"]
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
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80&fm=webp"
            alt="Professionelle Praxisreinigung"
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
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  RKI-konform
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Professionelle Praxisreinigung
                </h1>
                <p className="text-xl text-gray-200">
                  Für höchste Hygiene in medizinischen Einrichtungen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Intro Section - Expanded */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Professionelle Praxisreinigung nach RKI-Richtlinien in Düsseldorf, Köln und ganz NRW
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  In einer Praxis ist „sauber“ nicht optional. Hygiene muss stimmen – für Patient:innen, Team und Prüfungen. Wir reinigen so, dass es nachvollziehbar ist: klare Abläufe, passende Mittel, und Dokumentation da, wo sie gebraucht wird.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Schmitter Gebäudereinigung arbeitet seit vielen Jahren mit Arztpraxen, Zahnärzten, Kliniken und Therapiezentren in NRW. Unser Team ist für medizinische Umgebungen geschult und arbeitet diskret – damit der Praxisbetrieb nicht aus dem Takt gerät.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Wir orientieren uns an gängigen Hygienerichtlinien und setzen Desinfektion dort ein, wo sie sinnvoll und gefordert ist. Kurz: nicht „alles mit Kanonen“, sondern passend nach Risiko und Bereich.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Klare Standards sorgen bei uns für Struktur im Hintergrund. Dazu kommen Versicherung, Zuverlässigkeit und sensible Kommunikation – weil in Praxen eben nicht nur Staub herumliegt.
                </p>

                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-xl">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Gesetzliche Pflicht für Praxisbetreiber</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Kurz gesagt: Hygiene muss sitzen. Wir helfen bei sauberer Umsetzung und liefern die Nachweise, die im Alltag (und bei Kontrollen) wirklich helfen.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Kostenlose Hygieneberatung & Vor-Ort-Analyse
                    </h3>
                    <p className="text-gray-600 mb-4">Wir beraten Sie kostenlos zu optimalen Reinigungsintervallen, gesetzlichen Vorgaben und erstellen einen individuellen Hygieneplan für Ihre Praxis!</p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg"
                    >
                      Jetzt Beratung anfordern
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Erstes Bild */}
                <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80&fm=webp"
                    alt="Professionelle Praxisreinigung mit medizinischer Hygiene"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl">
                    <div className="text-3xl font-bold text-red-600 mb-1">RKI</div>
                    <div className="text-sm text-gray-900 font-semibold">konform</div>
                    <div className="text-xs text-gray-600 mt-1">passende Mittel</div>
                  </div>
                </div>

                {/* Zweites Bild */}
                <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80&fm=webp"
                    alt="Hygienische Reinigung medizinischer Einrichtungen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                      <p className="text-sm font-bold text-gray-900">Spezialisiert auf medizinische Einrichtungen</p>
                      <p className="text-xs text-gray-600 mt-1">Arztpraxen · Zahnarztpraxen · Kliniken</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section with Image */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80&fm=webp"
                    alt="Professionelle Praxisreinigung"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-red-600">Hygienisch</div>
                      <div className="text-xs text-gray-600 font-semibold">geplant</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-red-600">Zuverlässig</div>
                      <div className="text-xs text-gray-600 font-semibold">im Ablauf</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-red-600">Flexibel</div>
                      <div className="text-xs text-gray-600 font-semibold">bei Zeiten</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Warum Schmitter Gebäudereinigung für Ihre Praxisreinigung?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Einfach & Zuverlässig</h3>
                        <p className="text-gray-600">Wir kümmern uns ausschließlich um die professionelle Reinigung Ihrer Praxis. Keine komplizierten Prozesse - einfach sauber und hygienisch.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Arbeitszeiten</h3>
                        <p className="text-gray-600">Wir reinigen nach Ihren Sprechzeiten - morgens vor Praxisbeginn oder abends nach Feierabend. Sie entscheiden, wann es passt.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Geschultes Personal</h3>
                        <p className="text-gray-600">Unser Team kennt die Hygieneanforderungen in Praxen und arbeitet diskret, zuverlässig und immer freundlich.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid with Images */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Unser Leistungsumfang für Ihre Praxis</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Spezialisierte Reinigungsdienste für höchste Hygieneanforderungen in medizinischen Einrichtungen
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="text-5xl mb-2">{feature.icon}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Hygiene-Standards</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {standards.map((standard, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                      {standard.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{standard.title}</h3>
                    <p className="text-gray-600">{standard.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Praxis Types */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Spezialisiert auf alle Praxisarten</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Individuelle Reinigungskonzepte für jeden medizinischen Fachbereich
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {praxisTypes.map((type, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                      <svg className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{type.name}</h3>
                    <ul className="space-y-2">
                      {type.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Cleaning Process */}
            <div className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Unser Reinigungsprozess</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Strukturierte Vorgehensweise für maximale Hygiene und Sicherheit
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Bedarfsanalyse</h3>
                  <p className="text-gray-600">
                    Vor-Ort-Besichtigung und Erstellung eines individuellen Hygieneplans nach TRBA 250
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Schulung & Vorbereitung</h3>
                  <p className="text-gray-600">
                    Einarbeitung unseres Teams in Ihre Praxisabläufe und Sicherheitsbestimmungen
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fachgerechte Reinigung</h3>
                  <p className="text-gray-600">
                    Systematische Reinigung und Desinfektion nach gängigen Hygienerichtlinien mit passenden Mitteln
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Qualitätskontrolle</h3>
                  <p className="text-gray-600">
                    Regelmäßige Kontrollen und lückenlose Dokumentation für Ihr Qualitätsmanagement
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Das sagen unsere Kunden</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Vertrauen Sie auf die Erfahrungen zahlreicher zufriedener Praxisbetreiber
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold text-red-600 mr-4">
                      DM
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Dr. med. Müller</div>
                      <div className="text-sm text-gray-600">Allgemeinarzt, Düsseldorf</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "Seit 3 Jahren arbeiten wir mit Schmitter Gebäudereinigung zusammen. Die Reinigung erfolgt zuverlässig nach RKI-Standards und die Dokumentation ist perfekt für unsere Audits."
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold text-red-600 mr-4">
                      SK
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Dr. Sarah Klein</div>
                      <div className="text-sm text-gray-600">Zahnärztin, Köln</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "Absolute Profis! Das Team kennt sich mit den speziellen Anforderungen in Zahnarztpraxen bestens aus. Patienten loben regelmäßig die Sauberkeit."
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold text-red-600 mr-4">
                      TW
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Thomas Weber</div>
                      <div className="text-sm text-gray-600">Physiotherapie, Essen</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "Flexible Arbeitszeiten außerhalb unserer Praxiszeiten und immer freundlich. Die Trainingsgeräte und Duschen werden perfekt gereinigt!"
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Häufig gestellte Fragen</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Antworten auf die wichtigsten Fragen zur Praxisreinigung
              </p>
              <div className="max-w-4xl mx-auto space-y-4">
                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Was kostet eine professionelle Praxisreinigung?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Kommt auf Fläche, Fachrichtung und Häufigkeit an. Als grober Richtwert: eine Praxis um 100 m² liegt oft bei ca. 150–250 € pro Reinigung. Den echten Preis bekommen Sie nach kurzer Vor-Ort-Absprache – transparent und ohne versteckte „ach übrigens“-Positionen.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Welche Desinfektionsmittel verwenden Sie?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Passende Mittel – passend zum Bereich und zur Aufgabe. Nicht „alles desinfizieren, immer“, sondern sinnvoll nach Risiko, damit Hygiene stimmt und Materialien nicht unnötig leiden.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Sind Ihre Mitarbeiter speziell geschult?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Ja. Hygiene in medizinischen Bereichen ist ein eigenes Spielfeld – dafür ist unser Team geschult. Dazu kommen Versicherung, Zuverlässigkeit und Diskretion im Praxisalltag.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Können Sie außerhalb der Sprechzeiten reinigen?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Ja – das ist sogar meistens der Standard. Vor Öffnung, nach Schluss oder am Wochenende: Wir planen so, dass Patient:innen und Ablauf nicht gestört werden.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Wie wird die Reinigung dokumentiert?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Wenn Dokumentation nötig ist, machen wir sie ordentlich: Datum, Uhrzeit, was gemacht wurde (und ggf. Mittel). So haben Sie etwas in der Hand – ohne Papierchaos.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Was passiert bei akuten Hygiene-Notfällen?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Wenn’s dringend ist, reagieren wir schnell. Sie rufen an, wir klären Lage und Vorgehen – und kommen so zügig wie möglich. Wichtig: Im Notfall lieber einmal zu früh melden als zu spät.
                  </div>
                </details>
              </div>
            </div>

            {/* Regional SEO Section */}
            <div className="mb-20 bg-gradient-to-br from-red-50 to-blue-50 rounded-3xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Praxisreinigung in ganz NRW</h2>
                <p className="text-xl text-gray-600 mb-8 text-center">
                  Wir sind Ihr zuverlässiger Partner für professionelle Praxisreinigung in allen Regionen Nordrhein-Westfalens
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Großstädte
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>✓ Praxisreinigung Düsseldorf</p>
                      <p>✓ Praxisreinigung Köln</p>
                      <p>✓ Praxisreinigung Essen</p>
                      <p>✓ Praxisreinigung Dortmund</p>
                      <p>✓ Praxisreinigung Duisburg</p>
                      <p>✓ Praxisreinigung Bochum</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Weitere Städte
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>✓ Mönchengladbach, Neuss, Krefeld</p>
                      <p>✓ Wuppertal, Solingen, Leverkusen</p>
                      <p>✓ Bonn, Aachen, Münster</p>
                      <p>✓ Bielefeld, Paderborn, Siegen</p>
                      <p>✓ Und viele weitere Städte in NRW</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Warum lokale Expertise wichtig ist:</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Als regional verwurzeltes Unternehmen kennen wir die spezifischen Anforderungen der Gesundheitsämter in NRW und arbeiten eng mit lokalen Berufsgenossenschaften zusammen. Kurze Anfahrtswege garantieren Ihnen flexible Terminvereinbarungen und schnelle Reaktionszeiten bei Notfällen.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Unsere Teams sind in Ihrer Region stationiert und können bei Bedarf innerhalb von 24 Stunden vor Ort sein. Das spart Ihnen Kosten und garantiert eine persönliche Betreuung auf Augenhöhe.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Ihre Praxis in sicheren Händen</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Verlassen Sie sich auf unsere Expertise in medizinischer Hygiene. Kostenlose Beratung und individuelles Angebot.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold shadow-xl"
                  >
                    Jetzt beraten lassen
                  </Link>
                  <a
                    href="tel:+4920189083050"
                    className="inline-flex items-center justify-center bg-blue-500 text-white border-2 border-white/50 px-8 py-4 rounded-lg hover:bg-blue-400 transition-all font-bold"
                  >
                    0201-89083050
                  </a>
                </div>
                <p className="text-blue-200 text-sm mt-6">
                  Wir sind auch außerhalb der Sprechzeiten für Sie da
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

