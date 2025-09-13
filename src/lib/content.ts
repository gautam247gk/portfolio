export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
  tech?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Realtime Collaboration Suite",
    description:
      "A Next.js + WebSocket powered collaborative editor with presence, CRDT-based syncing, and fine‑grained access control.",
    tech: [
      "Next.js",
      "TypeScript",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
      "TailwindCSS",
    ],
    github: "https://github.com/gautam247gk",
    demo: "https://example.com",
    image: "/me.png",
  },
  {
    title: "Serverless Image Pipeline",
    description:
      "On‑demand image processing pipeline with edge caching, transformations, and signed URLs.",
    tech: ["Cloudflare Workers", "R2", "Sharp", "Vercel", "CI/CD"],
    github: "https://github.com/gautam247gk",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Beautiful, real‑time analytics with stream ingestion, anomaly detection, and role‑based reports.",
    tech: ["Next.js", "tRPC", "Kafka", "ClickHouse", "Framer Motion"],
    github: "https://github.com/gautam247gk",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    location: "Remote",
    achievements: [
      "Led migration to a modular Next.js platform, improving TTI by 35%.",
      "Shipped role‑based access and audit trails across micro‑frontends.",
      "Mentored 5 engineers; instituted performance budgets and error budgets.",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kubernetes"],
  },
  {
    company: "Globex",
    role: "Full‑Stack Engineer",
    period: "2020 — 2022",
    location: "Bengaluru, IN",
    achievements: [
      "Built multi‑tenant billing and subscription engine.",
      "Implemented platform observability with tracing and SLOs.",
    ],
    tech: ["React", "GraphQL", "MongoDB", "Docker"],
  },
  {
    company: "Initech",
    role: "Software Engineer",
    period: "2018 — 2020",
    achievements: [
      "Delivered internal component library and design tokens.",
      "Automated CI/CD, reducing deploy time by 60%.",
    ],
    tech: ["TypeScript", "Jest", "CI/CD"],
  },
];
