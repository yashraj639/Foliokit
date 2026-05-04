"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  readTime?: string;
  outcome?: string;
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <section ref={ref} id="projects" className="bg-[#f4f0e8] px-6 py-24 sm:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16 border-b border-[#2f2a24]/15 pb-5"
        >
          <p className="font-serif text-sm italic text-[#78716c]">Selected case studies</p>
          <span className="font-serif text-xs text-[#c4b89e]">{projects.length} pieces</span>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group grid sm:grid-cols-[1fr_2.5fr] gap-6 sm:gap-12 border-t border-[#2f2a24]/10 pt-10"
            >
              {/* Meta column */}
              <div>
                <p className="font-serif text-xs italic text-[#a8a092]">{project.year}</p>
                {project.readTime && <p className="mt-1 font-serif text-xs text-[#c4b89e]">{project.readTime} read</p>}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-serif text-[11px] italic text-[#a8a092]">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Content column */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#2f2a24] group-hover:opacity-60 transition-opacity duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 font-serif text-base leading-[1.85] text-[#57534e]">{project.description}</p>
                {project.outcome && (
                  <blockquote className="mt-6 border-l-2 border-[#2f2a24]/30 pl-4 font-serif text-sm italic text-[#78716c]">
                    {project.outcome}
                  </blockquote>
                )}
                {project.link && (
                  <a href={project.link} className="mt-5 inline-flex items-center gap-2 font-serif text-sm text-[#2f2a24] border-b border-[#2f2a24]/30 pb-0.5 hover:border-[#2f2a24] transition-colors">
                    Read the case study →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}