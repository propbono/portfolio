import Container from "../container/container";
import Section from "../section/section";
import profilePic from "../../../public/images/hero-section-avatar.png";
import { Link } from "@remix-run/react";

export const HeroSection = () => {
  return (
    <Section className="md:min-h-[80vh]">
      <Container className="my-6">
        <div className="grid grid-cols-1 items-center justify-between gap-x-10 pt-0 md:grid-cols-5">
          <div className="mb-6 flex w-full justify-center align-middle md:col-span-2 md:row-span-2 md:justify-start">
            <img
              src={profilePic}
              alt="Raccon Profile"
              className="h-auto w-2/3 self-start md:w-3/4"
            />
          </div>
          <h1 className="mb-6 w-full font-logo text-4xl font-bold leading-snug text-primary-dark dark:text-primary-light md:col-span-3 md:row-span-1">
            Making the Web a{" "}
            <span className="text-primary-accent">More Beautiful Place</span>,
            One Site at a Time.
          </h1>
          <p className="mb-6 w-full font-body text-xl font-medium leading-relaxed text-secondary-dark dark:text-secondary-light md:col-span-3 md:row-span-1">
            Full-stack developer turning ideas into innovative web apps with
            React. Check out my latest projects for examples of my expertise in
            web development and see how I can help bring your ideas to life.
          </p>
          <div className="flex justify-normal md:col-span-2 md:col-start-4 md:row-span-1  md:justify-end">
            <Link
              to="/projects"
              title="Projects Button Link"
              className="transform items-center rounded-lg border-0 bg-primary-dark px-10 py-3 font-link text-xl font-bold text-primary-light outline-none transition duration-1000 hover:bg-primary-accent dark:bg-primary-light dark:text-secondary-dark dark:hover:bg-primary-accent "
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
