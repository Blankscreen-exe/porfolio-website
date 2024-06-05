import React from 'react'
import PropTypes from 'prop-types'

// Components
import ServicesTabs from './ServicesTabs'
import PageTitle from '../common/PageTitle'
import FAQ from './FAQ'
import SectionHeading from '../common/SectionHeading'


function Services(props) {
  window.scrollTo(0, 0);
  return (
    <div>
        <PageTitle title="What Can I Do For You?" />
        <ServicesTabs/>
        <FAQ/>
    </div>
  )
}

Services.propTypes = {}

export default Services
