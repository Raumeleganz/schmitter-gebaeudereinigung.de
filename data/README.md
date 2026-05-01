# Stadt-Landingpages Generator

## Übersicht

Dieses System generiert automatisch stadt-spezifische Landingpages aus CSV-Daten mit vollständiger SEO-Optimierung und Local Business Schema.

## Struktur

```
data/
├── cities-template.csv      # Excel-kompatibles Template
├── cities.csv              # Production CSV-Daten
└── README.md              # Diese Datei

src/
├── types/
│   └── city.ts            # TypeScript-Interface
├── data/
│   └── cities.generated.ts # Auto-generierte Stadt-Daten
└── app/
    └── einsatzgebiete/
        └── [stadt]/
            └── page.tsx   # Dynamic Route

scripts/
└── generate-cities.ts     # CSV-Import & Generator
```

## CSV-Spalten (30 Felder)

| Spalte | Typ | Beschreibung | Beispiel |
|--------|-----|--------------|----------|
| `slug` | string | URL-freundlicher Slug | `duesseldorf` |
| `name` | string | Stadt-Name | `Düsseldorf` |
| `lat` | number | Breitengrad | `51.2277` |
| `lng` | number | Längengrad | `6.7735` |
| `postalCode` | string | Postleitzahl | `40210` |
| `street` | string | Straße für Schema | `Königsallee 1` |
| `district` | string | Stadtteil | `Stadtmitte` |
| `h1` | string | Haupt-Überschrift | `Professionelle Gebäudereinigung in...` |
| `title` | string | Meta-Title (60 Zeichen) | `Gebäudereinigung Düsseldorf | DATRA - Gebäudereinigung` |
| `metaDescription` | string | Meta-Description (160 Zeichen) | `Professionelle Gebäudereinigung in...` |
| `heroTitle` | string | Hero-Titel | `Ihre Gebäudereinigung in Düsseldorf` |
| `heroSubtitle` | string | Hero-Untertitel | `Professioneller Reinigungsservice...` |
| `serviceArea1-5` | string | Service-Gebiete (5x) | `Stadtmitte, Pempelfort, ...` |
| `stadtteil1-3` | string | Stadtteile für Grid (3x) | `Flingern, Derendorf, ...` |
| `keyword1-5` | string | SEO-Keywords (5x) | `Gebäudereinigung Düsseldorf, ...` |
| `imageKeyword` | string | Bild-Suchbegriff | `Gebäudereinigung Düsseldorf` |
| `imageAlt` | string | Bild-Alt-Text | `DATRA - Gebäudereinigung Gebäudereinigung in...` |
| `aboutText` | string | Über-uns-Text | `DATRA - Gebäudereinigung ist Ihr zuverlässiger...` |
| `ctaText` | string | Call-to-Action Text | `Jetzt kostenloses Angebot...` |
| `schemaBusinessName` | string | Schema.org Business Name | `DATRA - Gebäudereinigung Gebäudereinigung Düsseldorf` |

## Workflow

### 1. CSV bearbeiten

Öffne `data/cities.csv` in Excel/Google Sheets:

```bash
open data/cities.csv
```

Oder kopiere das Template:

```bash
cp data/cities-template.csv data/cities.csv
```

### 2. Stadt-Daten generieren

```bash
npm run generate:cities
```

Das Script:
- ✅ Liest `data/cities.csv`
- ✅ Validiert alle Daten
- ✅ Generiert `src/data/cities.generated.ts`
- ✅ Erstellt Type-Safe Export

### 3. Development Server

```bash
npm run dev
```

Navigiere zu: `http://localhost:3000/einsatzgebiete/duesseldorf`

### 4. Build & Deploy

```bash
npm run build
```

Next.js generiert automatisch statische Seiten für alle Städte.

## Features

### ✅ SEO-Optimierung

- **Meta-Tags**: Title, Description, Keywords
- **Open Graph**: Für Social Media
- **Canonical URLs**: Duplicate Content vermeiden
- **Structured Data**: Local Business + Breadcrumb Schema

### ✅ Type-Safety

- TypeScript-Interface für Stadt-Daten
- Runtime-Validierung
- Auto-Complete in VS Code

### ✅ Performance

- Static Site Generation (SSG)
- Automatische Bildoptimierung
- Code-Splitting per Route

### ✅ Wartbarkeit

- CSV als Single Source of Truth
- Ein Befehl für alle Updates
- Keine manuelle Code-Bearbeitung

## Beispiel: Neue Stadt hinzufügen

1. Öffne `data/cities.csv`
2. Füge neue Zeile hinzu:

```csv
koeln,Köln,50.9375,6.9603,50667,Domkloster 4,Innenstadt,...
```

3. Generiere:

```bash
npm run generate:cities
```

4. Fertig! Route verfügbar unter `/einsatzgebiete/koeln`

## CSV-Tipps

### Kommas in Texten

Verwende Anführungszeichen:

```csv
"Text mit, Komma",Normaler Text
```

### Zeilenumbrüche vermeiden

Halte alle Felder einzeilig.

### Excel-Export

In Excel: **Datei → Speichern unter → CSV UTF-8**

### Encoding

Verwende immer **UTF-8** für Umlaute (ä, ö, ü, ß).

## Schema.org Validierung

Teste das Schema:

1. Öffne: https://search.google.com/test/rich-results
2. URL eingeben: `https://cleanpro-nrw.de/einsatzgebiete/duesseldorf`
3. Validieren

## Troubleshooting

### "CSV-Datei nicht gefunden"

```bash
cp data/cities-template.csv data/cities.csv
```

### "Spaltenanzahl stimmt nicht"

- Prüfe, ob alle 30 Spalten vorhanden sind
- Checke auf ungewollte Kommas in Texten

### "Stadt nicht gefunden" (404)

- Script ausführen: `npm run generate:cities`
- Development Server neu starten

### Linter-Fehler

```bash
npm run lint
```

## Support

Bei Fragen: siehe `src/types/city.ts` für Interface-Definition

