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
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'WebSockets', 'JWT', 'LLM APIs'],
    github: 'https://github.com/AdiVamsi/indian-sme-engine',
    proofPoints: ['Lead workflow automation', 'Grounded responses', 'Human handoff design'],
  },
  {
    slug: 'agent-hub',
    type: 'project',
    name: 'AgentHub',
    year: '2025',
    category: 'Autonomous Agents',
    status: 'active',
    role: 'Agent architecture + autonomous systems',
    description:
      'A platform of six self-improving AI agents inspired by Karpathy\'s AutoResearch pattern. Each agent runs autonomous improve-measure-commit loops targeting a specific engineering concern.',
    impact:
      'Demonstrates production-grade autonomous agent design — not single-prompt chains, but agents that observe, act, evaluate, and iterate without human steering.',
    features: [
      'LLM cost routing agent that optimizes model selection per task',
      'Code performance optimization agent with benchmark-driven commits',
      'Dependency security scanner with automated patch proposals',
      'AI drift monitoring agent that detects model output degradation',
      'Repository maintenance agent for hygiene and cleanup automation',
      'CI pipeline speedup agent that profiles and optimizes build times',
    ],
    stack: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'OpenAI', 'Git', 'Docker'],
    github: 'https://github.com/AdiVamsi/agent-hub',
    proofPoints: ['6 autonomous agents', 'AutoResearch pattern', 'Self-improving loops'],
  },
  {
    slug: 'insurance-claims-rag',
    type: 'project',
    name: 'Insurance Claims RAG Assistant',
    year: '2026',
    category: 'Applied AI / Insurance',
    status: 'active',
    role: 'LLM app architecture + domain grounding',
    description:
      'A claims-intake assistant that grounds answers in a policy-document corpus and surfaces the specific clause used for each decision, so an adjuster can audit the response instead of trusting a black box.',
    impact:
      'Targets the exact shape of insurance LLM work: narrow domain, high audit requirements, and a handoff from automated triage to human review. Built to show production-minded RAG patterns, not a naked chat wrapper.',
    features: [
      'Chunked embeddings over policy PDFs with per-clause source attribution',
      'Claim-type classifier routes each query to the correct policy section',
      'Answer guardrails: will decline instead of fabricating when confidence is low',
      'Structured output for downstream adjuster review (decision, cited clause, rationale)',
      'Evaluation harness with gold-standard Q&A pairs for regression testing',
    ],
    stack: [
      'Python',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'ChromaDB',
      'sentence-transformers',
      'OpenAI',
      'pypdf',
      'Pydantic',
    ],
    github: 'https://github.com/AdiVamsi/insurance-claim-rag',
    proofPoints: ['Domain-grounded RAG', 'Audit-friendly citations', 'Adjuster handoff design'],
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
      'A single repository that packages five applied AI apps into one consistent codebase, covering chat, prompt chaining, summarization, text-to-SQL, and multi-document RAG.',
    impact:
      'Shows breadth without feeling scattered: every app shares the same provider abstraction, UI conventions, and engineering standards while demonstrating a different practical LLM pattern.',
    features: [
      'Provider-agnostic architecture that works with OpenAI and local Ollama models',
      'Shared LLM client and reusable UI helpers across all five apps',
      'Honest guardrails like read-only SQL execution and source-aware RAG answers',
      'Readable, portfolio-friendly code structure with logic separated from UI',
      'A practical range of LLM patterns instead of one-off demos',
    ],
    stack: [
      'Python',
      'Streamlit',
      'OpenAI',
      'Ollama',
      'SQLite',
      'SQLAlchemy',
      'pandas',
      'ChromaDB',
      'sentence-transformers',
      'pypdf',
    ],
    github: 'https://github.com/AdiVamsi/ai-apps-portfolio',
    proofPoints: ['5 applied AI apps', 'OpenAI + Ollama', 'Shared architecture'],
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
  {
    slug: 'titan-3',
    type: 'project',
    name: 'Titan-3',
    year: '2026',
    category: 'AI-Powered Tooling',
    status: 'active',
    role: 'Full-stack engineering + AI orchestration',
    description:
      'An intelligent job-hunt dashboard that automates job ingestion from Greenhouse and Lever, scores opportunities with multi-provider AI (Claude + OpenAI), generates review packets, and tracks applications through a unified pipeline.',
    impact:
      'Shows queue-based architecture thinking (BullMQ), browser automation (Playwright), and multi-provider AI orchestration in a real personal-use product — not a tutorial clone.',
    features: [
      'Automated job ingestion from Greenhouse and Lever career pages',
      'Multi-provider AI scoring with Claude and OpenAI',
      'BullMQ-powered job queue for reliable async processing',
      'Review packet generation with structured fit analysis',
      'Full application tracking with pipeline stages',
      'Playwright-based browser automation for data extraction',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'BullMQ', 'Playwright', 'Claude API', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/AdiVamsi/titan-3',
    proofPoints: ['Queue architecture', 'Multi-provider AI', 'Browser automation'],
  },
  {
    slug: 'react-graphql-app',
    type: 'project',
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
    proofPoints: ['Full-stack delivery', 'GraphQL integration', 'Frontend system thinking'],
  },
];
