import React from 'react'
import PropTypes from 'prop-types'

import Tag from './Tag';

function BlogCard(props) {
  const { cardTitle, cardDescription, tags } = props;
  return (

          <div className="card  w-1/2 bg-base-100 hover:shadow-xl transition-shadow">
            <figure><img 
              class='shadow'
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>


  )
}

BlogCard.propTypes = {}

export default BlogCard
