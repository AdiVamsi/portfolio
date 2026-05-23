import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'Show contact information for Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      email: 'adivamsi1998@gmail.com',
      phone: '+1 361-300-5950',
      linkedin: 'https://www.linkedin.com/in/adi-m-326667128/',
      github: 'https://github.com/AdiVamsi',
      location: 'San Antonio, TX',
      availability:
        'Open to AI Engineer, Applied AI Engineer, GenAI Engineer, LLM Application Engineer, Backend Engineer, and Software Engineer roles across the US.',
      preferredContact: 'Email or LinkedIn',
      resumeUrl: '/Adi_Vamsi_Sai_AI_Engineer_Resume.pdf',
      note:
        'Happy to share more detail on architecture choices, project walkthroughs, and recent AI workflow work.',
    };
  },
});
