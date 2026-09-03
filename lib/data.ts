export const personalInfo = {
  name: "Kacper Dula",
  title: "Software Engineer",
  subtitle: "Building scalable, secure, multi-tenant systems.",
  intro:
    "Software Engineer with a strong academic foundation in Computer Science and hands-on experience shipping full-stack applications to production.",
  location: "Athens, Greece",
  phone: "+30 694 525 8923",
  email: "kacper.dula.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/kacper-dula/",
  github: "https://github.com/KacperDula",
  militaryService: "Completed"
};

export const about = [
  "Software Engineer with a strong academic foundation in Computer Science and hands-on experience shipping full-stack applications to production.",
  "Currently building a stealth-mode SaaS startup for the hospitality industry, leading architecture, security hardening, and Azure cloud deployment.",
  "Experienced with Next.js, TypeScript, PostgreSQL, ASP.NET Core, Spring Boot, React, and REST APIs. Reliable, collaborative, and driven to build products that solve real problems."
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Stealth Startup - Multi-Tenant Hotel Operations SaaS",
    period: "Feb 2025 - Present",
    details: [
      "Building a multi-tenant SaaS platform (Next.js 16, TypeScript, PostgreSQL, Drizzle ORM) with 22 REST API endpoints, 7 database tables, and tenant isolation via hotelId scoping on every query",
      "Designed a secure guest check-in flow with hashed ID verification (SHA-256 + salt), Zod schema validation, input sanitization, and rate limiting to prevent brute-force and XSS attacks",
      "Built an admin panel with JWT + email 2FA, 3-tier RBAC (Owner/Manager/Receptionist), CSRF protection, and DB-backed rate limiting across all state-changing endpoints",
      "Deployed to production on Azure Container Apps + Azure PostgreSQL + Container Registry with Docker; added 7 security headers (CSP, HSTS, X-Frame-Options) and fail-fast env validation",
      "Leading 3 developers in a 5-person team; authored 23 docs including 5 architecture decision records, operational runbooks, a debugging playbook, and 20 system invariant rules"
    ]
  },
  {
    role: "Hospitality Industry",
    company: "Athens, Greece",
    period: "Jun 2020 - Dec 2025",
    details: [
      "Worked in fast-paced environments while completing studies",
      "Developed teamwork, communication, and time management skills"
    ]
  }
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "C#", "Java", "Python", "PHP", "SQL", "C/C++"],
  Frameworks: [
    "Next.js",
    "React.js",
    "ASP.NET Core",
    "Entity Framework Core",
    "Spring Boot",
    "Tailwind CSS"
  ],
  "Cloud & Databases": [
    "Azure Container Apps",
    "Azure PostgreSQL",
    "Azure Container Registry",
    "PostgreSQL",
    "Drizzle ORM",
    "SQLite",
    "MySQL",
    "SQL Server"
  ],
  Security: [
    "JWT authentication",
    "RBAC",
    "CSRF protection",
    "Rate limiting",
    "Input sanitization",
    "CSP / HSTS headers",
    "SHA-256 hashing"
  ],
  "Web & APIs": [
    "REST APIs",
    "WebSockets",
    "Zod validation",
    "HTML5",
    "CSS3",
    "Bootstrap"
  ],
  "Data / ML": ["Pandas", "NumPy", "Scikit-Learn"],
  "Tools & Concepts": [
    "Git & GitHub",
    "Docker",
    "Azure CLI",
    "Docusaurus",
    "OOP principles",
    "Agile workflows"
  ]
};

export const projects = [
  {
    title: "GameStore Minimal API",
    description:
      "Lightweight REST API built with ASP.NET Core, EF Core, and SQLite. Demonstrates clean backend architecture patterns suitable for small storefront systems.",
    repo: "https://github.com/KacperDula/GameStore-Minimal-API",
    stack: ["ASP.NET Core", "EF Core", "SQLite", "REST API"]
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with WebSocket communication (Ratchet), MySQL persistence, and email-verified user onboarding.",
    repo: "https://github.com/KacperDula/Chat-Application",
    stack: ["PHP", "Ratchet", "WebSockets", "MySQL"]
  },
  {
    title: "React Analytics Dashboard",
    description:
      "Responsive analytics dashboard with reusable React components and integrated charting libraries for data visualization.",
    repo: "https://github.com/KacperDula/React-Analytics-Dashboard",
    stack: ["React", "TypeScript", "Charting", "Responsive UI"]
  },
  {
    title: "Salary Prediction System",
    description:
      "End-to-end machine learning workflow: data analysis, model training, and evaluation for salary prediction.",
    repo: "https://github.com/KacperDula/SalaryPrediction-Python",
    stack: ["Python", "Pandas", "NumPy", "Scikit-Learn"]
  }
];

export const education = [
  {
    degree: "Professional Certification - IT Applications Developer",
    school: "Athens University of Economics and Business",
    period: "Feb 2026",
    points: [
      "Team-based labs using Spring Boot, React, and SQL Server",
      "Workshops in software architecture, REST API security, and UX/UI",
      "Enterprise-style development with Git/GitHub"
    ]
  },
  {
    degree: "BSc Computer Science",
    school: "University of Derby (Athens Campus)",
    period: "Jun 2025",
    points: [
      "Second Class Honours (1st Division)",
      "Software engineering, algorithms, databases, AI, and web technologies",
      "Final-year project: ML-powered recommendation system"
    ]
  }
];

export const languages = ["Polish (Native)", "Greek (Native)", "English (Fluent)"];

export const sectionIds = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "languages",
  "contact"
] as const;
