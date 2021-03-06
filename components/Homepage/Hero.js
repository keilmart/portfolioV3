import Link from "next/link";

import CodeBlock from "./CodeBlock";
import { GithubIcon, LinkedIcon } from "./HeroIcons/Index";
import { GlobeBlack, GlobePurple } from "./GlobeIcons/Index";

import { motion } from "framer-motion";

const AnimateBlock = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotate: 17,
      }}
      animate={{
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", bounce: 0.35, mass: 2 },
      }}
      transition={{ type: "spring" }}
      whileTap={{ rotate: 20, scale: 0.95 }}
      whileHover={{ scale: 1.025 }}
      className="z-20 mx-auto bg-white border rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:bg-darkModeDetail dark:border-transparent"
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="z-10 flex flex-col items-center mb-20 justify-evenly md:justify-between h-104 md:flex-row md:mb-2 md:h-100">
      <div>
        <span className="inline-block mb-1 text-xl antialiased leading-4 sm:mb-0 text-tertiary sm:text-2xl">
          Hello, I&apos;m
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight leading-titles font-montserrat sm:leading-titles sm:text-6xl text-primary dark:text-syncWave">
          Keil Martin
        </h1>
        <span className="inline-block antialiased uppercase text-md sm:text-lg text-tertiary dark:text-white">
          front end developer &amp; dog dad
        </span>
        <ul className="flex flex-row pt-1 pl-1 text-sm text-md text-syncWave sm:pt-2">
          <li className="pr-3 transition duration-500 ease-in-out hover:scale-110">
            <Link href="https://www.linkedin.com/in/keilmart/">
              <a target="_blank" rel="noreferrer" aria-label="Linkedin Logo">
                <LinkedIcon xmlns="http://www.w3.org/2000/svg" />
              </a>
            </Link>
          </li>
          <li className="transition duration-500 ease-in-out hover:scale-110">
            <Link href="https://github.com/keilmart">
              <a target="_blank" rel="noreferrer" aria-label="Github Logo">
                <GithubIcon xmlns="http://www.w3.org/2000/svg" />
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="relative">
        <div className="absolute hidden md:block -top-[18rem] -left-[14rem]  dark:hidden rotate-6">
          <GlobeBlack />
        </div>
        <div className="absolute hidden -top-[18rem] -left-[14rem] md:dark:block rotate-6">
          <GlobePurple />
        </div>
        <AnimateBlock alt="Code block describing Keil Martin">
          <CodeBlock />
        </AnimateBlock>
      </div>
    </section>
  );
};

export default Hero;
