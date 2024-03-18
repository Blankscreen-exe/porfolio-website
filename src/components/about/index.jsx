import React from 'react'
import PropTypes from 'prop-types'

// Components
import SectionHeading from '../common/SectionHeading'
import BlockQuote from '../common/BlockQuote'

function About(props) {
  return (
    <div>
        <BlockQuote
            text="Some great stuff about me. I'm great! Sore dakke do ..."
        />
        <SectionHeading
            title="Education"
        />
        <SectionHeading
            title="Languages"
        />
        <SectionHeading
            title="Hobbies"
        />
    </div>
  )
}

About.propTypes = {}

export default About
