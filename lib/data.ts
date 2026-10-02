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
  personalInfo.intro,
  "Currently working as an AI Consultant - Software Engineer at G-LOGIC S.A., integrating AI-driven solutions into business workflows and applications.",
  "Experienced with Next.js, TypeScript, PostgreSQL, ASP.NET Core, Spring Boot, React, and REST APIs. Reliable, collaborative, and driven to build products that solve real problems."
];

export const experience = [
  {
    role: "AI Consultant - Software Engineer",
    company: "G-LOGIC S.A.",
    period: "Sep 2026 - Present",
    details: [
      "Providing AI consulting and software engineering support, integrating AI-driven solutions into business workflows and applications."
    ]
  },
  {
    role: "Software Engineer",
    company: "Stealth Startup - Multi-Tenant Hotel Operations SaaS",
    period: "Feb 2026 - Aug 2026",
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

export type ProjectShot = { src: string; alt: string };

export type Project = {
  title: string;
  tagline?: string;
  description: string;
  repo: string;
  stack: string[];
  /** First desktop shot is the cover; `mobile` sits on top of it in a phone frame. */
  shots?: { desktop: ProjectShot[]; mobile?: ProjectShot };
};

export const projects: Project[] = [
  {
    title: "GreenPeak Solutions",
    tagline: "Full-stack marketing site, blog engine & admin CMS",
    description:
      "Full-stack TypeScript platform for small-business marketing: React marketing site, Markdown blog with categories and search, lead-capture form with SMTP notifications, and a JWT-secured admin workspace for publishing content.",
    repo: "https://github.com/KacperDula/GreenPeak-Solutions",
    stack: ["React", "TypeScript", "Express", "SQLite", "Tailwind", "JWT"],
    shots: {
      desktop: [
        { src: "/projects/greenpeak/home.jpg", alt: "GreenPeak home page hero" },
        { src: "/projects/greenpeak/services.jpg", alt: "GreenPeak services page" },
        { src: "/projects/greenpeak/blog.jpg", alt: "GreenPeak blog with category filters" },
        { src: "/projects/greenpeak/blog-post.jpg", alt: "GreenPeak blog post page" },
        { src: "/projects/greenpeak/about.jpg", alt: "GreenPeak about page" },
        { src: "/projects/greenpeak/contact.jpg", alt: "GreenPeak contact form" },
        { src: "/projects/greenpeak/admin.jpg", alt: "GreenPeak admin login" }
      ],
      mobile: { src: "/projects/greenpeak/home-mobile.jpg", alt: "GreenPeak home page on mobile" }
    }
  },
  {
    title: "React Analytics Dashboard",
    tagline: "Live KPIs, charts & activity feeds",
    description:
      "Responsive analytics dashboard: KPI cards, area, radar and donut charts, sales tables and activity feeds built from 20+ reusable React components.",
    repo: "https://github.com/KacperDula/React-Analytics-Dashboard",
    stack: ["React", "ApexCharts", "ECharts", "Bootstrap 5", "REST API"],
    shots: {
      desktop: [
        { src: "/projects/analytics/overview.jpg", alt: "Analytics dashboard overview with KPI cards and reports chart" },
        { src: "/projects/analytics/sales-traffic.jpg", alt: "Analytics dashboard top-selling table and website traffic chart" }
      ],
      mobile: { src: "/projects/analytics/reports-mobile.jpg", alt: "Analytics dashboard reports chart on mobile" }
    }
  },
  {
    title: "Mini Quiz App",
    tagline: "React fundamentals assessment",
    description:
      "10-question React fundamentals quiz with progress tracking, instant scoring and a restart flow — a deliberately small component tree with all state in one place.",
    repo: "https://github.com/KacperDula/Mini-Quiz-App-Skill4Jobs-SEVOPA",
    stack: ["React 19", "Vite", "Accessible UI"],
    shots: {
      desktop: [
        { src: "/projects/mini-quiz/mid-quiz.jpg", alt: "Mini Quiz mid-quiz question with a selected answer" },
        { src: "/projects/mini-quiz/question.jpg", alt: "Mini Quiz first question" },
        { src: "/projects/mini-quiz/result.jpg", alt: "Mini Quiz final score screen" }
      ],
      mobile: { src: "/projects/mini-quiz/result-mobile.jpg", alt: "Mini Quiz final score on mobile" }
    }
  },
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
    title: "SalaryScope - Salary Prediction",
    tagline: "ML model served via Flask",
    description:
      "Machine learning web app that predicts salaries from experience, education and job title, with a benchmark chart comparing the prediction to junior, mid and senior levels. Dockerized and deployed on Cloud Run.",
    repo: "https://github.com/KacperDula/SalaryPrediction-Python",
    stack: ["Python", "Scikit-Learn", "Pandas", "Flask", "Docker"],
    shots: {
      desktop: [
        { src: "/projects/salary/benchmark.jpg", alt: "SalaryScope prediction with salary benchmark chart" },
        { src: "/projects/salary/prediction.jpg", alt: "SalaryScope job details form and predicted salary" },
        { src: "/projects/salary/home.jpg", alt: "SalaryScope landing view" }
      ],
      mobile: { src: "/projects/salary/prediction-mobile.jpg", alt: "SalaryScope prediction on mobile" }
    }
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
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "languages",
  "contact"
] as const;
