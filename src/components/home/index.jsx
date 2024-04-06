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
import Protip from '../common/Protip'

function Home(props) {
  window.scrollTo(0, 0);
  return (
    <>
        <Hero/>
        <BlockQuote
          text="Some <i class='font-italic'>witty</i> <b class='font-bold'>comments</b> here which are very very long"
        />
        <Testimonials/>
        <TechStack/>
        <Protip/>
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
