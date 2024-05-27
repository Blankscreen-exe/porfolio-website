import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// reducer
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeAction } from "../../redux/reducers/colorThemeSlice";

// Constants
import svgLists from "../../constants/svg";

function ThemeSwitch(props) {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => {
    return state.persistedReducer.isDarkMode;
  });

  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode ? "dark" : "light"
    );

  const handleToggleTheme = () => {
    console.log("isdarkmode === ", isDarkMode)
  
    // TODO: do it without reload
    dispatch(toggleThemeAction());
    // location.reload()
    console.log("THEME SWITCHED TO ", isDarkMode ? "--DARK--" : "--LIGHT--");

    // document.documentElement.setAttribute(
    //   "data-theme",
    //   isDarkMode ? "light" : "dark"
    //   );
  };

  window.addEventListener("load", (event) => {
    console.log("DOC LOADED ");
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  });

  return (
    <div className="h-fit px-2 py-1 flex items-center rounded-md hover:bg-bg2/90 hover:text-content/80 transition-colors duration-300">
      <label className="swap swap-rotate hover:cursor-pointer" >
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className='hidden' onClick={handleToggleTheme}/>

        {isDarkMode ? svgLists.themeButton.light : svgLists.themeButton.dark}

        {/* moon icon */}
        {/* {svgLists.themeButton.dark} */}

        {/* sun icon */}
        {/* {svgLists.themeButton.light} */}

        {/* <span className="hidden sm:block md:block lg:block ml-8">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span> */}
      </label>
    </div>
  );
}

ThemeSwitch.propTypes = {};

export default ThemeSwitch;
