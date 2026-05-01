# Qualitäts-Deck Integration Guide

## ✅ Library erstellt: `src/lib/heroSubtitle-qualitaet.ts`

Stabile, hash-basierte Rotation für qualitätsfokussierte Subtitles mit 8 Varianten.

---

## 🎯 Integration-Optionen

### **Option 1: Ersatz für CSV-basierte Subtitles**

Ersetze `city.heroSubtitle` durch dynamisch generierte Qualitäts-Texte:

```tsx
// src/app/einsatzgebiete/[stadt]/page.tsx

import { pickHeroSubtitleQual } from '@/lib/heroSubtitle-qualitaet';

// Im Component:
<p className="text-lg text-blue-200 mb-4 max-w-2xl mx-auto">
  {pickHeroSubtitleQual(city.name, city.slug)}
</p>
```

**Vorteile:**
- ✅ Weniger Abhängigkeit von CSV
- ✅ Code-basierte Kontrolle
- ✅ Leichter zu aktualisieren

---

### **Option 2: Als zusätzliche Sektion**

Füge eine separate Qualitäts-Sektion hinzu (z.B. unter About-Section):

```tsx
{/* Qualitäts-Statement */}
<div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
  <p className="text-center text-neutral-700 italic">
    {pickHeroSubtitleQual(city.name, city.slug)}
  </p>
</div>
```

**Vorteile:**
- ✅ Behält bestehende Hero-Subtitle
- ✅ Zusätzlicher Qualitäts-Trust-Faktor
- ✅ Flexibel platzierbar

---

### **Option 3: Kombiniert mit Speed/Preis-Deck**

Verwende beide Decks für maximale Variation:

```tsx
{/* Hero Subtitle - Qualität */}
<p className="text-lg text-blue-200 mb-2 max-w-2xl mx-auto">
  {pickHeroSubtitleQual(city.name, city.slug)}
</p>

{/* Speed/Preis Deck */}
<p className="text-base text-blue-100/90 mb-10 max-w-2xl mx-auto italic">
  {pickDeckSpeedPreis(city.name, city.slug, "speed")}
</p>
```

**Vorteile:**
- ✅ Doppelte Content-Variation
- ✅ Qualität + Speed/Preis
- ✅ Mehr Unique Content pro Stadt

---

## 📊 Beispiel-Texte

| Stadt | Qualitäts-Subtitle (stabil) |
|-------|---------------------------|
| **Köln** | "Messbar sauber: dokumentierte Leistungen, klare Standards und verlässliche Qualität in Köln." |
| **Düsseldorf** | "Transparente Qualität in Düsseldorf: dokumentierte Hygiene, klare Zuständigkeiten und nachvollziehbare Ergebnisse." |
| **Dortmund** | "Hygienekonzepte mit Checklisten, Audits und nachvollziehbaren Ergebnissen – direkt in Dortmund." |

Jede Stadt bekommt **IMMER den gleichen Text** basierend auf ihrem Slug! 🔒

---

## 🚀 Empfehlung

**Option 3** bietet die beste SEO-Performance:
- Mehr Unique Content pro Stadt
- Kombination aus Qualität + Tempo/Preis
- Maximale Text-Variation

```tsx
// Aktuelle Implementierung (bereits live):
{city.heroSubtitle}  // CSV-basiert (12 Varianten)
{pickDeckSpeedPreis(city.name, city.slug, "speed")}  // 6 Varianten

// Erweitert mit Qualitäts-Deck:
{pickHeroSubtitleQual(city.name, city.slug)}  // 8 Varianten
{pickDeckSpeedPreis(city.name, city.slug, "speed")}  // 6 Varianten
```

**= 48 mögliche Kombinationen für 90 Städte!** 🎯

