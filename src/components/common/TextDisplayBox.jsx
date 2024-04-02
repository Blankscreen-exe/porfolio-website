import React from 'react'
import PropTypes from 'prop-types'

function TextDisplayBox(props) {
    const {text} = props;
  return (
    <div className="text-contentLink p-3 rounded-md drop-shadow-lg bg-bg1 shadow-black/60 border-2 border-tertiary w-fit mx-auto" dangerouslySetInnerHTML={{ __html: text }}>
    </div>
  )
}

TextDisplayBox.propTypes = {}

export default TextDisplayBox
