import { type TechStackKey } from "~/models/project.schema";
import Container from "../container/container";
import Section from "../section/section";
import { StackItem } from "./stack-item";
import { STACKS } from "./tech-stacks";

type TechStackProps = {
  stacks: TechStackKey[];
};

export const TechStack: React.FC<TechStackProps> = (props) => {
  return (
    <Section title="tech-stack" className="pb-12 pt-10">
      <Container>
        <h2 className="pb-2 font-logo text-2xl font-bold text-primary-accent">
          Tech Stack
        </h2>
        <p className="pb-10 text-lg text-primary-dark dark:text-primary-light">
          My favourite technologies that I use in my projects.
        </p>
        <div className="flex items-center justify-between gap-4 text-secondary-dark dark:text-secondary-light">
          {props.stacks.map((key: TechStackKey) => {
            const stack = STACKS[key];
            return (
              <StackItem
                key={key}
                title={stack.title}
                link={stack.link}
                Icon={stack.Icon}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
