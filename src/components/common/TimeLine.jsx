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
  const [contentToShow, setContentToShow] = useState(
    <TypeAnimation
        sequence={[timeLine[0].description]}
        wrapper="span"
        cursor={true}
        repeat={0}
        />
    );

  const intervalRef = useRef(null);


  useEffect(() => {
    return () => {
      stopSliderLeft();
      stopSliderRight();
    }; // when App is unmounted we should stop counter
  }, []);

  const startSliderLeft = () => {
    if (intervalRef.current) return;
    console.log("THISSSS left");
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
    console.log("THISSSS right");
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


  // typewriter effect

  function typewriterEffect(content) {
    for (let index = 0; index < content.length; index++) {
      document.getElementById("timeline-description-1").textContent =
        content.substring(0, i);
    }

    // if (isDeleting) {
    //     document.getElementById("timeline-description-1").textContent = currentWord.substring(0, j-1);
    //     j--;
    //     if (j == 0) {
    //     isDeleting = false;
    //     i++;
    //     if (i == content.length) {
    //         i = 0;
    //     }
    //     }
    // } else {
    //     document.getElementById("timeline-description-1").textContent = currentWord.substring(0, j+1);
    //     j++;
    //     if (j == currentWord.length) {
    //     isDeleting = true;
    //     }
    // }
    // setTimeout(typewriterEffect, 100);
  }

  const handleOpenDescription = (index, content) => {
    console.log("THIS CLICKED",content);
    setActiveIndex(index);

    setContentToShow(          
    <TypeAnimation
        sequence={content}
        wrapper="span"
        cursor={true}
        repeat={0}
        />
    )
    
    // const contentToArray = content.split("")
    // let contentIteration = 0;
    // setInterval(() => {
    //     if (contentIteration== content.length-1) return;
    //     setContentToShow( prevState => prevState+contentToArray[contentIteration])
    //     contentIteration++
    // }, 100);

    // content.split("").map( (character) => {
    //     setInterval(() => {
    //         setContentToShow( prevState => prevState+character)
    //     }, 5000);
    //     setTimeout
    // })

    // setContentToShow(content);
    // typewriterEffect(index + " " +content)
    // console.log(document.getElementById("timeline-description-1-innerspan"))
    // document.getElementById("timeline-description-1-innerspan").classList.remove("animate-typing")
    // setTimeout(() => {
    //     document.getElementById("timeline-description-1-innerspan").classList.add("animate-typing")
    // }, 300);
    // setDescription(index + " " +content)

    // const timePerLetter = 300
    // console.log(content.length)
    // for (let i=0; i== content.length; i++){
    //     console.log(i)
    // }

    // function typeWriter(content, containerId, timePerLetter = 50, isHTML = false) {
        // let container = document.getElementById("timeline-description-1-innerspan");
        // if (!container) {
        //   return console.error(`Element with ID '${"timeline-description-1-innerspan"}' not found.`);
        // }

        // var i = 0;
        // let intervalId = setInterval(() => {
        //   if (i < content.length) {
        //     console.log("index at ", i)
        //     console.log("CONTENT  >> " +content)
        //     const letter = content.charAt(i);
        //     const content = letter;
        //     container.insertAdjacentHTML("beforeend", content);
        //     i++;
        //   } else {
        //     clearInterval(intervalId);
        //   }
        // }, timePerLetter);
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
          //   onClick={slideLeft}
          onMouseDown={startSliderLeft}
          onMouseUp={stopSliderLeft}
          onMouseLeave={stopSliderLeft}
          size={scrollButtonSize}
        />
        {/* TODO: add a key to this id name */}
        <div
          id={sliderId}
          className="scroll overflow-x-scroll whitespace-nowrap scroll-smooth styled-scroll-none"
          style={{ overflowX: "scroll" }}
        >
          <div className="mt-5 mb-5 px-40">
            <ul className="timeline touch-auto">
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
                  <li>
                    {index != 0 && <hr />}

                    <div
                      className={classAdd(
                        index % 2 == 0 ? "timeline-end" : "timeline-start",
                        index == activeIndex
                          ? "bg-gradient-to-br from-teal-100 to-teal-200 bg-opacity-50 border-0 shadow-lg drop-shadow-xl transition-colors duration-300"
                          : "bg-gradient-to-br hover:from-teal-50 hover:to-teal-100 from-slate-200 to-slate-100 border-0 hover:shadow-lg transition-shadow transition-colors duration-300",
                        "timeline-box",
                        "hover:cursor-pointer",
                        "text-[#4f4f4f]"
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
                        // TODO: implement only if
                        // data-tip={item.tooltip}
                      >
                        {item.title}
                      </div>
                    </div>

                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={index == 0 ? "#0694a2" : "#a1a1a1"}
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
                        index == 0 ? "text-teal-500" : "text-slate-400",
                        "font-medium"
                      )}
                    >
                      {item.date}
                    </div>

                    {index != timeLine.length - 1 && <hr />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <MdChevronRight
          className={scrollButtonClass}
          //   onClick={slideRight}
          onMouseDown={startSliderRight}
          onMouseUp={stopSliderRight}
          onMouseLeave={stopSliderRight}
          size={scrollButtonSize}
        />
      </div>

      <div className="border-2 p-2 mt-5 rounded-md w-[90%]">
        <div
          id="timeline-description-1"
          className=" p-3 rounded-md bg-slate-100"
        >
          {/* <span
            id="timeline-description-1-innerspan"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {contentToShow ? contentToShow : timeLine[activeIndex].description}
          </span> */}
          {/* <span id="timeline-description-1-innerspan" >{contentToShow ? contentToShow : timeLine[activeIndex].description}</span> */}
          {contentToShow}
        </div>
        {/* <div id="timeline-description-1" className=' animate-typing w-[100%] h-[200px] p-3 rounded-md bg-slate-100'></div> */}
      </div>
    </div>
  );
}

TimeLine.propTypes = {};

export default TimeLine;
