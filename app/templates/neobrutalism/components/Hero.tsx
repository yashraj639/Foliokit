"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  notes?: { label: string; copy: string; tone: string; tilt: string }[];
  stats?: { value: string; label: string }[];
}

export function Hero({ name, role, tagline, notes, stats }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative overflow-hidden border-[3px] border-[#23150d] bg-[#fff3eb] shadow-[inset_0_-4px_0_#23150d]">
      {/* Hatched background accent */}
      <div className="absolute right-0 top-0 h-full w-40 opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #23150d 0, #23150d 1px, transparent 0, transparent 50%)",
        backgroundSize: "8px 8px",
      }} />

      <div className="mx-auto max-w-[1160px] px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10 items-start"
        >
          {/* Left: headline block */}
          <div>
            {/* Role label */}
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-black uppercase tracking-[0.2em] text-[#8b7355]"
            >
              {role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-[clamp(3.5rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#23150d]"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 max-w-xl font-sans text-base leading-[1.85] text-[#4a3427]"
            >
              {tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="inline-flex min-h-12 items-center justify-center border-[3px] border-[#23150d] bg-[#ffe45e] px-6 text-sm font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#23150d] hover:shadow-[3px_3px_0_#23150d] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                See selected work
              </a>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center border-[3px] border-[#23150d] bg-[#fff8f2] px-6 text-sm font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#23150d] hover:shadow-[3px_3px_0_#23150d] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                Book a chat
              </a>
            </motion.div>

            {/* Stats strip */}
            {stats && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-10 flex flex-wrap gap-6 border-t-[3px] border-[#23150d] pt-6"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-black tracking-[-0.06em] text-[#23150d]">{stat.value}</p>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8b7355]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: sticky note cards */}
          <div className="grid content-start gap-4 pt-2">
            {notes?.map((note, index) => (
              <motion.article
                key={note.label}
                initial={{ opacity: 0, y: 28, rotate: 0 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: parseFloat(note.tilt) } : {}}
                transition={{ delay: 0.18 + index * 0.1, duration: 0.6, ease: [0.2, 1, 0.32, 1] }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className={`${note.tone} border-[3px] border-[#23150d] px-5 py-5 shadow-[6px_6px_0_#23150d] cursor-default`}
              >
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#23150d]/60">{note.label}</p>
                <p className="mt-3 text-xl font-black leading-[1.08] tracking-[-0.04em] text-[#23150d]">{note.copy}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      {/* "Bold on purpose" badge */}
      <motion.span
        initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 7 } : {}}
        transition={{ delay: 0.5, duration: 0.45 }}
        className="absolute right-6 top-5 hidden border-[3px] border-[#23150d] bg-[#ff8d6d] px-3 py-2 text-xs font-black uppercase tracking-[0.15em] shadow-[4px_4px_0_#23150d] md:inline-flex"
      >
        Bold on purpose
      </motion.span>
    </section>
  );
}