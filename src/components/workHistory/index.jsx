import React from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../common/PageTitle'
import TimeLine from './TimeLine'
import Awards from './Awards'
import SectionHeading from '../common/SectionHeading'

function WorkExperience(props) {
  return (
    <div>
        <PageTitle title="Work Experience"/>
        <TimeLine/>

        <SectionHeading title={"Honors & Awards"}/>
        <Awards/>
    </div>
  )
}

WorkExperience.propTypes = {}

export default WorkExperience
