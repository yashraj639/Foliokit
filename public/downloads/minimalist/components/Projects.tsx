"use client";

import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="px-6 py-20 sm:px-12 lg:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-12">
          Selected work
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-16"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={item}
            className="group grid sm:grid-cols-12 gap-4 sm:gap-8 border-t border-neutral-200 pt-8"
          >
            <div className="sm:col-span-3">
              <span className="text-sm text-neutral-400">{project.year}</span>
            </div>

            <div className="sm:col-span-9">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 group-hover:opacity-60 transition-opacity">
                  {project.title}
                </h3>
                {project.link && (
                  <Link
                    href={project.link}
                    className="hidden sm:inline-flex opacity-0 group-hover:opacity-60 transition-opacity text-neutral-900"
                  >
                    →
                  </Link>
                )}
              </div>

              <p className="mt-3 text-neutral-600 leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-neutral-100 text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}