import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Propbono - About" }];

export default function About() {
  return <>About</>;
}
