import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description: 'Show resume access and a short hiring-oriented summary for Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      title: 'Adi Vamsi Sai Resume',
      fileName: 'Adi_Vamsi_Sai_Resume_GenAI_Engineer.pdf',
      url: '/Adi_Vamsi_Sai_Resume_GenAI_Engineer.pdf',
      summary:
        'A concise snapshot of my GenAI engineering, agentic systems, RAG, backend, and full-stack work, plus AWS and Java certifications.',
      highlights: [
        'Python Developer experience at Capgemini focused on LLM applications, reusable integration patterns, guardrails, and backend reliability',
        'Software Engineer experience at New Relic building Java/Spring Boot backend services for observability workflows',
        'Independent AI projects across RAG, multi-agent orchestration, LLM observability, and LLM-powered CRM systems',
        'AWS Certified Cloud Practitioner and Oracle Certified Professional, Java SE 17 Developer',
      ],
    };
  },
});
