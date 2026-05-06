import Areas from "@/components/Areas";
import Link from "next/link";
import { Metadata } from "next";
import { cities } from "@/data/cities.generated";

export const metadata: Metadata = {
  title: "Einsatzgebiete in NRW - Gebäudereinigung in ganz Nordrhein-Westfalen | Schmitter Gebäudereinigung",
  description: "Wir sind in ganz NRW für Sie da: Düsseldorf, Köln, Ruhrgebiet, Münsterland, Bergisches Land und weitere Regionen. Professionelle Gebäudereinigung vor Ort.",
  keywords: ["Düsseldorf", "Köln", "Essen", "Dortmund", "Bochum", "Münster", "Gebäudereinigung NRW"],
  openGraph: {
    title: "Einsatzgebiete in NRW - Schmitter Gebäudereinigung",
    description: "Professionelle Gebäudereinigung in ganz Nordrhein-Westfalen.",
    type: "website",
  },
};

export default function EinsatzgebietePage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://schmitter-gebaeudereinigung.de"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Einsatzgebiete",
                "item": "https://schmitter-gebaeudereinigung.de/einsatzgebiete"
              }
            ]
          })
        }}
      />
      
      <div className="pt-20">
        <Areas />

        {/* Alle Städte A-Z */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Alle Einsatzgebiete A-Z
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Klicken Sie auf Ihre Stadt für detaillierte Informationen und Kontaktmöglichkeiten
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {Object.values(cities)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((city) => (
                  <Link
                    key={city.slug}
                    href={`/einsatzgebiete/${city.slug}`}
                    className="group flex items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg transition-[transform,shadow,border-color,background-color] duration-200 ease-out hover:scale-105 will-change-transform"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 ease-out flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-200 ease-out">
                      {city.name}
                    </span>
                    <svg className="w-3 h-3 ml-auto text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-[transform,color] duration-200 ease-out will-change-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Main CTA */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
              
              <div className="relative px-8 py-16 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Badge */}
                  <div className="inline-block mb-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold border border-white/30">
                      🚀 Schneller Service in Ihrer Nähe
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ihre Stadt nicht gefunden?
                  </h2>
                  <p className="text-xl md:text-2xl text-blue-50 mb-4 leading-relaxed">
                    Kein Problem! Wir sind mobil in ganz NRW für Sie da
                  </p>
                  <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
                    Auch wenn Ihre Stadt nicht aufgelistet ist – kontaktieren Sie uns! Wir prüfen gerne, ob wir auch in Ihrer Region tätig werden können.
                  </p>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-white font-semibold text-sm">Schnelle Anfahrt</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-white font-semibold text-sm">Lokaler Service</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-semibold text-sm">Kostenlose Anfahrt</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="/kontakt"
                      className="group inline-flex items-center bg-white text-blue-600 px-8 py-5 rounded-xl hover:bg-gray-50 transition-all font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300"
                    >
                      <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span>Verfügbarkeit anfragen</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    
                    <a
                      href="tel:+4920189083050"
                      className="group inline-flex items-center bg-blue-800/80 backdrop-blur-sm text-white px-8 py-5 rounded-xl hover:bg-blue-900 transition-all font-bold shadow-lg border-2 border-white/20 hover:border-white/40"
                    >
                      <svg className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>0201-89083050</span>
                    </a>
                  </div>

                  <p className="text-blue-200 text-sm mt-8">
                    📞 Montag - Freitag: 08:00 - 18:00 Uhr | Samstag: 09:00 - 14:00 Uhr
                  </p>
                </div>
              </div>
            </div>

            {/* Regional Info Cards */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Großstädte</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Düsseldorf, Köln, Essen, Dortmund, Duisburg und alle weiteren Großstädte in NRW
                </p>
                <div className="text-blue-600 font-semibold text-sm">✓ Vollständige Abdeckung</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mittelstädte</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Aachen, Mönchengladbach, Wuppertal, Bielefeld und alle mittelgroßen Städte
                </p>
                <div className="text-green-600 font-semibold text-sm">✓ Regelmäßiger Service</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Landkreise</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Auch in kleineren Gemeinden und ländlichen Regionen sind wir für Sie da
                </p>
                <div className="text-purple-600 font-semibold text-sm">✓ Auf Anfrage verfügbar</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

