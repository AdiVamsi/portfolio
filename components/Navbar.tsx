'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToHash, scrollToTop } from '@/lib/scroll';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Flagship', href: '#flagship' },
  { label: 'About', href: '#about' },
  { label: 'Agent Hub', href: '#agent-hub' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const restoreFocusOnCloseRef = useRef(true);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((item) => item.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-42% 0px -48% 0px' }
      );

      observer.observe(node);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const toggleButton = toggleRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    window.setTimeout(() => firstMobileLinkRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (restoreFocusOnCloseRef.current) {
        toggleButton?.focus();
      }
      restoreFocusOnCloseRef.current = true;
    };
  }, [mobileOpen]);

  const go = (href: string) => {
    restoreFocusOnCloseRef.current = false;
    setMobileOpen(false);
    scrollToHash(href);
  };

  const mobileMenuId = 'primary-navigation-mobile';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3">
      <motion.nav
        aria-label="Primary"
        initial={{ y: -26, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto"
        style={{ maxWidth: 'var(--content-max)' }}
      >
        <div
          className="nav-shell rounded-[1.25rem] border transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(0,0,0,0.84)' : 'rgba(0,0,0,0.62)',
            borderColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.07)',
            boxShadow: scrolled ? '0 10px 28px rgba(0,0,0,0.24)' : '0 6px 18px rgba(0,0,0,0.14)',
          }}
        >
          <div className="flex items-center justify-between h-14 px-4 sm:px-5">
            <motion.button
              type="button"
              aria-label="Scroll to top"
              onClick={scrollToTop}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div
                className="w-8 h-8 rounded-[0.85rem] flex items-center justify-center text-sm font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text)',
                }}
              >
                A
              </div>
              <div className="hidden sm:block">
                <div
                  className="text-[0.64rem] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: 'var(--text-ghost)' }}
                >
                  Portfolio
                </div>
                <div className="text-[0.92rem] font-medium" style={{ color: 'var(--text-sec)' }}>
                  Adi Vamsi Sai
                </div>
              </div>
            </motion.button>

            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const active = activeSection === id;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'location' : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      go(link.href);
                    }}
                    className="group relative py-1 text-[0.92rem] font-medium transition-colors cursor-pointer"
                    style={{ color: active ? 'var(--text)' : 'var(--text-muted)' }}
                  >
                    {link.label}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-px w-[68%] rounded-full opacity-0 scale-x-50 transition-all duration-300 group-hover:opacity-30 group-hover:scale-x-100"
                      style={{ background: 'rgba(255,255,255,0.4)' }}
                    />
                    {active && (
                      <motion.span
                        layoutId="nav-line"
                        className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-px rounded-full"
                        style={{
                          width: '68%',
                          background: 'rgba(255,255,255,0.58)',
                        }}
                        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="mailto:adivamsi88@gmail.com"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.98 }}
                className="button-secondary px-4.5 py-2 text-sm font-semibold"
              >
                <span className="relative z-10">Contact</span>
              </motion.a>
            </div>

            <button
              type="button"
              ref={toggleRef}
              aria-haspopup="dialog"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => {
                restoreFocusOnCloseRef.current = true;
                setMobileOpen((open) => !open);
              }}
              className="md:hidden w-9 h-9 rounded-[0.85rem] flex items-center justify-center transition-colors"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--text-sec)',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              id={mobileMenuId}
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="mobile-nav-panel md:hidden mt-2 rounded-[1.4rem] border overflow-hidden"
              style={{
                background: 'rgba(0,0,0,0.94)',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: '0 24px 54px rgba(0,0,0,0.32)',
              }}
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={link.href}
                    aria-current={activeSection === link.href.replace('#', '') ? 'location' : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={(event) => {
                      event.preventDefault();
                      go(link.href);
                    }}
                    className="text-left rounded-2xl px-4 py-3.5 text-sm font-medium transition-colors cursor-pointer"
                    style={{
                      background:
                        activeSection === link.href.replace('#', '')
                          ? 'rgba(255,255,255,0.04)'
                          : 'transparent',
                      color:
                        activeSection === link.href.replace('#', '')
                          ? 'var(--text)'
                          : 'var(--text-sec)',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="mt-2 pt-4" style={{ borderTop: '1px solid var(--border-sub)' }}>
                  <a
                    href="mailto:adivamsi88@gmail.com"
                    className="button-secondary w-full text-sm font-semibold"
                  >
                    <span className="relative z-10">Contact</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
