import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export type Project = {
  content: string;
  slug: string;
  title: string;
  img: string;
  excerpt: string;
  url: string;
  stack: string[];
  metadata: {
    description: string;
    published: string;
    keywords: string[];
  };
};

const projectsPath = join(__dirname, "/../app/projects");

export const getSlugs = async (): Promise<string[]> => {
  const paths = await fs.readdir(projectsPath, { withFileTypes: true });
  return paths.map((path) => path.name);
};

export const getProjectFromSlug = async (slug: string): Promise<Project> => {
  const projectPath = join(projectsPath, `/${slug}/index.mdx`);
  const source = await fs.readFile(projectPath);
  const { content, data } = matter(source);

  return {
    content,
    slug,
    title: data.title,
    excerpt: data.excerpt,
    url: data.url,
    stack: data.stack,
    img: data.img,
    metadata: {
      published: data.publishedAt,
      description: data.description,
      keywords: data.keywords,
    },
  };
};

export const getProjects = async (): Promise<Project[]> => {
  const slugs = await getSlugs();
  console.log("ALL SLUGS: ", slugs);
  const projects = Promise.all(slugs.map((slug) => getProjectFromSlug(slug)));
  console.log("ALL PROJECTS: ", projects);
  return projects;
};

// export const getProject = async (slug: string): Promise<Project> => {

// };
