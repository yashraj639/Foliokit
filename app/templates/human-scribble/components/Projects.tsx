"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  year: string;
  tags?: string[];
  link?: string;
  tint?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="projects" className="bg-[#fdf8eb] px-6 py-20 sm:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-10"
      >
        <h2 className="text-2xl font-bold text-[#332317]" style={{ fontFamily: "Caveat, cursive" }}>
          Things I&apos;ve built
        </h2>
        <span className="text-sm text-amber-700/40 font-medium">{projects.length} projects</span>
      </motion.div>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: index % 2 === 0 ? -0.5 : 0.5 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.01 }}
            className={`rounded-2xl border border-amber-700/12 ${project.tint || "bg-amber-50/60"} p-6`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-bold text-[#332317]" style={{ fontFamily: "Caveat, cursive" }}>
                {project.title}
              </h3>
              <span className="text-xs text-amber-700/50 font-medium shrink-0 mt-1">{project.year}</span>
            </div>
            <p className="text-sm leading-[1.8] text-[#6b5742]">{project.description}</p>
            {project.tags && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-amber-700/15 bg-amber-100/50 px-2.5 py-0.5 text-[11px] font-medium text-amber-800/60">{tag}</span>
                ))}
              </div>
            )}
            {project.link && (
              <a href={project.link} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors">
                See it live →
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}