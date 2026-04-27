"use client";

import Link from "next/link";
import { Hero } from "@/app/templates/editorial/components/Hero";
import { Projects } from "@/app/templates/editorial/components/Projects";
import { About } from "@/app/templates/editorial/components/About";
import { Contact } from "@/app/templates/editorial/components/Contact";
import { ArrowUpRight } from "lucide-react";

const portfolioData = {
  name: "Jamie Rivers",
  role: "Product Engineer · Technical Writer",
  tagline:
    "I build thoughtful software and write about the decisions behind it. Five years shipping products, two years publishing essays on engineering craft.",
  currently: "Building async tools at Linear",

  projects: [
    {
      title: "Rethinking the Pull Request Review",
      description:
        "A deep-dive case study on how teams lose hours every week in code review friction — and the interface redesign that recovered them. Built a prototype that cut average review time from 47 minutes to 18 across a team of 12.",
      tags: ["Product thinking", "React", "TypeScript"],
      year: "2025",
      readTime: "14 min",
      outcome: "Adopted by three engineering teams as their internal PR workflow. 60% reduction in review roundtrips.",
      link: "#",
    },
    {
      title: "A Design System That Survived Year Two",
      description:
        "Most design systems die when the team that built them moves on. This is the story of how we designed ours to outlive us — contribution model, decision logs, deprecation paths, and all.",
      tags: ["Systems thinking", "React", "Documentation"],
      year: "2024",
      readTime: "22 min",
      outcome: "Still in production 30 months later, maintained by engineers who joined after it launched.",
      link: "#",
    },
    {
      title: "Writing as Product Thinking",
      description:
        "Technical writing isn't just documentation — it's a thinking tool. How I use writing to find the gaps in my architecture before I code a single line.",
      tags: ["Process", "Writing", "Engineering craft"],
      year: "2024",
      readTime: "8 min",
      link: "#",
    },
  ],

  about: {
    heading: "Writing is thinking. Shipping is proof.",
    content:
      "I work at the overlap between product engineering and technical communication. I've spent five years building software and two years writing about why it gets built the way it does. I believe the clearest indicator of deep understanding is being able to explain it to someone on the outside — clearly, honestly, without hiding behind jargon.",
    writing: [
      { title: "Why Most Design Systems Die", venue: "Increment", year: "2025", link: "#" },
      { title: "The Product Manager Every Engineer Needs", venue: "Lenny's Newsletter", year: "2024", link: "#" },
      { title: "On Not Optimizing Too Soon", venue: "Personal blog", year: "2024", link: "#" },
      { title: "Readable Code Is Not Simple Code", venue: "CSS-Tricks", year: "2023", link: "#" },
    ],
  },

  email: "jamie@example.com",
  contactNote: "I read every message and reply within 24 hours.",
  links: [
    { label: "Read.cv", url: "https://read.cv" },
    { label: "GitHub", url: "https://github.com" },
    { label: "Substack", url: "https://substack.com" },
    { label: "Twitter / X", url: "https://twitter.com" },
  ],
};

export default function EditorialPreviewPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e8]">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#2f2a24]/10 bg-[#f4f0e8]/90 px-6 py-4 backdrop-blur-sm">
        <Link href="/" className="font-serif text-sm italic text-[#78716c] hover:text-[#2f2a24] transition-colors">
          ← Back to gallery
        </Link>
        <Link
          href="/templates/editorial"
          className="font-serif rounded-full bg-[#2f2a24] px-4 py-2 text-sm text-[#f4f0e8] transition hover:opacity-80"
        >
          View details <ArrowUpRight className="w-4 h-4 ml-2" />
        </Link>
      </header>

      <div className="pt-14">
        <Hero
          name={portfolioData.name}
          role={portfolioData.role}
          tagline={portfolioData.tagline}
          currently={portfolioData.currently}
        />
        <Projects projects={portfolioData.projects} />
        <About
          heading={portfolioData.about.heading}
          content={portfolioData.about.content}
          writing={portfolioData.about.writing}
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