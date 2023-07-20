import Container from "../container/container";
import Section from "../section/section";
import profilePic from "../../../public/images/Raccoon_1-min.png";

const styles = {
  section:
    "flex  items-center bg-secondary-light py-10 dark:bg-secondary-dark md:py-16",
  container: "flex flex-col gap-10 md:flex-row 2xl:gap-24",
  h1: "mb-6 w-full font-logo text-4xl font-bold leading-snug text-primary-dark dark:text-primary-light md:mb-10",
  p: "mb-4 w-full font-body text-xl font-medium leading-relaxed text-secondary-dark dark:text-secondary-light",
  imgContainer:
    "mb-6 hidden justify-center align-middle md:flex md:justify-start lg:w-1/3",
  imgRaccoon: "h-auto self-start",
};

export const AboutSection = () => {
  return (
    <Section title="about" className={styles.section}>
      <Container className={styles.container}>
        <div className="w-full lg:w-2/3">
          <h1 className={styles.h1}>
            About.<span className="text-primary-accent">Me</span>
          </h1>
          <p className={styles.p}>
            I am thrilled to bring my diverse background and relentless pursuit
            of knowledge to my work. With a robust foundation in both print
            production and software development, I possess a unique
            understanding of the interplay between design and technology.
          </p>
          <p className={styles.p}>
            Currently, I am focused on mastering cutting-edge technologies such
            as Next.js, HTML, CSS, GIT, JIRA and more, while also staying
            up-to-date with the latest trends in my field. In addition, I am
            deeply passionate about testing and plan to enhance my skills in
            writing tests with Javascript and TDD in 2023.
          </p>
          <p className={styles.p}>
            In my leisure time, I enjoy traveling with my loved ones and seize
            every opportunity to learn something new or sharpen my skills.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            src={profilePic}
            alt="Raccon Profile"
            className={styles.imgRaccoon}
          />
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
