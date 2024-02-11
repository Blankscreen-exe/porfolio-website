import React from 'react'
import PropTypes from 'prop-types'

function Hero(props) {
  return (
    <div>
      <div>
        <h1 className=''>M. Hammad Hassan</h1>
        <p>Full Stack Developer (Backend Heavy)</p>
      </div>
      <div>
        <img src="https://dummyimage.com/600x600/000/fff" class='rounded-5'/>
      </div>
    </div>
  )
}

Hero.propTypes = {}

export default Hero
