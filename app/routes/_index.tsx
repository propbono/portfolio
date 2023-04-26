import type { V2_MetaFunction } from "@remix-run/node";
import { Container, HeroSection, Section, TechStack } from "~/components";

export const meta: V2_MetaFunction = () => [
  { title: "Propbono - Portfolio Website" },
];

export default function Index() {
  return (
    <>
      <HeroSection />
      <TechStack />
    </>
  );
}
