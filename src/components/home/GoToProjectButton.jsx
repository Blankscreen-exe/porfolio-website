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
    <NavLink to={appConstants.routes.projects} className='block mx-auto w-fit'>
      <div class="homeProjectVisitButton animate-bounce mx-auto h-16 w-64 flex justify-center items-center">
        <div class="homeProjectVisitButton h-16 w-64 bg-gradient-to-br from-primary to-cyan-700 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
        <span class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content gap-4 items-center">
          {svgList.awards.workshop}  Click Here Then 
        </span>
      </div>
      </NavLink>
    </div>
  );
}

GoToProjectButton.propTypes = {};

export default GoToProjectButton;
