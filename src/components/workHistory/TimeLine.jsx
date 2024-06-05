import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

import { classAdd } from "../../helpers/common";
import workTimeline from "../../data/workTimeline.json";

// TODO: https://dirask.com/posts/React-mouse-button-press-and-hold-example-pzrAap
// TODO: https://react-type-animation.netlify.app/

function TimeLine(props) {
const timeLine = workTimeline;

const sliderId = "timeline-slider-1";
const scrollMagnitude = 150;
const scrollButtonSize = 60;
const scrollButtonClass =
  "opacity-50 cursor-pointer rounded-full hover:opacity-100 h-fit ease-in-out duration-300";

  const [description, setDescription] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderCounter, setSliderCounter] = useState(0)
  const [contentToShow, setContentToShow] = useState(workTimeline[0].description);

  const intervalRef = useRef(null);


  useEffect(() => {
    return () => {
      stopSliderLeft();
      stopSliderRight();
    }; // when App is unmounted we should stop counter
  }, []);

  const startSliderLeft = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
        
      let slider = document.getElementById(sliderId);
      slider.scrollLeft = slider.scrollLeft - scrollMagnitude;
    }, 10);
  };

  const stopSliderLeft = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startSliderRight = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      let slider = document.getElementById(sliderId);
      slider.scrollLeft = slider.scrollLeft + scrollMagnitude;
    }, 10);
  };

  const stopSliderRight = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleOpenDescription = (index, content) => {
    setActiveIndex(index);
    setContentToShow(content);
  };

  const slideLeft = () => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft - scrollMagnitude;
  };

  const slideRight = () => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft = slider.scrollLeft + scrollMagnitude;
  };

  return (
    <div
      id="timeline-container"
      className="flex flex-col justify-center items-center"
    >
      <div className=" w-[100%]  relative flex items-center gap-7">
        <MdChevronLeft
          className={scrollButtonClass}
          onMouseDown={startSliderLeft}
          onMouseUp={stopSliderLeft}
          onMouseLeave={stopSliderLeft}
          size={scrollButtonSize}
        />
        
        <div
          id={sliderId}
          className="scroll overflow-x-scroll whitespace-nowrap scroll-smooth styled-scroll-none"
          style={{ overflowX: "scroll" }}
        >
          <div className="mt-5 mb-5 md:px-56">
            <ul className="timeline touch-auto ">
              {timeLine.map((item, index) => {
                let tooltipClass = "";

                if (index == 0) {
                  tooltipClass = classAdd(tooltipClass, "tooltip-right");
                } else if (index == timeLine.length - 1) {
                  tooltipClass = classAdd(tooltipClass, "tooltip-left");
                } else {
                }

                if (tooltipClass == "") {
                  if (index % 2 == 0) {
                    tooltipClass = classAdd(tooltipClass, "tooltip-top");
                  } else {
                    tooltipClass = classAdd(tooltipClass, "tooltip-bottom");
                  }
                }

                return (
                  <li className="">
                    {index != 0 && <hr className="bg-secondary/60"/>}

                    <div
                      className={classAdd(
                        index % 2 == 0 ? "timeline-end" : "timeline-start",
                        index == activeIndex
                          ? "bg-gradient-to-br from-teal-100 to-primary/40 bg-opacity-50 border-0 shadow-lg shadow-shadow drop-shadow-xl transition-colors duration-300 text-content"
                          : "bg-gradient-to-br hover:from-teal-50 hover:to-teal-100 from-slate-200 to-slate-100 border-0 hover:shadow-lg shadow-shadow transition-shadow transition-colors duration-300 text-gray-500",
                        "timeline-box",
                        "hover:cursor-pointer",
                        ""
                      )}
                      onClick={() =>
                        handleOpenDescription(index, item.description)
                      }
                    >
                      <div
                        className={classAdd(
                          "tooltip",
                          tooltipClass,
                          "z-50",
                          "float-start"
                        )}
                      >
                        {item.title}
                      </div>
                    </div>

                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={index == 0 ? "#09bbcf" : "#a1a1a1"}
                        className="w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div
                      className={classAdd(
                        index % 2 == 0 ? "timeline-start" : "timeline-end",
                        index == 0 ? "text-primary" : "text-content/80",
                        "font-bold"
                      )}
                    >
                      {item.date}
                    </div>

                    {index != timeLine.length - 1 && <hr className="bg-secondary/60"/>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <MdChevronRight
          className={scrollButtonClass}
          onMouseDown={startSliderRight}
          onMouseUp={stopSliderRight}
          onMouseLeave={stopSliderRight}
          size={scrollButtonSize}
        />
      </div>

      <div className="border-2 border-tertiary/70 p-2 my-8 rounded-md w-[90%]">
        <div
          id="timeline-description-1-disabled-this"
          className=" p-3 rounded-md bg-tertiary text-content transition-all duration-75 shadow-shadow shadow-md"
        >
          <ul className="gap-10">
            {contentToShow.map( (item, ind) => {
              return (<li key={ind} className="mb-2"><span className="w-1 h-1 rounded-3xl p bg-primary text-primary">.</span> <pre className="inline"> </pre> <span dangerouslySetInnerHTML={{ __html: item }}></span>
              </li>);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

TimeLine.propTypes = {};

export default TimeLine;
