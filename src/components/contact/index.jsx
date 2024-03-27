import React from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../common/PageTitle'
import Form from './Form'

function Contact(props) {
  return (
    <div>
        <PageTitle title="Let's Get In Touch!"/>

        <Form/>
    </div>
  )
}

Contact.propTypes = {}

export default Contact
