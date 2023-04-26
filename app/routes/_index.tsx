import type { V2_MetaFunction } from "@remix-run/node";
import { Container, HeroSection, Section } from "~/components";

export const meta: V2_MetaFunction = () => [
  { title: "Propbono - Portfolio Website" },
];

export default function Index() {
  return (
    <>
      <HeroSection />
      <div>
        <Section title="tech-stack" className="pt-10">
          <Container>
            <h2 className="font-logo text-2xl font-bold text-primary-accent">
              Tech Stack
            </h2>
          </Container>
        </Section>
      </div>
    </>
  );
}
