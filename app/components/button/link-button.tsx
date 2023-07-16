import { Link, type LinkProps } from "@remix-run/react";

export const LinkButton: React.FC<LinkProps> = (props) => {
  return (
    <Link
      className="transform items-center rounded-lg border-0 bg-primary-dark px-10 py-3 font-link text-xl font-bold text-primary-light outline-none transition duration-1000 hover:bg-primary-accent dark:bg-primary-light dark:text-secondary-dark dark:hover:bg-primary-accent"
      {...props}
    >
      {props.children}
    </Link>
  );
};
