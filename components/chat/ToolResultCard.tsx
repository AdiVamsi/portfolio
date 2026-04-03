'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Download,
  FileText,
  GraduationCap,
  Layers,
  type LucideIcon,
  LocateFixed,
  Mail,
  Sparkles,
  UserRound,
} from 'lucide-react';

type PresentationData = {
  name: string;
  headline: string;
  currentRole: string;
  company: string;
  location: string;
  summary: string;
  tagline: string;
  openTo: string;
  visaStatus: string;
  metrics?: string[];
  differentiators?: string[];
  focusAreas?: string[];
};

type Project = {
  name: string;
  category: string;
  year: string;
  status: string;
  role: string;
  description: string;
  impact: string;
  features?: string[];
  stack?: string[];
  github?: string;
};

type ProjectsData = {
  projects?: Project[];
};

type SkillGroup = {
  label: string;
  color: string;
  skills: string[];
};

type SkillsData = {
  strengths?: string[];
  groups?: SkillGroup[];
  workflowStyle?: string[];
  deepeningIn?: string[];
};

type ExperienceRole = {
  company: string;
  title: string;
  period: string;
  current?: boolean;
  type: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  impact?: string;
  stack?: string[];
};

type ExperienceData = {
  roles?: ExperienceRole[];
  throughline?: string;
};

type Degree = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  gpa?: string;
  distinction?: boolean;
  summary?: string;
  focus?: string[];
};

type EducationData = {
  degrees?: Degree[];
  note?: string;
};

type ContactData = {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
  visaStatus: string;
  preferredContact: string;
  resumeUrl?: string;
  note?: string;
};

type ResumeData = {
  title: string;
  fileName: string;
  url: string;
  summary: string;
  highlights?: string[];
};

function SurfaceCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-[2rem] border p-5 sm:p-6 ${className}`}
      style={{
        borderColor: 'var(--border)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,250,0.96))',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {children}
    </motion.div>
  );
}

function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'accent';
}) {
  const styles =
    tone === 'accent'
      ? {
          background: 'var(--accent-dim)',
          color: 'var(--accent)',
          border: '1px solid var(--accent-border)',
        }
      : {
          background: 'var(--surface-2)',
          color: 'var(--text-sec)',
          border: '1px solid var(--border)',
        };

  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style={styles}>
      {children}
    </span>
  );
}

function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
      style={{ borderColor: 'var(--border)', color: 'var(--text-faint)', background: 'var(--surface)' }}>
      <Icon size={12} style={{ color: 'var(--accent)' }} />
      {children}
    </div>
  );
}

function ActionLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
      style={{
        borderColor: 'var(--border-accent)',
        color: 'var(--text)',
        background: 'var(--surface)',
      }}
    >
      {children}
      <ArrowUpRight size={15} style={{ color: 'var(--accent)' }} />
    </a>
  );
}

function PresentationCard({ data }: { data: PresentationData }) {
  return (
    <SurfaceCard className="mb-3">
      <SectionLabel icon={UserRound}>Profile</SectionLabel>

      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-[2rem]"
            style={{ color: 'var(--text)' }}>
            {data.name}
          </h3>
          <p className="mt-2 text-sm font-medium sm:text-base" style={{ color: 'var(--accent)' }}>
            {data.headline}
          </p>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
            {data.currentRole} at {data.company} · {data.location}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--text-sec)' }}>
            {data.summary}
          </p>
          <p className="mt-4 text-sm italic" style={{ color: 'var(--text-muted)' }}>
            {data.tagline}
          </p>
        </div>

        <div className="rounded-[1.6rem] border p-4"
          style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.72)' }}>
          <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--text-faint)' }}>
            Hiring Snapshot
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: 'var(--text)' }}>
            Open to
          </p>
          <p className="mt-1 text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
            {data.openTo}
          </p>
          <p className="mt-4 text-sm font-medium" style={{ color: 'var(--text)' }}>
            Work Authorization
          </p>
          <p className="mt-1 text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
            {data.visaStatus}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {data.metrics?.map((metric) => (
          <Badge key={metric} tone="accent">{metric}</Badge>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border p-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
            What stands out
          </p>
          <div className="mt-3 space-y-3">
            {data.differentiators?.map((item) => (
              <p key={item} className="text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border p-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
            Focus areas
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {data.focusAreas?.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
    </SurfaceCard>
  );
}

function ProjectsCard({ data }: { data: ProjectsData }) {
  const statusTone: Record<string, 'neutral' | 'accent'> = {
    live: 'accent',
    active: 'accent',
    complete: 'neutral',
  };

  return (
    <SurfaceCard className="mb-3">
      <SectionLabel icon={Briefcase}>Selected Projects</SectionLabel>

      <div className="space-y-4">
        {data.projects?.map((project) => (
          <div
            key={project.name}
            className="rounded-[1.6rem] border p-5"
            style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.76)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="accent">{project.category}</Badge>
                  <Badge tone={statusTone[project.status] || 'neutral'}>
                    {project.status}
                  </Badge>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {project.year}
                  </span>
                </div>
                <h4 className="mt-3 text-xl font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                  {project.name}
                </h4>
                <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                  {project.role}
                </p>
              </div>

              {project.github && <ActionLink href={project.github}>GitHub</ActionLink>}
            </div>

            <p className="mt-4 text-sm leading-7" style={{ color: 'var(--text-sec)' }}>
              {project.description}
            </p>
            <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text)' }}>
              {project.impact}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                  Highlights
                </p>
                <ul className="mt-3 space-y-2">
                  {project.features?.map((feature) => (
                    <li key={feature} className="text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack?.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SurfaceCard>
  );
}

function SkillsCard({ data }: { data: SkillsData }) {
  const colorMap: Record<string, string> = {
    teal: 'var(--accent)',
    blue: '#60a5fa',
    purple: '#a78bfa',
    amber: '#f59e0b',
  };

  return (
    <SurfaceCard className="mb-3">
      <SectionLabel icon={Layers}>Technical Range</SectionLabel>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="text-xl font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
            The stack I reach for most often
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.strengths?.map((item) => (
              <Badge key={item} tone="accent">{item}</Badge>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {data.groups?.map((group) => (
              <div
                key={group.label}
                className="rounded-[1.5rem] border p-4"
                style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.72)' }}
              >
                <p className="text-sm font-semibold" style={{ color: colorMap[group.color] || 'var(--accent)' }}>
                  {group.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.5rem] border p-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
            <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
              How I build
            </p>
            <div className="mt-3 space-y-3">
              {data.workflowStyle?.map((item) => (
                <p key={item} className="text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border p-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
            <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
              Currently deepening
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.deepeningIn?.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SurfaceCard>
  );
}

function ExperienceCard({ data }: { data: ExperienceData }) {
  return (
    <SurfaceCard className="mb-3">
      <SectionLabel icon={Sparkles}>Experience</SectionLabel>

      <div className="space-y-4">
        {data.roles?.map((role) => (
          <div
            key={`${role.company}-${role.title}`}
            className="rounded-[1.6rem] border p-5"
            style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.72)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-xl font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                    {role.title}
                  </h4>
                  {role.current && <Badge tone="accent">Current</Badge>}
                </div>
                <p className="mt-1 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                  {role.company}
                </p>
                <p className="mt-2 text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                  {role.summary}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs font-medium uppercase tracking-[0.12em]" style={{ color: 'var(--text-faint)' }}>
                  {role.period}
                </p>
                <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                  {role.type}
                </p>
                {role.location && (
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {role.location}
                  </p>
                )}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7" style={{ color: 'var(--text)' }}>
              {role.impact}
            </p>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                  Highlights
                </p>
                <ul className="mt-3 space-y-2">
                  {role.highlights?.map((highlight) => (
                    <li key={highlight} className="text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {role.stack?.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.throughline && (
        <div className="mt-5 rounded-[1.5rem] border p-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
            Throughline
          </p>
          <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-sec)' }}>
            {data.throughline}
          </p>
        </div>
      )}
    </SurfaceCard>
  );
}

function EducationCard({ data }: { data: EducationData }) {
  return (
    <SurfaceCard className="mb-3">
      <SectionLabel icon={GraduationCap}>Education</SectionLabel>

      <div className="space-y-4">
        {data.degrees?.map((degree) => (
          <div
            key={`${degree.school}-${degree.degree}`}
            className="rounded-[1.6rem] border p-5"
            style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.72)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h4 className="text-xl font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                  {degree.degree}
                </h4>
                <p className="mt-1 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                  {degree.school}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs font-medium uppercase tracking-[0.12em]" style={{ color: 'var(--text-faint)' }}>
                  {degree.period}
                </p>
                {degree.location && (
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {degree.location}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {degree.gpa && <Badge tone="accent">GPA {degree.gpa}</Badge>}
              {degree.distinction && <Badge tone="accent">Graduated with distinction</Badge>}
            </div>

            <p className="mt-4 text-sm leading-7" style={{ color: 'var(--text-sec)' }}>
              {degree.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {degree.focus?.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {data.note && (
        <p className="mt-5 text-sm leading-7" style={{ color: 'var(--text-muted)' }}>
          {data.note}
        </p>
      )}
    </SurfaceCard>
  );
}

function ContactCard({ data }: { data: ContactData }) {
  return (
    <SurfaceCard className="mb-3">
      <SectionLabel icon={Mail}>Contact</SectionLabel>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <ActionLink href={`mailto:${data.email}`}>{data.email}</ActionLink>
          <ActionLink href={data.linkedin}>LinkedIn</ActionLink>
          <ActionLink href={data.github}>GitHub</ActionLink>
          {data.resumeUrl && <ActionLink href={data.resumeUrl}>Resume</ActionLink>}
        </div>

        <div className="rounded-[1.6rem] border p-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
            Hiring Snapshot
          </p>
          <div className="mt-3 space-y-3 text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
            <p>{data.availability}</p>
            <p className="flex items-start gap-2">
              <LocateFixed size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
              {data.location}
            </p>
            <p><span style={{ color: 'var(--text)' }}>Work authorization:</span> {data.visaStatus}</p>
            <p><span style={{ color: 'var(--text)' }}>Best contact:</span> {data.preferredContact}</p>
          </div>
        </div>
      </div>

      {data.note && (
        <p className="mt-5 text-sm leading-7" style={{ color: 'var(--text-muted)' }}>
          {data.note}
        </p>
      )}
    </SurfaceCard>
  );
}

function ResumeCard({ data }: { data: ResumeData }) {
  return (
    <SurfaceCard className="mb-3">
      <SectionLabel icon={FileText}>Resume</SectionLabel>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
            {data.title}
          </h3>
          <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-sec)' }}>
            {data.summary}
          </p>
          <ul className="mt-4 space-y-2">
            {data.highlights?.map((item) => (
              <li key={item} className="text-sm leading-6" style={{ color: 'var(--text-sec)' }}>
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.6rem] border p-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
          <p className="text-xs font-medium uppercase tracking-[0.16em]" style={{ color: 'var(--text-faint)' }}>
            Access
          </p>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-sec)' }}>
            {data.fileName}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <ActionLink href={data.url}>Open Resume</ActionLink>
            <ActionLink href={data.url}>
              <Download size={15} style={{ color: 'var(--accent)' }} />
              Download
            </ActionLink>
          </div>
        </div>
      </div>
    </SurfaceCard>
  );
}

export default function ToolResultCard({ toolName, result }: { toolName: string; result: unknown }) {
  if (toolName === 'getPresentation') return <PresentationCard data={result as PresentationData} />;
  if (toolName === 'getProjects') return <ProjectsCard data={result as ProjectsData} />;
  if (toolName === 'getSkills') return <SkillsCard data={result as SkillsData} />;
  if (toolName === 'getExperience') return <ExperienceCard data={result as ExperienceData} />;
  if (toolName === 'getEducation') return <EducationCard data={result as EducationData} />;
  if (toolName === 'getContact') return <ContactCard data={result as ContactData} />;
  if (toolName === 'getResume') return <ResumeCard data={result as ResumeData} />;
  return null;
}
