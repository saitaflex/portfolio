export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  tags: string[]
  repo?: string
  live?: string
  award?: string
  featured?: boolean
}

export const profile = {
  name: 'Oussama Labidi',
  handle: 'saitaflex',
  role: 'AI & Full-Stack Developer · Game Development Instructor',
  location: 'Ariana, Tunisia',
  summary:
    'I build applied AI products end to end — from self-hosted LLM pipelines to production web platforms. Five hackathons and innovation programs, three podium/top-10 placements, and I teach Unity & C# at GOMYCODE.',
  email: 'oussamalollabidi@gmail.com',
  github: 'https://github.com/saitaflex',
  linkedin: 'https://www.linkedin.com/in/oussema-labidi',
  cv: `${import.meta.env.BASE_URL}Oussama_Labidi_CV.pdf`,
}

export const projects: Project[] = [
  {
    name: 'Feyaklink',
    tagline: 'AI scam detection & responsible-consumption platform',
    award: 'Selected — 13th Bal des Projets, Esprit',
    description:
      'A dual-purpose platform pairing URL and social-media scam detection with an SDG 12 responsible-consumption scoring module for Tunisian consumers.',
    highlights: [
      'Image authenticity checks, seller certification and community reporting',
      'Multilingual assistant in English, French, Arabic and Tunisian Derja',
      'Self-hosted Ollama LLMs with Groq cloud fallback',
      'Deployed free-tier across Vercel, Render and Supabase',
      'Authored the SDG-first grant application and business case',
    ],
    tags: ['Laravel 11', 'React 18', 'Vite', 'FastAPI', 'Ollama', 'Groq', 'Supabase'],
    featured: true,
  },
  {
    name: 'AI-Verified Escrow',
    tagline: 'Funds release only after AI agents verify the work',
    award: '1st place — The Build Room Hackathon',
    description:
      'Built the AI core of an escrow app: an LLM planner turns prose requirements into a locked acceptance checklist, and sandboxed verifier agents test the deliverables.',
    highlights: [
      'Three verifier agents (HTTP, browser, vision) attaching evidence to each verdict',
      'Owned the escrow state machine and async callback pipeline end to end',
    ],
    tags: ['LLM agents', 'Python', 'State machines'],
    repo: 'https://github.com/saitaflex/smurf',
  },
  {
    name: 'BatchTwin',
    tagline: 'Paperless electronic batch records for pharma manufacturing',
    award: 'Top 6 of 40+ teams — "Automate or Die", IEEE Tunisia',
    description:
      'Replaces the four paper documents of a GMP batch record with one integrated system on top of Odoo — capturing every check, loss and signature, then generating compliant, costed batch records.',
    highlights: [
      '21 CFR Part 11 electronic signatures and hash-chained audit trail',
      'Live costing: real consumption vs. BOM, loss tracking and true yield',
      'Offline-capable PWA, multilingual EN/FR/AR with RTL support',
    ],
    tags: ['FastAPI', 'Python', 'Odoo XML-RPC', 'React', 'PWA'],
    repo: 'https://github.com/saitaflex/batchtwin',
  },
  {
    name: 'BatchTwin Ledger',
    tagline: 'Tamper-proof batch records on Hedera',
    description:
      'Anchors pharmaceutical and food-supplement batch records on the Hedera Consensus Service so manufacturers can prove to GMP inspectors that records were not altered after signing.',
    highlights: [],
    tags: ['Hedera', 'Consensus Service', 'GMP'],
    repo: 'https://github.com/saitaflex/batchtwin-ledger',
  },
  {
    name: 'PyraGrid',
    tagline: 'Wildfire asset-risk intelligence',
    description:
      'Geospatial decision-support platform for wildfire risk to assets, built as a two-person team. I owned the FastAPI engine.',
    highlights: [
      'Real NASA FIRMS fire data for Spain and Tunisia',
      'Ground sensors placed on real OpenStreetMap features',
      '72 tests and a measured AI reliability evaluation',
    ],
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Geospatial'],
    repo: 'https://github.com/saitaflex/pyragrid',
    live: 'https://rural-valley.vercel.app',
  },
  {
    name: 'Honest Crypto Trading Bot',
    tagline: 'Approval-based Binance trading bot with Telegram control',
    description:
      'A disciplined spot-trading bot built around one rule: never lie to yourself about the numbers. It scans BTC and ETH on 4-hour candles for one backtested setup and asks for approval on Telegram before trading.',
    highlights: [
      'Fee-adjusted, pessimistic 6-year backtests with Deflated Sharpe Ratio correction',
      'Stop-losses live on the exchange itself and trail upward as trades win',
      'Config-gated Kelly position sizing, integration tests for money paths, CI',
    ],
    tags: ['Python', 'Binance API', 'Telegram Bot', 'SQLite', 'Backtesting'],
  },
  {
    name: 'nheb_no5rej',
    tagline: 'Undergraduate opportunity scraper',
    description:
      'Continuously discovers scholarships, internships, exchanges, hackathons and summer schools in Scandinavia, Japan and China for two independent tracks — Business Computing and Cybersecurity.',
    highlights: [
      'Python scraper workers respecting robots.txt, with retries and backoff',
      'Pipeline that deduplicates, verifies, classifies and ranks opportunities',
      'Two physically separate MySQL databases behind a track-scoped PHP REST API',
    ],
    tags: ['Python', 'Web scraping', 'PHP', 'MySQL', 'REST API'],
  },
  {
    name: 'RoadGuard AI',
    tagline: 'Real-time road hazard detection & voice co-pilot',
    award: 'RoboAI Hackathon 2025, Esprit',
    description:
      'Detects obstacles, potholes and dangerous road conditions in real time and announces them through voice alerts and a visual overlay — for regular drivers, night drivers and visually impaired users.',
    highlights: [
      'YOLOv8 hazard detection with MiDaS depth estimation for distance',
      'FastAPI REST + WebSocket backend streaming detections',
      'Spoken alerts via pyttsx3 / gTTS',
    ],
    tags: ['Python', 'YOLOv8', 'MiDaS', 'FastAPI', 'Computer Vision'],
  },
  {
    name: 'HyPay + Guardian AI',
    tagline: 'Mobile wallet with explainable fraud detection',
    award: 'AI & Cybersecurity hackathon project, Esprit',
    description:
      'A fintech platform for Tunisia where every transaction is scored in real time by Guardian AI, an explainable fraud-detection engine that tells users why a payment was flagged.',
    highlights: [
      'Multi-factor risk analysis across six transaction dimensions',
      'Transparent explanations for every decision instead of a black box',
      'Flutter mobile app with Google Maps integration',
    ],
    tags: ['Flutter', 'Node.js', 'TypeScript', 'MongoDB', 'Explainable AI'],
  },
  {
    name: 'Sabbēr',
    tagline: 'Tunisian-dialect voice agricultural advisory (IVR)',
    description:
      'Voice-based IVR giving smallholder farmers agricultural guidance without literacy or a smartphone. Deployment regions prioritized through a governorate-level market-gap analysis of rural vulnerability data.',
    highlights: [],
    tags: ['Voice / IVR', 'Data analysis', 'AgriTech'],
  },
  {
    name: 'Aurora',
    tagline: 'Smart floating solar platform',
    description:
      'Co-developed an AI/IoT platform for the Clean Water and Clean Energy SDGs, with pollution-detection models and Power BI dashboards over live environmental sensor data.',
    highlights: [],
    tags: ['IoT', 'Machine Learning', 'Power BI'],
  },
  {
    name: 'Oxygena',
    tagline: 'IoT/AI wildfire early-warning system',
    description: 'Innovation / Climate Challenge project for early wildfire detection using IoT sensing and AI.',
    highlights: [],
    tags: ['IoT', 'AI', 'Climate'],
  },
]

