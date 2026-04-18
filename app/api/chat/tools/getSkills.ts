import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description: 'Show the technical skills and expertise of Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      strengths: [
        'Production-minded LLM applications',
        'Python backend engineering',
        'Workflow automation and orchestration',
        'Fast prototyping with clear product thinking',
      ],
      groups: [
        {
          label: 'Languages',
          color: 'teal',
          skills: ['Python', 'Java (8/11)', 'JavaScript', 'TypeScript', 'SQL'],
        },
        {
          label: 'Backend & Data',
          color: 'blue',
          skills: ['REST APIs', 'Microservices', 'Spring Boot', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Hibernate/JPA', 'WebSockets'],
        },
        {
          label: 'AI & Cloud',
          color: 'purple',
          skills: ['LangChain', 'LangGraph', 'LLM APIs', 'RAG', 'Prompt Engineering', 'AI Agents', 'PyTorch', 'Docker', 'AWS', 'Git', 'Linux'],
        },
      ],
      certifications: [
        'AWS Certified Cloud Practitioner — Amazon Web Services',
        'Oracle Certified Professional: Java SE 17 Developer — Oracle',
      ],
      workflowStyle: [
        'I prefer systems where the LLM is grounded by state, tooling, and clear user outcomes.',
        'I think in end-to-end flows: intake, reasoning, action, fallback, and human handoff.',
        'I care about reliability and operability just as much as model output quality.',
      ],
      deepeningIn: ['LangGraph agents', 'Multi-agent systems', 'Fine-tuning', 'Production LLM ops'],
    };
  },
});
