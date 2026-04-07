'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowDownRight, Briefcase, Layers, PartyPopper, Send, User, UserSearch } from 'lucide-react';
import FluidCursor from '@/components/FluidCursor';
import ProjectsShowcase from '@/components/home/ProjectsShowcase';

const NAV_ITEMS = [
  { label: 'Me',         icon: User,        question: 'Tell me about yourself',               color: '#0fd9a0' },
  { label: 'Projects',   icon: Briefcase,   question: 'What are your flagship AI and portfolio projects?', color: '#34d399' },
  { label: 'Skills',     icon: Layers,      question: 'What are your technical skills?',      color: '#a78bfa' },
  { label: 'Experience', icon: PartyPopper, question: 'Walk me through your work experience', color: '#fbbf24' },
  { label: 'Contact',    icon: UserSearch,  question: 'How can I contact you?',               color: '#f472b6' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const goToChat = (question: string) => {
    router.push(`/chat?q=${encodeURIComponent(question)}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    goToChat(inputValue.trim());
  };

  return (
    <main id="main-content" className="relative min-h-screen" style={{ background: 'var(--background)' }}>
      <FluidCursor />
      <section className="relative z-10 flex min-h-screen items-center px-4 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-2xl text-center"
        >
          {/* Avatar */}
          <motion.div variants={item} className="mb-6 flex justify-center">
            <div
              className="relative h-28 w-28 overflow-hidden rounded-full sm:h-32 sm:w-32"
              style={{
                border: '2px solid var(--accent-border)',
                background: 'var(--surface)',
                boxShadow: '0 10px 32px rgba(0,200,150,0.14), var(--shadow-card)',
              }}
            >
              <Image
                src="/images/adi-profile.png"
                alt="Portrait of Adi"
                fill
                priority
                sizes="(min-width: 640px) 8rem, 7rem"
                className="scale-[1.32] object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </motion.div>

          {/* Name + Title */}
          <motion.h1
            variants={item}
            className="mb-2 text-3xl font-bold tracking-tight sm:text-5xl"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
          >
            Hey, I&apos;m Adi
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            Python Developer &amp; AI Systems Builder
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-[15px]"
            style={{ color: 'var(--text-sec)' }}
          >
            I build production-minded AI workflows and a practical applied AI portfolio covering RAG, text-to-SQL,
            summarization, prompt chaining, and chat systems.
          </motion.p>

          {/* Chat Input */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="mb-5 mt-8 flex w-full items-center gap-2 rounded-2xl px-4 py-3"
            style={{
              border: '1px solid var(--border-accent)',
              background: 'var(--surface)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything…"
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: 'var(--text)', caretColor: 'var(--accent)' }}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="rounded-xl p-1.5 transition-all disabled:opacity-30 hover:opacity-80"
              style={{ color: 'var(--accent)' }}
            >
              <Send size={16} />
            </button>
          </motion.form>

          {/* Quick Nav Buttons */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-2">
            {NAV_ITEMS.map((nav) => {
              const Icon = nav.icon;
              return (
                <motion.button
                  key={nav.label}
                  onClick={() => goToChat(nav.question)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                    color: 'var(--text-sec)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <Icon size={14} style={{ color: nav.color }} />
                  {nav.label}
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div variants={item} className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => goToChat('Walk me through your best AI projects and what each one proves')}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                borderColor: 'var(--accent-border)',
                background: 'var(--accent-dim)',
                color: 'var(--text)',
              }}
            >
              Explore in chat
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-sec)',
              }}
            >
              See featured projects
              <ArrowDownRight size={15} style={{ color: 'var(--accent)' }} />
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-8 text-xs"
            style={{ color: 'var(--text-faint)' }}
          >
            Practical AI systems for real workflow use.
          </motion.p>
        </motion.div>
      </section>

      <ProjectsShowcase />
    </main>
  );
}
