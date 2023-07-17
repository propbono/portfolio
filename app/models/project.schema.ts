import { z } from "zod";
import { type IconType } from "react-icons";

const AllTechSchema = z.enum([
  "ReactJS",
  "NextJS",
  "Typescript",
  "RemixJS",
  "TailwindCSS",
  "Prisma",
  "NodeJS",
  "Python",
  "Git",
]);

export const StackItemSchema = z.object({
  title: z.string(),
  link: z.string(),
  Icon: z.unknown() as z.ZodType<IconType>,
});

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
  stack: z.array(AllTechSchema),
  metadata: Metadata,
});

export type TechStackKey = z.infer<typeof AllTechSchema>;

export type TechStacks = {
  [key in TechStackKey]: z.infer<typeof StackItemSchema>;
};

export type StackItem = z.infer<typeof StackItemSchema>;

export type Project = z.infer<typeof Project>;
