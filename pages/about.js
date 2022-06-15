import Image from "next/image";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <SEO
        og="og-about.png"
        title="About"
        description="About Keil Martin the Developer"
      />
      <div className="relative">
        <div className="absolute top-0 lg:right-48 right-24">
          <motion.div
            className="hidden overflow-hidden md:block md:w-40 md:h-40"
            initial={{ rotate: 10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", bounce: 0.25, mass: 2 }}
          >
            <a
              href="https://www.instagram.com/charlieistheshiht/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/pictures/charlie2.png"
                alt="Personal photo of Keil Martin and Charlie"
                height="170"
                width="170"
                className="rounded-full"
              />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 mb-10 text-xl antialiased leading-relaxed tracking-tight md:mb-20 md:mt-18 md:pt-20 text-secondary dark:text-white">
        <div className="pb-8"></div>
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold font-montserrat text-primary dark:text-syncWave">
          About
        </h1>
        <div>
          <p className="mb-4">
            Building creative tech solutions is my biggest passion, and coding
            has been a life-long hobby for me. I started like most others
            playing around in myspace and the love of it has continued to grow
            over the years. As a child I was always taking apart my Playstations
            and laptops trying to figure out how everything worked and that need
            to tinker has never dissipated.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-tertiary">
          My Education
        </h2>
        <div>
          <p>
            My journey started in the Electrical Engineering Technology program
            at Georgian College, I knew growing up I always wanted to work with
            technology. Although I wasn&apos;t sure what aspect I wanted to
            pursue (hardware, software, robotics, etc.) I took the leap and
            enrolled. During my third year, I entered my PLC class and started
            programming a and wiring a Raspberry Pi, I knew this was the right
            fit for me. From that day onward I knew I wanted to be a programmer.
          </p>
          <br />
          <p className="mb-4">
            In 2019, I decided to pursue a formal education in web development
            at Juno College of Technology (formerly HackerYou), where I
            completed the Web Development Immersive. This gave me all the tools
            necsasary
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-tertiary">
          Where I&apos;ve Worked
        </h2>
        <div>
          <p>
            I have just over 2 year&apos;s of experience as a Front End
            Developer, my main focus has been component driven development,
            primarily working in Next.js, React, Tailwind and ScSS. In my short
            time on this adventure, I&apos;ve already contributed to over a
            dozen large scale projects. I have taken on freelance opportunities
            where I have not only been the lead developer on these projects
            (teams of up to 3), but also managed all communications between
            myself and the clients, drafted all the contracts and been the point
            of contact for any of their needs.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 text-2xl font-semibold text-secondary dark:text-white">
          View this websites Github
        </h2>
        <a
          className="w-full mt-3 btn-primary primary-grad sm:w-auto"
          href="https://github.com/keilmart/portfolioV3`"
          target="_blank"
          rel="noreferrer"
        >
          View Github
        </a>
      </div>
    </Layout>
  );
};

export default About;
