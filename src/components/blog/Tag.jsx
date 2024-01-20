import React from 'react'
import PropTypes from 'prop-types'

function Tag(props) {
    const {name} = props;
  return (
    // <div className='inline-flex items-center rounded-md bg-gray-50 hover:bg-gray-10 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>#{name}</div>
    <div className='badge badge-outline'>#{name}</div>
  )
}

Tag.propTypes = {}

export default Tag
