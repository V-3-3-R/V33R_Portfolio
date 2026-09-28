# V33R Portfolio

Personal portfolio of **Veer Javadia** — Full-Stack Developer & AI/ML Engineer.

Built to be fast, dark, and a little kinetic: smooth scroll-triggered animations, a working contact form, and content pulled straight from a single source of truth (`src/data/resume.ts`) instead of copy-pasted across components.

**Live:** [veer-javadia.vercel.app](https://veer-javadia.vercel.app/)

---

## What's on it

- **Hero** — intro, availability status, resume download
- **About** — quick summary of who I am and what I do
- **Experience** — internships and roles, with impact-focused bullet points
- **Projects** — things I've built, what they use, what they solve
- **Skills** — organized by category (ML, GenAI, Web Dev, Data Engineering)
- **Research** — published/presented work
- **Education** — academic background
- **Contact** — a real form (EmailJS), not just a mailto link

## Tech stack

| Layer | Tools |
|---|---|
| Framework | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Contact form | EmailJS |
| Linting | Oxlint |
| Deployment | Vercel |

## Running it locally

```bash
git clone https://github.com/V-3-3-R/V33R_Portfolio.git
cd V33R_Portfolio
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Available scripts

```bash
npm run dev       # start local dev server with hot reload
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run Oxlint
```

## Project structure

```
src/
├── components/     # one component per section (Hero, About, Experience, ...)
├── data/
│   └── resume.ts   # all content lives here — edit this, not the components
├── index.css       # design tokens (colors, fonts) + global styles
└── App.tsx
public/
├── resume.pdf       # downloadable resume
└── favicon.svg
```

Content changes (new project, updated bullet point, new skill) almost always just mean editing `src/data/resume.ts` — the components render off of it.

## Contact form setup

The form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend. If you fork this and want the form to work for you:

1. Create a free EmailJS account and connect an email service.
2. Create a template with `from_name`, `from_email`, and `message` variables.
3. Drop your service ID, template ID, and public key into `src/components/Contact.tsx`.

## Get in touch

- **Email:** veerjavadia@gmail.com
- **LinkedIn:** [linkedin.com/in/veer-javadia](https://linkedin.com/in/veer-javadia)
- **GitHub:** [@V-3-3-R](https://github.com/V-3-3-R)
