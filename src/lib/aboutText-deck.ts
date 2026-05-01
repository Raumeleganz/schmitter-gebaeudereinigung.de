/**
 * AboutText-Deck für Stadt-Landingpages
 * Stabile Hash-basierte Rotation für konsistente Texte
 * Mindestens 500 Zeichen für SEO-Performance
 */

/**
 * AboutText-Varianten mit DATRA-Branding
 */
export const aboutTextVariants = (city: string): string[] => [
  // Variante 1: Erfahrung & Zuverlässigkeit
  `DATRA ist seit über 15 Jahren Ihr zuverlässiger Partner für professionelle Gebäudereinigung in ${city} und Umgebung. In ${city} als wichtiger Standort für Unternehmen vertrauen bereits zahlreiche Betriebe auf unsere professionellen Reinigungsdienstleistungen. Mit modernster Reinigungstechnik, geschultem Fachpersonal und einem umfassenden Qualitätsmanagement sorgen wir für hygienisch einwandfreie Räumlichkeiten. Unser Leistungsspektrum umfasst die komplette Unterhaltsreinigung, Grundreinigung sowie Spezialreinigungen für alle Gebäudetypen und Branchen. Verlassen Sie sich auf DATRA – Expertise, Zuverlässigkeit und kundenorientierte Arbeitsweise in ${city}.`,

  // Variante 2: Qualität & Standards
  `Als erfahrener Partner für Gebäudereinigung sind wir in ${city} Ihr kompetenter Ansprechpartner für sämtliche Reinigungsdienstleistungen. DATRA steht für messbare Qualität: dokumentierte Leistungen, klare Standards und verlässliche Ergebnisse. Unsere zertifizierten Reinigungskräfte kennen die speziellen Anforderungen in ${city} und setzen modernste Reinigungstechnologien sowie umweltfreundliche Reinigungsmittel ein. Ob Bürogebäude, Produktionshallen, medizinische Einrichtungen oder öffentliche Gebäude – wir garantieren höchste Hygienestandards und nachhaltige Sauberkeit. Profitieren Sie von unserer langjährigen Erfahrung und einem ausgezeichneten Preis-Leistungs-Verhältnis in ${city}.`,

  // Variante 3: Individualität & Flexibilität
  `In ${city} bietet DATRA als etabliertes Reinigungsunternehmen maßgeschneiderte Lösungen für Ihre individuellen Anforderungen. Mit über 15 Jahren Erfahrung verstehen wir die vielfältigen Herausforderungen der Gebäudereinigung in ${city}. Unsere geschulten Fachkräfte arbeiten mit modernster Technik und umweltschonenden Reinigungsmitteln, um optimale Ergebnisse zu erzielen. Von der täglichen Unterhaltsreinigung über Grundreinigungen bis hin zu Spezialreinigungen – wir passen unsere Dienstleistungen exakt an Ihre Bedürfnisse an. Vertrauen Sie auf Qualität, Erfahrung und einen Service, der Ihre Erwartungen in ${city} übertrifft.`,

  // Variante 4: Nachhaltigkeit & Effizienz
  `DATRA verbindet in ${city} professionelle Gebäudereinigung mit ökologischer Verantwortung. Als umweltbewusster Dienstleister setzen wir auf ressourcenschonende Reinigungsmethoden und biologisch abbaubare Reinigungsmittel – ohne Kompromisse bei der Hygiene. In ${city} mit seiner dynamischen Entwicklung benötigen Unternehmen effiziente Reinigungslösungen, die Zeit und Kosten sparen. Unser geschultes Personal arbeitet nach strukturierten Prozessen und garantiert konstante Qualität. Von Büros über Praxen bis hin zu Industrieanlagen: DATRA ist Ihr Partner für nachhaltige Sauberkeit und dokumentierte Ergebnisse in ${city}.`,

  // Variante 5: Schnelligkeit & Verfügbarkeit
  `Schneller Start, verlässliche Qualität – DATRA macht Gebäudereinigung in ${city} einfach. Mit kurzen Reaktionszeiten, transparenten Festpreisen und flexiblen Einsatzzeiten sind wir der ideale Partner für Unternehmen in ${city}. Unsere erfahrenen Reinigungskräfte kennen die lokalen Anforderungen und arbeiten diskret sowie effizient. Ob regelmäßige Unterhaltsreinigung, einmalige Grundreinigung oder Sonderreinigungen – wir bieten das komplette Leistungsspektrum aus einer Hand. Profitieren Sie von über 15 Jahren Expertise, modernster Reinigungstechnik und einem Service, der Ihre Erwartungen in ${city} übertrifft.`,

  // Variante 6: Hygiene & Gesundheit
  `In ${city} sorgt DATRA für höchste Hygienestandards in Ihren Räumlichkeiten. Als spezialisierter Dienstleister für Gebäudereinigung legen wir besonderen Wert auf gesundheitsfördernde Reinigungskonzepte. Unsere zertifizierten Fachkräfte arbeiten nach aktuellen Hygienerichtlinien und setzen professionelle Reinigungstechnik ein, die Bakterien, Viren und Allergene wirkungsvoll beseitigt. Besonders für medizinische Einrichtungen, Praxen und lebensmittelverarbeitende Betriebe in ${city} bieten wir spezielle Hygienekonzepte. Mit DATRA investieren Sie in die Gesundheit Ihrer Mitarbeiter und Kunden – verlässlich, dokumentiert und nach höchsten Standards in ${city}.`,

  // Variante 7: Zuverlässigkeit & Planbarkeit
  `Planbare Sauberkeit in ${city} – darauf können Sie sich bei DATRA verlassen. Als professioneller Dienstleister für Gebäudereinigung garantieren wir feste Ansprechpartner, definierte Leistungsverzeichnisse und termingerechte Ausführung. In ${city} vertrauen zahlreiche Unternehmen auf unsere strukturierten Abläufe und konstante Qualität. Unsere geschulten Reinigungskräfte arbeiten nach Checklisten, dokumentieren ihre Leistungen und unterliegen regelmäßigen Qualitätskontrollen. Von der ersten Besichtigung über das Festpreis-Angebot bis zur laufenden Betreuung – DATRA steht für Transparenz, Zuverlässigkeit und professionelle Gebäudereinigung in ${city}.`,

  // Variante 8: Wirtschaftlichkeit & Wert
  `Mehr Leistung fürs Budget – DATRA bietet in ${city} effiziente Gebäudereinigung zu fairen Konditionen. Durch optimierte Prozesse, geschultes Personal und moderne Reinigungstechnik halten wir die Kosten niedrig, ohne an der Qualität zu sparen. In ${city} mit seinen vielfältigen Wirtschaftsbranchen verstehen wir die Bedeutung eines ausgezeichneten Preis-Leistungs-Verhältnisses. Unsere transparenten Festpreise, kurzen Angebotszeiten und flexiblen Vertragsmodelle machen Gebäudereinigung kalkulierbar. Ob Büro, Praxis oder Industrieanlage – mit DATRA erhalten Sie messbare Qualität, dokumentierte Leistungen und einen Service, der sich rechnet in ${city}.`,
];

/**
 * Stabiler Hash für konsistente Zuordnung
 */
function hash(slug: string): number {
  let h = 5381;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) + h) + slug.charCodeAt(i);
  }
  return Math.abs(h);
}

/**
 * Wählt stabilen AboutText basierend auf Stadt-Slug
 * 
 * @param cityName - Stadtname (z.B. "Erkrath")
 * @param citySlug - Stadt-Slug (z.B. "erkrath")
 * @returns Stabiler AboutText (500+ Zeichen) für diese Stadt
 * 
 * @example
 * pickAboutText("Erkrath", "erkrath")
 * // → "DATRA ist seit über 15 Jahren Ihr zuverlässiger Partner..."
 */
export function pickAboutText(cityName: string, citySlug: string): string {
  const arr = aboutTextVariants(cityName);
  return arr[hash(citySlug) % arr.length];
}

