// import useWindowSize from "../../hooks/useWindowSize";
// https://dev.to/heymarkkop/embed-twitter-widget-on-reactjs-1768 //

import {
  TwitterTimelineEmbed,
  // TwitterShareButton,
  // TwitterFollowButton,
  // TwitterHashtagButton,
  // TwitterMentionButton,
  // TwitterTweetEmbed,
  // TwitterMomentShare,
  // TwitterDMButton,
  // TwitterVideoEmbed,
  // TwitterOnAirButton,
} from "react-twitter-embed";

// import Capsule from "../Capsule/Capsule";
// import {
//   CodeIcon,
//   PencilIcon,
//   BeakerIcon,
//   CloudDownloadIcon,
//   FastForwardIcon,
//   SparklesIcon,
//   PuzzleIcon,
// } from "@heroicons/react/outline";

const HomepageSocialList = () => {
  // const { width, height } = useWindowSize();

  return (
    <div className="grid grid-cols-1 gap-4 -mt-10 md:-mt-8 md:grid-cols-3">
      <div className="col-span-2 mb-6 md:col-start-2">
        {/* <div className="col-span-2 mb-6 md:col-start-2 md:mb-20"> */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="keilmart"
          // options={width >= 1024 ? { height: 350 } : { height: 350 }}
          theme="light"
          options={{ height: 350 }}
        />
      </div>
    </div>
    // <section className="max-w-3xl px-5 py-6 mx-auto mt-6 mb-10 text-center bg-gray-100 border-2 border-gray-200 border-dotted rounded-lg md:mb-20 md:mt-28 md:py-12 md:px-14">
    //   <h2 className="text-xl font-semibold md:text-2xl text-primary">
    //     Some of the skills you can find in my toolbox
    //   </h2>
    //   <div className="flex justify-center mt-6">
    //     <div className="flex flex-wrap justify-center max-w-sm sm:max-w-lg">
    //       <Capsule
    //         text="React"
    //         className="m-1 hover:rotate-1"
    //         icon={<BeakerIcon className="w-5 h-6 text-lime-600" />}
    //       />
    //       <Capsule
    //         text="Next.js"
    //         className="m-1 hover:-rotate-1"
    //         icon={<FastForwardIcon className="w-5 h-6 text-red-600" />}
    //       />
    //       <Capsule
    //         text="Gatsby"
    //         className="m-1 hover:rotate-1"
    //         icon={<SparklesIcon className="w-5 h-6 text-blue-300" />}
    //       />
    //       <Capsule
    //         text="JavaScript"
    //         className="m-1 hover:-rotate-1"
    //         icon={<CodeIcon className="w-5 h-6 text-purple-600" />}
    //       />
    //       <Capsule
    //         text="Firebase"
    //         className="m-1 hover:-rotate-1"
    //         icon={<CloudDownloadIcon className="w-5 h-6 text-indigo-500" />}
    //       />
    //       <Capsule
    //         text="Tailwind"
    //         className="m-1 hover:-rotate-1"
    //         icon={<PuzzleIcon className="w-5 h-6 text-yellow-400" />}
    //       />
    //       <Capsule
    //         text="Figma"
    //         className="m-1 hover:rotate-1"
    //         icon={<PencilIcon className="w-5 h-6 text-pink-500" />}
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default HomepageSocialList;
