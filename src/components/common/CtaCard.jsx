import React from "react";
import PropTypes from "prop-types";

// Constants
import svgList from "../../constants/svg";
import imgList from "../../constants/img";

function CtaCard(props) {

  return (
    <div>
      <div className="p-6">
        <div className="relative overflow-hidden rounded-2xl bg-bg2 px-6 pb-9 shadow-xl shadow-shadow mx-auto my-7 sm:px-12 lg:max-w-[80%] lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 ">
          <img
            className="absolute inset-0 h-full w-full object-cover brightness-25 saturate-100"
            src={imgList.cta.bg}
            alt=""
          />

          <figure className="relative isolate">
            {/* MAAL Starts */}

            {svgList.quotationMarksCTA}
            <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
              <p>Some witty comment here</p>
            </blockquote>
            <figcaption className="mt-6 text-sm leading-6 text-gray-300">
              <strong className="font-semibold text-white">
                Shehab Najib,
              </strong>{" "}
              ceo of ISREN
            </figcaption>

            <div className="flex flex-col justify-around mt-10 md:flex-row lg:flex-row gap-4 md:gap-4 lg:gap-4">
              <div className="text-white hover:bg-white hover:text-black border rounded-md p-3 hover:cursor-pointer transition-all duration-500">
                Dummy Button
              </div>
              <div className="text-white hover:bg-white hover:text-black border rounded-md p-3 hover:cursor-pointer transition-all duration-500">
                Dummy Button
              </div>
              <div className="text-white hover:bg-white hover:text-black border rounded-md p-3 hover:cursor-pointer transition-all duration-500">
                Dummy Button
              </div>
            </div>

            {/* MAAL Ends */}
          </figure>
        </div>
      </div>
    </div>
  );
}

CtaCard.propTypes = {};

export default CtaCard;
