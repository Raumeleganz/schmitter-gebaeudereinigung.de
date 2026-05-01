/**
 * Stadt-Daten Interface für dynamische Landingpages
 */
export interface CityData {
  // SEO & URL
  slug: string;
  name: string;
  
  // Geo-Daten
  lat: number;
  lng: number;
  postalCode: string;
  street: string;
  district: string;
  
  // Meta-Tags
  h1: string;
  title: string;
  metaDescription: string;
  
  // Hero-Section
  heroTitle: string;
  heroSubtitle: string;
  
  // Service-Bereiche (5 Stück)
  serviceArea1: string;
  serviceArea2: string;
  serviceArea3: string;
  serviceArea4: string;
  serviceArea5: string;
  
  // Stadtteile für Grid (3 Stück)
  stadtteil1: string;
  stadtteil2: string;
  stadtteil3: string;
  
  // Keywords (5 Stück)
  keyword1: string;
  keyword2: string;
  keyword3: string;
  keyword4: string;
  keyword5: string;
  
  // Bilder & Alt-Texte
  imageKeyword: string;
  imageAlt: string;
  
  // Content
  aboutText: string;
  ctaText: string;
  
  // Schema.org
  schemaBusinessName: string;
}

/**
 * Runtime-Validierung für Stadt-Daten
 */
export function validateCityData(data: unknown): CityData {
  const city = data as CityData;
  
  if (!city.slug || !city.name) {
    throw new Error('Slug und Name sind erforderlich');
  }
  
  if (!city.lat || !city.lng) {
    throw new Error('Geo-Koordinaten sind erforderlich');
  }
  
  return city;
}

