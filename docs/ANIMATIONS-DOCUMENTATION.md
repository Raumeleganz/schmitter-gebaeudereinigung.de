# 🎬 Animation System Documentation

## Übersicht

Professionelles Animation-System mit **4 leistungsstarken Libraries**:

1. **Framer Motion** - React-native Animationen
2. **GSAP + ScrollTrigger** - Komplexe Scroll-Animationen
3. **React Scroll Parallax** - Parallax-Effekte
4. **Lottie** - Animierte Grafiken

---

## 📦 Installierte Packages

```bash
npm install framer-motion gsap lottie-react react-scroll-parallax
```

---

## 🎨 1. Framer Motion Components

### FadeIn Component

Slide-in Animationen mit Richtung:

```tsx
import { FadeIn } from '@/components/animations';

<FadeIn direction="up" delay={0.2} duration={0.8}>
  <h1>Fade in from bottom</h1>
</FadeIn>

<FadeIn direction="left" delay={0.4}>
  <p>Fade in from left</p>
</FadeIn>
```

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right'
- `delay`: number (Sekunden)
- `duration`: number (Sekunden)
- `className`: string

---

### ScaleIn Component

Scale-in Animationen mit Spring-Effekt:

```tsx
import { ScaleIn } from '@/components/animations';

<ScaleIn scale={0.8} duration={0.6}>
  <div className="card">Card erscheint mit Scale-Effekt</div>
</ScaleIn>
```

**Props:**
- `scale`: number (Start-Scale, z.B. 0.8)
- `delay`: number
- `duration`: number
- `className`: string

---

### StaggerContainer & StaggerItem

Kinder-Elemente nacheinander animieren:

```tsx
import { StaggerContainer, StaggerItem } from '@/components/animations';

<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>
    <div>Element 1</div>
  </StaggerItem>
  <StaggerItem>
    <div>Element 2</div>
  </StaggerItem>
  <StaggerItem>
    <div>Element 3</div>
  </StaggerItem>
</StaggerContainer>
```

**Props:**
- `staggerDelay`: number (Verzögerung zwischen Items)

---

## 🚀 2. GSAP Hooks

### useGSAPScrollAnimation

Custom Hook für ScrollTrigger-Animationen:

```tsx
import { useGSAPScrollAnimation } from '@/components/animations';

function MyComponent() {
  const ref = useGSAPScrollAnimation(
    {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
    },
    {
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    }
  );

  return <div ref={ref}>Animated Content</div>;
}
```

---

### Vordefinierte GSAP Hooks

```tsx
import {
  useFadeInUp,
  useFadeInLeft,
  useFadeInRight,
  useScaleIn,
  useStaggerAnimation,
} from '@/components/animations';

function Example() {
  const fadeUpRef = useFadeInUp();
  const fadeLeftRef = useFadeInLeft();
  const scaleRef = useScaleIn();
  const staggerRef = useStaggerAnimation('.child-item', 0.15);

  return (
    <>
      <div ref={fadeUpRef}>Fade from bottom</div>
      <div ref={fadeLeftRef}>Fade from left</div>
      <div ref={scaleRef}>Scale in</div>
      <div ref={staggerRef}>
        <div className="child-item">Item 1</div>
        <div className="child-item">Item 2</div>
        <div className="child-item">Item 3</div>
      </div>
    </>
  );
}
```

---

## 🌊 3. Parallax Components

### Setup: ParallaxProvider

Wrap deine App in den Provider:

```tsx
import { ParallaxProvider } from '@/components/animations';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
```

---

### ParallaxSection

Basic Parallax-Effekt:

```tsx
import { ParallaxSection } from '@/components/animations';

<ParallaxSection speed={-10}>
  <div>Bewegt sich langsamer als Scroll</div>
</ParallaxSection>

<ParallaxSection speed={10}>
  <div>Bewegt sich schneller als Scroll</div>
</ParallaxSection>

<ParallaxSection translateY={[-20, 20]}>
  <div>Custom translateY range</div>
</ParallaxSection>

<ParallaxSection scale={[0.8, 1.2]}>
  <div>Skaliert beim Scrollen</div>
</ParallaxSection>

<ParallaxSection opacity={[0.3, 1]}>
  <div>Fade-in beim Scrollen</div>
</ParallaxSection>
```

---

### Vordefinierte Parallax Components

