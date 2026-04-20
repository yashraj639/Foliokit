"use client";

import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  availability?: string;
}

export function Hero({ name, role, tagline, availability }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#f6f9f3] flex flex-col justify-end pb-16 px-6 sm:px-12 lg:px-16">
      {/* Organic blob shapes */}
      <div className="absolute top-10 right-8 w-80 h-80 rounded-[60%_40%_50%_70%/60%_30%_70%_40%] bg-green-200/40 blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 left-6 w-56 h-56 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-emerald-200/30 blur-xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-40 h-40 -translate-x-1/2 rounded-full bg-lime-100/50 blur-2xl pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl">
        {/* Floating role + availability */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <span className="rounded-full border border-green-800/20 bg-green-100/60 px-4 py-1.5 text-sm font-medium text-green-900">{role}</span>
          {availability && (
            <span className="flex items-center gap-1.5 text-sm text-green-700/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {availability}
            </span>
          )}
        </motion.div>

        {/* Heading — offset left */}
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[#22311e] ml-0 lg:ml-[-2vw]"
        >
          {name}
        </motion.h1>

        {/* Tagline — offset right */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 max-w-lg text-lg leading-[1.75] text-[#4a6741] ml-auto text-right lg:mr-0"
        >
          {tagline}
        </motion.p>

        {/* CTAs — full left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#22311e] text-[#f6f9f3] px-7 py-3.5 text-sm font-medium hover:bg-[#2f4429] transition-colors">
            View my work →
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-green-800/20 bg-green-100/50 text-green-900 px-7 py-3.5 text-sm font-medium hover:bg-green-100 transition-colors">
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}