'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MouseParallaxPanel from '@/components/ui/MouseParallaxPanel';
import { scrollToId } from '@/lib/scroll';

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const credibilityPills = [
  'Python Developer at DATARA',
  '5+ years experience',
  'Backend + AI + automation',
];

const quickSummaryCards = [
  {
    label: 'Current role',
    value: 'Python Developer at DATARA',
  },
  {
    label: 'Experience',
    value: '5+ years across backend, product, and applied AI work',
  },
  {
    label: 'Specialization',
    value: 'AI applications, backend services, and automation software',
  },
  {
    label: 'Flagship proof',
    value: 'Indian SME Engine',
  },
];

const buildSignals = [
  'AI applications tied to backend services and real business logic.',
  'Automation flows with review, handoff, and clear ownership.',
  'Product-minded internal tools that hold up in daily use.',
];

const flagshipSignals = [
  'Lead qualification',
  'Knowledge-backed replies',
  'Human handoff',
];

function Magnetic({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 340, damping: 28 });
  const sy = useSpring(y, { stiffness: 340, damping: 28 });

  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.08);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.08);
  };

  return (
    <motion.div
      className={className}
      style={{ x: reduceMotion ? 0 : sx, y: reduceMotion ? 0 : sy, display: 'inline-flex' }}
      onMouseMove={reduceMotion ? undefined : move}
      onMouseLeave={reduceMotion ? undefined : () => {
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

function HeadingLine({
  children,
  delay,
  className,
  reduceMotion = false,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  reduceMotion?: boolean;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={reduceMotion ? { y: '0%' } : { y: '108%' }}
        animate={{ y: '0%' }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`block ${className ?? ''}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="hero" className="section-shell section-hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-[0.18]" />
      </div>

      <div className="section-container section-container-scene section-frame section-frame-hero hero-scene">
        <div className="section-intro section-intro-scene hero-intro-stack">
          <div className="hero-identity-stack">
            <motion.div
              className="eyebrow justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Adi Vamsi Sai Maddirala
            </motion.div>
          </div>

          <h1 className="hero-title hero-title-lockup" style={{ color: 'var(--text)' }}>
            <HeadingLine delay={0.12} className="hero-title-line" reduceMotion={reduceMotion}>
              Practical AI systems
            </HeadingLine>
            <HeadingLine delay={0.22} className="hero-title-line" reduceMotion={reduceMotion}>
              for real workflow use.
            </HeadingLine>
          </h1>

          <motion.p
            custom={0.32}
            variants={revealUp}
            initial="hidden"
            animate="visible"
            className="hero-copy"
          >
            Backend engineer building AI applications, automation software, and tools people use in
            real operations. Best fit for backend, applied AI, and workflow systems roles.
          </motion.p>

          <motion.div
            custom={0.38}
            variants={revealUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            {credibilityPills.map((item) => (
              <div
                key={item}
                className="meta-chip-soft px-3.5 py-2 text-[0.72rem] font-semibold text-center"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={0.44}
            variants={revealUp}
            initial="hidden"
            animate="visible"
            className="section-actions hero-actions-row"
          >
            <Magnetic className="w-full sm:w-auto justify-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToId('experience')}
                className="button-primary text-sm font-semibold w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Experience
                  <ArrowRight size={14} />
                </span>
              </motion.button>
            </Magnetic>

            <Magnetic className="w-full sm:w-auto justify-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToId('flagship')}
                className="button-secondary text-sm font-semibold w-full sm:w-auto"
              >
                See Flagship Build
              </motion.button>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hero-surface-wide hero-surface-block mx-auto"
        >
          <MouseParallaxPanel
            className="surface-panel spotlight-panel rounded-[2.4rem] overflow-hidden border"
            intensity={3}
            style={{ borderColor: 'rgba(255,255,255,0.09)' }}
          >
            <div className="surface-shell-header relative border-b" style={{ borderColor: 'var(--border-sub)' }}>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.14)' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.09)' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
                  </div>
                  <span
                    className="ml-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: 'var(--text-faint)' }}
                  >
                    Quick profile
                  </span>
                </div>

                <div className="meta-chip-soft text-[0.66rem] font-semibold">
                  Recruiter scan
                </div>
              </div>
            </div>

            <div className="surface-shell-body surface-shell-grid grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {quickSummaryCards.map(({ label, value }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.18 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="hero-frosted-block rounded-[1.25rem] border px-4 py-4 text-left"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      borderColor: 'rgba(255,255,255,0.07)',
                    }}
                  >
                    <div className="panel-kicker mb-2">{label}</div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-sec)' }}>
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
                <div
                  className="surface-panel-block-lg hero-frosted-block rounded-[1.55rem]"
                  style={{
                    background: 'rgba(0,0,0,0.72)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="panel-kicker mb-4">What I build</div>
                  <div className="surface-section-stack">
                    {buildSignals.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.44, delay: 0.28 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="border-b pb-3 last:border-b-0 last:pb-0"
                        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                      >
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-sec)' }}>
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div
                  className="surface-panel-block-lg hero-frosted-block rounded-[1.55rem]"
                  style={{
                    background: 'rgba(0,0,0,0.7)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="panel-kicker">Execution example</div>
                    <div className="meta-chip-soft text-[0.66rem] font-semibold">
                      One strong proof
                    </div>
                  </div>
                  <div className="text-lg font-semibold mb-2.5" style={{ color: 'var(--text)' }}>
                    Indian SME Engine
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-sec)' }}>
                    A WhatsApp-first AI lead workflow for small businesses, built to handle intake,
                    business answers, and clean handoff in one working product.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {flagshipSignals.map((item) => (
                      <span key={item} className="meta-chip-soft text-[0.72rem] font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    It is the project to inspect if you want proof of backend, AI, and automation
                    execution in one build.
                  </p>
                </div>
              </div>
            </div>
          </MouseParallaxPanel>
        </motion.div>
      </div>
    </section>
  );
}
