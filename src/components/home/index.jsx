import React from 'react'
import PropTypes from 'prop-types'

// Data
import awards from '../../data/awards.json'

// Constant
import svgList from '../../constants/svg'
import appConstants from '../../constants/appConstants'

// Components
import Hero from './Hero'
import Testimonials from './Testimonials'
import TechStack from './TechStack'
import HorizontalSlider from '../common/HorizontalSlider'
import CtaCard from '../common/CtaCard'
import BlockQuote from '../common/BlockQuote'

function Home(props) {
  return (
    <>
        <Hero/>
        <BlockQuote
          text="Some witty comments here which are very very long"
        />
        <Testimonials/>
        <TechStack/>
        <HorizontalSlider
          data={awards}
          title={"Honors & Awards"}
          buttonText={<><span>View</span> {svgList.externalLink}</>}
        />
        <HorizontalSlider
          data={awards}
          title={"Certificates"}
          buttonText={<><span>View</span> {svgList.externalLink}</>}
        />
        <HorizontalSlider
          data={awards}
          title={"Projects"}
          buttonText={<><span>View</span> {svgList.externalLink}</>}
        />
        <CtaCard/>
    </>
  )
}

Home.propTypes = {}

export default Home
