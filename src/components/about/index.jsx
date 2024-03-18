import React from 'react'
import PropTypes from 'prop-types'

// Components
import SectionHeading from '../common/SectionHeading'
import BlockQuote from '../common/BlockQuote'

function About(props) {
  return (
    <div>
        {/* TODO: add title */}
        <BlockQuote
            text="Some <b>awesome</b> stuff about me. I'm great! Sore dakke do ..."
        />
        <SectionHeading
            title="Education"
        />
        {/* TODO: show vertical timeline */}
        <br/>
        <SectionHeading
            title="Languages"
        />
        {/* TODO: show two cards side by side like CTA card */}
        <br/>
        <SectionHeading
            title="Hobbies"
        />
        {/* TODO: show doughnut chart */}
    </div>
  )
}

About.propTypes = {}

export default About
