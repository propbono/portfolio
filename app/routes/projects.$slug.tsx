import type { LoaderArgs, SerializeFrom } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProject } from "~/models/project.server";
import invariant from "tiny-invariant";
import { Container, Section } from "~/components";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, "params.slug is required");

  const project = await getProject(params.slug);
  invariant(project, `Project not found: ${params.slug}`);
  return json({ project });
};

type LoaderData = SerializeFrom<typeof loader>;

export default function ProjectSlug() {
  const { project } = useLoaderData<LoaderData>();
  console.log("Client-Project: ", project);
  console.log("Title: ", project.title);
  return (
    <Section className="mt-20">
      <Container>
        <img src="#" alt="#" />
        <h1>{project.title}</h1>
        <p>Project Descripion</p>
        <span>Link To Project</span>
        <span>Slug: {project.slug}</span>
      </Container>
    </Section>
  );
}
