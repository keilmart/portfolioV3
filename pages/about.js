import { motion } from "framer-motion";
import Image from "next/image";

// import { ExternalLink } from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import { MoonStars } from "../components/HomepageIcons/Index";

const About = ({ personalProjects }) => {
  return (
    <Layout>
      <div className="relative">
        {/* <Image
          src="/pictures/vector.png"
          alt="Picture of a decorative vector"
          width={668}
          height={330}
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
              alt="Personal photo of Keil Martin"
              height="170"
              width="170"
            />
          </motion.div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-4 mb-20 md:mt-12 md:pt-16">
        <MoonStars />
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold text-primary">
          About
        </h1>
        <h2 className="mb-4 text-lg font-semibold">Early Career Stuff</h2>
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
        <h2 className="mt-12 mb-4 text-lg font-semibold">
          Where I&apos;ve Worked
        </h2>
        <p className="text-xl antialiased leading-relaxed tracking-tight text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
          deleniti qui ratione inventore voluptatem itaque tempore quam debitis,
          ad iusto! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eius, fugiat. Facere vitae magni non! Saepe ut cumque assumenda magni
        </p>
        <hr className="mb-12 border-t-2 border-dotted mt-14" />
        <h2 className="mt-12 text-lg font-semibold">View this sites Github </h2>
        <a
          className="w-full mt-6 btn-light sm:w-auto"
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
