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
      transition={{ duration: 0.8 }}
      id="contact"
      className="bg-[#f4f0e8] px-6 py-24 sm:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-[#2f2a24]/15 pt-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-sm italic text-[#78716c] mb-8"
          >
            Get in touch
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            href={`mailto:${email}`}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2f2a24] tracking-tight hover:opacity-50 transition-opacity duration-300 inline-block"
          >
            {email}
          </motion.a>

          {note && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 font-serif text-sm italic text-[#a8a092]"
            >
              {note}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {links?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-sm text-[#78716c] border-b border-transparent hover:border-[#78716c] hover:text-[#2f2a24] transition-all pb-0.5"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          <div className="mt-20 flex items-center justify-between text-xs font-serif text-[#c4b89e]">
            <span>© {new Date().getFullYear()}</span>
            <span>Built with Foliokit</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}