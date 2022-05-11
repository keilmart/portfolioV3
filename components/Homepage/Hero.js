import Image from "next/image";

import CodeBlock from "./CodeBlock";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    // <section className="relative grid grid-cols-1 px-0 pb-8 mb-0 overflow-hidden md:px-12 md:pb-6 lg:overflow-visible lg:pl-12 lg:pr-0 rounded-b-3xl lg:grid-cols-2 lg:gap-4 lg:mb-0 lg:-mx-12">
    //   <div className="order-2 py-4 lg:py-32 lg:order-1">
    //     <span className="inline-block mt-4 mb-2 text-xl md:mb-3 md:text-2xl text-tertiary">
    //       Keil Martin —
    //     </span>
    //     <h1 className="text-4xl antialiased font-bold tracking-tight lg:leading-titles md:text-[56px] text-black dark:text-syncWave">
    //       Front end developer from Toronto
    //     </h1>
    //   </div>
    //   <dir className="relative z-10 order-1 h-56 lg:order-2">
    //     <div className="inset-y-0 -mt-36 lg:-mt-40 lg:-mr-20">
    //       <motion.div
    //         alt="Code block describing Keil Martin"
    //         initial={{
    //           opacity: 0,
    //           rotate: 17,
    //         }}
    //         animate={{
    //           opacity: 1,
    //           rotate: 0,
    //           transition: { type: "spring", bounce: 0.35, mass: 2 },
    //         }}
    //         transition={{ type: "spring" }}
    //         dragConstraints={{ left: -50, right: 50, top: -50, bottom: 20 }}
    //         drag
    //         whileTap={{ rotate: 20, scale: 0.95 }}
    //         whileHover={{ scale: 1.02 }}
    //         className="absolute z-20 mx-auto bg-white border rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover left-1/3 -top-60 lg:left-auto lg:right-32 lg:top-20 lg:w-auto w-96 md:w-auto"
    //       >
    //         <CodeBlock />
    //       </motion.div>
    //     </div>
    //   </dir>
    // </section>
    <section className="flex flex-col items-center justify-between sm:flex-row mb-[100px] h-[400px]">
      <div className="">
        <span className="inline-block mt-4 mb-2 text-xl md:mb-3 md:text-2xl text-tertiary">
          Keil Martin —
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight lg:leading-titles md:text-[56px] text-black dark:text-syncWave">
          Keil Martin
        </h1>
      </div>
      <div className="">
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
          whileHover={{ scale: 1.02 }}
          className="z-20 mx-auto bg-white border rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0"
        >
          <CodeBlock />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
