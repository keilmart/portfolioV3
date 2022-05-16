import Image from "next/image";
import Link from "next/link";

import CodeBlock from "./CodeBlock";
import { GithubIcon, LinkedIcon, EmailIcon } from "./HeroIcons/Index";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-evenly md:justify-between mx-0 mb-[75px] h-[525px] md:flex-row md:mx-16 md:mb-2 md:h-[500px]">
      <div>
        <span className="inline-block text-xl antialiased text-tertiary md:text-2xl">
          Hello, I&apos;m
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight lg:leading-titles md:text-[56px] text-primary dark:text-syncWave">
          Keil Martin
        </h1>
        <span className="inline-block text-lg antialiased text-tertiary dark:text-white">
          FRONT END DEVELOPER &amp; DOG DAD
        </span>
        <ul className="flex flex-row pl-1 mt-3">
          <li className="pr-2 text-sm text-syncWave">
            <Link
              href="https://www.linkedin.com/in/keilmart/"
              target="_blank"
              rel="noreferrer"
            >
              <a>
                <LinkedIcon />
              </a>
            </Link>
          </li>

          <li className="pl-2 text-sm text-syncWave">
            <Link
              href="https://github.com/keilmart"
              target="_blank"
              rel="noreferrer"
            >
              <a>
                <GithubIcon />
              </a>
            </Link>
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