```tsx
import {
  ParallaxBackground,
  ParallaxForeground,
  ParallaxScale,
  ParallaxFade,
} from '@/components/animations';

// Hintergrund-Elemente (langsam)
<ParallaxBackground>
  <img src="/bg-pattern.svg" alt="background" />
</ParallaxBackground>

// Vordergrund-Elemente (schnell)
<ParallaxForeground>
  <div>Schneller Effekt</div>
</ParallaxForeground>

// Scale-Effekt
<ParallaxScale>
  <div>Zoom beim Scrollen</div>
</ParallaxScale>

// Fade-Effekt
<ParallaxFade>
  <div>Fade beim Scrollen</div>
</ParallaxFade>
```

---

## 🎭 4. Lottie Animations

### LottieAnimation Component

Animierte Grafiken von LottieFiles:

```tsx
import { LottieAnimation } from '@/components/animations';
import animationData from './animation.json';

<LottieAnimation
  animationData={animationData}
  loop={true}
  autoplay={true}
  style={{ width: 300, height: 300 }}
/>
```

**Lottie Files:**
1. Gehe zu [LottieFiles.com](https://lottiefiles.com/)
2. Download Animation als JSON
3. Import in React

---

### LottieScrollAnimation

Lottie, die beim Scrollen abspielt:

```tsx
import { LottieScrollAnimation } from '@/components/animations';
import scrollAnimation from './scroll-animation.json';

<LottieScrollAnimation
  animationData={scrollAnimation}
  style={{ width: 400, height: 400 }}
/>
```

---

## 💡 Beispiele

### Hero Section mit Animationen

```tsx
import { FadeIn, ScaleIn } from '@/components/animations';

function Hero() {
  return (
    <section className="hero">
      <FadeIn direction="down" delay={0.2}>
        <h1>Willkommen bei DATRA</h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <p>Professionelle Gebäudereinigung in NRW</p>
      </FadeIn>

      <ScaleIn delay={0.6}>
        <button>Jetzt anfragen</button>
      </ScaleIn>
    </section>
  );
}
```

---

### Service Cards mit Stagger

```tsx
import { StaggerContainer, StaggerItem } from '@/components/animations';

function Services() {
  const services = ['Büroreinigung', 'Industriereinigung', 'Glasreinigung'];

  return (
    <StaggerContainer staggerDelay={0.15}>
      {services.map((service) => (
        <StaggerItem key={service}>
          <div className="service-card">
            <h3>{service}</h3>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
```

---

### GSAP ScrollTrigger Hook

```tsx
'use client';

import { useFadeInUp } from '@/components/animations';

function AboutSection() {
  const titleRef = useFadeInUp();
  const contentRef = useFadeInUp();

  return (
    <section>
      <h2 ref={titleRef}>Über uns</h2>
      <p ref={contentRef}>
        DATRA Gebäudereinigung bietet professionelle Reinigungsservices...
      </p>
    </section>
  );
}
```

---

### Parallax Hero Background

```tsx
import { ParallaxBackground, FadeIn } from '@/components/animations';

function ParallaxHero() {
  return (
    <section className="relative h-screen">
      <ParallaxBackground>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-900" />
      </ParallaxBackground>

      <div className="relative z-10 flex items-center justify-center h-full">
        <FadeIn direction="up">
          <h1 className="text-6xl font-bold text-white">
            Professional Cleaning
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}
```

---

## 🎯 Best Practices

### 1. Performance

- Verwende `viewport={{ once: true }}` bei Framer Motion für einmalige Animationen
- GSAP ScrollTrigger cached automatisch für bessere Performance
- Lottie: Nutze `loop={false}` wenn möglich

### 2. Accessibility

```tsx
// Respektiere "prefers-reduced-motion"
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.5
  }}
>
  Content
</motion.div>
```

### 3. Mobile Optimization

- Reduziere `speed` bei Parallax auf Mobile
- Verwende `scale` statt `translateY` für bessere Performance
- GSAP: Nutze `matchMedia` für responsive Breakpoints

---

## 🚀 Quick Start

```tsx
// 1. Wrap App in ParallaxProvider (layout.tsx)
import { ParallaxProvider } from '@/components/animations';

// 2. Use Components
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/animations';

// 3. Use Hooks
import { useFadeInUp } from '@/components/animations';

// 4. Enjoy smooth animations! 🎉
```

---

## 📚 Weitere Ressourcen

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [React Scroll Parallax](https://react-scroll-parallax.damnthat.tv/)
- [LottieFiles](https://lottiefiles.com/)

---

**Erstellt von Roxas** ⚡
*Professional Animation System für DATRA Gebäudereinigung*

