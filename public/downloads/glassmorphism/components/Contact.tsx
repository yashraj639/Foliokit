"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ContactProps {
  email: string;
  heading?: string;
  links?: { label: string; url: string }[];
  availability?: string;
}

export function Contact({ email, heading, links, availability }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.footer
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative py-24 bg-[#0f172a] overflow-hidden"
    >
      {/* Bottom glow */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 50% 100%, #6366f1 0%, transparent 60%)" }} />

      <div className="relative px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-widest text-indigo-400/60 mb-4"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
        >
          {heading || "Ready to build something remarkable?"}
        </motion.h2>

        {availability && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-300">{availability}</span>
          </motion.div>
        )}

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          href={`mailto:${email}`}
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition-colors px-8 py-4 text-base font-semibold text-white"
        >
          {email}
          <span>→</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center flex-wrap gap-3"
        >
          {links?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-5 py-2 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <p className="mt-16 text-xs text-white/20">© {new Date().getFullYear()} — Built with Foliokit</p>
      </div>
    </motion.footer>
  );
}