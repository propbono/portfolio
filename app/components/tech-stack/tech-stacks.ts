import {
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiRemix,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { type TechStacks } from "~/models/project.schema";

export const STACKS: TechStacks = {
  ReactJS: { title: "ReactJS", link: "https://react.dev/", Icon: SiReact },
  NextJS: { title: "NextJS", link: "https://nextjs.org/", Icon: SiNextdotjs },
  Typescript: {
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
    Icon: SiTypescript,
  },
  RemixJS: { title: "RemixJS", link: "https://remix.run/", Icon: SiRemix },
  TailwindCSS: {
    title: "TailwindCSS",
    link: "https://tailwindcss.com/",
    Icon: SiTailwindcss,
  },
  Prisma: { title: "Prisma", link: "https://www.prisma.io/", Icon: SiPrisma },
  NodeJS: { title: "NodeJS", link: "https://nodejs.org/en", Icon: SiNodedotjs },
  Python: { title: "Python", link: "https://www.python.org/", Icon: SiPython },
  Git: { title: "Git", link: "https://git-scm.com/", Icon: SiGit },
  Vercel: { title: "Vercel", link: "https://vercel.com", Icon: SiVercel },
  Vite: { title: "Vite", link: "https://vitejs.dev/", Icon: SiVite },
  Vitest: { title: "Vitest", link: "https://vitest.dev/", Icon: SiVitest },
  ReactQuery: { title: "React Query", link: "", Icon: SiReactquery },
  Redux: { title: "Redux", link: "https://redux.js.org/", Icon: SiRedux },
};
