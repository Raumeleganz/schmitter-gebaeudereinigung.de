'use client';

import Lottie from 'lottie-react';
import { CSSProperties } from 'react';

interface LottieAnimationProps {
  animationData: unknown;
  loop?: boolean;
  autoplay?: boolean;
  style?: CSSProperties;
  className?: string;
}

export function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  style,
  className,
}: LottieAnimationProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
    />
  );
}

/**
 * Scroll-triggered Lottie animation
 */
export function LottieScrollAnimation({
  animationData,
  style,
  className,
}: Omit<LottieAnimationProps, 'loop' | 'autoplay'>) {
  return (
    <div className={className} style={style}>
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay={true}
      />
    </div>
  );
}

