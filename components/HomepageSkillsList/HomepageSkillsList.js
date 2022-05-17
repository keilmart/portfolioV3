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
  const [curIdx, setCurIdx] = useState(0);
  const slideRef = useRef();

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
      skillFour: "Bootstrap",
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
    <div>
      <section className="hidden lg:block">
        <ul className="grid grid-cols-1 gap-6 mx-12 antialiased sm:grid-cols-3 sm:gap-10">
          {cards.map((card, idx) => (
            <li
              key={idx}
              className="w-full mx-auto text-center transition duration-500 ease-in-out border rounded-lg cursor-pointer px-9 py-7 text-2xs text-syncWave lg:px-10 lg:py-8 dark:text-white shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:border-0 dark:bg-darkModeDetail hover:rotate-2"
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

      <section className="block w-full mx-auto lg:hidden">
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
                <li
                  key={idx}
                  className="w-full mx-auto text-center transition duration-500 ease-in-out border rounded-lg px-9 py-7 text-2xs text-syncWave dark:text-white shadow-art dark:shadow-none dark:border-0 dark:bg-darkModeDetail"
                >
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
            {/* <div className="justify-between flex-1 hidden h-1 ml-5 bg-gray-200 rounded md:flex"> */}
            {cards.map((card, i) => (
              <button
                key={i}
                className={`block w-full h-full ${
                  curIdx == i && "bg-syncWave rounded"
                } ${i == 0 && "rounded-l-5xl"} ${
                  i == cards.length - 1 && "rounded-r-5xl"
                }`}
                onClick={() => {
                  setCurIdx(i);
                  slideRef.current.slickGoTo(i);
                }}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageSkillsList;
