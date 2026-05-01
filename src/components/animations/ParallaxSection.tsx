'use client';

import { Parallax } from 'react-scroll-parallax';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  translateY?: [number, number];
  scale?: [number, number];
  opacity?: [number, number];
}

export function ParallaxSection({
  children,
  speed,
  className,
  translateY,
  scale,
  opacity,
}: ParallaxSectionProps) {
  return (
    <Parallax
      speed={speed}
      translateY={translateY}
      scale={scale}
      opacity={opacity}
      className={className}
    >
      {children}
    </Parallax>
  );
}

/**
 * Slow parallax effect for background elements
 */
export function ParallaxBackground({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ParallaxSection speed={-10} className={className}>
      {children}
    </ParallaxSection>
  );
}

/**
 * Fast parallax effect for foreground elements
 */
export function ParallaxForeground({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ParallaxSection speed={10} className={className}>
      {children}
    </ParallaxSection>
  );
}

/**
 * Scale parallax effect
 */
export function ParallaxScale({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ParallaxSection scale={[0.8, 1.1]} className={className}>
      {children}
    </ParallaxSection>
  );
}

/**
 * Fade parallax effect
 */
export function ParallaxFade({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ParallaxSection opacity={[0.3, 1]} className={className}>
      {children}
    </ParallaxSection>
  );
}

