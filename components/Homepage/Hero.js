import Link from "next/link";

import CodeBlock from "./CodeBlock";
import { Blob, GithubIcon, LinkedIcon } from "./HomepageIcons/Index";

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
      className="z-20 mx-auto rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:bg-darkModeDetail">
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
        <span className="inline-block antialiased uppercase text-md sm:text-lg text-tertiary dark:text-slate-200">
          Software Engineer
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
        <div className="absolute hidden md:block -rotate-12 -left-8 -top-blobY w-blobWidth">
          <Blob />
        </div>
        <AnimateBlock alt="Code block describing Keil Martin">
          <CodeBlock className="z-20" />
        </AnimateBlock>
      </div>
    </section>
  );
};

export default Hero;
