import React from 'react'
import PropTypes from 'prop-types'

function PageTitle(props) {
    const {title} = props;
    return (
        <div className='flex items-center justify-center my-20 text-center'>
            <p className="text-slate-700 font- text-5xl font-bold">{title}</p>
        </div>
    )
}

PageTitle.propTypes = {}

export default PageTitle
