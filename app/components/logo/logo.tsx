import { NavLink } from "@remix-run/react";

export const Logo = () => {
  return (
    <div className="group flex items-center justify-center rounded-lg bg-secondary px-4 py-2 transition-all delay-100 duration-1000 hover:bg-primary dark:bg-shade-300">
      <NavLink
        to="/"
        className="font-display text-2xl font-bold text-shade-100 transition-all delay-100 duration-1000 group-hover:text-secondary dark:text-secondary"
      >
        G.Mozer
      </NavLink>
    </div>
  );
};

export default Logo;
