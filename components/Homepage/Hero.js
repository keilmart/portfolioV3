import Link from "next/link";

import CodeBlock from "./CodeBlock";
import { Blob, GithubIcon, LinkedIcon, CalenderIcon } from "./HomepageIcons/Index";

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
      <div className="md:w-1/2">
        <span className="inline-block mt-2 mb-3 text-xl antialiased leading-4 text-tertiary sm:text-2xl">
          Hello, I&apos;m Keil —
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight font-montserrat sm:text-7xl text-primary dark:text-syncWave leading-titles">
          {/* <h1 className="text-4xl antialiased font-bold tracking-tight font-montserrat sm:text-5xl text-primary dark:text-syncWave leading-titles"> */}
          {/* I&apos;m a software developer & project management guru */}
          TripleByte
        </h1>
        {/* <span className="inline-block antialiased uppercase text-md sm:text-lg text-tertiary dark:text-slate-200">
          Software Developer
        </span> */}
        <ul className="flex flex-row pl-1 mt-3.5 text-sm text-md text-syncWave">
          <li className="pr-3 transition duration-500 ease-in-out hover:scale-[1.2]">
            <Link href="https://www.linkedin.com/in/keilmart/">
              <a target="_blank" rel="noreferrer" aria-label="Linkedin Logo">
                <LinkedIcon xmlns="http://www.w3.org/2000/svg" />
              </a>
            </Link>
          </li>
          <li className="pr-3 transition duration-500 ease-in-out hover:scale-[1.2]">
            <Link href="https://github.com/keilmart">
              <a target="_blank" rel="noreferrer" aria-label="Github Logo">
                <GithubIcon xmlns="http://www.w3.org/2000/svg" />
              </a>
            </Link>
          </li>
          <li className="-mt-[1px] transition duration-500 ease-in-out hover:scale-[1.2]">
            <Link href="https://calendly.com/keilmart/15min">
              <a target="_blank" rel="noreferrer" aria-label="Github Logo">
                <CalenderIcon />
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
