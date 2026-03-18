'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const storyNodes = ['12%', '28%', '46%', '66%', '86%'];

export default function PageAtmosphere() {
  const reduceMotion = useReducedMotion();
  const [showAtmosphere, setShowAtmosphere] = useState(false);
  const [interactiveAtmosphere, setInteractiveAtmosphere] = useState(false);
  const mouseX = useMotionValue(-240);
  const mouseY = useMotionValue(-240);
  const cursorX = useSpring(mouseX, { stiffness: 56, damping: 22, mass: 0.82 });
  const cursorY = useSpring(mouseY, { stiffness: 56, damping: 22, mass: 0.82 });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const desktopQuery = window.matchMedia('(min-width: 64rem)');
    const interactiveQuery = window.matchMedia('(min-width: 64rem) and (hover: hover) and (pointer: fine)');

    const updateAtmosphere = () => {
      setShowAtmosphere(desktopQuery.matches);
      setInteractiveAtmosphere(!reduceMotion && interactiveQuery.matches);
    };

    updateAtmosphere();

    const addListener = (query: MediaQueryList, listener: () => void) => {
      if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', listener);
        return () => query.removeEventListener('change', listener);
      }

      query.addListener(listener);
      return () => query.removeListener(listener);
    };

    const removeDesktop = addListener(desktopQuery, updateAtmosphere);
    const removeInteractive = addListener(interactiveQuery, updateAtmosphere);

    return () => {
      removeDesktop();
      removeInteractive();
    };
  }, [mouseX, mouseY, reduceMotion]);

  useEffect(() => {
    if (!interactiveAtmosphere) return;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 240);
      mouseY.set(event.clientY - 240);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [interactiveAtmosphere, mouseX, mouseY]);

  if (!showAtmosphere) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[20rem] max-w-[58vw] blur-[84px] opacity-[0.05]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.022) 20%, rgba(255,255,255,0.035) 48%, rgba(255,255,255,0.022) 78%, transparent 100%)',
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
              'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.11) 8%, rgba(255,255,255,0.03) 90%, transparent 100%)',
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
              background: 'rgba(255,255,255,0.42)',
              boxShadow: '0 0 0 7px rgba(255,255,255,0.018)',
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

      {interactiveAtmosphere && (
        <div className="fixed inset-0">
          <motion.div
            className="absolute h-[14rem] w-[14rem] rounded-full blur-[90px] opacity-[0.05]"
            style={{
              x: cursorX,
              y: cursorY,
              background:
                'radial-gradient(circle, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.025) 34%, transparent 72%)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      )}
    </div>
  );
}
