/**
 * Speed/Preis-Deck für Stadt-Landingpages
 * Stabile Hash-basierte Rotation für konsistente Texte
 */

type Fokus = "speed" | "preis";

/**
 * Speed-Deck: Schneller Start, kurze Wartezeiten
 */
export const deckSpeed = (city: string): string[] => [
  `Schnell startklar in ${city}: Besichtigung kurzfristig, Angebot fix, Übergabe an ein eingespieltes Team.`,
  `Zeitnah sauber: Angebot in 24 Stunden, Start in wenigen Tagen – verlässlich koordiniert in ${city}.`,
  `Weniger Wartezeit, mehr Hygiene: schnelle Terminfindung und dokumentierte Ergebnisse in ${city}.`,
  `Express-Unterstützung für Büro & Praxis in ${city} – klar organisiert, terminsicher umgesetzt.`,
  `Zügig zum sauberen Objekt: kurze Wege zum Angebot, schnelle Einsatzplanung, saubere Übergabe in ${city}.`,
  `Heute anfragen, bald starten: verlässliche Teams und transparente Abwicklung in ${city}.`,
];

/**
 * Preis-Deck: Faire Konditionen, transparente Kosten
 */
export const deckPreis = (city: string): string[] => [
  `Fair & transparent in ${city}: klare Festpreise, nachvollziehbare Leistungen, keine versteckten Kosten.`,
  `Mehr Leistung fürs Budget: effiziente Abläufe, saubere Ergebnisse – kalkulierbar in ${city}.`,
  `Fixpreis-Angebot in 24 Stunden: verständliche Pakete und verlässliche Qualität in ${city}.`,
  `Sichtbar sauber, spürbar fair: starke Ergebnisse zu fairen Konditionen in ${city}.`,
  `Kalkulierbar sauber: klare Angebote, planbare Kosten und dokumentierte Qualität in ${city}.`,
  `Effizient & günstig in ${city}: optimierte Prozesse, transparente Abrechnung, überzeugende Ergebnisse.`,
];

/**
 * Stabiler Hash für konsistente Zuordnung
 * Gleicher Slug → immer gleicher Text
 */
function hash(slug: string): number {
  let h = 5381;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) + h) + slug.charCodeAt(i);
  }
  return Math.abs(h);
}

/**
 * Wählt stabilen Deck-Text basierend auf Stadt-Slug
 * 
 * @param cityName - Stadtname (z.B. "Köln")
 * @param citySlug - Stadt-Slug (z.B. "koln")
 * @param fokus - "speed" oder "preis"
 * @returns Stabiler Deck-Text für diese Stadt
 * 
 * @example
 * pickDeckSpeedPreis("Köln", "koln", "speed")
 * // → "Schnell startklar in Köln: Besichtigung kurzfristig..."
 */
export function pickDeckSpeedPreis(
  cityName: string,
  citySlug: string,
  fokus: Fokus = "speed"
): string {
  const arr = fokus === "speed" ? deckSpeed(cityName) : deckPreis(cityName);
  return arr[hash(citySlug) % arr.length];
}

