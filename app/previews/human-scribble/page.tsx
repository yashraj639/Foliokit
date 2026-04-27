"use client";

import Link from "next/link";
import { Hero } from "@/app/templates/human-scribble/components/Hero";
import { Projects } from "@/app/templates/human-scribble/components/Projects";
import { About } from "@/app/templates/human-scribble/components/About";
import { Contact } from "@/app/templates/human-scribble/components/Contact";
import { ArrowUpRight } from "lucide-react";

const portfolioData = {
  name: "Alex Rivera",
  role: "Builder · Maker · Occasional overthinker",
  tagline:
    "I'm a developer who builds things that feel human. Not corporate, not template-y — just genuine products made by someone who cares too much about the details.",
  currentlyBuilding: "a tool for async standups that doesn't feel like work",

  nowItems: [
    "Shipping a daily writing habit alongside the day job",
    "Learning Rust (very slowly, very humbled)",
    "Reading everything by Craig Mod",
    "Building in public — warts, delays, and all",
  ],

  projects: [
    {
      title: "Daily",
      description:
        "A minimalist journaling app I built because every existing one annoyed me. 400+ daily active users, zero marketing. Just shipped it and told a few people.",
      year: "2025",
      tags: ["React Native", "Expo", "SQLite"],
      link: "#",
      tint: "bg-amber-100/70",
    },
    {
      title: "Weekend Project",
      description:
        "Started Saturday morning, shipped Sunday night. A Pomodoro timer that connects to your calendar and blocks focus time automatically. Not pretty, but it works.",
      year: "2024",
      tags: ["Node.js", "Google Calendar API"],
      link: "#",
      tint: "bg-orange-100/50",
    },
    {
      title: "This Portfolio",
      description:
        "My attempt at not making another generic portfolio. Designed it with the same principles I apply to my products: clear, specific, and honest about what's works-in-progress.",
      year: "2024",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      tint: "bg-yellow-100/50",
    },
    {
      title: "Open Standup",
      description:
        "An async standup tool for remote teams. Lightweight, no daily meeting fatigue. Currently at 200 active workspaces.",
      year: "2023",
      tags: ["Next.js", "Supabase", "Resend"],
      link: "#",
      tint: "bg-amber-50/80",
    },
  ],

  about: {
    heading: "I'm a maker at heart.",
    content:
      "I don't do corporate well. I like building things that feel human — imperfect, honest, interesting. If you want someone who actually cares about what they're making and talks about it publicly, let's talk.",
    facts: [
      "I've shipped 8+ products to real users (paying ones, not just friends)",
      "I write a newsletter about building small software for 1,200+ subscribers",
      "I've been building in public since 2022 — failures included",
      "I value shipping over perfecting. A deployed feature beats a perfect draft.",
      "I believe the best code is the code you'll still understand in two years",
    ],
  },

  email: "alex@email.com",
  contactNote: "I reply to everyone, usually within a day.",
  links: [
    { label: "Twitter / X", url: "https://twitter.com" },
    { label: "GitHub", url: "https://github.com" },
    { label: "Newsletter", url: "#" },
    { label: "Read.cv", url: "https://read.cv" },
  ],
};

export default function HumanScribblePreviewPage() {
  return (
    <main className="min-h-screen">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-amber-700/10 bg-[#fdf8eb]/85 px-6 py-4 backdrop-blur-sm">
        <Link href="/" className="text-sm font-medium text-amber-700/70 transition hover:text-amber-900">
          ← Back to gallery
        </Link>
        <Link
          href="/templates/human-scribble"
          className="rounded-full bg-amber-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-900"
        >
          View details <ArrowUpRight className="w-4 h-4 ml-2" />
        </Link>
      </header>

      <div>
        <Hero
          name={portfolioData.name}
          role={portfolioData.role}
          tagline={portfolioData.tagline}
          currentlyBuilding={portfolioData.currentlyBuilding}
          nowItems={portfolioData.nowItems}
        />
        <Projects projects={portfolioData.projects} />
        <About
          heading={portfolioData.about.heading}
          content={portfolioData.about.content}
          facts={portfolioData.about.facts}
        />
        <Contact
          email={portfolioData.email}
          links={portfolioData.links}
          note={portfolioData.contactNote}
        />
      </div>
    </main>
  );
}