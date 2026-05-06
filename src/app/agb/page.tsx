import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB | Schmitter Gebäudereinigung",
  description: "Allgemeine Geschäftsbedingungen der Schmitter Gebäudereinigung",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Allgemeine Geschäftsbedingungen
          </h1>
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
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Gebäudereinigungsleistungen zwischen der Schmitter Gebäudereinigung und ihren Auftraggebern.
              </p>
            </div>
          </section>

          {/* 1. Geltungsbereich */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
              Geltungsbereich
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Diese Geschäftsbedingungen gelten für alle Verträge über Gebäudereinigungsleistungen zwischen der Schmitter Gebäudereinigung (nachfolgend "Auftragnehmer") und dem Auftraggeber.
              </p>
              <p>
                Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden, selbst bei Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>
              <p>
                Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen, auch wenn sie nicht nochmals ausdrücklich vereinbart werden.
              </p>
            </div>
          </section>

          {/* 2. Vertragsschluss */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
              Vertragsschluss
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.
              </p>
              <p>
                Der Vertrag kommt zustande durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn der Ausführung der Leistung.
              </p>
              <p>
                Änderungen und Ergänzungen des Vertrages bedürfen zu ihrer Wirksamkeit der Schriftform. Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses.
              </p>
            </div>
          </section>

          {/* 3. Leistungsumfang */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
              Leistungsumfang
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der Auftragsbestätigung bzw. dem Leistungsverzeichnis.
              </p>
              <p>
                Sofern nicht ausdrücklich vereinbart, umfasst der Leistungsumfang nicht:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Sonderreinigungen außerhalb des vereinbarten Leistungsverzeichnisses</li>
                <li>Reinigung von besonders empfindlichen oder wertvollen Gegenständen</li>
                <li>Entsorgung von Sondermüll</li>
                <li>Winterdienst und Schneeräumung (sofern nicht gesondert vereinbart)</li>
              </ul>
            </div>
          </section>

          {/* 4. Preise und Zahlung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
              Preise und Zahlung
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Es gelten die im Vertrag bzw. in der Auftragsbestätigung genannten Preise. Alle Preise verstehen sich zuzüglich der jeweils gültigen gesetzlichen Mehrwertsteuer.
              </p>
              <p>
                Die Rechnungsstellung erfolgt monatlich zum Ende des Monats für die im laufenden Monat erbrachten Leistungen.
              </p>
              <p>
                Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
              </p>
              <p>
                Bei Zahlungsverzug ist der Auftragnehmer berechtigt, seine Leistungen bis zur vollständigen Bezahlung einzustellen.
              </p>
            </div>
          </section>

          {/* 5. Mitwirkungspflichten des Auftraggebers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
              Mitwirkungspflichten des Auftraggebers
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>Der Auftraggeber verpflichtet sich:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Die zu reinigenden Räumlichkeiten zum vereinbarten Zeitpunkt zugänglich zu machen</li>
                <li>Wertsachen und empfindliche Gegenstände vor Reinigungsbeginn zu sichern</li>
                <li>Erforderliche Betriebsmittel (Strom, Wasser) zur Verfügung zu stellen</li>
                <li>Den Auftragnehmer über besondere Gefahrenquellen zu informieren</li>
                <li>Mängel unverzüglich, spätestens innerhalb von 24 Stunden, zu rügen</li>
              </ul>
            </div>
          </section>

          {/* 6. Haftung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
              Haftung
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Der Auftragnehmer haftet für Vorsatz und grobe Fahrlässigkeit. Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten).
              </p>
              <p>
                Die Haftung bei leicht fahrlässiger Verletzung von Kardinalpflichten ist auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p>
                Der Auftragnehmer unterhält eine Betriebshaftpflichtversicherung mit einer Deckungssumme von 5 Millionen Euro für Personen- und Sachschäden.
              </p>
              <p>
                Schadensersatzansprüche verjähren nach 6 Monaten ab Kenntnis des Schadens, spätestens jedoch 3 Jahre nach der schädigenden Handlung.
              </p>
            </div>
          </section>

          {/* 7. Geheimhaltung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">7</span>
              Geheimhaltung und Datenschutz
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Der Auftragnehmer verpflichtet sich, alle im Zusammenhang mit der Auftragsausführung bekannt werdenden Informationen vertraulich zu behandeln.
              </p>
              <p>
                Diese Verpflichtung gilt auch nach Beendigung des Vertragsverhältnisses.
              </p>
              <p>
                Der Auftragnehmer verpflichtet seine Mitarbeiter zur Einhaltung des Datengeheimnisses gemäß DSGVO.
              </p>
            </div>
          </section>

          {/* 8. Vertragslaufzeit und Kündigung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">8</span>
              Vertragslaufzeit und Kündigung
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Bei Daueraufträgen beträgt die Mindestvertragslaufzeit 12 Monate, sofern nicht anders vereinbart.
              </p>
              <p>
                Der Vertrag verlängert sich automatisch um jeweils weitere 12 Monate, wenn er nicht 3 Monate vor Ablauf der Vertragslaufzeit schriftlich gekündigt wird.
              </p>
              <p>
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor bei:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Zahlungsverzug von mehr als 2 Monaten</li>
                <li>Wiederholter erheblicher Verletzung vertraglicher Pflichten</li>
                <li>Insolvenz einer Vertragspartei</li>
              </ul>
            </div>
          </section>

          {/* 9. Qualitätssicherung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">9</span>
              Qualitätssicherung
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Der Auftragnehmer führt regelmäßige Qualitätskontrollen durch und ist bestrebt, die vereinbarten Leistungen stets zur vollsten Zufriedenheit des Auftraggebers zu erbringen.
              </p>
              <p>
                Reklamationen sind unverzüglich, spätestens jedoch innerhalb von 24 Stunden nach Leistungserbringung, schriftlich oder per E-Mail zu melden.
              </p>
              <p>
                Bei berechtigten Mängelrügen wird der Auftragnehmer die Mängel unverzüglich und kostenlos beseitigen.
              </p>
            </div>
          </section>

          {/* 10. Salvatorische Klausel */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">10</span>
              Salvatorische Klausel
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed">
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
              </p>
            </div>
          </section>

          {/* 11. Gerichtsstand und Anwendbares Recht */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">11</span>
              Gerichtsstand und anwendbares Recht
            </h2>
            <div className="ml-11 text-gray-700 text-sm leading-relaxed space-y-2">
              <p>
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
              </p>
              <p>
                Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit gesetzlich zulässig, der Sitz des Auftragnehmers.
              </p>
            </div>
          </section>

        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-blue-600 rounded-xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Fragen zu unseren AGB?</h3>
          <p className="mb-4">Wir beraten Sie gerne persönlich zu unseren Geschäftsbedingungen und Ihrem individuellen Reinigungsprojekt.</p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Jetzt Kontakt aufnehmen
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

