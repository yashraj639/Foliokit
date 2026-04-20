"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  currently?: string;
}

export function Hero({ name, role, tagline, currently }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-[95vh] flex flex-col justify-center bg-[#f4f0e8] px-6 py-24 sm:px-12 lg:px-20">
      {/* Subtle top rule */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-[#2f2a24]/8" />

      <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto w-full">
        {/* Role + currently */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <p className="font-serif text-sm italic text-[#78716c]">{role}</p>
          {currently && (
            <>
              <span className="text-[#c4b89e]">·</span>
              <p className="text-sm text-[#78716c]">Currently: <span className="text-[#2f2a24]">{currently}</span></p>
            </>
          )}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3rem,8vw,7rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-[#2f2a24]"
        >
          {name}
        </motion.h1>

        {/* Pull-quote divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 mb-10 h-px bg-[#2f2a24]/15 origin-left"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-xl sm:text-2xl leading-[1.75] text-[#57534e] max-w-3xl"
        >
          {tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-6 items-center"
        >
          <a href="#projects" className="font-serif text-sm text-[#2f2a24] border-b border-[#2f2a24] pb-0.5 hover:opacity-50 transition-opacity">
            Read the work →
          </a>
          <a href="#about" className="font-serif text-sm text-[#78716c] hover:text-[#2f2a24] transition-colors">
            About me
          </a>
          <a href="#contact" className="font-serif text-sm text-[#78716c] hover:text-[#2f2a24] transition-colors">
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-10 bg-[#2f2a24]/20" />
      </motion.div>
    </section>
  );
}