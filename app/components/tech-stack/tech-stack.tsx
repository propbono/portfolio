import { type TechStackKey } from "~/models/project.schema";
import Container from "../container/container";
import Section from "../section/section";
import { StackItem } from "./stack-item";
import { STACKS } from "./tech-stacks";

type TechStackProps = {
  stacks: TechStackKey[];
  home?: boolean;
  position?: "start" | "end" | "between";
};

export const TechStack: React.FC<TechStackProps> = (props) => {
  const { position = "between", home = true } = props;
  return (
    <Section title="tech-stack" className="pb-12 pt-10">
      <Container>
        <h2 className="flex justify-center pb-4 font-logo text-2xl font-bold text-primary-accent md:justify-start">
          Tech Stack
        </h2>
        {home ? (
          <p className="flex justify-center pb-6 text-lg text-primary-dark dark:text-primary-light md:justify-start">
            My favourite technologies that I use in my projects.
          </p>
        ) : null}
        <div
          className={`flex items-center justify-center gap-4 pt-4 text-secondary-dark dark:text-secondary-light md:justify-${position}`}
        >
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
