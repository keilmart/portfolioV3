import { DesignIcon, DevelopIcon, LearnIcon } from "./HomepageStackIcons/Index";

const HomepageSocialList = () => {
  return (
    <section className="grid grid-cols-1 gap-6 mx-10 sm:mx-16 sm:grid-cols-3 sm:gap-10">
      <div className="z-20 w-full mx-auto text-center transition duration-500 ease-in-out border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 sm:w-minlg:text-sm dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2">
        <DevelopIcon />
        <h3 className="py-3 text-xl font-semibold text-center text-primary dark:text-white">
          Languages
        </h3>
        <span className="block pt-1 text-[16px] text-tertiary"> Next.js</span>
        <span className="block pt-1 text-[16px] text-tertiary"> Gatsby</span>
        <span className="block pt1 text-[16px] text-tertiary">Gatsby</span>
        <span className="block pt1 text-[16px] text-tertiary">JavaScript</span>
        <span className="block pt1 text-[16px] text-tertiary"> jQuery</span>
      </div>
      <div className="z-20 w-full mx-auto text-center transition duration-500 ease-in-out border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 sm:w-minlg:text-sm dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2">
        <DesignIcon />
        <h3 className="py-3 text-xl font-semibold text-center text-primary dark:text-white">
          Styling
        </h3>
        <span className="block pt1 text-[16px] text-tertiary">Tailwind</span>
        <span className="block pt1 text-[16px] text-tertiary">ScSS</span>
        <span className="block pt1 text-[16px] text-tertiary">Bootstrap</span>
        <span className="block pt1 text-[16px] text-tertiary">CSS</span>
        <span className="block pt1 text-[16px] text-tertiary">
          Styled Components
        </span>
      </div>
      <div className="z-20 w-full mx-auto text-center transition duration-500 ease-in-out border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 sm:w-minlg:text-sm dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2">
        <LearnIcon />
        <h3 className="my-3 text-xl font-semibold text-center text-primary dark:text-white">
          Learning
        </h3>
        <span className="block pt1 text-[16px] text-tertiary"> CSS3</span>
        <span className="block pt1 text-[16px] text-tertiary">Tailwind</span>
        <span className="block pt1 text-[16px] text-tertiary">ScSS</span>
        <span className="block pt1 text-[16px] text-tertiary">Bootstrap</span>
        <span className="block pt-1 text-[16px] text-tertiary">
          Styled Components
        </span>
      </div>
    </section>
  );
};

export default HomepageSocialList;

// const ExternalLink = ({ href, title }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       className="flex items-center mt-1 text-sm"
//     >
//       <span className="mr-1">{title}</span>
//       {/* <span className="mb-1 leading-snug">↗</span> */}
//     </a>
//   );
// };
