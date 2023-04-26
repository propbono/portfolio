import clsx from "clsx";
import type { FC, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={clsx(
        className,
        "container relative z-0 mx-auto px-6 md:px-32"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
