# 📦 Foliokit

### Decision-first portfolio starters for developers.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Motion-12.0-ff0055?style=flat-square&logo=framer)](https://motion.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Foliokit** is a modern template gallery designed for developers who want more than just a visual theme. It helps you choose a portfolio direction based on your goals, provides deep decision-level metadata (who it's for, why it works, how to customize it), and ships with production-ready Next.js starter kits.

---

## ✨ Key Features

- **Decision-First Design**: Don't just pick a theme; understand the "why" behind it. Every template includes 9+ layers of metadata including target audience, style philosophy, and content tips.
- **Modern Tech Stack**: No legacy code. Built from the ground up with **Next.js 16 (App Router)**, **Tailwind CSS 4**, and **Framer Motion**.
- **Ready-to-Ship ZIPs**: Each template has a corresponding downloadable starter kit that's optimized for performance and lighthouse scores.
- **Rich Interaction**: Interactive gallery features like bento-grid metric counters, glassmorphic effects, and fluid transitions.
- **Developer-Centric**: Built for customization. Clean codebases that act as a deep foundation, not a restrictive framework.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Architecture**: Bespoke Design System (Custom UI Primitives)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Instrument Sans, Sora, Sora, Orbitron)

## 📁 Project Structure

```text
├── app/                  # Next.js App Router pages
│   ├── templates/        # Dynamic template detail pages
│   └── previews/         # Live template previews
├── components/           # Standardized Component System
│   ├── layout/           # Semantic containers (Section)
│   ├── typography/       # Hierarchy-first text (Heading, Text)
│   └── ui/               # Reusable primitives (Button, Badge)
├── lib/                  # Utilities & Data
│   └── templates.ts      # The core data layer for the gallery
├── public/               # Static assets & ZIP downloads
└── tailwind.config.ts    # Styling configuration
```

## 🧩 Component Architecture

The project has been refactored from ad-hoc classes to a rigorous, variant-based component system:

- **Layout (`<Section />`)**: Handles semantic wrappers and consistent horizontal padding.
- **Typography (`<Heading />`, `<Text />`)**: Enforces "tight" tracking (`-0.08em`) and Sora-based display logic.
- **UI (`<Button />`, `<Badge />`)**: Standardized interaction layer with polymorphic link support.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / pnpm / yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/foliokit.git
   cd foliokit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see Foliokit in action.

---

## 🎨 Templates Overview

| Template | Aesthetic | Best For | Complexity |
| :--- | :--- | :--- | :--- |
| **Minimalist** | Minimal | Senior Devs / Clarity | Beginner |
| **Neobrutalism** | Bold | Junior Devs / Standing out | Beginner |
| **Bento Grid** | Modern | Product Devs / Scannability | Intermediate |
| **Glassmorphism** | Creative | AI/SaaS Devs / Product sense | Advanced |
| **Editorial** | Classic | Writers / Thinkers | Intermediate |
| **Organic** | Artistic | Creative Devs / Storytelling | Advanced |
| **Scribble** | Personal | Indie Hackers / Warm tone | Intermediate |
| **Cyberpunk** | Glitch | Enthusiasts / GPU Motion | Advanced |

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with 🖤 for the developer community.
