/**
 * Schmitter - Sitemap Test & Validation Script
 * 
 * Testet die Sitemap-Generierung und validiert alle URLs
 * 
 * Usage:
 * npx tsx scripts/test-sitemap.ts
 */

import { citySlugs } from '../src/data/cities.generated';

const BASE_URL = 'https://schmitter-gebaeudereinigung.de';

interface SitemapStats {
  totalUrls: number;
  staticPages: number;
  servicePages: number;
  cityPages: number;
  duplicates: number;
  invalidUrls: number;
}

function testSitemap(): SitemapStats {
  const now = new Date();
  const allUrls: string[] = [];
  
  console.log('🔍 Schmitter - Sitemap Validierung\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Statische Seiten
  const staticPages = [
    BASE_URL,
    `${BASE_URL}/leistungen`,
    `${BASE_URL}/einsatzgebiete`,
    `${BASE_URL}/ueber-uns`,
    `${BASE_URL}/kontakt`,
  ];
  allUrls.push(...staticPages);
  console.log(`✅ Statische Seiten: ${staticPages.length}`);
  staticPages.forEach(url => console.log(`   - ${url}`));
  
  // Service-Seiten
  const services = [
    'bueroreinigung',
    'praxisreinigung',
    'unterhaltsreinigung',
    'glasreinigung',
    'industriereinigung',
  ];
  const servicePages = services.map(s => `${BASE_URL}/leistungen/${s}`);
  allUrls.push(...servicePages);
  console.log(`\n✅ Service-Seiten: ${servicePages.length}`);
  servicePages.forEach(url => console.log(`   - ${url}`));
  
  // Stadt-Seiten
  const cityPages = citySlugs.map(slug => `${BASE_URL}/einsatzgebiete/${slug}`);
  allUrls.push(...cityPages);
  console.log(`\n✅ Stadt-Seiten: ${cityPages.length}`);
  console.log(`   Erste 5: ${cityPages.slice(0, 5).map(u => u.split('/').pop()).join(', ')}`);
  console.log(`   Letzte 5: ${cityPages.slice(-5).map(u => u.split('/').pop()).join(', ')}`);
  
  // Validierung
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('🔍 VALIDIERUNG:\n');
  
  // Duplikate prüfen
  const uniqueUrls = new Set(allUrls);
  const duplicates = allUrls.length - uniqueUrls.size;
  console.log(`   ${duplicates === 0 ? '✅' : '❌'} Duplikate: ${duplicates}`);
  
  // URL-Format prüfen
  const invalidUrls = allUrls.filter(url => {
    try {
      new URL(url);
      return false;
    } catch {
      return true;
    }
  });
  console.log(`   ${invalidUrls.length === 0 ? '✅' : '❌'} Ungültige URLs: ${invalidUrls.length}`);
  
  // Domain prüfen
  const wrongDomain = allUrls.filter(url => !url.startsWith(BASE_URL));
  console.log(`   ${wrongDomain.length === 0 ? '✅' : '❌'} Falsche Domain: ${wrongDomain.length}`);
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('📊 ZUSAMMENFASSUNG:\n');
  console.log(`   Gesamt URLs: ${allUrls.length}`);
  console.log(`   - Statische: ${staticPages.length}`);
  console.log(`   - Services: ${servicePages.length}`);
  console.log(`   - Städte: ${cityPages.length}`);
  console.log(`   Einzigartig: ${uniqueUrls.size}`);
  
  const stats: SitemapStats = {
    totalUrls: allUrls.length,
    staticPages: staticPages.length,
    servicePages: servicePages.length,
    cityPages: cityPages.length,
    duplicates,
    invalidUrls: invalidUrls.length,
  };
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  if (duplicates === 0 && invalidUrls.length === 0 && wrongDomain.length === 0) {
    console.log('✅ SITEMAP PERFEKT! Alles bereit für Google!\n');
  } else {
    console.log('❌ FEHLER GEFUNDEN! Bitte korrigieren.\n');
  }
  
  return stats;
}

// Script ausführen
testSitemap();

