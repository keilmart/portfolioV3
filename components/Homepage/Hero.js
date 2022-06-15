import Link from "next/link";

import CodeBlock from "./CodeBlock";
import { GithubIcon, LinkedIcon } from "./HeroIcons/Index";
import { GlobeBlack, GlobePurple } from "../GlobalIcons/Index";

import { motion } from "framer-motion";

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
        <span className="inline-block antialiased text-md sm:text-lg text-tertiary dark:text-white">
          FRONT END DEVELOPER &amp; DOG DAD
        </span>
        <ul className="flex flex-row pt-1 pl-1 text-sm text-md text-syncWave sm:pt-2">
          <li className="pr-3 transition duration-300 ease-in-out hover:scale-110">
            <Link href="https://www.linkedin.com/in/keilmart/">
              <a target="_blank" rel="noreferrer">
                <LinkedIcon xmlns="http://www.w3.org/2000/svg" />
              </a>
            </Link>
          </li>

          <li className="transition duration-300 ease-in-out hover:scale-110">
            <Link href="https://github.com/keilmart">
              <a target="_blank" rel="noreferrer">
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
        <motion.div
          alt="Code block describing Keil Martin"
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
          whileHover={{ scale: 1.01 }}
          className="z-20 mx-auto bg-white border rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:bg-darkModeDetail dark:border-transparent"
        >
          <CodeBlock />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
