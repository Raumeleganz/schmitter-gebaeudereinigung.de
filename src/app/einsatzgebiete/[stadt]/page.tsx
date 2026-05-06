import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQItem from '@/components/FAQItem';
import { citySlugs, getCityBySlug } from '@/data/cities.generated';
import { pickDeckSpeedPreis } from '@/lib/deck-speed-preis';
import { pickHeroSubtitleQual } from '@/lib/heroSubtitle-qualitaet';
import { getImageUrl, getImageAltText, getImageKeyword } from '@/lib/image-keywords';

interface CityPageProps {
  params: Promise<{
    stadt: string;
  }>;
}

/**
 * Generiere statische Pfade für alle Städte
 */
export async function generateStaticParams() {
  return citySlugs.map((slug) => ({
    stadt: slug,
  }));
}

/**
 * Generiere dynamische Meta-Tags
 */
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.stadt);

  if (!city) {
    return {
      title: 'Stadt nicht gefunden',
    };
  }

  return {
    title: city.title,
    description: city.metaDescription,
    keywords: [
      city.keyword1,
      city.keyword2,
      city.keyword3,
      city.keyword4,
      city.keyword5,
    ],
    openGraph: {
      title: city.title,
      description: city.metaDescription,
      type: 'website',
      locale: 'de_DE',
    },
    alternates: {
      canonical: `https://schmitter-gebaeudereinigung.de/einsatzgebiete/${city.slug}`,
    },
  };
}

/**
 * Stadt-Landingpage
 */
