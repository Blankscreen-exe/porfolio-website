import React from "react";
import PropTypes from "prop-types";
import { classAdd } from "../../helpers/common";

import images from '../../constants/img';
import SectionHeading from "./SectionHeading";


function HorizontalSlider(props) {

    const {data, title, buttonText} = props;

  return (
    <div className="my-9">
        <SectionHeading title={title}/>
        <div className="mx-auto flex w-[90%] snap-x snap-mandatory flex-row flex-nowrap gap-3 overflow-x-scroll rounded-md p-6">
            {data.map( (item, ind) => {

                return (
                    <div key={ind} className="static bg-bg2 h-full min-w-[250px] max-w-[300px] snap-center rounded-md from-primary/10 to-primary/60 p-3 shadow-md shadow-shadow/65 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:bg-gradient-to-br hover:shadow-lg border-r-4 border-primary">
                        <div className="mb-3 flex flex-row items-center justify-between gap-4">
                        <div className="text-md font-normal font-sans text-content">{item.title}</div>
                        <img className="w-[40px] rounded-full border-4 border-contentLink/40" 
                        src={images.certificates.logo[item.logoType]} />
                        </div>
                        <div className="text-xs text-content/80">
                            {item.description}
                        </div>
                        {/* <a href="#" download="/" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-secondary hover:text-secondary/70 bg-gray-100 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center mt-2">
                            {buttonText}
                        </a> */}
                    </div>
                )
            })}
            
        </div>
    </div>
  );
}

HorizontalSlider.propTypes = {};

export default HorizontalSlider;
