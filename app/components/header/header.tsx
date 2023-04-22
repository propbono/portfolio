import Logo from "../logo/logo";
import CustomNavLink from "../custom-nav-link/custom-nav-link";
import ThemeToggle from "../theme-toggle/theme-toggle";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <Logo />
      <nav>
        <CustomNavLink
          to="/"
          className="mr-4 text-secondary dark:text-shade-100"
        >
          Home
        </CustomNavLink>
        <CustomNavLink
          to="/about"
          className="mr-4 text-secondary dark:text-shade-100"
        >
          About
        </CustomNavLink>
        <CustomNavLink
          to="/projects"
          className="mr-4 text-secondary dark:text-shade-100"
        >
          Projects
        </CustomNavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