export default async function CityPage({ params }: CityPageProps) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.stadt);

  if (!city) {
    notFound();
  }

  return (
    <>
      {/* Structured Data: Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `https://schmitter-gebaeudereinigung.de/einsatzgebiete/${city.slug}#business`,
            name: city.schemaBusinessName,
            image: `https://schmitter-gebaeudereinigung.de${getImageUrl(city.slug)}`,
            description: city.metaDescription,
            address: {
              '@type': 'PostalAddress',
              streetAddress: city.street,
              addressLocality: city.name,
              addressRegion: 'NRW',
              postalCode: city.postalCode,
              addressCountry: 'DE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: city.lat,
              longitude: city.lng,
            },
            url: `https://schmitter-gebaeudereinigung.de/einsatzgebiete/${city.slug}`,
            telephone: '+49-211-123-456-78',
            priceRange: '€€',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
            areaServed: {
              '@type': 'City',
              name: city.name,
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://schmitter-gebaeudereinigung.de',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Einsatzgebiete',
                item: 'https://schmitter-gebaeudereinigung.de/einsatzgebiete',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: city.name,
                item: `https://schmitter-gebaeudereinigung.de/einsatzgebiete/${city.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[url('/images/cleaning-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Breadcrumb mit Schema.org */}
          <div className="mb-8 flex justify-center">
            <Breadcrumbs customLabels={{ [city.slug]: city.name }} />
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {city.h1}
          </h1>

          {/* Hero Title & Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            {city.heroTitle}
          </p>
          
          {/* Qualitäts-Deck (8 Varianten) */}
          <p className="text-lg text-blue-200 mb-3 max-w-2xl mx-auto">
            {pickHeroSubtitleQual(city.name, city.slug)}
          </p>

          {/* Speed-Deck (6 Varianten) */}
          <p className="text-base text-blue-100/90 mb-10 max-w-2xl mx-auto italic">
            {pickDeckSpeedPreis(city.name, city.slug, "speed")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center bg-white text-blue-600 px-8 py-5 rounded-xl hover:bg-gray-50 transition-all font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300"
            >
              <svg
                className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <span>{city.ctaText}</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <a
              href="tel:+4920189083050"
              className="group inline-flex items-center bg-blue-800/80 backdrop-blur-sm text-white px-8 py-5 rounded-xl hover:bg-blue-900 transition-all font-bold shadow-lg border-2 border-white/20 hover:border-white/40"
            >
              <svg
                className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>0201-89083050</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold">ISO-zertifiziert</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold">500+ zufriedene Kunden</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold">24/7 Notfallservice</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  📍 Lokaler Service in {city.name}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ihr Partner für Gebäudereinigung in {city.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {city.aboutText}
              </p>

              {/* Service Areas */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Unsere Einsatzgebiete in {city.name}:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    city.serviceArea1,
                    city.serviceArea2,
                    city.serviceArea3,
                    city.serviceArea4,
                    city.serviceArea5,
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Kostenloses Angebot anfragen
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Gebäudereinigung Bild */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Placeholder (sichtbar wenn Bild fehlt) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg
                      className="w-32 h-32 text-blue-300 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <p className="text-blue-400 font-medium text-sm">{getImageAltText(city.name, city.slug)}</p>
                    <p className="text-blue-300 text-xs mt-2">{getImageKeyword(city.slug)}.webp</p>
                  </div>
                </div>
                {/* Bild (überdeckt Placeholder wenn vorhanden) */}
                <img
                  src={getImageUrl(city.slug)}
                  alt={getImageAltText(city.name, city.slug)}
                  className="relative w-full h-full object-cover z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stadtteile Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                📍 Unsere Stadtteile
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wir sind in allen Stadtteilen für Sie da
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professionelle Gebäudereinigung direkt in Ihrer Nähe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stadtteil 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {city.stadtteil1}
                </h3>
                <p className="text-gray-600 mb-6">
                  Gebäudereinigung in {city.stadtteil1} – Schnell, zuverlässig und professionell
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verfügbar</span>
                </div>
              </div>
            </div>

            {/* Stadtteil 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-white p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {city.stadtteil2}
                </h3>
                <p className="text-gray-600 mb-6">
                  Gebäudereinigung in {city.stadtteil2} – Schnell, zuverlässig und professionell
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verfügbar</span>
                </div>
              </div>
            </div>

            {/* Stadtteil 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-white p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {city.stadtteil3}
                </h3>
                <p className="text-gray-600 mb-6">
                  Gebäudereinigung in {city.stadtteil3} – Schnell, zuverlässig und professionell
                </p>
                <div className="flex items-center text-purple-600 font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verfügbar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ihr Stadtteil nicht dabei?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Kein Problem! Wir sind in ganz {city.name} und Umgebung für Sie da. Kontaktieren Sie uns für eine individuelle Anfrage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-semibold"
              >
                Jetzt anfragen
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+4920189083050"
                className="inline-flex items-center bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition font-semibold border-2 border-white/20"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0201-89083050
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Leistungen in {city.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professionelle Reinigungsdienstleistungen für jeden Bedarf
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Büroreinigung */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Büroreinigung</h3>
              <p className="text-gray-600 mb-4">
                Professionelle Reinigung für Büros und Geschäftsräume in {city.name}
              </p>
              <Link
                href="/leistungen/bueroreinigung"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                Mehr erfahren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Praxisreinigung */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Praxisreinigung</h3>
              <p className="text-gray-600 mb-4">
                Hygienische Reinigung für Arztpraxen und medizinische Einrichtungen
              </p>
              <Link
                href="/leistungen/praxisreinigung"
                className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
              >
                Mehr erfahren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Industriereinigung */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industriereinigung</h3>
              <p className="text-gray-600 mb-4">
                Spezialisierte Reinigung für Produktionsstätten und Lager
              </p>
              <Link
                href="/leistungen/industriereinigung"
                className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center"
              >
                Mehr erfahren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/leistungen"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Alle Leistungen anzeigen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bereit für eine saubere Zukunft in {city.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Kontaktieren Sie uns für ein kostenloses, unverbindliches Angebot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-5 rounded-xl hover:bg-gray-50 transition-all font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300"
            >
              Jetzt Angebot anfragen
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <a
              href="tel:+4920189083050"
              className="inline-flex items-center bg-blue-800/80 backdrop-blur-sm text-white px-8 py-5 rounded-xl hover:bg-blue-900 transition-all font-bold shadow-lg border-2 border-white/20 hover:border-white/40"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0201-89083050
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEO SECTION 1: FAQ - GOOGLE LIEBT DAS! 🚀 */}
      {/* ============================================ */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Häufige Fragen zur Gebäudereinigung in {city.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Reinigungsleistungen in {city.name} und Umgebung.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <FAQItem 
              question={`Wie viel kostet Gebäudereinigung in ${city.name}?`}
              answer={`Die Kosten für professionelle Gebäudereinigung in ${city.name} hängen von mehreren Faktoren ab: Objektgröße, Reinigungsart (Büroreinigung, Unterhaltsreinigung, Grundreinigung), Frequenz und spezielle Anforderungen. Wir bieten transparente Festpreise nach einer kostenlosen Besichtigung in ${city.name} und allen Stadtteilen (${city.stadtteil1}, ${city.stadtteil2}, ${city.stadtteil3}). Fordern Sie jetzt Ihr individuelles Angebot an!`}
            />
            
            <FAQItem 
              question={`Welche Stadtteile in ${city.name} bedienen Sie?`}
              answer={`Wir sind in allen Stadtteilen von ${city.name} aktiv, darunter ${city.stadtteil1}, ${city.stadtteil2}, ${city.stadtteil3}, ${city.serviceArea1}, ${city.serviceArea2} und weitere Bezirke. Unser erfahrenes Team ist schnell vor Ort und garantiert zuverlässige Reinigungsleistungen in ganz ${city.name} und Umgebung.`}
            />
            
            <FAQItem 
              question={`Bieten Sie auch Notfall-Reinigung in ${city.name} an?`}
              answer={`Ja! Unser 24/7 Notdienst ist auch in ${city.name} verfügbar. Bei Wasserschäden, Baustellen-Endreinigung, Tatortreinigung oder dringenden Reinigungsanforderungen sind wir kurzfristig für Sie da. Rufen Sie uns an unter 0201-89083050 - wir sind sofort in ${city.name} für Sie im Einsatz!`}
            />
            
            <FAQItem 
              question={`Welche Reinigungsleistungen bieten Sie in ${city.name} an?`}
              answer={`In ${city.name} bieten wir ein umfassendes Portfolio professioneller Reinigungsleistungen: Büroreinigung, Unterhaltsreinigung, Praxisreinigung, Glasreinigung, Industriereinigung und Grundreinigung. Alle Leistungen sind individuell auf Ihre Bedürfnisse zugeschnitten und werden von geschultem Fachpersonal ausgeführt.`}
            />
            
            <FAQItem 
              question={`Wie oft sollte eine Büroreinigung in ${city.name} stattfinden?`}
              answer={`Die optimale Reinigungsfrequenz für Büros in ${city.name} hängt von der Nutzung ab. Typischerweise empfehlen wir: täglich für stark frequentierte Bereiche, 2-3x wöchentlich für normale Büros, wöchentlich für kleinere Räume. Wir beraten Sie gerne individuell für Ihr Objekt in ${city.name}.`}
            />
            
            <FAQItem 
              question={`Sind Ihre Reinigungsmittel umweltfreundlich?`}
              answer={`Ja! Bei allen Reinigungsaufträgen in ${city.name} setzen wir auf ökologische, zertifizierte Reinigungsmittel. Diese sind biologisch abbaubar, schonen die Umwelt und sind gesundheitlich unbedenklich. Nachhaltigkeit und Umweltschutz sind uns in ${city.name} besonders wichtig.`}
            />
          </div>

          {/* FAQ Schema.org JSON-LD - SEO GOLD! */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": `Wie viel kostet Gebäudereinigung in ${city.name}?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": `Die Kosten für professionelle Gebäudereinigung in ${city.name} hängen von mehreren Faktoren ab: Objektgröße, Reinigungsart (Büroreinigung, Unterhaltsreinigung, Grundreinigung), Frequenz und spezielle Anforderungen. Wir bieten transparente Festpreise nach einer kostenlosen Besichtigung in ${city.name} und allen Stadtteilen.`
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Welche Stadtteile in ${city.name} bedienen Sie?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": `Wir sind in allen Stadtteilen von ${city.name} aktiv, darunter ${city.stadtteil1}, ${city.stadtteil2}, ${city.stadtteil3}, ${city.serviceArea1}, ${city.serviceArea2} und weitere Bezirke.`
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Bieten Sie auch Notfall-Reinigung in ${city.name} an?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": `Ja! Unser 24/7 Notdienst ist auch in ${city.name} verfügbar. Bei Wasserschäden, Baustellen-Endreinigung oder dringenden Reinigungsanforderungen sind wir kurzfristig für Sie da.`
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Welche Reinigungsleistungen bieten Sie in ${city.name} an?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": `In ${city.name} bieten wir Büroreinigung, Unterhaltsreinigung, Praxisreinigung, Glasreinigung, Industriereinigung und Grundreinigung an.`
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Wie oft sollte eine Büroreinigung in ${city.name} stattfinden?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": `Die optimale Reinigungsfrequenz hängt von der Nutzung ab. Typischerweise empfehlen wir: täglich für stark frequentierte Bereiche, 2-3x wöchentlich für normale Büros, wöchentlich für kleinere Räume.`
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Sind Ihre Reinigungsmittel umweltfreundlich?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": `Ja! Bei allen Reinigungsaufträgen in ${city.name} setzen wir auf ökologische, zertifizierte Reinigungsmittel. Diese sind biologisch abbaubar, schonen die Umwelt und sind gesundheitlich unbedenklich.`
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </section>

      {/* ============================================ */}
      {/* SEO SECTION 2: VORTEILE - VERTRAUEN AUFBAUEN! 💎 */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum Schmitter für Gebäudereinigung in {city.name}?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Als führender Reinigungsdienstleister in {city.name} garantieren wir höchste Qualität und Zuverlässigkeit. 
              Vertrauen Sie auf über 10 Jahre Erfahrung in der Region.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Card 1 - Zertifizierte Qualität */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zertifizierte Qualität</h3>
              <p className="text-gray-600 leading-relaxed">
                Alle Mitarbeiter sind geschult und zertifiziert. In {city.name} setzen wir auf höchste Qualitätsstandards und regelmäßige Schulungen.
              </p>
            </div>

            {/* Benefit Card 2 - Schnelle Verfügbarkeit */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schnelle Verfügbarkeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Kurzfristige Termine in {city.name} und allen Stadtteilen. Wir sind für Sie da, wenn Sie uns brauchen - oft schon innerhalb von 24 Stunden.
              </p>
            </div>

            {/* Benefit Card 3 - Faire Festpreise */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Faire Festpreise</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparente Kalkulation ohne versteckte Kosten. Erhalten Sie Ihr individuelles Angebot für {city.name} - kostenlos und unverbindlich.
              </p>
            </div>

            {/* Benefit Card 4 - Umweltfreundlich */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Umweltfreundlich</h3>
              <p className="text-gray-600 leading-relaxed">
                Wir verwenden ökologische Reinigungsmittel - für eine saubere Umwelt in {city.name}. Nachhaltigkeit ist uns wichtig.
              </p>
            </div>

            {/* Benefit Card 5 - Vollversichert */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vollversichert</h3>
              <p className="text-gray-600 leading-relaxed">
                Haftpflicht- und Unfallversicherung für maximale Sicherheit bei jedem Einsatz in {city.name}. Sie sind rundum abgesichert.
              </p>
            </div>

            {/* Benefit Card 6 - 24/7 Erreichbar */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Erreichbar</h3>
              <p className="text-gray-600 leading-relaxed">
                Unser Kundenservice ist rund um die Uhr für Notfälle in {city.name} erreichbar. Schnelle Hilfe, wenn Sie sie brauchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEO SECTION 3: STADTTEILE-GRID - LOKALE KEYWORDS! 📍 */}
      {/* ============================================ */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Einsatzgebiete in {city.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionelle Gebäudereinigung in allen Stadtteilen von {city.name}. 
              Egal wo Sie sind - wir sind schnell bei Ihnen vor Ort!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Stadtteile aus den vorhandenen Daten */}
            {[
              city.serviceArea1,
              city.serviceArea2,
              city.serviceArea3,
              city.serviceArea4,
              city.serviceArea5,
              city.stadtteil1,
              city.stadtteil2,
              city.stadtteil3
            ].filter(Boolean).map((stadtteil, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-400 hover:bg-blue-50 hover:shadow-md transition-all duration-200 cursor-default group"
              >
                <svg 
                  className="w-5 h-5 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-200">
                  {stadtteil}
                </span>
              </div>
            ))}
          </div>

          {/* Zusätzliche Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Ihr Stadtteil ist nicht dabei? Kein Problem! Wir sind in ganz {city.name} und Umgebung tätig.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105 duration-200"
            >
              Jetzt kostenlos anfragen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

