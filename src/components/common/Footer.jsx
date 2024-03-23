import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// Constants
import appConstants from '../../constants/appConstants'
import svgLists from '../../constants/svg'
import {classLists} from '../../constants/cssClasses'

import { getClassesFromConstants, classAdd } from '../../helpers/common'

function Footer(props) {

  const navLinkClasses = getClassesFromConstants(classLists.navLink)
  console.log(navLinkClasses)

  return (
    <div className='mb-5'>
        <footer className="footer p-10 bg-base-200 text-base-content rounded-t-md">
          <nav>
            <h6 className="footer-title font-bold font-sans text-slate-900 border-b-2 border-b-primary">Pages</h6> 
            <NavLink to={appConstants.routes.home} className={navLinkClasses}>Home</NavLink >
            <NavLink to={appConstants.routes.aboutMe} className={navLinkClasses}>About Me</NavLink >
            <NavLink to={appConstants.routes.projects} className={navLinkClasses}>Projects</NavLink >
            <NavLink to={appConstants.routes.experience} className={navLinkClasses}>Experience</NavLink >
            <NavLink to={appConstants.routes.blog} className={navLinkClasses}>Blog</NavLink >
            <NavLink to={appConstants.routes.contacts} className={navLinkClasses}>Contact</NavLink >
          </nav> 
          <nav>
            <h6 className="footer-title font-bold font-sans text-slate-900 border-b-2 border-b-primary">Services</h6> 
            <NavLink to={appConstants.routes.servicesBackend} className={navLinkClasses}>Backend</NavLink >
            <NavLink to={appConstants.routes.servicesFrontend} className={navLinkClasses}>Frontend</NavLink >
            <NavLink to={appConstants.routes.servicesDataScience} className={navLinkClasses}>Data Science</NavLink >
            <NavLink to={appConstants.routes.servicesMentorship} className={navLinkClasses}>Mentorship</NavLink >
          </nav> 
          <nav>
            <h6 className="footer-title font-bold font-sans text-slate-900 border-b-2 border-b-primary">Lists</h6> 
            <NavLink to={appConstants.routes.listsBooks} className={navLinkClasses}>Books</NavLink >
            <NavLink to={appConstants.routes.listsGames} className={navLinkClasses}>Games</NavLink >
            <NavLink to={appConstants.routes.listsResources} className={navLinkClasses}>Dev Resources</NavLink >
          </nav>

        </footer> 
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 rounded-b-md">
          <aside className="items-center grid-flow-col">
            {svgLists.hashIcon}
            <p><b>M.Hammad Hassan</b> <br/>Code is a language I can speak!</p>
          </aside> 
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              {/* TODO: icons to add Linkedin, Github, Discord, E business card*/}
              <NavLink to={""}  className={navLinkClasses}>{svgLists.socialIcons.twitter}</NavLink >
              <NavLink to={""}  className={navLinkClasses}>{svgLists.socialIcons.youtube}</NavLink >
              <NavLink to={""}  className={navLinkClasses}>{svgLists.socialIcons.facebook}</NavLink >
              <NavLink to={""}  className={navLinkClasses}>{svgLists.socialIcons.medium}</NavLink >
              
            </div>
          </nav>
        </footer>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
