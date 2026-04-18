'use client';

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

const sections = [
  { label: 'Projects', href: '#projects' },
  { label: 'Brief', href: '#brief' },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const router = useRouter();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > window.innerHeight * 0.5);

    const projectsEl = document.getElementById('projects');
    const briefEl = document.getElementById('brief');

    if (briefEl && latest + window.innerHeight / 2 >= briefEl.offsetTop) {
      setActiveSection('brief');
    } else if (projectsEl && latest + window.innerHeight / 2 >= projectsEl.offsetTop) {
      setActiveSection('projects');
    } else {
      setActiveSection('');
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        >
          <div
            className="flex items-center gap-0.5 rounded-full px-1.5 py-1.5"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(10,10,10,0.85)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {sections.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-xs font-medium transition-colors"
                  style={{
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="mx-1 h-4 w-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

            <button
              onClick={() => router.push('/chat')}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all hover:opacity-90"
              style={{
                color: '#00c896',
                background: 'rgba(0,200,150,0.12)',
                border: '1px solid rgba(0,200,150,0.2)',
              }}
            >
              <MessageSquare size={12} />
              Chat
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
