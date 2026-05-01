/**
 * Animation Components - Professional Animation Library
 * 
 * Includes:
 * - Framer Motion animations (FadeIn, ScaleIn, Stagger)
 * - React Scroll Parallax (ParallaxSection, ParallaxBackground, etc.)
 * - Lottie animations (LottieAnimation)
 * - GSAP hooks (useGSAPScrollAnimation, useFadeInUp, etc.)
 */

// Framer Motion Components
export { FadeIn } from './FadeIn';
export { ScaleIn } from './ScaleIn';
export { StaggerContainer, StaggerItem } from './StaggerContainer';

// Parallax Components
export { ParallaxProvider } from './ParallaxProvider';
export {
  ParallaxSection,
  ParallaxBackground,
  ParallaxForeground,
  ParallaxScale,
  ParallaxFade,
} from './ParallaxSection';

// Lottie Components
export { LottieAnimation, LottieScrollAnimation } from './LottieAnimation';

// GSAP Hooks (from hooks directory)
export {
  useGSAPScrollAnimation,
  useFadeInUp,
  useFadeInLeft,
  useFadeInRight,
  useScaleIn,
  useStaggerAnimation,
} from '@/hooks/useScrollAnimation';

