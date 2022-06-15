import HomepageSkillsCarousel from "./HomepageSkillsCarousel";

import {
  DesignIcon,
  DevelopIcon,
  LearnIcon,
} from "./HomepageSkillsIcons/Index";

const HomepageSkillsList = () => {
  const cards = [
    {
      title: "Developing",
      skillOne: "Next.js",
      skillTwo: "Gatsby",
      skillThree: "React",
      skillFour: "JavaScript",
      skillFive: "jQuery",
    },
    {
      title: "Styling",
      skillOne: "Tailwind",
      skillTwo: "ScSS / SaSS",
      skillThree: "CSS",
      skillFour: "Bootstrap",
      skillFive: "Figma",
    },
    {
      title: "Learning",
      skillOne: "GraphQL",
      skillTwo: "TypeScript",
      skillThree: "Node.js",
      skillFour: "Express",
      skillFive: "MongoDB",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <ul className="grid grid-cols-1 mx-0 antialiased lg:mx-12 md:gap-6 lg:gap-12 sm:grid-cols-3">
          {cards.map((card, idx) => (
            <li
              key={idx}
              className="z-10 w-full mx-auto text-center transition duration-500 ease-in-out bg-white border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-transparent dark:bg-darkModeDetail hover:rotate-2 hover:even:-rotate-2"
            >
              {card.title === "Developing" ? (
                <DevelopIcon xmlns="http://www.w3.org/2000/svg" />
              ) : card.title === "Styling" ? (
                <DesignIcon xmlns="http://www.w3.org/2000/svg" />
              ) : (
                <LearnIcon xmlns="http://www.w3.org/2000/svg" />
              )}
              <h3 className="pt-3 pb-2 text-xl font-semibold text-center text-primary dark:text-white">
                {card.title}
              </h3>
              <ul className="block text-base text-tertiary">
                <li>
                  <span>{card.skillOne}</span>
                </li>
                <li>
                  <span>{card.skillTwo}</span>
                </li>
                <li>
                  <span>{card.skillThree}</span>
                </li>
                <li>
                  <span>{card.skillFour}</span>
                </li>
                <li>
                  <span>{card.skillFive}</span>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <HomepageSkillsCarousel cards={cards} />
    </>
  );
};

export default HomepageSkillsList;
