import React from 'react'
import PropTypes from 'prop-types'

// Components
import ServicesTabs from './ServicesTabs'
import PageTitle from '../common/PageTitle'

function Services(props) {
  return (
    <div>
        <PageTitle title="What Can I Do For You?" />
        <ServicesTabs/>
    
    </div>
  )
}

Services.propTypes = {}

export default Services
