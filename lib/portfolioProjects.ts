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
      'An LLM-powered multi-tenant CRM for Indian SMBs — coaching centers, gyms, salons, clinics, restaurants, and retail — that captures leads from web forms and WhatsApp, runs them through a vertical-specific AI agent engine for classification and scoring, and surfaces prioritized follow-ups through a real-time operator dashboard.',
    impact:
      'Designed around practical business workflows: lead intake, qualification, prioritization, follow-up automation, and operator handoff.',
    features: [
      'Engineered JWT auth, tenant data isolation, WebSocket updates, lead APIs, AI scoring logic, and an admin action queue',
      'Captured leads from web forms and WhatsApp into a shared operator workflow',
      'Built a vertical-specific LLM intent classifier returning strict JSON (tags, category, confidence, suggested next action) with per-business AgentConfig presets',
      'Built real-time dashboard updates so operators can see prioritized follow-ups without refreshing',
      'Modeled a NEW -> CONTACTED -> QUALIFIED -> WON/LOST lead workflow with rate-limited, honeypot-protected public capture endpoints and a per-lead activity timeline',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'WebSockets', 'JWT', 'LLM APIs'],
    github: 'https://github.com/AdiVamsi/indian-sme-engine',
    proofPoints: ['Multi-tenant CRM', 'AI lead scoring', 'Real-time operator dashboard', '100+ backend/API tests'],
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
      'A self-improving collection of 15 AI agents built on Karpathy\'s AutoResearch pattern — each agent optimizes one real engineering metric (LLM routing cost, code performance, dependency security, AI output drift, CI build time, and more) overnight through program.md task contracts and git commit/reset loops, at roughly 12 experiments per hour.',
    impact:
      'Built to explore repeatable agentic orchestration patterns where agents can generate artifacts, score outputs, keep clean history, and iterate through overnight optimization loops.',
    features: [
      'Designed a meta-agent workflow for overnight optimization loops with clean git history',
      'Used program.md as a task contract so agents can improve against explicit goals',
      'Shipped a 15-agent catalog (llm-cost-pilot, code-autoresearch, dep-sentinel, ai-drift-monitor, ci-speedup, docker-slim, sql-optimizer, and more), each targeting one measurable metric',
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
  {
    slug: 'insurance-claim-rag',
    type: 'project',
    name: 'Insurance Claims RAG',
    year: '2026',
    category: 'Grounded RAG System',
    status: 'complete',
    role: 'RAG system design + backend engineering',
    description:
      'A grounded retrieval service for insurance claim adjudication that answers policy questions with a verbatim cited clause and a structured JSON audit trail, refusing instead of guessing when the corpus does not support an answer.',
    impact:
      'Runs every query through a LangGraph pipeline with three independent refusal gates (classifier confidence, retrieval similarity, citation verification) and ships with a 21-question gold eval that fails the build on regressions in hit-rate or refusal precision.',
    features: [
      'Built a 5-stage LangGraph pipeline (classify -> retrieve -> ground -> verify -> format) where any stage can refuse, recording which gate tripped',
      'Returned structured JSON (decision, cited clause with page/section, confidence band, audit trail) instead of free-form chat answers',
      'Ingested PDFs with heading-aware chunking, MiniLM embeddings, and ChromaDB storage filtered by policy type',
      'Wrote a reproducible eval harness (21 gold Q&A pairs) enforcing hit@3 and refusal-precision floors',
      'Exposed a FastAPI service (/ask, /classify, /health) with env-configurable similarity thresholds',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB', 'sentence-transformers', 'Pydantic'],
    github: 'https://github.com/AdiVamsi/insurance-claim-rag',
    proofPoints: ['Cited, refusal-aware RAG', 'Structured JSON audit trail', '95% refusal precision on eval set'],
  },
  {
    slug: 'agentops-monitor',
    type: 'project',
    name: 'AgentOps Monitor',
    year: '2026',
    category: 'LLM Observability Platform',
    status: 'active',
    role: 'Backend + observability engineering',
    description:
      'A self-hostable LLM observability backend that wraps any LLM call and turns it into structured trace data — latency, tokens, cost, and errors — exposed through FastAPI, a Prometheus endpoint, a Streamlit dashboard, and a budget-guardrail circuit breaker.',
    impact:
      'Built for teams that need cost, latency, and reliability visibility into LLM usage without sending prompts to a third-party SaaS — durable append-only trace logs, hand-rolled p50/p95/p99 percentile math, and a pre-request guardrail that denies calls before they bust the daily budget.',
    features: [
      'Built an instrumentation SDK (tracer.span() + @observe decorator) with nested agent-trace propagation via contextvars',
      'Implemented an append-only JSONL trace store with an in-memory query index for latency/cost/error aggregation',
      'Added a pre-request budget guardrail that denies LLM calls before they exceed a daily spend limit',
      'Exposed FastAPI routes for ingest, query, metrics, and alerts, plus a Prometheus /metrics endpoint for Grafana',
      'Covered pricing, storage, aggregation, alerting, and provider fallback with 44 passing tests',
    ],
    stack: ['Python', 'FastAPI', 'Prometheus', 'Streamlit', 'Docker'],
    github: 'https://github.com/AdiVamsi/agentops-monitor',
    proofPoints: ['44 passing tests', 'Budget guardrail circuit breaker', 'Prometheus + Grafana ready'],
  },
  {
    slug: 'hackathon-intelligent-agent',
    type: 'project',
    name: 'Buildathon Intel Agent',
    year: '2026',
    category: 'Multi-Agent RAG System',
    status: 'active',
    role: 'Multi-agent system design + backend engineering',
    description:
      'A multi-agent RAG system that takes a company, sponsor, or judge name and produces a citeable intel brief — fit score, tailored project angles, talking points, and a full execution trace — grounded in a retrieved knowledge base.',
    impact:
      'Implements a 7-step orchestrator -> retrieve -> research -> score -> angle -> network -> synthesize pipeline where every step is traced for cost and latency, answers are grounded with inspectable citations, and low-confidence briefs are flagged for human review instead of guessed.',
    features: [
      'Designed a multi-agent pipeline with an orchestrator and four specialist agents (research, fit-scoring, angle, networking)',
      'Grounded every answer in a retrieved corpus with inspectable citations and a transparent chunk viewer',
      'Used a template-first, LLM-enhanced design so output stays correct even if the LLM call fails',
      'Built a provider-switching layer (mock / Groq / Featherless / OpenAI) behind one .complete() interface',
      'Shipped CLI, FastAPI, and Streamlit entry points with pytest coverage and per-step observability logging',
    ],
    stack: ['Python', 'FastAPI', 'Streamlit', 'RAG', 'Multi-Agent Orchestration'],
    github: 'https://github.com/AdiVamsi/hackathon-intelligent-agent',
    proofPoints: ['Multi-agent pipeline', 'Grounded citations', 'Human-in-the-loop handoff'],
  },
  {
    slug: 'cleanmap-hyderabad',
    type: 'project',
    name: 'CleanMap Hyderabad',
    year: '2026',
    category: 'Civic Tech / AI Reporting App',
    status: 'active',
    role: 'Full-stack engineering + AI integration',
    description:
      'A civic reporting platform for Hyderabad where residents report garbage and cleanliness issues with a photo and location, track each spot through to cleanup, and browse community impact stories on an interactive map.',
    impact:
      'Pairs a public reporting flow with an admin review queue and Gemini-powered photo analysis and caption generation, so reports arrive pre-classified and admins can move spots through a clear status timeline from reported to cleaned.',
    features: [
      'Built a location-gated report flow (LocationGate + ReportForm) with image compression before upload',
      'Integrated the Gemini API for AI photo analysis and auto-generated captions on submitted reports',
      'Built an admin dashboard with a spot review queue, status panel, and per-spot status timeline',
      'Rendered an interactive Mapbox map of active spots with severity badges and impact cards',
      'Built a stories section so residents can browse cleanup outcomes alongside site-wide impact stats',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox GL', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/AdiVamsi/cleanmap-hyderabad',
    proofPoints: ['AI photo analysis', 'Live map of reports', 'Admin review workflow'],
  },
];
