import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative grid grid-cols-1 px-0 pb-6 mb-0 overflow-hidden md:px-12 md:pb-6 lg:overflow-visible lg:pl-12 lg:pr-0 rounded-b-3xl lg:grid-cols-2 lg:gap-4 lg:mb-0 lg:-mx-12">
      <div className="order-2 py-4 lg:py-32 lg:order-1">
        <span className="inline-block mt-4 mb-2 text-xl md:mb-3 md:text-2xl text-tertiary">
          Keil Martin —
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight lg:leading-titles md:text-[56px]">
          Front end developer from Toronto
          {/* <span className="syncWave">Toronto</span> */}
        </h1>
      </div>

      <div className="relative order-1 -z-10 lg:order-2">
        <div className="inset-y-0 mt-2 lg:-mr-20">
          {/* <div className="inset-y-0 -mt-36 lg:-mt-40 lg:-mr-20"> */}
          <motion.img
            src="/pictures/vector.png"
            alt="Header illustration, a vector illustration"
            // className="mx-auto w-96 md:w-auto"
            className="mx-auto w-96 md:w-[1300px]"
            initial={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 1.5 }}
            animate={{ opacity: 1 }}
          />
        </div>
      </div>
      <motion.img
        src="/pictures/device2.svg"
        alt="Main image of abstract device"
        initial={{
          opacity: 0,
          rotate: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 15,
          transition: { type: "spring", bounce: 0.35, mass: 2 },
        }}
        transition={{ type: "spring" }}
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 20 }}
        drag
        whileTap={{ rotate: 20, scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        className="absolute max-w-[220px] bg-white border rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover w-60 left-1/3 -top-60 md:w-80 lg:left-auto lg:right-32 lg:top-20 lg:w-auto"
      />
    </section>
  );
};

export default Hero;
