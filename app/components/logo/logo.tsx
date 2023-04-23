import { NavLink } from "@remix-run/react";

export const Logo = () => {
  return (
    <NavLink
      to="/"
      className="font-logo text-2xl font-bold text-primary-dark transition-all delay-100 duration-1000 dark:text-primary-light"
    >
      Greg Mozer
    </NavLink>
  );
};

export default Logo;
