import type { V2_MetaFunction } from "@remix-run/node";
import { AboutSection, HeroSection, TechStack } from "~/components";
import { type TechStackKey } from "~/models/project.schema";

export const meta: V2_MetaFunction = () => [
  { title: "Portfolio Website by propbono" },
];

const ALL_TECH_STACKS: TechStackKey[] = [
  "ReactJS",
  "NextJS",
  "Typescript",
  "RemixJS",
  "TailwindCSS",
  "Prisma",
  "NodeJS",
  "Python",
  "Git",
];

export default function Index() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStack stacks={ALL_TECH_STACKS} />
    </>
  );
}
