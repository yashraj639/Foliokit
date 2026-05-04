"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ContactProps {
  email: string;
  links?: { label: string; url: string }[];
  note?: string;
}

export function Contact({ email, links, note }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="contact"
      className="rounded-3xl border border-neutral-200 bg-white p-7"
    >
      <div className="grid gap-6 sm:grid-cols-[1.5fr_1fr] sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">Get in touch</p>
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 text-2xl font-semibold text-neutral-900 hover:opacity-60 transition-opacity"
          >
            {email}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >→</motion.span>
          </a>
          {note && <p className="mt-2 text-xs text-neutral-400">{note}</p>}
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          {links?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors px-4 py-2 text-sm font-medium text-neutral-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-5 text-xs text-neutral-300">
        <span>© {new Date().getFullYear()}</span>
        <span>Built with Foliokit</span>
      </div>
    </motion.footer>
  );
}