import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <SectionHeader path="skills" title="What I work with." />

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="rounded-xl border border-border bg-bg-card p-5"
          >
            <div className="font-mono text-xs text-accent mb-3 uppercase tracking-wide">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-lg bg-bg-elevated border border-border text-ink-muted hover:border-accent hover:text-ink transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
