import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Professionelle Unterhaltsreinigung in NRW - Treppenhäuser, Flure & Gemeinschaftsflächen | DATRA - Gebäudereinigung",
  description: "Zuverlässige Unterhaltsreinigung für Wohn- und Gewerbeimmobilien in NRW. Treppenhäuser, Eingangsbereiche, Außenanlagen. Langfristiger Werterhalt garantiert. ✓ Täglich ✓ Wöchentlich ✓ Monatlich",
  keywords: ["Unterhaltsreinigung", "Treppenhaus reinigen", "Hausreinigung NRW", "Immobilienreinigung", "Gemeinschaftsflächen", "Unterhaltsreinigung Düsseldorf", "Unterhaltsreinigung Köln", "Hausverwaltung Reinigung", "Wohnungswirtschaft"],
  openGraph: {
    title: "Professionelle Unterhaltsreinigung in NRW | DATRA - Gebäudereinigung",
    description: "Regelmäßige und zuverlässige Pflege für gepflegte Immobilien.",
    type: "website",
  },
};

export default function UnterhaltsreinigungPage() {
  const features = [
    {
      icon: "🏢",
      title: "Treppenhäuser & Eingangsbereiche",
      description: "Regelmäßige Reinigung von Treppenhäusern, Fluren und Eingangsbereichen für einen gepflegten ersten Eindruck bei Bewohnern und Besuchern",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80&fm=webp"
    },
    {
      icon: "🪟",
      title: "Glas- & Fensterreinigung",
      description: "Fachgerechte Reinigung aller Fenster, Glastüren und Glasflächen für perfekte Durchsicht und helle Räume",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&fm=webp"
    },
    {
      icon: "🌳",
      title: "Außenanlagen & Gehwege",
      description: "Pflege von Eingangsbereichen, Gehwegen und Außenanlagen das ganze Jahr über - inklusive Winterdienst",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&fm=webp"
    },
    {
      icon: "🛗",
      title: "Aufzugsreinigung",
      description: "Gründliche Reinigung der Aufzugskabinen, Türen, Spiegel und Bedienelemente für Hygiene und Sicherheit",
      image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80&fm=webp"
    },
    {
      icon: "🏠",
      title: "Gemeinschaftsräume",
      description: "Reinigung von Waschküchen, Fahrradkellern, Hobbyräumen und anderen Gemeinschaftsbereichen",
      image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&q=80&fm=webp"
    },
    {
      icon: "🗑️",
      title: "Müllraum- & Kellerreinigung",
      description: "Hygienische Reinigung und Desinfektion der Müllräume, Kellerabgänge und Lagerräume",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80&fm=webp"
    },
  ];

  const cleaningCycles = [
    {
      title: "Tägliche Reinigung",
      items: ["Eingangsbereiche", "Empfangsbereiche", "Hochfrequentierte Flure"],
      price: "Auf Anfrage"
    },
    {
      title: "Wöchentliche Reinigung",
      items: ["Treppenhäuser", "Aufzüge", "Gemeinschaftsräume"],
      price: "Auf Anfrage"
    },
    {
      title: "Monatliche Reinigung",
      items: ["Kellerräume", "Dachböden", "Außenanlagen"],
      price: "Auf Anfrage"
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
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80&fm=webp"
            alt="Unterhaltsreinigung Treppenhaus"
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
                <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Werterhalt garantiert
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Professionelle Unterhaltsreinigung
                </h1>
                <p className="text-xl text-gray-200">
                  Für gepflegte Immobilien und langfristigen Werterhalt
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
                  Professionelle Unterhaltsreinigung in Düsseldorf, Köln und ganz NRW
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Die Unterhaltsreinigung ist das Herzstück einer gepflegten Immobilie und entscheidend für den langfristigen Werterhalt. Mit unseren professionellen Reinigungszyklen sorgen wir dafür, dass Treppenhäuser, Flure, Eingangsbereiche und Gemeinschaftsflächen stets sauber, hygienisch und einladend sind.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Seit über 15 Jahren sind wir der zuverlässige Partner für Hausverwaltungen, Wohnungsbaugesellschaften, Eigentümergemeinschaften und Immobilieneigentümer in ganz Nordrhein-Westfalen. Unser geschultes Reinigungspersonal arbeitet diskret, zuverlässig und nach fest vereinbarten Qualitätsstandards.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Unser umfassender Service erstreckt sich über alle Bereiche Ihrer Immobilie – von der Haustür über das Treppenhaus bis zum Dachboden. Wir reinigen nicht nur oberflächlich, sondern sorgen für nachhaltige Sauberkeit, die Bewohner und Besucher sofort wahrnehmen.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Durch regelmäßige professionelle Reinigung erhalten Sie den Wert Ihrer Immobilie langfristig, reduzieren Instandhaltungskosten und schaffen ein angenehmes Wohnumfeld, das die Zufriedenheit Ihrer Mieter steigert. Eine gepflegte Immobilie ist eine Investition, die sich auszahlt.
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r-xl">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Für Hausverwaltungen optimiert</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Digitale Reinigungs nachweise, transparente Dokumentation und direkte Ansprechpartner für eine reibungslose Zusammenarbeit mit Ihrer Verwaltung.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Kostenlose Objektbesichtigung & Angebot
                    </h3>
                    <p className="text-gray-600 mb-4">Wir besichtigen Ihre Immobilie vor Ort, analysieren den Bedarf und erstellen Ihnen ein transparentes, individuelles Angebot!</p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg"
                    >
                      Jetzt Termin vereinbaren
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
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&fm=webp"
                    alt="Gepflegtes Treppenhaus nach professioneller Reinigung"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl">
                    <div className="text-3xl font-bold text-green-600 mb-1">15+</div>
                    <div className="text-sm text-gray-900 font-semibold">Jahre</div>
                    <div className="text-xs text-gray-600 mt-1">Erfahrung</div>
                  </div>
                </div>

                {/* Zweites Bild */}
                <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fm=webp"
                    alt="Saubere Eingangshalle in Wohnimmobilie"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                      <p className="text-sm font-bold text-gray-900">Vertrauen von über 500 Immobilien</p>
                      <p className="text-xs text-gray-600 mt-1">Wohngebäude · Gewerbeimmobilien · Bürokomplexe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&fm=webp"
                    alt="Professionelles Reinigungsteam bei der Arbeit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-green-600">500+</div>
                      <div className="text-xs text-gray-600 font-semibold">Objekte</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-green-600">100%</div>
                      <div className="text-xs text-gray-600 font-semibold">Zuverlässig</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-green-600">24/7</div>
                      <div className="text-xs text-gray-600 font-semibold">Service</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Warum DATRA - Gebäudereinigung für Ihre Unterhaltsreinigung?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Individuelle Reinigungspläne</h3>
                        <p className="text-gray-600">Maßgeschneiderte Reinigungszyklen abgestimmt auf Ihre Immobilie - täglich, wöchentlich oder monatlich. Sie entscheiden den Rhythmus.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Feste Ansprechpartner</h3>
                        <p className="text-gray-600">Ihr persönlicher Objektbetreuer kennt Ihre Immobilie und ist jederzeit für Sie erreichbar. Kurze Reaktionszeiten garantiert.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Digitale Dokumentation</h3>
                        <p className="text-gray-600">Lückenlose Reinigungs nachweise und Qualitätskontrollen - digital abrufbar für Sie und Ihre Hausverwaltung.</p>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Jetzt kostenlos beraten lassen!
                        </h3>
                        <p className="text-gray-600 mb-4">Rufen Sie uns an und vereinbaren Sie einen Termin für eine kostenlose Objektbesichtigung.</p>
                        <a
                          href="tel:+4921112345678"
                          className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all font-bold shadow-lg w-full sm:w-auto"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          0211 123 456 78
                        </a>
                        <p className="text-sm text-gray-500 mt-3">Montag - Freitag: 8:00 - 18:00 Uhr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid with Images */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Unser Leistungsumfang für Ihre Immobilie</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Umfassende Reinigungsdienstleistungen für alle Bereiche Ihrer Immobilie
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
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

            {/* Cleaning Cycles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Reinigungszyklen</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {cleaningCycles.map((cycle, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{cycle.title}</h3>
                    <ul className="space-y-3 mb-6">
                      {cycle.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-gray-500 mb-4">{cycle.price}</div>
                    <Link
                      href="/kontakt"
                      className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-bold"
                    >
                      Angebot anfordern
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Das sagen unsere Kunden</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Vertrauen Sie auf die Erfahrungen zahlreicher zufriedener Hausverwaltungen und Eigentümer
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mr-4">
                      MS
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Michael Schmidt</div>
                      <div className="text-sm text-gray-600">Hausverwaltung, Düsseldorf</div>
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
                    "Seit 5 Jahren betreut DATRA - Gebäudereinigung unsere 12 Wohnobjekte. Pünktlich, zuverlässig und die Mieter sind hochzufrieden. Beste Empfehlung!"
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mr-4">
                      JH
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Julia Hoffmann</div>
                      <div className="text-sm text-gray-600">Wohnungseigentümerin, Köln</div>
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
                    "Unser Treppenhaus sieht immer blitzsauber aus. Das Team ist freundlich und arbeitet sehr gründlich. Preis-Leistung top!"
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mr-4">
                      RB
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Robert Becker</div>
                      <div className="text-sm text-gray-600">Eigentümergemeinschaft, Essen</div>
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
                    "Professionelle Abwicklung und faire Preise. Besonders schätzen wir die regelmäßigen Qualitätskontrollen und die gute Erreichbarkeit."
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Häufig gestellte Fragen</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Antworten auf die wichtigsten Fragen zur Unterhaltsreinigung
              </p>
              <div className="max-w-4xl mx-auto space-y-4">
                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Wie oft sollte eine Unterhaltsreinigung durchgeführt werden?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Die Häufigkeit hängt von der Frequentierung ab. Eingangsbereiche in Mehrfamilienhäusern sollten wöchentlich gereinigt werden, während Treppenhäuser je nach Nutzung wöchentlich oder zweiwöchentlich gereinigt werden können. Kellerräume und Dachböden reichen meist monatlich oder quartalsweise.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Was kostet eine Unterhaltsreinigung?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Die Kosten variieren je nach Objektgröße, Reinigungsumfang und Frequenz. Ein Treppenhaus in einem 10-Parteien-Haus kostet bei wöchentlicher Reinigung ca. 80-120€ pro Monat. Wir erstellen Ihnen gerne ein individuelles, transparentes Angebot nach Objektbesichtigung.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Muss ich als Eigentümer anwesend sein?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Nein, das ist nicht notwendig. Nach einer Einweisung vor Ort können unsere Teams selbstständig arbeiten. Bei Mehrfamilienhäusern ist meist ein Schlüsselsafe oder ein Hausmeister vorhanden. Wir arbeiten versichert und mit polizeilich überprüftem Personal.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Welche Reinigungsmittel verwenden Sie?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Wir verwenden professionelle, umweltfreundliche Reinigungsmittel, die für Wohnimmobilien geeignet sind. Auf Wunsch können wir auch mit biologisch abbaubaren oder allergikerfreundlichen Produkten arbeiten. Alle Mittel und Geräte bringen wir selbst mit.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Wie flexibel sind die Vertragslaufzeiten?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Wir bieten flexible Vertragslaufzeiten an - von 3 Monaten bis zu langfristigen Rahmenverträgen. Die Kündigungsfrist beträgt in der Regel 4 Wochen. Bei Bedarf können wir auch kurzfristige Vertretungen oder Urlaubsreinigungen übernehmen.
                  </div>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    Wie wird die Qualität kontrolliert?
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Unser Qualitätsmanager führt regelmäßige Kontrollbegehungen durch und dokumentiert diese. Zusätzlich erhalten Sie von uns digitale Reinigungsnachweise. Bei Beanstandungen reagieren wir innerhalb von 24 Stunden und bessern kostenlos nach.
                  </div>
                </details>
              </div>
            </div>

            {/* Regional SEO Section */}
            <div className="mb-20 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Unterhaltsreinigung in ganz NRW</h2>
                <p className="text-xl text-gray-600 mb-8 text-center">
                  Wir sind Ihr zuverlässiger Partner für professionelle Unterhaltsreinigung in allen Regionen Nordrhein-Westfalens
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Großstädte
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>✓ Unterhaltsreinigung Düsseldorf</p>
                      <p>✓ Unterhaltsreinigung Köln</p>
                      <p>✓ Unterhaltsreinigung Essen</p>
                      <p>✓ Unterhaltsreinigung Dortmund</p>
                      <p>✓ Unterhaltsreinigung Duisburg</p>
                      <p>✓ Unterhaltsreinigung Bochum</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Warum regionale Nähe wichtig ist:</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Als regional verwurzeltes Unternehmen in NRW sind wir schnell vor Ort und kennen die lokalen Gegebenheiten. Kurze Anfahrtswege bedeuten für Sie pünktliche Reinigungstermine und schnelle Reaktionszeiten bei Sonderwünschen oder Notfällen.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Unsere Teams sind in Ihrer Region stationiert und können bei Bedarf flexibel einspringen. Das spart Ihnen Kosten, schont die Umwelt und garantiert eine persönliche Betreuung durch feste Ansprechpartner, die Sie und Ihre Immobilie kennen.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ihre Immobilie in sauberen Händen</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Wir erstellen Ihnen ein individuelles Angebot für Ihre Immobilie – kostenlos, unverbindlich und transparent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold shadow-xl"
                >
                  Jetzt Angebot anfordern
                </Link>
                <a
                  href="tel:+4921112345678"
                  className="inline-flex items-center justify-center bg-blue-500 text-white border-2 border-white/50 px-8 py-4 rounded-lg hover:bg-blue-400 transition-all font-bold"
                >
                  0211 123 456 78
                </a>
              </div>
              <p className="text-blue-200 text-sm mt-6">
                Kostenlose Objektbesichtigung & persönliche Beratung vor Ort
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

