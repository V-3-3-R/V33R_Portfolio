import { motion } from "framer-motion";

export default function SectionHeader({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-14"
    >
      <div className="font-mono text-sm text-accent terminal-path mb-2">
        {path}
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-accent-2" />
    </motion.div>
  );
}
