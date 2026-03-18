'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const storyNodes = ['12%', '28%', '46%', '66%', '86%'];

export default function PageAtmosphere() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-240);
  const mouseY = useMotionValue(-240);
  const cursorX = useSpring(mouseX, { stiffness: 56, damping: 22, mass: 0.82 });
  const cursorY = useSpring(mouseY, { stiffness: 56, damping: 22, mass: 0.82 });

  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 240);
      mouseY.set(event.clientY - 240);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [mouseX, mouseY, reduceMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[24rem] max-w-[66vw] blur-[110px] opacity-[0.06]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.03) 20%, rgba(255,255,255,0.045) 48%, rgba(255,255,255,0.03) 78%, transparent 100%)',
            maskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 94%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 94%, transparent 100%)',
          }}
          animate={reduceMotion ? undefined : { scaleY: [1, 1.02, 0.99, 1], x: ['-50%', '-49.5%', '-50.5%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px opacity-30"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.14) 8%, rgba(255,255,255,0.03) 90%, transparent 100%)',
          }}
          animate={reduceMotion ? undefined : { opacity: [0.14, 0.24, 0.14] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {storyNodes.map((top, index) => (
          <motion.div
            key={top}
            className="absolute left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full"
            style={{
              top,
              background: 'rgba(255,255,255,0.48)',
              boxShadow: '0 0 0 8px rgba(255,255,255,0.02)',
            }}
            animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.34, 0.62, 0.34] }}
            transition={{
              duration: 5.6 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {!reduceMotion && (
        <div className="fixed inset-0">
          <motion.div
            className="absolute h-[16rem] w-[16rem] rounded-full blur-[110px] opacity-[0.06]"
            style={{
              x: cursorX,
              y: cursorY,
              background:
                'radial-gradient(circle, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 34%, transparent 72%)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      )}
    </div>
  );
}
