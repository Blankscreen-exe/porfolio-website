import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'

// Constants
import appConstants from '../constants/appConstants'

// Components
import Home from './home'

function RoutesList(props) {
  return (
    <Routes>
        <Route path={appConstants.routes.home} element={<Home/>}/>
        <Route path={appConstants.routes.aboutMe} element={<h1>About me</h1>}/>
        <Route path={appConstants.routes.blog} element={<h1>Blog</h1>}/>

        <Route path={appConstants.routes.experience} element={<h1>Work Experience</h1>}/>
        <Route path={appConstants.routes.experienceWorkHistory} element={<h1>Work Experience Work History</h1>}/>
        <Route path={appConstants.routes.experienceAwards} element={<h1>Work Experience Awards</h1>}/>
        <Route path={appConstants.routes.experienceCertificates} element={<h1>Work Experience Certificates</h1>}/>
        <Route path={appConstants.routes.experienceUpcomingSkills} element={<h1>Work Experience Targetted skills</h1>}/>

        <Route path={appConstants.routes.faq} element={<h1>FAQ</h1>}/>

        <Route path={appConstants.routes.lists} element={<h1>Lists</h1>}/>
        <Route path={appConstants.routes.listsGames} element={<h1>Lists of Games</h1>}/>
        <Route path={appConstants.routes.listsBooks} element={<h1>Lists of Books</h1>}/>
        <Route path={appConstants.routes.listsResources} element={<h1>Lists Resources</h1>}/>

        <Route path={appConstants.routes.services} element={<h1>Services</h1>}/>
        <Route path={appConstants.routes.servicesBackend} element={<h1>Services Backend</h1>}/>
        <Route path={appConstants.routes.servicesFrontend} element={<h1>Services Frontend</h1>}/>
        <Route path={appConstants.routes.servicesDataScience} element={<h1>Services DataScience</h1>}/>
        <Route path={appConstants.routes.servicesMentorship} element={<h1>Services Mentorship</h1>}/>

        <Route path={appConstants.routes.projects} element={<h1>Projects</h1>}/>

        <Route path={appConstants.routes.contacts} element={<h1>Contacts</h1>}/>

        <Route path={"*"} element={<h1 className='text-red-600 font-bold'>404 Not Found</h1>}/>
    </Routes>
  )
}

RoutesList.propTypes = {}

export default RoutesList
