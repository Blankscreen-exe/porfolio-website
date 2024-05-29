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
import BookList from './booksList'
import GameList from './gameList'
import DevResourceList from './devResourceList'
import TargetSkillSet from './targetSkillSet'
import Certificates from './certificates'
import Blog from './blog'
import Project from './projects'

function RoutesList(props) {
  return (
    <Routes>
        <Route path={appConstants.routes.home} element={<Home/>}/>
        <Route path={appConstants.routes.aboutMe} element={<About/>}/>
        <Route path={appConstants.routes.blog} element={<Blog/>}/>

        {/* <Route path={appConstants.routes.experience} element={<WorkExperience/>}/> */}
        <Route path={appConstants.routes.experienceWorkHistory} element={<WorkExperience/>}/>
        {/* <Route path={appConstants.routes.experienceAwards} element={<PageTitle title="Work Experience Award"/>}/> */}
        <Route path={appConstants.routes.experienceCertificates} element={<Certificates/>}/>
        <Route path={appConstants.routes.experienceUpcomingSkills} element={<TargetSkillSet/>}/>

        {/* <Route path={appConstants.routes.faq} element={<PageTitle title="FAQ"/>}/> */}

        {/* <Route path={appConstants.routes.lists} element={<PageTitle title="List"/>}/> */}
        <Route path={appConstants.routes.listsGames} element={<GameList/>}/>
        <Route path={appConstants.routes.listsBooks} element={<BookList/>}/>
        <Route path={appConstants.routes.listsResources} element={<DevResourceList/>}/>

        <Route path={appConstants.routes.services} element={<Services/>}/>
        <Route path={appConstants.routes.servicesBackend} element={<Services/>}/>
        <Route path={appConstants.routes.servicesFrontend} element={<Services/>}/>
        <Route path={appConstants.routes.servicesMachineLearning} element={<Services/>}/>
        <Route path={appConstants.routes.servicesMentorship} element={<Services/>}/>
        <Route path={appConstants.routes.servicesFaq} element={<Services/>}/>

        <Route path={appConstants.routes.projects} element={<Project/>}/>

        <Route path={appConstants.routes.contacts} element={<Contact/>}/>

        <Route path={"*"} element={<Error404/>}/>
    </Routes>
  )
}

RoutesList.propTypes = {}

export default RoutesList
