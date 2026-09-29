import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/resume";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group rounded-2xl border p-6 md:p-7 flex flex-col transition-colors ${
        project.flagship
          ? "border-accent/50 bg-gradient-to-b from-bg-card to-bg-elevated md:col-span-2 lg:col-span-3"
          : "border-border bg-bg-card hover:border-border-bright md:last:col-span-2 lg:last:col-span-1"
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display text-xl font-semibold text-ink leading-snug">
          {project.name}
        </h3>
        <div className="flex items-center gap-3 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="text-ink-faint hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="text-ink-faint hover:text-accent transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {project.published && (
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-signal mb-3 w-fit">
          <BookOpen size={13} />
          published — springer nature
        </div>
      )}

      <p className="text-ink-muted text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {project.pipeline && (
        <div className="flex flex-wrap items-center gap-2 mb-5 font-mono text-xs text-ink-faint">
          {project.pipeline.map((step, idx, arr) => (
            <span key={step} className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded border border-border-bright text-accent">
                {step}
              </span>
              {idx < arr.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 font-mono text-xs text-ink-faint">
        {project.period}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <SectionHeader path="projects" title="Things I've built." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.name} />
        ))}
      </div>
    </section>
  );
}
