/**
 * Script: Liste aller benötigten Bild-Dateinamen für 90 Städte
 * 
 * Usage:
 * npx tsx scripts/list-required-images.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Import image keyword system
import { getImageKeyword, getImageAltText } from '../src/lib/image-keywords';

// Import cities
import { citySlugs, getCityBySlug } from '../src/data/cities.generated';

interface ImageInfo {
  filename: string;
  citySlug: string;
  cityName: string;
  altText: string;
  keyword: string;
}

/**
 * Hauptfunktion
 */
function main() {
  console.log('🖼️  DATRA - Bild-Dateinamen Generator\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  const images: ImageInfo[] = [];
  const keywordStats: Record<string, number> = {};

  // Generiere Bildinfo für alle Städte
  citySlugs.forEach((slug) => {
    const city = getCityBySlug(slug);
    if (!city) return;

    const keyword = getImageKeyword(slug);
    const filename = `${keyword}.webp`;
    const altText = getImageAltText(city.name, slug);
    
    // Extrahiere Keyword-Typ
    const keywordType = keyword.split('-')[0];
    keywordStats[keywordType] = (keywordStats[keywordType] || 0) + 1;

    images.push({
      filename,
      citySlug: slug,
      cityName: city.name,
      altText,
      keyword: keywordType
    });
  });

  // Ausgabe: Vollständige Liste
  console.log('📋 ALLE BENÖTIGTEN BILDER (90 Städte):\n');
  console.log('Format: [Keyword] Dateiname → Stadt\n');
  
  images.forEach((img, index) => {
    console.log(`${String(index + 1).padStart(2, '0')}. [${img.keyword}] ${img.filename.padEnd(40)} → ${img.cityName}`);
  });

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Statistik
  console.log('📊 KEYWORD-VERTEILUNG:\n');
  Object.entries(keywordStats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([keyword, count]) => {
      const percentage = ((count / images.length) * 100).toFixed(1);
      console.log(`   ${keyword.padEnd(25)} → ${String(count).padStart(2)} Bilder (${percentage}%)`);
    });

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Nur Dateinamen (für Bulk-Upload)
  console.log('📝 NUR DATEINAMEN (zum Kopieren):\n');
  images.forEach((img) => {
    console.log(img.filename);
  });

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // CSV Export (optional)
  const csvPath = path.join(process.cwd(), 'data', 'required-images.csv');
  const csv = 'filename,citySlug,cityName,altText,keyword\n' + 
    images.map(img => 
      `"${img.filename}","${img.citySlug}","${img.cityName}","${img.altText}","${img.keyword}"`
    ).join('\n');
  
  fs.writeFileSync(csvPath, csv, 'utf-8');
  console.log(`✅ CSV exportiert: ${csvPath}`);

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Beispiele
  console.log('📸 BEISPIELE:\n');
  const examples = images.slice(0, 5);
  examples.forEach((img) => {
    console.log(`Datei:    ${img.filename}`);
    console.log(`Stadt:    ${img.cityName}`);
    console.log(`Keyword:  ${img.keyword}`);
    console.log(`ALT-Text: ${img.altText}`);
    console.log('');
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('🚀 NÄCHSTE SCHRITTE:\n');
  console.log('   1. Erstelle/besorge 90 Bilder (800x800 px, WebP)');
  console.log('   2. Benenne sie nach obiger Liste');
  console.log('   3. Upload nach: /public/images/');
  console.log('   4. Fertig! ✅');
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

// Script ausführen
main();

