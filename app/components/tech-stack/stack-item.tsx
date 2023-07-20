import { Link } from "@remix-run/react";
import { type StackItem as StackItemProps } from "~/models/project.schema";

export const StackItem: React.FC<StackItemProps> = (props) => {
  return (
    <Link
      className="transform transition duration-1000 hover:text-primary-accent"
      title={props.title}
      target="_blank"
      to={props.link}
    >
      <props.Icon className="h-6 w-6 md:h-8 md:w-8" />
    </Link>
  );
};
