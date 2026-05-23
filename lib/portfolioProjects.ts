export type PortfolioSubproject = {
  name: string;
  pattern: string;
  summary: string;
  stack: string[];
};

export type PortfolioProject = {
  slug: string;
  type: 'project' | 'collection';
  name: string;
  year: string;
  category: string;
  status: 'live' | 'active' | 'complete';
  role: string;
  description: string;
  impact: string;
  features: string[];
  stack: string[];
  github: string;
  proofPoints?: string[];
  subprojects?: PortfolioSubproject[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'indian-sme-engine',
    type: 'project',
    name: 'Indian SME Engine',
    year: '2025',
    category: 'Flagship AI Product',
    status: 'active',
    role: 'Backend engineering + LLM workflow design',
    description:
      'An LLM-powered multi-tenant CRM for Indian SMBs that captures leads from web forms and WhatsApp, classifies and scores them with AI, and surfaces prioritized follow-ups through a real-time operator dashboard.',
    impact:
      'Designed around practical business workflows: lead intake, qualification, prioritization, follow-up automation, and operator handoff.',
    features: [
      'Engineered JWT auth, tenant data isolation, WebSocket updates, lead APIs, AI scoring logic, and an admin action queue',
      'Captured leads from web forms and WhatsApp into a shared operator workflow',
      'Classified and scored incoming leads with LLM APIs to support faster follow-up decisions',
      'Built real-time dashboard updates so operators can see prioritized follow-ups without refreshing',
      'Modeled clean handoffs between automation and human review for practical SMB operations',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'WebSockets', 'JWT', 'LLM APIs'],
    github: 'https://github.com/AdiVamsi/indian-sme-engine',
    proofPoints: ['Multi-tenant CRM', 'AI lead scoring', 'Real-time operator dashboard'],
  },
  {
    slug: 'agent-hub',
    type: 'project',
    name: 'Agent Hub',
    year: '2025',
    category: 'Agentic Workflow Platform',
    status: 'active',
    role: 'Meta-agent workflow design',
    description:
      'A self-improving agent platform where agents optimize tasks through program.md, artifact generation, scalar scoring, and git commit/reset loops.',
    impact:
      'Built to explore repeatable agentic orchestration patterns where agents can generate artifacts, score outputs, keep clean history, and iterate through overnight optimization loops.',
    features: [
      'Designed a meta-agent workflow for overnight optimization loops with clean git history',
      'Used program.md as a task contract so agents can improve against explicit goals',
      'Added artifact generation and scalar scoring to make agent progress measurable',
      'Supported git commit/reset loops so experiments can be accepted or rolled back cleanly',
      'Made the workflow compatible with Claude, Codex, OpenAI, Gemini, and other LLM providers',
    ],
    stack: ['Python', 'Claude', 'Codex', 'AutoResearch', 'Agentic Orchestration'],
    github: 'https://github.com/AdiVamsi/agent-hub',
    proofPoints: ['Meta-agent loop', 'Clean git history', 'Provider-compatible design'],
  },
  {
    slug: 'ai-apps-portfolio',
    type: 'collection',
    name: 'AI Apps Portfolio',
    year: '2025',
    category: 'Applied AI Collection',
    status: 'active',
    role: 'LLM app architecture + shared platform design',
    description:
      'A collection of applied AI apps including a chatbot, prompt chaining app, YouTube summarizer, guarded Text-to-SQL app, and multi-document RAG system.',
    impact:
      'Shows practical coverage across RAG, Text-to-SQL, prompt chaining, transcript processing, provider switching, and retrieved-chunk transparency.',
    features: [
      'Designed reusable LLM client patterns for switching between OpenAI and Ollama',
      'Added transcript processing for YouTube summarization workflows',
      'Built SQL guardrails for safer Text-to-SQL interactions',
      'Added retrieved-chunk transparency and document citation behavior for RAG answers',
      'Kept app logic organized so each demo isolates a practical LLM pattern',
    ],
    stack: ['Streamlit', 'RAG', 'ChromaDB', 'Text-to-SQL', 'OpenAI/Ollama'],
    github: 'https://github.com/AdiVamsi/ai-apps-portfolio',
    proofPoints: ['Applied AI apps', 'Provider switching', 'RAG + Text-to-SQL'],
    subprojects: [
      {
        name: 'mini-chatbot',
        pattern: 'Chat state + provider abstraction',
        summary:
          'A minimal chat app with session history, editable system prompts, and a swappable OpenAI or Ollama backend.',
        stack: ['Python', 'Streamlit', 'OpenAI', 'Ollama'],
      },
      {
        name: 'chaining-pipeline',
        pattern: 'Prompt chaining / structured reasoning',
        summary:
          'A four-stage Analyze -> Plan -> Execute -> Format workflow that makes intermediate reasoning visible instead of hiding it in one prompt.',
        stack: ['Python', 'Streamlit', 'OpenAI', 'Ollama'],
      },
      {
        name: 'youtube-summarizer',
        pattern: 'External data ingestion + summarization',
        summary:
          'Summarizes YouTube videos from transcript data with support for multiple URL formats, transcript fallback logic, and short or detailed output modes.',
        stack: ['Python', 'Streamlit', 'youtube-transcript-api', 'OpenAI', 'Ollama'],
      },
      {
        name: 'text-to-sql',
        pattern: 'NL-to-SQL with schema prompting + guardrails',
        summary:
          'Translates natural-language questions into SQL against a sample e-commerce database and only allows safe single-statement SELECT execution.',
        stack: ['Python', 'Streamlit', 'SQLite', 'pandas', 'OpenAI', 'Ollama'],
      },
      {
        name: 'multi-doc-rag',
        pattern: 'Retrieval-augmented generation with citations',
        summary:
          'Supports multi-file upload, local embeddings, chunk retrieval, and answers with document-level source attribution.',
        stack: ['Python', 'Streamlit', 'ChromaDB', 'sentence-transformers', 'pypdf', 'OpenAI', 'Ollama'],
      },
    ],
  },
];
