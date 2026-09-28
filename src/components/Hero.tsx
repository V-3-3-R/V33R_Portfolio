import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { profile } from "../data/resume";
import veerPhoto from "../assets/veer.jpg";

const TYPE_STRING = "whoami";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(TYPE_STRING.slice(0, i));
      if (i >= TYPE_STRING.length) clearInterval(interval);
    }, 130);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center grid-texture overflow-hidden pt-24 pb-16"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center w-full">
        <div>
          <div className="font-mono text-sm text-signal mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal inline-block" />
            joining CyberTech Systems as an SAP Trainee — Oct 2026
          </div>

          <div className="font-mono text-accent text-lg mb-3">
            {"> "}
            {typed}
            <span className="cursor-blink">_</span>
          </div>

          <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.05] tracking-tight text-ink glow-text">
            {profile.shortName}
          </h1>

          <p className="mt-5 font-display text-xl md:text-2xl text-ink-muted max-w-xl">
            {profile.title}
          </p>

          <p className="mt-6 text-ink-muted max-w-lg leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border-bright text-ink font-medium text-sm hover:border-accent transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-3 text-ink-muted hover:text-accent transition-colors text-sm font-mono"
            >
              <FileDown size={16} />
              resume.pdf
            </a>
          </div>

          {/* signature: pipeline motif referencing his multi-agent / GenAI work */}
          <div className="mt-14 hidden md:flex items-center gap-3 font-mono text-xs text-ink-faint">
            {["resume", "job description", "gemini api", "interview report"].map(
              (step, idx, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <motion.span
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                    className="px-3 py-1.5 rounded border border-border-bright bg-bg-card"
                  >
                    {step}
                  </motion.span>
                  {idx < arr.length - 1 && (
                    <span className="text-accent">→</span>
                  )}
                </span>
              )
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative justify-self-center"
        >
          <div
            aria-hidden
            className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent to-accent-2 opacity-40 blur-xl"
          />
          <div className="relative w-56 md:w-72 aspect-[4/5] rounded-2xl overflow-hidden border border-border-bright">
            <img
              src={veerPhoto}
              alt={profile.shortName}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-accent transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
