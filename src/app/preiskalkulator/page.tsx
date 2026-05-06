import { Metadata } from "next";
import Link from "next/link";
import PriceCalculator from "@/components/PriceCalculator";

export const metadata: Metadata = {
  title: "Online-Preiskalkulator | Schmitter Gebäudereinigung",
  description: "Berechnen Sie online eine erste Preisindikation für Ihre Gebäudereinigung - schnell, einfach und unverbindlich.",
  openGraph: {
    title: "Preiskalkulator - Schmitter Gebäudereinigung",
    description: "Ermitteln Sie sofort eine erste Preiseinschätzung für Ihre Reinigungsleistung",
    type: "website",
  },
};

export default function PreiskalkulatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section mit Animation */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 animate-slide-in-bottom">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Sofortiger Online-Kalkulator
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 animate-scale-in">
            Was kostet Ihre Reinigung?
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
            Berechnen Sie in <span className="font-bold text-yellow-300">60 Sekunden</span> eine erste Preisindikation für Ihre professionelle Gebäudereinigung
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Kostenlos & unverbindlich
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Keine Registrierung
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Sofortiges Ergebnis
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-16 relative z-10">
        <div className="animate-slide-in-bottom">

          {/* Calculator */}
          <PriceCalculator />
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Advantages */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-7 h-7 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Warum Schmitter?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Über 15 Jahre Erfahrung</strong> in der professionellen Gebäudereinigung
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Zertifiziertes Personal</strong> mit regelmäßigen Schulungen
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Umweltfreundliche Produkte</strong> und moderne Reinigungstechnik
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">Flexible Einsatzzeiten</strong> nach Ihren Wünschen
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  <strong className="text-gray-900">5 Mio. € Haftpflichtversicherung</strong> für Ihre Sicherheit
                </span>
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-7 h-7 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              So einfach geht's
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 mb-1">Kalkulator ausfüllen</h3>
                  <p className="text-sm text-gray-600">Wählen Sie Ihre gewünschte Leistung und Fläche aus</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 mb-1">Angebot anfragen</h3>
                  <p className="text-sm text-gray-600">Senden Sie uns Ihre Anfrage über das Kontaktformular</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 mb-1">Besichtigung vor Ort</h3>
                  <p className="text-sm text-gray-600">Wir besichtigen Ihre Räumlichkeiten für ein exaktes Angebot</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 mb-1">Reinigung starten</h3>
                  <p className="text-sm text-gray-600">Nach Auftragserteilung beginnen wir schnellstmöglich</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Wichtiger Hinweis</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Die hier berechneten Preise dienen nur als erste Orientierung und sind nicht verbindlich. Der finale Preis hängt von vielen individuellen Faktoren ab, wie z.B. Verschmutzungsgrad, Zugänglichkeit, spezielle Anforderungen und tatsächliche Objektgröße. Für ein verbindliches Angebot vereinbaren Sie bitte einen kostenlosen Besichtigungstermin mit uns.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

