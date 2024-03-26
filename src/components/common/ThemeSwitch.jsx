import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Constants
import svgLists from '../../constants/svg'

function ThemeSwitch(props) {

    const [isDarkmode, setIsDarkmode] = useState(false)
    
    const toggleTheme = () => {
        setIsDarkmode(prevState => !prevState)
        document.documentElement.setAttribute("data-theme", isDarkmode? "dark" :"light")
        console.log("THEME SWITCHED TO ", isDarkmode? "--DARK--" :"--LIGHT--")
      }   
    
    
  return (
    <div className='h-fit mt-2 px-2'>
        <label className="swap swap-rotate">
  
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className='hidden' onClick={toggleTheme}/>
        
        {/* sun icon */}
        {svgLists.themeButton.light}
        
        {/* moon icon */}
        {svgLists.themeButton.dark}
        
        <span className='ml-8 hidden sm:block md:block lg:block'>{isDarkmode? "Dark Mode" :"Light Mode"}</span>
        </label>

    </div>
  )
}

ThemeSwitch.propTypes = {}

export default ThemeSwitch
