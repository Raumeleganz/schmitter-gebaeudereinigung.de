import { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq-items";

export const metadata: Metadata = {
  title: "Häufig gestellte Fragen (FAQ) | ABED - Gebäudereinigung",
  description: "Antworten auf die häufigsten Fragen zu unseren Gebäudereinigungsleistungen - von Preisen über Qualitätssicherung bis zu Vertragsdetails.",
  openGraph: {
    title: "FAQ - ABED Gebäudereinigung",
    description: "Alle Antworten auf Ihre Fragen zur professionellen Gebäudereinigung in NRW",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      {/* Structured Data für FAQ */}
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

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Reinigungsleistungen, Preisen und Abläufen.
            </p>
          </div>

          {/* FAQ Accordion */}
          <FAQAccordion items={faqItems} className="mb-12" />

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Ihre Frage war nicht dabei?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Kein Problem! Unser Team berät Sie gerne persönlich und erstellt Ihnen ein individuelles Angebot.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kontakt aufnehmen
              </a>
              
              <a
                href="tel:+4921112345678"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 211 12345678
              </a>
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Schnelle Antwort</h3>
              <p className="text-sm text-gray-600">Wir antworten binnen 24 Stunden</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Kostenloses Angebot</h3>
              <p className="text-sm text-gray-600">Unverbindliche Preiskalkulation</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Persönliche Beratung</h3>
              <p className="text-sm text-gray-600">Individuelle Lösungen für Sie</p>
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
    </>
  );
}

