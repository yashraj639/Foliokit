"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="projects" className="relative py-24 bg-[#0f172a]">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #6366f1 0%, transparent 50%)" }} />

      <div className="relative px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-400/60 mb-2">Selected work</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">What I&apos;ve built</h2>
          </div>
          <span className="text-sm text-white/30 font-mono">{String(projects.length).padStart(2, "0")} projects</span>
        </motion.div>

        {/* Featured project — large card */}
        {projects[0] && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-10 hover:bg-white/8 transition-colors"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />

            <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 uppercase tracking-wider">Featured</span>
                  <span className="text-xs text-white/30 font-mono">{projects[0].year}</span>
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">{projects[0].title}</h3>
                <p className="mt-4 text-base text-white/60 leading-[1.8] max-w-2xl">{projects[0].description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/8 border border-white/10 px-3 py-1 text-xs font-medium text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
              <a href={projects[0].link || "#"} className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors px-5 py-2.5 text-sm font-medium text-white/70 shrink-0">
                View project →
              </a>
            </div>
          </motion.article>
        )}

        {/* Remaining projects — 3-col grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(1).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: (index + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/8 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-white/30 font-mono">{project.year}</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-white/50 leading-[1.75]">{project.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View details <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}