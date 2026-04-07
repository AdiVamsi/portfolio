'use client';

import Image from 'next/image';
import { Briefcase, Download, Layers, MessageSquareQuote, Sparkles, UserRound, UserSearch } from 'lucide-react';

const SUGGESTIONS = [
  {
    label: 'Me',
    question: 'Tell me about yourself',
    icon: UserRound,
  },
  {
    label: 'Projects',
    question: 'What are your flagship AI and portfolio projects?',
    icon: Briefcase,
  },
  {
    label: 'Skills',
    question: 'What are your technical skills?',
    icon: Layers,
  },
  {
    label: 'Experience',
    question: 'Walk me through your work experience',
    icon: MessageSquareQuote,
  },
  {
    label: 'Contact',
    question: 'How can I contact you?',
    icon: UserSearch,
  },
  {
    label: 'Resume',
    question: 'Can I see your resume?',
    icon: Download,
  },
];

type ChatLandingProps = {
  onSelect: (question: string) => void;
};

export default function ChatLanding({ onSelect }: ChatLandingProps) {
  return (
    <div className="flex min-h-[calc(100vh-11rem)] items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl text-center">
        <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border bg-white p-1"
          style={{ borderColor: 'var(--accent-border)', boxShadow: '0 18px 50px rgba(0,200,150,0.12), var(--shadow-card)' }}>
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="/images/adi-profile.png"
              alt="Portrait of Adi"
              fill
              priority
              sizes="7rem"
              className="scale-[1.32] object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
          </div>
        </div>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.22em]"
          style={{ borderColor: 'var(--border)', color: 'var(--text-faint)', background: 'var(--surface)' }}>
          <Sparkles size={14} style={{ color: 'var(--accent)' }} />
          Interactive Portfolio Assistant
        </div>

        <h1 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
          Ask Adi Anything
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base"
          style={{ color: 'var(--text-muted)' }}>
          This is the fastest way for a recruiter, teammate, or client to understand what I build,
          how I work, and where I can create the most leverage.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
          {['3+ years', 'Production AI systems', 'RAG + text-to-SQL', 'US remote or relocation'].map((item) => (
            <span
              key={item}
              className="rounded-full border px-3 py-1"
              style={{ borderColor: 'var(--border)', color: 'var(--text-sec)', background: 'var(--surface)' }}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SUGGESTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => onSelect(item.question)}
                className="group rounded-3xl border px-4 py-4 text-left transition-transform hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border)', background: 'var(--surface)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="mb-4 inline-flex rounded-2xl p-2"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}>
                  <Icon size={18} />
                </div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6" style={{ color: 'var(--text-muted)' }}>
                  {item.question}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
