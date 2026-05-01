# Stadt-Landingpages: Schnellstart-Guide

## 🚀 In 3 Schritten zur neuen Stadt

### 1️⃣ CSV bearbeiten

```bash
# Option A: Excel öffnen
open data/cities.csv

# Option B: VS Code
code data/cities.csv
```

### 2️⃣ Daten generieren

```bash
npm run generate:cities
```

### 3️⃣ Testen

```bash
npm run dev
# Öffne: http://localhost:3000/einsatzgebiete/duesseldorf
```

## ✅ Das System ist fertig, wenn...

- [ ] `npm run generate:cities` ohne Fehler läuft
- [ ] Route `/einsatzgebiete/[stadt]` funktioniert
- [ ] Meta-Tags korrekt angezeigt werden
- [ ] Schema.org validiert (Google Rich Results Test)

## 📊 Was wurde erstellt?

```
✅ /src/types/city.ts                    → TypeScript-Interface
✅ /data/cities-template.csv             → Excel-Template
✅ /data/cities.csv                      → Production CSV
✅ /scripts/generate-cities.ts           → Import-Script
✅ /src/data/cities.generated.ts         → Generierte Daten
✅ /src/app/einsatzgebiete/[stadt]/page.tsx → Dynamic Route
✅ Meta-Tags + Local Business Schema     → SEO-Optimierung
✅ npm run generate:cities               → NPM-Script
```

## 🎯 Features

- ✅ **Type-Safe**: Vollständig typisiert mit TypeScript
- ✅ **SEO-Optimiert**: Meta-Tags, Schema.org, Canonical URLs
- ✅ **Performance**: Static Site Generation (SSG)
- ✅ **Excel-freundlich**: Direkt in Excel/Google Sheets bearbeitbar
- ✅ **Wartbar**: CSV als Single Source of Truth

## 📝 Beispiel-Daten (Düsseldorf)

Die Seite ist verfügbar unter:
- Development: `http://localhost:3000/einsatzgebiete/duesseldorf`
- Production: `https://cleanpro-nrw.de/einsatzgebiete/duesseldorf`

## 🔧 Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `npm run generate:cities` | CSV → TypeScript konvertieren |
| `npm run dev` | Development Server starten |
| `npm run build` | Production Build (generiert alle Städte) |

## 📚 Dokumentation

- **CSV-Struktur**: siehe `data/README.md`
- **Excel-Anleitung**: siehe `data/EXCEL-ANLEITUNG.md`
- **TypeScript-Interface**: siehe `src/types/city.ts`

## 🌐 Schema.org Validierung

Teste die Structured Data:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. URL eingeben: `https://cleanpro-nrw.de/einsatzgebiete/duesseldorf`

## 🎨 Anpassungen

### Hero-Section ändern

Bearbeite: `src/app/einsatzgebiete/[stadt]/page.tsx`

### Telefonnummer ändern

Suche & Ersetze: `+4921112345678` und `0211 123 456 78`

### Domain ändern

Suche & Ersetze: `cleanpro-nrw.de`

### Farben anpassen

CSS-Klassen: `bg-blue-600`, `text-blue-600`, etc.

## 🔍 Troubleshooting

### "CSV-Datei nicht gefunden"

```bash
cp data/cities-template.csv data/cities.csv
```

### "Stadt nicht gefunden" (404)

```bash
npm run generate:cities
# Development Server neu starten
```

### Linter-Fehler

```bash
npm run lint
```

### Build-Fehler

```bash
# Cache löschen
rm -rf .next
npm run build
```

## 🎯 Nächste Schritte

1. ✅ **Mehr Städte hinzufügen**: Bearbeite `data/cities.csv`
2. ✅ **Bilder hinzufügen**: Lege Bilder in `/public/images/` ab
3. ✅ **Content erweitern**: Passe `page.tsx` an
4. ✅ **SEO optimieren**: Füge mehr Keywords hinzu

## 💡 Best Practices

### SEO

- **Title**: 50-60 Zeichen, Stadt-Name am Anfang
- **Description**: 150-160 Zeichen, USPs betonen
- **Keywords**: 5-7 relevante Keywords pro Stadt
- **H1**: Einzigartig pro Stadt, Fokus-Keyword enthalten

### Performance

- **Bilder**: WebP-Format, optimiert mit Next.js Image
- **SSG**: Alle Städte pre-rendern (schnellste Ladezeit)
- **Caching**: Nutze CDN für statische Assets

### Wartung

- **CSV**: Version Control (Git) für Änderungshistorie
- **Backup**: Regelmäßige Backups von `cities.csv`
- **Testing**: Teste neue Städte vor dem Deployment

## 🚀 Deployment

### Vercel (empfohlen)

```bash
# Build lokal testen
npm run build

# Deploy
vercel --prod
```

### Netlify

```bash
# netlify.toml erstellen
[build]
  command = "npm run build"
  publish = ".next"
```

### Eigener Server

```bash
npm run build
npm start
```

## 📞 Support

Bei Problemen:
1. Prüfe `data/README.md` für technische Details
2. Prüfe `data/EXCEL-ANLEITUNG.md` für CSV-Hilfe
3. Checke Linter-Fehler: `npm run lint`

