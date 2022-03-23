import {
  BeakerIcon,
  BriefcaseIcon,
  FilterIcon,
  CodeIcon,
  SearchCircleIcon,
} from "@heroicons/react/solid";

import Hero from "./Hero";
import Capsule from "../Capsule/Capsule";

const Homepage = () => {
  return (
    <>
      <Hero />

      {/* <FadeIn> */}
      <section className="max-w-3xl px-5 py-6 mx-auto mt-6 mb-10 text-center bg-white bg-gray-100 border-2 border-gray-200 border-dotted rounded-lg md:mb-20 md:mt-32 md:py-12 md:px-14">
        <h2 className="text-xl font-semibold md:text-2xl text-primary">
          (A couple of skills you can find in my toolbox)
        </h2>
        <div className="flex flex-wrap justify-center mt-6 -m-1">
          <Capsule
            text="React"
            className="m-1 hover:rotate-1"
            icon={<CodeIcon className="w-5 h-6 text-darkseafoam" />}
          />
          <Capsule
            text="Next.js"
            className="m-1 hover:-rotate-1"
            icon={<SearchCircleIcon className="w-5 h-6 text-red-600" />}
          />
          <Capsule
            text="Gatsby"
            className="m-1 hover:rotate-1"
            icon={<BeakerIcon className="w-5 h-6 text-lime-600" />}
          />
          <Capsule
            text="Tailwind"
            className="m-1 hover:-rotate-1"
            icon={<BriefcaseIcon className="w-5 h-6 text-yellow-700" />}
          />
          <Capsule
            text="Firebase"
            className="m-1 hover:-rotate-1"
            icon={<FilterIcon className="w-5 h-6 text-indigo-500" />}
          />
          <Capsule
            text="Gatsby"
            className="m-1 hover:rotate-1"
            icon={<BeakerIcon className="w-5 h-6 text-lime-600" />}
          />
          <Capsule
            text="Tailwind"
            className="m-1 hover:-rotate-1"
            icon={<BriefcaseIcon className="w-5 h-6 text-yellow-700" />}
          />
          <Capsule
            text="React"
            className="m-1 hover:rotate-1"
            icon={<CodeIcon className="w-5 h-6 text-darkseafoam" />}
          />
          <Capsule
            text="React"
            className="m-1 hover:rotate-1"
            icon={<CodeIcon className="w-5 h-6 text-darkseafoam" />}
          />
        </div>
      </section>
      <a id="writing" />
      {/* </FadeIn> */}
    </>
  );
};

export default Homepage;
