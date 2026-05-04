"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  stats?: { value: string; label: string }[];
}

function GlitchText({ text }: { text: string }) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${glitching ? "text-purple-300" : ""}`}>
      {text}
      {glitching && (
        <>
          <span className="absolute inset-0 translate-x-[3px] text-cyan-400/60 select-none" aria-hidden>{text}</span>
          <span className="absolute inset-0 translate-x-[-3px] text-rose-500/50 select-none" aria-hidden>{text}</span>
        </>
      )}
    </span>
  );
}

export function Hero({ name, role, tagline, stats }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#0a0912] flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-20">
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Radial glow */}
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)" }}
      />

      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)",
      }} />

      <motion.div style={{ y }} className="relative z-20 max-w-6xl mx-auto w-full">
        {/* Role terminal badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 rounded-sm border border-purple-500/40 bg-purple-500/10 px-4 py-2 mb-10"
        >
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-purple-400 font-mono text-xs"
          >▌</motion.span>
          <span className="font-mono text-xs uppercase tracking-widest text-purple-300">{role}</span>
        </motion.div>

        {/* Main heading with glitch */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[clamp(2.5rem,7vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em] text-purple-100"
          style={{ textShadow: "0 0 30px rgba(168,85,247,0.4), 0 0 80px rgba(168,85,247,0.15)" }}
        >
          <GlitchText text={name} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 max-w-2xl font-mono text-lg text-purple-300/60 leading-[1.75]"
        >
          {tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className="font-mono inline-flex items-center gap-2 rounded-sm bg-purple-600 hover:bg-purple-500 transition-colors px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
            INITIALIZE
          </a>
          <a href="#contact" className="font-mono inline-flex items-center gap-2 rounded-sm border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 transition-colors px-6 py-3 text-sm font-bold uppercase tracking-wider text-purple-300">
            CONNECT
          </a>
        </motion.div>

        {/* Stats row */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 flex flex-wrap gap-6 border-t border-purple-500/20 pt-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="min-w-[100px]"
              >
                <p className="font-mono text-3xl font-bold text-purple-300" style={{ textShadow: "0 0 16px rgba(168,85,247,0.5)" }}>{stat.value}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-purple-500/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Corner decoration */}
      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-purple-500/30 uppercase tracking-widest">SYS_ACTIVE</div>
    </section>
  );
}