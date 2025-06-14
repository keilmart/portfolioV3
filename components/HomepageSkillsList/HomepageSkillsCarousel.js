import { useState, useRef } from "react";
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

const HomepageSkillsCarousel = ({ cards }) => {
  const [curIdx, setCurIdx] = useState(0);
  const slideRef = useRef();

  return (
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
          // autoplay: true, // Enable autoplay mode
          // autoplaySpeed: 0, // As fast as possible transitions
          // cssEase: "linear", // Use linear animation for smooth constant movement
          afterChange: (idx) => {
            setCurIdx(idx);
          },
        }}
        ref={slideRef}>
        {cards?.map((card, idx) => {
          return (
            <div key={idx} className="z-10 overflow-hidden transition-all ">
              <div className="w-11/12 text-center transition duration-500 ease-in-out bg-gray-100 border-2 border-dotted rounded-lg py-7 px-7 text-2xs text-syncWave shadow-art dark:text-slate-200 dark:shadow-none dark:border-0 dark:bg-darkModeDetail">
                {card.title === "Developing" ? (
                  <DevelopIcon />
                ) : card.title === "Styling" ? (
                  <DesignIcon />
                ) : (
                  <LearnIcon />
                )}
                <h3 className="pt-3 pb-2 text-xl font-semibold text-center text-primary dark:text-slate-200">
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
          }}>
          <LeftArrow />
        </button>

        <button
          onClick={() => {
            if (curIdx < cards.length - 1) {
              setCurIdx(curIdx + 1);
              slideRef.current.slickGoTo(curIdx + 1);
            }
          }}>
          <RightArrow />
        </button>

        <div className="flex justify-between flex-1 h-1 ml-5 bg-gray-200 rounded">
          {cards.map((cards, idx) => (
            <button
              key={idx}
              className={`block w-full h-full ${curIdx == idx && "bg-syncWave rounded"} ${
                idx == 0 && "rounded-l-5xl"
              } ${idx == cards.length - 1 && "rounded-r-5xl"}`}
              onClick={() => {
                setCurIdx(idx);
                slideRef.current.slickGoTo(idx);
              }}></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageSkillsCarousel;
