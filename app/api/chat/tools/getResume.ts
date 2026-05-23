import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description: 'Show resume access and a short hiring-oriented summary for Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      title: 'Adi Vamsi Sai Resume',
      fileName: 'Adi_Vamsi_Sai_AI_Engineer_Resume.pdf',
      url: '/Adi_Vamsi_Sai_AI_Engineer_Resume.pdf',
      summary:
        'A concise snapshot of my AI engineering, backend engineering, Python API work, LLM workflow projects, and education.',
      highlights: [
        'Python Developer experience at Capgemini focused on APIs, automation, LLM integrations, and backend reliability',
        'Software Engineer experience at New Relic building Java/Spring Boot backend services for observability workflows',
        'Independent AI projects across RAG, Text-to-SQL, prompt chaining, agentic workflows, and LLM-powered CRM systems',
        'Master’s degree in Information Technology from Webster University with a 3.6/4.0 GPA',
      ],
    };
  },
});
