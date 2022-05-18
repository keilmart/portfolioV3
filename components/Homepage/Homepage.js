import { motion } from "framer-motion";
import { MoonStart, MoonMiddle, MoonEnd } from "./HomepageIcons/Index";
import Image from "next/image";

import Hero from "./Hero";
import SectionHeader from "../SectionHeader/SectionHeader";

import HomepageSkillsList from "../HomepageSkillsList/HomepageSkillsList";
import HomepageFeaturedList from "../HomepageFeaturedList/HomepageFeaturedList";
import HomepageNotableList from "../HomepageNotableList/HomepageNotableList";

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -7 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1.3 },
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

const Homepage = ({ notableProjects, featuredProjects }) => {
  return (
    <>
      <FadeIn>
        <Hero />
        {/* <Image
          src="/pictures/backdrop.svg"
          alt="Picture of a decorative vector"
          layout="fill"
          className="absolute right-0 top-[50px] -z-10 w-5/12"
        /> */}
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-11 md:mb-16 lg:mb-20">
          <SectionHeader
            title="My Skills"
            subtitle="Personal branding moon imagery"
            icon={
              // <div className="transition duration-1000 ease-in-out hover:scale-125 hover:rotate-45">
              <MoonStart xmlns="http://www.w3.org/2000/svg" />
              // </div>
            }
          />
          <div className="pt-6 md:pt-11" />
          <HomepageSkillsList />
          <a id="work" />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-11 md:mb-20">
          <SectionHeader
            title="Featured Projects"
            subtitle="Personal branding moon imagery"
            icon={
              // <div className="transition duration-1000 ease-in-out hover:scale-125 hover:rotate-90">
              <MoonMiddle xmlns="http://www.w3.org/2000/svg" />
              // </div>
            }
          />
          <div className="pt-6 md:pt-11" />
          <HomepageFeaturedList projects={featuredProjects} />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-11 md:mb-20">
          <SectionHeader
            title="Notable Projects"
            subtitle="Personal branding moon imagery"
            icon={
              // <div className="transition duration-1000 ease-in-out hover:scale-125 hover:rotate-180">
              <MoonEnd xmlns="http://www.w3.org/2000/svg" />
              // </div>
            }
          />
          <div className="pt-6 md:pt-11" />
          <HomepageNotableList projects={notableProjects} />
        </section>
      </FadeIn>
    </>
  );
};

export default Homepage;
