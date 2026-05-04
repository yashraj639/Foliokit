"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  size: "large" | "medium" | "small";
  year: string;
  outcome?: string;
  link?: string;
  accent?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  const largeProject = projects.find((p) => p.size === "large");
  const mediumProjects = projects.filter((p) => p.size === "medium");
  const smallProjects = projects.filter((p) => p.size === "small");

  return (
    <section ref={ref} id="projects" className="grid gap-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">Selected work</p>
        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-400">
          {projects.length} projects
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.6fr_1fr]">
        {/* Large featured card */}
        {largeProject && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 hover:border-neutral-300 transition-colors"
          >
            {/* Accent strip */}
            {largeProject.accent && (
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ backgroundColor: largeProject.accent }} />
            )}
            <div className="flex h-full flex-col justify-between min-h-[280px]">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs text-neutral-400 tabular-nums">{largeProject.year}</span>
                  <span className="rounded-full bg-amber-100 border border-amber-200 px-2 py-0.5 text-xs font-medium text-amber-700">Featured</span>
                  {largeProject.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight group-hover:opacity-70 transition-opacity">
                  {largeProject.title}
                </h3>
                <p className="mt-3 text-base leading-[1.8] text-neutral-500">{largeProject.description}</p>
                {largeProject.outcome && (
                  <p className="mt-4 text-sm text-neutral-400 italic border-l-2 border-neutral-200 pl-3">{largeProject.outcome}</p>
                )}
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {largeProject.tags.slice(2).map((tag) => (
                    <span key={tag} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500">{tag}</span>
                  ))}
                </div>
                <a href={largeProject.link || "#"} className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                  View <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </motion.article>
        )}

        {/* Right column: medium + small */}
        <div className="grid gap-4">
          {mediumProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">{tag}</span>
                  ))}
                </div>
                <span className="text-xs text-neutral-300 tabular-nums shrink-0">{project.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 group-hover:opacity-70 transition-opacity">{project.title}</h3>
              <p className="mt-2 text-sm leading-[1.75] text-neutral-500">{project.description}</p>
              {project.outcome && (
                <p className="mt-3 text-xs text-neutral-400 italic">{project.outcome}</p>
              )}
            </motion.article>
          ))}

          {/* Small cards row */}
          <div className="grid grid-cols-2 gap-3">
            {smallProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
              >
                <p className="text-[10px] font-medium text-neutral-400 tabular-nums">{project.year}</p>
                <p className="mt-1. text-sm font-semibold text-neutral-900">{project.title}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-neutral-200 px-1.5 py-0.5 text-[10px] text-neutral-600">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}