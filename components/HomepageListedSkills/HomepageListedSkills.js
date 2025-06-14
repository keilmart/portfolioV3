import Capsule from "./Capsule";

import {
  SquareDashedBottomCode,
  Brush,
  Hexagon,
  Code,
  Webhook,
  ArrowBigRight,
} from "lucide-react";

const HomepageListedSkills = () => {
  return (
    <div className="max-w-3xl px-5 py-6 mx-auto mb-10 text-center transition duration-500 ease-in-out bg-gray-100 border-2 border-gray-200 border-dotted rounded-lg mt-9 md:mb-20 md:mt-20 md:p-12 dark:bg-darkModeDetail dark:border-none">
      <h2 className="text-xl font-semibold md:text-2xl text-primary dark:text-slate-200">
        (A couple of my favorite tools)
      </h2>
      <div className="flex flex-wrap justify-center mt-6 sm:mx-9">
        <Capsule
          text="Next.js"
          className="m-1 hover:rotate-2"
          icon={<ArrowBigRight className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="CSS + Tailwind"
          className="m-1 hover:-rotate-2"
          icon={<Brush className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="JavaScript"
          className="m-1 hover:-rotate-2"
          icon={<Code className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="API integration"
          className="m-1 hover:rotate-2"
          icon={<Webhook className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="React"
          className="m-1 hover:rotate-2"
          icon={<SquareDashedBottomCode className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="Node.js"
          className="m-1 hover:-rotate-2"
          icon={<Hexagon className="w-5 h-6 text-indigo-500" />}
        />
      </div>
    </div>
  );
};

export default HomepageListedSkills;
