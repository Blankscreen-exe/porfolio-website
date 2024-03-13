import React from 'react'
import PropTypes from 'prop-types'

// Components
import Hero from './Hero'
import Testimonials from './Testimonials'

function Home(props) {
  return (
    <>
        <Hero/>
        <Testimonials/>
    </>
  )
}

Home.propTypes = {}

export default Home
