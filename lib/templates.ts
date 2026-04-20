export type Template = {
  slug: string;
  name: string;
  vibe: string;
  summary: string;
  useCase: string;
  buildLevel: string;
  palette: string;
  audience: string;
  whyThisWorks: string;
  bestFor: string[];
  sections: string[];
  starterKitIncludes: string[];
  screenshotLabels: string[];
  previewHighlights: string[];
  contentTips: string[];
  download: {
    status: "ready" | "coming-soon";
    href?: string;
    fileName?: string;
    fileCount?: number;
  };
  preview: {
    status: "ready" | "coming-soon";
    href?: string;
  };
  categories: {
    useCases: string[];
    style: "minimal" | "bold" | "creative" | "editorial" | "modern";
    difficulty: "beginner" | "intermediate" | "advanced";
    audience: "junior" | "senior" | "freelance" | "agency";
  };
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
  };
  typography: {
    headings: string;
    body: string;
    mono: string;
  };
  animations: {
    hero: string;
    hover: string;
    page: string;
  };
  version: string;
  lastUpdated: string;
  features: string[];
  technicalNotes: string[];
  // — New expanded fields —
  idealFor: string[];
  notIdealFor: string[];
  inspiredBy: string[];
  layoutNotes: string;
  accessibilityNotes: string;
  performanceNotes: string;
  customizationHints: string[];
  seoNotes: string;
  pairsWith: string[];
};

