import { motion } from "framer-motion";
import { MoonStart, MoonMiddle, MoonEnd } from "./HomepageIcons/Index";
import Image from "next/image";

import Hero from "./Hero";
import SectionHeader from "../SectionHeader/SectionHeader";

import HomepageSocialList from "../HomepageSocialList/HomepageSocialList";
import HomepageWorkList from "../HomepageWorkList/HomepageWorkList";
import HomepagePersonalList from "../HomepagePersonalList/HomepagePersonalList";

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

const Homepage = ({ personalProjects, workProjects }) => {
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
        <section className="mx-auto mb-11 md:mb-20">
          <SectionHeader
            title="My Feed"
            subtitle="Personal branding moon imagery"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-125 hover:rotate-45">
                <MoonStart />
              </div>
            }
          />
          <div className="pt-6 md:pt-11" />
          <HomepageSocialList />
          <a id="work" />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-2 md:mb-20">
          <SectionHeader
            title="Featured Projects"
            subtitle="Personal branding moon imagery"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-125 hover:rotate-90">
                <MoonMiddle />
              </div>
            }
          />
          <div className="pt-6 md:pt-11" />
          <HomepageWorkList projects={workProjects} />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-11 md:mb-20">
          <SectionHeader
            title="Notable Projects"
            subtitle="Personal branding moon imagery"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-125 hover:rotate-180">
                <MoonEnd />
              </div>
            }
          />
          <div className="pt-6 md:pt-11" />
          <HomepagePersonalList projects={personalProjects} />
        </section>
      </FadeIn>
    </>
  );
};

export default Homepage;
