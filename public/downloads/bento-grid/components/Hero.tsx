"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  stats?: { value: string; label: string }[];
}

/** Parses "50K", "3+", "12" → { num: 50, suffix: "K" }, { num: 3, suffix: "+" }, { num: 12, suffix: "" } */
function parseStatValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

function CountUpStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { num, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400; // ms
    const startTime = performance.now() + delay * 1000;
    let raf: number;

    function tick(now: number) {
      const elapsed = Math.max(0, now - startTime);
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, num, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6"
    >
      <p className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        {display}
        <span>{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-neutral-500">{label}</p>
    </motion.div>
  );
}

export function Hero({ name, role, tagline, stats }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8"
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              {role}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              {tagline}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
            >
              Get in touch
            </a>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4">
        {stats?.map((stat, index) => (
          <CountUpStat
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delay={0.1 + index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}