import clsx from "clsx";
import type { FC, ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  style?: any;
}
export const Section: FC<SectionProps> = ({
  children,
  style,
  className = "",
  title = "",
}) => {
  return (
    <section id={title} style={style} className={clsx(className, "relative")}>
      {children}
    </section>
  );
};

export default Section;
