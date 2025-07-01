import SEO from "../components/SEO/SEO";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import ExternalLink from "../components/GlobalComponents/ExternalLink";
import RotateIn from "../components/GlobalComponents/GlobalAnimations/RotateIn";
import { TriSquareIcon } from "../components/Homepage/HomepageIcons/Index";

const About = () => {
  return (
    <Layout>
      <SEO
        og="og-about.png"
        title="About"
        description="About Keil Martin the Developer"
      />
      <div className="relative">
        <div className="absolute top-0 lg:right-48 right-24">
          <RotateIn>
            <Image
              src="/pictures/profile.JPG"
              alt="Personal photo of Keil Martin"
              height="170"
              width="170"
              className="rounded-full"
            />
          </RotateIn>
        </div>
      </div>
      <div className="max-w-3xl mx-auto my-8 text-xl antialiased leading-relaxed tracking-tight md:mb-20 md:mt-18 md:pt-10 text-tertiary">
        <div className="pb-8"></div>
        <TriSquareIcon />
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold font-montserrat text-primary dark:text-syncWave">
          About Me
        </h1>
        <div>
          <p className="mb-4">
            Technology has always been more than just a business for me—it&apos;s a core
            interest that began early in life. My passion for development started in my
            teen years, experimenting with code on platforms like Myspace and gradually
            evolving into a deep fascination with how digital systems function. Whether it
            was disassembling hardware like PlayStations and laptops or building
            interfaces from scratch, I&apos;ve always been driven by a strong curiosity
            and a desire to understand and improve the tools we use every day. That
            mindset continues to shape my approach to software development today.
          </p>
        </div>

        <ul className="flex items-baseline space-x-4">
          <p className="text-sm dark:text-slate-200">Find me on</p>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/keilmart/" title="LinkedIn" />
          </li>
          <li>
            <ExternalLink href="https://github.com/keilmart" title="Github" />
          </li>
          <li>
            <ExternalLink href="mailto:keilwmartin@gmail.com" title="Email" />
          </li>
        </ul>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-slate-200">
          My Education
        </h2>
        <div>
          <p>
            My academic path began in the Electrical Engineering Technology program at
            Georgian College, where a long-standing interest in technology started to take
            focused shape. Growing up, I was drawn to the vast potential of tech—whether
            in hardware, software, or robotics—but it wasn&apos;t until my third year,
            during a PLC course, that my direction became clear. Programming a Raspberry
            Pi to interact with live circuits provided a hands-on understanding of how
            code could drive real-world systems. That experience solidified my decision to
            pursue software development.
          </p>
          <br />
          <p className="mb-4">
            In 2019, I advanced that goal by completing the Front-End Development
            Immersive bootcamp at Juno College of Technology (formerly HackerYou). The
            program provided a strong foundation in modern web development practices and
            tools, setting the stage for a focused and disciplined transition into the
            field of software engineering.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-slate-200">
          Where I&apos;ve Worked
        </h2>
        <div>
          <p className="mb-4">
            Over the past five years, I have built a strong foundation as a Front-End
            Developer, specializing in component-driven development using Next.js, React,
            Tailwind CSS, and ScSS. My experience spans over two dozen large-scale
            projects, where I&apos;ve consistently delivered high-quality solutions in
            fast-paced, deadline-driven environments.
          </p>
          <p>
            In addition to hands-on development, I have led teams of up to four
            developers, taking on dual roles as both lead developer and technical project
            manager. This included overseeing project execution, managing client
            relationships, drafting contracts, and serving as the main point of contact
            throughout the project lifecycle.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 text-2xl font-semibold text-secondary dark:text-slate-200">
          Linkedin & Github
        </h2>
        <a
          className="mt-4 mr-4 btn-primary primary-grad"
          href="https://www.linkedin.com/in/keilmart/"
          target="_blank"
          rel="noreferrer">
          View Linkedin
        </a>
        <a
          className="mt-4 btn-primary primary-grad"
          href="https://github.com/keilmart"
          target="_blank"
          rel="noreferrer">
          View Github
        </a>
      </div>
    </Layout>
  );
};

export default About;
