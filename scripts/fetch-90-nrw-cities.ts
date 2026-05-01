/**
 * Top 90 NRW-Städte von Nominatim API
 * Erstellt Basis-CSV mit Geo-Daten für spätere Excel-Erweiterung
 */

import * as fs from 'fs';
import * as path from 'path';

// Top 90 NRW-Städte nach Einwohnerzahl (ab ~20.000 EW)
const top90NRWCities = [
  // Großstädte (>100k EW) - 30 Städte
  'Köln', 'Düsseldorf', 'Dortmund', 'Essen', 'Duisburg',
  'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster',
  'Mönchengladbach', 'Gelsenkirchen', 'Aachen', 'Krefeld', 'Oberhausen',
  'Hagen', 'Hamm', 'Mülheim an der Ruhr', 'Leverkusen', 'Solingen',
  'Herne', 'Neuss', 'Paderborn', 'Bottrop', 'Recklinghausen',
  'Remscheid', 'Bergisch Gladbach', 'Moers', 'Siegen', 'Gütersloh',
  
  // Mittelstädte (50k-100k EW) - 30 Städte
  'Witten', 'Iserlohn', 'Düren', 'Ratingen', 'Lünen',
  'Marl', 'Velbert', 'Minden', 'Troisdorf', 'Viersen',
  'Rheine', 'Lüdenscheid', 'Castrop-Rauxel', 'Gladbeck', 'Dorsten',
  'Detmold', 'Arnsberg', 'Bocholt', 'Lippstadt', 'Dinslaken',
  'Lübbecke', 'Kerpen', 'Wesel', 'Grevenbroich', 'Herten',
  'Bergheim', 'Dormagen', 'Unna', 'Langenfeld', 'Willich',
  
  // Kleinstädte (20k-50k EW) - 30 Städte
  'Hürth', 'Hilden', 'Meerbusch', 'Pulheim', 'Wesseling',
  'Euskirchen', 'Niederkassel', 'Erkelenz', 'Sankt Augustin', 'Königswinter',
  'Brühl', 'Siegburg', 'Hennef', 'Kleve', 'Frechen',
  'Übach-Palenberg', 'Kamp-Lintfort', 'Erkrath', 'Meckenheim', 'Mettmann',
  'Rheinbach', 'Gevelsberg', 'Emsdetten', 'Schwerte', 'Erftstadt',
  'Rheda-Wiedenbrück', 'Bünde', 'Kaarst', 'Meschede', 'Schwelm'
];

interface NominatimResult {
  lat: string;
  lon: string;
  display_name: string;
  address: {
    postcode?: string;
    city?: string;
    town?: string;
    village?: string;
    road?: string;
    house_number?: string;
  };
}

interface CityData {
  slug: string;
  name: string;
  lat: string;
  lng: string;
  postalCode: string;
  street: string;
  district: string;
}

/**
 * Generiert URL-freundlichen Slug
 */
