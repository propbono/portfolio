import { Link } from "@remix-run/react";
import {
  RiGithubFill,
  RiMailSendFill,
  RiCopyrightLine,
  RiLinkedinFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-4 bg-slate-950 px-32 py-8 font-medium md:flex-row">
      <span className="flex items-center align-middle text-slate-200">
        <RiCopyrightLine /> 2023 propbono
      </span>
      <nav className="flex items-center align-middle">
        <Link
          to="https://github.com/propbono/"
          className="mr-4"
          target="_blank"
        >
          <RiGithubFill className="h-6 w-6 text-slate-200" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/greg-mozer/"
          className="mr-4"
          target="_blank"
        >
          <RiLinkedinFill className="h-6 w-6 text-slate-200" />
        </Link>
        <Link to="mailto:propbono@gmail" className="mr-4" target="_blank">
          <RiMailSendFill className="h-6 w-6 text-slate-200" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
