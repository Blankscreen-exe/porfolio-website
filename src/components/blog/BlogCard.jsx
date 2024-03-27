import React from 'react'
import PropTypes from 'prop-types'

import Tag from './Tag';
import { truncateText, formatDate, sentenceToSlug } from '../../helpers/common';

function BlogCard(props) {
  const { cardTitle, cardDescription, date, tags, imgUrl, postLink } = props;

  return (

          <div className="card custom-blog-card bg-base-100 hover:shadow-xl transition-shadow rounded-lg">
            <a href={postLink} className=''>
              {/* <figure className='rounded-t-lg'><img 
                className='shadow'
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <figure class="rounded-t-lg relative h-44">
                  <img 
                    class="shadow absolute top-0 right-0 z-10"
                    src={imgUrl} alt={cardTitle} />
                  <span class="absolute z-10 top-2 right-2 badge badge-secondary">NEW</span>
                </figure>
              <div className="card-body p-6">
                <div className='flex flex-col '>
                  <h2 className="card-title text-gray-600 text-lg">
                    {cardTitle}
                  </h2>
                  <span className='text-gray-400 text-sm'>{formatDate(date)}</span>
                </div>
                <p className='text-gray-600 text-sm/[12px] leading-normal'>{truncateText(cardDescription, 150)}</p>
                
                <div className="card-actions justify-end ">
                  { tags.slice(0,2).map( (item) => {
                    return <div className="badge hover:bg-sky-100 rounded-full border border-sky-100 px-2 py-0.5 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">{item}</div> 
                  })}
                </div>

              </div>
            </a>
          </div>


  )
}

BlogCard.propTypes = {}

export default BlogCard
