# 🖼️ Keyword-basiertes Bild-System für SEO

## 🎯 Was ist das?

Statt generischer Bildnamen wie `erkrath-reinigung.webp` verwendet das System **SEO-optimierte Keywords** im Dateinamen!

### **Beispiele:**
- ❌ **Vorher:** `erkrath-reinigung.webp`
- ✅ **Jetzt:** `praxisreinigung-erkrath.webp`

**Warum?**
- 🚀 **Besseres SEO** - Keywords im Dateinamen
- 📊 **Variety** - 8 verschiedene Keyword-Typen
- 🎯 **Stability** - Jede Stadt = festes Keyword

---

## 🔄 Keyword-Rotation (8 Typen)

Das System rotiert automatisch durch 8 verschiedene Reinigungstypen:

| Keyword | Dateiname-Präfix | Anzahl Städte | % |
|---------|------------------|---------------|---|
| **Büroreinigung** | `bueroreinigung-` | 17 | 18.9% |
| **Gebäudereinigung** | `gebaeudereinigung-` | 13 | 14.4% |
| **Reinigungsservice** | `reinigungsservice-` | 13 | 14.4% |
| **Unterhaltsreinigung** | `unterhaltsreinigung-` | 12 | 13.3% |
| **Grundreinigung** | `grundreinigung-` | 11 | 12.2% |
| **Reinigungsfirma** | `reinigungsfirma-` | 10 | 11.1% |
| **Praxisreinigung** | `praxisreinigung-` | 10 | 11.1% |
| **Industriereinigung** | `industriereinigung-` | 4 | 4.4% |

**= Perfekte Verteilung für maximale SEO-Performance!** 🎯

---

## 📋 Beispiele: Top 20 Städte

| Stadt | Bildname | ALT-Text |
|-------|----------|----------|
| **Köln** | `bueroreinigung-koln.webp` | "DATRA Büroreinigung in Köln – Professioneller Reinigungsservice" |
| **Düsseldorf** | `gebaeudereinigung-dusseldorf.webp` | "DATRA Gebäudereinigung in Düsseldorf – ..." |
| **Dortmund** | `reinigungsfirma-dortmund.webp` | "DATRA Reinigungsfirma in Dortmund – ..." |
| **Essen** | `reinigungsservice-essen.webp` | "DATRA Reinigungsservice in Essen – ..." |
| **Duisburg** | `praxisreinigung-duisburg.webp` | "DATRA Praxisreinigung in Duisburg – ..." |
| **Bochum** | `unterhaltsreinigung-bochum.webp` | "DATRA Unterhaltsreinigung in Bochum – ..." |
| **Wuppertal** | `grundreinigung-wuppertal.webp` | "DATRA Grundreinigung in Wuppertal – ..." |
| **Bielefeld** | `grundreinigung-bielefeld.webp` | "DATRA Grundreinigung in Bielefeld – ..." |
| **Bonn** | `reinigungsfirma-bonn.webp` | "DATRA Reinigungsfirma in Bonn – ..." |
| **Münster** | `unterhaltsreinigung-munster.webp` | "DATRA Unterhaltsreinigung in Münster – ..." |
| **Erkrath** | `praxisreinigung-erkrath.webp` | "DATRA Praxisreinigung in Erkrath – ..." |

---

## 🚀 Wie es funktioniert

### **1. Stabile Hash-Berechnung**
```typescript
// Jeder Stadtslug wird durch Hash-Funktion gejagt
hash("erkrath") % 8 = 6  → Keyword #6 = "praxisreinigung"

// Ergebnis: praxisreinigung-erkrath.webp
```

### **2. Automatische Zuordnung**
- **Köln** → IMMER `bueroreinigung-koln.webp`
- **Erkrath** → IMMER `praxisreinigung-erkrath.webp`
- **Dortmund** → IMMER `reinigungsfirma-dortmund.webp`

**= Stabil über alle Builds hinweg!** 🔒

---

## 📝 Vollständige Bildliste generieren

```bash
# Script ausführen:
npx tsx scripts/list-required-images.ts
```

**Output:**
- ✅ Liste aller 90 Bildnamen
- ✅ Keyword-Statistik
- ✅ CSV-Export (`data/required-images.csv`)
- ✅ Beispiele mit ALT-Texten

---

## 📁 Wo die Bilder speichern?

```
/public/images/
```

**Dateistruktur:**
```
public/
└── images/
    ├── bueroreinigung-koln.webp
    ├── gebaeudereinigung-dusseldorf.webp
    ├── reinigungsfirma-dortmund.webp
    ├── praxisreinigung-erkrath.webp
    └── ... (86 weitere)
```

---

## 🎨 Bild-Spezifikationen

### **Format:**
- ✅ **WebP** (empfohlen)
- ✅ JPG/PNG funktioniert auch

### **Größe:**
- **Optimal:** 800x800 px (quadratisch)
- **Minimum:** 600x600 px
- **Maximum:** 1200x1200 px

