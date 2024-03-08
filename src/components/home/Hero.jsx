import React from 'react';
import PropTypes from 'prop-types';

// data
import socialLinks from '../../data/socialLinks.json';

function Hero(props) {
  return (

    <div class="md:w-[75%] flex flex-wrap mx-auto md:flex-nowrap justify-between md:justify-around mt-10"> 
      <div class="flex flex-col justify-evenly flex-grow basis-full md:basis-1/2 p-4 rounded-lg mr-4 ">
        <div>

          {/* MSG: for more highlighting options https://www.coding-dude.com/wp/css/highlight-text-css/ */}
          <h1 class="font-bold text-4xl text-gray-700"> <span class="circle-sketch-highlight md:before:w-sm">M. Hammad Hassan </span> 
          </h1>
          <p class="mt-5 text-1xl text-gray-500">Full Stack Developer (Backend Heavy)</p>
          <div className='flex flex-row flex-wrap gap-2 mt-5'>
            <a href={socialLinks.linkedin} class="text-1xl text-gray-500 text-primary-light cursor-pointer hover:text-primary-light">Linkedin </a>
            <a href={socialLinks.github} class=" text-1xl text-gray-500 cursor-pointer hover:text-primary-light">Github </a>
            <a href={socialLinks.medium} class=" text-1xl text-gray-500 cursor-pointer hover:text-primary-light">Medium </a>
            <a href={socialLinks.reddit} class="text-1xl text-gray-500 cursor-pointer hover:text-primary-light">Reddit </a>
            <a href={socialLinks.discord} class="text-1xl text-gray-500 cursor-pointer hover:text-primary-light">Discord </a>
          </div>
        </div>
      </div>
      <div class="w-64 md:w-48">
        <img src="https://dummyimage.com/250x250/cacaca/fff" alt="Placeholder image" class=" rounded-lg shadow object-cover rounded-md  hover:shadow-xl transition duration-500 "/>
      </div>
    </div>

  )
}

Hero.propTypes = {}

export default Hero
