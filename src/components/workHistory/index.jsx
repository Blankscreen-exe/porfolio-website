import React from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../common/PageTitle'
import TimeLine from './TimeLine'

function WorkExperience(props) {
  return (
    <div>
        <PageTitle title="Work Experience"/>
        <TimeLine/>
    </div>
  )
}

WorkExperience.propTypes = {}

export default WorkExperience
