import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description: 'Show a polished introduction and positioning summary for Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      name: 'Adi Vamsi Sai Maddirala',
      headline: 'Python Developer and AI Systems Builder',
      currentRole: 'Python Developer',
      company: 'DATARA',
      location: 'San Antonio, TX',
      summary:
        'I build production AI systems that connect language models to real backend workflows, reliable data, and clear human handoffs. My background sits at the intersection of backend engineering, workflow automation, and applied AI.',
      tagline: 'Practical AI systems for real workflow use.',
      openTo: 'AI Engineer and Backend Engineer roles across the US',
      visaStatus: 'STEM OPT',
      metrics: ['3+ years experience', 'Backend + applied AI', 'Python-first', 'Remote or relocation'],
      differentiators: [
        'I focus on AI systems that behave predictably instead of feeling like demos.',
        'I care about workflow ownership, business-state grounding, and clean operational handoffs.',
        'I enjoy shipping products where LLMs are one part of a dependable system, not the whole system.',
      ],
      focusAreas: ['LLM applications', 'Workflow automation', 'Backend APIs', 'Production AI UX'],
    };
  },
});
