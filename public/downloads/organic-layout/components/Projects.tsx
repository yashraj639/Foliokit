"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  year?: string;
  size?: "large" | "small";
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="projects" className="bg-[#f0f5ed] px-6 py-24 sm:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-[#4a6741]/60 mb-2">Selected work</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#22311e] tracking-[-0.03em]">Things I&apos;ve made with care.</h2>
      </motion.div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`group grid gap-6 sm:gap-10 rounded-3xl border border-green-900/10 bg-white/50 p-6 sm:p-8 hover:bg-white/80 transition-colors ${index % 2 === 0 ? "sm:grid-cols-[0.5fr_1.5fr]" : "sm:grid-cols-[1.5fr_0.5fr]"}`}
          >
            {/* Left panel */}
            <div className={index % 2 === 0 ? "" : "sm:order-2"}>
              {/* Decorative shape */}
              <div className="h-32 w-full rounded-2xl bg-gradient-to-br from-green-200/60 to-emerald-100/40 mb-4 flex items-center justify-center text-4xl text-green-800/20 font-semibold">
                0{index + 1}
              </div>
              <span className="text-xs text-[#4a6741]/40">{project.year}</span>
            </div>

            {/* Right panel */}
            <div className={index % 2 === 0 ? "" : "sm:order-1"}>
              <h3 className="text-2xl font-semibold text-[#22311e] tracking-tight group-hover:opacity-60 transition-opacity duration-300">{project.title}</h3>
              <p className="mt-3 text-base leading-[1.8] text-[#4a6741]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-green-800/15 bg-green-100/50 px-3 py-1 text-xs font-medium text-green-900/60">{tag}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#22311e] border-b border-[#22311e]/30 pb-0.5 hover:border-[#22311e] transition-colors">
                  View project →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}