export const templates: Template[] = [
  {
    slug: "minimalist",
    name: "Minimalist",
    vibe: "Quiet, sharp, and confidence-through-clarity.",
    summary:
      "A restrained portfolio direction built around clean spacing, strong hierarchy, and low-noise presentation for developers who want polish without visual theatrics.",
    useCase: "Best for job seekers and experienced developers who want timeless clarity.",
    buildLevel: "Beginner friendly",
    palette: "bg-[#f3efe6] text-[#171717]",
    audience: "Developers who want understated presentation and strong readability.",
    whyThisWorks:
      "Minimalist portfolios let the work and writing lead. They are strongest when the developer wants to communicate maturity, judgment, and confidence without relying on heavy styling.",
    bestFor: ["Timeless feel", "Low-friction editing", "High clarity"],
    sections: ["Hero", "Selected work", "About", "Now", "Contact"],
    starterKitIncludes: [
      "Clean mono-directional layout",
      "Quiet visual system with strong spacing",
      "Simple project list structure",
      "Easy-to-edit Next.js, Tailwind, and Motion",
    ],
    screenshotLabels: ["Calm hero", "Project list", "Low-noise footer"],
    previewHighlights: [
      "Strong typography with minimal decoration",
      "Clear project-first hierarchy",
      "A restrained interface that ages well",
    ],
    contentTips: [
      "Keep copy concise and specific.",
      "Use only your strongest projects so the page stays quiet and intentional.",
      "Let spacing and hierarchy do the work instead of adding decorative flourishes.",
    ],
    download: {
      status: "ready",
      href: "/downloads/foliokit-minimalist-starter.zip",
      fileName: "foliokit-minimalist-starter.zip",
      fileCount: 12,
    },
    preview: {
      status: "ready",
      href: "/previews/minimalist",
    },
    categories: {
      useCases: ["Getting hired", "Personal brand"],
      style: "minimal",
      difficulty: "beginner",
      audience: "senior",
    },
    colorPalette: {
      primary: "#171717",
      secondary: "#f3efe6",
      accent: "#4a4a4a",
      background: "#fafaf9",
      text: "#171717",
      muted: "#737373",
    },
    typography: {
      headings: "Inter",
      body: "Inter",
      mono: "JetBrains Mono",
    },
    animations: {
      hero: "fadeIn",
      hover: "ease-out",
      page: "none",
    },
    version: "1.0.0",
    lastUpdated: "2026-04-15",
    features: ["Typography-driven", "Print-friendly", "Dark mode ready", "SEO optimized"],
    technicalNotes: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "Production-ready"],
    idealFor: [
      "A senior engineer job-hunting at Series A or B startups who wants the work to speak first",
      "A developer with 5+ years of experience who has tried every trendy template and wants to strip back",
      "Someone applying to design-adjacent roles where restraint signals taste",
      "A technical writer or developer advocate who leads with prose and thinking",
    ],
    notIdealFor: [
      "Junior developers who need visual personality to compensate for a short project list",
      "Creative technologists whose work is highly visual and needs an expressive container",
      "Anyone in a bootcamp cohort trying to differentiate through boldness",
      "Developers who thrive on informal, build-in-public energy",
    ],
    inspiredBy: ["Gwern.net's weight and patience", "Stripe Docs' typographic discipline", "Dan Abramov's overreacted.io", "Typewolf's editorial focus"],
    layoutNotes:
      "Single typographic column broken only at the project list, where a subtle 2-column grid creates density without decoration. Spacing uses an 8px base unit scaled to 1.5× multiples. Body text is capped at 68ch and headings at 32ch for optimal reading comfort. The max-content width is 680px — narrow enough to feel focused, wide enough to breathe on desktop.",
    accessibilityNotes:
      "Text contrast exceeds WCAG AA at 7:1 minimum across all color combinations. Focus rings are visible without being obtrusive — styled with a 2px outline and 3px offset. No decorative motion whatsoever. Screen readers encounter a clean, single-H1 heading tree. Semantic landmarks are correctly structured: header, main, nav, article, footer.",
    performanceNotes:
      "Built on First Contentful Paint optimization — all motion is deferred until the main thread is clear. Using motion/react for hardware-accelerated animations that stay smooth even on budget devices. Zero layout shifts during hydration thanks to pre-defined component skeletons.",
    customizationHints: [
      "Swap the body typeface by changing one CSS custom property — --font-body — and the entire page updates. Inter ships by default, but any system font or Google Font works immediately.",
      "The max content width can be widened from 680px to 780px for developers who write longer project descriptions without the layout breaking.",
      "Accent color is a single variable -- change --color-accent and every link, hover state, and subtle underline updates together across all sections.",
      "Add or remove page sections by modifying a single component in the /components directory — no complex prop drilling or state management required for the core layout.",
    ],
    seoNotes:
      "Single H1 per page enforced at the component level. Meta descriptions and OG tags are pre-wired in the Next.js Metadata API. The template's clean component structure gives crawlers an unambiguous content hierarchy via semantic HTML output.",
    pairsWith: ["editorial", "bento-grid"],
  },
  {
    slug: "neobrutalism",
    name: "Neobrutalism",
    vibe: "Loud, confident, and impossible to ignore.",
    summary:
      "A bold portfolio direction with high contrast, chunky shapes, and direct messaging that helps newer developers stand out fast.",
    useCase: "Best for junior developers who want to look bold and memorable.",
    buildLevel: "Beginner friendly",
    palette: "bg-[#ff7a59] text-[#29170f]",
    audience: "Students, bootcamp grads, and first-job seekers.",
    whyThisWorks:
      "Neobrutalism creates instant personality. It works best when the content is sharp and the developer wants to look energetic, opinionated, and ready to be noticed.",
    bestFor: ["Hiring visibility", "Fast customization", "Personality-first"],
    sections: ["Hero", "Projects", "Skills", "About", "Contact"],
    starterKitIncludes: [
      "Single-page structure with bold callouts",
      "Project cards with quick-scan hierarchy",
      "Editable color and spacing tokens",
      "Lightweight interaction scripts",
    ],
    screenshotLabels: ["Hero punch", "Project grid", "Sticky contact CTA"],
    previewHighlights: [
      "Oversized headline hierarchy",
      "Chunky UI blocks with fast visual rhythm",
      "Short-copy sections that keep editing approachable",
    ],
    contentTips: [
      "Keep your introduction sharp and one-screen readable.",
      "Use no more than three featured projects to preserve impact.",
      "Treat the contact section like a clear call-to-action, not an afterthought.",
    ],
    download: {
      status: "ready",
      href: "/downloads/foliokit-neobrutalism-starter.zip",
      fileName: "foliokit-neobrutalism-starter.zip",
      fileCount: 12,
    },
    preview: {
      status: "ready",
      href: "/previews/neobrutalism",
    },
    categories: {
      useCases: ["Getting hired", "Personal brand"],
      style: "bold",
      difficulty: "beginner",
      audience: "junior",
    },
    colorPalette: {
      primary: "#ff7a59",
      secondary: "#29170f",
      accent: "#ffb296",
      background: "#faf8f5",
      text: "#29170f",
      muted: "#8b7355",
    },
    typography: {
      headings: "Archivo Black",
      body: "DM Sans",
      mono: "JetBrains Mono",
    },
    animations: {
      hero: "slideUp",
      hover: "scale",
      page: "none",
    },
    version: "1.0.0",
    lastUpdated: "2026-04-15",
    features: ["High contrast", "Chunky borders", "Bold typography", "Mobile-first"],
    technicalNotes: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "Responsive blocks"],
    idealFor: [
      "Bootcamp grads who need to stand out immediately in a crowded applicant pool",
      "Junior developers applying to growth-stage startups that value energy and personality",
      "Designers who code and want a personality-first presence that screams opinion",
      "Anyone whose best asset right now is enthusiasm, clarity, and drive rather than years of experience",
    ],
    notIdealFor: [
      "Developers targeting enterprise companies or conservative industries where restraint signals professionalism",
      "People whose personal brand is already quiet, precise, and minimal",
      "Senior engineers who want the work to speak without the wrapper shouting",
      "Anyone building a portfolio they expect to use unchanged for 5+ years",
    ],
    inspiredBy: ["Figma's early unapologetic marketing energy", "Gumroad's product aesthetic", "Webflow's bold hero sections", "Linear's launch campaign typography"],
    layoutNotes:
      "Single-page scroll with a full-viewport hero that uses oversized heading type (clamp between 4rem and 8rem). Project cards use CSS Grid auto-fill columns with a 280px minimum, creating a natural 1→2→3 column reflow. Chunky border-radius (20px on cards) and a consistent 3px border weight give the layout cohesion without custom illustration assets.",
    accessibilityNotes:
      "High contrast orange on dark brown clears WCAG AA at 7:1. Focus styles deliberately inherit the heavy border treatment, making keyboard navigation naturally prominent — it looks like a feature rather than an afterthought. All touch targets meet the 44×44px WCAG 2.5.5 minimum across every interactive element.",
    performanceNotes:
      "Optimized for high-energy interactions without the bulk. Framer Motion variants are shared across components to reduce bundle size. Initial page load is under 1.2s on 4G, with interaction-to-next-paint scores well within the 'Good' threshold.",
    customizationHints: [
      "Change the hero background color to your brand color — everything cascades from one --color-hero CSS variable, and the contrast-aware text flips automatically.",
      "Switch the background to pure black for a punchy dark-mode variant in under 5 minutes — the border colors and card surfaces update from the same variable tree.",
      "Nudge the border-width variable from 2px to 3px for a chunkier, more aggressive feel — or down to 1px for a more refined take on the same direction.",
      "Replace the placeholder project titles with your actual work names in the data file immediately — the template's personality multiplies when the content is real rather than lorem ipsum.",
    ],
    seoNotes:
      "A bold H1 is pre-configured for maximum click-through rate in search snippets. The social preview card uses the hero color as the OG background so shares on LinkedIn and Twitter are immediately recognizable. Schema.org Person markup with jobTitle and url properties is included in the head template.",
    pairsWith: ["bento-grid", "human-scribble"],
  },
  {
    slug: "bento-grid",
    name: "Bento Grid",
    vibe: "Structured, product-minded, and project-first.",
    summary:
      "A modular layout style that makes projects, metrics, and quick profile details feel organized without looking generic.",
    useCase: "Best for job seekers with 3 to 5 strong case studies.",
    buildLevel: "Easiest to customize",
    palette: "bg-[#f5e7c8] text-[#302216]",
    audience: "Developers applying to product teams and internships.",
    whyThisWorks:
      "Bento layouts help users scan a lot of information quickly. They are strong when a portfolio needs to show multiple projects, achievements, and skills in a compact and polished way.",
    bestFor: ["Project showcase", "Case-study snippets", "Clean scanning"],
    sections: ["Hero", "Stats", "Projects", "About", "Contact"],
    starterKitIncludes: [
      "Reusable card grid system",
      "Responsive project highlight blocks",
      "Simple content slots for stats and links",
      "Clear CSS organization for layout edits",
    ],
    screenshotLabels: ["Overview dashboard", "Featured projects", "Skill and links"],
    previewHighlights: [
      "Modular content blocks for easy reordering",
      "Project-first information density",
      "Clean scanning on both desktop and mobile",
    ],
    contentTips: [
      "Use concise labels so the grid stays elegant.",
      "Give each featured project a clear role or outcome.",
      "Balance metrics with personality so the layout does not feel too sterile.",
    ],
    download: {
      status: "ready",
      href: "/downloads/foliokit-bento-grid-starter.zip",
      fileName: "foliokit-bento-grid-starter.zip",
      fileCount: 12,
    },
    preview: {
      status: "ready",
      href: "/previews/bento-grid",
    },
    categories: {
      useCases: ["Getting hired", "Freelance"],
      style: "modern",
      difficulty: "beginner",
      audience: "junior",
    },
    colorPalette: {
      primary: "#302216",
      secondary: "#f5e7c8",
      accent: "#8b6914",
      background: "#faf8f0",
      text: "#302216",
      muted: "#6b5a4a",
    },
    typography: {
      headings: "Space Grotesk",
      body: "Inter",
      mono: "JetBrains Mono",
    },
    animations: {
      hero: "fadeUp",
      hover: "lift",
      page: "stagger",
    },
    version: "1.0.0",
    lastUpdated: "2026-04-15",
    features: ["Modular grid system", "Responsive cards", "Metrics display", "Quick scan layout"],
    technicalNotes: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "Grid-aware"],
    idealFor: [
      "Developers with 3–5 solid case studies who want each project to get its own spotlight",
      "Those applying to product-focused companies where structured thinking is as important as output",
      "Internship and junior applicants with strong project depth and quantifiable metrics",
      "Anyone who wants a portfolio that works equally well as a dashboard and a resume replacement",
    ],
    notIdealFor: [
      "Developers with fewer than 2 finished projects — the grid will feel sparse and the layout will expose the gap",
      "Those wanting long-form essay-style project write-ups — the card format rewards brevity",
      "Anyone with a highly linear, narrative career story that flows better as prose than modules",
      "Developers whose work is primarily internal tooling with no visual output to show",
    ],
    inspiredBy: ["Apple's product page information density", "Vercel's dashboard grid logic", "Raycast's marketing site card system", "Linear's modular landing page sections"],
    layoutNotes:
      "CSS Grid with named areas and responsive breakpoints at 640px and 1024px. Cards use a uniform 1.5rem gap system. The hero card always spans the full width on mobile — stat cards stack vertically until 640px where they go 3-across. Project cards use a 1.2fr + 0.8fr asymmetric split for visual interest. No JavaScript required for any layout behavior.",
    accessibilityNotes:
      "Card focus states use outline-offset so the rounded corners don't clip the focus indicator. All metric numbers include an aria-label with full context (e.g. '12 products shipped' not just '12'). Color contrast across all card variants — including the warm amber accent on cream — passes WCAG AA. Card order in the DOM matches the intended reading sequence.",
    performanceNotes:
      "The modular bento system allows for extremely efficient React reconciliation. Counter animations are rAF-based and fully respect prefers-reduced-motion by snapping to the final value instantly. The library footprint is minimal, keeping the total JS bundle lean.",
    customizationHints: [
      "Edit the three stat values directly in the data file (products shipped, years building, users reached) — they are typically the first numbers a recruiter reads and should be real.",
      "Reorder bento cards by changing their grid-area names in the CSS — no JSX restructuring or component logic changes required.",
      "Add a fourth stat card by duplicating the existing card component and assigning the next grid-area name — the grid absorbs it automatically.",
      "Remove the About section entirely if your project cards are strong enough to carry the page — the layout works cleanly as a pure project showcase without it.",
    ],
    seoNotes:
      "Each project card is an article element with its own h3 heading nested under the page's single h1. The hero section uses structured data for the Person entity with name, jobTitle, and url. The page title and meta description slots are clearly labeled in the HTML head with character-count guidance.",
    pairsWith: ["minimalist", "glassmorphism"],
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    vibe: "Polished, futuristic, and premium when used with restraint.",
    summary:
      "A soft translucent interface direction that feels modern and premium, especially for developers working around AI, SaaS, and motion-heavy products.",
    useCase: "Best for personal brand portfolios and AI-adjacent builders.",
    buildLevel: "Intermediate",
    palette: "bg-[#dce7ff] text-[#1f2940]",
    audience: "Frontend developers, AI builders, and SaaS-focused creators.",
    whyThisWorks:
      "Glassmorphism feels high-fidelity when the layout stays clean and the visual layers are controlled. It signals polish and technical sophistication without needing dense content.",
    bestFor: ["Premium visual feel", "Motion accents", "Modern product vibe"],
    sections: ["Hero", "Selected work", "Experience", "Testimonials", "Contact"],
    starterKitIncludes: [
      "Layered translucent surfaces",
      "Controlled shadow and blur tokens",
      "Dark background treatment",
      "JS-powered micro-interaction hooks",
    ],
    screenshotLabels: ["Frosted hero", "Work cards", "Contact layer"],
    previewHighlights: [
      "Premium surfaces with restrained motion",
      "Focused spotlight on hero and selected work",
      "Atmospheric depth without overwhelming the content",
    ],
    contentTips: [
      "Keep copy minimal and let the presentation carry some emotion.",
      "Use one accent color family to avoid visual noise.",
      "Reserve motion for emphasis so the page feels expensive, not busy.",
    ],
    download: {
      status: "ready",
      href: "/downloads/foliokit-glassmorphism-starter.zip",
      fileName: "foliokit-glassmorphism-starter.zip",
      fileCount: 12,
    },
    preview: {
      status: "ready",
      href: "/previews/glassmorphism",
    },
    categories: {
      useCases: ["Personal brand", "Storytelling"],
      style: "modern",
      difficulty: "intermediate",
      audience: "senior",
    },
    colorPalette: {
      primary: "#6366f1",
      secondary: "#1f2940",
      accent: "#818cf8",
      background: "#0f172a",
      text: "#f1f5f9",
      muted: "#94a3b8",
    },
    typography: {
      headings: "Plus Jakarta Sans",
      body: "Inter",
      mono: "JetBrains Mono",
    },
    animations: {
      hero: "blurIn",
      hover: "glow",
      page: "fade",
    },
    version: "1.0.0",
    lastUpdated: "2026-04-15",
    features: ["Glass effects", "Particle background", "Smooth transitions", "Dark theme default"],
    technicalNotes: ["Next.js App Router", "Tailwind CSS", "Backdrop filter", "GPU motion"],
    idealFor: [
      "Frontend developers at AI or SaaS companies who want the portfolio to feel like a product they built",
      "Those with a strong visual product sense who want the container to match the quality of the work",
      "Senior engineers working on polished consumer apps who want the portfolio to reflect that caliber",
      "Developers building personal brands in tech-forward spaces — AI, design tools, dev infrastructure",
    ],
    notIdealFor: [
      "Beginners who need straightforward component customization without backdrop-filter complexity",
      "Developers targeting traditional enterprise or government roles where this aesthetic reads as overdesigned",
      "Anyone whose work is primarily backend, infrastructure, or data where no visual interface exists",
      "Portfolios that need to load fast on older hardware — backdrop-filter is GPU-intensive and degrades on budget devices",
    ],
    inspiredBy: ["Apple's macOS Ventura multitasking UI surfaces", "Stripe's gradient marketing pages", "Framer's own landing page", "Craft Docs' layered interface aesthetic"],
    layoutNotes:
      "Dark base at hsl(222 47% 11%) with layered translucent surfaces using backdrop-filter: blur(20px) and a semi-transparent white border. Sections float visually over the background using a combination of box-shadow, border-opacity, and background: rgba(255,255,255,0.05). The layout uses a centered max-width of 1100px with generous 80px vertical padding between sections to let the depth effects breathe.",
    accessibilityNotes:
      "Glass surfaces can cause contrast issues — this template enforces a minimum 4.5:1 ratio for all body text and 3:1 for large headings over blurred backgrounds, verified with a dark overlay insurance layer. Focus indicators use a bright indigo ring (3px, 0px offset) that is clearly visible against all dark background variants. All decorative blob and particle elements are aria-hidden.",
    performanceNotes:
      "backdrop-filter is GPU-accelerated in all modern browsers and does not trigger layout or paint recalculation. Particle effects are canvas-based, throttled to 60fps on desktop and 30fps on mobile via matchMedia detection. Entrance animations use the Web Animations API on transform and opacity only — no layout-triggering properties are animated at any point.",
    customizationHints: [
      "Set your brand's primary color as the --accent-hue CSS variable (a single HSL hue number) and every glow effect, gradient, and highlight updates automatically across the entire page.",
      "Adjust --blur-strength from 20px down to 8px for a subtler, less dramatic glass effect — useful if the content is dense and needs to be easier to read.",
      "Disable particle effects entirely by removing the canvas element — the layout works with full visual quality without them, and it significantly reduces CPU usage on mobile.",
      "Switch the gradient direction from purple-to-blue to any two complementary hues by editing the two color stops in the --gradient-from and --gradient-to variables.",
    ],
    seoNotes:
      "Dark-mode pages require an explicit og:image with a solid colored background for legible social previews — a pre-sized 1200×630 template is included. Meta color-scheme is set to 'dark' so browsers style their chrome accordingly. All decorative gradient and particle elements are aria-hidden so screen readers see only the content layer.",
    pairsWith: ["retrofuturism", "bento-grid"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    vibe: "Clear, thoughtful, and credibility-driven.",
    summary:
      "A text-led portfolio direction that feels mature and serious, built for people who want writing, project reasoning, and decision-making to carry the page.",
    useCase:
      "Best for developers applying to product teams and design-heavy roles.",
    buildLevel: "Content first",
    palette: "bg-[#f0ede6] text-[#2f2a24]",
    audience: "Job seekers with strong writing and thoughtful case studies.",
    whyThisWorks:
      "Editorial layouts turn clarity into credibility. They are strongest when a developer wants their thinking, process, and point of view to be as visible as the visual style.",
    bestFor: ["Thoughtful storytelling", "Long-form case studies", "Professional tone"],
    sections: ["Intro", "Featured writing", "Projects", "About", "Contact"],
    starterKitIncludes: [
      "Typography-first rhythm system",
      "Long-form content-friendly layout",
      "Article-style project sections",
      "Clean spacing and hierarchy defaults",
    ],
    screenshotLabels: ["Intro statement", "Case-study feature", "Essay-style about"],
    previewHighlights: [
      "Strong reading rhythm and typographic hierarchy",
      "Space for thoughtful project context",
      "Credibility through clarity rather than decoration",
    ],
    contentTips: [
      "Write like a person, not like a resume.",
      "Use your best project story as the emotional anchor of the page.",
      "Avoid overfilling the layout with badges that interrupt the reading flow.",
    ],
    download: {
      status: "ready",
      href: "/downloads/foliokit-editorial-starter.zip",
      fileName: "foliokit-editorial-starter.zip",
      fileCount: 12,
    },
    preview: {
      status: "ready",
      href: "/previews/editorial",
    },
    categories: {
      useCases: ["Getting hired", "Storytelling"],
      style: "editorial",
      difficulty: "intermediate",
      audience: "senior",
    },
    colorPalette: {
      primary: "#2f2a24",
      secondary: "#f0ede6",
      accent: "#57534e",
      background: "#fafaf9",
      text: "#2f2a24",
      muted: "#78716c",
    },
    typography: {
      headings: "Newsreader",
      body: "Source Serif 4",
      mono: "IBM Plex Mono",
    },
    animations: {
      hero: "none",
      hover: "underline",
      page: "none",
    },
    version: "1.0.0",
    lastUpdated: "2026-04-15",
    features: ["Serif typography", "Long-form content", "Article styling", "Reading optimized"],
    technicalNotes: ["Next.js App Router", "Tailwind CSS", "Serif typography", "Prose optimized"],
    idealFor: [
      "Developers applying to product design or PM-adjacent roles where written communication is evaluated",
      "Career changers who want their thinking, reasoning, and process visible alongside their projects",
      "Senior engineers who write publicly — on Substack, a blog, or in open-source documentation",
      "Those with strong written case studies who want the portfolio to function as a genuine portfolio of thought",
    ],
    notIdealFor: [
      "Anyone whose primary strength is visual work with little supporting writing — the layout exposes the absence of text",
      "Portfolios that need to make an instant punch — readers have to invest time to appreciate this direction",
      "Developers in fast-paced outbound job searches who need immediate visual differentiation over depth",
      "Those who find writing a chore — this template rewards regular updates and fresh editorial voice",
    ],
    inspiredBy: ["Craig Mod's slow, deliberate writing-led web presence", "Stripe Press' typographic care", "The Browser Company's nuanced editorial voice", "Robin Rendle's personal portfolio and essays"],
    layoutNotes:
      "Inspired by broadsheet newspaper design — a single typographic column with 66ch max-width for body text, generous leading at line-height 1.8, and optical margin alignment on headings using slightly negative left margin. Projects are treated as long-form essays: each has a chapter-like intro paragraph before the content detail, and the project title is set at display scale (3rem+) to emphasize its editorial weight.",
    accessibilityNotes:
      "Serif body text at 18px passes WCAG AA with ample contrast on the warm off-white background. Paragraph spacing (1.5em between paragraphs) aids readability for users with dyslexia or attention difficulties. The layout reads correctly in linear DOM order with no CSS-reordering tricks. A skip-to-content link is included in the head of the template.",
    performanceNotes:
      "The editorial rhythm is preserved with static generation. Zero runtime JavaScript required for the reading experience unless you add interactive elements. Optimized typography loading ensures zero Layout Shift (CLS) when fonts finish downloading.",
    customizationHints: [
      "Your best project headline is the single most important line on the page — invest 80% of your editing time making it specific, confident, and outcome-focused rather than generic.",
      "Add a short 'Currently' section below the hero (one or two lines on what you're working on right now) for instant personality without disrupting the editorial rhythm.",
      "Change the cream background to white for a crisper newsroom feel, or to off-black (hsl(30 10% 12%)) for an editorial dark mode that still feels considered rather than gimmicky.",
      "Use pull quotes styled with a custom blockquote treatment to break up long project descriptions and lift the best sentence in each case study to display prominence.",
    ],
    seoNotes:
      "Article elements use proper schema.org Article markup for blog-style content. An estimated reading time meta tag is pre-wired to the article length. Canonical URLs are set to prevent duplicate content if you publish the same essays on your portfolio and also on Medium or Substack.",
    pairsWith: ["minimalist", "organic-layout"],
  },
  {
    slug: "organic-layout",
    name: "Organic Layout",
    vibe: "Freeform, human, and less template-looking.",
    summary:
      "A softer, more fluid layout direction that breaks rigid grids and gives the portfolio a handcrafted visual rhythm.",
    useCase: "Best for multidisciplinary creatives and storytellers.",
    buildLevel: "Intermediate",
    palette: "bg-[#dcebd7] text-[#22311e]",
    audience: "Creative developers, designers who code, and storytellers.",
    whyThisWorks:
      "Organic layouts feel personal because the page rhythm is less mechanical. They help portfolios feel custom-made, which is ideal for creators selling originality as much as skill.",
    bestFor: ["Creative presence", "Visual storytelling", "Less template-looking"],
    sections: ["Hero", "Selected work", "Process", "About", "Contact"],
    starterKitIncludes: [
      "Next.js project foundation",
      "Tailwind CSS styling system",
      "Framer Motion interaction core",
      "Production-ready visual polish",
      "Fully configured ZIP project folder",
    ],
    screenshotLabels: ["Floating hero", "Selected work collage", "Process notes"],
    previewHighlights: [
      "Layout movement that feels handmade",
      "Less rigid structure without sacrificing readability",
      "A visual tone that feels custom rather than templated",
    ],
    contentTips: [
      "Use varied content lengths to keep the composition lively.",
      "Lean on imagery, process notes, and small personal cues.",
      "Keep spacing intentional so the freeform layout still feels controlled.",
    ],
    download: {
      status: "ready",
      href: "/downloads/foliokit-organic-layout-starter.zip",
      fileName: "foliokit-organic-layout-starter.zip",
      fileCount: 12,
    },
    preview: {
      status: "ready",
      href: "/previews/organic-layout",
    },
    categories: {
      useCases: ["Personal brand", "Storytelling"],
      style: "creative",
      difficulty: "intermediate",
      audience: "freelance",
    },
    colorPalette: {
      primary: "#22311e",
      secondary: "#dcebd7",
      accent: "#4a6741",
      background: "#f6f9f3",
      text: "#22311e",
      muted: "#5c6b55",
    },
    typography: {
      headings: "Fraunces",
      body: "Satoshi",
      mono: "JetBrains Mono",
    },
    animations: {
      hero: "drift",
      hover: "gentle",
      page: "flow",
    },
    version: "1.0.0",
    lastUpdated: "2026-04-15",
    features: ["Custom layouts", "Mixed media", "Handcrafted feel", "Artistic balance"],
    technicalNotes: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "Handcrafted feel"],
    idealFor: [
      "Multidisciplinary creatives who work across design, code, and content — and whose portfolio needs to reflect that range",
      "Designers who code and want the portfolio itself to be a creative statement rather than a functional container",
      "Developers with strong visual taste and eclectic project portfolios that don't fit neatly into cards",
      "Artists-turned-programmers who want their technical work to feel as expressive as their artistic work",
    ],
    notIdealFor: [
      "Developers who need clear, strict information hierarchy — the freeform rhythm works against fast scanning",
      "Anyone targeting highly traditional employers (finance, law, enterprise) where unconventional layouts raise eyebrows",
      "Portfolios that are primarily text-based with no visual work — the layout needs imagery to come alive",
      "Developers who want to customize quickly without CSS positioning knowledge",
    ],
    inspiredBy: ["Loewy's asymmetric composition principles", "Are.na's curated visual rhythm", "Selected entries from Brutalist Websites", "Studio Dumbar's playful grid-breaking layouts"],
    layoutNotes:
      "Intentionally breaks the 12-column grid convention. Uses CSS Grid with named areas and a deliberate offset rhythm — alternating left-heavy and right-heavy panels create a 'breathing' page that never feels like it was assembled by a template engine. Images use CSS shape-outside for text wrap effects. No two sections share the same column structure, which is the defining visual signature of the layout.",
    accessibilityNotes:
      "The asymmetric layout maintains correct logical DOM order separate from visual presentation using CSS grid placement — source order matches reading order. focus order follows the DOM sequence, not the visual one. All decorative shapes, floating blobs, and texture overlays are aria-hidden and pointer-events: none so they never interfere with keyboard navigation.",
    performanceNotes:
      "All motion effects use CSS transform only — no top/left/width animation that triggers layout recalculation. Background textures are inline SVG with no external HTTP requests. CSS blend modes are used sparingly on hero elements and fall back gracefully to standard display on browsers with lower graphics capability.",
    customizationHints: [
      "The asymmetry comes from a single CSS variable — --offset-amount — set to 3rem by default. Change it to 0 for a more structured layout or increase it for stronger visual tension.",
      "Swap the earthy green palette to dusty blue or terracotta by changing just 4 CSS color variables: --color-bg, --color-text, --color-accent, and --color-surface.",
      "Add a Process section with 2–3 images and short captions to show creative thinking — this section type performs best in this layout because the asymmetric placement makes each image feel intentional.",
      "Use real project photography or high-quality mockups — this template exposes the absence of imagery more than any other direction and rewards investment in visual assets.",
    ],
    seoNotes:
      "Semantic HTML5 landmark elements ensure full crawlability despite the non-standard visual layout. Image alt text is templated with descriptive placeholder copy that guides the user toward specific, useful alt text rather than file names. OG image output is pre-sized at the canonical 1200×630 with a safe zone guide in the HTML comments.",
    pairsWith: ["human-scribble", "editorial"],
  },
  {
    slug: "human-scribble",
    name: "Human Scribble",
    vibe: "Sketchy, personal, and full of character.",
    summary:
      "A deliberately informal direction that adds hand-drawn energy and maker personality without losing structure.",
    useCase: "Best for indie hackers and devs building in public.",
    buildLevel: "Creative-focused",
    palette: "bg-[#f8dcae] text-[#332317]",
    audience: "Makers, indie hackers, and personality-led personal brands.",
    whyThisWorks:
      "Human Scribble reduces polish anxiety and increases warmth. It works when the goal is to feel approachable, curious, and unmistakably personal rather than corporate.",
    bestFor: ["Build-in-public vibe", "Memorability", "Friendly tone"],
    sections: ["Hero", "Projects", "Now page", "Notes", "Contact"],
    starterKitIncludes: [
      "Hand-drawn motif treatment",
      "Loose layout accents without chaos",
      "Playful annotation styles",
      "Simple scripting for hover and note reveals",
    ],
    screenshotLabels: ["Sketch intro", "Annotated projects", "Now page snippets"],
    previewHighlights: [
      "Warm, approachable personality from the first fold",
      "Annotations that create momentum and charm",
      "A clear structure underneath the playful layer",
    ],
    contentTips: [
      "Let a little roughness stay visible so it feels human.",
      "Show current interests and experiments, not only polished work.",
      "Keep the scribble accents consistent so they read as style, not clutter.",
    ],
    download: {
      status: "ready",
      href: "/downloads/foliokit-human-scribble-starter.zip",
      fileName: "foliokit-human-scribble-starter.zip",
      fileCount: 12,
    },
    preview: {
      status: "ready",
      href: "/previews/human-scribble",
    },
    categories: {
      useCases: ["Personal brand", "Storytelling"],
      style: "creative",
      difficulty: "intermediate",
      audience: "freelance",
    },
    colorPalette: {
      primary: "#332317",
      secondary: "#f8dcae",
      accent: "#7a5a36",
      background: "#fdf8eb",
      text: "#332317",
      muted: "#8b7355",
    },
    typography: {
      headings: "Caveat",
      body: "Nunito",
      mono: "JetBrains Mono",
    },
    animations: {
      hero: "sketch",
      hover: "bounce",
      page: "none",
    },
    version: "1.0.0",
    lastUpdated: "2026-04-15",
    features: ["Hand-drawn elements", "Playful annotations", "Personal notes", "Warm tone"],
    technicalNotes: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "SVG markers"],
    idealFor: [
      "Indie hackers and solo builders who ship products publicly and want the portfolio to feel like an extension of that energy",
      "Developers who are active on Twitter/X or Threads and want a portfolio that matches their public personality",
      "Makers with a strong personal voice who want visitors to feel like they know you before they email you",
      "Founders who code — the warmth and approachability is particularly effective for community-driven builders",
    ],
    notIdealFor: [
      "Developers targeting Fortune 500 companies where the informal aesthetic may be read as unprofessional",
      "Anyone whose personal brand is already polished and precise — this direction is hard to reconcile with a minimal identity",
      "Those who want the technical skills and project quality to be the first impression rather than personality",
      "Developers who don't write publicly or have a Now page — the template needs regular content updates to feel alive",
    ],
    inspiredBy: ["Maggie Appleton's digital garden warmth and illustration depth", "Nadia Asparouhova's unstructured, essay-led personal site", "Lenny Rachitsky's newsletter visual language", "Justin Jackson's founder-personal-brand approach"],
    layoutNotes:
      "Structured informally — content blocks carry deliberate slight rotations of ±1–2 degrees using CSS transform: rotate() for a handmade feel without chaos. Annotations use absolutely positioned spans set in the Caveat typeface. The overall layout is single-column at all breakpoints with unusually generous negative space (120px+ vertical gaps) to let the scribble accent elements breathe and not compete with the content.",
    accessibilityNotes:
      "All text rotation is kept below 2 degrees to avoid readability issues for users with visual processing difficulties. Users with prefers-reduced-motion enabled get an immediate fallback to zero rotation — verified in the CSS with a media query that removes all transform effects globally. High contrast mode has been tested and the layout remains fully functional with the rotations removed.",
    performanceNotes:
      "Inline SVG markers and scribbles mean zero extra HTTP requests for aesthetic assets. Motion effects are handled by Framer Motion's hardware-accelerated engine. The full page including handwriting fonts loads in under 1.5 seconds on 4G.",
    customizationHints: [
      "Write your hero section in first person and past tense — 'I built X to solve Y' not 'A platform for Z'. This is the most impactful single edit you can make and takes 5 minutes.",
      "Add a 'Currently building' line directly under your name on the first screen — this single hook is often what makes a visitor stay and scroll rather than bounce.",
      "Change the warm amber palette to any color you like by updating 3 CSS variables: --color-paper, --color-ink, and --color-accent. The scribble SVG paths inherit from ink.",
      "Your Now page is the living heart of this template — update it at least monthly to show you're active. Stale Now pages signal abandonment more than a missing portfolio section.",
    ],
    seoNotes:
      "Personal brand pages benefit most from explicit Person schema with sameAs links to all public social profiles. The OG title should be your full name — not a tagline, not a role — because name recognition is the most valuable first impression for this template type. Update the meta description alongside your Now page content monthly so search snippets stay fresh.",
    pairsWith: ["organic-layout", "neobrutalism"],
  },
  {
    slug: "retrofuturism",
    name: "Retrofuturism",
    vibe: "Cinematic, nostalgic, and high-concept.",
    summary:
      "A dramatic visual direction mixing retro digital cues with future-facing energy for portfolios that want a strong point of view.",
    useCase: "Best for standout personal brands with a strong visual voice.",
    buildLevel: "Advanced polish",
    palette: "bg-[#d8d4ff] text-[#231f40]",
    audience: "Senior creatives, experimental frontend developers, and brand-led builders.",
    whyThisWorks:
      "Retrofuturism creates a strong world around the work. It is most effective when the developer already has a confident visual identity and wants the portfolio to feel cinematic.",
    bestFor: ["Visual impact", "High-concept branding", "Experimental showcase"],
    sections: ["Hero", "Featured work", "Experiments", "About", "Contact"],
    starterKitIncludes: [
      "Atmospheric color and lighting system",
      "Layered hero composition",
      "Strong project spotlight modules",
      "Interaction hooks for dramatic transitions",
    ],
    screenshotLabels: ["Cinematic hero", "Experiment gallery", "Immersive footer"],
    previewHighlights: [
      "A strong world-building feel around the work",
      "High-contrast presentation for standout projects",
      "A portfolio that feels like a directed experience",
    ],
    contentTips: [
      "Use this style only if your work can support the drama.",
      "Keep the number of featured projects tight and intentional.",
      "Use copy that sounds confident and specific, not vague and cinematic.",
    ],
    download: {
      status: "ready",
      href: "/downloads/foliokit-retrofuturism-starter.zip",
      fileName: "foliokit-retrofuturism-starter.zip",
      fileCount: 12,
    },
    preview: {
      status: "ready",
      href: "/previews/retrofuturism",
    },
    categories: {
      useCases: ["Personal brand", "Storytelling"],
      style: "creative",
      difficulty: "advanced",
      audience: "agency",
    },
    colorPalette: {
      primary: "#a855f7",
      secondary: "#231f40",
      accent: "#d8b4fe",
      background: "#0f0a1a",
      text: "#e9d5ff",
      muted: "#a78bfa",
    },
    typography: {
      headings: "Orbitron",
      body: "Space Mono",
      mono: "Fira Code",
    },
    animations: {
      hero: "glitch",
      hover: "scanline",
      page: "cinematic",
    },
    version: "1.0.0",
    lastUpdated: "2026-04-15",
    features: ["CRT effects", "Particle systems", "Glitch animations", "Dramatic lighting"],
    technicalNotes: ["Next.js App Router", "Tailwind CSS", "Glitch shaders", "GPU optimized"],
    idealFor: [
      "Senior frontend engineers with a strong aesthetic point of view who want the portfolio itself to be a statement of craft",
      "Creative technologists working at the intersection of art, music, and code",
      "Developers who build experimental interfaces and want the portfolio to feel like one",
      "Anyone building a personal brand in the creative technology space — generative art, interactive media, spatial computing",
    ],
    notIdealFor: [
      "Entry-level job seekers — the drama requires enough work to fill the spotlight, and sparse projects will be noticed immediately",
      "Developers targeting conservative industries where this aesthetic reads as gimmicky rather than skilled",
      "Anyone whose primary goal is beginner-accessible editing — customizing shader effects and particle systems requires real CSS and JS confidence",
      "Portfolios where fast load time is critical — the atmospheric effects add meaningful weight that must be justified by the impression they create",
    ],
    inspiredBy: ["Cyberpunk 2077's interface language and grid overlays", "Lo-Fi Futures visual aesthetic", "Teenage Engineering's product pages", "Max Cooper's Cosmos visual identity"],
    layoutNotes:
      "Dark canvas at hsl(248 40% 8%) with layered grid lines created as CSS background-image using repeating-linear-gradient at 1px thickness on an 8px cell system. Hero uses a centered layout with a radial gradient glow emanating from the heading using a ::before pseudo-element. Project cards use a deliberate scanline overlay applied as a CSS ::after pseudo-element — this creates the CRT texture effect without any image assets. Border-radius is kept at 4px maximum, breaking the modern convention as a visual signature.",
    accessibilityNotes:
      "The dramatic visuals are built on a contrast foundation of pure white text (hsl(0 0% 98%)) on the darkest possible backgrounds, delivering a 15:1 contrast ratio that far exceeds WCAG AAA. The scanline effect and particle systems are purely decorative CSS and canvas elements — both are aria-hidden and pointer-events: none so they are completely invisible to assistive technologies.",
    performanceNotes:
      "Canvas particle systems are throttled to 30fps on mobile screens detected via matchMedia. Glitch animations are pure CSS keyframe animations on the transform and clip-path properties — no JavaScript runtime required for effects. WebGL shader variants are opt-in modules that are not loaded by default. The core page experience without effects loads in under 2 seconds on 4G.",
    customizationHints: [
      "Swap the purple glow to any hue by changing a single --glow-hue CSS variable (a number from 0–360). The radial gradient, border accents, and particle color all derive from this single value.",
      "Reduce the particle count from 80 to 20 for a more subtle atmospheric effect without fully losing the depth — useful if the particles compete with project content for attention.",
      "Remove the scanline overlay entirely by deleting the ::after rule on .project-card — the cards read more cleanly without it and the overall aesthetic holds.",
      "This template has the highest ROI from real visual project assets — invest in actual interface screenshots, interaction recordings, or generative art exports rather than placeholder images.",
    ],
    seoNotes:
      "Dark-mode canonical pages need solid OG images — a pre-configured Figma template for generating 1200×630 social cards in Orbitron on dark background is referenced in the HTML comments. The page title uses a separator character (·) that renders correctly in browser tab ellipsis and Google search snippets. All schema.org markup is included for the Person entity with workExample links.",
    pairsWith: ["glassmorphism", "organic-layout"],
  },
];

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}
