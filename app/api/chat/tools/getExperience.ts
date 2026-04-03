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
          company: 'DATARA',
          period: 'May 2025 – Present',
          type: 'Full-time · Remote',
          current: true,
          location: 'San Antonio, TX',
          summary:
            'Building applied AI systems and backend workflows that help operational teams use LLMs in a practical, production-aware way.',
          highlights: [
            'Building LLM applications and backend services for operational AI challenges',
            'Implementing practical AI patterns for SME-focused use cases',
            'Developing workflow automation systems with generative AI',
            'Product engineering with Python, GenAI, and workflow automation',
          ],
          impact:
            'This role sharpened my focus on turning AI capabilities into business workflows with reliable handoffs instead of one-off demos.',
          stack: ['Python', 'Generative AI', 'LLM applications', 'Workflow automation'],
        },
        {
          title: 'Junior Software Engineer',
          company: 'XRG Consulting Pvt Ltd',
          period: 'June 2020 – December 2022',
          type: 'Full-time · Hyderabad, India',
          current: false,
          location: 'Hyderabad, India',
          summary:
            'Worked on backend services, monitoring workflows, and performance-oriented data systems in a distributed engineering environment.',
          highlights: [
            'Developed backend services in Python and Go for performance monitoring systems',
            'Built and optimized data pipelines enhancing metric aggregation across distributed environments',
            'Created internal APIs for visualization and alerting workflows',
            'Collaborated with DevOps and frontend teams on AWS, Docker, and Kubernetes deployments',
          ],
          impact:
            'Built a strong foundation in backend engineering, observability-style workflows, and collaborating across infrastructure and product surfaces.',
          stack: ['Python', 'Go', 'AWS', 'Kubernetes', 'Docker', 'PostgreSQL', 'Microservices'],
        },
      ],
      throughline:
        'Across both roles, the common thread is building systems that connect software reliability with practical user outcomes.',
    };
  },
});
