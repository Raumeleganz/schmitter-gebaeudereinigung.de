/**
 * Findet Städte mit wenigen oder keinen Stadtteilen
 */

import * as fs from 'fs';
import * as path from 'path';

const jsonPath = path.join(process.cwd(), 'data', 'all-districts.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

console.log('🔍 Städte mit wenigen Stadtteilen:\n');

const citiesWithFewDistricts = data.filter((city: any) => city.allDistricts.length <= 5);

citiesWithFewDistricts
  .sort((a: any, b: any) => a.allDistricts.length - b.allDistricts.length)
  .forEach((city: any) => {
    console.log(`${city.cityName.padEnd(25)} | ${city.allDistricts.length} Stadtteile`);
    console.log(`   Service: ${city.serviceDistricts.join(', ')}`);
    console.log(`   Featured: ${city.featuredDistricts.join(', ')}`);
    console.log('');
  });

console.log(`\n📊 Gesamt: ${citiesWithFewDistricts.length} Städte mit ≤5 Stadtteilen\n`);

