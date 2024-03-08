import React from 'react'
import PropTypes from 'prop-types'
import appConstants from '../../constants/appConstants'

function NavBar(props) {
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
            <li><a>Home</a></li>
            <li>
              <a>About Me</a>
              <ul className="p-2">
                <li><a>Education</a></li>
                <li><a>Hobbies</a></li>
                <li><a>Languages I Speak</a></li>
              </ul>
            </li>
            <li>
              <a>Experience</a>
              <ul className="p-2">
                <li><a>Work History</a></li>
                <li><a>Awards</a></li>
                <li><a>Certificates</a></li>
                <li><a>Working On Next</a></li>
              </ul>
            </li>
            <li>
              <a>Lists</a>
              <ul className="p-2">
                <li><a>Useful Resources</a></li>
                <li><a>Games</a></li>
              </ul>
            </li>
            <li><a>Projects</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="hover:text-neutral-600 transition-colors text-xl mx-2">{appConstants.common.pageTitle}</a>
      </div>

      {/* ----------------------------- */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li><a class="border border-slate-400 hover:border-[#0694a2]">Home</a></li>
          <li>
            <details>
              <summary class="hover:text-[#0694a2]"><a>About Me</a></summary>
              <ul className="p-2">
              <li><a>Education</a></li>
              <li><a>Hobbies</a></li>
              <li><a>Languages I Speak</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary class="hover:text-[#0694a2]"><a>Experience</a></summary>
              <ul className="p-2">
                <li><a>Work History</a></li>
                <li><a>Awards</a></li>
                <li><a>Certificates</a></li>
                <li><a>Working On Next</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary class="hover:text-[#0694a2]"><a>Lists</a></summary>
              <ul className="p-2">
                <li><a>Useful Resources</a></li>
                <li><a>Games</a></li>
              </ul>
            </details>
          </li>
          <li><a>Projects</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
  </div>
  )
}

NavBar.propTypes = {}

export default NavBar