### **Dateigröße:**
- **Optimal:** < 100 KB
- **Maximum:** < 300 KB

### **Seitenverhältnis:**
- **1:1** (quadratisch) für beste Darstellung

---

## 🔧 Bilder erstellen/besorgen

### **Option 1: KI-generierte Bilder**

**Prompt-Template:**
```
[Keyword] service in modern office, professional cleaning staff in 
DATRA uniform, bright and clean environment, high quality, realistic, 
commercial photography style
```

**Beispiele:**
- "Büroreinigung service in modern office, professional cleaning..."
- "Praxisreinigung in medical office, professional cleaner..."
- "Industriereinigung in factory hall, industrial cleaning equipment..."

**Tools:**
- DALL-E 3
- Midjourney
- Stable Diffusion

### **Option 2: Lizenzfreie Stockfotos**

**Quellen:**
- Unsplash.com (kostenlos)
- Pexels.com (kostenlos)
- Pixabay.com (kostenlos)

**Suchbegriffe pro Keyword:**
- `bueroreinigung` → "office cleaning"
- `praxisreinigung` → "medical office cleaning"
- `industriereinigung` → "industrial cleaning"
- `gebaeudereinigung` → "building cleaning"
- `unterhaltsreinigung` → "janitorial service"

### **Option 3: Eigene Fotos**
- ✅ Fotografiere reale Reinigungseinsätze
- ✅ Professionelle Beleuchtung
- ⚠️ Achte auf DSGVO bei Personen
- ✅ High-Resolution (min. 1200x1200)

---

## 🔄 Bilder optimieren & konvertieren

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

### **Batch-Umbenennung:**
```bash
# Beispiel: Mehrere Bilder auf einmal umbenennen
# Habe 8 Generic Bilder: cleaning-1.webp bis cleaning-8.webp

# Kann diese per Script auf Keywords mappen
```

---

## ✅ Workflow-Checkliste

### **Phase 1: Vorbereitung**
- [ ] Script ausführen: `npx tsx scripts/list-required-images.ts`
- [ ] CSV öffnen: `data/required-images.csv`
- [ ] Liste in Excel/Sheets öffnen

### **Phase 2: Bilder beschaffen**
- [ ] 90 Bilder erstellen/kaufen/generieren
- [ ] Format: WebP, 800x800 px, < 100 KB
- [ ] 8 verschiedene Typen (siehe Keyword-Liste)

### **Phase 3: Benennen & Upload**
- [ ] Bilder nach Liste umbenennen
- [ ] Nach `/public/images/` hochladen
- [ ] Stichprobe testen

### **Phase 4: Testen**
- [ ] `http://localhost:3000/einsatzgebiete/koln`
- [ ] `http://localhost:3000/einsatzgebiete/erkrath`
- [ ] Prüfe: Bild lädt? ALT-Text korrekt?

---

## 🎯 Schnellstart: Eine Stadt testen

```bash
# 1. Ein Test-Bild erstellen (z.B. für Erkrath):
cp test-bild.jpg public/images/praxisreinigung-erkrath.webp

# 2. Browser öffnen:
# http://localhost:3000/einsatzgebiete/erkrath

# 3. Sollte Bild anzeigen! ✅
```

---

## 🤖 Bulk-Upload Strategie

### **Smart: Wiederverwendung**

Da es 8 Keyword-Typen gibt, kannst du:
1. **8 Master-Bilder** erstellen (eins pro Keyword-Typ)
2. Diese auf die entsprechenden Städte mappen

**Beispiel:**
```bash
# Master-Bilder:
master-bueroreinigung.webp
master-gebaeudereinigung.webp
master-praxisreinigung.webp
# ... 5 weitere

# Script erstellt Kopien mit Stadt-Namen:
cp master-bueroreinigung.webp public/images/bueroreinigung-koln.webp
cp master-bueroreinigung.webp public/images/bueroreinigung-bottrop.webp
# ... etc für alle 17 Büroreinigung-Städte
```

**Vorteil:**
- ✅ Nur 8 Bilder erstellen statt 90!
- ✅ Konsistenter Look
- ✅ Schneller Upload

---

## 📊 System-Dateien

| Datei | Zweck |
|-------|-------|
| `src/lib/image-keywords.ts` | Keyword-Logik & Hash-System |
| `scripts/list-required-images.ts` | Liste generieren |
| `data/required-images.csv` | Export mit allen Bildnamen |
| `src/app/einsatzgebiete/[stadt]/page.tsx` | Implementation |

---

## 🚀 Production-Ready!

**Das System ist:**
- ✅ Stabil (deterministisch)
- ✅ SEO-optimiert (Keywords in Namen)
- ✅ Skalierbar (90+ Städte)
- ✅ Wartbar (zentrale Konfiguration)
- ✅ Performant (WebP, Lazy Loading)

**Nur noch: Bilder hochladen!** 📸

