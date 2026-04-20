"use client";

import Link from "next/link";
import { Hero } from "@/app/templates/neobrutalism/components/Hero";
import { Projects } from "@/app/templates/neobrutalism/components/Projects";
import { About } from "@/app/templates/neobrutalism/components/About";
import { Contact } from "@/app/templates/neobrutalism/components/Contact";

const portfolioData = {
  name: "I make product surfaces that refuse to blend in.",
  role: "Frontend developer • loud interfaces • useful systems",
  tagline:
    "I build UI with high contrast, fast hierarchy, and enough personality to actually be remembered. This is what it looks like when a developer stops apologizing for having opinions.",

  heroNotes: [
    { label: "Currently", copy: "Shipping interfaces with more nerve and less filler.", tone: "bg-[#ffe45e]", tilt: "-2" },
    { label: "Stack", copy: "React, TypeScript, motion, design systems, product thinking.", tone: "bg-[#93d6ff]", tilt: "2" },
    { label: "Best at", copy: "Turning messy workflows into punchy, clear product surfaces.", tone: "bg-[#fff8f1]", tilt: "-1" },
  ],

  heroStats: [
    { value: "40+", label: "Products shipped" },
    { value: "5M+", label: "Users reached" },
    { value: "3", label: "Design systems built" },
  ],

  projects: [
    {
      index: "01",
      title: "Campus Creator Platform",
      description:
        "Built a student creator portal with louder hierarchy and reusable modules, making event promotion faster for organizers stuck in bloated admin flows. Adopted by 12 universities in 6 months.",
      tone: "bg-[#ff9a79]",
      tags: ["React", "TypeScript", "Supabase"],
      year: "2025",
      link: "#",
    },
    {
      index: "02",
      title: "AI Support Dashboard",
      description:
        "Redesigned an internal support surface with stronger filtering, cleaner task grouping, and more immediate feedback across messy operational data. Cut resolution time by 30%.",
      tone: "bg-[#fff8f1]",
      tags: ["Next.js", "tRPC", "Prisma"],
      year: "2024",
      link: "#",
    },
    {
      index: "03",
      title: "Finance Tracker",
      description:
        "Turned spreadsheet-like money tracking into a guided product experience that felt human, readable, and far less intimidating. 8,000+ active users within the first month.",
      tone: "bg-[#ffe45e]",
      tags: ["React Native", "Expo", "Plaid API"],
      year: "2024",
      link: "#",
    },
  ],

  about: {
    heading: "Interfaces should explain themselves before the user gets tired.",
    content:
      "My work sits between visual taste and shipping discipline. I enjoy product surfaces that have a point of view, copy that lands fast, and code that stays understandable when the visuals are doing a lot.",
    focus: [
      "Marketing surfaces with stronger hierarchy and faster decision-making paths",
      "Reusable design systems for small teams who need to ship at speed",
      "Frontend architecture that stays readable six months after you wrote it",
      "Copy-driven UI where the content carries the layout, not the other way around",
    ],
    stats: [
      { value: "40+", label: "Products shipped" },
      { value: "5M+", label: "Users reached" },
      { value: "3", label: "Design systems" },
    ],
  },

  email: "nova@example.com",
  contactHeading: "Need a frontend dev with taste, speed, and a louder point of view?",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Twitter / X", url: "https://twitter.com" },
    { label: "Dribbble", url: "https://dribbble.com" },
  ],
};

export default function NeobrutalismPreviewPage() {
  return (
    <main className="min-h-screen bg-[#fff3eb] text-[#23150d]">
      <div className="mx-auto w-full max-w-[1160px] px-4 py-5 sm:px-6 lg:px-8">
        {/* Nav */}
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3 border-[3px] border-[#23150d] bg-[#fff8f2] px-5 py-4 shadow-[8px_8px_0_#23150d]">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em]">
            ← Back to gallery
          </Link>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center border-[3px] border-[#23150d] bg-[#fff8f2] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[4px_4px_0_#23150d]">
              React preview
            </span>
            <Link
              href="/templates/neobrutalism"
              className="inline-flex items-center gap-2 border-[3px] border-[#23150d] bg-[#23150d] px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#fff8f2] shadow-[4px_4px_0_#8b7355] hover:shadow-[2px_2px_0_#8b7355] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              View details ↗
            </Link>
          </div>
        </header>

        <div className="grid gap-5">
          <Hero
            name={portfolioData.name}
            role={portfolioData.role}
            tagline={portfolioData.tagline}
            notes={portfolioData.heroNotes.map(n => ({ ...n, tilt: n.tilt }))}
            stats={portfolioData.heroStats}
          />
          <Projects projects={portfolioData.projects} />
          <About
            heading={portfolioData.about.heading}
            content={portfolioData.about.content}
            focus={portfolioData.about.focus}
            stats={portfolioData.about.stats}
          />
          <Contact
            email={portfolioData.email}
            heading={portfolioData.contactHeading}
            links={portfolioData.links}
          />
        </div>
      </div>
    </main>
  );
}