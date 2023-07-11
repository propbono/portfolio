import { NavLink, useLocation } from "@remix-run/react";

interface CustomNavLinkProps {
  to: string;
  children: string;
  className?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = (props) => {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;
  return (
    <NavLink
      to={props.to}
      end
      className={`${
        props.className ? props.className + " " : ""
      } group relative font-link text-lg font-bold md:text-xl`}
    >
      {({ isActive }) => (
        <span
          className={`${
            props.to === currentPath ? "text-primary-accent" : ""
          } hover:text-primary-accent`}
        >
          {props.children}
        </span>
      )}
    </NavLink>
  );
};

export default CustomNavLink;
