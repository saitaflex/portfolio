export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  tags: string[]
  repo: string
  featured?: boolean
}

export const profile = {
  name: 'Oussama Labidi',
  handle: 'saitaflex',
  role: 'Software Engineer · Industrial & Web Systems',
  location: 'Tunisia',
  summary:
    'I build software where correctness actually matters — from GMP-compliant electronic batch records for pharmaceutical manufacturing to modern web tooling. I care about audit trails, offline resilience, and systems that hold up on a real factory floor.',
  email: 'oussamalollabidi@gmail.com',
  github: 'https://github.com/saitaflex',
}

export const projects: Project[] = [
  {
    name: 'BatchTwin',
    tagline: 'Paperless electronic batch records for pharma manufacturing',
    description:
      'A GMP-compliant eBR system built on a live "digital twin" of the manufacturing line. It replaces four paper documents (Fabrication, two Conditionnement stages, and Contrôle Qualité) with one integrated system that captures every gram lost, every check, and every signature — then auto-generates compliant, costed batch records.',
    highlights: [
      '21 CFR Part 11 electronic signatures with PBKDF2-HMAC-SHA256 (240k rounds)',
      'Tamper-evident, hash-chained audit trail with external append-only anchoring',
      'Live costing: real consumption vs. BOM, loss tracking, and true yield',
      'Change control, auto-opened deviations & CAPA, and SPC drift forecasting',
      'Equipment telemetry over OPC UA, Modbus TCP, PROFINET & EtherNet/IP',
      'Offline-capable PWA, multilingual EN/FR/AR with full RTL support',
    ],
    tags: ['FastAPI', 'Python', 'SQLite (WAL)', 'Odoo XML-RPC', 'OPC UA', 'React', 'ReportLab', 'PWA'],
    repo: 'https://github.com/saitaflex/batchtwin',
    featured: true,
  },
  {
    name: 'vite-react-template',
    tagline: 'React + TypeScript starter, ready for the edge',
    description:
      'My reusable Vite + React + TypeScript template — the way I like to start every front-end project. Wired for Cloudflare Workers deployment with Wrangler, so a project can go from clone to the edge with a single command.',
    highlights: [
      'Vite 6 with instant hot-module reloading',
      'Strict TypeScript, split configs for app / node / worker',
      'Cloudflare Workers deployment via Wrangler',
      'ESLint preconfigured out of the box',
    ],
    tags: ['TypeScript', 'React', 'Vite', 'Cloudflare Workers', 'Wrangler', 'ESLint'],
    repo: 'https://github.com/saitaflex/vite-react-template',
  },
  {
    name: 'index',
    tagline: 'Where it started — learning Git & the web',
    description:
      'A minimal hand-written HTML page from when I was getting comfortable with Git and version control. Small, but it is where the habit of committing everything began.',
    highlights: ['Semantic HTML5 fundamentals', 'First steps with Git version control'],
    tags: ['HTML', 'Git'],
    repo: 'https://github.com/saitaflex/index',
  },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    group: 'Backend & Data',
    items: ['FastAPI', 'SQLite / WAL', 'REST APIs', 'ReportLab', 'XML-RPC'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Vite', 'PWA', 'Recharts', 'Responsive UI'],
  },
  {
    group: 'Industrial & Integrations',
    items: ['Odoo', 'OPC UA', 'Modbus TCP', 'PROFINET', 'EtherNet/IP'],
  },
  {
    group: 'Practices',
    items: ['GMP / 21 CFR Part 11', 'DevOps & CI/CD', 'Audit trails', 'SPC'],
  },
]
