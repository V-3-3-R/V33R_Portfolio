import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stats = [
  { value: "91%", label: "ACL injury prediction accuracy" },
  { value: "92%", label: "F1-score, dropout forecasting" },
  { value: "1", label: "Production app, live on IIS" },
  { value: "1", label: "Springer Nature publication" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <SectionHeader path="about" title="Building things that ship." />

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-14">
        <div className="space-y-5 text-ink-muted leading-relaxed text-lg">
          <p>
            I'm a Computer Engineering graduate from NMIMS University, and a
            full-stack developer who ended up deep in generative AI almost by
            accident — one LangChain project led to another, and now GenAI
            tooling is most of what I build. I'm starting a Trainee — SAP role
            at CyberTech Systems this October.
          </p>
          <p>
            My internship at CyberTech Systems had me designing and shipping
            CyberPulse end-to-end — from RBAC and audit logging to production
            deployment on Windows IIS — while earlier work at LaundryGridz taught
            me to prototype fast in Figma and translate that into real front-end
            code across a full booking flow.
          </p>
          <p>
            On the research side, I co-authored a paper on early athlete injury
            prediction, published in Springer Nature proceedings and presented at
            SoCTA 2025, NIT Jalandhar — using XGBoost and SHAP to make the model's
            predictions explainable, not just accurate.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-bg-card p-5"
            >
              <div className="font-display text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-ink-muted leading-snug">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
