import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { STACKS, Section } from "~/components";
import { type Project } from "~/models/project.schema";
import { getProjects } from "~/models/project.server";

export const meta: V2_MetaFunction = () => [{ title: "Projects by propbono" }];

export const loader = async () => {
  return json({ projects: await getProjects() });
};

export default function Projects() {
  const data = useLoaderData<{ projects: Project[] }>();
  const projects: Project[] = data.projects as Project[];

  const links = projects.map((project: Project, index: number) => {
    const isEvenRow = Math.floor(index / 2) % 2 === 0;
    const isColumnBigger =
      (isEvenRow && index % 2 === 1) || (!isEvenRow && index % 2 === 0);
    const isOddLength = data.projects.length % 2 !== 0;
    return (
      <Link
        key={project.slug}
        to={project.slug}
        className={`min-h-[83vh] md:min-h-screen 2xl:min-h-[50vh] ${
          isOddLength
            ? "md:col-span-5"
            : isColumnBigger
            ? "md:col-span-3"
            : "md:col-span-2"
        }`}
      >
        <div className="relative flex h-full w-full ">
          {/* <img
            src={project.img.src}
            alt={project.img.alt}
            className="absolute top-0 z-0 h-full w-full object-cover object-center"
          /> */}
          <div
            className="z-10 flex h-full w-full flex-col gap-4 self-start border-0 p-6 md:items-end md:justify-end"
            style={{ background: project.background }}
          >
            <h1 className="w-max rounded-md bg-primary-accent/50 p-2 py-2 text-2xl font-bold text-primary-light">
              {project.title}
            </h1>
            <div className="flex items-start gap-2 md:items-center md:justify-start">
              {project.stack.map((item, index) => (
                <span
                  className="rounded-sm bg-primary-accent/50 p-2 text-sm text-primary-light"
                  key={`${item}-${index}`}
                >
                  {STACKS[item].title}
                </span>
              ))}
            </div>
            <p className="rounded-md bg-primary-accent/50 p-2 text-lg text-primary-light">
              {project.metadata.description}
            </p>
          </div>
        </div>
      </Link>
    );
  });

  console.log(data);
  return (
    <Section className="h-full">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-5">
        {links}
      </div>
    </Section>
  );
}
