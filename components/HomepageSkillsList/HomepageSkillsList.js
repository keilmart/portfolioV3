import {
  DesignIcon,
  DevelopIcon,
  LearnIcon,
} from "./HomepageSkillsIcons/Index";

const HomepageSkillsList = () => {
  const cards = [
    // 			 Develop Card
    {
      icon: DevelopIcon,
      title: "Developing",
      skillOne: "Next.js",
      skillTwo: "Gatsby",
      skillThree: "React",
      skillFour: "JavaScript",
      skillFive: "jQuery",
    },
    // 			 Style Card
    {
      icon: DesignIcon,
      title: "Styling",
      skillOne: "Tailwind",
      skillTwo: "ScSS / SaSS",
      skillThree: "CSS",
      skillFour: "Styled Comp's",
      skillFive: "Figma",
    },
    // 			 Learning Card
    {
      icon: LearnIcon,
      title: "Learning",
      skillOne: "GraphQL",
      skillTwo: "TypeScript",
      skillThree: "Node.js",
      skillFour: "Express",
      skillFive: "MongoDB",
    },
  ];

  return (
    <section>
      <ul className="grid grid-cols-1 gap-6 mx-16 antialiased sm:grid-cols-3 sm:gap-10">
        {cards.map((card, idx) => (
          <li
            key={idx}
            className="z-20 w-full mx-auto text-center transition duration-500 ease-in-out border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 sm:w-minlg:text-sm dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2"
          >
            {/* <div
              icon={`${
                card.title === "Languages" ? (
                  <DevelopIcon />
                ) : card.title === "Styling" ? (
                  <DesignIcon />
                ) : (
                  <LearnIcon />
                )
              }`}
            > */}
            {/* {`${
              card.title === "Languages" ? (
                <DevelopIcon />
              ) : card.title === "Styling" ? (
                <DesignIcon />
              ) : (
                <LearnIcon />
              )
            }`} */}
            {/* </div> */}
            <DevelopIcon />
            <h3 className="pt-3 pb-2 text-xl font-semibold text-center text-primary dark:text-white">
              {card.title}
            </h3>
            <span className="block pt1 text-[16px] text-tertiary">
              {card.skillOne}
            </span>
            <span className="block text-[16px] text-tertiary">
              {card.skillTwo}
            </span>
            <span className="block  text-[16px] text-tertiary">
              {card.skillThree}
            </span>
            <span className="block pt1 text-[16px] text-tertiary">
              {card.skillFour}
            </span>
            <span className="block pt1 text-[16px] text-tertiary">
              {card.skillFive}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomepageSkillsList;
