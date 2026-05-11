import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schmitter Gebäudereinigung NRW | Büro- & Praxisreinigung ohne Fachwort-Dschungel",
  description:
    "Gebäudereinigung in NRW ohne Fachwort-Wirrwarr: Büro-, Praxis- und Unterhaltsreinigung mit klarem Plan und Team, das sagt was Sache ist – zuverlässig und sauber, ohne Drama.",
  keywords: ["Gebäudereinigung", "Büroreinigung", "Reinigungsdienst", "NRW", "Düsseldorf", "Köln", "Dortmund"],
  alternates: {
    canonical: "https://schmitter-gebaeudereinigung.de"
  },
  openGraph: {
    title: "Schmitter Gebäudereinigung NRW | Büro- & Praxisreinigung ohne Fachwort-Dschungel",
    description:
      "Büro-, Praxis- und Unterhaltsreinigung in NRW: wir erklären, was wir tun, wann wir kommen und was es kostet – ohne leere Marketing-Floskeln.",
    url: "https://schmitter-gebaeudereinigung.de",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://schmitter-gebaeudereinigung.de/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Schmitter – Gebäudereinigung und Büroreinigung in Nordrhein-Westfalen"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Schmitter Gebäudereinigung NRW | Büro- & Praxisreinigung ohne Fachwort-Dschungel",
    description:
      "Reinigung für Büro, Praxis & Haus in NRW – klar geredet, zuverlässig umgesetzt.",
    images: ["https://schmitter-gebaeudereinigung.de/images/og-home.jpg"]
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* USPs / Features Section - Completely Redesigned */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Endlich sauber – ohne PowerPoint dazu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hunderte Kund:innen in NRW wollten einfach weniger Stress mit Schmutz und mehr klare Absprachen – genau dafür gibt’s uns.
            </p>
          </div>

          {/* Features Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Feature 1 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mit System statt „musste reichen“</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Qualität mit Plan heißt bei uns: Checklisten, weniger Zufall beim Putzen, und nachvollziehbare Routine statt spontaner Notfälle jeden Donnerstag.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Grün, wo’s Sinn macht</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ökologisch heißt bei uns: nicht alles grüngewaschen labeln, sondern Mittel wählen, die Atemluft, Haut und Kanalisation nicht unnötig ärgern.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                    <svg className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wann’s bei Ihnen nicht stört</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Büro leer? Praxis zu? Wochenende okay? Wir sind flexibel – weil niemand gern Kaffee holen geht, wenn nebenan schon der Wischmob tanzt.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Leute, die Bock auf Ordnung haben</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Erfahrung aus der Praxis heißt: Wir wissen, wo Schmutz sich gern versteckt – und reden offen, wenn’s mal knifflig wird oder Sonderwerkzeug braucht.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section mit Premium Background */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <Services />
      </div>

      {/* Process Section - Wie wir arbeiten */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              So läuft’s bei uns (wirklich)
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Drei Schritte, null Rätselraten – von erstem Hallo bis regelmäßiger Gebäude-, Büro- oder Praxisreinigung in NRW.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-blue-400/30" style={{zIndex: 0}}></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
                  <span className="text-4xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Sie melden sich – wir schauen vorbei</h3>
                <p className="text-blue-100 text-center leading-relaxed">
                  Kurz anrufen, schreiben oder Formular – dann kommen wir (unverbindlich) vorbei, gucken Flächen und Stolperfallen an und fragen nach, was Ihnen wichtig ist. Keine Magie, nur Klartext vor Ort.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
                  <span className="text-4xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Angebot, das Sie verstehen</h3>
                <p className="text-blue-100 text-center leading-relaxed">
                  Sie bekommen ein Festpreis-Angebot in bis zu 24 Stunden – mit erklärten Punkten („was putzen wir wie oft“), nicht mit Kleingedrucktem-Geschwurbel. Dann stimmen wir Termine und Zugänge mit Ihnen ab.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
                  <span className="text-4xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Putzen – und nachfragen geht immer</h3>
                <p className="text-blue-100 text-center leading-relaxed">
                  Unser Team rollt nach Plan aus; wenn sich was ändert, sagen wir’s. Qualität bei uns heißt: feste Routinen plus „kommt das für Sie hin?“ – nicht nur einmal glänzend und dann Funkstille.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Trust & Quality Section - Premium Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              Stempel sind langweilig – aber ehrliche Arbeit braucht Rückendeckung
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Vertrauen, das Sie <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">nachschlagen können</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Zertifikate sind kein Alleinstellungsmerkmal – aber zeigen: Wir arbeiten nach Regeln statt nach Bauchgefühl. Und unsere Kund:innen in NRW sagen oft: endlich weniger Theater, mehr Routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Zertifikat 1 - Enhanced */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 hover:-translate-y-3">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Qualität mit Plan</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kurz gesagt: wie wir Arbeit festhalten, überprüfen und verbessern – damit Büro-, Praxis- und Gebäudereinigung nicht von der Tageslaune abhängt.
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold">
                  Was das für Sie bedeutet
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Zertifikat 2 - Enhanced */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-green-200 hover:-translate-y-3">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nachhaltigkeit ohne Grün-Spielzeug</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Wir setzen dort auf schonende Mittel und Abläufe, wo es hygienisch passt – damit Luft, Böden und Menschen weniger Stress haben.
                </p>
                <div className="inline-flex items-center text-green-600 font-semibold">
                  So denken wir Umwelt
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Zertifikat 3 - Enhanced */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-yellow-200 hover:-translate-y-3">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Als Firma geführt, nicht Hobbykeller</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Geprüfter Fachbetrieb heißt: Grundlagen stimmen – von Versicherungen bis dokumentiertem Handwerk rund um Gebäudedienst und Reinigung.
                </p>
                <div className="inline-flex items-center text-yellow-600 font-semibold">
                  Seriosität ohne Schnickschnack
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Schluss mit „irgendwann mal staubfrei“ – starten wir sauber durch?
          </h2>
          <p className="text-xl text-blue-100 mb-4">
            Schreiben Sie uns – wir hören zu, lachen wenn’s passt und bleiben sachlich, wenn’s um Flächen, Unterhaltsreinigung oder Ihre Praxisabläufe geht.
          </p>
          <p className="text-lg text-blue-200 mb-10">
            Besichtigung unverpflichtend &nbsp;·&nbsp; Festpreis-Idee oft in 24 h &nbsp;·&nbsp; Start sobald Sie grünes Licht geben
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transform"
            >
              Jetzt Kontakt aufnehmen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
        </a>
        <a
              href="/leistungen"
              className="inline-flex items-center justify-center bg-blue-500 text-white border-2 border-white/50 px-10 py-5 rounded-lg hover:bg-blue-400 transition-all duration-300 font-bold text-lg hover:scale-105 transform"
            >
              Unsere Leistungen ansehen
            </a>
          </div>
          
          {/* Quick Contact Info */}
          <div className="mt-16 pt-12 border-t border-blue-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="font-semibold mb-1">Telefon</div>
                <a href="tel:+4920189083050" className="text-blue-100 hover:text-white">0201-89083050</a>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="font-semibold mb-1">E-Mail</div>
                <a href="mailto:info@schmitter-gebaeudereinigung.de" className="text-blue-100 hover:text-white">info@schmitter-gebaeudereinigung.de</a>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="font-semibold mb-1">Öffnungszeiten</div>
                <div className="text-blue-100">Mo-Fr: 8:00 - 18:00 Uhr</div>
              </div>
            </div>
          </div>
    </div>
      </section>
    </>
  );
}
