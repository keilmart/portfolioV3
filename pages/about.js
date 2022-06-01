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
        <div className="absolute top-1 lg:right-48 right-24">
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
      <div className="max-w-3xl mx-auto mt-4 mb-8 md:mb-20 md:mt-12 md:pt-16">
        <div className="pb-8"></div>
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold font-montserrat text-primary dark:text-syncWave">
          About
        </h1>
        <h2 className="mb-4 text-lg antialiased font-semibold text-primary dark:text-tertiary">
          Early Career Stuff
        </h2>
        <div className="text-lg antialiased leading-relaxed tracking-tight text-secondary dark:text-white">
          <p className="mb-4">
            As a graduate from the Electrical Engineering Technology program at
            Georgian College, I knew I always wanted to work with technology, I
            just wasn&apos;t sure what part fully grabbed my interest. I took
            some courses in software and hardware and knew this was the right
            fit for me. I started playing with a Raspberry Pi and python for a
            OACETT technical project, which I received in the top donors and
            finished in the top 10% of my graduating class.
          </p>
          <p className="mb-4">
            I then attended a front end developer bootcamp at Juno College of
            technology, where I first started learning everything I needed to
            know to become a front end developer.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-lg font-semibold text-primary dark:text-tertiary">
          Where I&apos;ve Worked
        </h2>
        <div className="text-lg antialiased leading-relaxed tracking-tight text-secondary dark:text-white">
          <p>
            I have just over 2 year&apos;s of experience as a Front End
            Developer focusing mainly in component driven development, mainly
            working in Next.js, React, Tailwind and Scss. In my short time on
            this adventure, I&apos;ve already contributed to over a dozen
            projects and have taken a few independent ventures where I not only
            developed these projects, but also managed all communication between
            me and the clients as well as provided all contracts and adhered to
            the outlines timelines in the contracts.
          </p>
        </div>
        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 text-lg font-semibold text-secondary dark:text-white">
          View this sites Github{" "}
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
