import { tool } from 'ai';
import { z } from 'zod';
import { portfolioProjects } from '@/lib/portfolioProjects';

export const getProjects = tool({
  description: 'Show Adi Vamsi Sai projects with product context, stack, and impact',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      projects: portfolioProjects,
    };
  },
});
