import React from 'react';
import PropTypes from 'prop-types';

// data
import socialLinks from '../../data/socialLinks.json';

function Hero(props) {
  return (

    <div className="md:w-[75%] flex flex-wrap mx-auto md:flex-nowrap justify-between md:justify-around mt-10"> 
      <div className="flex flex-col justify-center sm:justify-center md:justify-evenly lg:justify-evenly flex-grow basis-full md:basis-1/2 lg:basis-1/2 p-4 rounded-lg mx-auto md:mr-4 lg:mr-4 ">
        <div>

          {/* MSG: for more highlighting options https://www.coding-dude.com/wp/css/highlight-text-css/ */}
          <h1 className="font-bold text-4xl text-title"> <span className="circle-sketch-highlight md:before:w-sm">M. Hammad Hassan </span> 
          </h1>
          <p className="mt-5 text-1xl text-content/50">Full Stack Developer (Backend Heavy)</p>
          <div className='flex flex-row flex-wrap gap-2 mt-5'>
            <a href={socialLinks.linkedin} className="text-1xl text-contentLink cursor-pointer hover:text-contentLinkHover">Linkedin </a>
            <a href={socialLinks.github} className=" text-1xl text-contentLink cursor-pointer hover:text-contentLinkHover">Github </a>
            <a href={socialLinks.medium} className=" text-1xl text-contentLink cursor-pointer hover:text-contentLinkHover">Medium </a>
            <a href={socialLinks.reddit} className="text-1xl text-contentLink cursor-pointer hover:text-contentLinkHover">Reddit </a>
            <a href={socialLinks.discord} className="text-1xl text-contentLink cursor-pointer hover:text-contentLinkHover">Discord </a>
          </div>
        </div>
      </div>
      <div className="w-64 md:w-48 mx-auto">
        {/* TODO: put this link in constants */}
        <img src="https://dummyimage.com/250x250/cacaca/fff" alt="Placeholder image" className=" rounded-lg shadow object-cover rounded-md  hover:shadow-xl transition duration-500 "/>
      </div>
    </div>

  )
}

Hero.propTypes = {}

export default Hero
