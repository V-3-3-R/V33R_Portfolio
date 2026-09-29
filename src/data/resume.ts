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
    "I build things that ship — a role-based portal live in production at CyberTech Systems, GenAI tools people actually use, and ML models that get published. Full-stack developer with a research streak: co-authored two research papers, one published in Springer Nature proceedings and presented at SoCTA 2025, NIT Jalandhar.",
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
      "Collaborated in an Agile team to design and build CyberPulse, a secure full-stack internal portal, from initial architecture through internal handoff.",
      "Owned backend development — architecture and testing — ensuring scalability and reliability for cross-departmental internal use.",
      "Translated access-control and audit requirements into a secure, role-based system used for daily internal operations.",
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
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "JWT"],
    description:
      "A full-stack MERN app that turns a resume and job description into a personalized interview prep report — technical and behavioral questions, skill-gap analysis, and a day-by-day study plan — with JWT auth and an exportable tailored resume PDF.",
    link: null,
    github: "https://github.com/V-3-3-R/GenAI-Interview-Prep-Platform",
  },
  {
    name: "Multi-Agent System",
    period: "May 2026",
    flagship: false,
    stack: ["Python", "LangChain", "Groq", "Tavily", "Streamlit"],
    description:
      "An autonomous 4-stage research pipeline — agents search, scrape, write, and self-critique in sequence — built on LLaMA 3.3 70B via Groq to cut manual research effort.",
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
      "Role-based internal portal for CyberTech, live in production — email-based auth, RBAC, audit logging, HR CRUD modules, and SVG-based Quality Insights dashboards.",
    link: null,
    github: null,
  },
  {
    name: "Hybrid IDS",
    period: "Nov 2025",
    flagship: false,
    stack: ["Python", "Scikit-learn", "Flask", "NSL-KDD"],
    description:
      "A hybrid network intrusion detection system that fuses Snort-style signature rules with a Random Forest anomaly detector trained on NSL-KDD, with a Flask dashboard for monitoring.",
    link: null,
    github: "https://github.com/V-3-3-R/HYBRID-IDS",
  },
  {
    name: "Password Strength Checker",
    period: "Nov 2025",
    flagship: false,
    stack: ["Python", "ipywidgets", "unittest"],
    description:
      "A modular password evaluator inspired by NIST SP 800-63B — scores length, character diversity, Shannon entropy, dictionary words, and predictable patterns, with actionable feedback and an interactive Colab/Jupyter UI.",
    link: null,
    github: "https://github.com/V-3-3-R/Password-Strength-Checker",
  },
  {
    name: "Keylogger — Defensive Study",
    period: "Nov 2025",
    flagship: false,
    stack: ["Python", "Security Research"],
    description:
      "An educational study of how keystroke capture works, so it can be recognised and defended against. Documented with consent-first, isolated-lab-only usage guidelines — for learning, not surveillance.",
    link: null,
    github: "https://github.com/V-3-3-R/KEYLOGGER",
  },
  {
    name: "EmotionMirror",
    period: "Nov 2025",
    flagship: false,
    stack: ["JavaScript", "face-api.js", "TensorFlow.js", "Chart.js", "Tailwind CSS"],
    description:
      "A privacy-first emotion detection and wellness tracker that runs entirely in the browser — reads 7 facial expressions from the webcam, with mood analytics, journaling, and JSON export. No data leaves the device.",
    link: null,
    github: "https://github.com/V-3-3-R/EMOTION-MIRROR",
  },
  {
    name: "House Price Prediction",
    period: "Nov 2025",
    flagship: false,
    stack: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    description:
      "Predicts California house prices from user-entered features. Compares Linear Regression, Random Forest, Gradient Boosting, and XGBoost (best R² ≈ 0.84), with EDA, feature engineering, and an interactive prediction prompt.",
    link: null,
    github: "https://github.com/V-3-3-R/House-Price-Prediction-On-User-Based-Inputs",
  },
  {
    name: "Dropout Prediction Model",
    period: "Sep 2025 — Oct 2025",
    flagship: false,
    stack: ["Python", "Scikit-learn", "Pandas"],
    description:
      "Ensemble system — Logistic Regression, Random Forest, Gradient Boosting — reaching a 92% F1-score forecasting student dropout on a simulated JEE-aspirant dataset, with feature-importance visualizations.",
    link: null,
    github: "https://github.com/V-3-3-R/Dropout-Prediction",
  },
  {
    name: "Early Athlete Injury Prediction",
    period: "Aug 2025 — Oct 2025",
    flagship: false,
    stack: ["Python", "XGBoost", "SHAP"],
    description:
      "91% accuracy predicting ACL injury risk, with SHAP-based explainability and an interactive prediction UI. Published in Springer Nature proceedings, presented at SoCTA 2025, NIT Jalandhar.",
    link: null,
    github:
      "https://github.com/V-3-3-R/Early-Athlete-Injury-Prediction-Interpretable-Modeling-via-SHAP-Analysis",
    published: true,
  },
];

export const skills = [
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "XGBoost", "Random Forest", "Gradient Boosting", "Logistic Regression", "Stacking Classifier", "SMOTE", "PCA", "SHAP"],
  },
  {
    category: "Generative AI & Tools",
    items: ["LangChain", "Groq", "Google Gemini API", "Agent Orchestration", "API Integration", "Streamlit"],
  },
  {
    category: "Web Development",
    items: ["Node.js", "Express.js", "React.js", "EJS", "Bootstrap 5", "JWT Authentication", "RBAC", "Postman", "Figma"],
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "T-SQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Git", "n8n"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Microsoft SQL Server"],
  },
  {
    category: "Data Engineering",
    items: ["ETL Pipelines (Pandas/NumPy)", "Data Preprocessing"],
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
    period: "Jun 2008 — Mar 2019",
    location: "Mumbai, India",
  },
];

export const certificates: { name: string; issuer?: string }[] = [
  { name: "AWS Academy Graduate — Cloud Architecting", issuer: "AWS Academy" },
  { name: "GenAI 101 — Mastering LLMs", issuer: "Simplilearn" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud Skills Boost" },
  { name: "Full Stack Developer Course", issuer: "Simplilearn" },
  { name: "SoCTA 2025 — Springer Nature Paper Presentation", issuer: "NIT Jalandhar" },
  { name: "Introduction to Cloud Security" },
  { name: "IoT Security Specialist Program" },
];
