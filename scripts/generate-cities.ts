/**
 * CSV zu TypeScript Generator für Stadt-Landingpages
 * 
 * Usage:
 * npx tsx scripts/generate-cities.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { pickAboutText } from '../src/lib/aboutText-deck';

interface CityData {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  postalCode: string;
  street: string;
  district: string;
  h1: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  serviceArea1: string;
  serviceArea2: string;
  serviceArea3: string;
  serviceArea4: string;
  serviceArea5: string;
  keyword1: string;
  keyword2: string;
  keyword3: string;
  keyword4: string;
  keyword5: string;
  imageKeyword: string;
  imageAlt: string;
  aboutText: string;
  ctaText: string;
  schemaBusinessName: string;
}

/**
 * CSV Parser mit Fehlerbehandlung
 */
function parseCSV(csvContent: string): CityData[] {
  const lines = csvContent.split('\n').filter(line => line.trim());
  
  if (lines.length < 2) {
    throw new Error('CSV muss mindestens Header und eine Datenzeile enthalten');
  }

  const headers = lines[0].split(',');
  const cities: CityData[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    
    if (values.length !== headers.length) {
      console.warn(`Zeile ${i + 1}: Spaltenanzahl stimmt nicht überein (${values.length} vs ${headers.length})`);
      continue;
    }

    const city: any = {};
    headers.forEach((header, index) => {
      const value = values[index].trim();
      
      // Numerische Werte konvertieren
      if (header === 'lat' || header === 'lng') {
        city[header] = parseFloat(value);
      } else {
        city[header] = value;
      }
    });

    cities.push(city as CityData);
  }

  return cities;
}

/**
 * Erweiteter CSV-Line-Parser (behandelt Kommas in Anführungszeichen)
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

/**
 * Generiert unique SEO-optimierten aboutText für jede Stadt (min. 500 Zeichen)
 * Verwendet das AboutText-Deck-System für konsistente Variation
 */
function generateUniqueAboutText(city: CityData): string {
  return pickAboutText(city.name, city.slug);
}

/**
 * Generiert TypeScript-Datei mit allen Stadt-Daten
 */
function generateCitiesFile(cities: CityData[], outputPath: string): void {
  // Generiere unique aboutText für jede Stadt
  const enrichedCities = cities.map(city => ({
    ...city,
    aboutText: generateUniqueAboutText(city)
  }));

  const content = `/**
 * Auto-generiert von scripts/generate-cities.ts
 * Letzte Aktualisierung: ${new Date().toISOString()}
 */

import { CityData } from '@/types/city';

export const cities: Record<string, CityData> = ${JSON.stringify(
    enrichedCities.reduce((acc, city) => {
      acc[city.slug] = city;
      return acc;
    }, {} as Record<string, CityData>),
    null,
    2
  )};

/**
 * Alle verfügbaren Stadt-Slugs
 */
export const citySlugs = Object.keys(cities);

/**
 * Stadt-Daten nach Slug abrufen
 */
export function getCityBySlug(slug: string): CityData | undefined {
  return cities[slug];
}

/**
 * Alle Städte als Array
 */
export function getAllCities(): CityData[] {
  return Object.values(cities);
}
`;

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`✅ ${cities.length} Städte wurden nach ${outputPath} exportiert`);
  console.log(`✅ Unique SEO-Content generiert (${enrichedCities[0].aboutText.length}+ Zeichen pro Stadt)`);
}

/**
 * Hauptfunktion
 */
function main() {
  try {
    const csvPath = path.join(process.cwd(), 'data', 'cities.csv');
    const outputPath = path.join(process.cwd(), 'src', 'data', 'cities.generated.ts');

    // Prüfen ob CSV existiert
    if (!fs.existsSync(csvPath)) {
      console.error(`❌ CSV-Datei nicht gefunden: ${csvPath}`);
      console.log(`💡 Verwende das Template: data/cities-template.csv`);
      process.exit(1);
    }

    // CSV einlesen
    console.log(`📖 Lese CSV: ${csvPath}`);
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    // CSV parsen
    const cities = parseCSV(csvContent);
    console.log(`✅ ${cities.length} Städte gefunden`);

    // Validierung
    cities.forEach((city, index) => {
      if (!city.slug || !city.name) {
        console.warn(`⚠️  Stadt ${index + 1}: Slug oder Name fehlt`);
      }
      if (!city.lat || !city.lng) {
        console.warn(`⚠️  Stadt ${city.name}: Geo-Koordinaten fehlen`);
      }
    });

    // Output-Verzeichnis erstellen
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // TypeScript-Datei generieren
    generateCitiesFile(cities, outputPath);

    console.log('\n🚀 Generation abgeschlossen!');
    console.log(`\n📍 Städte: ${cities.map(c => c.name).join(', ')}`);

  } catch (error) {
    console.error('❌ Fehler bei der Generation:', error);
    process.exit(1);
  }
}

// Script ausführen
main();

