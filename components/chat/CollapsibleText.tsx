'use client';

import { useCallback, useState } from 'react';

const LINE_HEIGHT = 28; // matches leading-7
const MAX_LINES = 4;
const COLLAPSE_THRESHOLD = LINE_HEIGHT * (MAX_LINES + 1);

export default function CollapsibleText({ children }: { children: React.ReactNode }) {
  const [needsCollapse, setNeedsCollapse] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    if (node.scrollHeight > COLLAPSE_THRESHOLD) {
      setNeedsCollapse((prev) => prev || true);
    }
  }, []);

  if (!needsCollapse) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        style={{
          maxHeight: expanded ? 'none' : `${LINE_HEIGHT * MAX_LINES}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {children}
      </div>

      {!expanded && (
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-12"
          style={{
            background: 'linear-gradient(transparent, rgba(250,250,250,0.95))',
          }}
        />
      )}

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-1 text-xs font-medium transition-colors hover:opacity-80"
        style={{ color: 'var(--accent)' }}
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
}
