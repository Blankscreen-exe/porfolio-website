import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'

// Data
import appConstants from '../constants/appConstants'
import Home from './home'

// Components

function RoutesList(props) {
  return (
    <Routes>
        <Route path={appConstants.routes.home} element={<Home/>}/>
        <Route path={appConstants.routes.aboutMe} element={<h1>About me</h1>}/>
        <Route path={appConstants.routes.blog} element={<h1>Blog</h1>}/>
        <Route path={appConstants.routes.experience} element={<h1>Work Experience</h1>}/>
        <Route path={appConstants.routes.faq} element={<h1>FAQ</h1>}/>
        <Route path={appConstants.routes.lists} element={<h1>Lists</h1>}/>
        <Route path={appConstants.routes.services} element={<h1>Services</h1>}/>
        <Route path={appConstants.routes.contacts} element={<h1>Contacts</h1>}/>
    </Routes>
  )
}

RoutesList.propTypes = {}

export default RoutesList
