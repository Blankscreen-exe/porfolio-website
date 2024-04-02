import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'

// Constants
import appConstants from '../constants/appConstants'

// Components
import PageTitle from './common/PageTitle'
import Home from './home'
import About from './about'
import Contact from './contact'
import Services from './services'
import Error404 from './common/404'
import WorkExperience from './workHistory'

function RoutesList(props) {
  return (
    <Routes>
        <Route path={appConstants.routes.home} element={<Home/>}/>
        <Route path={appConstants.routes.aboutMe} element={<About/>}/>
        <Route path={appConstants.routes.blog} element={<PageTitle title="Blog"/>}/>

        <Route path={appConstants.routes.experience} element={<WorkExperience/>}/>
        <Route path={appConstants.routes.experienceWorkHistory} element={<WorkExperience/>}/>
        <Route path={appConstants.routes.experienceAwards} element={<PageTitle title="Work Experience Award"/>}/>
        <Route path={appConstants.routes.experienceCertificates} element={<PageTitle title="Work Experience Certificates"/>}/>
        <Route path={appConstants.routes.experienceUpcomingSkills} element={<PageTitle title="Work Experience UpComing Skills"/>}/>

        <Route path={appConstants.routes.faq} element={<PageTitle title="FAQ"/>}/>

        <Route path={appConstants.routes.lists} element={<PageTitle title="List"/>}/>
        <Route path={appConstants.routes.listsGames} element={<PageTitle title="Lists of Game"/>}/>
        <Route path={appConstants.routes.listsBooks} element={<PageTitle title="Lists of Book"/>}/>
        <Route path={appConstants.routes.listsResources} element={<PageTitle title="Lists Resource"/>}/>

        <Route path={appConstants.routes.services} element={<Services/>}/>
        <Route path={appConstants.routes.servicesBackend} element={<Services/>}/>
        <Route path={appConstants.routes.servicesFrontend} element={<Services/>}/>
        <Route path={appConstants.routes.servicesMachineLearning} element={<Services/>}/>
        <Route path={appConstants.routes.servicesMentorship} element={<Services/>}/>
        <Route path={appConstants.routes.servicesFaq} element={<Services/>}/>

        <Route path={appConstants.routes.projects} element={<PageTitle title="Project"/>}/>

        <Route path={appConstants.routes.contacts} element={<Contact/>}/>

        <Route path={"*"} element={<Error404/>}/>
    </Routes>
  )
}

RoutesList.propTypes = {}

export default RoutesList
