import React from 'react'
import PropTypes from 'prop-types'

// Components
import SectionHeading from '../common/SectionHeading'
import BlockQuote from '../common/BlockQuote'
import PageTitle from '../common/PageTitle'
import Education from './Education'
import Languages from './Languages'
import Hobbies from './Hobbies'

function About(props) {
  return (
    <div>

        <PageTitle
        title={"Who Am I?"}
        />

        <BlockQuote
            text="Some <b>awesome</b> stuff about me. I'm great! Sore dakke do ..."
        />

        <SectionHeading
            title="Education Timeline"
        />
        <Education/>

        <br/>

        <SectionHeading
            title="Languages I Can Speak~"
        />
        <Languages/>

        <br/>

        <SectionHeading
            title="Hobbies"
        />
        {/* FIXME: multiple component runs */}
        {/* <Hobbies/> */}
    </div>
  )
}

About.propTypes = {}

export default About
