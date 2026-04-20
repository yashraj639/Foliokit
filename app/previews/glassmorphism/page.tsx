"use client";

import Link from "next/link";
import { Hero } from "@/app/templates/glassmorphism/components/Hero";
import { Projects } from "@/app/templates/glassmorphism/components/Projects";
import { About } from "@/app/templates/glassmorphism/components/About";
import { Contact } from "@/app/templates/glassmorphism/components/Contact";

const portfolioData = {
  name: "Maya Patel",
  role: "Frontend Engineer • Open to work",
  tagline:
    "I craft premium, polished product experiences at the intersection of AI and great interface design. Every interaction I build feels intentional — because it is.",

  stats: [
    { value: "4+", label: "Years in product" },
    { value: "18", label: "Apps shipped" },
    { value: "2M+", label: "Users reached" },
  ],

  projects: [
    {
      title: "AI Chat Interface",
      description:
        "A next-generation conversational AI interface with real-time streaming, voice input, adaptive tone detection, and a UI system that feels genuinely human. Handles 500K+ messages per day across enterprise and consumer tiers.",
      tags: ["React", "TypeScript", "OpenAI", "WebSockets", "Framer Motion"],
      year: "2025",
      link: "#",
      featured: true,
    },
    {
      title: "Design System",
      description:
        "A comprehensive component library for AI-first products. Dark mode by default, full motion primitive set, and accessibility baked into every component.",
      tags: ["React", "Storybook", "Radix", "Motion"],
      year: "2024",
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics with interactive D3 visualizations, customizable widgets, and a filter system that handles 50+ dimensions without performance degradation.",
      tags: ["Next.js", "D3.js", "Supabase", "Recharts"],
      year: "2024",
      link: "#",
    },
    {
      title: "Generative UI Kit",
      description:
        "A library of AI-generated UI components for rapid prototyping. 200+ components, 8 style themes, and outputs clean React code.",
      tags: ["AI", "React", "TypeScript"],
      year: "2023",
      link: "#",
    },
  ],

  about: {
    heading: "Interfaces should feel magical, not magical-looking.",
    content:
      "Great software is felt, not just seen. I focus on the details that create that feeling — micro-interactions that give feedback before the user knows they need it, transitions that make navigation feel spatial, and systems that hold up when the content is real, messy, and unpredictable.",
    skills: ["React", "TypeScript", "Next.js", "Motion", "AI Integration", "Design Systems", "Figma", "WebGL", "CSS Architecture"],
    experience: [
      { role: "Senior Frontend Engineer", company: "Anthropic", period: "2024 – Now" },
      { role: "Founding Engineer", company: "Cortex AI", period: "2022 – 2024" },
      { role: "Frontend Developer", company: "Vercel", period: "2021 – 2022" },
    ],
  },

  email: "maya@example.com",
  contactHeading: "Ready to build something remarkable?",
  availability: "Available for freelance & full-time",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Twitter / X", url: "https://twitter.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Dribbble", url: "https://dribbble.com" },
  ],
};

export default function GlassmorphismPreviewPage() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      {/* Fixed nav */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-[#0f172a]/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="text-sm font-medium text-white/60 transition hover:text-white">
          ← Back to gallery
        </Link>
        <Link
          href="/templates/glassmorphism"
          className="rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 text-sm font-medium text-white"
        >
          View details ↗
        </Link>
      </header>

      <div className="pt-16">
        <Hero
          name={portfolioData.name}
          role={portfolioData.role}
          tagline={portfolioData.tagline}
          stats={portfolioData.stats}
        />

        <Projects projects={portfolioData.projects} />

        <About
          heading={portfolioData.about.heading}
          content={portfolioData.about.content}
          skills={portfolioData.about.skills}
          experience={portfolioData.about.experience}
        />

        <Contact
          email={portfolioData.email}
          heading={portfolioData.contactHeading}
          links={portfolioData.links}
          availability={portfolioData.availability}
        />
      </div>
    </main>
  );
}