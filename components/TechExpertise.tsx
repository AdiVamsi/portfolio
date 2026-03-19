'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cloud, Package, Server } from 'lucide-react';

interface SkillGroup {
  icon: React.ElementType;
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    icon: Brain,
    title: 'AI / LLM systems',
    skills: ['Generative AI', 'LLM applications', 'Workflow automation', 'LangChain', 'LangGraph', 'Fine-tuning', 'Machine learning', 'RAG systems'],
  },
  {
    icon: Server,
    title: 'Backend / APIs',
    skills: ['Python', 'Node.js', 'REST APIs', 'FastAPI', 'Microservices', 'PostgreSQL', 'SQL', 'Apache Kafka'],
  },
  {
    icon: Cloud,
    title: 'Cloud / infrastructure',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'Nginx'],
  },
  {
    icon: Package,
    title: 'Product / engineering',
    skills: ['SaaS development', 'Full-stack dev', 'API integration', 'Next.js', 'Debugging', 'Documentation', 'Agile'],
  },
];

const deepeningAreas = ['LangGraph agents', 'Multi-agent systems', 'Fine-tuning', 'Production LLM ops'];

export default function TechExpertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-shell section-shell-open">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="section-container">
        <div className="section-intro">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="eyebrow justify-center"
          >
            Technical Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="section-title section-title-lockup section-title-major section-block-sm"
            style={{ color: 'var(--text)' }}
          >
            <span className="section-title-line">Capability across AI,</span>
            <span className="section-title-line" style={{ color: 'var(--text-sec)' }}>
              backend, and deployment.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="section-copy section-block-sm"
          >
            The stack is shaped around practical delivery: orchestration, backend services,
            infrastructure, and product implementation that can carry an AI workflow from concept to
            working surface.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="section-block-md surface-panel rounded-[1.8rem] p-5 sm:p-6 text-left max-w-5xl mx-auto"
        >
          <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)] md:items-start">
            <div className="panel-kicker md:pt-1">Operating stack</div>
            <p className="text-sm sm:text-base leading-relaxed max-w-3xl" style={{ color: 'var(--text-sec)' }}>
              Orchestrate LLM workflows cleanly, build backend systems that carry real load, and
              ship product surfaces that feel finished instead of demo-grade.
            </p>
          </div>
        </motion.div>

        <div className="section-block-md grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {skillGroups.map(({ icon: Icon, title, skills }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.26 + index * 0.07 }}
              className="surface-card card-hover rounded-[1.8rem] p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  <div className="panel-icon">
                    <Icon style={{ width: 18, height: 18, color: 'var(--text-faint)' }} />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                    {title}
                  </h3>
                </div>

                <div
                  className="text-[0.66rem] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: 'var(--text-ghost)' }}
                >
                  0{index + 1}
                </div>
              </div>

              <ul className="skill-list sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="skill-list-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="section-block-md surface-card rounded-[1.8rem] p-5 sm:p-6 max-w-4xl mx-auto text-center"
        >
          <div className="text-sm font-medium mb-4" style={{ color: 'var(--text-sec)' }}>
            Currently deepening expertise in
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            {deepeningAreas.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 ? <span style={{ color: 'var(--text-ghost)' }}>•</span> : null}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
