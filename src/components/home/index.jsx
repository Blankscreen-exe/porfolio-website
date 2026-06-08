import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

// Data
import projectsData from '../../data/projectList.json'

// Constant
import svgList from '../../constants/svg'
import appConstants from '../../constants/appConstants'

// Components
import Hero from './Hero'
// import Testimonials from './Testimonials' // hidden — replaced by TestimonialsNew
import TestimonialsNew from './TestimonialsNew'
import FeaturedProjects from './FeaturedProjects'
import PastClientReachout from './PastClientReachout'
import TechStack from './TechStack'
import HorizontalSlider from '../common/HorizontalSlider'
// import CtaCard from '../common/CtaCard' // no longer used — contact form moved into #contact section
import Form from '../contact/Form'
import ContactSideSection from '../contact/ContactSideSection'
// import BlockQuote from '../common/BlockQuote' // value-prop merged into Hero
import Protip from '../common/Protip'
import Paragraph from '../common/Paragraph'
// import GoToProjectButton from './GoToProjectButton' // hidden — off-theme, replaced by Button
import Button from '../common/Button'
import SectionHeading from '../common/SectionHeading'
import Metrics from './Metrics'
import Communities from './Communities'

function Home(props) {
  const location = useLocation()

  // Scroll to the hash target (e.g. #contact) when present, otherwise to the top.
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        // small delay so layout/images settle before scrolling
        const id = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return () => clearTimeout(id)
      }
    }
    window.scrollTo(0, 0)
  }, [location.hash, location.key])

  return (
    <>
        {/* Recruiter funnel: who → impact → proof of work → skills → social proof → contact */}
        <Hero/>

        <div className="mt-20">
          <Metrics/>
        </div>

        <div className="mt-20">
          <SectionHeading title="Featured Projects"/>
          <FeaturedProjects/>
          <div className="flex justify-center mt-8">
            <Button
              to={appConstants.routes.projects}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              }
            >
              View All Projects
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <TechStack/>
        </div>

        {/* Old testimonial slider — hidden, replaced by TestimonialsNew */}
        {/* <Testimonials/> */}
        <TestimonialsNew/>


        <Communities/>

        {/* Lower priority for recruiters — kept near the bottom */}
        <div className="mb-20">
          <SectionHeading title="Are you one of my students/clients?"/>
          <PastClientReachout />
        </div>

        {/* Contact section — moved here from the (now redirected) /contacts page.
            CtaCard is intentionally no longer used. */}
        <div id="contact" className="scroll-mt-24">
          <SectionHeading title="Have a project in mind? Let's talk!"/>
          <div className="flex flex-col md:flex-row justify-around gap-10 px-4">
            <ContactSideSection/>
            <Form/>
          </div>
        </div>
    </>
  )
}

Home.propTypes = {}

export default Home
