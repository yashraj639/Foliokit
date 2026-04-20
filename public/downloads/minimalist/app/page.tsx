"use client";

import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

const portfolioData = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your tagline here. Write something that describes what you do and what you're passionate about.",

  projects: [
    {
      title: "Project One",
      description: "A brief description of the project. What problem did you solve? What was your role?",
      tags: ["React", "TypeScript"],
      year: "2025",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Another project. Keep descriptions concise and focused on impact.",
      tags: ["Next.js", "Tailwind"],
      year: "2024",
      link: "#",
    },
    {
      title: "Project Three",
      description: "One more project to show range and variety.",
      tags: ["Node.js", "PostgreSQL"],
      year: "2024",
      link: "#",
    },
  ],

  about: [
    "Write about your background and experience.",
    "What motivates you? What kind of work do you enjoy?",
    "Share your philosophy or approach to building software.",
  ],

  email: "your@email.com",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Twitter", url: "https://twitter.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
  ],
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Hero
        name={portfolioData.name}
        role={portfolioData.role}
        tagline={portfolioData.tagline}
      />

      <Projects projects={portfolioData.projects} />

      <About content={portfolioData.about.join(" ")} />

      <Contact email={portfolioData.email} links={portfolioData.links} />
    </main>
  );
}