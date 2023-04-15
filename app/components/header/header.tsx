import Logo from "../logo/logo";
import CustomNavLink from "../custom-nav-link/custom-nav-link";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <Logo />
      <nav>
        <CustomNavLink to="/" className="mr-4">
          Home
        </CustomNavLink>
        <CustomNavLink to="/about" className="mr-4">
          About
        </CustomNavLink>
        <CustomNavLink to="/projects" className="mr-4">
          Projects
        </CustomNavLink>
      </nav>
      <nav>ThemeColor</nav>
    </header>
  );
};

export default Header;
