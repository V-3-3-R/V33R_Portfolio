import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <SectionHeader path="experience" title="Where I've worked." />

      <div className="relative pl-8 md:pl-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent" />

        <div className="space-y-14">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div
                className={`absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 ${
                  job.incoming ? "border-accent-2 animate-pulse" : "border-accent"
                }`}
              />

              <div className="font-mono text-xs text-ink-faint mb-1">
                {job.period}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink flex items-center gap-2.5 flex-wrap">
                {job.role}
                {job.incoming && (
                  <span className="font-mono text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full border border-accent-2 text-accent-2">
                    Incoming
                  </span>
                )}
              </h3>
              <div className="text-accent font-medium mt-0.5">
                {job.company}
              </div>
              <div className="text-sm text-ink-faint mt-0.5">
                {job.location}
              </div>

              <ul className="mt-4 space-y-2 max-w-2xl">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="text-ink-muted text-sm md:text-base leading-relaxed flex gap-3"
                  >
                    <span className="text-accent mt-1.5 shrink-0">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
