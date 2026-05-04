"use client";

import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

const portfolioData = {
  name: "Alex Chen",
  role: "Full-stack Developer",
  tagline:
    "I build thoughtful digital products with focus on simplicity and long-term clarity. Five years of shipping things that stay maintainable. Currently open to senior IC roles.",

  projects: [
    {
      title: "TaskFlow",
      description:
        "A minimalist productivity app built for teams who hate bloated tools. Reduced cognitive load by 40% through intentional design and streamlined workflows. Used daily by 3,000+ people across 12 companies.",
      tags: ["TypeScript", "React", "Supabase", "Postgres"],
      year: "2025",
      link: "#",
    },
    {
      title: "Design System",
      description:
        "A comprehensive component library built for a Series B SaaS company. 50+ accessible components, full Storybook documentation, and a theming system that the design team actually uses.",
      tags: ["React", "Storybook", "CSS Custom Properties", "Radix UI"],
      year: "2024",
      link: "#",
    },
    {
      title: "Weather Forecast",
      description:
        "A clean weather application with hyper-local forecasts and elegant data visualizations. Reached 10,000+ daily active users without a dollar spent on marketing.",
      tags: ["Next.js", "OpenWeather API", "D3.js"],
      year: "2024",
      link: "#",
    },
    {
      title: "Open Source CLI",
      description:
        "A developer tool that automates repetitive Git workflows. 2,000+ GitHub stars and featured in JavaScript Weekly.",
      tags: ["Node.js", "TypeScript", "Shell"],
      year: "2023",
      link: "#",
    },
  ],

  about: "I'm a full-stack developer who believes great software comes from understanding users deeply, not from adding features. With 5 years across startups and agencies, I've shipped products used by millions — and I've learned that the best code is the code that doesn't need explaining. I write, I read, I care about typography as much as I care about architecture.",

  skills: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Figma", "Systems Design"],

  availability: "Open to new roles",

  email: "alex@example.com",
  contactNote: "I respond to every message within 24 hours.",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Twitter / X", url: "https://twitter.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Read.cv", url: "https://read.cv" },
  ],
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Hero
        name={portfolioData.name}
        role={portfolioData.role}
        tagline={portfolioData.tagline}
      />

      <Projects projects={portfolioData.projects} />

      <About
        content={portfolioData.about}
        skills={portfolioData.skills}
        availability={portfolioData.availability}
      />

      <Contact
        email={portfolioData.email}
        links={portfolioData.links}
        note={portfolioData.contactNote}
      />
    </main>
  );
}