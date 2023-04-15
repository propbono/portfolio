import type { V2_MetaFunction } from "@remix-run/node";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Propbono - About" }];

export default function About() {
  const user = useOptionalUser();
  return <>About</>;
}
