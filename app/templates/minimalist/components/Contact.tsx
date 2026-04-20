"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ContactProps {
  email: string;
  links: { label: string; url: string }[];
  note?: string;
}

export function Contact({ email, links, note }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} id="contact" className="px-6 py-28 sm:px-12 lg:px-24 max-w-6xl mx-auto">
      <div className="border-t border-neutral-100 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.28em] text-neutral-400 mb-10"
        >
          Get in touch
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-[-0.03em] hover:opacity-50 transition-opacity duration-300"
          >
            {email}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-2xl"
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {note && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-sm text-neutral-400 max-w-xs"
          >
            {note}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-8"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200 border-b border-transparent hover:border-neutral-900 pb-0.5"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 pt-8 border-t border-neutral-100 flex justify-between items-center text-xs text-neutral-300"
      >
        <span>© {new Date().getFullYear()}</span>
        <span>Built with Foliokit</span>
      </motion.footer>
    </section>
  );
}