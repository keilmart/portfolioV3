import { motion } from "framer-motion";
import { MoonStart, MoonMiddle, MoonEnd } from "../HomepageIcons/Index";

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
      </FadeIn>

      {/* <FadeIn>
        <section className="max-w-3xl px-0 py-6 mx-auto mt-6 mb-12 text-center bg-gray-100 border-2 border-gray-200 border-dotted rounded-lg sm:px-5 md:mb-20 md:mt-28 md:py-12 md:px-14">
          <h2 className="px-5 text-xl font-semibold md:text-2xl text-primary">
            Some of the skills you can find in my toolbox
          </h2>
          <div className="flex justify-center mt-6">
            <div className="flex flex-wrap justify-center max-w-sm text-sm sm:text-base sm:max-w-lg">
              <Capsule
                text="React"
                className="m-1 hover:rotate-1"
                icon={<BeakerIcon className="w-5 h-6 text-lime-600" />}
              />
              <Capsule
                text="Next.js"
                className="m-1 hover:-rotate-1"
                icon={<FastForwardIcon className="w-5 h-6 text-red-600" />}
              />
              <Capsule
                text="Gatsby"
                className="m-1 hover:rotate-1"
                icon={<SparklesIcon className="w-5 h-6 text-blue-300" />}
              />
              <Capsule
                text="JavaScript"
                className="m-1 hover:-rotate-1"
                icon={<CodeIcon className="w-5 h-6 text-purple-600" />}
              />
              <Capsule
                text="Firebase"
                className="m-1 hover:-rotate-1"
                icon={<CloudDownloadIcon className="w-5 h-6 text-indigo-500" />}
              />
              <Capsule
                text="Tailwind"
                className="m-1 hover:-rotate-1"
                icon={<PuzzleIcon className="w-5 h-6 text-yellow-400" />}
              />
              <Capsule
                text="Figma"
                className="m-1 hover:rotate-1"
                icon={<PencilIcon className="w-5 h-6 text-pink-500" />}
              />
            </div>
          </div>
        </section>
      </FadeIn> */}

      <FadeIn>
        <section className="mx-auto mb-4 md:mb-15">
          <SectionHeader
            title="My Feed"
            subtitle="Personal branding moon imagery"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-125 hover:rotate-45">
                <MoonStart />
              </div>
            }
          />
          <div className="pt-12 md:pt-16" />
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
          <div className="pt-6 md:pt-12" />
          <HomepageWorkList projects={workProjects} />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mb-11 md:mb-20">
          <SectionHeader
            title="Noteworthy Projects"
            subtitle="Personal branding moon imagery"
            icon={
              <div className="transition duration-1000 ease-in-out hover:scale-125 hover:rotate-180">
                <MoonEnd />
              </div>
            }
          />
          <div className="pt-6 md:pt-12" />
          <HomepagePersonalList projects={personalProjects} />
        </section>
      </FadeIn>
    </>
  );
};

export default Homepage;
