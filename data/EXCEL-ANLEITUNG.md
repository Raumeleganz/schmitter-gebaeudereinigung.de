# Excel-Template für Stadt-Landingpages

## Schnellstart

1. **Öffne `cities.csv` in Excel/Google Sheets**
2. **Bearbeite die Daten direkt in der Tabelle**
3. **Speichere als CSV UTF-8**
4. **Führe aus**: `npm run generate:cities`

## Excel-Setup

### Microsoft Excel

1. Öffne `cities.csv`
2. Excel erkennt automatisch CSV-Format
3. Bearbeite die Zellen
4. **Speichern unter → CSV UTF-8 (Komma-getrennt)**

### Google Sheets

1. **Datei → Importieren** → `cities.csv` hochladen
2. Trennzeichen: Komma
3. Bearbeite die Daten
4. **Datei → Herunterladen → Kommagetrennte Werte (.csv)**
5. Speichere als `cities.csv` im `data/` Ordner

### LibreOffice Calc

1. Öffne `cities.csv`
2. Importdialog: UTF-8, Feldtrenner: Komma
3. Bearbeite die Daten
4. **Speichern unter → Text CSV (.csv)**
5. Zeichensatz: Unicode (UTF-8)
6. Feldtrenner: `,` (Komma)

## Template-Struktur

Die erste Zeile enthält die **Spalten-Header** (NICHT löschen):

```
slug,name,lat,lng,postalCode,street,district,h1,title,...
```

Ab Zeile 2 beginnen die **Stadt-Daten**.

## Spalten-Guide

### Basis-Daten

| Spalte | Format | Beispiel | Hinweis |
|--------|--------|----------|---------|
| **slug** | lowercase-dash | `duesseldorf` | Keine Umlaute, keine Leerzeichen |
| **name** | Text | `Düsseldorf` | Offizieller Stadt-Name |
| **lat** | Dezimal | `51.2277` | Breitengrad (Google Maps) |
| **lng** | Dezimal | `6.7735` | Längengrad (Google Maps) |
| **postalCode** | Text | `40210` | Haupt-PLZ der Stadt |
| **street** | Text | `Königsallee 1` | Zentrale Adresse für Schema |
| **district** | Text | `Stadtmitte` | Hauptstadtteil |

### SEO & Meta

| Spalte | Länge | Beispiel | Hinweis |
|--------|-------|----------|---------|
| **h1** | ~60 | `Professionelle Gebäudereinigung in Düsseldorf` | Haupt-Überschrift |
| **title** | max 60 | `Gebäudereinigung Düsseldorf | DATRA - Gebäudereinigung` | Browser-Tab-Titel |
| **metaDescription** | max 160 | `Professionelle Gebäudereinigung in Düsseldorf ✓ Über 15 Jahre...` | Google-Snippet |

### Hero-Section

| Spalte | Beispiel |
|--------|----------|
| **heroTitle** | `Ihre Gebäudereinigung in Düsseldorf` |
| **heroSubtitle** | `Professioneller Reinigungsservice für Büros, Praxen und...` |

### Service-Gebiete (5 Stadtteile)

| Spalte | Beispiel |
|--------|----------|
| **serviceArea1** | `Stadtmitte` |
| **serviceArea2** | `Pempelfort` |
| **serviceArea3** | `Oberkassel` |
| **serviceArea4** | `Bilk` |
| **serviceArea5** | `Unterbilk` |

### Stadtteile für Grid (3 Featured-Stadtteile)

| Spalte | Beispiel | Verwendung |
|--------|----------|------------|
| **stadtteil1** | `Flingern` | Wird im Stadtteil-Grid prominent angezeigt |
| **stadtteil2** | `Derendorf` | Wird im Stadtteil-Grid prominent angezeigt |
| **stadtteil3** | `Golzheim` | Wird im Stadtteil-Grid prominent angezeigt |

### Keywords (5 SEO-Keywords)

| Spalte | Beispiel |
|--------|----------|
| **keyword1** | `Gebäudereinigung Düsseldorf` |
| **keyword2** | `Büroreinigung Düsseldorf` |
| **keyword3** | `Reinigungsfirma Düsseldorf` |
| **keyword4** | `Reinigungsservice Düsseldorf` |
| **keyword5** | `Industriereinigung Düsseldorf` |

### Bilder & Content

| Spalte | Beispiel | Hinweis |
|--------|----------|---------|
| **imageKeyword** | `Gebäudereinigung Düsseldorf` | Für Bild-Suche |
| **imageAlt** | `DATRA - Gebäudereinigung Gebäudereinigung in Düsseldorf...` | SEO Alt-Text |
| **aboutText** | `DATRA - Gebäudereinigung ist Ihr zuverlässiger Partner...` | Max 300 Zeichen |
| **ctaText** | `Jetzt kostenloses Angebot für Düsseldorf anfragen` | Call-to-Action |
| **schemaBusinessName** | `DATRA - Gebäudereinigung Gebäudereinigung Düsseldorf` | Schema.org Name |

