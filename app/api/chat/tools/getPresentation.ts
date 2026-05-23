import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description: 'Show a polished introduction and positioning summary for Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      name: 'Adi Vamsi Sai Maddirala',
      headline:
        'AI Engineer | Backend Engineer | Python, APIs, LLM Workflows, Automation | Building Production-Grade AI Systems',
      latestRole: 'Python Developer',
      company: 'Capgemini',
      location: 'San Antonio, TX',
      summary:
        'I’m a Python and backend developer focused on building APIs, automation workflows, and AI-enabled systems that solve real business problems. My work spans Python backend development, LLM API integrations, workflow automation, REST APIs, and production reliability improvements.',
      tagline: 'Production-grade AI systems for real workflow use.',
      openTo:
        'AI Engineer, Applied AI Engineer, GenAI Engineer, LLM Application Engineer, Backend Engineer, and Software Engineer roles',
      metrics: ['Python + APIs', 'LLM workflows', 'Automation systems', 'Backend reliability', '3+ years experience'],
      differentiators: [
        'I focus on AI systems that connect model calls to dependable backend workflows.',
        'I care about clear inputs, observability, validation, retries, and human handoff paths.',
        'I build independent AI projects across RAG, Text-to-SQL, prompt chaining, and agentic workflows.',
      ],
      focusAreas: ['Python backend services', 'REST APIs', 'LLM applications', 'Workflow automation', 'Production AI systems'],
    };
  },
});
