import React from 'react'
import PropTypes from 'prop-types'

function SectionHeading(props) {
  return (
    <div className='flex flex-row justify-center items-center'>
        <h1 className='text-3xl font-bold text-title my-10 text-center'>{props.title}</h1>
    </div>
  )
}

SectionHeading.propTypes = {
    "title" : PropTypes.string
}

export default SectionHeading
