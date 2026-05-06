import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Büroreinigung NRW | Schmitter Gebäudereinigung – klar, planbar, zuverlässig",
  description:
    "Büroreinigung in NRW (Düsseldorf, Köln & Umgebung): feste Abläufe, saubere Küche/Sanitär/Arbeitsplätze – ohne Fachwort-Stress. Unverbindlich anfragen.",
  keywords: ["Büroreinigung", "Office Cleaning", "Arbeitsplatzreinigung", "Büro putzen", "Gewerbereinigung", "Büroreinigung Düsseldorf", "Büroreinigung Köln", "Büroreinigung NRW", "Gewerbliche Reinigung", "Unternehmensreinigung"],
  openGraph: {
    title: "Büroreinigung NRW | Schmitter Gebäudereinigung",
    description:
      "Büroreinigung ohne Floskeln: klare Absprachen, feste Zeiten, sauberes Ergebnis – NRW-weit.",
    type: "website",
  },
};

export default function BueroreinigungPage() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Systematische Arbeitsplatzreinigung",
      description: "Desinfektion von Schreibtischen, Tastaturen, Mäusen und Telefonen"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Professionelle Bodenpflege",
      description: "Saugen, Wischen und Pflege aller Bodenbeläge"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Hygienische Sanitärreinigung",
      description: "Gründliche Reinigung und Desinfektion der Sanitäranlagen"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Küchen- & Pausenraumreinigung",
      description: "Reinigung von Küchen, Kaffeemaschinen und Gemeinschaftsbereichen"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Papierkorb-Entleerung",
      description: "Regelmäßige Abfallentsorgung und Mülltrennung"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Flexible Reinigungszeiten",
      description: "Täglich, wöchentlich oder nach Ihrem individuellen Zeitplan"
    },
  ];

  const benefits = [
    "Erhöhte Mitarbeiterproduktivität durch saubere Arbeitsumgebung",
    "Professioneller Eindruck bei Kunden und Geschäftspartnern",
    "Reduzierte Krankheitsausfälle durch hygienische Standards",
    "Längere Lebensdauer von Büromöbeln und -geräten",
    "Individuelle Reinigungspläne nach Ihren Anforderungen",
    "Umweltfreundliche Reinigungsmittel ohne schädliche Chemikalien"
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
            "name": "Professionelle Büroreinigung",
            "description": "Büroreinigung in NRW: klare Absprachen, feste Abläufe, saubere Ergebnisse – ohne Fachwort-Stress.",
            "provider": {
              "@type": "Organization",
              "name": "Schmitter Gebäudereinigung"
            },
            "areaServed": {
              "@type": "State",
              "name": "Nordrhein-Westfalen"
            },
            "serviceType": "Büroreinigung"
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fm=webp"
            alt="Professionelle Büroreinigung"
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
                  Büro sauber, Kopf frei
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Professionelle Büroreinigung
                </h1>
                <p className="text-xl text-gray-200">
                  Damit es sauber wirkt – und sich auch so anfühlt (in ganz NRW)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Intro Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Professionelle Büroreinigung in Düsseldorf, Köln und ganz NRW
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Ein sauberes Büro ist kein Luxus – es spart Nerven. Wenn Küche, Sanitär und Meetingraum passen, arbeitet es sich einfach ruhiger (und der erste Eindruck beim Besuch ist auch direkt besser).
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Schmitter Gebäudereinigung unterstützt Unternehmen in ganz Nordrhein-Westfalen seit über 15 Jahren – mit festen Abläufen, klaren Absprachen und Zeiten, die Ihren Betrieb nicht stören. Täglich, wöchentlich oder nach Bedarf: Sie sagen, wie es passt – wir setzen es um.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Und ja: Qualität ist bei uns nicht „Gefühl“, sondern System. ISO 9001, dokumentierte Checklisten und ein Team, das weiß, welche Flächen im Büro schnell eklig werden (und welche nur laut aussehen).
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Kostenloses Erstgespräch
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Kurz sagen, was Sie brauchen (Fläche + Rhythmus reichen) – wir melden uns mit einem Angebot, das man versteht. Unverbindlich.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg"
                  >
                    Angebot anfragen
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80&fm=webp"
                  alt="Sauberes modernes Büro mit Reinigungspersonal"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="text-4xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-semibold">Kundenzufriedenheit</div>
                  <div className="text-xs text-gray-500 mt-1">Über 500+ Unternehmen</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section with Image */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&fm=webp"
                    alt="Professionelles Reinigungsteam bei der Arbeit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-blue-600">15+</div>
                      <div className="text-xs text-gray-600 font-semibold">Jahre Erfahrung</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-blue-600">500+</div>
                      <div className="text-xs text-gray-600 font-semibold">Zufriedene Kunden</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-blue-600">50+</div>
                      <div className="text-xs text-gray-600 font-semibold">Mitarbeiter</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Warum Schmitter Gebäudereinigung für Ihre Büroreinigung?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Qualität mit Plan (ISO 9001)</h3>
                        <p className="text-gray-600">
                          Bedeutet bei uns: sauber ist messbar. Mit Checklisten, klaren Standards und regelmäßigen Kontrollen – nicht „wird schon“.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Reinigungszeiten</h3>
                        <p className="text-gray-600">
                          Früh, spät oder Wochenende – wir reinigen so, dass niemand beim Telefonieren um den Wischwagen slalom fahren muss.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Umweltfreundlich & Nachhaltig</h3>
                        <p className="text-gray-600">EU-Ecolabel zertifizierte Reinigungsmittel ohne schädliche Chemikalien. Gut für Ihre Gesundheit, gut für die Umwelt.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unser Leistungsumfang</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-20">
              <h2 className="text-3xl font-bold mb-8">Ihre Vorteile mit Schmitter Gebäudereinigung Büroreinigung</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Unser Reinigungsprozess – So arbeiten wir</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Transparenz und Professionalität sind uns wichtig. Erfahren Sie, wie wir Ihre Büroreinigung optimal umsetzen.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Bedarfsanalyse</h3>
                    <p className="text-gray-600 text-sm">Kostenlose Vor-Ort-Besichtigung und detaillierte Analyse Ihrer Räumlichkeiten und spezifischen Anforderungen.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Individuelles Angebot</h3>
                    <p className="text-gray-600 text-sm">Erstellung eines maßgeschneiderten Reinigungsplans mit transparenter Preiskalkulation – fest und kalkulierbar.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Professionelle Umsetzung</h3>
                    <p className="text-gray-600 text-sm">Zuverlässige Durchführung nach vereinbartem Plan durch geschultes Personal mit modernster Ausrüstung.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">4</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Qualitätskontrolle</h3>
                    <p className="text-gray-600 text-sm">Regelmäßige Qualitätschecks und offene Kommunikation für kontinuierliche Optimierung unserer Leistungen.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Das sagen unsere Kunden</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Über 500 Unternehmen in NRW vertrauen auf unsere professionelle Büroreinigung
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                      TM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Thomas Müller</h4>
                      <p className="text-sm text-gray-600">Geschäftsführer, IT-Consulting</p>
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
                    "Seit 3 Jahren reinigt Schmitter Gebäudereinigung unsere Büroräume. Pünktlich, zuverlässig und immer in Top-Qualität. Das Team arbeitet so diskret, dass wir es kaum merken – aber das Ergebnis sehen wir jeden Tag!"
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      SK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sarah Klein</h4>
                      <p className="text-sm text-gray-600">HR-Managerin, Startup</p>
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
                    "Als junges Startup war uns wichtig, einen flexiblen Partner zu finden. Schmitter Gebäudereinigung hat perfekt zu uns gepasst – faire Preise, keine lange Vertragsbindung und super Service!"
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                      MW
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Michael Wagner</h4>
                      <p className="text-sm text-gray-600">Facility Manager, Konzern</p>
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
                    "Bei 2.500 m² Bürofläche brauchen wir absolute Profis. Schmitter Gebäudereinigung liefert konstant hervorragende Qualität mit einem festen, gut eingespielten Team. Absolut empfehlenswert!"
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Services Section with Images */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Büroreinigung für jeden Bedarf</h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Jedes Büro ist einzigartig – deshalb bieten wir flexible Reinigungslösungen, die perfekt zu Ihrer Unternehmensgröße und Ihren Anforderungen passen.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Kleinbüros Card with Image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&fm=webp"
                      alt="Startup Büro Reinigung"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        🏢 Kleinbüros & Startups
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      Perfekt für Gründer und kleine Teams: Flexible Reinigungsintervalle ab 1x wöchentlich, maßgeschneidert auf Ihre Bürogröße. Bereits ab 50 m² Bürofläche profitieren Sie von unserer professionellen Büroreinigung in Düsseldorf, Köln und ganz NRW.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Wöchentliche oder monatliche Reinigung
                      </li>
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Keine Mindestvertragslaufzeit
                      </li>
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Transparente Festpreise
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Großraumbüros Card with Image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fm=webp"
                      alt="Großraumbüro Reinigung"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        🏛️ Großraumbüros & Konzerne
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      Für mittlere bis große Unternehmen: Tägliche oder mehrmals wöchentliche Reinigung mit festem Reinigungsteam. Wir betreuen Büroflächen von 500 m² bis über 10.000 m² mit höchster Professionalität und Diskretion.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Täglich, mehrmals wöchentlich
                      </li>
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Festes Reinigungsteam
                      </li>
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Dedizierter Ansprechpartner
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Spezialimmobilien Card with Image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&fm=webp"
                      alt="Praxis und Kanzlei Reinigung"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        🏥 Spezialimmobilien
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      Besondere Anforderungen für Arztpraxen, Kanzleien, Banken und andere sensible Bereiche. Erhöhte Hygiene- und Sicherheitsstandards, diskrete Arbeitsweise und spezielle Schulungen unseres Personals.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Erweiterte Desinfektionsmaßnahmen
                      </li>
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Datenschutz & Verschwiegenheit
                      </li>
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Speziell geschultes Personal
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sonderreinigungen Card with Image */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&fm=webp"
                      alt="Fenster und Sonderreinigung"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                        ✨ Sonderreinigungen
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      Zusätzliche Leistungen nach Bedarf: Fensterreinigung, Teppichreinigung, Grundreinigung nach Umzug oder Renovierung. Auch kurzfristig und flexibel für Sonderanlässe oder Messen verfügbar.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Glasfassaden & Fensterreinigung
                      </li>
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Teppich- & Polsterreinigung
                      </li>
                      <li className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Grund- & Bauendreinigung
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Häufig gestellte Fragen zur Büroreinigung</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Transparente Antworten auf die wichtigsten Fragen rund um unsere Büroreinigung in NRW
              </p>
              <div className="max-w-4xl mx-auto space-y-4">
                <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    Was kostet eine professionelle Büroreinigung?
                    <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Das hängt vor allem von drei Dingen ab: Fläche, wie oft wir kommen (z. B. 1×/Woche oder täglich) und was genau rein soll (Küche/Sanitär/Meetingräume usw.). Als grober Richtwert: 100–150 m² bei 1× pro Woche liegen oft bei ca. 200–350 € im Monat. Für einen fairen Preis schauen wir kurz drauf und machen ein Angebot, das Sie ohne Taschenrechner verstehen.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    Zu welchen Zeiten findet die Büroreinigung statt?
                    <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    So, wie es bei Ihnen am wenigsten stört: früh morgens, abends nach Feierabend oder am Wochenende. Wenn tagsüber besser passt (z. B. in nicht genutzten Bereichen), geht das auch – wir stimmen das vorher sauber ab.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    Wie oft sollte ein Büro professionell gereinigt werden?
                    <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Kommt auf Betrieb und Besucher an. Grobe Faustregel: kleine Büros oft 1× pro Woche, mittlere Büros 2–3×, große/hoch frequentierte Flächen eher täglich. Küche und Sanitär brauchen meistens öfter als einzelne Arbeitsplätze – wir setzen den Rhythmus so, dass es sauber bleibt, ohne Geld zu verbrennen.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    Sind Ihre Reinigungsmittel umweltfreundlich?
                    <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Ja – wir setzen auf Mittel, die wirksam sind, aber nicht unnötig aggressiv. Für sensible Bereiche (z. B. Allergien) können wir das ebenfalls passend abstimmen. Wichtig: „umweltfreundlich“ heißt bei uns nicht Show, sondern sinnvoll dosiert und passend zum Einsatz.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    Wie ist das Reinigungspersonal versichert?
                    <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Kurz: ja. Unser Team ist versichert, wir arbeiten zuverlässig und diskret – gerade in sensiblen Bereichen (z. B. Akten/Technik). Wenn Sie konkrete Nachweise brauchen, geben wir die auf Anfrage gerne mit.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    Was passiert, wenn ich mit der Reinigung nicht zufrieden bin?
                    <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Dann sagen Sie’s – bitte direkt. Wir bessern nach und kümmern uns, damit das Thema erledigt ist und nicht wochenlang mitschleppt. Sie haben bei uns einen Ansprechpartner, der’s wirklich löst (und nicht nur „weiterleitet“).
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
                  <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                    Gibt es eine Mindestvertragslaufzeit?
                    <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Wir halten’s gern flexibel. Häufig arbeiten wir mit kurzer Kündigungsfrist (z. B. 4 Wochen). Wenn Sie länger planen wollen, geht das auch – dann meist mit besseren Konditionen. Kurz: Wir bauen das so, dass es zu Ihrem Büro passt, nicht umgekehrt.
                  </p>
                </details>
              </div>
            </div>

            {/* Visual Guarantee Section */}
            <div className="mb-20">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="grid md:grid-cols-2">
                  {/* Left side with image */}
                  <div className="relative h-96 md:h-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fm=webp"
                      alt="Zufriedenheitsgarantie Büroreinigung"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/70"></div>
                  </div>
                  
                  {/* Right side with content */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 flex items-center">
                    <div className="text-white">
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-bold">100% Zufriedenheitsgarantie</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ihre Zufriedenheit ist unsere Priorität
                      </h2>
                      
                      <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                        Bei Schmitter Gebäudereinigung garantieren wir Ihnen nicht nur saubere Räume, sondern auch absolute Zufriedenheit. Wenn Sie mit unserer Leistung nicht vollständig zufrieden sind, bessern wir kostenlos nach – innerhalb von 24 Stunden, garantiert!
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                          <div className="text-3xl font-bold mb-1">24h</div>
                          <div className="text-sm text-blue-100">Nachbesserungsgarantie</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                          <div className="text-3xl font-bold mb-1">5 Mio.€</div>
                          <div className="text-sm text-blue-100">Versicherungsschutz</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                          <div className="text-3xl font-bold mb-1">ISO</div>
                          <div className="text-sm text-blue-100">9001 Zertifiziert</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                          <div className="text-3xl font-bold mb-1">0%</div>
                          <div className="text-sm text-blue-100">Versteckte Kosten</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mb-20 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Büroreinigung in Ihrer Region</h2>
              <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                Wir sind in allen wichtigen Städten und Regionen in Nordrhein-Westfalen für Ihre Büroreinigung im Einsatz
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Rheinland
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Professionelle Büroreinigung in:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Düsseldorf Büroreinigung</li>
                    <li>• Köln Office Cleaning</li>
                    <li>• Bonn Gewerbereinigung</li>
                    <li>• Leverkusen</li>
                    <li>• Mönchengladbach</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Ruhrgebiet
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Zuverlässige Büroreinigung in:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Essen Büros</li>
                    <li>• Dortmund Offices</li>
                    <li>• Duisburg</li>
                    <li>• Bochum</li>
                    <li>• Gelsenkirchen</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Weitere Regionen
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Auch verfügbar in:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Münster Reinigung</li>
                    <li>• Aachen Büros</li>
                    <li>• Bielefeld</li>
                    <li>• Wuppertal</li>
                    <li>• Und ganz NRW</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="text-center bg-white rounded-3xl p-12 shadow-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Bereit für ein sauberes Büro?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Kontaktieren Sie uns jetzt für ein kostenloses, unverbindliches Beratungsgespräch und individuelles Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kostenlos beraten lassen
                </Link>
                <a
                  href="tel:+4920189083050"
                  className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-xl hover:bg-blue-50 transition-all font-bold shadow-md"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0201-89083050
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                ✓ Antwort innerhalb von 24 Stunden &nbsp;•&nbsp; ✓ Kostenlose Vor-Ort-Besichtigung &nbsp;•&nbsp; ✓ Unverbindliches Angebot
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

