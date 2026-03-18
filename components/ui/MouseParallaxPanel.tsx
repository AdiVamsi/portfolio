'use client';

import { CSSProperties } from 'react';
import {
  motion,
  MotionStyle,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

interface MouseParallaxPanelProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  style?: MotionStyle;
}

export default function MouseParallaxPanel({
  children,
  className,
  intensity = 8,
  perspective = 1400,
  style,
}: MouseParallaxPanelProps) {
  const reduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);

  const rx = useSpring(rotateX, { stiffness: 160, damping: 24, mass: 0.86 });
  const ry = useSpring(rotateY, { stiffness: 160, damping: 24, mass: 0.86 });
  const go = useSpring(glareOpacity, { stiffness: 170, damping: 26, mass: 0.78 });

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 28%, transparent 72%)`;

  if (reduceMotion) {
    return (
      <div className={className} style={{ perspective, ...(style as CSSProperties) }}>
        {children}
      </div>
    );
  }

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - py) * intensity);
    rotateY.set((px - 0.5) * intensity);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(0.34);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <div
      className="relative"
      style={{ perspective }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className={className}
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          ...style,
        }}
      >
        {children}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: glare,
            opacity: go,
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>
    </div>
  );
}
