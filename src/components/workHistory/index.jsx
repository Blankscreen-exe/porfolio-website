import React from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../common/PageTitle'
import TimeLine from './TimeLine'
import Awards from './Awards'
import SectionHeading from '../common/SectionHeading'

function WorkExperience(props) {
  window.scrollTo(0, 0);
  return (
    <div>
        <PageTitle title="Honors & Awards"/>
        {/* <TimeLine/> */}

        {/* <SectionHeading title={"Honors & Awards"}/> */}
        <Awards/>
    </div>
  )
}

WorkExperience.propTypes = {}

export default WorkExperience
