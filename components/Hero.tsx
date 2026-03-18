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

const introMarkers = [
  'Operator tooling',
  'Backend engineering',
  'Workflow automation',
];

const introProfile = [
  {
    label: 'Current role',
    value: 'Python Developer at DATARA',
  },
  {
    label: 'Experience',
    value: '5+ years across backend, product, and applied AI work',
  },
  {
    label: 'Current focus',
    value: 'Grounded AI systems, operator tooling, and workflow software',
  },
];

const operatingPrinciples = [
  {
    label: 'Signal first',
    detail: 'Qualify intent before software automates next steps.',
  },
  {
    label: 'Ground context',
    detail: 'Keep system behavior tied to business state and real knowledge.',
  },
  {
    label: 'Return control',
    detail: 'Hand back a usable summary, next action, and clear ownership.',
  },
];

const builderSignals = [
  'Backend and API depth',
  'Workflow-first system design',
  'Operator-facing product execution',
];

const systemCards = [
  {
    title: 'Signal capture',
    detail: 'Gather intent before humans spend effort.',
    position: 'left-[6%] top-[18%] xl:left-[8%] xl:top-[20%]',
  },
  {
    title: 'Grounding',
    detail: 'Keep system behavior tied to real context.',
    position: 'right-[6%] top-[18%] xl:right-[8%] xl:top-[20%]',
  },
  {
    title: 'Operator handoff',
    detail: 'Return context, next actions, and clear ownership.',
    position: 'left-1/2 bottom-[24%] -translate-x-1/2 xl:bottom-[27%]',
  },
];

const systemNodes = [
  { left: '18%', top: '28%' },
  { left: '34%', top: '44%' },
  { left: '50%', top: '34%' },
  { left: '66%', top: '44%' },
  { left: '82%', top: '28%' },
  { left: '50%', top: '64%' },
];

const systemPaths = [
  'M 18 28 C 26 28, 30 36, 34 44',
  'M 34 44 C 40 40, 44 36, 50 34',
  'M 50 34 C 56 36, 60 40, 66 44',
  'M 66 44 C 70 36, 74 28, 82 28',
  'M 34 44 C 38 54, 44 62, 50 64',
  'M 66 44 C 62 54, 56 62, 50 64',
];

