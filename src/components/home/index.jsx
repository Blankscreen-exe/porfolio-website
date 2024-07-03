import React from 'react'
import PropTypes from 'prop-types'

// Data
import projectsData from '../../data/projectList.json'

// Constant
import svgList from '../../constants/svg'
import appConstants from '../../constants/appConstants'

// Components
import Hero from './Hero'
import Testimonials from './Testimonials'
import PastClientReachout from './PastClientReachout'
import TechStack from './TechStack'
import HorizontalSlider from '../common/HorizontalSlider'
import CtaCard from '../common/CtaCard'
import BlockQuote from '../common/BlockQuote'
import Protip from '../common/Protip'
import Paragraph from '../common/Paragraph'
import GoToProjectButton from './GoToProjectButton'
import SectionHeading from '../common/SectionHeading'

function Home(props) {
  window.scrollTo(0, 0);
  return (
    <>
        <Hero/>
        <BlockQuote
          text="I'm a <span class='font-bold'>Full-stack Software Engineer</span> and a <span class='font-bold'>Data Scientist</span>. But that alone cannot define who I am. I have developed this site in hopes of conveying that message."
        />
        <Testimonials/>
        {/* <div class="flex justify-center">
          <Paragraph text={"Note: The testimonials above are taken from my linkedin page."}/>
        </div> */}
        <TechStack/>
        {/* <Protip/> */}
        {/* <HorizontalSlider
          data={projectsData}
          title={"Projects"}
          buttonText={<><span>View</span> {svgList.externalLink}</>}
        /> */}
        <br/>
        <SectionHeading title="Have a project in mind? Let's talk!"/>
        <CtaCard/>
        <SectionHeading title="Are you one of my students/clients?"/>
        <PastClientReachout />
        <SectionHeading title="Want to see my projects?"/>
        <GoToProjectButton/>
        <br/>
        <br/>
    </>
  )
}

Home.propTypes = {}

export default Home
