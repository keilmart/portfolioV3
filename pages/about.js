import { motion } from "framer-motion";
import Image from "next/image";

import { ExternalLink } from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
// import SectionWorkList from "../components/SectionWorkList";
// import SEO from "../components/SEO";
import { MoonStars } from "../components/HomepageIcons/Index";

const About = () => {
  return (
    <Layout>
      {/* <SEO
        og="og-about.png"
        title="About"
        description="About the life and times of Tyler"
      /> */}
      <div className="relative">
        {/* <Image
          src="/pictures/blobby.jpg"
          alt="MOCKUP"
          className="absolute right-0 -bottom-32 -z-10"
        /> */}
        <div className="absolute top-0 right-44">
          <motion.div
            className="hidden overflow-hidden rounded-md md:block md:w-40 md:h-40"
            initial={{ rotate: 10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", bounce: 0.25, mass: 2 }}
          >
            <Image
              src="/pictures/self.jpg"
              alt="MOCKUP11"
              height="160"
              width="160"
            />
          </motion.div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-4 mb-20 md:mt-12 md:pt-16">
        <MoonStars />
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold text-primary">
          About
        </h1>
        <p className="mb-4 text-xl antialiased leading-relaxed tracking-tight text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
          deleniti qui ratione inventore voluptatem itaque tempore quam debitis,
          ad iusto!
        </p>
        <p className="mb-4 text-xl antialiased leading-relaxed tracking-tight text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
          deleniti qui ratione inventore voluptatem itaque tempore quam debitis,
          ad iusto!
        </p>

        <hr className="mb-12 border-t-2 border-dotted mt-14" />
        <h2 className="mt-12 text-lg font-semibold">Where I&apos;ve Worked</h2>
        <h2 className="mb-4 text-lg font-semibold">Early Career Stuff</h2>
        <p className="mb-4 font-serif text-xl antialiased leading-relaxed -tracking-[.005em] text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
          deleniti qui ratione inventore voluptatem itaque tempore quam debitis,
          ad iusto! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eius, fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
        </p>
      </div>
    </Layout>
  );
};

export default About;
