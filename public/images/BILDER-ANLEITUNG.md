# Bilder für Stadt-Landingpages

## 📸 Bild-System

Die Stadt-Landingpages verwenden WebP-Bilder mit automatischem Fallback-System.

---

## 🎯 Dateinamen-Format

```
[stadtslug]-reinigung.webp
```

### Beispiele:
- `erkrath-reinigung.webp` für Erkrath
- `koln-reinigung.webp` für Köln
- `dusseldorf-reinigung.webp` für Düsseldorf
- `munster-reinigung.webp` für Münster (ü → u)

**Wichtig:** Slugs verwenden keine Umlaute!

---

## 📁 Wo die Bilder speichern?

```
/public/images/
```

Beispiel-Struktur:
```
public/
└── images/
    ├── erkrath-reinigung.webp
    ├── koln-reinigung.webp
    ├── dusseldorf-reinigung.webp
    └── ... (90 Städte)
```

---

## 🖼️ Bild-Spezifikationen

### **Format:**
- ✅ WebP (empfohlen für Performance)
- ✅ JPG/JPEG (funktioniert auch)
- ✅ PNG (funktioniert auch)

### **Größe:**
- **Empfohlen:** 800x800 px (quadratisch)
- **Mindestens:** 600x600 px
- **Maximum:** 1200x1200 px

### **Dateigröße:**
- **Optimal:** < 100 KB
- **Maximum:** < 300 KB

### **Seitenverhältnis:**
- 1:1 (quadratisch) für beste Darstellung

---

## 🔄 Fallback-System

Wenn ein Bild nicht vorhanden ist, zeigt die Seite automatisch einen Placeholder mit:
- 🏢 Gebäude-Icon
- 📝 ALT-Text der Stadt
- 📄 Dateiname-Info

**Beispiel:** Wenn `erkrath-reinigung.webp` fehlt:
```
[Placeholder mit Icon]
DATRA Gebäudereinigung in Erkrath – Professioneller Reinigungsservice
Bild: erkrath-reinigung.webp
```

---

## ✏️ ALT-Texte anpassen

Die ALT-Texte werden automatisch generiert in:

**`scripts/generate-full-cities-csv.ts`** (Zeile 281):
```typescript
imageAlt: `DATRA Gebäudereinigung in ${baseCity.name} – Professioneller Reinigungsservice`,
```

Nach Änderungen:
```bash
npx tsx scripts/generate-full-cities-csv.ts
npm run generate:cities
```

---

## 🎨 Empfohlene Bild-Motive

### **Gut geeignet:**
- ✅ Reinigungskräfte bei der Arbeit
- ✅ Saubere Büroräume
- ✅ Reinigungsausrüstung (modern)
- ✅ Professionelle Gebäudereinigung
- ✅ Team-Fotos

### **Vermeiden:**
- ❌ Stockfotos mit Wasserzeichen
- ❌ Unscharfe/pixelige Bilder
- ❌ Nicht-reinigungsbezogene Motive

---

## 📊 Aktueller Status

### **Bilder vorhanden:**
Prüfe mit:
```bash
ls -lh public/images/*-reinigung.webp | wc -l
```

### **Fehlende Bilder finden:**
```bash
# Zeigt Städte mit fehlendem Bild
for city in koln dusseldorf dortmund essen; do
  [ ! -f "public/images/${city}-reinigung.webp" ] && echo "❌ ${city}"
done
```

---

## 🚀 Massenverarbeitung (90 Städte)

### **Option 1: KI-generierte Bilder**
Verwende DALL-E, Midjourney oder Stable Diffusion:
```
Prompt: "Professional office cleaning service, bright modern office,
cleaning staff in uniform, professional equipment, high quality, realistic"
```

### **Option 2: Lizenzfreie Stockfotos**
Quellen:
- Unsplash.com (kostenlos)
- Pexels.com (kostenlos)
- Pixabay.com (kostenlos)

Suchbegriffe:
- "office cleaning"
- "commercial cleaning"
- "janitorial service"
- "professional cleaner"

### **Option 3: Eigene Fotos**
- Fotografiere reale Reinigungseinsätze
- Achte auf DSGVO bei Personen
- Professionelle Beleuchtung
- High-Resolution (min. 1200x1200)

---

## 🔧 Bilder optimieren

### **WebP konvertieren:**
```bash
# Mit cwebp (ImageMagick)
for img in *.jpg; do
  cwebp -q 80 "$img" -o "${img%.jpg}.webp"
done
```

### **Größe ändern:**
```bash
# Mit ImageMagick
mogrify -resize 800x800^ -gravity center -extent 800x800 *.webp
```

### **Komprimierung:**
```bash
# Mit cwebp
cwebp -q 80 input.jpg -o output.webp
```

---

## ✅ Checkliste pro Stadt

- [ ] Bild erstellt/gefunden
- [ ] Format: WebP (oder JPG/PNG)
- [ ] Größe: 800x800 px
- [ ] Dateigröße: < 100 KB
- [ ] Dateiname: `[stadtslug]-reinigung.webp`
- [ ] Gespeichert in `/public/images/`
- [ ] ALT-Text passt
- [ ] Bild auf Seite getestet

---

## 🎯 Schnellstart

1. **Bild hinzufügen:**
   ```bash
   cp mein-bild.jpg public/images/erkrath-reinigung.webp
   ```

2. **Testen:**
   ```
   http://localhost:3000/einsatzgebiete/erkrath
   ```

3. **Sollte das Bild zeigen oder Placeholder** ✅

**Fertig!** 🚀

