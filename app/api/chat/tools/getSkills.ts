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
          label: 'AI / LLM Systems',
          color: 'teal',
          skills: ['OpenAI GPT', 'LangChain', 'LangGraph', 'RAG systems', 'Prompt engineering', 'Fine-tuning', 'AI Agents', 'Multi-agent systems', 'Vector databases', 'Hugging Face'],
        },
        {
          label: 'Backend / APIs',
          color: 'blue',
          skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'PostgreSQL', 'SQL', 'Apache Kafka', 'Microservices'],
        },
        {
          label: 'Cloud / Infrastructure',
          color: 'purple',
          skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'Nginx'],
        },
        {
          label: 'Frontend / Product',
          color: 'amber',
          skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Full-stack development'],
        },
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
