'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import {
  portfolioProjects,
  type PortfolioProject,
  type PortfolioSubproject,
} from '@/lib/portfolioProjects';

type DetailTab = 'overview' | 'proof' | 'stack' | 'apps';

const preferredProject =
  portfolioProjects.find((project) => project.slug === 'ai-apps-portfolio') ?? portfolioProjects[0];

const orderedProjects = [
  preferredProject,
  ...portfolioProjects.filter((project) => project.slug !== preferredProject.slug),
];

const statusLabel: Record<PortfolioProject['status'], string> = {
  live: 'Live',
  active: 'Active',
  complete: 'Complete',
};

function SurfaceBadge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'accent';
}) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]"
      style={
        tone === 'accent'
          ? {
              color: 'var(--accent)',
              background: 'var(--accent-dim)',
              border: '1px solid var(--accent-border)',
            }
          : {
              color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.74)',
              border: '1px solid var(--border)',
            }
      }
    >
      {children}
    </span>
  );
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-3 py-1.5 text-xs font-medium transition-all"
      style={{
        color: active ? 'var(--accent)' : 'var(--text-muted)',
        background: active ? 'var(--accent-dim)' : 'rgba(255,255,255,0.68)',
        border: active ? '1px solid var(--accent-border)' : '1px solid var(--border)',
      }}
    >
      {label}
    </button>
  );
}

function GitHubLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:opacity-85"
      style={{
        borderColor: 'var(--border-accent)',
        color: 'var(--text)',
        background: 'rgba(255,255,255,0.84)',
      }}
    >
      View repository
      <ArrowUpRight size={15} style={{ color: 'var(--accent)' }} />
    </a>
  );
}

function SelectorCard({
  index,
  project,
  active,
  onSelect,
}: {
  index: number;
  project: PortfolioProject;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
      whileHover={{ y: -3 }}
      className="group rounded-[1.7rem] border p-4 text-left transition-all"
      style={{
        borderColor: active ? 'var(--accent-border)' : 'var(--border)',
        background: active
          ? 'linear-gradient(180deg, rgba(0,200,150,0.11), rgba(255,255,255,0.92))'
          : 'linear-gradient(180deg, rgba(255,255,255,0.74), rgba(252,252,252,0.82))',
        boxShadow: active ? '0 18px 36px rgba(0,200,150,0.08)' : 'none',
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em]" style={{ color: active ? 'var(--accent)' : 'var(--text-faint)' }}>
            {String(index + 1).padStart(2, '0')}
          </p>
          <p className="mt-2 text-lg font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
            {project.name}
          </p>
          <p className="mt-2 text-sm leading-6" style={{ color: 'var(--text-muted)' }}>
            {project.category} · {project.year}
          </p>
        </div>

        <div
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all"
          style={{
            borderColor: active ? 'var(--accent-border)' : 'var(--border)',
            color: active ? 'var(--accent)' : 'var(--text-muted)',
            background: 'rgba(255,255,255,0.78)',
          }}
        >
          <ChevronRight size={16} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.proofPoints?.slice(0, 2).map((point) => (
          <SurfaceBadge key={`${project.slug}-${point}`}>{point}</SurfaceBadge>
        ))}
      </div>
    </motion.button>
  );
}

function AppChip({
  subproject,
  active,
  onSelect,
}: {
  subproject: PortfolioSubproject;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
      className="rounded-[1.25rem] border px-4 py-3 text-left transition-all"
      style={{
        borderColor: active ? 'var(--accent-border)' : 'var(--border)',
        background: active ? 'rgba(0,200,150,0.08)' : 'rgba(255,255,255,0.68)',
      }}
    >
      <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
        {subproject.name}
      </p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
        {subproject.pattern}
      </p>
    </button>
  );
}

