import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/resume";

const EMAILJS_SERVICE_ID = "service_ts3bgem";
const EMAILJS_TEMPLATE_ID = "template_bcooxgf";
const EMAILJS_PUBLIC_KEY = "iAqzIpTNkgCkVm9_Z";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <SectionHeader path="contact" title="Let's build something." />

      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">
        <div className="space-y-6">
          <p className="text-ink-muted leading-relaxed max-w-sm">
            Open to full-time SDE, GenAI, full-stack, and ML/AI engineering
            roles. Reach out directly or send a message.
          </p>

          <div className="space-y-4 font-mono text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-ink-muted hover:text-accent transition-colors"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-ink-muted hover:text-accent transition-colors"
            >
              <Phone size={16} /> {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-ink-muted">
              <MapPin size={16} /> {profile.location}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg bg-bg-card border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
            />
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full rounded-lg bg-bg-card border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
            />
          </div>
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to build, or ask?"
            rows={5}
            className="w-full rounded-lg bg-bg-card border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            <Send size={16} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-signal text-sm font-mono">
              Message sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm font-mono">
              Something went wrong. Try emailing directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
