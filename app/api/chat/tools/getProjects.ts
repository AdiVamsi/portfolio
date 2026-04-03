import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description: 'Show Adi Vamsi Sai projects with product context, stack, and impact',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      projects: [
        {
          name: 'Indian SME Engine',
          year: '2025',
          category: 'Flagship Product',
          status: 'live',
          role: 'AI systems + product engineering',
          description:
            'A WhatsApp-first AI lead workflow for small businesses that handles intake, grounded responses, qualification, and structured human handoff.',
          impact:
            'Designed as a practical operator-facing AI workflow instead of a chat demo, with clean transitions between automation and human follow-up.',
          features: [
            'Dual-channel lead capture from forms and WhatsApp',
            'Qualification flow with intent scoring',
            'Grounded business answers from a knowledge base',
            'Callback workflow with structured summaries',
            'Operator dashboard with history and handoff context',
          ],
          stack: ['Next.js', 'FastAPI', 'Python', 'LangChain', 'OpenAI', 'PostgreSQL', 'WhatsApp API'],
          github: 'https://github.com/AdiVamsi/indian-sme-engine',
        },
        {
          name: 'AgentHub',
          year: '2025',
          category: 'Systems Catalog',
          status: 'active',
          role: 'Workflow design + agent architecture',
          description:
            'A working catalog of agent workflows spanning qualification, grounded Q&A, callback scheduling, and operator handoff patterns.',
          impact:
            'Useful as both a portfolio system and a design space for production agent workflows, not just isolated prompt experiments.',
          features: [
            'Qualification agent pattern',
            'Grounded FAQ / RAG workflow',
            'Callback scheduling workflow',
            'Operator handoff design',
            'Planned automated research flow',
          ],
          stack: ['LangGraph', 'LangChain', 'FastAPI', 'Python', 'Next.js', 'PostgreSQL', 'OpenAI', 'Vector DB'],
          github: 'https://github.com/AdiVamsi/agent-hub',
        },
        {
          name: 'React GraphQL App',
          year: '2024',
          category: 'Full-Stack Development',
          status: 'complete',
          role: 'Frontend + API integration',
          description:
            'A full-stack React application built around GraphQL-based data access and a cleaner frontend experience.',
          impact:
            'Helped sharpen my product-side execution and frontend-to-backend integration habits alongside my backend-heavy work.',
          features: [
            'GraphQL-driven data fetching',
            'Reusable frontend components',
            'Stateful app flows',
          ],
          stack: ['React', 'GraphQL', 'JavaScript'],
          github: 'https://github.com/AdiVamsi/React-GraphQl',
        },
      ],
    };
  },
});
