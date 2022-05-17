import Image from "next/image";

import { motion } from "framer-motion";
// import { ExternalLink } from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import { MoonStars } from "../components/Homepage/HomepageIcons/Index";

const About = () => {
  return (
    <Layout>
      <div className="relative">
        <div className="absolute top-0 right-44">
          <motion.div
            className="hidden overflow-hidden rounded-md md:block md:w-40 md:h-48"
            initial={{ rotate: 10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", bounce: 0.25, mass: 2 }}
          >
            <Image
              src="/pictures/charlie2.png"
              alt="Personal photo of Keil Martin and Charlie"
              height="170"
              width="170"
            />
            <p className="text-xs text-syncWave">Charlie + Balm Beach</p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-4 mb-8 md:mb-20 md:mt-12 md:pt-16">
        {/* <MoonStars /> */}
        <div className="pb-8"></div>
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold text-primary dark:text-syncWave">
          About
        </h1>
        <h2 className="mb-4 text-lg antialiased font-semibold text-primary dark:text-tertiary">
          Early Career Stuff
        </h2>
        <div className="text-xl antialiased leading-relaxed tracking-tight text-secondary dark:text-white">
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
            deleniti qui ratione inventore voluptatem itaque tempore quam
            debitis, ad iusto!
          </p>
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
            deleniti qui ratione inventore voluptatem itaque tempore quam
            debitis, ad iusto!
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14" />
        <h2 className="mt-12 mb-4 text-lg font-semibold text-primary dark:text-tertiary">
          Where I&apos;ve Worked
        </h2>
        <div className="text-xl antialiased leading-relaxed tracking-tight text-secondary dark:text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
            deleniti qui ratione inventore voluptatem itaque tempore quam
            debitis, ad iusto! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eius, fugiat. Facere vitae magni non! Saepe ut
            cumque assumenda magni
          </p>
        </div>
        <hr className="mb-12 border-t-2 border-dotted mt-14" />
        <h2 className="mt-12 text-lg font-semibold text-secondary dark:text-white">
          View this sites Github{" "}
        </h2>
        <a
          className="w-full mt-3 btn-primary primary-grad sm:w-auto"
          href={`https://github.com/keilmart/portfolioV3`}
          target={"_blank"}
          rel={"noreferrer"}
        >
          View Github
        </a>
      </div>
    </Layout>
  );
};

export default About;
