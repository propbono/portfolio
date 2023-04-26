import clsx from "clsx";
import type { FC, ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
}
export const Section: FC<SectionProps> = ({
  children,
  className = "",
  title = "",
}) => {
  return (
    <section id={title} className={clsx(className, "relative")}>
      {children}
    </section>
  );
};

export default Section;
