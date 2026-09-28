import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-ink-faint">
        <span>© {new Date().getFullYear()} {profile.shortName}</span>
        <span>built with react · tailwind · framer-motion</span>
      </div>
    </footer>
  );
}
