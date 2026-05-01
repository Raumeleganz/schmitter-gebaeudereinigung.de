"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Premium Büroreinigung",
      subtitle: "Für maximale Produktivität",
      description: "Professionelle Reinigungskonzepte für moderne Büroumgebungen. Wir schaffen eine hygienische und repräsentative Arbeitsatmosphäre, die Ihre Mitarbeiter motiviert und Ihre Kunden beeindruckt.",
      features: [
        "Systematische Arbeitsplatz- & Oberflächenreinigung",
        "Professionelle Boden- & Teppichpflege",
        "Hygienische Sanitärraumaufbereitung",
        "Küchen- & Pausenraumreinigung",
        "Papierkorb-Entleerung & Entsorgung"
      ],
      link: "/leistungen/bueroreinigung"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <circle cx="12" cy="14" r="1" fill="currentColor"/>
          <circle cx="9" cy="11" r="0.5" fill="currentColor"/>
          <circle cx="15" cy="11" r="0.5" fill="currentColor"/>
        </svg>
      ),
      title: "Unterhaltsreinigung",
      subtitle: "Für gepflegte Immobilien",
      description: "Regelmäßige und zuverlässige Pflege von Gemeinschaftsflächen in Wohn- und Gewerbeimmobilien. Langfristiger Werterhalt durch professionelle Reinigungszyklen und qualitätsgesicherte Durchführung.",
      features: [
        "Treppenhäuser & Eingangsbereiche",
        "Fachgerechte Glas- & Fensterreinigung",
        "Pflege von Außenanlagen & Gehwegen",
        "Aufzugsreinigung & Gemeinschaftsräume",
        "Müllraum- & Kellerreinigung"
      ],
      link: "/leistungen/unterhaltsreinigung"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5}/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M10 3v18"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l3 3m6-3l-3 3m-3 6l3-3m6 3l-3-3" opacity="0.5"/>
        </svg>
      ),
      title: "Glasreinigung",
      subtitle: "Für perfekte Durchsicht",
      description: "Professionelle Fenster- und Glasreinigung für streifenfreien Glanz. Mit modernster Technik und umweltfreundlichen Reinigungsmitteln sorgen wir für kristallklare Fenster in jeder Höhe.",
      features: [
        "Innen- & Außenreinigung von Fenstern",
        "Rahmen- & Fensterbankreinigung",
        "Glasfassaden & Wintergärten",
        "Schaufenster & Vitrinen",
        "Oberlichter & Dachfenster"
      ],
      link: "/leistungen/glasreinigung"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8"/>
        </svg>
      ),
      title: "Praxisreinigung",
      subtitle: "Für höchste Hygiene",
      description: "Spezialisierte Reinigung für Arztpraxen, Kliniken und medizinische Einrichtungen. Wir erfüllen höchste Hygiene- und Desinfektionsstandards zum Schutz von Patienten und Personal.",
      features: [
        "Desinfektion nach RKI-Richtlinien",
        "Behandlungs- & Untersuchungsräume",
        "Wartebereich & Empfang",
        "Hygienische Sanitärreinigung",
        "Medizinische Geräteoberflächen"
      ],
      link: "/leistungen/praxisreinigung"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/>
          <rect x="9" y="7" width="2" height="8" strokeWidth={1.5}/>
          <rect x="13" y="7" width="2" height="8" strokeWidth={1.5}/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 9h14"/>
        </svg>
      ),
      title: "Industriereinigung",
      subtitle: "Für produktive Betriebsabläufe",
      description: "Leistungsstarke Reinigungslösungen für Produktions- und Lagerhallen. Mit industrietauglicher Ausrüstung bewältigen wir auch großflächige und anspruchsvolle Reinigungsprojekte effizient.",
      features: [
        "Produktionshallen & Werkstätten",
        "Lager- & Logistikbereiche",
        "Maschinen- & Anlagenreinigung",
        "Industrieböden & Beschichtungen",
        "Hochregallager & Bühnensysteme"
      ],
      link: "/leistungen/industriereinigung"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in-up' : 'scroll-hidden'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Unser Leistungsspektrum
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Reinigungsdienstleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maßgeschneiderte und professionelle Reinigungslösungen für höchste Ansprüche. 
            Qualität, Zuverlässigkeit und Nachhaltigkeit seit über 15 Jahren.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
            <Link
              href={service.link}
              key={index}
              ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-[transform,shadow,border-color] duration-300 ease-out border border-gray-100 hover:border-blue-300 relative overflow-hidden cursor-pointer block will-change-transform ${
                isVisible ? 'animate-fade-in-up' : 'scroll-hidden'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-[opacity,transform] duration-300 ease-out group-hover:scale-150 will-change-transform"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-[transform,background,color,box-shadow] duration-300 ease-out shadow-md group-hover:shadow-xl will-change-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 ease-out">{service.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700 text-sm font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* More Info Link */}
                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform duration-300 ease-out will-change-transform">
                  <span>Mehr erfahren</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-2xl transition-all duration-700 ${
            ctaVisible ? 'animate-fade-in-up' : 'scroll-hidden'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
          
          <div className="relative px-8 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold border border-white/30">
                  Kostenlose & unverbindliche Beratung
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ihr individuelles Reinigungskonzept
              </h3>
              <p className="text-blue-50 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Profitieren Sie von über 15 Jahren Erfahrung. Wir analysieren Ihren Bedarf und erstellen ein maßgeschneidertes Angebot – transparent, fair und ohne versteckte Kosten.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold text-sm">Kostenlose Erstberatung</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold text-sm">24h Rückmeldung</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold text-sm">Faire Festpreise</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-200"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Angebot anfordern
                </a>
                
                <a
                  href="tel:+4921112345678"
                  className="group inline-flex items-center bg-blue-800/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all font-bold shadow-lg border-2 border-white/20 hover:border-white/40"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0211 123 456 78
                </a>
              </div>

              <p className="text-blue-200 text-sm mt-6">
                Montag - Freitag: 08:00 - 18:00 Uhr | Samstag: 09:00 - 14:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

