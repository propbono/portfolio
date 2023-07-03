import Container from "../container/container";
import Section from "../section/section";
import profilePic from "../../../public/images/hero-section-avatar.png";
import { Link } from "@remix-run/react";

export const HeroSection = () => {
  return (
    <Section
      title="hero"
      className="2xl:min-h-[100vh] flex items-center py-10 md:py-20"
    >
      <Container className="flex flex-col gap-10 md:flex-row 2xl:gap-24">
        <div className="lg:w-1/3 mb-6 hidden justify-center align-middle md:flex md:justify-start">
          <img
            src={profilePic}
            alt="Raccon Profile"
            className="h-auto self-start"
          />
        </div>
        <div className="lg:w-2/3 w-full">
          <h1 className="mb-6 w-full font-logo text-4xl font-bold leading-snug text-primary-dark dark:text-primary-light md:mb-10 2xl:mb-20 ">
            Making the Web a{" "}
            <span className="text-primary-accent">More Beautiful Place</span>,
            One Site at a Time.
          </h1>
          <p className="mb-6 w-full font-body text-xl font-medium leading-relaxed text-secondary-dark dark:text-secondary-light md:mb-10 2xl:mb-14">
            Full-stack developer turning ideas into innovative web apps with
            React. Check out my latest projects for examples of my expertise in
            web development and see how I can help bring your ideas to life.
          </p>
          <div className="flex justify-normal md:justify-end">
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
