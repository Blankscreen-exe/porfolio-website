import React from 'react'
import PropTypes from 'prop-types'

// Constants
import appConstants from '../../constants/appConstants'
import svgList from '../../constants/svg'
import { classLists } from '../../constants/cssClasses'

// Router
import { Link, NavLink } from 'react-router-dom'

import { classAdd, getClassesFromConstants } from '../../helpers/common'

// Components
import ThemeSwitch from './ThemeSwitch'

function NavBar(props) {

  const navLinkClasses = classAdd(getClassesFromConstants(classLists.navLink), "flex", "flex-row", "items-center")

  const navLinkList =  [
    {
      name: "Home",
      icon: svgList.navIcons.home,
      url: appConstants.routes.home
    },
    {
      name: "About Me",
      icon: svgList.navIcons.aboutMe,
      url: appConstants.routes.aboutMe,
    },
    {
      name: "Services",
      icon: svgList.navIcons.services,
      url: appConstants.routes.services,
      // children: [
      //   {
      //     name: "Backend",
      //     url: appConstants.routes.servicesBackend
      //   },
      //   {
      //     name: "Frontend",
      //     url: appConstants.routes.servicesFrontend
      //   },
      //   {
      //     name: "Machine Learnning",
      //     url: appConstants.routes.servicesMachineLearning
      //   },
      //   {
      //     name: "Mentorship",
      //     url: appConstants.routes.servicesMentorship
      //   },
      //   {
      //     name: "FAQ",
      //     url: appConstants.routes.servicesFaq
      //   },
      // ]
    },
    {
      name: "My Experience",
      icon: svgList.navIcons.experience,
      url: appConstants.routes.experience,
      children: [
        {
          name: "Work History & Awards",
          url: appConstants.routes.experience
        },
        {
          name: "Certificates",
          url: appConstants.routes.experienceCertificates
        },
        {
          name: "Targeted Skills",
          url: appConstants.routes.experienceUpcomingSkills
        },
      ]
    },
    {
      name: "Lists",
      icon: svgList.navIcons.lists,
      url: appConstants.routes.lists,
      // children: [
      //   {
      //     name: "Dev Resources",
      //     url: appConstants.routes.listsResources
      //   },
      //   {
      //     name: "Games",
      //     url: appConstants.routes.listsGames
      //   },
      //   {
      //     name: "Books",
      //     url: appConstants.routes.listsBooks
      //   },
      // ]
    },
    {
      name: "Projects",
      icon: svgList.navIcons.projects,
      url: appConstants.routes.projects
    },
    {
      name: "Blog",
      icon: svgList.navIcons.blogs,
      url: appConstants.routes.blog
    },
    {
      name: "Contact",
      icon: svgList.navIcons.contacts,
      url: appConstants.routes.contacts
    },
    
  ]

  return (
    <div
    id="navbar"
    className="navbar bg-base-100 bg-bg1 rounded-md shadow-md m-auto mt-10 flex justify-between sticky opacity-80 backdrop-blur-xl bg-tertiary/40 z-[100]"
  >
      <div className="navbar-start w-full flex flex-row justify-between ">
        <div className=''>
          <div className="dropdown">
            {/* MSG: made this dropdown view permanenet */}
            {/* <div tabIndex="0" role="button" className="btn btn-ghost xl:hidden"> */}
            <div tabIndex="0" role="button" className="btn btn-ghost hover:bg-bg2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#C4C4C4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >

              {navLinkList.map( (item, ind) => {
                return (<li key={ind} >
                  {/* MSG: disabled link on parent element */}
                  {/* {<NavLink to={item.url}>{item.name}</NavLink>} */}
                  {item.children 
                  ? <span className={classAdd('text-content hover:text-contentLinkHover hover:bg-transparent', navLinkClasses)}>{item.icon}{item.name}</span>
                  : <NavLink to={item.url} className={navLinkClasses}>{item.icon ? item.icon: ""}{item.name}</NavLink>}
                  {item.children && (
                    <ul className="p-2">
                      {item.children.map( (item, ind ) => {
                        return (<li key={ind} ><NavLink to={item.url} className="text-contentLink hover:text-contentLinkHover">{item.name}</NavLink></li>)
                      })}
                    </ul>
                  )}
                </li>
              )})}

            </ul>
          </div>
          <a className="text-contentLink hover:text-primary transition-colors text-xl mx-2">{appConstants.common.pageTitle}</a>
        </div>
        <ThemeSwitch/>
      </div>

      {/* ----------------------------- */}
      
      {/* MSG: disabled this button view */}
      {/* <div className="navbar-center hidden xl:flex"> */}
      <div className="navbar-center hidden">
        <ul className="menu menu-horizontal px-1 gap-5">

          {navLinkList.map( (item, ind) => {
              return (<li key={ind}>
                <>
                  {item.children ? (
                    <details>
                      <summary><NavLink to={item.url}>{item.name}</NavLink></summary>
                      {item.children && (
                        <ul className="p-2">
                          {item.children.map( (item, ind ) => {
                            return (<li key={ind}><NavLink to={item.url}>{item.name}</NavLink></li>)
                          })}
                        </ul>
                      )}
                    </details>
                  ) : 
                    item.name === "Home"
                    ? (<NavLink to={item.url} className={"border border-secondary hover:bg-tertiary"}>{item.name}</NavLink>)
                    : (<NavLink to={item.url}>{item.name}</NavLink>)
                  }
                </>

              </li>)
              })}
          
        </ul>
      </div>
  </div>
  )
}

NavBar.propTypes = {}

export default NavBar

