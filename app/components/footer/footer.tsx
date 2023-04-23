import { Link } from "@remix-run/react";
import {
  RiGithubFill,
  RiMailSendFill,
  RiCopyrightLine,
  RiLinkedinFill,
} from "react-icons/ri";

const socialIconStyle = "ml-8 text-secondary-light hover:text-primary-accent";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-4 bg-primary-dark px-32 py-8 font-medium md:flex-row">
      <span className="flex items-center align-middle text-secondary-light">
        <RiCopyrightLine /> 2023 by Greg Mozer
      </span>
      <nav className="flex items-center align-middle">
        <Link
          to="https://github.com/propbono/"
          className={socialIconStyle}
          target="_blank"
        >
          <RiGithubFill className="h-6 w-6" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/greg-mozer/"
          className={socialIconStyle}
          target="_blank"
        >
          <RiLinkedinFill className="h-6 w-6" />
        </Link>
        <Link
          to="mailto:propbono@gmail"
          className={socialIconStyle}
          target="_blank"
        >
          <RiMailSendFill className="h-6 w-6" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
