import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// data
import servicesData from '../../data/services.json'

// helpers
import { capitalizeFirstLetter } from '../../helpers/common'

function ServicesOverview(props) {
  const featuredServices = servicesData
    .map((item, ind) => ({ ...item, originalIndex: ind }))
    .filter((item) => item.featured)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {featuredServices.map((item) => {
        return (
          <Link
            key={item.originalIndex}
            to={`/services?servicetype=${item.originalIndex}`}
            className="bg-bg2 rounded-lg p-6 shadow-lg dark:shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 transition-all border-l-4 border-primary"
          >
            <h3 className="text-lg font-bold text-primary mb-2">
              {capitalizeFirstLetter(item.title)}
            </h3>
            <p
              className="text-sm text-content/80 leading-relaxed line-clamp-3"
              dangerouslySetInnerHTML={{ __html: capitalizeFirstLetter(item.description) }}
            >
            </p>
          </Link>
        )
      })}
    </div>
  )
}

ServicesOverview.propTypes = {}

export default ServicesOverview
