import { NavLink } from "@remix-run/react";

interface CustomNavLinkProps {
  to: string;
  children: string;
  className?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={`${
        props.className ? props.className + " " : ""
      } group relative`}
    >
      {({ isActive }) => (
        <>
          {props.children}
          <span
            className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-slate-900 transition-[width] duration-500 group-hover:w-full ${
              isActive ? "w-full" : "w-0"
            }`}
          >
            &nbsp;
          </span>
        </>
      )}
    </NavLink>
  );
};

export default CustomNavLink;
