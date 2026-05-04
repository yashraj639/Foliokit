"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  heading: string;
  content: string;
  facts?: string[];
}

export function About({ heading, content, facts }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="about" className="bg-[#fdf3de] px-6 py-20 sm:px-10 lg:px-16">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#332317]" style={{ fontFamily: "Caveat, cursive" }}>
            {heading}
          </h2>
          <p className="mt-5 text-base leading-[1.85] text-[#6b5742]">{content}</p>
        </motion.div>

        {facts && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 space-y-3"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700/50 mb-4">A few things —</p>
            {facts.map((fact, i) => (
              <motion.div
                key={fact}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3 text-sm text-[#6b5742]"
              >
                <span className="text-amber-600 mt-0.5 shrink-0" style={{ fontFamily: "Caveat, cursive" }}>✦</span>
                {fact}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}