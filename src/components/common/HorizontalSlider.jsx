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
                    <div key={ind} className="static h-full min-w-[250px] max-w-[300px] snap-center rounded-md from-teal-100 to-teal-200 p-3 shadow-md shadow-slate-400/65 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:bg-gradient-to-br hover:shadow-lg">
                        <div className="mb-3 flex flex-row items-center justify-between gap-4">
                        <div className="text-lg font-bold text-slate-600">{item.title}</div>
                        <img className="w-[40px] rounded-full" 
                        src={images.certificates.logo[item.logoType]} />
                        </div>
                        <div className="text-xs text-gray-600">
                            {item.description}
                        </div>
                        <a href="#" download="/" class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 hover:text-white bg-gray-100 hover:bg-gradient-to-tr from-teal-300 to-teal-400 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center mt-2">
                            {buttonText}
                        </a>
                    </div>
                )
            })}
            
        </div>
    </div>
  );
}

HorizontalSlider.propTypes = {};

export default HorizontalSlider;
