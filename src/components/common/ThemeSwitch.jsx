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
    <div className='h-fit mt-2 px-2'>
        <label className="swap swap-rotate">
  
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className='hidden' onClick={handleToggleTheme}/>
        
        {/* moon icon */}
        {svgLists.themeButton.dark}

        {/* sun icon */}
        {svgLists.themeButton.light}
        
        <span className='ml-8 hidden sm:block md:block lg:block'>{isDarkMode? "Dark Mode": "Light Mode"}</span>
        </label>

    </div>
  )
}

ThemeSwitch.propTypes = {}

export default ThemeSwitch
