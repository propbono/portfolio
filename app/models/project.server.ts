import { join } from "path";
import fs from "fs/promises";
import invariant from "tiny-invariant";
import { type Project } from "./project.schema";

const projectsPath = join(__dirname, "/../app/projects");

export const getSlugs = async (): Promise<string[]> => {
  const paths = await fs.readdir(projectsPath, { withFileTypes: true });
  return paths.map((path) => path.name);
};

export const getProjectFromSlug = async (slug: string): Promise<Project> => {
  const projectPath = join(projectsPath, `/${slug}/index.json`);
  const jsonFile = await fs.readFile(projectPath, "utf-8");
  const data: Project = JSON.parse(jsonFile);
  console.log("DATA: ", data);
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    url: data.url,
    githubUrl: data.githubUrl,
    background: data.background,
    stack: data.stack,
    img: {
      src: data.img.src,
      alt: data.img.alt,
    },
    metadata: {
      published: data?.metadata?.published,
      description: data?.metadata?.description,
      keywords: data?.metadata?.keywords,
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

export const getProject = async (slug: string): Promise<Project> => {
  const project = await getProjectFromSlug(slug);
  invariant(project, "There is no project on this route");
  return project;
};
