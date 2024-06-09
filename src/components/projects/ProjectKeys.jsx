import React from 'react'
import PropTypes from 'prop-types'

// constants
import svgList from '../../constants/svg'

function ProjectKeys(props) {
  return (
    <div>
        <section class="grid place-items-center  w-[100%]">
                <label className='w-[100%]'> 
                    <input class="peer/showLabel absolute scale-0" type="checkbox" />
                    <span class="block max-h-14 w-[100%] overflow-hidden rounded-lg bg-bg2 px-4 py-0 text-primary shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-[100%]">
                        <h3 class="flex h-14 cursor-pointer items-center font-bold">Show/Hide Keys</h3>
                        <div class="mb-2 z-50">
                            {/* keys go here */}
                            <div className='mx-auto w-[70%] px-0 lg:px-14'>
                              <ul>
                                <li className='flex flex-row gap-3 mb-2'><img src={svgList.projectList.collab} className='w-4 h-4 my-auto'/>  Me and some other developers are wokring on it together</li>
                                <li className='flex flex-row gap-3 mb-2'><img src={svgList.projectList.corporate} className='w-4 h-4 my-auto'/>  I worked on this as a part of my Job</li>
                                <li className='flex flex-row gap-3 mb-2'><img src={svgList.projectList.hobby} className='w-4 h-4 my-auto'/> It is my hobby project </li>
                                <li className='flex flex-row gap-3 mb-2'><img src={svgList.projectList.status.ongoing} className='w-4 h-4 my-auto'/> This project is currently in progress </li>
                                <li className='flex flex-row gap-3 mb-2'><img src={svgList.projectList.status.finished} className='w-4 h-4 my-auto'/> This project is finished </li>
                                <li className='flex flex-row gap-3 mb-2'><img src={svgList.projectList.contrib.open} className='w-4 h-4 my-auto'/> I am welcoming people who want to contribute to this project </li>
                                <li className='flex flex-row gap-3 mb-2'><img src={svgList.projectList.contrib.close} className='w-4 h-4 my-auto'/> Contributions for this project is closed </li>
                              </ul>
                          </div>
                        </div>
                    </span>
                </label>
            </section>
    </div>
  )
}

ProjectKeys.propTypes = {}

export default ProjectKeys
