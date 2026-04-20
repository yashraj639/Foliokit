"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  heading: string;
  content: string;
  writing?: { title: string; venue: string; year: string; link?: string }[];
}

export function About({ heading, content, writing }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="about" className="bg-[#ede9e0] px-6 py-24 sm:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-[#2f2a24]/15 pb-5"
        >
          <p className="font-serif text-sm italic text-[#78716c]">About</p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-[2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#2f2a24]">{heading}</h2>
            <p className="mt-6 font-serif text-base leading-[1.9] text-[#57534e]">{content}</p>
          </motion.div>

          {/* Writing list */}
          {writing && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              <p className="font-serif text-xs italic text-[#a8a092] mb-5">Selected writing</p>
              <div className="space-y-5">
                {writing.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <a href={item.link || "#"} className="block group">
                      <p className="font-serif text-sm font-medium text-[#2f2a24] group-hover:opacity-60 transition-opacity">{item.title}</p>
                      <p className="mt-0.5 font-serif text-xs text-[#a8a092]">{item.venue} · {item.year}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}