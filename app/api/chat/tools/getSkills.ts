import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description: 'Show the technical skills and expertise of Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      strengths: [
        'Python backend engineering',
        'REST API development',
        'LLM workflow integration',
        'Automation and production reliability',
      ],
      groups: [
        {
          label: 'Languages',
          color: 'teal',
          skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
        },
        {
          label: 'Backend & Data',
          color: 'blue',
          skills: ['REST APIs', 'Microservices', 'FastAPI', 'Flask', 'Spring Boot', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Hibernate/JPA', 'WebSockets'],
        },
        {
          label: 'AI / LLM Engineering',
          color: 'purple',
          skills: ['OpenAI API', 'Claude', 'Gemini', 'LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'AI Agents', 'Agentic Orchestration', 'Embeddings', 'Vector Search', 'ChromaDB', 'Ollama', 'PyTorch'],
        },
        {
          label: 'Developer Tools',
          color: 'amber',
          skills: ['Cursor', 'Google Antigravity', 'Claude Code', 'Codex', 'Git', 'Docker', 'Linux', 'AWS', 'Streamlit', 'Agile/Scrum'],
        },
      ],
      workflowStyle: [
        'I prefer systems where model calls sit behind clear APIs, validation, retries, and observable workflows.',
        'I think in end-to-end flows: intake, classification, action, fallback, and handoff.',
        'I care about backend reliability as much as output quality.',
      ],
      deepeningIn: ['LangGraph agents', 'Multi-agent systems', 'RAG evaluation', 'Production LLM ops'],
    };
  },
});
