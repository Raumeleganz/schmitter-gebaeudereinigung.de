/**
 * DATRA - Umlaut-Slug Fixer
 * 
 * Korrigiert alle Slugs in der CSV damit Umlaute korrekt ersetzt werden:
 * ö → oe, ü → ue, ä → ae
 * 
 * Usage:
 * npx tsx scripts/fix-umlaut-slugs.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_CSV = path.join(process.cwd(), 'data', 'nrw-cities-90-base.csv');
const OUTPUT_CSV = path.join(process.cwd(), 'data', 'nrw-cities-90-base-fixed.csv');

/**
 * Konvertiert einen Stadt-Namen zu einem URL-freundlichen Slug mit korrekten Umlaut-Ersetzungen
 */
function generateSlug(cityName: string): string {
  return cityName
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function main() {
  console.log('🔧 DATRA - Umlaut-Slug Fixer\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // CSV lesen
  const content = fs.readFileSync(BASE_CSV, 'utf-8');
  const lines = content.split('\n');
  
  if (lines.length === 0) {
    console.error('❌ CSV ist leer!');
    process.exit(1);
  }
  
  // Header
  const header = lines[0];
  const fixedLines = [header];
  
  let fixedCount = 0;
  const changes: Array<{old: string, new: string, city: string}> = [];
  
  // Jede Zeile durchgehen
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // CSV parsen (einfach, funktioniert für unsere Struktur)
    const parts = line.split(',');
    if (parts.length < 2) continue;
    
    const oldSlug = parts[0];
    const cityName = parts[1];
    
    // Neuen Slug generieren
    const newSlug = generateSlug(cityName);
    
    if (oldSlug !== newSlug) {
      changes.push({
        old: oldSlug,
        new: newSlug,
        city: cityName
      });
      fixedCount++;
      
      // Zeile mit neuem Slug
      parts[0] = newSlug;
      fixedLines.push(parts.join(','));
    } else {
      // Zeile unverändert
      fixedLines.push(line);
    }
  }
  
  // Änderungen anzeigen
  if (fixedCount > 0) {
    console.log(`📋 GEFUNDENE PROBLEME (${fixedCount}):\n`);
    changes.forEach((change, index) => {
      console.log(`${(index + 1).toString().padStart(2, ' ')}. ${change.city}`);
      console.log(`   ❌ ALT: ${change.old}`);
      console.log(`   ✅ NEU: ${change.new}\n`);
    });
  } else {
    console.log('✅ Keine Probleme gefunden! Alle Slugs sind korrekt.\n');
    return;
  }
  
  // Neue CSV schreiben
  fs.writeFileSync(OUTPUT_CSV, fixedLines.join('\n'), 'utf-8');
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log(`✅ ${fixedCount} Slugs korrigiert!`);
  console.log(`📄 Neue Datei: ${OUTPUT_CSV}\n`);
  console.log('🔄 NÄCHSTE SCHRITTE:\n');
  console.log('   1. Prüfe die neue Datei');
  console.log('   2. Ersetze die alte:');
  console.log('      mv data/nrw-cities-90-base-fixed.csv data/nrw-cities-90-base.csv');
  console.log('   3. Regeneriere cities.csv:');
  console.log('      npm run generate:cities\n');
}

main();

