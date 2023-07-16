import { z } from "zod";

export const Image = z.object({
  src: z.string(),
  alt: z.string().optional(),
});

export const Metadata = z.object({
  description: z.string(),
  published: z.string(),
  keywords: z.array(z.string()),
});

export const Project = z.object({
  slug: z.string(),
  title: z.string(),
  img: Image,
  excerpt: z.string().optional(),
  url: z.string().optional(),
  stack: z.array(z.string()),
  metadata: Metadata,
});

export type Project = z.infer<typeof Project>;
export const Projects = z.array(Project);
