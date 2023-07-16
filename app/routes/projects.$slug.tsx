import type { LoaderArgs, SerializeFrom } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProject } from "~/models/project.server";
import invariant from "tiny-invariant";
import { Container, LinkButton, Section, TechStack } from "~/components";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, "params.slug is required");

  const project = await getProject(params.slug);
  invariant(project, `Project not found: ${params.slug}`);
  return json({ project });
};

type LoaderData = SerializeFrom<typeof loader>;

export default function ProjectSlug() {
  const { project } = useLoaderData<LoaderData>();
  return (
    <>
      <Section className="relative z-0 min-h-screen bg-secondary-dark md:p-32">
        <Container>
          <div className="grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 sm:py-16 md:grid-rows-1">
            <div className=" row-start-2 flex flex-col items-start justify-center sm:row-start-1">
              <h1 className="my-10 w-full font-logo text-4xl font-bold leading-snug text-primary-light dark:text-primary-light md:my-0 md:mb-10 2xl:mb-20 2xl:text-5xl 2xl:leading-snug">
                {project.title}
              </h1>
              <p className="mb-6 w-full font-body text-xl font-medium leading-relaxed text-secondary-light dark:text-secondary-light md:mb-10 2xl:mb-14 2xl:text-2xl 2xl:leading-normal">
                {project.metadata.description}
              </p>
              {project.url ? (
                <LinkButton to={project.url}>See in Action...</LinkButton>
              ) : null}
            </div>
            <div className="flex w-full">
              <div className="h-full w-full">
                <img
                  src={project.img.src}
                  alt={project.img.alt}
                  width={612}
                  height={383}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <TechStack />
    </>
  );
}
