"use client";

import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

export function Hero({ name, role, tagline }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4"
        >
          {role}
        </motion.p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1]"
      >
        {name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed"
      >
        {tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 hover:opacity-60 transition-opacity"
        >
          View my work
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}