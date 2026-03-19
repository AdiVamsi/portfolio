'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import { scrollToHash, scrollToTop } from '@/lib/scroll';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Flagship', href: '#flagship' },
  { label: 'About', href: '#about' },
  { label: 'Agent Hub', href: '#agent-hub' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: GitHubIcon, href: 'https://github.com/AdiVamsi', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/adi-vamsi-sai-326667128/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:adivamsi88@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ background: 'rgba(0,0,0,0.74)', borderColor: 'var(--border-sub)' }}>
      <div className="section-container py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-sm">
            <button type="button" onClick={scrollToTop} aria-label="Scroll to top" className="flex items-center gap-3 cursor-pointer">
              <div
                className="w-9 h-9 rounded-[0.95rem] flex items-center justify-center text-sm font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'var(--text)',
                }}
              >
                A
              </div>
              <div>
                <div
                  className="text-[0.66rem] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: 'var(--text-ghost)' }}
                >
                  Personal portfolio
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-sec)' }}>
                  Adi Vamsi Sai Maddirala
                </div>
              </div>
            </button>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              AI workflow systems builder focused on grounded products, operator tools, and
              practical backend engineering.
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={label}
                  aria-label={label}
                  className="meta-chip-soft w-10 h-10 justify-center rounded-full"
                >
                  <Icon style={{ width: 14, height: 14 }} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHash(link.href);
                }}
                className="inline-link text-sm cursor-pointer"
                style={{ color: 'var(--text-faint)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="button-secondary text-sm font-semibold"
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--border-sub)' }}
        >
          <p suppressHydrationWarning className="text-xs" style={{ color: 'var(--text-ghost)' }}>
            © {new Date().getFullYear()} Adi Vamsi Sai Maddirala. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-ghost)' }}>
            Built with Next.js, Tailwind CSS, TypeScript, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
