"use client";

import Link from "next/link";
import { Hero } from "@/app/templates/organic-layout/components/Hero";
import { Projects } from "@/app/templates/organic-layout/components/Projects";
import { About } from "@/app/templates/organic-layout/components/About";
import { Contact } from "@/app/templates/organic-layout/components/Contact";
import { ArrowUpRight } from "lucide-react";

const portfolioData = {
  name: "Creative developer who cares about the details",
  role: "Frontend Engineer",
  tagline:
    "I build experiences that feel handcrafted, not generated. Every pixel earns its place.",
  availability: "Open to freelance projects",

  projects: [
    {
      title: "Design System",
      description:
        "A component library built to survive two years of product growth. Every token, every variant, every edge case documented so the team after me could contribute without breaking things. 80+ components, 3 design themes, 0 undocumented decisions.",
      tags: ["React", "Storybook", "CSS Custom Properties", "Figma"],
      year: "2025",
      link: "#",
    },
    {
      title: "Photography Portfolio",
      description:
        "Built for a photographer who sees the world differently — the layout needed to match that. Masonry grid with CSS columns, full-bleed mobile experience, and a loading sequence that felt like opening a magazine rather than loading a web page.",
      tags: ["Next.js", "Creative direction", "CSS Masonry"],
      year: "2024",
      link: "#",
    },
    {
      title: "Learning Platform",
      description:
        "An educational platform deliberately designed against every corporate cliché. No stale gradients, no generic stock photography, no committee-approved color palettes. Warm, readable, and built for children who don't like school yet.",
      tags: ["React", "Product thinking", "Accessibility", "UX"],
      year: "2024",
    },
  ],

  about: {
    heading: "I believe in craft over speed.",
    content:
      "It's easy to ship fast. It's harder to ship something that still feels considered three years after launch. I make that harder choice every time — and it's why clients and teams keep coming back.",
    values: [
      { title: "Craft over templates", body: "I start from first principles, not component libraries. Every project is different." },
      { title: "Clarity over cleverness", body: "My code should be readable to a developer who wasn't in the room when I wrote it." },
      { title: "Patience over speed", body: "The last 10% of polish is where the experience actually lives. I don't skip it." },
    ],
  },

  email: "hello@example.com",
  contactHeading: "Have a project that needs care and patience?",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Dribbble", url: "https://dribbble.com" },
    { label: "Are.na", url: "https://are.na" },
    { label: "LinkedIn", url: "https://linkedin.com" },
  ],
};

export default function OrganicLayoutPreviewPage() {
  return (
    <main className="min-h-screen bg-[#f6f9f3]">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-green-900/10 bg-[#f6f9f3]/85 px-6 py-4 backdrop-blur-sm">
        <Link href="/" className="text-sm font-medium text-green-700 transition hover:text-green-900">
          ← Back to gallery
        </Link>
        <Link
          href="/templates/organic-layout"
          className="rounded-full bg-green-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-900"
        >
          View details <ArrowUpRight className="w-4 h-4 ml-2" />
        </Link>
      </header>

      <div>
        <Hero
          name={portfolioData.name}
          role={portfolioData.role}
          tagline={portfolioData.tagline}
          availability={portfolioData.availability}
        />
        <Projects projects={portfolioData.projects} />
        <About
          heading={portfolioData.about.heading}
          content={portfolioData.about.content}
          values={portfolioData.about.values}
        />
        <Contact
          email={portfolioData.email}
          heading={portfolioData.contactHeading}
          links={portfolioData.links}
        />
      </div>
    </main>
  );
}