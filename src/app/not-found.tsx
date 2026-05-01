import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 pt-20">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <div className="w-32 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Seite nicht gefunden
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-bold"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 font-semibold">Beliebte Seiten:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/leistungen" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Leistungen
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/einsatzgebiete" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Einsatzgebiete
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/ueber-uns" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Über uns
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

