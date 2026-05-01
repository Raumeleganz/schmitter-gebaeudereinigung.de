# 🚀 Animation System - Quick Start

## ⚡ Schnellstart in 3 Schritten

### 1️⃣ Import Components

```tsx
import { 
  FadeIn, 
  ScaleIn, 
  StaggerContainer, 
  StaggerItem 
} from '@/components/animations';
```

### 2️⃣ Verwende sie in deinem Code

```tsx
function MyComponent() {
  return (
    <>
      {/* Fade-In von unten */}
      <FadeIn direction="up">
        <h1>Mein Titel</h1>
      </FadeIn>

      {/* Scale-In mit Verzögerung */}
      <ScaleIn delay={0.3}>
        <p>Mein Text</p>
      </ScaleIn>

      {/* Stagger für Listen */}
      <StaggerContainer>
        <StaggerItem>
          <div>Item 1</div>
        </StaggerItem>
        <StaggerItem>
          <div>Item 2</div>
        </StaggerItem>
      </StaggerContainer>
    </>
  );
}
```

### 3️⃣ Fertig! 🎉

---

## 📋 Häufigste Use Cases

### Hero Section
```tsx
<FadeIn direction="down" delay={0.2}>
  <h1>Hero Titel</h1>
</FadeIn>

<FadeIn direction="up" delay={0.4}>
  <p>Hero Beschreibung</p>
</FadeIn>

<ScaleIn delay={0.6}>
  <button>Call-to-Action</button>
</ScaleIn>
```

### Feature Cards
```tsx
<StaggerContainer staggerDelay={0.15}>
  {features.map((feature) => (
    <StaggerItem key={feature.id}>
      <div className="card">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Parallax Background
```tsx
import { ParallaxBackground } from '@/components/animations';

<section className="relative">
  <ParallaxBackground>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
  </ParallaxBackground>
  
  <div className="relative z-10">
    {/* Dein Content */}
  </div>
</section>
```

---

## 🎯 Props Übersicht

### FadeIn
- `direction`: 'up' | 'down' | 'left' | 'right'
- `delay`: number (Sekunden)
- `duration`: number (Sekunden)

### ScaleIn
- `scale`: number (Start-Scale, z.B. 0.8)
- `delay`: number
- `duration`: number

### StaggerContainer
- `staggerDelay`: number (Verzögerung zwischen Items)

### Parallax
- `speed`: number (negative = langsam, positive = schnell)
- `translateY`: [start, end] (z.B. [-20, 20])
- `scale`: [start, end] (z.B. [0.8, 1.2])
- `opacity`: [start, end] (z.B. [0.3, 1])

---

## 🎬 Live Demo

Besuche `/animations-demo` für eine komplette Übersicht aller Animationen!

```bash
http://localhost:3000/animations-demo
```

---

## 📚 Vollständige Dokumentation

Siehe `ANIMATIONS-DOCUMENTATION.md` für:
- GSAP Hooks
- Lottie Animations
- Erweiterte Parallax-Effekte
- Performance-Tipps
- Accessibility-Guidelines

---

**Happy Animating!** 🎨✨

