import type { LoaderArgs, SerializeFrom } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProject } from "~/models/project.server";
import invariant from "tiny-invariant";
import { Container, LinkButton, Section, TechStack } from "~/components";
import { type TechStackKey } from "~/models/project.schema";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, "params.slug is required");

  const project = await getProject(params.slug);
  invariant(project, `Project not found: ${params.slug}`);
  return json({ project });
};

type LoaderData = SerializeFrom<typeof loader>;

export default function ProjectSlug() {
  const { project } = useLoaderData<LoaderData>();
  // don't like that
  const stacks: TechStackKey[] = project.stack as unknown as TechStackKey[];
  return (
    <>
      <Section
        className="z-0 bg-opacity-50 md:min-h-screen md:p-32 2xl:min-h-full"
        style={{ background: project.background }}
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-5 md:items-center md:gap-16">
            <div className="row-start-2 flex flex-col items-start justify-center md:col-span-3 md:row-start-1 2xl:col-span-2">
              <h1 className="my-10 w-full font-logo text-4xl font-bold leading-snug text-primary-light dark:text-primary-light md:my-0 md:mb-10 2xl:mb-20 2xl:text-5xl 2xl:leading-snug">
                {project.title}
              </h1>
              <p className="mb-6 w-full font-body text-xl font-medium leading-relaxed text-secondary-light dark:text-secondary-light md:mb-10 2xl:mb-14 2xl:text-2xl 2xl:leading-normal">
                {project.metadata.description}
              </p>
              {project.url ? (
                <LinkButton to={project.url} target="_blank">
                  See in Action...
                </LinkButton>
              ) : null}
            </div>
            <div className="h-full w-full md:col-span-2 2xl:col-span-3">
              <img
                src={project.img.src}
                alt={project.img.alt}
                width={800}
                className="rounded-lg"
              />
            </div>
          </div>
        </Container>
      </Section>
      <TechStack stacks={stacks} position="start" home={false} />
    </>
  );
}
