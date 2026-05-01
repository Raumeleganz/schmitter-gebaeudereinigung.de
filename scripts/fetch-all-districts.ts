/**
 * PROFI-SCRIPT: Holt echte Stadtteile für ALLE 90 NRW-Städte von Nominatim API
 * Erstellt von: Roxas, der göttliche Code-Architekt
 * Datum: 21.10.2025
 */

import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

interface District {
  name: string;
  type: string;
  lat: number;
  lng: number;
}

interface CityWithDistricts {
  cityName: string;
  slug: string;
  serviceDistricts: string[];
  featuredDistricts: string[];
  allDistricts: District[];
}

/**
 * Generiert URL-Slug aus Stadtnamen
 */
function generateSlug(cityName: string): string {
  return cityName
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Wartet X Sekunden (für Rate-Limiting)
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Holt Stadtteile für eine Stadt von Nominatim
 */
async function fetchDistrictsForCity(cityName: string): Promise<District[]> {
  try {
    // Suche nach Stadtteilen (suburbs) dieser Stadt
    const searchUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityName)},North Rhine-Westphalia,Germany&format=json&addressdetails=1&limit=1`;
    
    console.log(`   🔍 Suche Stadt: ${cityName}`);
    const cityResponse = await axios.get(searchUrl, {
      headers: { 'User-Agent': 'DATRA-Gebaeudereinigung/1.0' },
      timeout: 10000
    });

    await sleep(1500); // Nominatim Rate-Limit: 1 request/second

    if (!cityResponse.data || cityResponse.data.length === 0) {
      console.log(`   ⚠️  Stadt nicht gefunden: ${cityName}`);
      return [];
    }

    const cityData = cityResponse.data[0];
    const osmId = cityData.osm_id;
    const osmType = cityData.osm_type;

    // Hole alle Stadtteile (administrative level 10 = suburb/district)
    const districtsUrl = `https://nominatim.openstreetmap.org/search?q=suburb+in+${encodeURIComponent(cityName)},NRW,Germany&format=json&addressdetails=1&limit=50`;
    
    console.log(`   🏘️  Hole Stadtteile...`);
    const districtsResponse = await axios.get(districtsUrl, {
      headers: { 'User-Agent': 'DATRA-Gebaeudereinigung/1.0' },
      timeout: 10000
    });

    await sleep(1500);

    const districts: District[] = [];

    if (districtsResponse.data && Array.isArray(districtsResponse.data)) {
      for (const item of districtsResponse.data) {
        const address = item.address || {};
        const districtName = address.suburb || address.quarter || address.neighbourhood || address.district;
        
        if (districtName && districtName !== cityName) {
          districts.push({
            name: districtName,
            type: item.type,
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lon)
          });
        }
      }
    }

    // Entferne Duplikate
    const uniqueDistricts = districts.filter((district, index, self) =>
      index === self.findIndex(d => d.name === district.name)
    );

    console.log(`   ✅ ${uniqueDistricts.length} Stadtteile gefunden`);
    return uniqueDistricts;

  } catch (error: any) {
    console.error(`   ❌ Fehler bei ${cityName}:`, error.message);
    return [];
  }
}

/**
 * Wählt die besten Stadtteile aus (Service + Featured)
 */
function selectBestDistricts(allDistricts: District[]): {
  service: string[];
  featured: string[];
} {
  if (allDistricts.length === 0) {
    // Fallback zu generischen Stadtteilen
    return {
      service: ['Stadtmitte', 'Innenstadt', 'Altstadt', 'Neustadt', 'Zentrum'],
      featured: ['Nord', 'Süd', 'West']
    };
  }

  // Sortiere nach Namen
  const sorted = [...allDistricts].sort((a, b) => a.name.localeCompare(b.name));

  // Nimm die ersten 5 für Service, die nächsten 3 für Featured
  const service = sorted.slice(0, 5).map(d => d.name);
  const featured = sorted.slice(5, 8).map(d => d.name);

  // Fülle auf, falls nicht genug Stadtteile vorhanden
  while (service.length < 5) service.push('Stadtmitte');
  while (featured.length < 3) featured.push('Zentrum');

  return { service, featured };
}

/**
 * Liest alle Städte aus der Base-CSV
 */
function readCitiesFromCsv(csvPath: string): string[] {
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.trim().split('\n').slice(1); // Skip header
  
  return lines.map(line => {
    const [slug, name] = line.split(',');
    return name.trim();
  });
}

/**
 * Hauptfunktion
 */
