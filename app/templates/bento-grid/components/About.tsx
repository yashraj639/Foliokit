"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  heading: string;
  content: string;
  skills?: string[];
  availability?: string;
  languages?: string[];
}

export function About({ heading, content, skills, availability, languages }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="about" className="grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
      {/* Main about card */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-neutral-200 bg-white p-7"
      >
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">About</p>
          {availability && (
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {availability}
            </span>
          )}
        </div>
        <h2 className="text-xl font-semibold text-neutral-900 leading-tight">{heading}</h2>
        <p className="mt-4 text-sm leading-[1.85] text-neutral-500">{content}</p>

        {skills && (
          <div className="mt-6 border-t border-neutral-100 pt-5">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </motion.article>

      {/* Side card: languages or simple decoration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col gap-4"
      >
        {/* Fun fact bento cell */}
        <div className="rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-700/60 mb-3">Currently</p>
          <p className="text-sm leading-[1.75] text-amber-900/80">
            Exploring the edge cases that everyone else ships around. Building in public, shipping weekly.
          </p>
        </div>
        {/* Reading cell */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3">Reading</p>
          <p className="text-sm text-neutral-600">The Design of Everyday Things · Don Norman</p>
          <p className="mt-1 text-xs text-neutral-400">Still applies to software in 2025.</p>
        </div>
      </motion.div>
    </section>
  );
}