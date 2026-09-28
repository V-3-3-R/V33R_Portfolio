export const profile = {
  name: "Veer Prakash Javadia",
  shortName: "Veer Javadia",
  title: "Full-Stack Developer & AI/ML Engineer",
  location: "Mumbai, India",
  email: "veerjavadia@gmail.com",
  phone: "+91 90823 54425",
  linkedin: "https://linkedin.com/in/veer-javadia",
  github: "https://github.com/V-3-3-R",
  summary:
    "I build things that ship — production-deployed portals, GenAI tools people actually use, and ML models that get published. Full-stack developer with a research streak: co-authored work presented at NIT Jalandhar, and hands-on across Python, JavaScript, and the modern GenAI stack.",
};

export const experience = [
  {
    company: "CyberTech Systems and Software Limited",
    role: "Trainee — SAP",
    period: "Oct 2026 — Apr 2027",
    location: "Mumbai, India",
    incoming: true,
    points: [
      "Selected for a 6-month SAP traineeship at CyberTech Systems, starting October 2026 — following on from the Web Developer internship below.",
    ],
  },
  {
    company: "CyberTech Systems and Software Limited",
    role: "Web Developer Intern",
    period: "Jan 2026 — Apr 2026",
    location: "Mumbai, India",
    incoming: false,
    points: [
      "Built CyberPulse, a secure full-stack internal portal, using Node.js, Express, EJS, and SQL Server — now live in production on Windows IIS.",
      "Implemented authentication, role-based access control, and audit logging to keep access and data integrity tight.",
      "Worked Agile end-to-end: designed the backend, then handled dev, testing, and deployment myself.",
    ],
  },
  {
    company: "LaundryGridz",
    role: "Web Developer / UI-UX Intern",
    period: "Jun 2025 — Aug 2025",
    location: "Mumbai, India",
    incoming: false,
    points: [
      "Prototyped a responsive multi-screen web app for a laundry startup across 8+ screens, using HTML, CSS, JS, and Figma.",
      "Designed the booking flow, service selection, and order tracking in Agile sprints with the founding team.",
      "Shipped front-end fixes that improved cross-device consistency and overall UX.",
    ],
  },
];

export const projects = [
  {
    name: "GenAI Interview Prep Platform",
    period: "Jun 2026 — Jul 2026",
    flagship: true,
    stack: ["React", "Node.js", "MongoDB", "Gemini API", "JWT"],
    description:
      "A full-stack MERN app that turns a resume and job description into a personalized interview prep report — technical and behavioral questions, skill-gap analysis, and a day-by-day study plan, plus an exportable tailored resume PDF.",
    link: null,
    github: "https://github.com/V-3-3-R",
  },
  {
    name: "Multi-Agent Research System",
    period: "May 2026",
    flagship: false,
    stack: ["Python", "LangChain", "Groq", "Tavily", "Streamlit"],
    description:
      "An autonomous 4-stage research pipeline — agents search, read, write, and critique in sequence — built on LLaMA 3.3 70B via Groq, cutting manual research effort significantly.",
    link: null,
    github: "https://github.com/V-3-3-R/Multi-Agent-System",
    pipeline: ["Search", "Read", "Write", "Critique"],
  },
  {
    name: "CyberPulse",
    period: "Jan 2026 — Apr 2026",
    flagship: false,
    stack: ["Node.js", "Express", "EJS", "Bootstrap 5", "SQL Server"],
    description:
      "Production-deployed, role-based internal portal for CyberTech — email-based auth, RBAC, HR CRUD modules, audit logging, SVG-based quality insights, and a Nodemailer email system. Live on Windows IIS.",
    link: null,
    github: null,
  },
  {
    name: "Early Athlete Injury Prediction",
    period: "Aug 2025 — Oct 2025",
    flagship: false,
    stack: ["Python", "XGBoost", "SHAP"],
    description:
      "91% accuracy predicting ACL injury risk, with SHAP-based explainability and an interactive prediction UI. Published in Springer Nature proceedings, presented at SoCTA 2025, NIT Jalandhar.",
    link: null,
    github: "https://github.com/V-3-3-R",
    published: true,
  },
  {
    name: "Dropout Prediction Model",
    period: "Sep 2025 — Oct 2025",
    flagship: false,
    stack: ["Python", "Scikit-learn", "Pandas"],
    description:
      "Ensemble system — Logistic Regression, Random Forest, Gradient Boosting — reaching 92% F1-score forecasting student dropout on JEE data, with feature-importance visualizations.",
    link: null,
    github: "https://github.com/V-3-3-R",
  },
];

export const skills = [
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "XGBoost", "Random Forest", "Gradient Boosting", "Logistic Regression", "Stacking Classifier", "SMOTE", "PCA", "Clustering", "SHAP"],
  },
  {
    category: "Generative AI & Tools",
    items: ["LangChain", "Groq", "Google Gemini API", "Hugging Face Transformers", "Agent Orchestration", "Multi-Agent Systems", "API Integration", "Streamlit"],
  },
  {
    category: "Web Development",
    items: ["Node.js", "Express.js", "React.js", "EJS", "Bootstrap 5", "REST APIs", "JWT Auth", "RBAC", "Nodemailer", "Postman", "Figma"],
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "T-SQL", "HTML/CSS", "SQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Git", "n8n", "Windows IIS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Microsoft SQL Server"],
  },
  {
    category: "Data Engineering",
    items: ["ETL Pipelines", "Pandas/NumPy", "Data Preprocessing", "BeautifulSoup", "Web Scraping"],
  },
  {
    category: "Visualization",
    items: ["Power BI", "Matplotlib", "Seaborn", "Plotly"],
  },
];

export const research = {
  title: "Early Athlete Injury Prediction",
  venue: "Springer Nature Proceedings — SoCTA 2025, NIT Jalandhar",
  description:
    "Co-authored research on predicting ACL injury risk in athletes using XGBoost, reaching 91% accuracy with SHAP-based explainability — presented at SoCTA 2025.",
};

export const education = [
  {
    degree: "B.Tech, Computer Engineering",
    school: "NMIMS University",
    period: "Aug 2021 — Sep 2026",
    location: "Navi Mumbai, India",
  },
  {
    degree: "Higher Secondary Certificate (XII)",
    school: "Jai Hind College — 87.33%",
    period: "Jun 2019 — Mar 2021",
    location: "Mumbai, India",
  },
  {
    degree: "Secondary School Certificate (X)",
    school: "St. Xavier's High School, Fort — 82.60%",
    period: "Jun 2018 — Mar 2019",
    location: "Mumbai, India",
  },
];

export const certificates = [
  "AWS Academy Graduate — Cloud Architecting",
  "GenAI 101 — Mastering LLMs",
  "Introduction to Cloud Security",
  "SoCTA 2025 — Springer Nature Paper Presentation",
  "IoT Security Specialist Program",
  "Full Stack Developer Course",
];
