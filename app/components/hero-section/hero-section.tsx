import Container from "../container/container";
import Section from "../section/section";
import HeroImageDark from "~/img/HeroBackground_Dark.png";

import { Link } from "@remix-run/react";

const styles = {
  section: "md:h-[100vh] md:py-0",
  imgHero: "absolute h-full w-full object-cover object-bottom",
  container: "flex items-start md:h-full md:items-center md:justify-end",
  card: "w-full md:max-w-3xl 2xl:max-w-4xl",
  h1: "my-10 w-full font-logo text-4xl font-bold leading-snug text-primary-light dark:text-primary-light md:my-0 md:mb-10 2xl:mb-20 2xl:text-5xl 2xl:leading-snug",
  p: "mb-6 w-full font-body text-xl font-medium leading-relaxed text-secondary-light dark:text-secondary-light md:mb-10 2xl:mb-14 2xl:text-2xl 2xl:leading-normal",
  link: {
    container: "my-6 flex justify-normal md:justify-end",
    button:
      "transform items-center rounded-lg border-0 bg-primary-dark px-10 py-3 font-link text-xl font-bold text-primary-light outline-none transition duration-1000 hover:bg-primary-accent dark:bg-primary-light dark:text-secondary-dark dark:hover:bg-primary-accent",
  },
};

export const HeroSection = () => {
  return (
    <Section title="hero" className={styles.section}>
      <img src={HeroImageDark} alt="hero" className={styles.imgHero} />
      <Container className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.h1}>
            Making the Web a{" "}
            <span className="text-primary-accent">More Beautiful Place</span>,
            One Site at a Time.
          </h1>
          <p className={styles.p}>
            Full-stack developer turning ideas into innovative web apps with
            React. Check out my latest projects for examples of my expertise in
            web development and see how I can help bring your ideas to life.
          </p>
          <div className={styles.link.container}>
            <Link
              to="/projects"
              title="Projects Button Link"
              className={styles.link.button}
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
