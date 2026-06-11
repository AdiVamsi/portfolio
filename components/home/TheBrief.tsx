'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Signal, Cpu, MapPin, FileCheck } from 'lucide-react';

const experience = [
  {
    title: 'Python Developer',
    company: 'Capgemini',
    period: 'Jul 2024 – May 2026',
    current: true,
    focus: 'Python backend services, API integrations, LLM workflows, 20% processing speed improvement',
    stack: ['Python', 'REST APIs', 'LLM APIs'],
  },
  {
    title: 'Software Engineer',
    company: 'New Relic',
    period: 'Jun 2020 – Dec 2022',
    current: false,
    focus: 'Java/Spring Boot backend services for high-volume observability microservices',
    stack: ['Java', 'Spring Boot', 'Hibernate/JPA'],
  },
];

const education = [
  {
    degree: 'Master’s degree, Information Technology',
    school: 'Webster University',
    detail: 'San Antonio, TX · Grade: 3.6/4.0',
    year: 'Jan 2023 – May 2024',
  },
  {
    degree: 'Bachelor’s degree, Computer Science Engineering',
    school: 'GITAM Deemed University',
    detail: 'Hyderabad, India',
    year: 'Jun 2016 – Jun 2020',
  },
];

const skillGroups = [
  {
    label: 'Languages',
    color: '#00c896',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Backend & Data',
    color: '#a78bfa',
    skills: ['REST APIs', 'Microservices', 'FastAPI', 'Flask', 'Spring Boot', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Hibernate/JPA', 'WebSockets'],
  },
  {
    label: 'AI / LLM Engineering',
    color: '#fbbf24',
    skills: ['OpenAI API', 'Claude', 'Gemini', 'LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'AI Agents', 'Agentic Orchestration', 'Embeddings', 'Vector Search', 'ChromaDB', 'Ollama', 'PyTorch', 'Function/Tool Calling', 'Structured Outputs', 'Output Guardrails', 'Evaluation & Feedback Loops', 'LLM Fine-Tuning'],
  },
  {
    label: 'Developer Tools',
    color: '#60a5fa',
    skills: ['Cursor', 'Google Antigravity', 'Claude Code', 'Codex', 'Git', 'Docker', 'Linux', 'AWS', 'Streamlit', 'Agile/Scrum', 'CI/CD', 'Monitoring/Observability'],
  },
  {
    label: 'Certifications',
    color: '#00c896',
    skills: ['AWS Certified Cloud Practitioner', 'Oracle Certified Professional: Java SE 17 Developer'],
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function TheBrief() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="brief"
      ref={ref}
      className="relative overflow-hidden border-t px-4 py-20 sm:py-24"
      style={{
        borderColor: 'var(--border)',
        background: `
          radial-gradient(circle at 86% 18%, rgba(0,200,150,0.06), transparent 22%),
          radial-gradient(circle at 8% 82%, rgba(167,139,250,0.05), transparent 20%),
          linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(250,250,250,0.92) 50%, rgba(255,255,255,0.96) 100%)
        `,
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="mx-auto max-w-6xl"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]"
            style={{ borderColor: 'var(--border)', color: 'var(--text-faint)', background: 'rgba(255,255,255,0.72)' }}
          >
            <Signal size={14} style={{ color: 'var(--accent)' }} />
            The Brief
          </div>

          <h2
            className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
          >
            30 seconds. Zero scrolling.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--text-muted)' }}>
            Career, stack, and education at a glance. If you want the full story, the chat knows everything.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div variants={stagger} className="mt-12 grid gap-4 lg:grid-cols-3">
          {/* Column 1: Experience */}
          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border p-5 sm:p-6"
            style={{
              borderColor: 'var(--border)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,248,248,0.96))',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-[0.85rem]"
                style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent-border)' }}
              >
                <Briefcase size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--text-faint)' }}>
                Experience
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {experience.map((role, idx) => (
                <div key={role.company} className="relative pl-5">
                  {/* Timeline line — only between items, not after the last */}
                  {idx < experience.length - 1 && (
                    <div
                      className="absolute left-0 top-[6px] h-full w-px"
                      style={{ background: role.current ? 'var(--accent)' : 'var(--border)' }}
                    />
                  )}
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-3.5px] top-[6px] h-2 w-2 rounded-full"
                    style={{
                      background: role.current ? 'var(--accent)' : 'var(--text-faint)',
                      boxShadow: role.current ? '0 0 0 4px rgba(0,200,150,0.15)' : 'none',
                    }}
                  />

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                        {role.title}
                      </p>
                      <p className="mt-0.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                        {role.company}
                      </p>
                    </div>
                    {role.current && (
                      <span
                        className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                        style={{ color: 'var(--accent)', background: 'var(--accent-dim)', border: '1px solid var(--accent-border)' }}
                      >
                        <span className="dot-accent" style={{ width: '5px', height: '5px' }} />
                        Latest
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs" style={{ color: 'var(--text-faint)' }}>
                    {role.period}
                  </p>
                  <p className="mt-2 text-[13px] leading-6" style={{ color: 'var(--text-sec)' }}>
                    {role.focus}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {role.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                        style={{
                          color: 'var(--text-muted)',
                          background: 'rgba(255,255,255,0.72)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Status bar at bottom */}
            <div
              className="mt-6 rounded-[1.2rem] border p-3.5"
              style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.62)' }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={13} style={{ color: 'var(--accent)' }} />
                <p className="text-xs font-medium" style={{ color: 'var(--text-sec)' }}>
                  San Antonio, TX &middot; Remote-friendly
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <FileCheck size={13} style={{ color: 'var(--accent)' }} />
                <p className="text-xs font-medium" style={{ color: 'var(--text-sec)' }}>
                  Immediately available &middot; AI and backend roles
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Technical Stack */}
          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border p-5 sm:p-6"
            style={{
              borderColor: 'var(--border)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,248,248,0.96))',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-[0.85rem]"
                style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}
              >
                <Cpu size={18} style={{ color: '#a78bfa' }} />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--text-faint)' }}>
                Technical DNA
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p
                    className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: group.color }}
                  >
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="brief-skill-pill rounded-full px-3 py-1 text-[11px] font-medium transition-all"
                        style={{
                          color: 'var(--text-sec)',
                          background: 'rgba(255,255,255,0.72)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-[1.2rem] border p-3.5"
              style={{
                borderColor: 'var(--accent-border)',
                background: 'var(--accent-dim)',
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
                Role Focus
              </p>
              <p className="mt-1.5 text-xs leading-5" style={{ color: 'var(--text-sec)' }}>
                Python APIs &middot; LLM workflows &middot; automation &middot; backend reliability
              </p>
            </div>
          </motion.div>

          {/* Column 3: Education */}
          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border p-5 sm:p-6"
            style={{
              borderColor: 'var(--border)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,248,248,0.96))',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-[0.85rem]"
                style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}
              >
                <GraduationCap size={18} style={{ color: '#fbbf24' }} />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--text-faint)' }}>
                Education
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="rounded-[1.4rem] border p-4"
                  style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.62)' }}
                >
                  <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {edu.school}
                  </p>
                  {edu.detail && (
                    <p className="mt-1.5 text-xs font-medium" style={{ color: 'var(--accent)' }}>
                      {edu.detail}
                    </p>
                  )}
                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-faint)' }}>
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div
              className="mt-5 rounded-[1.4rem] border p-4"
              style={{
                borderColor: 'var(--border)',
                background: `
                  radial-gradient(circle at 88% 20%, rgba(0,200,150,0.08), transparent 40%),
                  rgba(255,255,255,0.62)
                `,
              }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--text-faint)' }}>
                By the numbers
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
                    4+
                  </p>
                  <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Years experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
                    7
                  </p>
                  <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Featured projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
                    3.6
                  </p>
                  <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>GPA (MS)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
                    GenAI
                  </p>
                  <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Primary focus</p>
                </div>
              </div>
            </div>

            {/* Resume CTA */}
            <a
              href="/Adi_Vamsi_Sai_Resume_GenAI_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-5 flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all hover:opacity-85"
              style={{
                borderColor: 'var(--accent-border)',
                color: 'var(--text)',
                background: 'linear-gradient(180deg, rgba(0,200,150,0.12), rgba(0,200,150,0.06))',
              }}
            >
              Download Resume
              <span style={{ color: 'var(--accent)' }}>&nearr;</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
