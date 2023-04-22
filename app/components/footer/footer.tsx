import { Link } from "@remix-run/react";
import {
  RiGithubFill,
  RiMailSendFill,
  RiCopyrightLine,
  RiLinkedinFill,
} from "react-icons/ri";

const socialIconStyle =
  "mr-4 text-primary dark:text-shade-300 hover:text-shade-300 dark:hover:text-primary";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-4 bg-secondary px-32 py-8 font-medium md:flex-row">
      <span className="flex items-center align-middle text-shade-300">
        <RiCopyrightLine /> 2023 propbono
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
