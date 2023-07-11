import CustomNavLink from "../custom-nav-link/custom-nav-link";
import ThemeToggle from "../theme-toggle/theme-toggle";
import Container from "../container/container";
import { RiMenuLine, RiCloseCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { NavLink } from "@remix-run/react";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

  const solidSettings =
    "bg-primary-light dark:bg-primary-dark shadow-md shadow-secondary-light dark:shadow-secondary-dark bg-opacity-100 dark:bg-opacity-100";
  const transparentSettings =
    "md:text-primary-light dark:md:text-primary-light md:bg-opacity-0 dark:md:bg-opacity-0 md:text-secondary-light md:hover:text-primary-light dark:md:text-secondary-light dark:md:hover:text-primary-light";

  return (
    <header
      className={`z-50 w-full text-secondary-dark transition delay-100 duration-1000 hover:text-primary-dark dark:text-secondary-light dark:hover:text-primary-light md:fixed ${
        isTransparent ? transparentSettings : solidSettings
      }`}
    >
      <Container className="flex w-full items-center justify-between py-8">
        <NavLink
          to="/"
          className="font-logo text-2xl font-bold transition-all delay-100 duration-1000"
        >
          Greg Mozer
        </NavLink>
        <nav>
          {/* TODO: Refactor to use only one menu */}
          <section id="desktopMenu" className="hidden md:flex">
            <CustomNavLink to="/" className="mr-8">
              Home
            </CustomNavLink>
            <CustomNavLink to="/#about" className="mr-8">
              About
            </CustomNavLink>
            <CustomNavLink to="/projects" className="mr-8">
              Projects
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
            title="Mobile Menu"
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
