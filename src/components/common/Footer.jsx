import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import appConstants from '../../constants/appConstants'
import svgLists from '../../constants/svg'
function Footer(props) {
  return (
    <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <NavLink to={appConstants.routes.servicesBackend} className="link link-hover">Backend</NavLink >
    <NavLink to={appConstants.routes.servicesFrontend} className="link link-hover">Frontend</NavLink >
    <NavLink to={appConstants.routes.servicesDataScience} className="link link-hover">Data Science</NavLink >
    <NavLink to={appConstants.routes.servicesMentorship} className="link link-hover">Mentorship</NavLink >
  </nav> 
  <nav>
    <h6 className="footer-title">Pages</h6> 
    <NavLink to={appConstants.routes.home} className="link link-hover">Home</NavLink >
    <NavLink to={appConstants.routes.aboutMe} className="link link-hover">About Me</NavLink >
    <NavLink to={appConstants.routes.projects} className="link link-hover">Projects</NavLink >
    <NavLink to={appConstants.routes.experience} className="link link-hover">Experience</NavLink >
    <NavLink to={appConstants.routes.blog} className="link link-hover">Blog</NavLink >
    <NavLink to={appConstants.routes.contacts} className="link link-hover">Contact</NavLink >
  </nav> 
  <nav>
    <h6 className="footer-title">Lists</h6> 
    <NavLink to={appConstants.routes.listsBooks} className="link link-hover">Books</NavLink >
    <NavLink to={appConstants.routes.listsGames} className="link link-hover">Games</NavLink >
    <NavLink to={appConstants.routes.listsResources} className="link link-hover">Dev Resources</NavLink >
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    {svgLists.hashIcon}
    <p>ACME Industries Ltd. <br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      {/* TODO: icons to add Linkedin, Github, Discord, E business card*/}
      <NavLink to={""} >{svgLists.socialIcons.twitter}</NavLink >
      <NavLink to={""} >{svgLists.socialIcons.youtube}</NavLink >
      <NavLink to={""} >{svgLists.socialIcons.facebook}</NavLink >
    </div>
  </nav>
</footer>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
