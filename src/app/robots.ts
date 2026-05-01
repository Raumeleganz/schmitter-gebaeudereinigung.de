/**
 * ABED - Gebäudereinigung Robots.txt Generator
 * 
 * Definiert Crawler-Regeln für Suchmaschinen:
 * - Erlaubt alle öffentlichen Seiten
 * - Blockiert API-Routes und Next.js interne Pfade
 * - Verweist auf die XML-Sitemap
 * 
 * SEO-optimiert für maximale Indexierung.
 */

import { MetadataRoute } from 'next';

const BASE_URL = 'https://ABED-gebaeudereinigung.de';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API-Routes blockieren
          '/_next/',         // Next.js Build-Dateien
          '/admin/',         // Admin-Bereich (falls vorhanden)
          '/*.json',         // JSON-Dateien
          '/private/',       // Private Bereiche
        ],
      },
      {
        // Spezielle Regeln für Google Bot (optional)
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        // Bing Bot
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}

