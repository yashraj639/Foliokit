import Link from "next/link";
import { notFound } from "next/navigation";

import { getTemplateBySlug, templates } from "@/lib/templates";

type TemplatePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

// Difficulty label helper
const difficultyMeta: Record<string, { label: string; color: string }> = {
  beginner: {
    label: "Beginner friendly",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  intermediate: {
    label: "Intermediate",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  advanced: {
    label: "Advanced",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
};

// Style label helper
const styleMeta: Record<string, { emoji: string }> = {
  minimal: { emoji: "◻" },
  bold: { emoji: "◼" },
  creative: { emoji: "◈" },
  editorial: { emoji: "◧" },
  modern: { emoji: "◉" },
};

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const diff = difficultyMeta[template.categories.difficulty];
  const styleIcon = styleMeta[template.categories.style];

  // Sibling templates for the "Compare with" section
  const siblingTemplates = template.pairsWith
    .map((s) => getTemplateBySlug(s))
    .filter(Boolean) as typeof templates;

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        {/* ── Header ── */}
        <header className="rounded-[2rem] sm:rounded-full border border-border/80 bg-background/80 px-6 py-5 sm:px-5 sm:py-3 backdrop-blur-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="font-heading text-[1.6rem] sm:text-2xl font-semibold tracking-[-0.07em] sm:tracking-tight">
                Foliokit
              </p>
            </div>
            <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground border-t border-border/40 pt-4 sm:border-none sm:pt-0">
              <Link
                className="rounded-full px-4 py-1.5 transition hover:bg-secondary hover:text-foreground"
                href="/"
              >
                Back to gallery
              </Link>
              <a
                className="rounded-full bg-primary px-5 py-2 sm:py-1.5 font-medium text-primary-foreground transition hover:opacity-90"
                href="#download"
              >
                Download kit
              </a>
            </nav>
          </div>
        </header>
        {/* ── Live preview ── */}
        <section className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10">
          <div className="flex flex-col gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Live preview
              </p>
              <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                See the template before you commit to it.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              The decision layer in action — inspect the actual starter
              experience in-browser before choosing to download.
            </p>
          </div>

          {template.preview.status === "ready" && template.preview.href ? (
            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
              <a
                href={template.preview.href}
                className="group relative block overflow-hidden rounded-[1.75rem] border border-border/80 bg-background shadow-sm transition-all hover:border-primary/50"
              >
                <div
                  className={`aspect-4/3 flex flex-col items-center justify-center ${template.palette} rounded-[1.7rem]`}
                >
                  <p className="font-heading text-3xl font-semibold tracking-tight opacity-90">
                    {template.name}
                  </p>
                  <p className="mt-2 text-sm opacity-60">
                    Click to view live preview
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/0 transition-all group-hover:bg-neutral-900/10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    View Preview →
                  </span>
                </div>
              </a>

              <div className="rounded-[1.75rem] border border-border/80 bg-secondary/60 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Preview notes
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Scroll the full page to judge rhythm and hierarchy.",
                    "Compare whether the tone matches your personal brand.",
                    "Download the ZIP only if the structure already feels close.",
                  ].map((note) => (
                    <div
                      key={note}
                      className="rounded-2xl border border-border/70 bg-background px-4 py-4 text-sm leading-6"
                    >
                      {note}
                    </div>
                  ))}
                </div>
                <a
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold transition hover:bg-card"
                  href={template.preview.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open full page ↗
                </a>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-[1.75rem] border border-dashed border-border bg-secondary/40 px-6 py-10 text-center">
              <p className="font-heading text-3xl font-semibold tracking-tight">
                Live preview is coming for this direction.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                The page already explains the structure and fit, but the fully
                browsable preview will land once this starter kit is packaged.
              </p>
            </div>
          )}
        </section>

        {/* ── Preview snapshots + Content guidance ── */}
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Preview snapshots
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight">
              The kind of moments this template should create.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
              <div
                className={`min-h-72 rounded-[1.7rem] border border-border/70 p-6 shadow-inner ${template.palette}`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-70">
                      Desktop preview
                    </p>
                    <p className="mt-4 max-w-xs font-heading text-4xl leading-none font-semibold">
                      {template.screenshotLabels[0]}
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {template.previewHighlights.slice(0, 2).map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-current/15 bg-white/15 px-3 py-3 text-sm leading-6"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {template.screenshotLabels.slice(1).map((label, index) => (
                  <div
                    key={label}
                    className="rounded-[1.5rem] border border-border/80 bg-secondary/70 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Screen 0{index + 2}
                    </p>
                    <p className="mt-3 text-xl font-semibold">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {template.previewHighlights[index + 1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Content guidance
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              What to put into this layout.
            </h2>

            <div className="mt-6 space-y-3">
              {template.contentTips.map((tip, index) => (
                <div
                  key={tip}
                  className="rounded-[1.4rem] border border-border/80 bg-secondary/60 px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Tip 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why this works + Sections ── */}
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Why this works
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              The reasoning behind the style.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              {template.whyThisWorks}
            </p>

            {/* Inspired-by pills */}
            <div className="mt-8 border-t border-border/80 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Inspired by
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {template.inspiredBy.map((ref) => (
                  <span
                    key={ref}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Recommended sections
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              How this template is structured.
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {template.sections.map((section, index) => (
                <div
                  key={section}
                  className="rounded-[1.3rem] border border-border bg-secondary/70 px-4 py-4"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                    0{index + 1}
                  </span>
                  <p className="mt-1 text-base font-semibold">{section}</p>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    This layout benefits from a focused {section.toLowerCase()}{" "}
                    section with clear, editable content blocks in the starter
                    kit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEW: Ideal For vs Not Ideal For ── */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[10px] text-emerald-700">
                ✓
              </span>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Who thrives here
              </p>
            </div>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              This template is ideal for you if…
            </h2>
            <div className="mt-6 space-y-3">
              {template.idealFor.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[1.4rem] border border-emerald-100 bg-emerald-50/50 px-4 py-4"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-xs font-semibold text-emerald-600">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-[10px] text-rose-700">
                ✕
              </span>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                When to skip this
              </p>
            </div>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              This might not be the right fit if…
            </h2>
            <div className="mt-6 space-y-3">
              {template.notIdealFor.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[1.4rem] border border-rose-100 bg-rose-50/50 px-4 py-4"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-xs font-semibold text-rose-400">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Color palette + Typography ── */}
        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Color palette
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              The exact colors to use.
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                {
                  label: "Primary",
                  value: template.colorPalette.primary,
                  role: "Main actions & headings",
                },
                {
                  label: "Secondary",
                  value: template.colorPalette.secondary,
                  role: "Surface & background tones",
                },
                {
                  label: "Accent",
                  value: template.colorPalette.accent,
                  role: "Highlights & emphasis",
                },
                {
                  label: "Background",
                  value: template.colorPalette.background,
                  role: "Page base color",
                },
                {
                  label: "Text",
                  value: template.colorPalette.text,
                  role: "Body copy color",
                },
                {
                  label: "Muted",
                  value: template.colorPalette.muted,
                  role: "Labels & metadata",
                },
              ].map((color) => (
                <div
                  key={color.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border p-3 sm:flex-row sm:items-center sm:gap-3"
                >
                  <div
                    className="h-8 w-8 shrink-0 rounded-lg border border-border/50"
                    style={{ backgroundColor: color.value }}
                  />
                  <div className="min-w-0 text-center sm:text-left">
                    <p className="text-xs font-medium uppercase tracking-wider">
                      {color.label}
                    </p>
                    <p className="truncate text-xs font-mono text-muted-foreground">
                      {color.value}
                    </p>
                    <p className="mt-0.5 truncate text-[10px] text-muted-foreground/60">
                      {color.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Typography
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Font recommendations.
            </h2>
            <div className="mt-5 space-y-3">
              {[
                {
                  label: "Headings",
                  value: template.typography.headings,
                  role: "Display + hero text",
                },
                {
                  label: "Body",
                  value: template.typography.body,
                  role: "Paragraphs & descriptions",
                },
                {
                  label: "Mono",
                  value: template.typography.mono,
                  role: "Code & metadata",
                },
              ].map((font) => (
                <div
                  key={font.label}
                  className="rounded-xl border border-border bg-secondary/60 px-4 py-4"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {font.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{font.value}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground/60">
                    {font.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Animation + Classification ── */}
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Animation details
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Motion language.
            </h2>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                {
                  label: "Hero",
                  value: template.animations.hero,
                  desc: "Entrance effect",
                },
                {
                  label: "Hover",
                  value: template.animations.hover,
                  desc: "Interactive feedback",
                },
                {
                  label: "Page",
                  value: template.animations.page,
                  desc: "Transition style",
                },
              ].map((anim) => (
                <div
                  key={anim.label}
                  className="rounded-xl border border-border bg-secondary/70 px-4 py-4 text-center"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {anim.label}
                  </p>
                  <p className="mt-2 text-base font-semibold capitalize">
                    {anim.value}
                  </p>
                  <p className="mt-1 text-[10px] text-muted-foreground/60">
                    {anim.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Classification
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Template metadata.
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-secondary/70 px-4 py-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Style
                </p>
                <p className="mt-2 text-base font-semibold capitalize">
                  {template.categories.style}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/70 px-4 py-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Difficulty
                </p>
                <p className="mt-2 text-base font-semibold capitalize">
                  {template.categories.difficulty}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/70 px-4 py-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Audience
                </p>
                <p className="mt-2 text-base font-semibold capitalize">
                  {template.categories.audience}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/70 px-4 py-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Use cases
                </p>
                <p className="mt-2 text-base font-semibold">
                  {template.categories.useCases.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features + Technical notes ── */}
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Features
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              What&apos;s included.
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {template.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Technical notes
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Implementation details.
            </h2>
            <ul className="mt-5 space-y-2">
              {template.technicalNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-center gap-2 rounded-lg border border-border/70 bg-secondary/50 px-3 py-2 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── NEW: Layout & Spacing Notes ── */}
        <section className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Layout & spacing
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            How the grid is built.
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg">
            {template.layoutNotes}
          </p>
        </section>

        {/* ── NEW: Customization Roadmap ── */}
        <section className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Customization roadmap
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Where to start editing.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            The four highest-impact edits to make this template feel genuinely
            yours, in the order we recommend doing them.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {template.customizationHints.map((hint, index) => (
              <div
                key={hint}
                className="relative overflow-hidden rounded-[1.5rem] border border-border/80 bg-secondary/50 px-5 py-5"
              >
                <span className="font-heading text-5xl font-semibold leading-none text-border/60 select-none">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm leading-7">{hint}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEW: SEO & Accessibility (two-column) ── */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              SEO
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Search & social readiness.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {template.seoNotes}
            </p>
            <div className="mt-6 space-y-2">
              {[
                "Single H1 per page",
                "OG + Twitter card tags wired",
                "Canonical URL in head",
                "Schema.org Person markup",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-border/70 bg-secondary/50 px-3 py-2 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Accessibility
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Built for everyone.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {template.accessibilityNotes}
            </p>
            <div className="mt-6 space-y-2">
              {[
                "WCAG AA contrast",
                "Keyboard navigable",
                "Screen reader friendly",
                "Semantic landmarks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-border/70 bg-secondary/50 px-3 py-2 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEW: Performance Profile ── */}
        <section className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Performance
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Load profile.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {template.technicalNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-muted-foreground">
            {template.performanceNotes}
          </p>
        </section>

        {/* ── NEW: Compare With ── */}
        {siblingTemplates.length > 0 && (
          <section className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Compare with
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              If this doesn&apos;t feel right, one of these might.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              These directions share some of the same goals but take a different
              approach. Compare them before deciding.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {siblingTemplates.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/templates/${sibling.slug}`}
                  className="group block overflow-hidden rounded-[1.75rem] border border-border/80 bg-background shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                >
                  {/* Mini palette strip */}
                  <div
                    className={`min-h-28 p-5 ${sibling.palette} flex flex-col justify-between rounded-[1.7rem]`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-heading text-2xl font-semibold leading-tight">
                        {sibling.name}
                      </p>
                      <span className="rounded-full border border-current/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider opacity-70">
                        {sibling.categories.style}
                      </span>
                    </div>
                    <p className="text-sm opacity-70">{sibling.vibe}</p>
                  </div>
                  {/* Card body */}
                  <div className="px-5 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {sibling.bestFor.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        {sibling.useCase}
                      </p>
                      <span className="text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Metadata strip ── */}
        <section className="rounded-[2rem] border border-border/80 bg-card px-6 py-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Version
              </p>
              <p className="mt-2 font-mono text-base font-semibold">
                {template.version}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Files
              </p>
              <p className="mt-2 font-mono text-base font-semibold">
                {template.download.fileCount ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Updated
              </p>
              <p className="mt-2 font-mono text-base font-semibold">
                {template.lastUpdated}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Style class
              </p>
              <p className="mt-2 text-base font-semibold capitalize">
                {template.categories.style}
              </p>
            </div>
          </div>
        </section>

        {/* ── Download ── */}
        <section
          id="download"
          className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Starter kit
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Built for fast local customization.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Each template ships as a ZIP containing a fully-configured
                Next.js starter project. Built with Tailwind CSS and Framer
                Motion, it provides a deep, production-ready foundation that
                stays editable while following modern React best practices.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {template.download.status === "ready" &&
                template.download.href ? (
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    download={template.download.fileName}
                    href={template.download.href}
                  >
                    Download Template ZIP
                  </a>
                ) : (
                  <button
                    className="inline-flex items-center justify-center rounded-full bg-primary/70 px-5 py-3 text-sm font-semibold text-primary-foreground opacity-75"
                    disabled
                    type="button"
                  >
                    ZIP Coming Soon
                  </button>
                )}
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                  href="/"
                >
                  Compare More Templates
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-border/80 bg-secondary/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                This kit includes
              </p>
              <ul className="mt-4 space-y-3">
                {template.starterKitIncludes.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-dashed border-border/80 bg-background px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Download status
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {template.download.status === "ready"
                    ? "This template has a real ZIP starter kit attached. The primary button downloads an editable Next.js, Tailwind, and Motion project."
                    : "This template is still in the design-product stage. The page models the final flow, but the ZIP asset has not been packaged yet."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