export default function ProjectsShowcase() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(preferredProject.slug);
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const [activeAppName, setActiveAppName] = useState(preferredProject.subprojects?.[0]?.name ?? '');

  const activeProject =
    orderedProjects.find((project) => project.slug === activeProjectSlug) ?? preferredProject;

  const activeSubproject =
    activeProject.subprojects?.find((subproject) => subproject.name === activeAppName) ??
    activeProject.subprojects?.[0];

  const tabs: Array<{ id: DetailTab; label: string }> = [
    { id: 'overview', label: 'Overview' },
    { id: 'proof', label: activeProject.type === 'collection' ? 'Strengths' : 'Highlights' },
    { id: 'stack', label: 'Stack' },
    ...(activeProject.subprojects?.length ? [{ id: 'apps' as const, label: 'App showcase' }] : []),
  ];

  const handleProjectChange = (project: PortfolioProject) => {
    if (project.slug === activeProject.slug) return;
    setActiveProjectSlug(project.slug);
    setActiveTab('overview');
    setActiveAppName(project.subprojects?.[0]?.name ?? '');
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t px-4 py-20 sm:py-24"
      style={{
        borderColor: 'var(--border)',
        background: `
          radial-gradient(circle at 12% 16%, rgba(0,200,150,0.1), transparent 20%),
          radial-gradient(circle at 86% 10%, rgba(0,200,150,0.08), transparent 18%),
          linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.68) 14%, rgba(250,250,250,0.9) 42%, rgba(255,255,255,0.98) 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]"
            style={{ borderColor: 'var(--border)', color: 'var(--text-faint)', background: 'rgba(255,255,255,0.72)' }}
          >
            <BriefcaseBusiness size={14} style={{ color: 'var(--accent)' }} />
            Featured projects
          </div>

          <h2
            className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
          >
            Move through the work, don&apos;t just scroll it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--text-muted)' }}>
            This section is meant to feel more like an interactive studio wall: hover through the projects, let the focus
            shift, and inspect the part you care about without getting hit by everything at once.
          </p>
        </div>

        <div
          className="mt-12 rounded-[2.6rem] border p-4 sm:p-6"
          style={{
            borderColor: 'rgba(255,255,255,0.44)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.58), rgba(255,255,255,0.82))',
            boxShadow: '0 22px 70px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.45)',
            backdropFilter: 'blur(18px)',
          }}
        >
          <div className="grid gap-5 xl:grid-cols-[0.4fr_0.6fr]">
            <div className="space-y-4">
              <div
                className="rounded-[1.9rem] border p-5"
                style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.62)' }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--text-faint)' }}>
                  Browse mode
                </p>
                <p className="mt-2 text-sm leading-6" style={{ color: 'var(--text-muted)' }}>
                  Hover a card to shift the spotlight. The right panel animates between systems, and the AI apps collection has its own internal showcase.
                </p>
              </div>

              <div className="grid gap-3">
                {orderedProjects.map((project, index) => (
                  <SelectorCard
                    key={project.slug}
                    index={index}
                    project={project}
                    active={project.slug === activeProject.slug}
                    onSelect={() => handleProjectChange(project)}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.slug}
                initial={{ opacity: 0, y: 20, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.985 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="rounded-[2.1rem] border p-5 sm:p-6"
                style={{
                  borderColor: 'var(--border)',
                  background: `
                    radial-gradient(circle at 88% 12%, rgba(0,200,150,0.1), transparent 18%),
                    linear-gradient(180deg, rgba(255,255,255,0.94), rgba(248,248,248,0.96))
                  `,
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <SurfaceBadge tone="accent">{activeProject.category}</SurfaceBadge>
                      <SurfaceBadge>{statusLabel[activeProject.status]}</SurfaceBadge>
                      <span className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                        {activeProject.year}
                      </span>
                    </div>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-[2.3rem]" style={{ color: 'var(--text)' }}>
                      {activeProject.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: 'var(--text-muted)' }}>
                      {activeProject.role}
                    </p>
                  </div>

                  <GitHubLink href={activeProject.github} />
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--text-sec)' }}>
                      {activeProject.description}
                    </p>
                    <p className="mt-4 text-sm leading-7" style={{ color: 'var(--text)' }}>
                      {activeProject.impact}
                    </p>
                  </div>

                  <div
                    className="rounded-[1.6rem] border p-4"
                    style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.66)' }}
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--text-faint)' }}>
                      At a glance
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeProject.proofPoints?.map((point) => (
                        <SurfaceBadge key={`${activeProject.slug}-${point}`}>{point}</SurfaceBadge>
                      ))}
                      {activeProject.subprojects?.length ? (
                        <SurfaceBadge tone="accent">{activeProject.subprojects.length} focused apps</SurfaceBadge>
                      ) : null}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.2rem] border px-3 py-3" style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.62)' }}>
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                          Best fit
                        </p>
                        <p className="mt-2 text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                          {activeProject.type === 'collection' ? 'Breadth in applied AI patterns' : 'Depth in workflow and system execution'}
                        </p>
                      </div>
                      <div className="rounded-[1.2rem] border px-3 py-3" style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.62)' }}>
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                          Focus
                        </p>
                        <p className="mt-2 text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                          {activeProject.proofPoints?.[0] ?? activeProject.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tabs.map((tab) => (
                    <TabButton
                      key={tab.id}
                      label={tab.label}
                      active={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeProject.slug}-${activeTab}-${activeSubproject?.name ?? 'none'}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="mt-5 rounded-[1.8rem] border p-4 sm:p-5"
                    style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.72)' }}
                  >
                    {activeTab === 'overview' ? (
                      <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                            Project story
                          </p>
                          <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-sec)' }}>
                            {activeProject.impact}
                          </p>
                        </div>

                        <div
                          className="rounded-[1.4rem] border p-4"
                          style={{ borderColor: 'var(--border)', background: 'linear-gradient(180deg, rgba(255,255,255,0.72), rgba(248,248,248,0.88))' }}
                        >
                          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                            First things to notice
                          </p>
                          <div className="mt-3 space-y-3">
                            {activeProject.features.slice(0, 3).map((feature) => (
                              <div key={feature} className="flex items-start gap-3">
                                <div
                                  className="mt-1 h-2.5 w-2.5 rounded-full"
                                  style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(0,200,150,0.08)' }}
                                />
                                <p className="text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                                  {feature}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {activeTab === 'proof' ? (
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                          {activeProject.type === 'collection' ? 'Collection strengths' : 'Highlights'}
                        </p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {activeProject.features.map((feature, index) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.03 }}
                              className="rounded-[1.3rem] border p-4"
                              style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.64)' }}
                            >
                              <p className="text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>
                                {String(index + 1).padStart(2, '0')}
                              </p>
                              <p className="mt-3 text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                                {feature}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {activeTab === 'stack' ? (
                      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                            Stack
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {activeProject.stack.map((item) => (
                              <SurfaceBadge key={item}>{item}</SurfaceBadge>
                            ))}
                          </div>
                        </div>

                        <div
                          className="rounded-[1.4rem] border p-4"
                          style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.64)' }}
                        >
                          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                            Why this stack
                          </p>
                          <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-sec)' }}>
                            I optimize for readable architecture and dependable execution. The stack choices here reflect whether the project is proving backend workflow depth, interactive UX, or breadth across applied AI patterns.
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {activeTab === 'apps' && activeProject.subprojects?.length ? (
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                              App showcase
                            </p>
                            <p className="mt-2 text-sm leading-6" style={{ color: 'var(--text-muted)' }}>
                              Hover through the individual apps to see how each one isolates a specific LLM pattern.
                            </p>
                          </div>

                          <div
                            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
                            style={{ borderColor: 'var(--accent-border)', color: 'var(--accent)', background: 'var(--accent-dim)' }}
                          >
                            <Blocks size={14} />
                            Shared architecture
                          </div>
                        </div>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                          {activeProject.subprojects.map((subproject) => (
                            <AppChip
                              key={subproject.name}
                              subproject={subproject}
                              active={activeSubproject?.name === subproject.name}
                              onSelect={() => setActiveAppName(subproject.name)}
                            />
                          ))}
                        </div>

                        {activeSubproject ? (
                          <motion.div
                            key={activeSubproject.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-5 rounded-[1.55rem] border p-4 sm:p-5"
                            style={{
                              borderColor: 'var(--border)',
                              background: `
                                radial-gradient(circle at 86% 12%, rgba(0,200,150,0.08), transparent 18%),
                                linear-gradient(180deg, rgba(255,255,255,0.8), rgba(248,248,248,0.92))
                              `,
                            }}
                          >
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <p className="text-xl font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                                  {activeSubproject.name}
                                </p>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
                                  {activeSubproject.pattern}
                                </p>
                              </div>

                              <div
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border"
                                style={{ borderColor: 'var(--accent-border)', background: 'var(--accent-dim)' }}
                              >
                                <Sparkles size={16} style={{ color: 'var(--accent)' }} />
                              </div>
                            </div>

                            <div className="mt-5 grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
                              <div>
                                <p className="text-sm leading-7" style={{ color: 'var(--text-sec)' }}>
                                  {activeSubproject.summary}
                                </p>
                              </div>

                              <div
                                className="rounded-[1.3rem] border p-4"
                                style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.62)' }}
                              >
                                <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                                  Stack
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {activeSubproject.stack.map((item) => (
                                    <SurfaceBadge key={`${activeSubproject.name}-${item}`}>{item}</SurfaceBadge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ) : null}
                      </div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
