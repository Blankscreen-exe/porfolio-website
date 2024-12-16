import React from 'react'

import images from '../../constants/img'

function LazyNote() {
  return (
    <div className='flex justify-center mb-4'>
        <img src={images.lazyNote}  className='w-64 h-64 '/>
    </div>
  )
}

export default LazyNote