import type { V2_MetaFunction } from "@remix-run/node";
import AboutSection from "~/components/about-section/about-section";

export const meta: V2_MetaFunction = () => [{ title: "Propbono - About" }];

export default function About() {
  return <AboutSection />;
}
