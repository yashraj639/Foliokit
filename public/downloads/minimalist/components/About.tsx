"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  content: string;
  skills?: string[];
  availability?: string;
}

export function About({ content, skills, availability }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} id="about" className="px-6 py-28 sm:px-12 lg:px-24 max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-12 gap-8 lg:gap-16">
        {/* Label column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="sm:col-span-3"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-400 pt-2">About</p>
          {availability && (
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-neutral-400">{availability}</span>
            </div>
          )}
        </motion.div>

        {/* Content column */}
        <div className="sm:col-span-9 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl text-neutral-700 leading-[1.65] font-light tracking-[-0.01em]"
          >
            {content}
          </motion.p>

          {skills && skills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-300 mb-4">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                    className="text-xs px-3 py-1.5 border border-neutral-200 text-neutral-500 rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}