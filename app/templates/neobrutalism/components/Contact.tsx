"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ContactProps {
  email: string;
  heading: string;
  links?: { label: string; url: string }[];
}

export function Contact({ email, heading, links }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      id="contact"
      className="mt-5 border-[3px] border-[#23150d] bg-[#fff8f2] px-6 py-8 shadow-[10px_10px_0_#23150d]"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b7355]">Contact</p>
          <h2 className="mt-4 max-w-[16ch] text-3xl sm:text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#23150d]">
            {heading}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-12 items-center justify-center border-[3px] border-[#23150d] bg-[#ffe45e] px-5 text-sm font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#23150d] hover:shadow-[3px_3px_0_#23150d] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            {email}
          </a>
          {links?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center border-[3px] border-[#23150d] bg-[#fff8f2] px-5 text-sm font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#23150d] hover:shadow-[3px_3px_0_#23150d] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between border-t-[3px] border-[#23150d] pt-5">
        <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8b7355]">Built with Foliokit</span>
        <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8b7355]">© {new Date().getFullYear()}</span>
      </div>
    </motion.footer>
  );
}