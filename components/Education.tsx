'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, GraduationCap, Star } from 'lucide-react';

const education = [
  {
    degree: "Master's in Information Technology",
    school: 'Webster University',
    period: 'Jan 2023 – Jan 2025',
    grade: '3.8 GPA',
    highlights: [
      'Focused on advanced computing, information systems, and technology management.',
      'Applied research across AI systems, data engineering, and software architecture.',
      'Graduated with distinction and a 3.8 GPA.',
    ],
  },
  {
    degree: 'Bachelor of Engineering — Computer Science',
    school: 'GITAM Deemed University',
    period: 'Jun 2016 – Jun 2020',
    grade: 'Computer Science',
    highlights: [
      'Built a strong base in algorithms, data structures, operating systems, and software engineering.',
      'Completed coursework across databases, computer networks, and distributed systems.',
      'Started building backend-focused projects and system design instincts early.',
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section-shell section-shell-tight">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="section-container">
        <div className="section-intro">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="eyebrow justify-center"
          >
            Education
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="section-title section-title-lockup section-title-support section-block-sm"
            style={{ color: 'var(--text)' }}
          >
            <span className="section-title-line">Academic foundation,</span>
            <span className="section-title-line" style={{ color: 'var(--text-sec)' }}>
              applied toward systems work.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="section-copy section-block-sm"
          >
            Formal training in computing and information systems built the base. The current
            direction extends that base into AI workflows, backend architecture, and product-shaped
            system design.
          </motion.p>
        </div>

        <div className="section-block-md grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {education.map(({ degree, school, period, grade, highlights }, index) => (
            <motion.div
              key={school}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.56, delay: 0.22 + index * 0.1 }}
              className="surface-card card-hover rounded-[1.8rem] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="panel-icon shrink-0">
                  <GraduationCap size={20} style={{ color: 'var(--text-faint)' }} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold leading-snug mb-1.5" style={{ color: 'var(--text)' }}>
                    {degree}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-sec)' }}>
                    {school}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <Calendar size={12} />
                  <span>{period}</span>
                </div>

                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-faint)' }}>
                  <Star size={11} />
                  <span>{grade}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ background: 'rgba(255,255,255,0.34)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
