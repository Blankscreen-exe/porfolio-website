import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Constants
import appConstants from '../../constants/appConstants'

function Error404(props) {
  return (
    <div className='flex flex-col gap-4 justify-center text-center py-60'>
        <p className='text-primary font-bold text-4xl'>Looks like you just hit 404</p>
        <p>

        <Link to={appConstants.routes.home}  className='hover:underline'>Let's go back to Home</Link>
        </p>
    </div>
  )
}

Error404.propTypes = {}

export default Error404
