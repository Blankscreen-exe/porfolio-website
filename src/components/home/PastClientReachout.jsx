import React from 'react'
import PropTypes from 'prop-types'

// constants
import socialLinks from '../../data/socialLinks.json';


function PastClientReachout(props) {
  return (
    <div>
        <div className='mb-12'>
            <p className="mx-auto w-[100%] font-normal text-center text-content" >If you are one of my students or a client with which I have worked before or even someone with whom I have had the pleasure of working alongside with, then please consider leaving a recommendation on my <a href={socialLinks.upwork} target='_blank' className='text-contentLinkHover underline'>Upwork Profile</a>. That would mean a whole world to me!</p>
        </div>
    </div>
  )
}

PastClientReachout.propTypes = {}

export default PastClientReachout
