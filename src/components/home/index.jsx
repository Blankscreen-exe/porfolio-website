import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../common/navbar'
import Hero from './Hero'
import Testimonials from './Testimonials'

function Home(props) {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Testimonials/>

    </div>
  )
}

Home.propTypes = {}

export default Home
