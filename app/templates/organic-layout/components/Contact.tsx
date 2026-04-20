"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ContactProps {
  email: string;
  heading: string;
  links?: { label: string; url: string }[];
}

export function Contact({ email, heading, links }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      id="contact"
      className="bg-[#f6f9f3] px-6 py-24 sm:px-12 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.22em] text-[#4a6741]/60 mb-4"
            >
              Get in touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl font-semibold text-[#22311e] tracking-tight leading-tight"
            >
              {heading}
            </motion.h2>
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#22311e] text-[#f6f9f3] px-7 py-3.5 text-sm font-medium hover:bg-[#2f4429] transition-colors"
            >
              {email} →
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            {links?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-green-800/20 bg-green-100/50 hover:bg-green-100 transition-colors px-5 py-2 text-sm font-medium text-green-900"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-green-900/10 pt-8 text-xs text-[#4a6741]/40">
          <span>© {new Date().getFullYear()}</span>
          <span>Built with Foliokit</span>
        </div>
      </div>
    </motion.footer>
  );
}