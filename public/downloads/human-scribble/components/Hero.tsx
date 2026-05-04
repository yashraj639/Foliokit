"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  currentlyBuilding?: string;
  nowItems?: string[];
}

export function Hero({ name, role, tagline, currentlyBuilding, nowItems }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-screen bg-[#fdf8eb] px-6 py-24 pt-28 sm:px-10 lg:px-16 flex flex-col justify-center relative overflow-hidden">
      {/* Warm background blob */}
      <div className="absolute top-[-10%] right-[-5%] w-72 h-72 rounded-full bg-amber-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-48 h-48 rounded-full bg-orange-200/30 blur-2xl pointer-events-none" />

      {/* Scribble accent SVG */}
      <svg className="absolute right-8 top-32 w-20 h-20 text-amber-700/15 pointer-events-none" viewBox="0 0 80 80" fill="none">
        <path d="M10 40 Q20 10 40 30 Q60 50 70 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="15" cy="60" r="3" fill="currentColor" />
        <circle cx="65" cy="65" r="2" fill="currentColor" />
      </svg>

      <div className="max-w-3xl">
        {/* Role tag */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 font-[Caveat,cursive] text-base text-amber-700/70 transform -rotate-1"
        >
          {role}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.03em] text-[#332317]"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {name}
        </motion.h1>

        {/* Currently building — the hook */}
        {currentlyBuilding && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-700/20 bg-amber-100/60 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-sm font-medium text-amber-800">Currently building: {currentlyBuilding}</span>
          </motion.div>
        )}

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 text-lg leading-[1.8] text-[#6b5742] max-w-2xl"
        >
          {tagline}
        </motion.p>

        {/* Now items */}
        {nowItems && nowItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 rounded-2xl border border-amber-700/15 bg-amber-50/60 px-5 py-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700/60 mb-4">Now —</p>
            <ul className="space-y-2">
              {nowItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
                  className="flex items-start gap-2 text-sm text-[#6b5742]"
                >
                  <span className="mt-1 text-amber-600 text-base" style={{ fontFamily: "Caveat, cursive" }}>→</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#332317] px-6 py-3 text-sm font-semibold text-[#fdf8eb] hover:bg-[#4a3325] transition-colors">
            See what I&apos;ve built
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#332317]/20 bg-amber-100/50 px-6 py-3 text-sm font-medium text-[#332317]/80 hover:bg-amber-100 transition-colors">
            Say hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}