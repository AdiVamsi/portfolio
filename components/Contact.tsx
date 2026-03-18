'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adivamsi88@gmail.com',
    href: 'mailto:adivamsi88@gmail.com',
    description: 'Best for work inquiries, collaboration, and product conversations.',
    cta: 'Send Email',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'adi-vamsi-sai-326667128',
    href: 'https://www.linkedin.com/in/adi-vamsi-sai-326667128/',
    description: 'Connect professionally and review the broader work history.',
    cta: 'Connect',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/AdiVamsi',
    href: 'https://github.com/AdiVamsi',
    description: 'See the flagship repository and future workflow repos as they go public.',
    cta: 'View GitHub',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section-shell section-shell-open">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="section-container">
        <div className="section-intro">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="eyebrow justify-center"
          >
            Contact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="section-title section-title-lockup section-block-sm text-[clamp(2.65rem,5vw,4.1rem)]"
            style={{ color: 'var(--text)' }}
          >
            <span className="section-title-line">Open to building</span>
            <span className="section-title-line" style={{ color: 'var(--text-sec)' }}>
              meaningful systems.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.16 }}
            className="section-copy section-block-sm"
          >
            I&apos;m open to full-time roles, contract work, and focused collaborations in AI
            systems, workflow automation, backend engineering, and product-minded software.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.68, delay: 0.24 }}
          className="section-block-lg surface-card rounded-[1.8rem] p-6 max-w-4xl mx-auto text-center"
        >
          <div className="panel-kicker mb-3">
            Best fit
          </div>
          <p className="text-sm sm:text-base leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-sec)' }}>
            Teams building practical AI products, workflow automation systems, operator tools, or
            grounded backend platforms.
          </p>
        </motion.div>

        <div className="section-block-md grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {contactLinks.map(({ icon: Icon, label, value, href, description, cta }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.28 + index * 0.06 }}
              className="surface-card card-hover rounded-[1.8rem] p-5 flex flex-col"
            >
              <div className="panel-icon mb-5">
                <Icon style={{ width: 18, height: 18, color: 'var(--text-faint)' }} />
              </div>

              <div
                className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] mb-2"
                style={{ color: 'var(--text-ghost)' }}
              >
                {label}
              </div>
              <div className="text-base font-semibold mb-2 break-all sm:break-normal" style={{ color: 'var(--text)' }}>
                {value}
              </div>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-muted)' }}>
                {description}
              </p>

              <div className="inline-link self-start text-sm font-semibold">
                {cta}
                <ArrowRight size={14} className="inline-link__icon" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="section-block-md surface-card rounded-[1.9rem] p-5 sm:p-6 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="panel-icon panel-icon-sm">
                <MessageSquare size={17} style={{ color: 'var(--text-faint)' }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-sec)' }}>
                  Currently available
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  Open to full-time roles, contracts, and AI-focused collaboration.
                </p>
              </div>
            </div>

            <a
              href="mailto:adivamsi88@gmail.com"
              className="button-primary text-sm font-semibold w-full md:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={14} />
                adivamsi88@gmail.com
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
