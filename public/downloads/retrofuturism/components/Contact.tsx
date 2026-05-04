"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ContactProps {
  email: string;
  heading?: string;
  links?: { label: string; url: string }[];
}

export function Contact({ email, heading, links }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.footer
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative bg-[#0a0912] px-6 py-24 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Bottom radial */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] pointer-events-none" style={{
        background: "radial-gradient(ellipse at bottom, rgba(168,85,247,0.18) 0%, transparent 70%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest text-purple-500/50 mb-4"
        >
          // Initialize_Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-3xl sm:text-4xl font-bold uppercase text-purple-100"
          style={{ textShadow: "0 0 30px rgba(168,85,247,0.3)" }}
        >
          {heading || "Drop a signal."}
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          href={`mailto:${email}`}
          className="mt-8 inline-flex items-center gap-3 rounded-sm border border-purple-500/40 bg-purple-600/20 hover:bg-purple-600/30 transition-colors px-7 py-4 font-mono text-base font-bold uppercase tracking-wider text-purple-300"
        >
          {email}
          <span className="text-purple-500">→</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {links?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono inline-flex items-center gap-2 rounded-sm border border-purple-500/30 bg-purple-500/8 hover:bg-purple-500/15 transition-colors px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-400"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <div className="mt-16 flex items-center gap-4 border-t border-purple-500/15 pt-8">
          <div className="h-px flex-1 bg-purple-500/10" />
          <p className="font-mono text-xs text-purple-500/30">SYS © {new Date().getFullYear()}</p>
        </div>
      </div>
    </motion.footer>
  );
}