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
        "container relative mx-auto px-6 md:max-w-5xl 2xl:max-w-7xl"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
