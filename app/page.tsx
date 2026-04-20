import { TemplateShowcase } from "@/components/template-showcase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/layout/Section";
import { H1, H2, Heading } from "@/components/typography/Heading";
import { Large, Small } from "@/components/typography/Text";

export default function Home() {
  const featurePillars = [
    {
      title: "Choose with intent",
      copy: "Every template is framed by goal, tone, and content fit so users stop guessing what kind of portfolio they need.",
    },
    {
      title: "Preview before editing",
      copy: "The platform makes template selection visual and practical, with enough context to compare styles before downloading.",
    },
    {
      title: "Download modern starter kits",
      copy: "Templates ship as production-ready Next.js, Tailwind CSS, and Framer Motion projects so you can start with a deep foundation immediately.",
    },
  ];

  const starterKitIncludes = [
    "Responsive layout foundation",
    "Editable placeholder content",
    "Organized CSS and JavaScript files",
    "Production-ready visual polish",
    "A simple folder structure for ZIP downloads",
  ];

  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <Section
          as="header"
          className="rounded-[2rem] sm:rounded-full border border-border/80 bg-background/80 px-6 py-5 sm:px-5 sm:py-3 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="font-heading text-[1.8rem] font-semibold tracking-[-0.07em]">
                Foliokit
              </p>
            </div>
            <nav className="flex items-center justify-center gap-1 sm:gap-2 text-[13px] sm:text-sm text-muted-foreground border-t border-border/40 pt-4 sm:border-none sm:pt-0">
              <Button href="#gallery" size="sm" variant="ghost">
                Templates
              </Button>
              <Button href="#why" size="sm" variant="ghost">
                Why It Works
              </Button>
              <Button
                className="whitespace-nowrap"
                href="#starter-kits"
                size="sm"
                variant="primary"
              >
                Starter Kits
              </Button>
            </nav>
          </div>
        </Section>

        <Section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className=" relative overflow-hidden flex flex-col gap- rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10 ">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6">
              for job seekers, builders, and personal brands
            </p>
            <div className="max-w-3xl flex flex-col gap-8">
              <H1 className="text-[2.6rem] leading-[0.92] tracking-[-0.08em] text-balance sm:text-6xl lg:text-[5.1rem]">
                Pick the portfolio style that actually fits your goals.
              </H1>
              <Large className="max-w-2xl leading-8 tracking-[-0.015em] text-muted-foreground sm:text-[1.07rem]">
                Foliokit helps developers compare strong portfolio directions,
                understand why each one works, and download approachable starter
                kits they can shape into something personal fast.
              </Large>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#gallery" size="lg" variant="primary">
                Explore Template Directions
              </Button>
              <Button href="#starter-kits" size="lg" variant="outline">
                See What Ships in the ZIP
              </Button>
            </div>

            <div className="mt-10 grid gap-4 border-t border-border/80 pt-6 sm:grid-cols-3">
              <div>
                <p className="font-heading text-[2.25rem] font-semibold tracking-[-0.07em]">
                  8
                </p>
                <p className="text-sm leading-6 tracking-[-0.015em] text-muted-foreground">
                  aesthetic directions for the MVP launch
                </p>
              </div>
              <div>
                <p className="font-heading text-[2.25rem] font-semibold tracking-[-0.07em]">
                  Next.js
                </p>
                <p className="text-sm leading-6 tracking-[-0.015em] text-muted-foreground">
                  starter kits built with Tailwind CSS and Framer Motion
                </p>
              </div>
              <div>
                <p className="font-heading text-[2.25rem] font-semibold tracking-[-0.07em]">
                  1 goal
                </p>
                <p className="text-sm leading-6 tracking-[-0.015em] text-muted-foreground">
                  get users to a working portfolio foundation fast
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border/80 bg-[#201b19] p-6 text-[#f7f1e8] shadow-sm sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#cfb38f]">
              Product Lens
            </p>
            <Heading
              as="h2"
              size="4xl"
              className="mt-4 leading-[0.96] tracking-[-0.07em] sm:text-[2.55rem]"
            >
              Choosing a portfolio well is half the work.
            </Heading>
            <Large className="mt-4 leading-8 tracking-[-0.015em] text-[#d9cdc2]">
              Most template sites stop at visual browsing. Foliokit adds the
              missing layer: why a layout fits a specific kind of developer,
              what impression it creates, and how quickly someone can make it
              their own.
            </Large>

            <div className="mt-8 space-y-3">
              {featurePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <p className="font-heading text-[1.02rem] font-semibold tracking-[-0.04em] text-white">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 tracking-[-0.01em] text-[#d9cdc2]">
                    {pillar.copy}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </Section>

        <Section
          id="gallery"
          className="rounded-[2rem] border border-border/80 bg-card/90 px-6 py-8 shadow-sm sm:px-8 sm:py-10"
        >
          <div className="flex flex-col gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Small className="uppercase tracking-[0.18em] text-muted-foreground">
                Template Gallery
              </Small>
              <H2 className="mt-3 text-3xl tracking-[-0.07em] sm:text-4xl lg:text-5xl">
                Eight launch-ready directions with distinct taste.
              </H2>
            </div>
            <Small className="max-w-md leading-7 tracking-[-0.01em] text-muted-foreground">
              This first slice models the curated gallery experience. Each card
              already carries the kind of product metadata we can use later for
              filtering, detail pages, and ZIP downloads.
            </Small>
          </div>
          <TemplateShowcase />
        </Section>

        <Section id="why" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8">
            <Small className="uppercase tracking-[0.18em] text-muted-foreground">
              Why Foliokit
            </Small>
            <H2 className="mt-3 text-3xl tracking-[-0.07em] sm:text-4xl lg:text-5xl">
              A portfolio platform that teaches while it helps.
            </H2>
            <Large className="mt-5 max-w-xl leading-8 tracking-[-0.015em] text-muted-foreground">
              The gallery is only one layer. The real product is the confidence
              users get from understanding what kind of portfolio suits them and
              what they are downloading before they open a single file.
            </Large>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Browse distinct portfolio aesthetics instead of endless lookalikes.",
              "Understand the purpose, tone, and best use-case of each template.",
              "Download a modern starter kit that can be customized with React, Tailwind, and Motion components.",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-border/80 bg-card px-5 py-6 shadow-sm"
              >
                <Small className="tracking-[0.18em] text-muted-foreground">
                  0{index + 1}
                </Small>
                <p className="mt-8 text-lg leading-8 tracking-[-0.025em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="starter-kits"
          className="rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <Small className="uppercase tracking-[0.18em] text-muted-foreground">
                Starter Kits
              </Small>
              <H2 className="mt-3 text-3xl tracking-[-0.07em] sm:text-4xl lg:text-5xl">
                Built with Next.js, Tailwind CSS, and Framer Motion.
              </H2>
              <Large className="mt-5 max-w-2xl leading-8 tracking-[-0.015em] text-muted-foreground">
                Each downloadable portfolio template is a fully-configured
                Next.js project with Tailwind CSS for styling and Framer Motion
                for interactions. No legacy code — just a clean,
                production-ready foundation that follows modern React best
                practices.
              </Large>
            </div>

            <div className="rounded-[1.75rem] border border-border/80 bg-secondary/70 p-5">
              <Small className="font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Each ZIP should include
              </Small>
              <ul className="mt-4 space-y-3">
                {starterKitIncludes.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
