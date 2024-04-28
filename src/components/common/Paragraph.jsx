import React from 'react'
import PropTypes from 'prop-types'

function Paragraph(props) {
    const {text} = props;
  return (
    <div className='mb-12'>
        <p className="mx-auto w-[80%] font-normal" dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}

Paragraph.propTypes = {}

export default Paragraph
