"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  status?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="projects" className="relative bg-[#0a0912] px-6 py-24 sm:px-12 lg:px-20">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-purple-500/50 mb-2">// Selected Projects</p>
            <h2 className="font-mono text-3xl font-bold uppercase text-purple-100">Proof of work</h2>
          </div>
          <span className="font-mono text-xs text-purple-500/30">{String(projects.length).padStart(2, "0")}_entries</span>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-sm border border-purple-500/20 bg-purple-500/5 p-7 hover:bg-purple-500/10 transition-colors"
            >
              {/* Scanline hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(168,85,247,0.03) 3px, rgba(168,85,247,0.03) 4px)",
              }} />

              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono rounded-sm bg-purple-500/15 border border-purple-500/20 px-2 py-0.5 text-[10px] text-purple-400">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {project.status && (
                    <span className="flex items-center gap-1 font-mono text-[10px] text-purple-400/60">
                      <span className="h-1 w-1 rounded-full bg-purple-400 animate-pulse" />{project.status}
                    </span>
                  )}
                  {project.year && <span className="font-mono text-[10px] text-purple-500/40">{project.year}</span>}
                </div>
              </div>

              <h3 className="font-mono text-xl font-bold uppercase text-purple-100 tracking-tight">{project.title}</h3>
              <p className="mt-3 font-mono text-sm leading-[1.75] text-purple-300/55">{project.description}</p>

              {/* Hover arrow */}
              <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-px flex-1 bg-purple-500/30" />
                <span className="font-mono text-xs text-purple-400">VIEW_PROJECT →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}