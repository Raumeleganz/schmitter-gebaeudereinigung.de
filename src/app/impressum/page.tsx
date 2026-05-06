import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Schmitter Gebäudereinigung",
  description: "Impressum und rechtliche Informationen der Schmitter Gebäudereinigung",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-2 text-gray-700 ml-9">
              <p className="font-semibold text-lg text-gray-900">Schmitter Gebäudereinigung</p>
              <p>Geschäftsführer: Max Mustermann</p>
              <p>Musterstraße 123</p>
              <p>40212 Düsseldorf</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Kontakt
            </h2>
            <div className="space-y-2 text-gray-700 ml-9">
              <p>
                <span className="font-semibold">Telefon:</span>{" "}
                <a href="tel:+4920189083050" className="text-blue-600 hover:text-blue-700">
                  0201-89083050
                </a>
              </p>
              <p>
                <span className="font-semibold">E-Mail:</span>{" "}
                <a href="mailto:info@schmitter-gebaeudereinigung.de" className="text-blue-600 hover:text-blue-700">
                  info@schmitter-gebaeudereinigung.de
                </a>
              </p>
              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a href="https://schmitter-gebaeudereinigung.de" className="text-blue-600 hover:text-blue-700">
                  www.schmitter-gebaeudereinigung.de
                </a>
              </p>
            </div>
          </section>

          {/* Register */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Registereintrag
            </h2>
            <div className="space-y-2 text-gray-700 ml-9">
              <p>
                <span className="font-semibold">Handelsregister:</span> HRB 123456
              </p>
              <p>
                <span className="font-semibold">Registergericht:</span> Amtsgericht Düsseldorf
              </p>
              <p>
                <span className="font-semibold">Umsatzsteuer-ID:</span> DE123456789
              </p>
            </div>
          </section>

          {/* Berufsbezeichnung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Berufsbezeichnung
            </h2>
            <div className="space-y-2 text-gray-700 ml-9">
              <p>Gebäudereinigungsunternehmen</p>
              <p>
                <span className="font-semibold">Zuständige Kammer:</span> Handwerkskammer Düsseldorf
              </p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Haftungsausschluss
            </h2>
            
            <div className="space-y-4 text-gray-700 ml-9">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
                <p className="text-sm leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Haftung für Links</h3>
                <p className="text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Urheberrecht</h3>
                <p className="text-sm leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </section>

          {/* EU-Streitschlichtung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              EU-Streitschlichtung
            </h2>
            <div className="space-y-2 text-gray-700 text-sm ml-9 leading-relaxed">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
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

