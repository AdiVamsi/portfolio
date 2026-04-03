import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description: 'Show resume access and a short hiring-oriented summary for Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      title: 'Adi Vamsi Sai Resume',
      fileName: 'Adi_Vamsi_Sai_Resume.pdf',
      url: '/resume.pdf',
      summary:
        'A concise snapshot of my backend engineering, applied AI systems work, project experience, and education.',
      highlights: [
        '3+ years spanning backend systems, workflow automation, and applied AI',
        'Current Python Developer building practical LLM-enabled workflows',
        'Strong overlap with AI Engineer and Backend Engineer roles',
        'Graduate degree in Information Technology with a 3.8 GPA',
      ],
    };
  },
});
