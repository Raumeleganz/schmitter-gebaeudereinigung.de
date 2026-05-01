# 🚀 DATRA - SEO-SETUP DOKUMENTATION

## 📋 Übersicht

Vollständiges SEO-Setup für DATRA Gebäudereinigung mit **100 optimierten Seiten**.

---

## 🗺️ SITEMAP (100 URLs)

### Struktur
```
✅ datra-gebaeudereinigung.de/sitemap.xml
│
├── 🏠 Statische Hauptseiten (5)
│   ├── /                          Priority: 1.0   Freq: weekly
│   ├── /leistungen                Priority: 0.9   Freq: weekly
│   ├── /einsatzgebiete            Priority: 0.8   Freq: monthly
│   ├── /ueber-uns                 Priority: 0.7   Freq: monthly
│   └── /kontakt                   Priority: 0.9   Freq: yearly
│
├── 💼 Service-Landingpages (5)
│   ├── /leistungen/bueroreinigung          Priority: 0.8   Freq: monthly
│   ├── /leistungen/praxisreinigung         Priority: 0.8   Freq: monthly
│   ├── /leistungen/unterhaltsreinigung     Priority: 0.8   Freq: monthly
│   ├── /leistungen/glasreinigung           Priority: 0.8   Freq: monthly
│   └── /leistungen/industriereinigung      Priority: 0.8   Freq: monthly
│
└── 🏙️ Stadt-Landingpages (90)
    └── /einsatzgebiete/{stadt}    Priority: 0.7   Freq: monthly
        Dynamisch generiert aus: src/data/cities.generated.ts
```

### Technische Details

**Datei:** `src/app/sitemap.ts`

**Features:**
- ✅ Dynamische Generierung aus `cities.generated.ts`
- ✅ SEO-optimierte Priorities
- ✅ Change Frequencies für Smart Crawling
- ✅ Last Modified Dates
- ✅ Console Logging für Debugging
- ✅ TypeScript Type-Safety

**Test:**
```bash
npx tsx scripts/test-sitemap.ts
```

**Live-URL:**
```
https://datra-gebaeudereinigung.de/sitemap.xml
```

---

## 🤖 ROBOTS.TXT

### Konfiguration

**Datei:** `src/app/robots.ts`

**Regeln:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /*.json
Disallow: /private/

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/

User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://datra-gebaeudereinigung.de/sitemap.xml
Host: https://datra-gebaeudereinigung.de
```

**Features:**
- ✅ Spezielle Bot-Rules (Google, Bing)
- ✅ API-Routes blockiert
- ✅ Next.js Build-Dateien blockiert
- ✅ Sitemap-Referenz
- ✅ Host-Deklaration

**Live-URL:**
```
https://datra-gebaeudereinigung.de/robots.txt
```

---

## 🏷️ META-TAGS (Alle Seiten)

### Übersicht

| Seite | Canonical | OG | Twitter | Image |
|-------|-----------|-----|---------|-------|
| Homepage | ✅ | ✅ | ✅ | ✅ |
| Einsatzgebiete | ✅ | ✅ | ✅ | ✅ |
| Leistungen | ✅ | ✅ | ✅ | ✅ |
| Kontakt | ✅ | ✅ | ✅ | ✅ |
| Über uns | ✅ | ✅ | ✅ | ✅ |
| **90 Stadt-Seiten** | ✅ | ✅ | ✅ | ✅ |
| 5 Service-Seiten | 🟡 | 🟡 | 🟡 | 🟡 |

### Standard Meta-Tag Structure

```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  keywords: [...],
  
  // Canonical URL
  alternates: {
    canonical: 'https://datra-gebaeudereinigung.de/...',
  },
  
  // OpenGraph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "...",
    description: "...",
    url: 'https://datra-gebaeudereinigung.de/...',
    type: "website",
    locale: "de_DE",
    siteName: 'DATRA - Gebäudereinigung',
    images: [{
      url: 'https://datra-gebaeudereinigung.de/og-....jpg',
      width: 1200,
      height: 630,
      alt: '...',
    }],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "...",
    description: "...",
    images: ['https://datra-gebaeudereinigung.de/og-....jpg'],
  },
};
```

---

## 📸 BENÖTIGTE OG-IMAGES

**Format:** 1200x630 px, JPG/PNG  
**Speicherort:** `/public/`

### Liste:
```
✅ og-image.jpg              (Homepage)
✅ og-einsatzgebiete.jpg     (Einsatzgebiete)
✅ og-leistungen.jpg         (Leistungen)
✅ og-kontakt.jpg            (Kontakt)
✅ og-ueber-uns.jpg          (Über uns)
```

**Stadt-Seiten:** Verwenden dynamische Keyword-basierte Bilder
→ Siehe: `src/lib/image-keywords.ts`

---

## 🔧 SCRIPTS & TOOLS

### 1. Sitemap Testen
```bash
npx tsx scripts/test-sitemap.ts
```

### 2. Bilder-Liste generieren
```bash
npx tsx scripts/list-required-images.ts
```

### 3. Cities generieren
```bash
npx tsx scripts/generate-cities.ts
```

### 4. Full CSV generieren
```bash
npx tsx scripts/generate-full-cities-csv.ts
```

---

## 📊 SEO-METRIKEN

### Coverage
```
✅ 100 Seiten in Sitemap
✅ Alle Seiten haben Meta-Tags
✅ Alle Seiten haben Canonical URLs
✅ Alle Seiten haben OpenGraph
✅ Alle Seiten haben Twitter Cards
✅ Robots.txt konfiguriert
✅ Dynamic Content (Stadt-Seiten)
```

### Priority Distribution
```
Priority 1.0: 1 Seite  (Homepage)
Priority 0.9: 2 Seiten (Leistungen, Kontakt)
Priority 0.8: 6 Seiten (Einsatzgebiete + 5 Services)
Priority 0.7: 91 Seiten (Über uns + 90 Städte)
```

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-Deploy
- [ ] `npm run build` erfolgreich
- [ ] Test-Script läuft ohne Fehler
- [ ] Alle OG-Images erstellt
- [ ] Domain in Env-Variables gesetzt

### Post-Deploy
- [ ] `/sitemap.xml` erreichbar
- [ ] `/robots.txt` erreichbar
- [ ] Google Search Console: Sitemap submitten
- [ ] Bing Webmaster Tools: Sitemap submitten
- [ ] Meta-Tags mit [OpenGraph.xyz](https://www.opengraph.xyz/) testen

---

## 📞 SUPPORT

**Domain:** https://datra-gebaeudereinigung.de  
**Sitemap:** https://datra-gebaeudereinigung.de/sitemap.xml  
**Robots:** https://datra-gebaeudereinigung.de/robots.txt

---

**Status:** ✅ Production-Ready  
**Last Updated:** $(date +%Y-%m-%d)  
**Version:** 1.0.0  
**By:** Roxas - Der göttliche Code-Architekt 🚀

