import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | ABED - Gebäudereinigung",
  description: "Datenschutzerklärung der ABED Gebäudereinigung - Informationen zur Verarbeitung personenbezogener Daten",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          
          {/* Einleitung */}
          <section>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
              </p>
            </div>
          </section>

          {/* 1. Verantwortliche Stelle */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
              Verantwortliche Stelle
            </h2>
            <div className="ml-11 space-y-2 text-gray-700">
              <p className="font-semibold text-gray-900">ABED Gebäudereinigung</p>
              <p>Geschäftsführer: Max Mustermann</p>
              <p>Musterstraße 123</p>
              <p>40212 Düsseldorf</p>
              <p>
                <span className="font-semibold">E-Mail:</span>{" "}
                <a href="mailto:info@ABED-gebaeudereinigung.de" className="text-blue-600 hover:text-blue-700">
                  info@ABED-gebaeudereinigung.de
                </a>
              </p>
              <p>
                <span className="font-semibold">Telefon:</span>{" "}
                <a href="tel:+4921112345678" className="text-blue-600 hover:text-blue-700">
                  +49 211 12345678
                </a>
              </p>
            </div>
          </section>

          {/* 2. Erhebung und Speicherung personenbezogener Daten */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
              Erhebung und Speicherung personenbezogener Daten
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2.1 Beim Besuch der Website</h3>
                <p className="text-sm leading-relaxed">
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm ml-4">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                  <li>Name Ihres Access-Providers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2.2 Bei Nutzung unseres Kontaktformulars</h3>
                <p className="text-sm leading-relaxed">
                  Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung. Die für die Benutzung des Kontaktformulars von uns erhobenen personenbezogenen Daten werden nach Erledigung der von Ihnen gestellten Anfrage automatisch gelöscht.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Weitergabe von Daten */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
              Weitergabe von Daten
            </h2>
            <div className="ml-11 text-gray-700">
              <p className="text-sm leading-relaxed">
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm ml-4">
                <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben</li>
                <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
                <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht</li>
              </ul>
            </div>
          </section>

          {/* 4. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
              Cookies
            </h2>
            <div className="ml-11 text-gray-700">
              <p className="text-sm leading-relaxed">
                Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.
              </p>
            </div>
          </section>

          {/* 5. Ihre Rechte */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
              Ihre Rechte
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p className="text-sm leading-relaxed">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Auskunft</h4>
                  <p className="text-sm">Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Berichtigung</h4>
                  <p className="text-sm">Sie haben das Recht, unverzüglich die Berichtigung unrichtiger Daten zu verlangen.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Löschung</h4>
                  <p className="text-sm">Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten Daten zu verlangen.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Widerspruch</h4>
                  <p className="text-sm">Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Datenübertragbarkeit</h4>
                  <p className="text-sm">Sie haben das Recht, die Daten in einem strukturierten Format zu erhalten.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Beschwerderecht</h4>
                  <p className="text-sm">Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Datensicherheit */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
              Datensicherheit
            </h2>
            <div className="ml-11 text-gray-700">
              <p className="text-sm leading-relaxed">
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
              </p>
            </div>
          </section>

          {/* 7. Aktualität */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">7</span>
              Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <div className="ml-11 text-gray-700">
              <p className="text-sm leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter dieser Seite von Ihnen abgerufen und ausgedruckt werden.
              </p>
            </div>
          </section>

        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-blue-600 rounded-xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Fragen zum Datenschutz?</h3>
          <p className="mb-4">Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten kontaktieren Sie uns gerne.</p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Kontakt aufnehmen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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