const statusRows = [
  'input.signal -> qualified / structured',
  'knowledge.state -> grounded / versioned',
  'handoff.operator -> brief / next step',
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

            <motion.div
              custom={0.08}
              variants={revealUp}
              initial="hidden"
              animate="visible"
              className="hero-meta-copy text-[clamp(1.02rem,1.45vw,1.22rem)] font-medium leading-relaxed"
              style={{ color: 'var(--text-sec)' }}
            >
              Software engineer focused on backend products, workflow automation, and
              operator-facing software.
            </motion.div>

            <motion.div
              custom={0.14}
              variants={revealUp}
              initial="hidden"
              animate="visible"
              className="hero-meta-strip flex flex-wrap justify-center items-center text-[0.72rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: 'var(--text-faint)' }}
            >
              {introMarkers.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-4">
                  {index > 0 ? (
                    <span
                      className="rounded-full"
                      style={{ width: 3, height: 3, background: 'rgba(255,255,255,0.22)' }}
                    />
                  ) : null}
                  <span>{item}</span>
                </span>
              ))}
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
            I care about systems where orchestration, backend architecture, operator context, and
            product clarity all have to work together instead of living as separate layers.
          </motion.p>

          <motion.div
            custom={0.42}
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
                onClick={() => scrollToId('skills')}
                className="button-primary text-sm font-semibold w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Core Capabilities
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
                See Flagship Project
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
                    Systems surface
                  </span>
                </div>

                <div className="meta-chip-soft text-[0.66rem] font-semibold">
                  Systems map
                </div>
              </div>
            </div>

            <div className="surface-shell-subheader border-b" style={{ borderColor: 'var(--border-sub)' }}>
              <div className="surface-profile-grid grid sm:grid-cols-3 sm:gap-0">
                {introProfile.map(({ label, value }, index) => (
                  <div
                    key={label}
                    className={`${index > 0 ? 'sm:border-l' : ''} surface-profile-cell text-center sm:text-left`}
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <div className="panel-kicker mb-1.5">{label}</div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-sec)' }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-shell-body surface-shell-grid grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.12fr)_minmax(0,0.9fr)] lg:items-start lg:gap-5">
              <div className="surface-shell-grid grid">
                <div
                  className="surface-panel-block-lg hero-frosted-block rounded-[1.55rem] card-hover"
                  style={{
                    background: 'rgba(0,0,0,0.72)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="panel-kicker mb-4">System priorities</div>
                  <div className="surface-section-stack">
                    {operatingPrinciples.map(({ label, detail }, index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.48, delay: 0.24 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="border-b pb-3 last:border-b-0 last:pb-0"
                        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                      >
                        <div className="text-sm font-semibold mb-1.5" style={{ color: 'var(--text)' }}>
                          {label}
                        </div>
                        <p className="text-[0.8rem] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {detail}
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
                  <div className="panel-kicker mb-3">Current direction</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-sec)' }}>
                    Building grounded workflow systems where backend logic, AI orchestration, and
                    operator experience stay connected instead of fragmenting into demos.
                  </p>
                </div>
              </div>

              <div className="surface-shell-grid grid">
                <div
                  className="hero-visual-panel hero-frosted-block rounded-[1.55rem] border p-[var(--surface-pad-body)] lg:hidden"
                  style={{
                    background: 'rgba(0,0,0,0.72)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="panel-kicker">Workflow flow</div>
                    <div className="text-[0.68rem] font-medium tracking-[0.08em]" style={{ color: 'var(--text-faint)' }}>
                      qualify → ground → hand off
                    </div>
                  </div>

                  <div className="surface-section-stack mt-4">
                    {systemCards.map(({ title, detail }, index) => (
                      <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          opacity: { duration: 0.5, delay: 0.24 + index * 0.08 },
                          y: { duration: 0.5, delay: 0.24 + index * 0.08, ease: [0.22, 1, 0.36, 1] },
                        }}
                        className="hero-system-module rounded-[1.2rem] px-4 py-3.5"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <div
                          className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] mb-1.5"
                          style={{ color: 'var(--text-ghost)' }}
                        >
                          Module 0{index + 1}
                        </div>
                        <div className="text-sm font-semibold mb-1.5" style={{ color: 'var(--text)' }}>
                          {title}
                        </div>
                        <p className="text-[0.78rem] leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div
                  className="hero-visual-panel hero-frosted-block relative hidden min-h-[25rem] rounded-[1.7rem] border lg:block"
                  style={{
                    background: 'rgba(0,0,0,0.72)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 grid-bg opacity-[0.08]" />
                    <motion.div
                      className="absolute inset-x-[14%] top-[34%] h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)' }}
                      animate={reduceMotion ? undefined : { opacity: [0.16, 0.42, 0.16] }}
                      transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="absolute left-1/2 top-[18%] bottom-[20%] w-px -translate-x-1/2"
                      style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.14), transparent)' }}
                      animate={reduceMotion ? undefined : { opacity: [0.12, 0.28, 0.12] }}
                      transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>

                  <div className="absolute left-[var(--surface-pad-x)] right-[var(--surface-pad-x)] top-[var(--surface-pad-body)] flex items-center justify-between gap-3">
                    <div className="panel-kicker">Workflow map</div>
                    <div className="text-[0.72rem] font-medium tracking-[0.08em]" style={{ color: 'var(--text-faint)' }}>
                      qualify → ground → hand off
                    </div>
                  </div>

                  <svg viewBox="0 0 100 100" className="absolute inset-[16%_10%_18%_10%] h-auto w-auto">
                    {systemPaths.map((path, index) => (
                      <motion.path
                        key={path}
                        d={path}
                        fill="none"
                        stroke="rgba(255,255,255,0.24)"
                        strokeWidth="0.7"
                        strokeLinecap="round"
                        strokeDasharray="2.8 5.6"
                        animate={reduceMotion ? undefined : { strokeDashoffset: [0, -22] }}
                        transition={{ duration: 5 + index * 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                    ))}
                  </svg>

                  {systemNodes.map((node, index) => (
                    <div
                      key={`${node.left}-${node.top}`}
                      className="absolute"
                      style={{ left: node.left, top: node.top, transform: 'translate(-50%, -50%)' }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: 'rgba(255,255,255,0.14)' }}
                        animate={reduceMotion ? undefined : { scale: [1, 1.65, 1.65], opacity: [0.32, 0, 0] }}
                        transition={{
                          duration: 2.6 + index * 0.16,
                          repeat: Infinity,
                          delay: index * 0.14,
                          ease: 'easeOut',
                        }}
                      />
                      <div
                        className="relative z-10 h-3 w-3 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.84)', boxShadow: '0 0 0 5px rgba(255,255,255,0.03)' }}
                      />
                    </div>
                  ))}

                  {systemCards.map(({ title, detail, position }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        opacity: { duration: 0.55, delay: 0.24 + index * 0.08 },
                        y: { duration: 0.55, delay: 0.24 + index * 0.08, ease: [0.22, 1, 0.36, 1] },
                      }}
                      className={`hero-system-module absolute ${position} w-[10rem] xl:w-[10.75rem] rounded-[1.2rem] px-3.5 py-3`}
                      style={{
                        background: 'rgba(0,0,0,0.76)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div
                        className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] mb-1.5"
                        style={{ color: 'var(--text-ghost)' }}
                      >
                        Module 0{index + 1}
                      </div>
                      <div className="text-sm font-semibold mb-1.5" style={{ color: 'var(--text)' }}>
                        {title}
                      </div>
                      <p className="text-[0.74rem] leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                        {detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="surface-shell-grid grid">
                <div
                  className="surface-panel-block-lg hero-frosted-block rounded-[1.55rem]"
                  style={{
                    background: 'rgba(0,0,0,0.72)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="panel-kicker">Running state</div>
                    <div className="meta-chip-soft text-[0.66rem] font-semibold">Live logic</div>
                  </div>
                  <div className="space-y-2">
                    {statusRows.map((row, index) => (
                      <motion.div
                        key={row}
                        animate={reduceMotion ? { opacity: 1 } : { opacity: [0.82, 1, 0.82] }}
                        transition={{
                          duration: 5.2 + index * 0.35,
                          repeat: Infinity,
                          delay: index * 0.24,
                          ease: 'easeInOut',
                        }}
                        className="rounded-[1rem] px-3 py-2 text-[0.72rem] font-mono"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          color: 'var(--text-sec)',
                        }}
                      >
                        {row}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div
                  className="surface-panel-block-lg hero-frosted-block rounded-[1.55rem] card-hover"
                  style={{
                    background: 'rgba(0,0,0,0.7)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="panel-kicker mb-3">Builder profile</div>
                  <div className="space-y-3">
                    {builderSignals.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.34 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-sec)' }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MouseParallaxPanel>
        </motion.div>
      </div>
    </section>
  );
}
