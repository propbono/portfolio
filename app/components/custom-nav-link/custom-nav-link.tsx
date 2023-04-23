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
      } group relative font-link text-lg font-bold text-secondary-dark hover:text-primary-dark dark:text-secondary-light dark:hover:text-primary-light`}
    >
      {({ isActive }) => (
        <>
          {props.children}
          <span
            className={`ease absolute -bottom-1 left-0 inline-block h-[2px] bg-primary-dark transition-[width] duration-500 group-hover:w-full dark:bg-primary-light ${
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
