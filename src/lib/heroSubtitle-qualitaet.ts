/**
 * Qualitäts-fokussierte Hero-Subtitles für Stadt-Landingpages
 * Stabile Hash-basierte Rotation für konsistente Texte
 */

/**
 * Qualitäts-Deck: Messbare Standards, Dokumentation, Verlässlichkeit
 */
export const heroSubtitles = (city: string): string[] => [
  `Messbar sauber: dokumentierte Leistungen, klare Standards und verlässliche Qualität in ${city}.`,
  `Hygienekonzepte mit Checklisten, Audits und nachvollziehbaren Ergebnissen – direkt in ${city}.`,
  `Praxis- & Bürohygiene nach klaren Standards – sicher umgesetzt und lückenlos dokumentiert in ${city}.`,
  `Für Unternehmen mit hohen Anforderungen: definierte Prozesse, feste Ansprechpartner, transparente Qualität in ${city}.`,
  `Verantwortungsvoll reinigen: materialschonend, ressourcensensibel und wirksam – in ${city}.`,
  `Struktur statt Zufall: Leistungsverzeichnisse, QS-Checks und nachvollziehbare Ergebnisse in ${city}.`,
  `Sichere Abläufe, geschulte Fachkräfte und dokumentierte Hygiene – für Ihre Flächen in ${city}.`,
  `Transparente Qualität in ${city}: dokumentierte Hygiene, klare Zuständigkeiten und nachvollziehbare Ergebnisse.`,
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
 * Wählt stabilen Qualitäts-Subtitle basierend auf Stadt-Slug
 * 
 * @param cityName - Stadtname (z.B. "Köln")
 * @param citySlug - Stadt-Slug (z.B. "koln")
 * @returns Stabiler Qualitäts-Subtitle für diese Stadt
 * 
 * @example
 * pickHeroSubtitleQual("Köln", "koln")
 * // → "Messbar sauber: dokumentierte Leistungen, klare Standards und verlässliche Qualität in Köln."
 */
export function pickHeroSubtitleQual(cityName: string, citySlug: string): string {
  const arr = heroSubtitles(cityName);
  return arr[hash(citySlug) % arr.length];
}

