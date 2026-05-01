# Excel-Formeln für automatisches Befüllen (90 Städte)

## 🚀 Workflow

1. **Öffne beide CSVs:**
   - `nrw-cities-90-base.csv` (Basis-Daten)
   - `cities-template.csv` (Struktur-Vorlage)

2. **Kopiere Header** von `cities-template.csv` (Zeile 1)

3. **Füge Formeln ein** (siehe unten)

4. **Auto-Fill** bis Zeile 91 (90 Städte)

5. **Kopiere alles** → **Einfügen als Werte**

6. **Speichern als** `cities.csv`

---

## 📝 Excel-Formeln (Spalte für Spalte)

### Spalte A: slug
```excel
='nrw-cities-90-base'!A2
```

### Spalte B: name
```excel
='nrw-cities-90-base'!B2
```

### Spalte C: lat
```excel
='nrw-cities-90-base'!C2
```

### Spalte D: lng
```excel
='nrw-cities-90-base'!D2
```

### Spalte E: postalCode
```excel
='nrw-cities-90-base'!E2
```

### Spalte F: street
```excel
='nrw-cities-90-base'!F2
```

### Spalte G: district
```excel
='nrw-cities-90-base'!G2
```

### Spalte H: h1
```excel
="Professionelle Gebäudereinigung in " & B2
```

### Spalte I: title
```excel
="Gebäudereinigung " & B2 & " | DATRA - Gebäudereinigung - Ihr Reinigungsservice"
```

### Spalte J: metaDescription
```excel
="Professionelle Gebäudereinigung in " & B2 & " ✓ Über 15 Jahre Erfahrung ✓ ISO-zertifiziert ✓ 24/7 Service ✓ Kostenlose Besichtigung. Jetzt anfragen!"
```

### Spalte K: heroTitle
```excel
="Ihre Gebäudereinigung in " & B2
```

### Spalte L: heroSubtitle
```excel
="Professioneller Reinigungsservice für Büros, Praxen und Industrieanlagen in " & B2
```

### Spalten M-Q: serviceArea1 bis serviceArea5
**Hier musst du manuell Stadtteile recherchieren (Wikipedia)**

Beispiele:
- Köln: `Innenstadt`, `Lindenthal`, `Ehrenfeld`, `Deutz`, `Mülheim`
- Düsseldorf: `Stadtmitte`, `Pempelfort`, `Oberkassel`, `Bilk`, `Unterbilk`

**Schnell-Tipp:** Nutze die 3-5 größten/bekanntesten Stadtteile

### Spalten R-T: stadtteil1 bis stadtteil3
**3 Featured-Stadtteile für das Grid (können von serviceArea abweichen)**

Beispiele:
- Köln: `Sülz`, `Nippes`, `Chorweiler`
- Düsseldorf: `Flingern`, `Derendorf`, `Golzheim`

### Spalte U: keyword1
```excel
="Gebäudereinigung " & B2
```

### Spalte V: keyword2
```excel
="Büroreinigung " & B2
```

### Spalte W: keyword3
```excel
="Reinigungsfirma " & B2
```

### Spalte X: keyword4
```excel
="Reinigungsservice " & B2
```

### Spalte Y: keyword5
```excel
="Industriereinigung " & B2
```

### Spalte Z: imageKeyword
```excel
="Gebäudereinigung " & B2
```

### Spalte AA: imageAlt
```excel
="DATRA - Gebäudereinigung Gebäudereinigung in " & B2 & " - Professioneller Reinigungsservice"
```

### Spalte AB: aboutText
```excel
="DATRA - Gebäudereinigung ist Ihr zuverlässiger Partner für professionelle Gebäudereinigung in " & B2 & ". Mit über 15 Jahren Erfahrung bieten wir maßgeschneiderte Reinigungslösungen für Unternehmen aller Größen. Unsere zertifizierten Reinigungskräfte sorgen für Sauberkeit und Hygiene in Ihren Räumlichkeiten."
```

### Spalte AC: ctaText
```excel
="Jetzt kostenloses Angebot für " & B2 & " anfragen"
```

### Spalte AD: schemaBusinessName
```excel
="DATRA - Gebäudereinigung Gebäudereinigung " & B2
```

