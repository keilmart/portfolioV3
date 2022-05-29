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
      skillArray: ["Next.js", "Gatsby", "React", "JavaScript", "jQuery"],
    },
    {
      title: "Styling",
      skillArray: ["Tailwind", "ScSS / SaSS", "CSS", "Bootstrap", "Figma"],
    },
    {
      title: "Learning",
      skillArray: ["GraphQL", "TypeScript", "Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <ul className="grid grid-cols-1 mx-12 antialiased md:gap-6 lg:gap-12 sm:grid-cols-3">
          {cards.map((card, idx) => (
            <li
              key={idx}
              className="z-10 w-full mx-auto text-center transition duration-500 ease-in-out bg-white border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2 hover:even:-rotate-2"
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
              <ul>
                {card.skillArray.map((cardSkill, idx) => (
                  <li key={cardSkill.idx}>
                    <span className="block text-base text-tertiary">
                      {cardSkill}
                    </span>
                  </li>
                ))}
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
