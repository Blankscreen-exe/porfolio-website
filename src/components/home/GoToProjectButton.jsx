import React from "react";
import PropTypes from "prop-types";

// constants
import svgList from "../../constants/svg";
import appConstants from '../../constants/appConstants'

//components
import { NavLink } from "react-router-dom";

function GoToProjectButton(props) {
  // REF:https://codepen.io/Blankeos/pen/ExZajjJ
  return (
    <div>
      <button
            id="button"
            class="pulse transition-all duration-200 group bg-gradient-to-tr from-teal-600 to-teal-400 hover:from-teal-500 hover:to-teal-400 focus:outline-none text-white text-2xl font-normal hover:shadow-lg hover:shadow-yellow-400/20 cursor-pointer flex justify-between items-center overflow-hidden hover:glow mx-auto border-lime-800 border-t-2 border-l-2 border-r-2 border-b-4 hover:border-b-2"
          >
            <div class="relative w-12 h-12 bg-white bg-opacity-20 text-white flex justify-center items-center transition-all">
              {svgList.awards.workshop}
            </div>
            <p class="px-5">My Projects</p>
          </button>
    {/* <NavLink to={appConstants.routes.projects} className='block mx-auto w-fit'>
      <div class="homeProjectVisitButton mx-auto h-16 w-64 flex justify-center items-center">
        <div class="homeProjectVisitButton animate-pulse-ring h-16 w-64 transition-all duration-200 group bg-gradient-to-tr from-[#14a800] to-[#8fe384] hover:from-[#00a83b] hover:to-[#b6feb0] focus:outline-none text-white text-2xl font-normal hover:shadow-lg hover:shadow-yellow-400/20 cursor-pointer flex justify-between items-center overflow-hidden hover:glow mx-auto border-lime-800 border-t-2 border-l-2 border-r-2 border-b-4 hover:border-b-2 absolute transform hover:scale-x-110 hover:scale-y-105"></div>
        <span class="text-center text-white text-2xl font-normal z-10 pointer-events-none flex justify-content gap-4 items-center">
            Click Here 
        </span>
      </div>
      </NavLink> */}
    </div>
  );
}

GoToProjectButton.propTypes = {};

export default GoToProjectButton;
