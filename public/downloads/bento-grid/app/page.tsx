"use client";

import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

const portfolioData = {
  name: "Product-minded developer",
  role: "Frontend Engineer",
  tagline:
    "I build developer tools that feel like products, not prototypes. Currently obsessed with making complex workflows feel effortless.",

  heroStats: [
    { value: "18", label: "Products shipped" },
    { value: "5+", label: "Years building" },
    { value: "200K", label: "Users reached" },
  ],

  projects: [
    {
      title: "Design System",
      description:
        "A comprehensive component library for a Series B SaaS platform. 80+ accessible components, full Storybook documentation, and a theming engine adopted by 4 product teams simultaneously.",
      tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Custom Properties"],
      size: "large" as const,
      year: "2025",
      outcome: "Reduced design-to-code time by 60% across 3 squads. Still the canonical reference two years after launch.",
      link: "#",
      accent: "#f59e0b",
    },
    {
      title: "TaskFlow",
      description:
        "A minimalist productivity app that helps remote teams stay focused without the overhead of an enterprise tool. Reached profitability in month 4.",
      tags: ["Next.js", "Supabase", "Upstash"],
      size: "medium" as const,
      year: "2024",
      outcome: "3,200+ daily active users, $8K MRR within 6 months.",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics with interactive Recharts visualizations. Handles 10M+ events/day without query timeouts.",
      tags: ["Next.js", "D3.js", "ClickHouse"],
      size: "medium" as const,
      year: "2024",
      outcome: "Replaced a $2K/month third-party tool.",
    },
    {
      title: "CLI Toolkit",
      description:
        "Developer workflow automation. 2K+ GitHub stars.",
      tags: ["Node.js", "TypeScript"],
      size: "small" as const,
      year: "2023",
    },
    {
      title: "OSS Component",
      description:
        "Accessible date picker. 500 weekly downloads.",
      tags: ["React", "Radix"],
      size: "small" as const,
      year: "2023",
    },
  ],

  about: {
    heading: "I build for users, not for myself.",
    content:
      "Five years across startups and agencies have taught me one thing: the best code is the code that ships and stays. I lean deeply on product intuition, a bias for real user feedback, and a genuine love for the craft of making something feel good to use.",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Figma", "Design Systems"],
    availability: "Open to work",
  },

  email: "alex@example.com",
  contactNote: "I reply within 24 hours.",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Twitter / X", url: "https://twitter.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Read.cv", url: "https://read.cv" },
  ],
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          <Hero
            name={portfolioData.name}
            role={portfolioData.role}
            tagline={portfolioData.tagline}
            stats={portfolioData.heroStats}
          />
          <Projects projects={portfolioData.projects} />
          <About
            heading={portfolioData.about.heading}
            content={portfolioData.about.content}
            skills={portfolioData.about.skills}
            availability={portfolioData.about.availability}
          />
          <Contact
            email={portfolioData.email}
            links={portfolioData.links}
            note={portfolioData.contactNote}
          />
        </div>
      </div>
    </main>
  );
}