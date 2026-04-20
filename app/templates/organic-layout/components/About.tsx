"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  heading: string;
  content: string;
  values?: { title: string; body: string }[];
}

export function About({ heading, content, values }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="about" className="bg-[#e8efe4] px-6 py-24 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#4a6741]/60 mb-4">About</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#22311e] tracking-tight leading-tight">{heading}</h2>
            <p className="mt-5 text-base leading-[1.85] text-[#4a6741]">{content}</p>
          </motion.div>

          {values && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="space-y-5"
            >
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-2xl border border-green-800/10 bg-white/40 px-5 py-4"
                >
                  <p className="text-sm font-semibold text-[#22311e]">{val.title}</p>
                  <p className="mt-1.5 text-sm leading-[1.7] text-[#4a6741]">{val.body}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}