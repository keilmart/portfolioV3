import { Blob } from "./HomepageIcons/Index";
import CodeBlock from "./CodeBlock";
import AnimateBlock from "../GlobalComponents/GlobalAnimations/AnimateBlock";

const Hero = () => {
  return (
    <section className="z-10 flex flex-col items-center mb-20 justify-evenly md:justify-between h-104 md:flex-row md:mb-2 md:h-100">
      <div className=" md:w-1/2">
        <span className="inline-block mt-2 mb-3 text-xl antialiased leading-4 text-tertiary sm:text-2xl">
          Hello, I&apos;m Keil —
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight font-montserrat lg:text-5xl text-primary dark:text-syncWave leading-titles">
          I&apos;m a software dev with front-end
          <span className="effect-shine"> superpowers</span>
        </h1>
        {/* <ul className="flex flex-row pl-1 mt-3.5 text-sm text-md text-syncWave">
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
        </ul> */}
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
