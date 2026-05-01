/**
 * Keyword-basiertes Bild-System für SEO-optimierte Bildnamen
 * Rotiert durch verschiedene Keywords für maximale SEO-Performance
 */

/**
 * Bild-Keywords für verschiedene Reinigungstypen
 */
export const imageKeywordVariants = [
  'gebaeudereinigung',    // Gebäudereinigung
  'bueroreinigung',       // Büroreinigung
  'reinigungsfirma',      // Reinigungsfirma
  'reinigungsservice',    // Reinigungsservice
  'industriereinigung',   // Industriereinigung
  'unterhaltsreinigung',  // Unterhaltsreinigung
  'praxisreinigung',      // Praxisreinigung
  'grundreinigung',       // Grundreinigung
];

/**
 * SEO-Text-Keywords für ALT-Texte
 */
export const imageKeywordTexts = [
  'Gebäudereinigung',
  'Büroreinigung',
  'Reinigungsfirma',
  'Reinigungsservice',
  'Industriereinigung',
  'Unterhaltsreinigung',
  'Praxisreinigung',
  'Grundreinigung',
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
 * Generiert SEO-optimierten Bildnamen basierend auf Stadt-Slug
 * 
 * @param citySlug - Stadt-Slug (z.B. "dortmund")
 * @returns Keyword-basierter Bildname (z.B. "bueroreinigung-dortmund")
 * 
 * @example
 * getImageKeyword("dortmund") // → "bueroreinigung-dortmund"
 * getImageKeyword("koeln")    // → "gebaeudereinigung-koeln"
 */
export function getImageKeyword(citySlug: string): string {
  const variants = imageKeywordVariants;
  const keyword = variants[hash(citySlug) % variants.length];
  return `${keyword}-${citySlug}`;
}

/**
 * Generiert SEO-optimierten ALT-Text mit Keyword
 * 
 * @param cityName - Stadtname (z.B. "Dortmund")
 * @param citySlug - Stadt-Slug (z.B. "dortmund")
 * @returns Keyword-basierter ALT-Text
 * 
 * @example
 * getImageAltText("Dortmund", "dortmund") 
 * // → "DATRA Büroreinigung in Dortmund – Professioneller Reinigungsservice"
 */
export function getImageAltText(cityName: string, citySlug: string): string {
  const variants = imageKeywordTexts;
  const keyword = variants[hash(citySlug) % variants.length];
  return `DATRA ${keyword} in ${cityName} – Professioneller Reinigungsservice`;
}

/**
 * Generiert komplette Bild-URL mit Keyword
 * 
 * @param citySlug - Stadt-Slug (z.B. "dortmund")
 * @returns Vollständige Bild-URL
 * 
 * @example
 * getImageUrl("dortmund") 
 * // → "/images/bueroreinigung-dortmund.webp"
 */
export function getImageUrl(citySlug: string): string {
  return `/images/${getImageKeyword(citySlug)}.webp`;
}

