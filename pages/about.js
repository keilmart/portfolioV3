import Image from "next/image";

import Layout from "../components/Layout/Layout";
import Emoji from "../components/Emoji/Emoji";
import SEO from "../components/SEO/SEO";

import { TriSquareIcon } from "../components/Homepage/HomepageIcons/Index";

import { motion } from "framer-motion";

const RotateIn = ({ children }) => {
  return (
    <motion.div
      className="hidden overflow-hidden md:block md:w-40 md:h-40"
      initial={{ rotate: 10 }}
      animate={{ rotate: 0 }}
      transition={{ type: "spring", bounce: 0.25, mass: 2 }}>
      {children}
    </motion.div>
  );
};

const ExternalLink = ({ href, title }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center mt-1 text-sm border-b border-gray-700 text-secondary hover:text-syncWave hover:border-syncWave hover:bg-gray-100 dark:hover:bg-transparent dark:text-slate-200 dark:border-slate-200 dark:hover:text-syncWave dark:hover:border-syncWave">
      <span className="mr-1">{title}</span>
      <span className="hidden mb-1 leading-snug sm:block">↗</span>
    </a>
  );
};

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
          <RotateIn>
            <a
              href="https://www.instagram.com/charlieistheshiht/"
              target="_blank"
              rel="noreferrer">
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
      <div className="max-w-3xl mx-auto my-8 text-xl antialiased leading-relaxed tracking-tight md:mb-20 md:mt-18 md:pt-10 text-tertiary">
        <div className="pb-8"></div>
        <TriSquareIcon />
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold font-montserrat text-primary dark:text-syncWave">
          About Me
        </h1>
        <div>
          <p className="mb-4">
            I'm all about creating awesome tech solutions - it's not just my job, it's my
            passion. Ever since my teenage years, when I was playing around with Myspace,
            coding has been a lifelong love affair for me. I remember taking apart my
            Playstations and laptops as a kid, just to see how they worked. That tinkering
            bug never left me (although I can't say the same for my poor game systems!)
            <Emoji symbol="🤯" label="Mind blown" />
            &nbsp;
            <Emoji symbol="💥" label="Explosion" />
            &nbsp;
            <Emoji symbol="🎮" label="Game system" />
            ).
          </p>
        </div>

        <ul className="flex items-baseline space-x-4">
          <p className="text-sm dark:text-slate-200">Find me on</p>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/keilmart/" title="LinkedIn" />
          </li>
          <li>
            <ExternalLink href="https://github.com/keilmart" title="Github" />
          </li>
          <li>
            <ExternalLink href="mailto:keilwmartin@gmail.com" title="Email" />
          </li>
        </ul>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-slate-200">
          My Education
        </h2>
        <div>
          <p>
            My journey started in the Electrical Engineering Technology program at
            Georgian College, I knew growing up I always wanted to work with technology,
            although I wasn&apos;t sure what aspect I wanted to pursue (hardware,
            software, robotics, etc.). It was in my third year that I started programming
            in my PLC class. I started by programming and connecting a Raspberry Pi to a
            live circuit. When I saw my code being translated to physical movements, I
            knew this was the right fit for me. From that day onward I knew I wanted to be
            a programmer.
          </p>
          <br />
          <p className="mb-4">
            In 2019, I decided to pursue a formal education in web development at Juno
            College of Technology (formerly HackerYou), where I completed the Web
            Development Immersive bootcamp. This gave me all the tools necessary to become
            a Front End developer.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-slate-200">
          Where I&apos;ve Worked
        </h2>
        <div>
          <p>
            I have 2.5 years of professional experience as a Front End Developer. My main
            focus has been component driven development. Primarily working in Next.js,
            React, Tailwind and ScSS. In my short time on this adventure, I&apos;ve
            already contributed to over a dozen large scale projects. I have taken on
            freelance opportunities where I have not only been the lead developer on these
            projects (teams of up to 3), but also managed all communications between
            myself and the clients. This includes drafting all the contracts and have been
            the main point of contact for any of their needs.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 text-2xl font-semibold text-secondary dark:text-slate-200">
          Resume & Portfolio Github
        </h2>
        <a
          className="mt-4 mr-4 btn-primary primary-grad"
          href="https://firebasestorage.googleapis.com/v0/b/portfoliov3-6fb9a.appspot.com/o/project-photos%2FKeil%20Martin%20-%20Resume.pdf?alt=media&token=980d9d3b-e8a2-4f13-a6c9-7287bab07610"
          target="_blank"
          rel="noreferrer">
          View Resume
        </a>
        <a
          className="mt-4 btn-primary primary-grad"
          href="https://github.com/keilmart/portfolioV3"
          target="_blank"
          rel="noreferrer">
          View Github
        </a>
      </div>
    </Layout>
  );
};

export default About;
