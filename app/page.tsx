'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Briefcase, Layers, User, PartyPopper, UserSearch, Send } from 'lucide-react';
import FluidCursor from '@/components/FluidCursor';

const NAV_ITEMS = [
  { label: 'Me',         icon: User,        question: 'Tell me about yourself',               color: '#0fd9a0' },
  { label: 'Projects',   icon: Briefcase,   question: 'What projects have you built?',        color: '#34d399' },
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
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: 'var(--background)' }}>

      {/* Fluid cursor animation */}
      <FluidCursor />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-lg text-center"
      >
        {/* Avatar */}
        <motion.div variants={item} className="flex justify-center mb-6">
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
        <motion.h1 variants={item}
          className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
          Hey, I&apos;m Adi 👋
        </motion.h1>

        <motion.p variants={item}
          className="text-base sm:text-lg mb-8"
          style={{ color: 'var(--text-muted)' }}>
          Python Developer &amp; AI Systems Builder
        </motion.p>

        {/* Chat Input */}
        <motion.form variants={item} onSubmit={handleSubmit}
          className="flex items-center gap-2 rounded-2xl px-4 py-3 mb-5 w-full"
          style={{
            border: '1px solid var(--border-accent)',
            background: 'var(--surface)',
            boxShadow: 'var(--shadow-card)',
          }}>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Ask me anything…"
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: 'var(--text)', caretColor: 'var(--accent)' }}
          />
          <button type="submit" disabled={!inputValue.trim()}
            className="p-1.5 rounded-xl transition-all disabled:opacity-30 hover:opacity-80"
            style={{ color: 'var(--accent)' }}>
            <Send size={16} />
          </button>
        </motion.form>

        {/* Quick Nav Buttons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-2">
          {NAV_ITEMS.map(nav => {
            const Icon = nav.icon;
            return (
              <motion.button
                key={nav.label}
                onClick={() => goToChat(nav.question)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  color: 'var(--text-sec)',
                  boxShadow: 'var(--shadow-card)',
                }}>
                <Icon size={14} style={{ color: nav.color }} />
                {nav.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item}
          className="text-xs mt-8"
          style={{ color: 'var(--text-faint)' }}>
          Practical AI systems for real workflow use.
        </motion.p>
      </motion.div>
    </main>
  );
}
