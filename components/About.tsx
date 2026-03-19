'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Workflow, Zap } from 'lucide-react';
import MouseParallaxPanel from '@/components/ui/MouseParallaxPanel';

const traits = [
  {
    icon: Cpu,
    label: 'AI-first builder',
    description:
      'Focused on LLM applications, agent systems, and production workflows that solve concrete business problems.',
  },
  {
    icon: Workflow,
    label: 'Workflow engineer',
    description:
      'Turning messy operations into structured software with clear handoffs, grounded answers, and operator control.',
  },
  {
    icon: Code2,
    label: 'Backend depth',
    description:
      'Python services, APIs, automation, and system design shaped by a full-stack engineering background.',
  },
  {
    icon: Zap,
    label: 'Product-minded',
    description:
      'I care about how systems behave in use, not just whether the model call works in isolation.',
  },
];

const operatingLanes = [
  {
    label: 'Qualify signal',
    description: 'Identify intent, urgency, and missing context before the workflow fans out.',
  },
  {
    label: 'Ground behavior',
    description: 'Keep decisions tied to real business state, knowledge, and constraints.',
  },
  {
    label: 'Preserve handoff',
    description: 'Return usable context, next actions, and clear ownership to the operator.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-shell section-shell-tight">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="section-container section-container-scene section-frame">
        <div className="section-intro section-intro-scene">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="eyebrow justify-center"
          >
            How I build
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="section-title section-title-lockup section-title-support section-block-sm"
            style={{ color: 'var(--text)' }}
          >
            <span className="section-title-line">Current focus, operating model,</span>
            <span className="section-title-line" style={{ color: 'var(--text-sec)' }}>
              and system priorities.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="section-copy section-block-sm space-y-4"
            style={{ color: 'var(--text-sec)' }}
          >
            <p>
              I&apos;m currently a Python Developer at DATARA, building toward grounded AI systems,
              backend workflows, and operator-facing software that can hold up in real operations.
            </p>
            <p>
              The operating model is straightforward: qualify signal early, ground behavior in real
              context, preserve clean human handoff, and ship software that behaves predictably
              instead of feeling like a demo.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.78, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="scene-surface-wide mx-auto"
        >
          <MouseParallaxPanel
            className="surface-panel spotlight-panel rounded-[2.3rem] overflow-hidden border"
            intensity={3}
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="border-b px-5 py-4" style={{ borderColor: 'var(--border-sub)' }}>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="panel-kicker">Operating model</div>
                <div className="meta-chip-soft text-[0.66rem] font-semibold">
                  Current focus
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-7">
              <div
                className="rounded-[1.9rem] px-5 py-5 sm:px-7 sm:py-6"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="grid gap-3 lg:grid-cols-3">
                  {operatingLanes.map(({ label, description }) => (
                    <div
                      key={label}
                      className="rounded-[1.3rem] px-4 py-4 text-left"
                      style={{
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div className="panel-kicker mb-2">Operating lane</div>
                      <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>
                        {label}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mt-5 overflow-hidden rounded-[1.9rem] border"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div
                  className="grid gap-px sm:grid-cols-2 xl:grid-cols-4"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  {traits.map(({ icon: Icon, label, description }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.52, delay: 0.3 + index * 0.07 }}
                      className="card-hover p-5 sm:p-6 text-left"
                      style={{ background: 'rgba(0,0,0,0.74)' }}
                    >
                      <div className="panel-icon mb-4">
                        <Icon style={{ width: 18, height: 18, color: 'var(--text-faint)' }} />
                      </div>
                      <div
                        className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] mb-2"
                        style={{ color: 'var(--text-ghost)' }}
                      >
                        0{index + 1}
                      </div>
                      <h3 className="text-base font-semibold mb-2.5" style={{ color: 'var(--text)' }}>
                        {label}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </MouseParallaxPanel>
        </motion.div>
      </div>
    </section>
  );
}
