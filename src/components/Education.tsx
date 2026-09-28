import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { education, certificates } from "../data/resume";

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <SectionHeader path="education" title="Education & certificates." />

      <div className="grid md:grid-cols-2 gap-14">
        <div className="space-y-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-l-2 border-border-bright pl-5"
            >
              <div className="font-mono text-xs text-ink-faint">{ed.period}</div>
              <h3 className="font-display font-semibold text-ink mt-1">
                {ed.degree}
              </h3>
              <div className="text-ink-muted text-sm mt-0.5">{ed.school}</div>
              <div className="text-ink-faint text-xs mt-0.5">{ed.location}</div>
            </motion.div>
          ))}
        </div>

        <div>
          <div className="font-mono text-xs text-accent mb-4 uppercase tracking-wide">
            Certificates
          </div>
          <div className="flex flex-wrap gap-2.5">
            {certificates.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="text-sm px-3.5 py-2 rounded-lg bg-bg-card border border-border text-ink-muted"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
