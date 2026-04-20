"use client";

import { motion } from "framer-motion";

interface ContactProps {
  email: string;
  links: { label: string; url: string }[];
}

export function Contact({ email, links }: ContactProps) {
  return (
    <section id="contact" className="px-6 py-20 sm:px-12 lg:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-12">
          Get in touch
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-12 gap-8">
        <div className="sm:col-span-3">
          <span className="text-sm text-neutral-400">02</span>
        </div>

        <div className="sm:col-span-9">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            href={`mailto:${email}`}
            className="text-2xl sm:text-3xl font-medium text-neutral-900 hover:opacity-60 transition-opacity"
          >
            {email}
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-6"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-24 pt-8 border-t border-neutral-200 flex justify-between text-sm text-neutral-400"
      >
        <span>© {new Date().getFullYear()}</span>
        <span>Built with Foliokit</span>
      </motion.footer>
    </section>
  );
}