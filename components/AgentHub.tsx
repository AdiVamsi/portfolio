'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, BookOpen, Calendar, HelpCircle, MessageSquare, Search, Users, Workflow } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/SocialIcons';
import MouseParallaxPanel from '@/components/ui/MouseParallaxPanel';

type AgentStatus = 'live' | 'in-progress' | 'coming-soon';

interface AgentCard {
  icon: React.ElementType;
  title: string;
  description: string;
  status: AgentStatus;
  tags: string[];
}

const agents: AgentCard[] = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Lead Qualification Agent',
    description:
      'Captures inbound WhatsApp leads, classifies intent, asks structured follow-up questions, and prepares a scored lead summary for human review.',
    status: 'live',
    tags: ['LangGraph', 'WhatsApp API', 'FastAPI', 'PostgreSQL'],
  },
  {
    icon: HelpCircle,
    title: 'Grounded FAQ Answering Agent',
    description:
      'Answers business-specific questions using RAG over structured knowledge such as product catalog, pricing, FAQs, and policies.',
    status: 'live',
    tags: ['LangChain', 'RAG', 'OpenAI', 'Vector DB'],
  },
  {
    icon: Calendar,
    title: 'Callback Scheduling Workflow',
    description:
      'Collects callback preferences, time slots, and contact details through structured AI conversation and routes them to the dashboard.',
    status: 'live',
    tags: ['LangGraph', 'Python', 'PostgreSQL'],
  },
  {
    icon: Users,
    title: 'Operator Handoff Workflow',
    description:
      'Packages qualified conversations into operator briefings with intent summary, follow-up answers, lead score, and recommended next action.',
    status: 'in-progress',
    tags: ['LangChain', 'Next.js', 'FastAPI'],
  },
  {
    icon: BookOpen,
    title: 'Business Knowledge Preview Workflow',
    description:
      'Lets business owners upload, preview, and validate the knowledge base that grounds AI responses before it goes live.',
    status: 'in-progress',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'S3'],
  },
  {
    icon: Search,
    title: 'Auto Research Agent',
    description:
      'Investigates business context, competitor signals, and market details to pre-populate working context for a new deployment.',
    status: 'coming-soon',
    tags: ['LangGraph', 'Web Search', 'OpenAI'],
  },
];

const catalogTracks = [
  {
    label: 'Live inside flagship',
    note: 'Modules already proven in the current working product.',
    items: ['Lead qualification', 'Grounded answering', 'Callback scheduling'],
  },
  {
    label: 'Currently building',
    note: 'Workflows being shaped into clearer, reusable boundaries.',
    items: ['Operator handoff', 'Knowledge preview'],
  },
  {
    label: 'Mapped next',
    note: 'Future narrow systems once they are ready to stand alone.',
    items: ['Auto research'],
  },
];

const statusConfig: Record<
  AgentStatus,
  { label: string; className: string; dot: string; footer: string }
> = {
  live: {
    label: 'Live in flagship',
    className: 'badge-live',
    dot: 'rgba(255,255,255,0.84)',
    footer: 'Currently expressed inside Indian SME Engine, not yet split into a standalone repo.',
  },
  'in-progress': {
    label: 'In buildout',
    className: 'badge-progress',
    dot: 'rgba(255,255,255,0.58)',
    footer: 'Under active development and being shaped into a clearer system boundary.',
  },
  'coming-soon': {
    label: 'Planned',
    className: 'badge-soon',
    dot: 'rgba(255,255,255,0.34)',
    footer: 'Mapped for future publication once the workflow is mature enough to stand alone.',
  },
};

