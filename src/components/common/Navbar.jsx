import React from 'react'
import PropTypes from 'prop-types'

// Constants
import appConstants from '../../constants/appConstants'

// Router
import { Link, NavLink } from 'react-router-dom'

function NavBar(props) {

  const navLinkList =  [
    {
      name: "Home",
      url: appConstants.routes.home
    },
    {
      name: "About Me",
      url: appConstants.routes.aboutMe,
    },
    {
      name: "Services",
      url: appConstants.routes.services,
      children: [
        {
          name: "Backend",
          url: appConstants.routes.servicesBackend
        },
        {
          name: "Frontend",
          url: appConstants.routes.servicesFrontend
        },
        {
          name: "Data Science",
          url: appConstants.routes.servicesDataScience
        },
        {
          name: "Mentorship",
          url: appConstants.routes.servicesMentorship
        },
      ]
    },
    {
      name: "My Experience",
      url: appConstants.routes.experience,
      children: [
        {
          name: "Work History",
          url: appConstants.routes.experienceWorkHistory
        },
        {
          name: "Awards",
          url: appConstants.routes.experienceAwards
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
      url: appConstants.routes.projects
    },
    {
      name: "Blog",
      url: appConstants.routes.blog
    },
    {
      name: "Contact",
      url: appConstants.routes.contacts
    },
    
  ]

  return (
    <div
    id="navbar"
    className="navbar bg-base-100 bg-slate-10 rounded-md shadow-md m-auto mt-10 flex justify-between sticky opacity-90 backdrop-blur-xl bg-white z-[100]"
  >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
                {<NavLink to={item.url}>{item.name}</NavLink>}
                {item.children && (
                  <ul className="p-2">
                    {item.children.map( (item, ind ) => {
                      return (<li key={ind} ><NavLink to={item.url}>{item.name}</NavLink></li>)
                    })}
                  </ul>
                )}
              </li>
            )})}

          </ul>
        </div>
        <a className="hover:text-neutral-600 transition-colors text-xl mx-2">{appConstants.common.pageTitle}</a>
      </div>

      {/* ----------------------------- */}

      <div className="navbar-center hidden lg:flex">
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
                    ? (<NavLink to={item.url} className={"border border-slate-400 hover:bg-slate-200"}>{item.name}</NavLink>)
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