export const experience = [
  {
    role: 'Game Development Instructor',
    org: 'GOMYCODE',
    period: '07/2026 – 08/2026',
    points: [
      'Teach Unity, C# and game-engine fundamentals to beginner cohorts, taking students from core concepts to a playable game built from scratch.',
      'Design hands-on lesson plans covering the Unity Editor workflow, game mechanics and project-based learning.',
    ],
  },
  {
    role: 'Founder & Manager',
    org: 'Banzai Shop',
    period: '10/2022 – Present',
    points: [
      'Founded and run an online sustainable-fashion marketplace — sourcing, digital marketing and sales end to end.',
      'Built a garment upcycling process that turns textile leftovers into new sellable products.',
    ],
  },
  {
    role: 'License, Business Computing',
    org: 'Esprit School of Business',
    period: '2024 – Present',
    points: [],
  },
]

export const achievements: [string, string, string][] = [
  ['1st place', 'The Build Room Hackathon', '08/2026'],
  ['Top 6 / 40+ teams', '"Automate or Die" Hackathon, IEEE Tunisia Section', '07/2026'],
  ['3rd place', 'WAICA Re GreenPrint Hackathon', '05/2026'],
  ['3rd place', 'AI Robotics Bootcamp, Esprit', '12/2025'],
  ['Top 10', 'AixCyber Hackathon — AI & Cybersecurity, Esprit', '12/2025'],
  ['Selected', '13th Bal des Projets, Esprit', '07/2026'],
  ['Virtual Delegate', 'World Bank Youth Summit', '08/2026'],
  ['Participant', 'MASSAI 2025 — Mediterranean & African Summer School on AI', '07/2025'],
]

export const certifications = [
  'Rapid Application Development with LLMs',
  'Building Transformer-Based NLP Applications',
  'Applications of AI for Predictive Maintenance (NVIDIA)',
  'Hedera Hashgraph Developer',
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'R', 'C#'] },
  { group: 'Web & Mobile', items: ['Laravel', 'React', 'Vite', 'Flutter', 'FastAPI', 'XAMPP'] },
  {
    group: 'AI & Data',
    items: ['Machine Learning', 'RNNs', 'LLMs (Ollama, Groq)', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI'],
  },
  { group: 'Databases & Tools', items: ['SQL', 'MySQL', 'Git', 'UML'] },
  { group: 'Automation & Scraping', items: ['Selenium', 'BeautifulSoup', 'n8n'] },
  { group: 'Game Dev', items: ['Unity', 'C#'] },
  { group: 'Spoken', items: ['Arabic (native)', 'French (fluent)', 'English (fluent)'] },
]
