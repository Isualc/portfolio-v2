import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    // Display
    title: z.string(),
    titleHtml: z.string().optional(), // allows inline <em> for styled titles
    tagline: z.string(),
    num: z.string(), // "01", "02", etc.

    // Meta
    version: z.string().optional(),
    status: z.string(), // "Pilotbetrieb", "Private Beta", "WIP", "R&D"
    platforms: z.array(z.string()), // ["Windows", "Android"]
    tech: z.array(z.string()), // ["Flutter", "Dart", ...]
    description: z.string(), // short index description
    highlights: z.array(z.string()),

    // Ordering
    featured: z.boolean().default(false),
    order: z.number(),

    // Gallery
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
