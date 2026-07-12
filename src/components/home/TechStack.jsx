import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    capitalizeFirstLetter,
    capitalizeWords,
    classAdd,
    truncateText,
    convertToUnderscoreSlug,
} from "../../helpers/common";
import SectionHeading from "../common/SectionHeading";

// data
import techStack from "../../data/techStack.json";

// constants
import svgList from '../../constants/svg'

const categoryIcons = {
  languages: "keyboard",
  backend: "function",
  frontend: "monitor",
  database: "database",
  "ml ds ai": "robot_2",
  other: "terminal",
};

function TechStack(props) {
  const stackList = Object.keys(techStack);
  const [listItem, setListItem] = useState(techStack["languages"]);
  const [currentSelectedItem, setCurrentSelectedItem] = useState("languages");

  const handleStackClick = (item) => {
    setCurrentSelectedItem(item);
    setListItem(techStack[item]);
  };

  const renderTechItem = (item, ind) => (
    <a key={ind} href={item.url} target="_blank" className="h-min">
      <div
        className="tooltip"
        data-tip={`Go To ${capitalizeFirstLetter(
          item.name
        )}'s Official Page`}
      >
        <div
          key={item.name}
          className="w-fit p-2 rounded-md text-content border border-slate-300/60 hover:border-primary/0 md:text-lg text-sm font-semibold flex flex-row justify-center items-center gap-4 hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/80 hover:text-content hover:cursor-pointer transition-all duration-500"
        >

        { item.imgUrl in svgList.techStack[convertToUnderscoreSlug(currentSelectedItem)]
          ? (<img
            src={svgList.techStack[convertToUnderscoreSlug(currentSelectedItem)][item.imgUrl]}
            className="md:w-10 w-5 rounded-md"
            alt={item.imgUrl}
          />)
          : (<div className={`md:w-8 md:h-8 w-5 h-5 rounded-md bg-primary border-4 border-tertiary ${"[#aeaeae]"}`}></div>)
        }

          <span>{capitalizeFirstLetter(item.name)}</span>
        </div>
      </div>
    </a>
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <SectionHeading title={"My Tech Stack"} />

      {/* Mobile layout: category rail flush to the screen edge + independently scrollable tag panel */}
      <div className="md:hidden mb-10 w-full flex flex-row items-start">
        <div className="flex flex-col divide-y divide-secondary/70 bg-bg2 rounded-lg shadow shrink-0">
          {stackList.map((item, ind) => (
            <div
              key={ind}
              onClick={() => handleStackClick(item)}
              className={classAdd(
                "flex items-center p-4 cursor-pointer select-none hover:text-primary/50",
                currentSelectedItem == item ? "text-primary" : "text-content"
              )}
            >
              <span className="material-symbols-outlined mr-3">
                {categoryIcons[item.toLowerCase()]}
              </span>
              <span className="font-bold text-sm whitespace-nowrap">
                {capitalizeWords(item)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex-1  max-w-[30vh] flex flex-col items-center gap-3 overflow-y-auto overflow-x-hidden max-h-[343px] px-4 py-4 shadow-[inset_0_5px_5px_-5px_rgba(0,0,0,0.15),inset_0_-5px_5px_-5px_rgba(0,0,0,0.15),inset_5px_0_5px_-5px_rgba(0,0,0,0.15),inset_-5px_0_5px_-5px_rgba(0,0,0,0.15)] ml-4 rounded-lg bg-bg1">
          {listItem.map((item, ind) => renderTechItem(item, ind))}
        </div>
      </div>

      {/* Desktop / tablet layout: category card on top of a wrapped tag grid */}
      <div className="hidden md:flex mb-10 flex-row gap-10 w-full sm:w-[85%]">
        <div className="container flex flex-col items-center justify-center w-[fit-content] h-[fit-content] mx-auto bg-bg2 rounded-lg shadow">
          <ul className="flex flex-col divide-y divide-secondary/70">
            {stackList.map((item, ind) => {
              return (
                <li
                  key={ind}
                  onClick={() => handleStackClick(item)}
                  className={classAdd(
                    "flex flex-row hover:text-primary/50",
                    currentSelectedItem == item
                      ? "text-primary"
                      : "text-content"
                  )}
                >
                  <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                    <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                      <a href="#" className="relative block font-serif">
                        <span className="material-symbols-outlined">
                            {categoryIcons[item.toLowerCase()]}
                        </span>
                      </a>
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-bold text-xl">
                        {capitalizeWords(item)}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-2 w-[80%] mx-auto flex flex-row flex-wrap align-middle content-start overflow-visible justify-start gap-6">
          {listItem.map((item, ind) => renderTechItem(item, ind))}
        </div>
      </div>
    </div>
  );
}

TechStack.propTypes = {};

export default TechStack;
