import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description: 'Show work experience and career history of Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      roles: [
        {
          title: 'Python Developer',
          company: 'DATARA Pvt Ltd',
          period: 'May 2025 – Present',
          type: 'Full-time · Remote',
          current: true,
          location: 'San Antonio, TX',
          summary:
            'Backend & AI Engineering — building asynchronous Python backend services and integrating LLM-powered automation into production workflows.',
          highlights: [
            'Engineered async Python backend services, reducing pipeline turnaround from 10h to 8h (20% throughput gain)',
            'Integrated LLM APIs and prompt-engineered classification pipelines, eliminating 35% of manual data extraction tasks',
            'Modernized legacy Python modules with standardized error handling, cutting incident rate by 15%',
            'Reduced critical backend issue resolution time from 48h to 12h through structured debugging workflows',
            'Architected modular API integration layer maintaining 99.9% system uptime',
          ],
          impact:
            'This role sharpened my focus on turning AI capabilities into measurable business outcomes — not demos, but real throughput and reliability gains.',
          stack: ['Python', 'LLM APIs', 'Async Services', 'Prompt Engineering', 'REST APIs'],
        },
        {
          title: 'Junior Software Engineer',
          company: 'XRG Consulting (Client: New Relic)',
          period: 'June 2020 – December 2022',
          type: 'Full-time · Hyderabad, India',
          current: false,
          location: 'Hyderabad, India',
          summary:
            'Backend Engineering on a large-scale observability platform serving millions of daily queries across distributed microservices.',
          highlights: [
            'Built and maintained Java 8/11 Spring Boot backend services for New Relic\'s observability platform',
            'Designed and optimized REST API contracts, reducing inter-service latency by ~15%',
            'Tuned Hibernate ORM queries, improving backend throughput under sustained production load',
            'Automated data validation, log analysis, and API regression testing with Python, reducing QA cycle time by ~30%',
            'Refactored legacy components and expanded test coverage, reducing page load times by ~10%',
          ],
          impact:
            'Built a strong foundation in enterprise Java, distributed systems, and production backend engineering at scale.',
          stack: ['Java 8/11', 'Spring Boot', 'Hibernate/JPA', 'REST APIs', 'Python', 'Microservices'],
        },
      ],
      certifications: [
        'AWS Certified Cloud Practitioner — Amazon Web Services',
        'Oracle Certified Professional: Java SE 17 Developer — Oracle',
      ],
      throughline:
        'Across both roles, the common thread is building reliable backend systems with measurable impact — whether through AI integration or distributed platform engineering.',
    };
  },
});
