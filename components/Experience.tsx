'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react';

interface Role {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
}

const experience: Role[] = [
  {
    title: 'Python Developer',
    company: 'DATARA',
    type: 'Full-time',
    period: 'May 2025 – Present',
    location: 'Remote',
    current: true,
    bullets: [
      'Working on Python-based systems with an increasing focus on generative AI, workflow automation, and product-oriented engineering.',
      'Building capabilities across LLM applications, backend services, and workflow systems that solve real operational problems.',
      'Applying practical AI and automation patterns to SME-oriented use cases instead of chasing speculative prototypes.',
    ],
    tags: ['Python', 'Generative AI', 'LLM applications', 'Workflow automation'],
  },
  {
    title: 'Junior Software Engineer',
    company: 'XRG Consulting Pvt Ltd',
    type: 'Full-time',
    period: 'Jun 2020 – Dec 2022',
    location: 'Hyderabad, Telangana, India',
    bullets: [
      'Developed backend services using Python and Go for scalable performance monitoring systems.',
      'Built and optimized data pipelines that improved metric aggregation speed and reliability across distributed environments.',
      'Created internal APIs for visualization and alerting workflows, enabling faster debugging and operations insight.',
      'Collaborated across DevOps and frontend teams to deploy and monitor applications in AWS, Docker, and Kubernetes environments.',
      'Worked through consulting engagements tied to enterprise engineering systems, including environments associated with New Relic.',
    ],
    tags: ['Python', 'Go', 'AWS', 'Kubernetes', 'Microservices', 'PostgreSQL'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-shell section-shell-tight">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="section-container">
        <div className="section-intro">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="eyebrow justify-center"
          >
            Experience
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="section-title section-title-lockup section-block-sm text-[clamp(2.7rem,5vw,4.15rem)]"
            style={{ color: 'var(--text)' }}
          >
            <span className="section-title-line">Experience building</span>
            <span className="section-title-line" style={{ color: 'var(--text-sec)' }}>
              real systems.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="section-copy section-block-sm"
          >
            The throughline across roles has been systems thinking: backend reliability, product
            delivery, and a steady move toward AI workflows that matter in practice.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.68, delay: 0.22 }}
          className="section-block-md surface-card rounded-[1.8rem] p-5 sm:p-6 max-w-4xl mx-auto text-center"
        >
          <div className="panel-kicker mb-3">
            Current direction
          </div>
          <p className="text-sm sm:text-base leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-sec)' }}>
            The work is moving steadily toward grounded AI systems, operator tooling, and
            product-minded backend engineering that solves actual business workflow problems.
          </p>
        </motion.div>

        <div className="section-block-md relative max-w-4xl mx-auto">
          <motion.div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.16), rgba(255,255,255,0.05) 78%, transparent)',
              transformOrigin: 'top center',
            }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.0, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-6">
            {experience.map(({ title, company, type, period, location, current, bullets, tags }, index) => (
              <motion.div
                key={`${company}-${title}`}
                initial={{ opacity: 0, x: -18 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.56, delay: 0.28 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-16"
              >
                <motion.div
                  className="absolute left-3.5 top-8 w-3 h-3 rounded-full hidden sm:block"
                  style={{
                    background: current ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.32)',
                    transform: 'translateX(-50%)',
                    boxShadow: current
                      ? '0 0 0 4px rgba(255,255,255,0.08)'
                      : '0 0 0 4px rgba(0,0,0,1)',
                  }}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.42 + index * 0.14, duration: 0.28, type: 'spring' }}
                />

                <div className="surface-card card-hover rounded-[1.8rem] p-5 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="panel-icon shrink-0">
                        <Briefcase size={18} style={{ color: 'var(--text-faint)' }} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <h3 className="text-lg font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                            {title}
                          </h3>
                          {current && (
                            <span className="badge-live flex items-center gap-2 px-3 py-1 rounded-full text-[0.68rem] font-semibold">
                              <span
                                className="w-1.5 h-1.5 rounded-full pulse-soft"
                                style={{ background: 'rgba(255,255,255,0.84)' }}
                              />
                              Current
                            </span>
                          )}
                        </div>

                        <p className="text-sm font-medium" style={{ color: 'var(--text-sec)' }}>
                          {company}
                          <span style={{ color: 'var(--text-faint)' }}> · {type}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-2 shrink-0 pt-0.5">
                      <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <Calendar size={12} />
                        <span>{period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-faint)' }}>
                        <MapPin size={12} />
                        <span>{location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: 'rgba(255,255,255,0.36)' }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="pt-4 text-[0.76rem] font-medium tracking-[0.02em]"
                    style={{ borderTop: '1px solid var(--border-sub)', color: 'var(--text-faint)' }}
                  >
                    {tags.join(' · ')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.58, delay: 0.54 }}
          className="section-block-md text-center"
        >
          <a
            href="https://www.linkedin.com/in/adi-vamsi-sai-326667128/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-ghost text-sm font-medium"
          >
            Full work history on LinkedIn
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
