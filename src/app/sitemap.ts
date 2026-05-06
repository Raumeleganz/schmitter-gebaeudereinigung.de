/**
 * Schmitter Gebäudereinigung Sitemap Generator
 * 
 * Generiert eine vollständige XML-Sitemap mit allen statischen und dynamischen Seiten:
 * - 10 statische Hauptseiten (inkl. rechtliche Seiten, FAQ, Preiskalkulator)
 * - 5 Service-Landingpages
 * - 90 Stadt-Landingpages (dynamisch aus cities.generated)
 * 
 * SEO-optimiert mit Priorities, Change Frequencies und Last Modified Dates.
 */

import { MetadataRoute } from 'next';
import { citySlugs } from '@/data/cities.generated';

const BASE_URL = 'https://schmitter-gebaeudereinigung.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  // ========================================
  // STATISCHE HAUPTSEITEN (10)
  // ========================================
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0, // Höchste Priorität für Homepage
    },
    {
      url: `${BASE_URL}/leistungen`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/einsatzgebiete`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ueber-uns`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.9, // Wichtig für Conversion
    },
    {
      url: `${BASE_URL}/preiskalkulator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8, // Wichtig für Conversion
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/agb`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ========================================
  // SERVICE-LANDINGPAGES (5)
  // ========================================
  const services = [
    'bueroreinigung',
    'praxisreinigung',
    'unterhaltsreinigung',
    'glasreinigung',
    'industriereinigung',
  ] as const;

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/leistungen/${service}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ========================================
  // STADT-LANDINGPAGES (90) - DYNAMISCH
  // ========================================
  const cityRoutes: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE_URL}/einsatzgebiete/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ========================================
  // ZUSAMMENFÜHRUNG & RÜCKGABE
  // ========================================
  const allRoutes = [...staticRoutes, ...serviceRoutes, ...cityRoutes];
  
  console.log(`✅ Sitemap generiert: ${allRoutes.length} URLs`);
  console.log(`   - Statische Seiten: ${staticRoutes.length}`);
  console.log(`   - Service-Seiten: ${serviceRoutes.length}`);
  console.log(`   - Stadt-Seiten: ${cityRoutes.length}`);
  
  return allRoutes;
}

