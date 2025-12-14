import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// Constants
import appConstants from '../../constants/appConstants'
import svgLists from '../../constants/svg'
import {classLists} from '../../constants/cssClasses'
import socialLinks from '../../data/socialLinks.json'

import { getClassesFromConstants, classAdd } from '../../helpers/common'

function Footer(props) {

  const navLinkClasses = classAdd(getClassesFromConstants(classLists.navLink), "hover:underline", "hover:underline-offset-1")

  return (
    <div className='mb-5 drop-shadow-sm'>
        <footer className="footer p-10 bg-tertiary text-base-content rounded-t-md">
          <nav>
            <h6 className="footer-title font-bold font-sans text-content border-b-2 border-b-primary">Pages</h6> 
            <NavLink to={appConstants.routes.home} className={navLinkClasses}>Home</NavLink >
            <NavLink to={appConstants.routes.aboutMe} className={navLinkClasses}>About Me</NavLink >
            {/* <NavLink to={appConstants.routes.services} className={navLinkClasses}>Services</NavLink > */}
            <NavLink to={appConstants.routes.projects} className={navLinkClasses}>Projects</NavLink >
            <NavLink to={appConstants.routes.blog} className={navLinkClasses}>Blog</NavLink >
            <NavLink to={appConstants.routes.contacts} className={navLinkClasses}>Contact</NavLink >
          </nav> 
          <nav>
            <h6 className="footer-title font-bold font-sans text-content border-b-2 border-b-primary">My Work</h6> 
            <NavLink to={appConstants.routes.experienceWorkHistory} className={navLinkClasses}>Experience & Awards</NavLink >
            <NavLink to={appConstants.routes.experienceCertificates} className={navLinkClasses}>Certificates</NavLink >
            {/* <NavLink to={appConstants.routes.experienceUpcomingSkills} className={navLinkClasses}>Targetted Skills</NavLink > */}
          </nav> 
          <nav>
            <h6 className="footer-title font-bold font-sans text-content border-b-2 border-b-primary">Services</h6> 
            <NavLink to={appConstants.routes.servicesBackend} className={navLinkClasses}>Backend</NavLink >
            <NavLink to={appConstants.routes.servicesFrontend} className={navLinkClasses}>Frontend</NavLink >
            <NavLink to={appConstants.routes.servicesMachineLearning} className={navLinkClasses}>Machine Learning</NavLink >
            <NavLink to={appConstants.routes.servicesMentorship} className={navLinkClasses}>Mentorship</NavLink >
          </nav> 
          <nav>
            <h6 className="footer-title font-bold font-sans text-content border-b-2 border-b-primary">Lists</h6> 
            <NavLink to={appConstants.routes.listsBooks} className={navLinkClasses}>Books</NavLink >
            <NavLink to={appConstants.routes.listsBookmarks} className={navLinkClasses}>Games</NavLink >
            {/* <NavLink to={appConstants.routes.listsResources} className={navLinkClasses}>Dev Resources</NavLink > */}
          </nav>

        </footer> 
        <footer className="footer px-10 py-4 border-t bg-tertiary/90 text-base-content border-base-300 rounded-b-md">
          <aside className="items-center grid-flow-col">
            {svgLists.hashIcon}
            <p><b className='text-primary'>M.Hammad Hassan</b> <br/>Senior Engineer</p>
          </aside> 
          <nav className="md:place-self-center md:justify-self-end w-full md:w-fit">
            <div className="w-full md:w-fit grid grid-flow-col gap-4">
              {/* TODO: icons to add Linkedin, Github, Discord, E business card*/}
              <NavLink to={socialLinks.upwork}  className={navLinkClasses}>{svgLists.socialIcons.upwork}</NavLink >
              <NavLink to={socialLinks.discord}  className={navLinkClasses}>{svgLists.socialIcons.discord}</NavLink >
              <NavLink to={socialLinks.github}  className={navLinkClasses}>{svgLists.socialIcons.github}</NavLink >
              <NavLink to={socialLinks.linkedin}  className={navLinkClasses}>{svgLists.socialIcons.linkedin}</NavLink >
              <NavLink to={socialLinks.medium}  className={navLinkClasses}>{svgLists.socialIcons.medium}</NavLink >
              
            </div>
          </nav>
        </footer>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
