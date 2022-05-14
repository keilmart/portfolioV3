const HomepageSocialList = () => {
  // const { width, height } = useWindowSize();

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 md:gap-10">
      <div className="z-20 transition duration-500 ease-in-out bg-gray-100 border rounded-lg sm:w-min sm:mx-auto px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 dark:text-white shadow-art hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2">
        <h1 className="text-xl font-semibold text-center text-primary dark:text-white">
          Languages
        </h1>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
      </div>
      <div className="z-20 w-full mx-auto transition duration-500 ease-in-out bg-gray-100 border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 sm:w-min lg:py-8 lg:text-sm dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:-rotate-2">
        <div className="w-full bg-syncWave">
          <h1 className="text-xl font-semibold text-center text-primary dark:text-white">
            Styling
          </h1>
        </div>
        <div>
          <pre className="m-3 font-montserrat">
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
            <b>Keil Martin</b>&quot;;
          </pre>
          <pre className="m-3 font-montserrat">
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
            <b>Keil Martin</b>&quot;;
          </pre>
          <pre className="m-3 font-montserrat">
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
            <b>Keil Martin</b>&quot;;
          </pre>
          <pre className="m-3 font-montserrat">
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
            <b>Keil Martin</b>&quot;;
          </pre>
          <pre className="m-3 font-montserrat">
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
            <b>Keil Martin</b>&quot;;
          </pre>
        </div>
      </div>
      <div className="z-20 w-full mx-auto transition duration-500 ease-in-out bg-gray-100 border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 sm:w-minlg:text-sm dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2">
        <h1 className="text-xl font-semibold text-center text-primary dark:text-white">
          Frameworks
        </h1>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
        <pre className="m-3 font-montserrat">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = &quot;
          <b>Keil Martin</b>&quot;;
        </pre>
      </div>
    </section>
  );
};

export default HomepageSocialList;

// import useWindowSize from "../../hooks/useWindowSize";
// https://dev.to/heymarkkop/embed-twitter-widget-on-reactjs-1768 //
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

// import {
//   TwitterTimelineEmbed,
//   // TwitterShareButton,
//   // TwitterFollowButton,
//   // TwitterHashtagButton,
//   // TwitterMentionButton,
//   // TwitterTweetEmbed,
//   // TwitterMomentShare,
//   // TwitterDMButton,
//   // TwitterVideoEmbed,
//   // TwitterOnAirButton,
// } from "react-twitter-embed";

// <section className="grid grid-cols-1 gap-4 -mt-10 md:-mt-8 md:grid-cols-3">
//   <div className="col-span-2 mb-4 md:col-start-2">
//     {/* <div className="col-span-2 mb-6 md:col-start-2 md:mb-20"> */}
//     <TwitterTimelineEmbed
//       sourceType="profile"
//       screenName="keilmart"
//       // options={width >= 1024 ? { height: 350 } : { height: 350 }}
//       theme="dark"
//       data-chrome="transparent"
//       options={{ height: 350 }}
//     />
//   </div>
// </section>
// <section className="grid grid-cols-1 gap-4 -mt-10 md:-mt-8 md:grid-cols-3">
//   <div className="max-w-3xl col-span-2 px-5 mx-auto mb-4 text-center bg-gray-100 border-2 border-gray-200 border-dotted rounded-lg py-7 md:col-start-2 md:mb-8 md:py-12 md:px-14">
//     <h2 className="text-xl font-semibold md:text-2xl text-primary">
//       Some of the skills you can find in my toolbox
//     </h2>
//     <div className="flex justify-center mt-6">
//       <div className="flex flex-wrap justify-center max-w-sm sm:max-w-lg">
//         <Capsule
//           text="React"
//           className="m-1 hover:rotate-1"
//           icon={<BeakerIcon className="w-5 h-6 text-lime-600" />}
//         />
//         <Capsule
//           text="Next.js"
//           className="m-1 hover:-rotate-1"
//           icon={<FastForwardIcon className="w-5 h-6 text-red-600" />}
//         />
//         <Capsule
//           text="Gatsby"
//           className="m-1 hover:rotate-1"
//           icon={<SparklesIcon className="w-5 h-6 text-blue-300" />}
//         />
//         <Capsule
//           text="JavaScript"
//           className="m-1 hover:-rotate-1"
//           icon={<CodeIcon className="w-5 h-6 text-purple-600" />}
//         />
//         <Capsule
//           text="Firebase"
//           className="m-1 hover:-rotate-1"
//           icon={<CloudDownloadIcon className="w-5 h-6 text-indigo-500" />}
//         />
//         <Capsule
//           text="Tailwind"
//           className="m-1 hover:-rotate-1"
//           icon={<PuzzleIcon className="w-5 h-6 text-yellow-400" />}
//         />
//         <Capsule
//           text="Figma"
//           className="m-1 hover:rotate-1"
//           icon={<PencilIcon className="w-5 h-6 text-pink-500" />}
//         />
//       </div>
//     </div>
//   </div>
// </section>