export default function AgentHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="agent-hub" className="section-shell section-shell-tight">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="section-container">
        <div className="section-intro">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="eyebrow justify-center"
          >
            Agent Hub
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="section-title section-title-lockup section-title-support section-block-sm"
            style={{ color: 'var(--text)' }}
          >
            <span className="section-title-line">Agent Hub,</span>
            <span className="section-title-line" style={{ color: 'var(--text-sec)' }}>
              an evolving systems catalog.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.16 }}
            className="section-copy section-block-sm"
          >
            This is the roadmap layer around the flagship build: narrower workflow systems that grow
            from the same core skills in orchestration, backend implementation, grounded behavior,
            and operator-facing product design.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.66, delay: 0.24 }}
          className="section-block-md grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: 'Mapped workflows', value: '06' },
            { label: 'Live in flagship', value: '03' },
            { label: 'Public repos today', value: '01' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="surface-card rounded-[1.6rem] p-4 sm:p-5 text-center"
            >
              <div className="text-2xl font-semibold tracking-tight mb-2" style={{ color: 'var(--text)' }}>
                {value}
              </div>
              <div className="text-[0.72rem] font-medium" style={{ color: 'var(--text-faint)' }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

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
                <div
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: 'var(--text-faint)' }}
                >
                  Builder roadmap
                </div>
                <div className="meta-chip-soft text-[0.66rem] font-semibold">
                  <Workflow size={13} />
                  Publication path
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="space-y-3">
                {catalogTracks.map(({ label, note, items }, laneIndex) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.48, delay: 0.34 + laneIndex * 0.08 }}
                    className="rounded-[1.45rem] p-4 sm:p-5"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                          {label}
                        </div>
                        <div className="text-xs mt-1" style={{ color: 'var(--text-faint)' }}>
                          {note}
                        </div>
                      </div>
                      <div
                        className="text-[0.66rem] font-semibold uppercase tracking-[0.22em]"
                        style={{ color: 'var(--text-ghost)' }}
                      >
                        0{laneIndex + 1}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {items.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 8 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.42 + laneIndex * 0.08 + itemIndex * 0.03, ease: [0.22, 1, 0.36, 1] }}
                          className="rounded-full px-3.5 py-2 text-[0.74rem] font-medium"
                          style={{
                            background: 'rgba(255,255,255,0.045)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'var(--text-sec)',
                          }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </MouseParallaxPanel>
        </motion.div>

        <div className="section-block-md grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {agents.map((agent, index) => {
            const status = statusConfig[agent.status];
            const Icon = agent.icon;

            return (
              <motion.article
                key={agent.title}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.52, delay: 0.42 + index * 0.06 }}
                className="surface-card card-hover rounded-[1.8rem] p-5 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="panel-icon">
                    <Icon style={{ width: 18, height: 18, color: 'var(--text-faint)' }} />
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.7rem] font-semibold ${status.className}`}>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${agent.status === 'live' ? 'pulse-soft' : ''}`}
                        style={{ background: status.dot }}
                      />
                      {status.label}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-snug mb-3" style={{ color: 'var(--text)' }}>
                    {agent.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                    {agent.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {agent.tags.map((tag) => (
                      <span key={tag} className="meta-chip-soft text-[0.72rem] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-6 pt-4"
                  style={{ borderTop: '1px solid var(--border-sub)' }}
                >
                  <span className="text-[0.76rem] leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                    {status.footer}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.68 }}
          className="section-block-md surface-card rounded-[1.9rem] p-5 sm:p-6 text-center max-w-4xl mx-auto"
        >
          <p className="text-sm sm:text-base leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-sec)' }}>
            Future workflow repositories will appear only when they are built cleanly enough to stand
            on their own. Until then, the flagship repository remains the public foundation and this
            catalog stays honest about what is live, in buildout, or still planned.
          </p>

          <div className="section-actions mt-6">
            <a
              href="https://github.com/AdiVamsi/indian-sme-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary text-sm font-semibold w-full sm:w-auto"
            >
              <GitHubIcon style={{ width: 14, height: 14 }} />
              Flagship Repository
            </a>
            <a
              href="https://github.com/AdiVamsi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link text-sm font-medium"
            >
              Current GitHub Profile
              <ArrowUpRight size={13} className="inline-link__icon" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
