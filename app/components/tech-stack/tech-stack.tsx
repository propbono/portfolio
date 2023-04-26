import { Link } from "@remix-run/react";
import Container from "../container/container";
import Section from "../section/section";
import { DiReact } from "react-icons/di";
import {
  SiRemix,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiNodedotjs,
  SiPython,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";

export const TechStack = () => {
  return (
    <Section title="tech-stack" className="pb-12 pt-10">
      <Container>
        <h2 className="pb-2 font-logo text-2xl font-bold text-primary-accent">
          Tech Stack
        </h2>
        <p className="pb-4 text-lg text-primary-dark dark:text-primary-light">
          My favourite technologies that I use in my projects.
        </p>
        <div className="flex items-center justify-between gap-4 text-secondary-dark dark:text-secondary-light">
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="ReactJS"
            target="_blank"
            to={"https://react.dev/"}
          >
            <SiReact className="h-8 w-8" />
          </Link>
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="Typescript"
            target="_blank"
            to={"https://www.typescriptlang.org/"}
          >
            <SiTypescript className="h-8 w-8" />
          </Link>
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="RemixJS"
            target="_blank"
            to={"https://remix.run/"}
          >
            <SiRemix className="h-8 w-8" />
          </Link>
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="NextJS"
            target="_blank"
            to={"https://nextjs.org/"}
          >
            <SiNextdotjs className="h-8 w-8" />
          </Link>
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="TailwindCSS"
            target="_blank"
            to={"https://tailwindcss.com/"}
          >
            <SiTailwindcss className="h-8 w-8" />
          </Link>
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="Prisma"
            target="_blank"
            to={"https://www.prisma.io/"}
          >
            <SiPrisma className="h-8 w-8" />
          </Link>
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="NodeJS"
            target="_blank"
            to={"https://nodejs.org/en"}
          >
            <SiNodedotjs className="h-8 w-8" />
          </Link>
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="Python"
            target="_blank"
            to={"https://www.python.org/"}
          >
            <SiPython className="h-8 w-8" />
          </Link>
          <Link
            className="transform transition duration-1000 hover:text-primary-accent"
            title="Python"
            target="_blank"
            to={"https://git-scm.com/"}
          >
            <SiGit className="h-8 w-8" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
