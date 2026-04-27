"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

export function Hero({ name, role, tagline }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#fafaf9] flex flex-col">
      {/* Subtle top rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-neutral-200" />

      <motion.div style={{ y, opacity }} className="relative z-10 flex-1 flex flex-col justify-center px-6 py-32 sm:px-12 lg:px-24 max-w-6xl mx-auto w-full">
        {/* Role label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.28em] text-neutral-400 mb-8"
        >
          {role}
        </motion.p>

        {/* Name — large display */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="text-[clamp(3.5rem,10vw,8rem)] font-semibold tracking-[-0.04em] text-neutral-900 leading-[0.95]"
        >
          {name}
        </motion.h1>

        {/* Divider rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-10 h-px bg-neutral-200 origin-left"
        />

        {/* Tagline + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid sm:grid-cols-[1.5fr_1fr] gap-8 items-end"
        >
          <p className="text-lg sm:text-xl text-neutral-500 leading-[1.75] max-w-xl">
            {tagline}
          </p>
          <div className="flex flex-col gap-4 sm:items-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 group transition-opacity hover:opacity-50"
            >
              View my work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              Get in touch <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-neutral-300"
        />
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Scroll</span>
      </motion.div>
    </section>
  );
}