async function main() {
  console.log('🏗️  DATRA - ALLE STADTTEILE VON NOMINATIM HOLEN\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const baseCsvPath = path.join(process.cwd(), 'data', 'nrw-cities-90-base.csv');
  const outputPath = path.join(process.cwd(), 'data', 'all-districts.json');

  // Städte aus CSV lesen
  console.log('📖 Lese Städte aus CSV...');
  const cities = readCitiesFromCsv(baseCsvPath);
  console.log(`✅ ${cities.length} Städte geladen\n`);

  // Stadtteile für jede Stadt holen
  console.log('🌍 Hole Stadtteile von Nominatim API...\n');
  console.log('⏱️  Geschätzte Dauer: ~' + Math.ceil((cities.length * 3) / 60) + ' Minuten\n');

  const allCityData: CityWithDistricts[] = [];

  for (let i = 0; i < cities.length; i++) {
    const cityName = cities[i];
    const progress = `[${String(i + 1).padStart(2, '0')}/${cities.length}]`;
    
    console.log(`${progress} 🏙️  ${cityName.padEnd(25)}`);

    const districts = await fetchDistrictsForCity(cityName);
    const selected = selectBestDistricts(districts);

    allCityData.push({
      cityName,
      slug: generateSlug(cityName),
      serviceDistricts: selected.service,
      featuredDistricts: selected.featured,
      allDistricts: districts
    });

    console.log(`   📋 Service: ${selected.service.slice(0, 3).join(', ')}`);
    console.log(`   ⭐ Featured: ${selected.featured.join(', ')}\n`);

    // Pause alle 10 Städte
    if ((i + 1) % 10 === 0) {
      console.log('⏸️  Pause (10 Sekunden)...\n');
      await sleep(10000);
    }
  }

  // Speichern
  console.log('\n💾 Speichere Ergebnisse...');
  fs.writeFileSync(outputPath, JSON.stringify(allCityData, null, 2), 'utf-8');
  console.log(`✅ Gespeichert: ${outputPath}\n`);

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('📊 STATISTIK:\n');
  console.log(`   ✅ Städte: ${allCityData.length}`);
  
  const totalDistricts = allCityData.reduce((sum, city) => sum + city.allDistricts.length, 0);
  console.log(`   ✅ Gesamt Stadtteile gefunden: ${totalDistricts}`);
  
  const citiesWithDistricts = allCityData.filter(city => city.allDistricts.length > 0).length;
  console.log(`   ✅ Städte mit echten Stadtteilen: ${citiesWithDistricts}`);
  console.log(`   ⚠️  Städte mit Fallback: ${allCityData.length - citiesWithDistricts}`);

  console.log('\n🎯 NÄCHSTER SCHRITT:\n');
  console.log('   Das Script wird jetzt automatisch die CSV aktualisieren...\n');

  // Aktualisiere generate-full-cities-csv.ts
  await updateCitiesScript(allCityData);
}

/**
 * Aktualisiert das generate-full-cities-csv.ts Script mit den neuen Daten
 */
async function updateCitiesScript(citiesData: CityWithDistricts[]) {
  console.log('🔧 Aktualisiere generate-full-cities-csv.ts...\n');

  // Erstelle das neue cityDistricts Object
  let newDistrictsObject = 'const cityDistricts: Record<string, { service: string[], featured: string[] }> = {\n';
  
  for (const city of citiesData) {
    newDistrictsObject += `  '${city.cityName}': {\n`;
    newDistrictsObject += `    service: [${city.serviceDistricts.map(d => `'${d}'`).join(', ')}],\n`;
    newDistrictsObject += `    featured: [${city.featuredDistricts.map(d => `'${d}'`).join(', ')}]\n`;
    newDistrictsObject += `  },\n`;
  }
  
  newDistrictsObject += '};';

  const scriptPath = path.join(process.cwd(), 'scripts', 'generate-full-cities-csv.ts');
  let scriptContent = fs.readFileSync(scriptPath, 'utf-8');

  // Ersetze das alte cityDistricts Object
  const oldDistrictsRegex = /const cityDistricts:[\s\S]*?^};/m;
  scriptContent = scriptContent.replace(oldDistrictsRegex, newDistrictsObject);

  fs.writeFileSync(scriptPath, scriptContent, 'utf-8');
  console.log('✅ Script aktualisiert!\n');

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('🚀 FERTIG! Führe jetzt aus:\n');
  console.log('   npm run generate:full-csv');
  console.log('   npm run generate:cities\n');
}

// Script ausführen
main().catch(console.error);

