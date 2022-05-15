import Image from "next/image";

import CodeBlock from "./CodeBlock";
import { GithubIcon, LinkedIcon, EmailIcon } from "./HeroIcons/Index";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex sm:mx-16 flex-col items-center justify-between mx-0 sm:flex-row mb-[75px] h-[525px] sm:mb-0 sm:h-[500px]">
      <div>
        <span className="inline-block text-xl text-tertiary md:text-2xl">
          Hello, I&apos;m
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight lg:leading-titles md:text-[56px] text-black dark:text-syncWave">
          Keil Martin
        </h1>
        <span className="inline-block text-lg text-tertiary dark:text-white">
          FRONT END DEVELOPER
        </span>
        <ul className="flex flex-row">
          <li className="rx-2 text-syncWave">
            <LinkedIcon />
          </li>
          <li className="mx-2 text-syncWave">
            <EmailIcon />
          </li>
          <li className="lx-2 text-syncWave">
            <GithubIcon />
          </li>
        </ul>
      </div>
      <div>
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
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 20 }}
          drag
          whileTap={{ rotate: 20, scale: 0.95 }}
          whileHover={{ scale: 1.01 }}
          className="z-20 mx-auto bg-white border rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail"
        >
          <CodeBlock />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
