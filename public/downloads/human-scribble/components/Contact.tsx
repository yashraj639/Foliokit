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
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7 }}
      id="contact"
      className="bg-[#fdf8eb] px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold text-[#332317] mb-6"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Say hello.
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-2xl border border-amber-700/20 bg-amber-100/60 hover:bg-amber-100 transition-colors px-6 py-4 text-base font-semibold text-[#332317]"
        >
          {email} →
        </motion.a>

        {note && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="mt-4 text-sm text-amber-700/50"
          >
            {note}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {links?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-amber-700/20 bg-amber-50 hover:bg-amber-100 transition-colors px-4 py-2 text-sm font-medium text-amber-800"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <div className="mt-16 text-xs text-amber-700/30">
          © {new Date().getFullYear()} · Built with Foliokit
        </div>
      </div>
    </motion.footer>
  );
}