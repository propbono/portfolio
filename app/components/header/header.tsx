import Logo from "../logo/logo";
import CustomNavLink from "../custom-nav-link/custom-nav-link";
import ThemeToggle from "../theme-toggle/theme-toggle";
import Container from "../container/container";
import { RiMenuLine, RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
      <Container className="flex w-full items-center justify-between py-8">
        <Logo />
        <nav>
          {/* TODO: Refactor to use only one menu */}
          <section id="desktopMenu" className="hidden md:flex">
            <CustomNavLink to="/" className="mr-8">
              Home
            </CustomNavLink>
            <CustomNavLink to="/projects" className="mr-8">
              Projects
            </CustomNavLink>
            <CustomNavLink to="/about" className="mr-8">
              About
            </CustomNavLink>
          </section>
          <section
            id="mobileMenu"
            className={`${
              mobileMenu
                ? "justify-top absolute left-0 top-0 z-10 flex min-h-[100vh] w-[100vw] flex-col bg-primary-light px-10 pt-10 align-middle dark:bg-primary-dark"
                : "hidden"
            } md:hidden`}
          >
            <CustomNavLink to="/" className="mb-4">
              Home
            </CustomNavLink>
            <CustomNavLink to="/projects" className="mb-4">
              Projects
            </CustomNavLink>
            <CustomNavLink to="/about" className="mb-4">
              About
            </CustomNavLink>
          </section>
        </nav>
        <div className="flex items-center justify-center align-middle">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenu((previousState) => !previousState)}
            className="z-30 ml-4 flex text-primary-dark hover:text-primary-accent focus:text-primary-accent dark:text-primary-light md:hidden"
          >
            {mobileMenu ? (
              <RiCloseCircleLine className="h-6 w-6" />
            ) : (
              <RiMenuLine className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
