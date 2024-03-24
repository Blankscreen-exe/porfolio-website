import React from 'react'
import PropTypes from 'prop-types'

// Constants
import svgList from "../../constants/svg";
import imgList from "../../constants/img";

function Languages(props) {
  return (
    <div className='flex md:flex-row flex-wrap justify-around flex-col'>
    <div className="p-6 md:w-[45%] w-full">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 pb-9 shadow-xl shadow-slate-400">
            <img
            className="absolute inset-0 h-full w-full object-cover brightness-20 saturate-100"
            src={imgList.cta.bg}
            alt=""
            />

            <figure className="relative isolate">
            {/* MAAL Starts */}

            <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                <p className='text-3xl'>English</p>
            </blockquote>
            <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                Reason Why I speak English ... Or even so ... why I speak at all ...
            </figcaption>

            {/* MAAL Ends */}
            </figure>
        </div>
    </div>
        
    <div className="p-6  md:w-[45%] w-full">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 pb-9 shadow-xl shadow-slate-400">
            <img
            className="absolute inset-0 h-full w-full object-cover brightness-20 saturate-100"
            src={imgList.cta.bg}
            alt=""
            />

            <figure className="relative isolate">
            {/* MAAL Starts */}

            <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                <p className='text-3xl'>German</p>
            </blockquote>
            <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                Reason Why I speak German ... Or even so ... why I speak at all ...
            </figcaption>

            {/* MAAL Ends */}
            </figure>
        </div>
    </div>
    
    <div className="p-6  md:w-[45%] w-full">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 pb-9 shadow-xl shadow-slate-400">
            <img
            className="absolute inset-0 h-full w-full object-cover brightness-20 saturate-100"
            src={imgList.cta.bg}
            alt=""
            />

            <figure className="relative isolate">
            {/* MAAL Starts */}

            <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                <p className='text-3xl'>Code</p>
            </blockquote>
            <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                <p>Yes ... I can talk to machines using a language called <strong>binary</strong>. Those 0s and 1s start making sense once you get the hang of it.</p> 
                <br/>
                <p>Don't worry, I'm fluent in Python, JS, C#, and the hottest frameworks you can imagine!</p>
            </figcaption>

            {/* MAAL Ends */}
            </figure>
        </div>
    </div>
  </div>
  )
}

Languages.propTypes = {}

export default Languages
