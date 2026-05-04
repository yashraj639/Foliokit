"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  heading: string;
  content: string;
  skills?: string[];
  experience?: { role: string; company: string; period: string }[];
}

export function About({ heading, content, skills, experience }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="about" className="relative py-24 bg-[#0f172a]">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 70%, #818cf8 0%, transparent 50%)" }} />

      <div className="relative px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-400/60 mb-4">About</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{heading}</h2>
            <p className="mt-5 text-base text-white/60 leading-[1.85]">{content}</p>

            {experience && experience.length > 0 && (
              <div className="mt-8 space-y-4">
                <p className="text-xs font-medium uppercase tracking-widest text-white/30">Experience</p>
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start justify-between gap-4 rounded-xl border border-white/8 bg-white/4 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{exp.role}</p>
                      <p className="text-xs text-white/40">{exp.company}</p>
                    </div>
                    <span className="text-xs text-white/30 font-mono mt-0.5 shrink-0">{exp.period}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-400/60 mb-5">Skills & tools</p>
            <div className="flex flex-wrap gap-2">
              {skills?.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                  className="rounded-full bg-indigo-500/15 border border-indigo-500/20 px-3 py-1.5 text-sm font-medium text-indigo-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Decorative glow orb */}
            <div className="mt-10 flex justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-indigo-600/30 blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}