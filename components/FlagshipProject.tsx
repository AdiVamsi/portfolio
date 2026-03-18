'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Database,
  LayoutDashboard,
  MessageCircle,
  MessageSquare,
  Phone,
} from 'lucide-react';
import MouseParallaxPanel from '@/components/ui/MouseParallaxPanel';
import { scrollToId } from '@/lib/scroll';

const systemLayers = [
  {
    title: 'Capture across website and WhatsApp',
    description:
      'Every inquiry enters one operating pipeline instead of scattering across disconnected inboxes and ad hoc chat threads.',
  },
  {
    title: 'Qualify intent before humans step in',
    description:
      'The workflow asks for missing context, scores quality, and filters the lead before anyone spends manual effort.',
  },
  {
    title: 'Answer with grounded business context',
    description:
      'Replies pull from actual business knowledge such as pricing, FAQs, and policies instead of relying on generic model guesswork.',
  },
  {
    title: 'Hand operators a usable brief',
    description:
      'The operator sees a concise summary, callback needs, and next-action guidance rather than raw chat history.',
  },
];

const features = [
  {
    icon: MessageSquare,
    title: 'Dual-channel lead capture',
    description: 'Website forms and WhatsApp flows feed the same intake system, preserving context from the first touchpoint.',
  },
  {
    icon: Brain,
    title: 'Qualification engine',
    description: 'Intent scoring, structured follow-up, and lead triage happen before operator review.',
  },
  {
    icon: BookOpen,
    title: 'Grounded business answers',
    description: 'LLM output stays constrained by business knowledge, catalog context, pricing, and FAQs.',
  },
  {
    icon: Phone,
    title: 'Callback workflow',
    description: 'Callback requests keep preferred timing, summary context, and status so handoff stays operationally useful.',
  },
  {
    icon: LayoutDashboard,
    title: 'Operator dashboard',
    description: 'A clean internal workspace for qualified leads, context summaries, follow-up actions, and review history.',
  },
  {
    icon: MessageCircle,
    title: 'Business-specific behavior',
    description: 'Prompts, escalation rules, and reply tone adapt to the business rather than acting like a generic chatbot.',
  },
  {
    icon: Database,
    title: 'Knowledge management',
    description: 'Business data can be updated and versioned so grounded answers keep pace with real changes.',
  },
];

const dashboardStats = [
  { label: 'Inbound today', value: '14' },
  { label: 'Qualified', value: '08' },
  { label: 'Callbacks queued', value: '05' },
];

const leadRows = [
  { name: 'Rajesh K.', intent: 'Product inquiry', status: 'Ready for callback', strength: 92 },
  { name: 'Priya M.', intent: 'Pricing question', status: 'Needs follow-up', strength: 78 },
  { name: 'Anil S.', intent: 'Callback request', status: 'Operator assigned', strength: 85 },
];

const featureHighlights = [features[0], features[2], features[4]];

export default function FlagshipProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  return (
    <section id="flagship" className="section-shell section-shell-open">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="section-container">
        <div className="section-intro">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="eyebrow justify-center"
          >
            Current Flagship
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="section-title section-title-lockup section-block-sm text-[clamp(2.65rem,5vw,4.05rem)]"
            style={{ color: 'var(--text)' }}
          >
            <span className="section-title-line">Indian SME Engine,</span>
            <span className="section-title-line" style={{ color: 'var(--text-sec)' }}>
              one current proof of execution.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.16 }}
            className="section-copy section-block-sm"
          >
            This is one strong proof of execution in the broader portfolio: a WhatsApp-first AI
            workflow system for small businesses that demonstrates workflow design, backend
            systems, grounding, and operator-focused product thinking in one build.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="section-block-md max-w-5xl mx-auto"
        >
          <MouseParallaxPanel
            className="surface-panel spotlight-panel rounded-[2.2rem] overflow-hidden border"
            intensity={4}
            style={{ borderColor: 'rgba(255,255,255,0.09)' }}
          >
            <div className="border-b px-5 py-4" style={{ borderColor: 'var(--border-sub)' }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="panel-kicker" style={{ color: 'var(--text-faint)' }}>
                    Flagship case study
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    Public repository · WhatsApp-first lead workflow
                  </div>
                </div>

                <span className="badge-live flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold">
                  <span
                    className="w-1.5 h-1.5 rounded-full pulse-soft"
                    style={{ background: 'rgba(255,255,255,0.84)' }}
                  />
                  Repository live
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {dashboardStats.map(({ label, value }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.46, delay: 0.26 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[1.3rem] p-4 text-center"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] mb-2"
                      style={{ color: 'var(--text-ghost)' }}
                    >
                      {label}
                    </div>
                    <div className="text-2xl font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                      {value}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-5 items-stretch">
                <div className="space-y-4">
                  {systemLayers.map(({ title, description }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: -14 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.46, delay: 0.34 + index * 0.08 }}
                      className="rounded-[1.45rem] p-5"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div
                        className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] mb-2"
                        style={{ color: 'var(--text-ghost)' }}
                      >
                        0{index + 1}
                      </div>
                      <h3 className="text-base font-semibold mb-2.5" style={{ color: 'var(--text)' }}>
                        {title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="rounded-[1.7rem] p-5"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.028), rgba(255,255,255,0.012))',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div>
                      <div
                        className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]"
                        style={{ color: 'var(--text-ghost)' }}
                      >
                        Operator dashboard preview
                      </div>
                      <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                        Grounded lead handling and human review
                      </div>
                    </div>
                    <div className="meta-chip-soft text-[0.66rem] font-semibold">Preview</div>
                  </div>

                  <div className="space-y-3">
                    {leadRows.map(({ name, intent, status, strength }, index) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.46, delay: 0.46 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-[1.2rem] p-4"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                              {name}
                            </div>
                            <div className="text-[0.74rem]" style={{ color: 'var(--text-faint)' }}>
                              {intent}
                            </div>
                          </div>
                          <div
                            className="px-2.5 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-[0.18em]"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.06)',
                              color: 'var(--text-faint)',
                            }}
                          >
                            {status}
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span
                            className="text-[0.68rem] font-semibold uppercase tracking-[0.18em]"
                            style={{ color: 'var(--text-ghost)' }}
                          >
                            lead score
                          </span>
                          <span className="text-xs font-semibold" style={{ color: 'var(--text-sec)' }}>
                            {strength}/100
                          </span>
                        </div>
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ background: 'rgba(255,255,255,0.07)' }}
                        >
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: strength / 100 } : { scaleX: 0 }}
                            transition={{
                              duration: reduceMotion ? 0 : 0.85,
                              delay: 0.52 + index * 0.1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full origin-left"
                            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.72))' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MouseParallaxPanel>
        </motion.div>

        <div className="section-block-md grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {featureHighlights.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.4 + index * 0.06 }}
              className="surface-card card-hover rounded-[1.6rem] p-5 sm:p-6"
            >
              <div className="panel-icon panel-icon-sm mb-4">
                <Icon size={17} style={{ color: 'var(--text-faint)' }} />
              </div>
              <h3 className="text-base font-semibold mb-2.5" style={{ color: 'var(--text)' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="section-block-md section-actions"
        >
          <a
            href="https://github.com/AdiVamsi/indian-sme-engine"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary text-sm font-semibold w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Repository
              <ArrowUpRight size={14} />
            </span>
          </a>
          <button
            type="button"
            onClick={() => scrollToId('contact')}
            className="inline-link text-sm font-medium"
          >
            Discuss Similar Build
            <ArrowRight size={14} className="inline-link__icon" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
