import Logo from "../logo/logo";
import CustomNavLink from "../custom-nav-link/custom-nav-link";
import ThemeToggle from "../theme-toggle/theme-toggle";
import Container from "../container/container";

export const Header = () => {
  return (
    <header>
      <Container className="flex w-full items-center justify-between py-8">
        <Logo />
        <nav>
          <CustomNavLink to="/" className="mr-8">
            Home
          </CustomNavLink>
          <CustomNavLink to="/projects" className="mr-8">
            Projects
          </CustomNavLink>
          <CustomNavLink to="/about" className="mr-8">
            About
          </CustomNavLink>
        </nav>
        <ThemeToggle />
      </Container>
    </header>
  );
};

export default Header;
