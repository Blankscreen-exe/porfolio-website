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
        <div className="container flex flex-col items-center justify-center w-[fit-content] h-[fit-content] mx-auto bg-slate-100 rounded-lg shadow dark:bg-gray-800">
          <ul className="flex flex-col divide-y divide">
            {stackList.map((item) => {
              return (
                <li
                  onClick={() => handleStackClick(item)}
                  className={classAdd(
                    "flex flex-row hover:text-slate-800 dark:text-white",
                    currentSelectedItem == item
                      ? "text-slate-800"
                      : "text-slate-500"
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

        <div className="p-0 w-full flex flex-row flex-wrap align-top content-start gap-2 overflow-visible">
          {listItem.map((item) => (
            <a href={item.url} target="_blank" className="h-min">
              <div
                className="tooltip"
                data-tip={`Go To ${capitalizeFirstLetter(
                  item.name
                )}'s Official Page`}
              >
                <div
                  key={item.name}
                  className="w-fit p-2 rounded-md text-slate-600 border border-slate-300 md:text-lg text-sm font-semibold flex flex-row justify-center items-center gap-4 hover:shadow hover:shadow-sm hover:shadow-[#0694a2] hover:bg-slate-100 hover:cursor-pointer transition-shadow duration-400"
                >
                  <img
                    src="https://dummyimage.com/100x100/eee/444"
                    class="md:w-10 w-5 rounded-md"
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
