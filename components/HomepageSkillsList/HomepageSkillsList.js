import React, { useState, useRef } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  DesignIcon,
  DevelopIcon,
  LearnIcon,
  RightArrow,
  LeftArrow,
} from "./HomepageSkillsIcons/Index";

const HomepageSkillsList = () => {
  const slideRef = useRef();
  const [curIdx, setCurIdx] = useState(0);

  const cards = [
    // 			 Develop Card
    {
      title: "Developing",
      skillArray: ["Next.js", "Gatsby", "React", "JavaScript", "jQuery"],
    },
    // 			 Style Card
    {
      title: "Styling",
      skillArray: ["Tailwind", "ScSS / SaSS", "CSS", "Bootstrap", "Figma"],
    },
    // 			 Learning Card
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
              className="w-full mx-auto text-center transition duration-500 ease-in-out border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2"
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
                  <li key={card.idx}>
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
      <div className="block w-full mx-auto md:hidden">
        <Slider
          {...{
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            dots: false,
            centerMode: false,
            centerPadding: `0px 0px 0px 40px`,
            initialSlide: curIdx,
            afterChange: (idx) => {
              setCurIdx(idx);
            },
          }}
          ref={slideRef}
        >
          {cards?.map((card, idx) => {
            return (
              <div key={idx} className="overflow-hidden transition-all ">
                <div className="w-11/12 text-center transition duration-500 ease-in-out border rounded-lg py-7 px-7 text-2xs text-syncWave dark:text-white shadow-art dark:shadow-none dark:border-0 dark:bg-darkModeDetail">
                  {card.title === "Developing" ? (
                    <DevelopIcon />
                  ) : card.title === "Styling" ? (
                    <DesignIcon />
                  ) : (
                    <LearnIcon />
                  )}
                  <h3 className="pt-3 pb-2 text-xl font-semibold text-center text-primary dark:text-white">
                    {card.title}
                  </h3>
                  <ul>
                    {card.skillArray.map((cardSkill) => (
                      <li key={card.idx}>
                        <span className="block text-base text-tertiary">
                          {cardSkill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="flex items-center mt-2">
          <button
            className="pr-5"
            onClick={() => {
              if (curIdx > 0) {
                setCurIdx(curIdx - 1);
                slideRef.current.slickGoTo(curIdx - 1);
              }
            }}
          >
            <LeftArrow />
          </button>

          <button
            onClick={() => {
              if (curIdx < cards.length - 1) {
                setCurIdx(curIdx + 1);
                slideRef.current.slickGoTo(curIdx + 1);
              }
            }}
          >
            <RightArrow />
          </button>

          <div className="flex justify-between flex-1 h-1 ml-5 bg-gray-200 rounded">
            {cards.map((card, idx) => (
              <button
                key={idx}
                className={`block w-full h-full ${
                  curIdx == idx && "bg-syncWave rounded"
                } ${idx == 0 && "rounded-l-5xl"} ${
                  idx == cards.length - 1 && "rounded-r-5xl"
                }`}
                onClick={() => {
                  setCurIdx(idx);
                  slideRef.current.slickGoTo(idx);
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageSkillsList;
