# ✅ DATRA Branding Update - Komplett

## 🎯 Was wurde geändert?

### **1. Domain-Update**
✅ **Von:** `cleanpro-nrw.de`  
✅ **Zu:** `datra-gebaeudereinigung.de`

**Geändert in:**
- Schema.org URLs (Local Business, Breadcrumb)
- Canonical URLs
- Meta-Tags

---

### **2. Firmenname-Update**
✅ **Von:** "CleanPro"  
✅ **Zu:** "DATRA"

**Geändert in:**
- AboutText (8 Varianten)
- Schema Business Name
- Image ALT-Texte
- Alle SEO-Texte

---

### **3. Bild-System**
✅ **Neues Dateiformat:**
- Von: `${stadtslug}-cleaning.jpg`
- Zu: `${stadtslug}-reinigung.webp`

✅ **Automatisches Fallback:**
- Zeigt Placeholder bei fehlendem Bild
- Inkl. Icon, ALT-Text & Dateiname

✅ **Speicherort:**
- `/public/images/[stadtslug]-reinigung.webp`

---

## 📁 Geänderte Dateien

### **Scripts:**
1. ✅ `scripts/generate-full-cities-csv.ts`
   - imageAlt: CleanPro → DATRA
   - schemaBusinessName: CleanPro → DATRA
   - aboutText: CleanPro → DATRA

2. ✅ `scripts/generate-cities.ts`
   - Import von `aboutText-deck`
   - Verwendet jetzt Deck-System

### **Libraries:**
3. ✅ `src/lib/aboutText-deck.ts` (NEU)
   - 8 DATRA-branded AboutText-Varianten
   - Stabile Hash-Rotation

4. ✅ `src/lib/heroSubtitle-qualitaet.ts` (NEU)
   - 8 Qualitäts-fokussierte Subtitles

5. ✅ `src/lib/deck-speed-preis.ts` (NEU)
   - 6 Speed-Varianten
   - 6 Preis-Varianten

### **Pages:**
6. ✅ `src/app/einsatzgebiete/[stadt]/page.tsx`
   - Domain-URLs aktualisiert (6 Stellen)
   - Bild-System implementiert
   - WebP + Fallback

### **Dokumentation:**
7. ✅ `src/lib/ABOUTTEXT-ANLEITUNG.md` (NEU)
8. ✅ `src/lib/USAGE-QUALITY-DECK.md` (NEU)
9. ✅ `public/images/BILDER-ANLEITUNG.md` (NEU)
10. ✅ `BRANDING-UPDATE.md` (NEU - diese Datei)

---

## 🚀 Wie ausführen?

### **Nach Textänderungen:**
```bash
# 1. CSV mit DATRA-Daten generieren
npx tsx scripts/generate-full-cities-csv.ts

# 2. TypeScript-Daten generieren
npm run generate:cities

# 3. Dev-Server neustarten (falls läuft)
# Ctrl+C und dann:
npm run dev
```

### **Nach Bild-Upload:**
```bash
# Bild nach public/images/ hochladen:
cp mein-bild.jpg public/images/erkrath-reinigung.webp

# Seite im Browser testen:
# http://localhost:3000/einsatzgebiete/erkrath
```

---

## 📊 Deck-System Übersicht

| System | Datei | Varianten | Verwendung |
|--------|-------|-----------|------------|
| **Title** | `generate-full-cities-csv.ts` | 8 | Meta-Title |
| **H1** | `generate-full-cities-csv.ts` | 8 | Hauptüberschrift |
| **Meta Desc** | `generate-full-cities-csv.ts` | 16 | SEO-Description |
| **Qualität-Subtitle** | `lib/heroSubtitle-qualitaet.ts` | 8 | Hero-Untertitel |
| **Speed-Deck** | `lib/deck-speed-preis.ts` | 6 | Hero-Zusatztext |
| **AboutText** | `lib/aboutText-deck.ts` | 8 | Haupttext-Sektion |

**= 6 Content-Systeme mit 54 Varianten!** 🎯

---

## ✅ Checkliste

### **Branding:**
- [x] Domain: cleanpro-nrw.de → datra-gebaeudereinigung.de
- [x] Firmenname: CleanPro → DATRA
- [x] Schema.org Business Name aktualisiert
- [x] Image ALT-Texte aktualisiert

### **Content-Systeme:**
- [x] AboutText-Deck (8 Varianten)
- [x] Qualitäts-Deck (8 Varianten)
- [x] Speed/Preis-Deck (6+6 Varianten)
- [x] Title-Rotation (8 Varianten)
- [x] H1-Rotation (8 Varianten)
- [x] Meta-Description-Rotation (16 Varianten)

### **Bilder:**
- [x] Neues Format: `*-reinigung.webp`
- [x] Fallback-System implementiert
- [x] Dokumentation erstellt
- [ ] **TODO:** 90 Bilder hochladen

### **Dokumentation:**
- [x] AboutText-Anleitung
- [x] Qualitäts-Deck-Anleitung
- [x] Bilder-Anleitung
- [x] Branding-Update-Dokument

---

## 🎯 Nächste Schritte

### **1. Bilder hochladen** (wichtigster Punkt!)
```bash
# Für jede der 90 Städte:
public/images/
├── koln-reinigung.webp
├── dusseldorf-reinigung.webp
├── dortmund-reinigung.webp
├── erkrath-reinigung.webp
└── ... (86 weitere)
```

**Siehe:** `/public/images/BILDER-ANLEITUNG.md`

### **2. Domain konfigurieren**
Wenn Production-Domain anders ist:
- Suche in `src/app/einsatzgebiete/[stadt]/page.tsx`
- Ersetze `datra-gebaeudereinigung.de` durch echte Domain

### **3. Texte feintunen** (optional)
Passe Deck-Varianten an:
- `src/lib/aboutText-deck.ts` - Haupttexte
- `src/lib/heroSubtitle-qualitaet.ts` - Subtitles
- `src/lib/deck-speed-preis.ts` - Speed/Preis-Texte

Nach Änderungen:
```bash
npm run generate:cities
```

---

## ✨ Ergebnis

**Vorher:**
- ❌ CleanPro-Branding
- ❌ cleanpro-nrw.de Domain
- ❌ Keine Bilder
- ❌ Statische Texte

**Nachher:**
- ✅ DATRA-Branding komplett
- ✅ datra-gebaeudereinigung.de Domain
- ✅ Bild-System mit Fallback
- ✅ 54 rotierende Content-Varianten
- ✅ Stabil & deterministisch
- ✅ Zentral verwaltbar

**= Production-ready! 🚀**

