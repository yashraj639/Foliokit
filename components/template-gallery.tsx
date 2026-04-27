"use client";

import Link from "next/link";
import { startTransition, useDeferredValue, useState } from "react";

import type { Template } from "@/lib/templates";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/Badge";

type TemplateGalleryProps = {
  templates: Template[];
};

type FilterState = {
  aesthetic: string;
  useCase: string;
  buildLevel: string;
};

const defaultFilters: FilterState = {
  aesthetic: "All aesthetics",
  useCase: "All use cases",
  buildLevel: "All build levels",
};

const useCaseOptions = [
  "All use cases",
  "Getting hired",
  "Freelance",
  "Personal brand",
  "Storytelling",
];

const buildLevelOptions = [
  "All build levels",
  "Beginner friendly",
  "Easiest to customize",
  "Intermediate",
  "Content first",
  "Creative-focused",
  "Advanced polish",
];

export function TemplateGallery({ templates }: TemplateGalleryProps) {
  const [filters, setFilters] = useState(defaultFilters);
  const deferredFilters = useDeferredValue(filters);

  const filteredTemplates = templates.filter((template) => {
    const aestheticMatches =
      deferredFilters.aesthetic === defaultFilters.aesthetic ||
      template.name === deferredFilters.aesthetic;
    const useCaseMatches =
      deferredFilters.useCase === defaultFilters.useCase ||
      template.categories.useCases.includes(deferredFilters.useCase);
    const buildLevelMatches =
      deferredFilters.buildLevel === defaultFilters.buildLevel ||
      template.buildLevel === deferredFilters.buildLevel;

    return aestheticMatches && useCaseMatches && buildLevelMatches;
  });

  const filterSummary =
    filteredTemplates.length === templates.length
      ? "Showing all launch directions."
      : `Showing ${filteredTemplates.length} matching template${
          filteredTemplates.length === 1 ? "" : "s"
        }.`;

  function updateFilter<K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) {
    startTransition(() => {
      setFilters((current) => ({
        ...current,
        [key]: value,
      }));
    });
  }

  function resetFilters() {
    startTransition(() => {
      setFilters(defaultFilters);
    });
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="grid gap-4 rounded-[1.6rem] border border-border/80 bg-secondary/50 p-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
        <FilterSelect
          label="Aesthetic"
          options={[defaultFilters.aesthetic, ...templates.map((template) => template.name)]}
          value={filters.aesthetic}
          onChange={(value) => updateFilter("aesthetic", value)}
        />
        <FilterSelect
          label="Use case"
          options={useCaseOptions}
          value={filters.useCase}
          onChange={(value) => updateFilter("useCase", value)}
        />
        <FilterSelect
          label="Build level"
          options={buildLevelOptions}
          value={filters.buildLevel}
          onChange={(value) => updateFilter("buildLevel", value)}
        />
        <div className="flex items-end">
          <Button
            className="w-full lg:w-auto"
            onClick={resetFilters}
            type="button"
            variant="outline"
          >
            Reset filters
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{filterSummary}</p>
        <div className="flex flex-wrap gap-2">
          {filters.aesthetic !== defaultFilters.aesthetic && (
            <FilterBadge label={filters.aesthetic} />
          )}
          {filters.useCase !== defaultFilters.useCase && (
            <FilterBadge label={filters.useCase} />
          )}
          {filters.buildLevel !== defaultFilters.buildLevel && (
            <FilterBadge label={filters.buildLevel} />
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredTemplates.map((template) => (
          <Link
            key={template.slug}
            className="group rounded-[1.75rem] border border-border/80 bg-background p-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            href={`/templates/${template.slug}`}
          >
            <div
              className={`flex min-h-44 flex-col justify-between rounded-[1.3rem] p-5 ${template.palette}`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="max-w-[12rem] font-heading text-2xl leading-none font-semibold sm:text-3xl">
                  {template.name}
                </p>
                <Badge className="border-current/20 font-semibold uppercase tracking-[0.15em]" variant="outline">
                  MVP
                </Badge>
              </div>
              <p className="max-w-xs text-sm leading-6 opacity-85">
                {template.vibe}
              </p>
            </div>

            <div className="space-y-3 px-1 pt-4">
              <p className="text-sm leading-6 text-muted-foreground">
                {template.useCase}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  {template.buildLevel}
                </Badge>
                <Badge variant="outline">
                  Next.js / Tailwind / Motion
                </Badge>
                {template.categories.useCases.slice(0, 1).map((category) => (
                  <Badge key={category} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
              <Button className="pt-1 h-auto p-0" variant="ghost">
                Open template detail
              </Button>
            </div>
          </Link>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="rounded-[1.75rem] border border-dashed border-border bg-background px-6 py-10 text-center">
          <p className="font-heading text-3xl font-semibold tracking-tight">
            No template matches that combination yet.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Try resetting one filter and keep the gallery broad. This is a good
            future signal for which new starter kits we should design next.
          </p>
        </div>
      )}
    </div>
  );
}

type FilterSelectProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function FilterSelect({ label, options, value, onChange }: FilterSelectProps) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      <select
        className="rounded-[1rem] border border-border bg-background px-1 py-3 text-sm outline-none transition focus:border-ring"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function FilterBadge({ label }: { label: string }) {
  return (
    <Badge className="px-3 py-1" variant="outline">
      {label}
    </Badge>
  );
}
