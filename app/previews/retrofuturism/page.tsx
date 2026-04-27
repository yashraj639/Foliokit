"use client";

import Link from "next/link";
import { Hero } from "@/app/templates/retrofuturism/components/Hero";
import { Projects } from "@/app/templates/retrofuturism/components/Projects";
import { About } from "@/app/templates/retrofuturism/components/About";
import { Contact } from "@/app/templates/retrofuturism/components/Contact";
import { ArrowUpRight } from "lucide-react";

const portfolioData = {
  name: "Building Tomorrow's Interfaces Today",
  role: "Experimental Frontend Developer",
  tagline:
    "I explore the outer limits of what the web can render. CRT effects, WebGL shaders, generative art, glitch systems — if it pushes the browser past what people expect, I'm building it.",

  stats: [
    { value: "12", label: "Experiments shipped" },
    { value: "8K+", label: "GitHub stars" },
    { value: "3", label: "Conference talks" },
  ],

  projects: [
    {
      title: "Glitch Engine",
      description:
        "A real-time WebGL glitch library. Procedural pixel displacement, RGB channel splitting, and scanline corruption — all configurable in 4KB. Featured on CSS-Tricks and JS Weekly.",
      tags: ["WebGL", "GLSL", "TypeScript"],
      year: "2025",
      status: "LIVE",
    },
    {
      title: "CRT Monitor",
      description:
        "A photorealistic CRT monitor simulation in pure CSS. Scanlines, barrel distortion, phosphor glow, and bloom — zero JavaScript. 3.2K GitHub stars.",
      tags: ["CSS", "Animation", "Retro"],
      year: "2025",
      status: "OPEN SOURCE",
    },
    {
      title: "Particle System",
      description:
        "GPU-accelerated particle physics using WebGPU compute shaders. 2 million particles at a locked 60fps on modern hardware. Includes gravity wells, magnetic fields, and flocking behavior.",
      tags: ["WebGPU", "WGSL", "Canvas"],
      year: "2024",
      status: "EXPERIMENTAL",
    },
    {
      title: "Noise Terrain",
      description:
        "Infinite procedural 3D terrain rendered with Three.js and octave Perlin noise. Fly-through navigation with dynamic LOD at 90fps on mid-range GPUs.",
      tags: ["Three.js", "Perlin Noise", "GLSL"],
      year: "2024",
      status: "DEMO",
    },
  ],

  about: {
    heading: "The future is already here.",
    content:
      "I don't wait for tools to exist — I build them. Every experiment is a stepping stone to the next breakthrough. The web is capable of far more than most developers realize, and I've made it my job to prove that in public, one commit at a time.",
    skills: ["WebGL / GLSL", "WebGPU / WGSL", "Three.js", "Canvas 2D", "TypeScript", "React", "Rust (WASM)", "Physics Simulation"],
    stats: [
      { value: "8K+", label: "Stars" },
      { value: "42", label: "Experiments" },
      { value: "2M+", label: "Particles" },
    ],
  },

  email: "alex@future.dev",
  contactHeading: "Drop a signal.",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Twitter / X", url: "https://twitter.com" },
    { label: "CodePen", url: "https://codepen.io" },
    { label: "YouTube", url: "https://youtube.com" },
  ],
};

export default function RetrofuturismPreviewPage() {
  return (
    <main className="min-h-screen bg-[#0a0912]">
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-purple-500/15 bg-[#0a0912]/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="font-mono text-sm text-purple-400/70 transition hover:text-purple-300">
          ← Back to gallery
        </Link>
        <Link
          href="/templates/retrofuturism"
          className="font-mono rounded-sm bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
        >
          View details <ArrowUpRight className="w-4 h-4 ml-2" />
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
          stats={portfolioData.about.stats}
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