function generateSlug(cityName: string): string {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Diakritika entfernen
    .replace(/ü/g, 'ue')
    .replace(/ö/g, 'oe')
    .replace(/ä/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/\s+an\s+der\s+/g, '-')
    .replace(/\s+am\s+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Holt Stadt-Daten von Nominatim API
 */
async function fetchCityData(cityName: string): Promise<CityData | null> {
  try {
    // Schritt 1: Stadt-Koordinaten holen
    const searchUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityName)},Nordrhein-Westfalen,Germany&format=json&limit=1&addressdetails=1`;
    
    const searchResponse = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'DATRA - Gebäudereinigung-NRW-Cities/1.0 (https://cleanpro-nrw.de)'
      }
    });
    
    if (!searchResponse.ok) {
      throw new Error(`HTTP ${searchResponse.status}`);
    }
    
    const searchData: NominatimResult[] = await searchResponse.json();
    
    if (searchData.length === 0) {
      return null;
    }
    
    const result = searchData[0];
    const slug = generateSlug(cityName);
    const lat = parseFloat(result.lat);
    const lng = parseFloat(result.lon);
    
    // Schritt 2: Reverse Geocoding für PLZ (zentrale Koordinaten)
    await new Promise(resolve => setTimeout(resolve, 500)); // Extra delay für zweiten Call
    
    const reverseUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1&zoom=16`;
    
    const reverseResponse = await fetch(reverseUrl, {
      headers: {
        'User-Agent': 'DATRA - Gebäudereinigung-NRW-Cities/1.0 (https://cleanpro-nrw.de)'
      }
    });
    
    let postalCode = '';
    let street = 'Marktplatz 1';
    
    if (reverseResponse.ok) {
      const reverseData = await reverseResponse.json();
      postalCode = reverseData.address?.postcode || '';
      
      // Straße für Schema.org
      if (reverseData.address?.road) {
        const houseNumber = reverseData.address?.house_number || '1';
        street = `${reverseData.address.road} ${houseNumber}`;
      }
    }
    
    // PLZ bereinigen
    if (postalCode.includes('-')) {
      postalCode = postalCode.split('-')[0];
    }
    if (!postalCode || postalCode === '00000') {
      postalCode = result.address?.postcode || '';
      if (postalCode.includes('-')) {
        postalCode = postalCode.split('-')[0];
      }
    }
    
    // Fallback: Aus display_name extrahieren
    if (!postalCode) {
      const plzMatch = result.display_name.match(/\b\d{5}\b/);
      postalCode = plzMatch ? plzMatch[0] : '00000';
    }
    
    return {
      slug,
      name: cityName,
      lat: lat.toFixed(4),
      lng: lng.toFixed(4),
      postalCode,
      street,
      district: 'Stadtmitte'
    };
    
  } catch (error) {
    console.error(`\n   ❌ Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    return null;
  }
}

/**
 * Hauptfunktion
 */
async function main() {
  console.log('🌍 DATRA - Gebäudereinigung NRW - Stadt-Daten Generator\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log(`📊 Anzahl Städte: ${top90NRWCities.length}`);
  console.log(`⏱️  Geschätzte Dauer: ~${Math.ceil(top90NRWCities.length * 2.5 / 60)} Minuten`);
  console.log(`🌐 API: Nominatim (OpenStreetMap)\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  const cities: CityData[] = [];
  let successCount = 0;
  let failCount = 0;
  const startTime = Date.now();
  
  for (let i = 0; i < top90NRWCities.length; i++) {
    const cityName = top90NRWCities[i];
    const progress = `[${String(i + 1).padStart(2, '0')}/${top90NRWCities.length}]`;
    const paddedName = cityName.padEnd(25, ' ');
    
    process.stdout.write(`${progress} 📍 ${paddedName}`);
    
    const cityData = await fetchCityData(cityName);
    
    if (cityData) {
      cities.push(cityData);
      successCount++;
      console.log(` ✅ ${cityData.lat}, ${cityData.lng} | PLZ: ${cityData.postalCode}`);
    } else {
      failCount++;
      console.log(` ❌ Fehler beim Abrufen`);
    }
    
    // Rate Limiting: 2 Sekunden pro Stadt (2 API Calls pro Stadt)
    if (i < top90NRWCities.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000 / 60).toFixed(1);
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('📊 ERGEBNIS:\n');
  console.log(`   ✅ Erfolgreich: ${successCount}`);
  console.log(`   ❌ Fehlgeschlagen: ${failCount}`);
  console.log(`   ⏱️  Dauer: ${duration} Minuten\n`);
  
  if (cities.length === 0) {
    console.error('❌ Keine Städte erfolgreich geladen. Abbruch.');
    process.exit(1);
  }
  
  // CSV erstellen
  console.log('💾 Erstelle CSV-Datei...\n');
  
  let csv = 'slug,name,lat,lng,postalCode,street,district\n';
  
  cities.forEach(city => {
    csv += `${city.slug},${city.name},${city.lat},${city.lng},${city.postalCode},"${city.street}",${city.district}\n`;
  });
  
  // Speichern
  const outputPath = path.join(process.cwd(), 'data', 'nrw-cities-90-base.csv');
  fs.writeFileSync(outputPath, csv, 'utf-8');
  
  console.log(`✅ Gespeichert: ${outputPath}\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('🎯 NÄCHSTE SCHRITTE:\n');
  console.log('   1. Öffne data/nrw-cities-90-base.csv in Excel');
  console.log('   2. Erweitere die Spalten (siehe data/cities-template.csv)');
  console.log('   3. Nutze Excel-Formeln für automatisches Befüllen:');
  console.log('      ="Gebäudereinigung " & B2 & " | DATRA - Gebäudereinigung"');
  console.log('   4. Speichere als data/cities.csv');
  console.log('   5. Führe aus: npm run generate:cities');
  console.log('   6. Starte Server: npm run dev\n');
  console.log('🚀 Dann hast du 90 perfekte Stadt-Landingpages!\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

// Script ausführen
main().catch(error => {
  console.error('\n❌ Kritischer Fehler:', error);
  process.exit(1);
});

