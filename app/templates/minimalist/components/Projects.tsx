"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} id="projects" className="px-6 py-28 sm:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-16"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">Selected work</p>
        <span className="text-xs text-neutral-300">{String(projects.length).padStart(2, "0")} projects</span>
      </motion.div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group grid sm:grid-cols-12 gap-4 sm:gap-8 border-t border-neutral-100 py-10 hover:bg-neutral-50/60 -mx-4 px-4 rounded-xl transition-colors"
          >
            {/* Year column */}
            <div className="sm:col-span-2 flex sm:flex-col gap-3 items-center sm:items-start pt-1">
              <span className="text-xs text-neutral-300 tabular-nums">{project.year}</span>
              <span className="text-xs text-neutral-200 tabular-nums">0{index + 1}</span>
            </div>

            {/* Content column */}
            <div className="sm:col-span-8">
              <h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-[-0.02em] group-hover:opacity-60 transition-opacity duration-300">
                {project.title}
              </h3>
              <p className="mt-4 text-base text-neutral-500 leading-[1.8] max-w-2xl">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link column */}
            <div className="sm:col-span-2 flex sm:justify-end items-start pt-1">
              {project.link && (
                <Link
                  href={project.link}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-neutral-400 hover:text-neutral-900 flex items-center gap-1"
                >
                  <span>View</span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  >→</motion.span>
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: projects.length * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-neutral-100 mt-0 origin-left"
      />
    </section>
  );
}
