import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Constants
import svgLists from '../../constants/svg'
import { classAdd } from '../../helpers/common'

function ThemeSwitch(props) {

    const [isDarkmode, setIsDarkmode] = useState(false)
    let toggleTheme;

    toggleTheme = () => {
        setIsDarkmode(prevState => !prevState)
        console.log("THEME SWITCHED TO ", isDarkmode? "--DARK--" :"--LIGHT--")
      }
    useEffect(() => {
        toggleTheme = () => {
          setIsDarkmode(prevState => !prevState)
          console.log("THEME SWITCHED TO ", isDarkmode? "--DARK--" :"--LIGHT--")
        }
      
    
      return () => {
        
      }
    }, [isDarkmode])
    
    
    
  return (
    <div className='h-fit mt-2'>
        <label className="swap swap-rotate" onClick={toggleTheme}>
  
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className='hidden'/>
        
        {/* sun icon */}
        {svgLists.themeButton.light}
        
        {/* moon icon */}
        {svgLists.themeButton.dark}
        
        <span className='ml-8'>{isDarkmode? "Dark Mode" :"Light Mode"}</span>
        </label>

    </div>
  )
}

ThemeSwitch.propTypes = {}

export default ThemeSwitch
