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
          company: 'Capgemini',
          period: 'Jul 2024 – May 2026',
          type: 'Contract',
          current: false,
          location: 'San Antonio, TX / Remote',
          summary:
            'Built Python backend services for automation, data processing, API integrations, and internal business workflows used by cross-functional teams.',
          highlights: [
            'Built and maintained Python backend services for automation, data processing, API integrations, and internal business workflows used by cross-functional teams',
            'Improved backend processing speed by 20% by optimizing SQL queries, refactoring service logic, and reducing unnecessary API calls',
            'Integrated LLM APIs into classification and extraction workflows, reducing repetitive manual review effort by 35%',
            'Added structured logging, exception handling, input validation, and retry logic across backend modules, lowering recurring production issues by 15%',
            'Reduced critical backend issue resolution time from 48 hours to 12 hours through debugging workflows, sprint delivery, and release support',
            'Collaborated with product, QA, and engineering teams to deliver backend fixes, API enhancements, and automation features in Agile sprint cycles',
          ],
          impact:
            'This role connects my backend foundation with practical AI and automation work: shipping APIs, improving reliability, and applying LLMs where they reduce manual effort.',
          stack: ['Python', 'REST APIs', 'SQL', 'LLM APIs', 'Automation', 'Agile/Scrum'],
        },
        {
          title: 'Software Engineer',
          company: 'New Relic',
          period: 'Jun 2020 – Dec 2022',
          type: 'Full-time',
          current: false,
          location: 'Hyderabad, India',
          summary:
            'Built Java 8/11 Spring Boot backend services for an observability platform supporting high-volume queries across distributed microservices.',
          highlights: [
            'Built Java 8/11 Spring Boot backend services for an observability platform supporting high-volume queries across distributed microservices',
            'Designed and optimized REST API contracts, reducing inter-service latency by approximately 15% through payload restructuring',
            'Tuned Hibernate ORM queries and database interaction patterns to improve backend throughput and reliability under sustained production load',
            'Automated data validation, log analysis, and API regression testing with Python scripts, reducing manual QA cycle time by approximately 30%',
            'Refactored legacy backend components and expanded critical-path test coverage, reducing page load times by approximately 10%',
          ],
          impact:
            'Built a strong foundation in enterprise Java, distributed systems, and production backend engineering at scale.',
          stack: ['Java 8/11', 'Spring Boot', 'Hibernate/JPA', 'REST APIs', 'Python', 'Microservices'],
        },
      ],
      throughline:
        'Across both roles, the common thread is reliable backend engineering: APIs, automation, production debugging, measurable improvements, and AI workflows where they create practical value.',
    };
  },
});
