import Container from "../container/container";
import Section from "../section/section";
import profilePic from "../../../public/images/hero-section-avatar.png";

export const HeroSection = () => {
  return (
    <Section className="max-h-75h">
      <Container className="">
        <div className="grid grid-cols-1 items-center justify-between gap-10 pt-0 sm:grid-cols-5">
          <div className="w-full md:col-span-2">
            <img
              src={profilePic}
              alt="Raccon Profile"
              className="h-auto w-full"
            />
          </div>
          <div className="w-full md:col-span-3">
            <h1 className="pb-10 pt-0 font-logo text-4xl leading-snug text-primary-accent">
              Making the Web a More Beautiful Place, One Site at a Time.
            </h1>
            <p className="font-body text-xl font-medium leading-relaxed text-secondary-dark dark:text-secondary-light">
              Full-stack developer turning ideas into innovative web apps with
              React. Check out my latest projects for examples of my expertise
              in web development and see how I can help bring your ideas to
              life.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
