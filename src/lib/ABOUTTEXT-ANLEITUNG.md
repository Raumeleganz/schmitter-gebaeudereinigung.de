# AboutText-Deck Anleitung

## 📍 Wo du die AboutTexte ändern kannst

### **Zentrale Datei:** `src/lib/aboutText-deck.ts`

Hier befinden sich **8 verschiedene AboutText-Varianten** mit DATRA-Branding.

---

## 🎯 Wie funktioniert das System?

### **1. Stabile Rotation**
Jede Stadt bekommt basierend auf ihrem Slug **IMMER den gleichen Text**:
- **Erkrath** → Variante 1 (DATRA ist seit über 15 Jahren...)
- **Köln** → Variante 3 (In Köln bietet DATRA...)
- **Düsseldorf** → Variante 5 (Schneller Start, verlässliche Qualität...)

### **2. Automatische Integration**
Das Script `scripts/generate-cities.ts` verwendet automatisch das Deck-System:
```typescript
import { pickAboutText } from '../src/lib/aboutText-deck';

function generateUniqueAboutText(city: CityData): string {
  return pickAboutText(city.name, city.slug);
}
```

---

## ✏️ AboutTexte bearbeiten

### **Option 1: Bestehende Varianten ändern**

Öffne `src/lib/aboutText-deck.ts` und bearbeite die Texte im Array:

```typescript
export const aboutTextVariants = (city: string): string[] => [
  // Variante 1: Erfahrung & Zuverlässigkeit
  `DATRA ist seit über 15 Jahren Ihr zuverlässiger Partner...`,
  
  // Variante 2: Qualität & Standards
  `Als erfahrener Partner für Gebäudereinigung...`,
  
  // ... usw.
];
```

### **Option 2: Neue Varianten hinzufügen**

Füge einfach weitere Texte zum Array hinzu:

```typescript
export const aboutTextVariants = (city: string): string[] => [
  // ... bestehende Varianten ...
  
  // Variante 9: Deine neue Variante
  `Dein neuer Text für ${city}...`,
];
```

### **Option 3: DATRA ersetzen**

Ersetze "DATRA" durch einen anderen Namen:

```bash
# In src/lib/aboutText-deck.ts alle "DATRA" ersetzen
```

---

## 🚀 Änderungen aktivieren

Nach jeder Bearbeitung von `aboutText-deck.ts`:

```bash
npm run generate:cities
```

Das regeneriert alle Stadt-Daten mit den aktualisierten Texten!

---

## 📊 Aktueller Status

### **8 Varianten mit Themenschwerpunkten:**

1. **Erfahrung & Zuverlässigkeit** (DATRA seit 15 Jahren...)
2. **Qualität & Standards** (Messbare Qualität, dokumentierte Leistungen...)
3. **Individualität & Flexibilität** (Maßgeschneiderte Lösungen...)
4. **Nachhaltigkeit & Effizienz** (Ökologische Verantwortung...)
5. **Schnelligkeit & Verfügbarkeit** (Schneller Start, kurze Reaktionszeiten...)
6. **Hygiene & Gesundheit** (Höchste Hygienestandards...)
7. **Zuverlässigkeit & Planbarkeit** (Planbare Sauberkeit, feste Ansprechpartner...)
8. **Wirtschaftlichkeit & Wert** (Mehr Leistung fürs Budget...)

### **Jede Variante:**
- ✅ Mindestens 500 Zeichen (SEO-optimiert)
- ✅ DATRA-Branding
- ✅ Stadt-spezifische Anpassung
- ✅ Unique Content für jede Stadt

---

## 🔍 Beispiel: Erkrath

**Aktueller AboutText für Erkrath:**

```
DATRA ist seit über 15 Jahren Ihr zuverlässiger Partner für 
professionelle Gebäudereinigung in Erkrath und Umgebung. In 
Erkrath als wichtiger Standort für Unternehmen vertrauen bereits 
zahlreiche Betriebe auf unsere professionellen Reinigungsdienstleistungen. 
Mit modernster Reinigungstechnik, geschultem Fachpersonal und einem 
umfassenden Qualitätsmanagement sorgen wir für hygienisch einwandfreie 
Räumlichkeiten. Unser Leistungsspektrum umfasst die komplette 
Unterhaltsreinigung, Grundreinigung sowie Spezialreinigungen für alle 
Gebäudetypen und Branchen. Verlassen Sie sich auf DATRA – Expertise, 
Zuverlässigkeit und kundenorientierte Arbeitsweise in Erkrath.
```

**Dieser Text ist STABIL** - Erkrath bekommt immer die gleiche Variante! 🔒

---

## 💡 Best Practices

### **Text-Qualität:**
- ✅ Mindestens 500 Zeichen für SEO
- ✅ Natürlicher Lesefluss
- ✅ Stadt-Name mehrfach erwähnen
- ✅ USPs & Vorteile kommunizieren

### **Branding:**
- ✅ Firmenname konsistent (DATRA)
- ✅ Einzigartiger Tonfall
- ✅ Vertrauenswürdige Sprache

### **Variation:**
- ✅ Unterschiedliche Themenschwerpunkte
- ✅ Verschiedene Zielgruppen ansprechen
- ✅ Unique Content für Google

---

## 🎯 Workflow

```
1. Texte bearbeiten: src/lib/aboutText-deck.ts
2. Generieren: npm run generate:cities
3. Testen: http://localhost:3000/einsatzgebiete/erkrath
4. Build: npm run build
```

**So einfach ist es!** 🚀

