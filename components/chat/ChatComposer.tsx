'use client';

import { LoaderCircle, RotateCcw, Send } from 'lucide-react';
import type { FormEvent } from 'react';

const QUICK_ACTIONS = [
  { label: 'Me', question: 'Tell me about yourself' },
  { label: 'Projects', question: 'What are your flagship AI and portfolio projects?' },
  { label: 'Skills', question: 'What are your technical skills?' },
  { label: 'Experience', question: 'Walk me through your work experience' },
  { label: 'Contact', question: 'How can I contact you?' },
  { label: 'Resume', question: 'Can I see your resume?' },
];

type ChatComposerProps = {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (event?: FormEvent) => void;
  onQuickAction: (question: string) => void;
  onReset: () => void;
  isLoading: boolean;
  hasMessages: boolean;
};

export default function ChatComposer({
  input,
  onInputChange,
  onSubmit,
  onQuickAction,
  onReset,
  isLoading,
  hasMessages,
}: ChatComposerProps) {
  return (
    <div className="sticky bottom-0 z-30 border-t px-4 py-4 backdrop-blur-xl"
      style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.84)' }}>
      <div className="chat-shell flex w-full flex-wrap gap-2 pb-3">
        {QUICK_ACTIONS.map((item) => (
          <button
            key={item.label}
            onClick={() => onQuickAction(item.question)}
            className="rounded-full border px-3 py-1.5 text-xs font-medium transition-transform hover:-translate-y-0.5"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)', color: 'var(--text-sec)' }}
          >
            {item.label}
          </button>
        ))}

        {hasMessages && (
          <button
            onClick={onReset}
            className="ml-auto inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)', color: 'var(--text-muted)' }}
          >
            <RotateCcw size={13} />
            Restart
          </button>
        )}
      </div>

      <form onSubmit={onSubmit} className="chat-shell flex w-full items-center gap-3 rounded-[1.75rem] border px-4 py-3"
        style={{ borderColor: 'var(--border-accent)', background: 'var(--surface)', boxShadow: 'var(--shadow-card)' }}>
        <input
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          placeholder="Ask about projects, experience, skills, or how I build AI systems..."
          className="flex-1 bg-transparent text-sm outline-none sm:text-base"
          style={{ color: 'var(--text)', caretColor: 'var(--accent)' }}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-opacity disabled:opacity-35"
          style={{ background: 'var(--accent)', color: 'white', boxShadow: 'var(--shadow-btn)' }}
        >
          {isLoading ? <LoaderCircle className="animate-spin" size={18} /> : <Send size={16} />}
        </button>
      </form>
    </div>
  );
}
