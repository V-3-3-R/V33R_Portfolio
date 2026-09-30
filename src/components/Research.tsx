import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { research } from "../data/resume";

export default function Research() {
  return (
    <section
      id="research"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <SectionHeader path="research" title="Research." />

      <div className="grid gap-6">
        {research.map((paper, i) => (
          <motion.div
            key={paper.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-2xl border bg-gradient-to-br from-bg-card to-bg-elevated p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start ${
              paper.status === "published" ? "border-accent/40" : "border-border"
            }`}
          >
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-accent shrink-0">
              <BookOpen size={28} />
            </div>
            <div>
              <div className="font-mono text-xs text-signal mb-2 uppercase tracking-wide">
                {paper.venue}
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                {paper.title}
              </h3>
              {paper.authors && (
                <p className="font-mono text-xs text-ink-faint mb-3">
                  {paper.authors}
                </p>
              )}
              <p className="text-ink-muted leading-relaxed max-w-2xl">
                {paper.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
