'use client';

import type { ReactNode } from 'react';

function renderWithLinks(text: string): ReactNode[] {
  const regex = /(https?:\/\/[^\s]+)/g;
  const urlPattern = /^https?:\/\/[^\s]+$/;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (urlPattern.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[var(--accent)] underline-offset-4"
          style={{ color: 'var(--accent)' }}
        >
          {part}
        </a>
      );
    }

    return <span key={`${index}-${part.slice(0, 10)}`}>{part}</span>;
  });
}

type ChatMessageContentProps = {
  text: string;
};

export default function ChatMessageContent({ text }: ChatMessageContentProps) {
  const blocks = text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-3">
      {blocks.map((block) => (
        <p key={block} className="whitespace-pre-wrap text-sm leading-7 sm:text-[15px]">
          {renderWithLinks(block)}
        </p>
      ))}
    </div>
  );
}
