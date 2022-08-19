import Image from "next/image";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import { motion } from "framer-motion";

const RotateIn = ({ children }) => {
  return (
    <motion.div
      className="hidden overflow-hidden md:block md:w-40 md:h-40"
      initial={{ rotate: 10 }}
      animate={{ rotate: 0 }}
      transition={{ type: "spring", bounce: 0.25, mass: 2 }}
    >
      {children}
    </motion.div>
  );
};

const Resume = () => {
  return (
    <Layout>
      <SEO
        og="og-about.png"
        title="About"
        description="About Keil Martin the Developer"
      />
      <div className="relative">
        <div className="absolute top-0 lg:right-48 right-24">
          <RotateIn>
            <a
              href="https://www.instagram.com/charlieistheshiht/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/pictures/me-charlie.png"
                alt="Personal photo of Keil Martin and Charlie"
                height="170"
                width="170"
                className="rounded-full"
              />
            </a>
          </RotateIn>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 mb-10 text-xl antialiased leading-relaxed tracking-tight md:mb-20 md:mt-18 md:pt-20 text-tertiary">
        <div className="pb-8"></div>
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold font-montserrat text-primary dark:text-syncWave">
          Resume... Coming Soon.
        </h1>
        {/* <div>
          <p className="mb-4">
            Building creative tech solutions is my biggest passion, and coding
            has been a life-long hobby for me. I started like most others
            playing around in Myspace and the love of it has continued to grow
            over the years.
          </p>
          <p className="mb-4">
            As a child I was always taking apart my Playstations and laptops
            trying to figure out how everything worked and that need to tinker
            has never dissipated (although my game systems were never the same).
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-slate-300">
          My Education
        </h2>
        <div>
          <p>
            My journey started in the Electrical Engineering Technology program
            at Georgian College, I knew growing up I always wanted to work with
            technology, although I wasn&apos;t sure what aspect I wanted to
            pursue (hardware, software, robotics, etc.). It was in my third year
            that I started programming in my PLC class. I started by programming
            and connecting a Raspberry Pi to a live circuit. When I saw my code
            being translated to physical movements, I knew this was the right
            fit for me. From that day onward I knew I wanted to be a programmer.
          </p>
          <br />
          <p className="mb-4">
            In 2019, I decided to pursue a formal education in web development
            at Juno College of Technology (formerly HackerYou), where I
            completed the Web Development Immersive bootcamp. This gave me all
            the tools necessary to become a Front End developer.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-slate-300">
          Where I&apos;ve Worked
        </h2>
        <div>
          <p>
            I have 2.5 years of professional experience as a Front End
            Developer. My main focus has been component driven development.
            Primarily working in Next.js, React, Tailwind and ScSS. In my short
            time on this adventure, I&apos;ve already contributed to over a
            dozen large scale projects. I have taken on freelance opportunities
            where I have not only been the lead developer on these projects
            (teams of up to 3), but also managed all communications between
            myself and the clients. This includes drafting all the contracts and
            have been the main point of contact for any of their needs.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 text-2xl font-semibold text-secondary dark:text-slate-300">
          View this websites Github
        </h2>
        <a
          className="w-full mt-4 btn-primary primary-grad sm:w-auto"
          href="https://github.com/keilmart/portfolioV3`"
          target="_blank"
          rel="noreferrer"
        >
          View Github
        </a> */}
      </div>
    </Layout>
  );
};

export default Resume;
