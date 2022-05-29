import Hero from "./Hero";
import SectionHeader from "../SectionHeader/SectionHeader";

import HomepageSkillsList from "../HomepageSkillsList/HomepageSkillsList";
import HomepageFeaturedList from "../HomepageFeaturedList/HomepageFeaturedList";
import HomepageNotableList from "../HomepageNotableList/HomepageNotableList";

import { SkillsIcon, FeaturedIcon, NotableIcon } from "./HomepageIcons/Index";
import { motion } from "framer-motion";

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
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-11 md:mb-16 lg:mb-20">
          <SectionHeader
            title="My Skills"
            subtitle="Personal branding moon imagery"
            icon={<SkillsIcon xmlns="http://www.w3.org/2000/svg" />}
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
            icon={<FeaturedIcon xmlns="http://www.w3.org/2000/svg" />}
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
            icon={<NotableIcon xmlns="http://www.w3.org/2000/svg" />}
          />
          <div className="pt-6 md:pt-11" />
          <HomepageNotableList projects={notableProjects} />
        </section>
      </FadeIn>
    </>
  );
};

export default Homepage;
