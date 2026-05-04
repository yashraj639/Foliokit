"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  stats?: { value: string; label: string }[];
}

function Particle({ x, y, size, duration, delay }: { x: number; y: number; size: number; duration: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-indigo-400/30 blur-sm"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  x: (i * 31 + 7) % 100,
  y: (i * 47 + 13) % 100,
  size: 4 + (i % 4) * 3,
  duration: 4 + (i % 5),
  delay: (i * 0.4) % 3,
}));

export function Hero({ name, role, tagline, stats }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#0f172a] flex items-center">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-indigo-600 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-600 blur-[100px]"
        />
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)] pointer-events-none" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 px-6 py-20 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div>
            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md px-4 py-1.5 mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-widest text-indigo-300">{role}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white"
              style={{ textShadow: "0 0 60px rgba(99,102,241,0.3)" }}
            >
              {name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg sm:text-xl text-white/50 leading-[1.75] max-w-2xl"
            >
              {tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors px-6 py-3 text-sm font-semibold text-white"
              >
                View work
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors px-6 py-3 text-sm font-semibold text-white/80"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Stats sidebar */}
          {stats && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row lg:flex-col gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 min-w-[110px]"
                >
                  <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/40 leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  );
}