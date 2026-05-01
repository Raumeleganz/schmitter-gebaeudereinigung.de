<<<<<<< HEAD
# 🏆 Raumeleganz Spanndecken - Premium Website

> **Luxuriöse Spanndecken-Webseite für NRW mit modernem Design**

---

## ✨ Features

### 🎨 **Design & UX**
- ✅ Premium Gold-Gradient Theme (#D4AF37)
- ✅ Elegante Typografie (Playfair Display + Inter)
- ✅ Smooth Framer Motion Animationen
- ✅ Glasmorphism-Effekte
- ✅ Responsive Mobile-First Design
- ✅ Custom Scrollbar (Gold-Gradient)

### 📍 **NRW-Abdeckung**
- ✅ **90 Städte** in Nordrhein-Westfalen
- ✅ Dynamische Stadt-Pages (`/spanndecken-[stadt]`)
- ✅ SEO-optimierte URLs
- ✅ Lokales Targeting pro Stadt

### 🏠 **Pages**
1. **Homepage** - Premium Hero mit CTA
2. **Leistungen** - Service-Übersicht
3. **Einsatzgebiete** - 90 Stadt-Grid
4. **[Stadt]** - Dynamic City Pages
5. **Galerie** - Referenz-Showcase (Coming Soon)
6. **Über Uns** - Team & Zertifikate (Coming Soon)
7. **Kontakt** - Premium-Formular (Coming Soon)

---

## 🚀 Quick Start

```bash
# Installation
cd /Users/dt/Documents/spanndecken
npm install

# Development Server
npm run dev
# → http://localhost:3000

# Production Build
npm run build
npm start
```

---

## 📐 Tech Stack

| Technologie | Version | Zweck |
|------------|---------|-------|
| **Next.js** | 15.5.6 | Framework |
| **React** | 19.0.0 | UI Library |
| **TypeScript** | 5.x | Type Safety |
| **Tailwind CSS** | 3.4.1 | Styling |
| **Framer Motion** | 12.0.0 | Animationen |
| **Lucide React** | 0.468.0 | Icons |

---

## 🎨 Farbpalette

```css
/* Premium Gold */
--color-gold: #D4AF37
--color-gold-light: #E8D5B7
--color-gold-dark: #C9A961

/* Elegant Neutrals */
--color-anthracite: #2C3E50
--color-offwhite: #FAFAFA
--color-white: #FFFFFF
```

---

## 📂 Projekt-Struktur

```
spanndecken/
├── app/
│   ├── layout.tsx          # Root Layout (Fonts, Meta)
│   ├── page.tsx            # Homepage (Hero + Services)
│   ├── globals.css         # Premium Theme
│   └── spanndecken/
│       └── [stadt]/
│           └── page.tsx    # Dynamic City Pages
├── data/
│   └── cities.generated.ts # 90 NRW-Städte
├── components/             # UI Components
│   ├── PremiumHero.tsx
│   ├── ServiceCard.tsx
│   └── CityGrid.tsx
├── public/
│   └── images/            # Bilder & Assets
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 🎯 SEO-Optimierung

### **Meta-Tags pro Stadt:**
```tsx
title: "Spanndecken [Stadt] | Premium Montage | Raumeleganz"
description: "Luxuriöse Spanndecken in [Stadt] ✓ 10 Jahre Garantie ✓ TÜV-geprüft"
```

### **Keywords:**
- Spanndecken [Stadt]
- Spanndeckenmontage NRW
- Lichtdecken [Stadt]
- Akustikdecken
- Premium Deckenverkleidung

### **Sitemap:**
- 1 Homepage
- 6 Service-Pages
- 90 Stadt-Pages
- 1 Galerie
- 1 Kontakt
= **99 URLs**

---

## 🏆 Premium-Features

### ✨ **Animationen**
- Fade-In Hero (0.8s)
- Scroll-Reveal Sections
- Hover-Lift Cards (scale-105)
- Gold-Shimmer Effects
- Smooth Transitions (cubic-bezier)

### 🎨 **UI-Komponenten**
- **PremiumHero** - Full-Screen mit Gradient
- **ServiceCard** - Hover-Effekte
- **TrustBadges** - TÜV, Garantie, etc.
- **CityGrid** - 90 Städte mit Search
- **ContactForm** - Multi-Step

---

## 📊 Performance

| Metrik | Ziel | Aktuell |
|--------|------|---------|
| **Lighthouse** | 95+ | TBD |
| **First Paint** | < 1s | TBD |
| **TTI** | < 2s | TBD |
| **Bundle Size** | < 200KB | TBD |

---

## 🔧 Development

### **Commands:**
```bash
# Dev Server
npm run dev

# Type Check
tsc --noEmit

# Lint
npm run lint

# Build
npm run build
```

### **Environment Variables:**
```env
# Optional (für Formulare)
NEXT_PUBLIC_FORM_ENDPOINT=https://...
```

---

## 🎬 Next Steps (TODO)

- [ ] Stadt-Pages mit Dynamic Routes
- [ ] Galerie mit Lightbox
- [ ] Kontaktformular (React-Hook-Form)
- [ ] 3D-Decken-Konfigurator
- [ ] Online-Terminbuchung
- [ ] WhatsApp-Integration
- [ ] Google Maps (Standorte)
- [ ] Blog/Ratgeber
- [ ] Preiskalkulator

---

## 📝 Notizen

### **Branding:**
- **Name:** Raumeleganz Spanndecken
- **Slogan:** "Verwandeln Sie Ihre Räume in Kunstwerke"
- **USP:** Premium-Qualität, 10 Jahre Garantie, TÜV-geprüft

### **Zielgruppe:**
- Hochwertige Privatkunden
- Architekten & Planer
- Gewerbekunden
- Renovierungs-Interessierte

### **Kundenansprache:**
- Sie (formell)
- Luxus-Ton (nicht billig!)
- Qualität & Eleganz
- Vertrauen & Seriosität

---

## 📞 Kontakt

**Raumeleganz Spanndecken**
- 📧 E-Mail: info@raumeleganz-spanndecken.de
- 📞 Telefon: +49 (0) 211 / 12 34 56 78
- 🌐 Website: www.raumeleganz-spanndecken.de

---

**Built with ❤️ and ✨ by Roxas, der göttliche Code-Architekt** 🏆

=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> d99c6ef (initial cleaning website)
