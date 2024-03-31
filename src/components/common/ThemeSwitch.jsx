import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// reducer
import { useDispatch, useSelector } from 'react-redux'
import { toggleThemeAction } from '../../redux/reducers/colorThemeSlice'

// Constants
import svgLists from '../../constants/svg'

function ThemeSwitch(props) {

  const dispatch = useDispatch()
  
  const isDarkMode = useSelector((state) => {
    return state.persistedReducer.colorTheme
  })

  const handleToggleTheme = () => {
      dispatch(toggleThemeAction())
      document.documentElement.setAttribute("data-theme", isDarkMode? "dark" :"light")
      console.log("THEME SWITCHED TO ", isDarkMode? "--DARK--" :"--LIGHT--")
    }   
    
    
  return (
    <div className='h-fit px-2 py-1 flex items-center rounded-md hover:bg-bg2'>
        <label className="flex flex-row gap-2">
  
        {/* this hidden checkbox controls the state */}
        {/* <input type="checkbox" className='hidden' onClick={handleToggleTheme}/> */}
        
        {isDarkMode
        ? svgLists.themeButton.light 
        : svgLists.themeButton.dark
        }

        {/* moon icon */}
        {/* {svgLists.themeButton.dark} */}

        {/* sun icon */}
        {/* {svgLists.themeButton.light} */}
        
        <span className='hidden sm:block md:block lg:block' onClick={handleToggleTheme}>{isDarkMode? "Light Mode": "Dark Mode"}</span>
        </label>

    </div>
  )
}

ThemeSwitch.propTypes = {}

export default ThemeSwitch
