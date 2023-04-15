import type { V2_MetaFunction } from "@remix-run/node";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Propbono - Projects" }];

export default function Projects() {
  const user = useOptionalUser();
  return <>Projects</>;
}