---

## ⚡ Schnell-Workflow (5 Minuten)

### Schritt 1: Neue Excel-Datei erstellen

```
1. Öffne Excel
2. Importiere nrw-cities-90-base.csv als Sheet 1
3. Erstelle neues Sheet 2
4. Kopiere Header von cities-template.csv in Zeile 1
```

### Schritt 2: Formeln einfügen (Zeile 2)

```
Spalte A-G: Verweise auf Sheet 1
Spalte H-AD: Formeln mit Stadt-Name (B2)
```

### Schritt 3: Auto-Fill

```
1. Markiere Zeile 2 (A2:AD2)
2. Ziehe das kleine Quadrat rechts unten bis Zeile 91
3. Excel füllt automatisch alle 90 Städte!
```

### Schritt 4: Stadtteile ergänzen (Spalten M-T)

**Option A: Schnell (Generic)**
```
Für alle: Stadtmitte, Nordstadt, Südstadt, Oststadt, Weststadt
```

**Option B: Recherchiert (Besser für SEO)**
```
Wikipedia → [Stadt] → Stadtbezirke
Top 5 Bezirke kopieren
```

### Schritt 5: Als Werte einfügen

```
1. Markiere alles (A1:AD91)
2. Strg+C (Kopieren)
3. Rechtsklick → "Einfügen" → "Werte"
4. Speichern als: data/cities.csv (CSV UTF-8)
```

---

## 🎯 Stadtteile-Recherche-Tipps

### Schnelle Wikipedia-Methode:

```
1. Gehe zu: https://de.wikipedia.org/wiki/[Stadt]
2. Suche nach "Stadtbezirke" oder "Stadtteile"
3. Kopiere die 5-8 wichtigsten
```

### Google-Maps-Methode:

```
1. Öffne Google Maps
2. Suche nach Stadt
3. Zoome raus → Stadtteil-Namen werden angezeigt
4. Notiere die größten/zentralsten
```

### Fallback (wenn keine Zeit):

```
Nutze generische Namen:
- serviceArea1: Stadtmitte
- serviceArea2: Innenstadt
- serviceArea3: Zentrum
- serviceArea4: Nord
- serviceArea5: Süd

- stadtteil1: Altstadt
- stadtteil2: Neustadt
- stadtteil3: Bahnhofsviertel
```

---

## 📊 Fertig? Dann:

```bash
# 1. Generiere TypeScript
npm run generate:cities

# 2. Check Output
# Sollte sagen: "✅ 90 Städte wurden exportiert"

# 3. Development Server
npm run dev

# 4. Teste eine Stadt
# http://localhost:3001/einsatzgebiete/koln
# http://localhost:3001/einsatzgebiete/dusseldorf

# 5. Build für Production
npm run build
```

---

## 💡 Pro-Tipps

### 1. Batch-Bearbeitung mit ChatGPT/Claude

```
Prompt: "Gib mir die 5 wichtigsten Stadtteile von [Stadt] in Komma-separierter Liste"

Dann in Excel einfügen und mit "Text in Spalten" aufteilen
```

### 2. Deduplizierung

Manche Städte haben weniger als 5 Stadtteile:
```
Dann wiederhole einfach oder nutze Ortsteile
```

### 3. SEO-Optimierung

Die Stadtteile in serviceArea1-5 werden:
- ✅ In der About-Section angezeigt
- ✅ Von Google indexiert
- ✅ Für Local SEO genutzt

Die stadtteil1-3 werden:
- ✅ Im Featured-Grid prominent angezeigt
- ✅ Mit eigenem Design hervorgehoben
- ✅ Für Conversion optimiert

---

## 🚀 Ergebnis

Nach dem Workflow hast du:

✅ 90 Stadt-Landingpages  
✅ Jede mit eindeutigen SEO-Texten  
✅ Local Business Schema pro Stadt  
✅ Geo-Koordinaten für Google Maps  
✅ Echte PLZ für Vertrauenswürdigkeit  
✅ Stadt-spezifische Stadtteile  
✅ Featured Stadtteil-Grid  
✅ 100/100 PageSpeed pro Seite  

**Total: ~2700 Zeilen automatisch generierter SEO-Content!** 🎉