## Tipps & Tricks

### ✅ Geo-Koordinaten finden

1. Öffne [Google Maps](https://maps.google.com)
2. Suche nach Stadt
3. Rechtsklick auf Stadt-Zentrum
4. Klicke auf Koordinaten (z.B. `51.2277, 6.7735`)
5. Kopiere in Excel: `lat = 51.2277`, `lng = 6.7735`

### ✅ Slug generieren

Aus `Düsseldorf` wird `duesseldorf`:
- Kleinbuchstaben
- ä → ae, ö → oe, ü → ue, ß → ss
- Leerzeichen → Bindestrich
- Keine Sonderzeichen

Beispiele:
- `Köln` → `koeln`
- `München` → `muenchen`
- `Frankfurt am Main` → `frankfurt-am-main`

### ✅ SEO-Keywords recherchieren

Tools:
- [Google Keyword Planner](https://ads.google.com/keywordplanner)
- [Google Trends](https://trends.google.com)
- [Answer The Public](https://answerthepublic.com)

Fokus-Keywords:
1. `Gebäudereinigung [Stadt]`
2. `Büroreinigung [Stadt]`
3. `Reinigungsfirma [Stadt]`
4. `Reinigungsservice [Stadt]`
5. Spezialisierung (z.B. `Industriereinigung [Stadt]`)

### ✅ Meta-Description optimieren

Checkliste:
- [ ] Max 160 Zeichen
- [ ] Stadt-Name enthalten
- [ ] USPs einbauen (✓ ISO-zertifiziert, ✓ 15 Jahre Erfahrung)
- [ ] Call-to-Action (z.B. "Jetzt anfragen!")
- [ ] Emojis sparsam verwenden (✓, 🏢, 📞)

### ⚠️ Häufige Fehler

| Problem | Lösung |
|---------|--------|
| Komma in Text | Text in "Anführungszeichen" setzen |
| Umlaute falsch | CSV als UTF-8 speichern |
| Koordinaten falsch | Dezimalpunkt verwenden (nicht Komma) |
| Spalten versetzt | Keine Kommas in Texten ohne Quotes |
| Leere Felder | Alle Felder ausfüllen |

## Bulk-Erstellung: Mehrere Städte

### Vorlage kopieren

1. Kopiere die Düsseldorf-Zeile
2. Füge als neue Zeile ein
3. Ersetze:
   - Stadt-Name überall
   - Koordinaten
   - Stadtteile
   - PLZ & Adresse

### Massen-Bearbeitung

Excel-Features nutzen:
- **Suchen & Ersetzen** (Ctrl+H): `Düsseldorf` → `Köln`
- **Formel**: `=SUBSTITUTE(A2, "Düsseldorf", "Köln")` für Massen-Ersetzung
- **AutoFill**: Stadtteile durchnummerieren

### Qualitätskontrolle

Nach der Bearbeitung prüfen:
```bash
npm run generate:cities
```

Das Script zeigt Warnungen bei fehlenden/falschen Daten.

## Beispiel: Neue Stadt "Köln" hinzufügen

```csv
koeln,Köln,50.9375,6.9603,50667,Domkloster 4,Innenstadt,Professionelle Gebäudereinigung in Köln,Gebäudereinigung Köln | DATRA - Gebäudereinigung,"Professionelle Gebäudereinigung in Köln ✓ Über 15 Jahre Erfahrung ✓ ISO-zertifiziert ✓ 24/7 Service ✓ Kostenlose Besichtigung. Jetzt anfragen!",Ihre Gebäudereinigung in Köln,"Professioneller Reinigungsservice für Büros, Praxen und Industrieanlagen in Köln",Innenstadt,Lindenthal,Ehrenfeld,Deutz,Mülheim,Gebäudereinigung Köln,Büroreinigung Köln,Reinigungsfirma Köln,Reinigungsservice Köln,Industriereinigung Köln,Gebäudereinigung Köln,"DATRA - Gebäudereinigung Gebäudereinigung in Köln - Professioneller Reinigungsservice","DATRA - Gebäudereinigung ist Ihr zuverlässiger Partner für professionelle Gebäudereinigung in Köln. Mit über 15 Jahren Erfahrung bieten wir maßgeschneiderte Reinigungslösungen für Unternehmen aller Größen. Unsere zertifizierten Reinigungskräfte sorgen für Sauberkeit und Hygiene in Ihren Räumlichkeiten.",Jetzt kostenloses Angebot für Köln anfragen,DATRA - Gebäudereinigung Gebäudereinigung Köln
```

Dann:
```bash
npm run generate:cities
npm run dev
```

Route verfügbar: `http://localhost:3000/einsatzgebiete/koeln`

## Support

Bei Fragen siehe: `data/README.md` für technische Details

