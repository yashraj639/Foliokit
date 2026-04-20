"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  heading: string;
  content: string;
  skills?: string[];
  stats?: { value: string; label: string }[];
}

export function About({ heading, content, skills, stats }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="about" className="relative bg-[#0a0912] px-6 py-24 sm:px-12 lg:px-20">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-purple-500/50 mb-12">{`// `}About</p>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-sm border border-purple-500/20 bg-purple-500/5 p-8"
          >
            <h2 className="font-mono text-2xl font-bold uppercase text-purple-100">{heading}</h2>
            <p className="mt-5 font-mono text-sm leading-[1.85] text-purple-300/55">{content}</p>

            {stats && (
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-purple-500/20 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-2xl font-bold text-purple-300" style={{ textShadow: "0 0 12px rgba(168,85,247,0.4)" }}>{stat.value}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-purple-500/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-sm border border-purple-500/20 bg-purple-500/5 p-8"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-purple-500/50 mb-5">STACK_LIST</p>
            <div className="space-y-2">
              {skills?.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="font-mono text-purple-500/40 text-xs">&gt;</span>
                  <span className="font-mono text-sm text-purple-300/70">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}