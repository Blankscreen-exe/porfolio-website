import React from 'react'
import PropTypes from 'prop-types'

// constants
import socialLinks from '../../data/socialLinks.json';


function PastClientReachout(props) {
  return (
    <div>
        <div className='mb-12'>
            <p className="mx-auto w-[100%] font-normal text-center text-content" >Please consider leaving a testimonial on <a href={socialLinks.upwork} target='_blank' className='text-contentLinkHover underline'> Upwork</a> or <a href={socialLinks.upwork} target='_blank' className='text-contentLinkHover underline'>Linkedin</a>. That would mean a whole world to me!</p>
        </div>
    </div>
  )
}

PastClientReachout.propTypes = {}

export default PastClientReachout
