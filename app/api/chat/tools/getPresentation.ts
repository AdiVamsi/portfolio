import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description: 'Show a polished introduction and positioning summary for Adi Vamsi Sai',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      name: 'Adi Vamsi Sai Maddirala',
      headline:
        'GenAI Engineer | Agentic Systems & RAG | Python, AWS, Full-Stack | Building Production-Grade AI Systems',
      latestRole: 'Python Developer',
      company: 'Capgemini',
      location: 'San Antonio, TX',
      summary:
        'I’m a GenAI engineer with 4+ years building production-style LLM applications and agentic systems in Python — RAG, multi-agent orchestration, embeddings and vector retrieval, and natural-language interfaces — on a strong backend, full-stack, and AWS foundation. I ship evaluable, guardrailed AI features end to end and optimize for reliability and performance.',
      tagline: 'Production-grade AI systems for real workflow use.',
      openTo:
        'AI Engineer, Applied AI Engineer, GenAI Engineer, LLM Application Engineer, Backend Engineer, and Software Engineer roles',
      metrics: ['GenAI + Agentic Systems', 'Python + APIs', 'RAG & Multi-Agent', 'AWS Certified', '4+ years experience'],
      differentiators: [
        'I focus on AI systems that connect model calls to dependable backend workflows.',
        'I care about clear inputs, observability, validation, retries, and human handoff paths.',
        'I build independent AI projects across RAG, multi-agent orchestration, LLM observability, and agentic workflows.',
      ],
      focusAreas: ['Python backend services', 'REST APIs', 'LLM applications', 'Workflow automation', 'Production AI systems'],
    };
  },
});
