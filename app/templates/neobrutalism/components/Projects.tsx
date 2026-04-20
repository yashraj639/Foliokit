"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Project {
  index: string;
  title: string;
  description: string;
  tone: string;
  tags?: string[];
  year?: string;
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="projects" className="border-[3px] border-[#23150d] bg-[#fff8f2] px-6 py-8 shadow-[10px_10px_0_#23150d]">
      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b7355]">Selected work</p>
          <h2 className="mt-3 max-w-[14ch] text-4xl sm:text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#23150d]">
            Proof, not placeholder thumbnails.
          </h2>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="inline-flex items-center border-[3px] border-[#23150d] bg-[#ff8d6d] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[4px_4px_0_#23150d]">
            {projects.length} live examples
          </span>
        </div>
      </div>

      {/* Project grid */}
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className={`${project.tone} group border-[3px] border-[#23150d] px-5 py-6 shadow-[6px_6px_0_#23150d] hover:shadow-[3px_3px_0_#23150d] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-default`}
          >
            <div className="flex items-start justify-between gap-2 mb-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#23150d]/50">{project.index}</p>
              {project.year && <span className="text-[10px] font-black uppercase tracking-wider text-[#23150d]/40">{project.year}</span>}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#23150d]">{project.title}</h3>
            <p className="mt-4 font-sans text-sm leading-[1.8] text-[#3d281d]">{project.description}</p>
            {project.tags && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-[#23150d]/30 bg-[#23150d]/8 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#23150d]/60">{tag}</span>
                ))}
              </div>
            )}
            {project.link && (
              <a href={project.link} className="mt-5 inline-flex items-center gap-2 border-b-[2px] border-[#23150d] pb-0.5 text-xs font-black uppercase tracking-[0.12em]">
                View project →
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}