import Capsule from "./Capsule";

import {
  SquareDashedBottomCode,
  Brush,
  Wind,
  Code,
  Webhook,
  ArrowBigRight,
} from "lucide-react";

const HomepageListedSkills = () => {
  return (
    <div className="max-w-3xl px-5 py-6 mx-auto mb-10 text-center bg-gray-100 border-2 border-gray-200 border-dotted rounded-lg mt-9 md:mb-20 md:mt-24 md:p-12">
      <h2 className="text-xl font-semibold md:text-2xl text-primary">
        (A couple of my favorite tools)
      </h2>
      <div className="flex flex-wrap justify-center mt-6 mx-9">
        <Capsule
          text="Next.js"
          className="m-1 hover:rotate-1"
          icon={<ArrowBigRight className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="Tailwind CSS"
          className="m-1 hover:-rotate-1"
          icon={<Wind className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="API integration"
          className="m-1 hover:rotate-1"
          icon={<Webhook className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="JavaScript"
          className="m-1 hover:-rotate-1"
          icon={<Code className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="React"
          className="m-1 hover:-rotate-1"
          icon={<SquareDashedBottomCode className="w-5 h-6 text-indigo-500" />}
        />
        <Capsule
          text="CSS Styling"
          className="m-1 hover:-rotate-1"
          icon={<Brush className="w-5 h-6 text-indigo-500" />}
        />
      </div>
    </div>
  );
};

export default HomepageListedSkills;
