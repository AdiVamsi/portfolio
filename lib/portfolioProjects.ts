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
    stack: ['Next.js', 'FastAPI', 'Python', 'LangChain', 'OpenAI', 'PostgreSQL', 'WhatsApp API'],
    github: 'https://github.com/AdiVamsi/indian-sme-engine',
    proofPoints: ['Lead workflow automation', 'Grounded responses', 'Human handoff design'],
  },
  {
    slug: 'agent-hub',
    type: 'project',
    name: 'AgentHub',
    year: '2025',
    category: 'Systems Catalog',
    status: 'active',
    role: 'Workflow design + agent architecture',
    description:
      'A working catalog of agent workflows spanning qualification, grounded Q&A, callback scheduling, and operator handoff patterns.',
    impact:
      'Useful as both a portfolio system and a design space for production agent workflows, not just isolated prompt experiments.',
    features: [
      'Qualification agent pattern',
      'Grounded FAQ / RAG workflow',
      'Callback scheduling workflow',
      'Operator handoff design',
      'Planned automated research flow',
    ],
    stack: ['LangGraph', 'LangChain', 'FastAPI', 'Python', 'Next.js', 'PostgreSQL', 'OpenAI', 'Vector DB'],
    github: 'https://github.com/AdiVamsi/agent-hub',
    proofPoints: ['Agent workflow catalog', 'Production-minded patterns', 'Backend orchestration'],
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
