import React from 'react'
import PropTypes from 'prop-types'

// Constants
import svgList from "../../constants/svg";
import imgList from "../../constants/img";
import langData from "../../data/language.json";

// helpers
import {capitalizeWords} from '../../helpers/common';
function Languages(props) {
    return (
        <div className='flex md:flex-row flex-wrap justify-around flex-col'>
            {langData.map((item, ind) => {

                let flag = svgList.languages.code;

                if (item.language === "english") {
                    flag = svgList.languages.english
                } else if (item.language === "german") {
                    flag = svgList.languages.german
                } else if (item.language === "code") {
                    flag = svgList.languages.code
                } else if (item.language === "japanese") {
                    flag = svgList.languages.japanese
                }

                return (
                    <div key={ind} className="p-6 md:w-[45%] w-full">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 pb-9 shadow-xl shadow-shadow h-full">
                            <img
                                className="absolute inset-0 h-full w-full object-cover brightness-25 saturate-100"
                                src={imgList.lang.bg}
                                alt=""
                            />

                            <figure className="relative isolate">
                                {/* MAAL Starts */}

                                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                                    <span className='text-3xl flex flex-row align-middle gap-3'>
                                        {capitalizeWords(item.language)} 
                                            {flag}
                                    </span>
                                </blockquote>
                                <figcaption className="mt-6 text-md leading-6 text-gray-300 font-normal" dangerouslySetInnerHTML={{ __html: item.description }}>

                                </figcaption>

                                {/* MAAL Ends */}
                            </figure>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

Languages.propTypes = {}

export default Languages
