"use client";

import { motion } from "framer-motion";

interface AboutProps {
  content: string;
}

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="px-6 py-20 sm:px-12 lg:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-12">
          About
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-12 gap-8">
        <div className="sm:col-span-3">
          <span className="text-sm text-neutral-400">01</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sm:col-span-9"
        >
          <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed font-light">
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}