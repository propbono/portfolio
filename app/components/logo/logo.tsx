import { NavLink } from "@remix-run/react";

export const Logo = () => {
  return (
    <div className="group flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 transition-all delay-100 duration-1000 hover:bg-cyan-400">
      <NavLink
        to="/"
        className="font-display text-2xl font-bold text-slate-50 transition-all delay-100 duration-1000 group-hover:text-slate-900"
      >
        G.Mozer
      </NavLink>
    </div>
  );
};

export default Logo;
