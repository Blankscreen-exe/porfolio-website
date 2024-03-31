import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    capitalizeFirstLetter,
    capitalizeWords,
    classAdd,
} from "../../helpers/common";
import SectionHeading from "../common/SectionHeading";

// data
import techStack from "../../data/techStack.json";

function TechStack(props) {
  const stackList = Object.keys(techStack);
  const [listItem, setListItem] = useState(techStack["languages"]);
  const [currentSelectedItem, setCurrentSelectedItem] = useState("languages");

  const handleStackClick = (item) => {
    setCurrentSelectedItem(item);
    setListItem(techStack[item]);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <SectionHeading title={"My Tech Stack"} />
      <div className="mb-10 flex flex-col md:flex-row gap-10 w-full">
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
                      <a href="#" className="relative block">
                        <img
                          alt="profil"
                          src="https://dummyimage.com/100x100/eee/444"
                          className="mx-auto object-cover rounded-md h-10 w-9 "
                        />
                      </a>
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium ">
                        {capitalizeWords(item)}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-0 w-[80%] mx-auto flex flex-row flex-wrap align-top content-start gap-2 overflow-visible justify-center md:justify-start lg:justify-start">
          {listItem.map((item, ind) => (
            <a key={ind} href={item.url} target="_blank" className="h-min">
              <div
                className="tooltip"
                data-tip={`Go To ${capitalizeFirstLetter(
                  item.name
                )}'s Official Page`}
              >
                <div
                  key={item.name}
                  className="w-fit p-2 rounded-md text-content border border-slate-300/60 hover:border-primary/0 md:text-lg text-sm font-semibold flex flex-row justify-center items-center gap-4 hover:bg-gradient-to-br hover:from-teal-100 hover:to-primary/60 hover:text-tertiary hover:cursor-pointer transition-all duration-500"
                >
                  <img
                    src="https://dummyimage.com/100x100/eee/444"
                    className="md:w-10 w-5 rounded-md"
                  />
                  <span>{capitalizeFirstLetter(item.name)}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

TechStack.propTypes = {};

export default TechStack;
