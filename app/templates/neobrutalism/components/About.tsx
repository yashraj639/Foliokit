"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  heading: string;
  content: string;
  focus: string[];
  stats?: { value: string; label: string }[];
}

export function About({ heading, content, focus, stats }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="about" className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Main card */}
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="border-[3px] border-[#23150d] bg-[#fff8f2] px-6 py-7 shadow-[10px_10px_0_#23150d]"
      >
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b7355]">About</p>
        <h2 className="mt-4 max-w-[14ch] text-3xl sm:text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#23150d]">
          {heading}
        </h2>
        <p className="mt-5 max-w-3xl font-sans text-base leading-[1.85] text-[#4a3427]">{content}</p>

        <div className="mt-8 border-t-[3px] border-[#23150d] pt-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b7355] mb-4">What I focus on</p>
          <ul className="space-y-3">
            {focus.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-3 font-sans text-sm leading-[1.7] text-[#4a3427]"
              >
                <span className="mt-1 h-2 w-2 shrink-0 border-[2px] border-[#23150d] bg-[#ffe45e]" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.article>

      {/* Stats / accent card */}
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="border-[3px] border-[#23150d] bg-[#93d6ff] px-6 py-7 shadow-[10px_10px_0_#23150d]"
      >
        <p className="text-xs font-black uppercase tracking-[0.18em]">{stats ? "Quick proof" : "Current focus"}</p>
        {stats ? (
          <div className="mt-5 grid gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <p className="text-5xl font-black leading-none tracking-[-0.08em]">{stat.value}</p>
                <p className="mt-1.5 font-sans text-xs uppercase tracking-[0.14em] text-[#3f2c22]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <ul className="mt-5 space-y-4">
            {focus.map((item) => (
              <li key={item} className="flex items-start gap-3 font-sans text-sm leading-[1.7] text-[#4a3427]">
                <span className="mt-1 h-2 w-2 shrink-0 border-[2px] border-[#23150d] bg-[#23150d]" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </motion.article>
    </section>
  );
}