import React from "react";
import PropTypes from "prop-types";

// constants
import socialLinks from "../../data/socialLinks.json";
import svgList from "../../constants/svg";

function PastClientReachout(props) {
  return (
    <div>
      <div className="mb-12">
        <p className="mx-auto w-[100%] font-normal text-xl text-center text-content">
          If you've learned from me or enjoyed working together, a
          recommendation on my{" "}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            className="text-contentLinkHover underline"
          >
            LinkedIn Profile
          </a>{" "}
          would be amazing and just so you know, that would mean a whole world
          to me!
        </p>
      </div>

      <div className="mb-4 flex justify-center">
        <a href={socialLinks.linkedin} className="inline-block" target='_blank'>
          <button
            id="button"
            className="transition-all duration-200 group bg-gradient-to-tr from-[#0a66c2] to-[#378fe9] hover:from-[#004182] hover:to-[#0a66c2] focus:outline-none text-white text-2xl font-normal hover:shadow-lg hover:shadow-[#378fe9]/20 cursor-pointer flex justify-between items-center overflow-hidden hover:glow border-[#004182] border-t-2 border-l-2 border-r-2 border-b-4 hover:border-b-2"
          >
            <div className="relative w-12 h-12 bg-white bg-opacity-20 text-white flex justify-center items-center transition-all">
              {svgList.socialIcons.linkedin}
            </div>
            <p className="px-5">Recommend Me</p>
          </button>
        </a>
      </div>
      <div className="mb-12">
        <p className="mx-auto w-[100%] font-normal text-center text-content">
          C'mon Please! 😁
        </p>
      </div>

    </div>
  );
}

PastClientReachout.propTypes = {};

export default PastClientReachout;
