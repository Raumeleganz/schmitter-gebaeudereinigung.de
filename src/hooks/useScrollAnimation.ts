'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Legacy hook for scroll animations (Backwards Compatibility)
 * Returns a ref and isVisible state
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

/**
 * Custom hook for GSAP ScrollTrigger animations
 * @param animationConfig - GSAP animation configuration
 * @param triggerConfig - ScrollTrigger configuration
 */
export function useGSAPScrollAnimation(
  animationConfig: gsap.TweenVars,
  triggerConfig?: ScrollTrigger.Vars
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        ...animationConfig,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...triggerConfig,
        },
      });
    });

    return () => ctx.revert();
  }, [animationConfig, triggerConfig]);

  return elementRef;
}

/**
 * Fade in from bottom with ScrollTrigger
 */
export function useFadeInUp() {
  return useGSAPScrollAnimation({
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out',
  });
}

/**
 * Fade in from left with ScrollTrigger
 */
export function useFadeInLeft() {
  return useGSAPScrollAnimation({
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'power3.out',
  });
}

/**
 * Fade in from right with ScrollTrigger
 */
export function useFadeInRight() {
  return useGSAPScrollAnimation({
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: 'power3.out',
  });
}

/**
 * Scale in animation with ScrollTrigger
 */
export function useScaleIn() {
  return useGSAPScrollAnimation({
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: 'back.out(1.7)',
  });
}

/**
 * Stagger children animation
 */
export function useStaggerAnimation(selector: string, delay: number = 0.1) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current!.querySelectorAll(selector), {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, [selector, delay]);

  return containerRef;
}
