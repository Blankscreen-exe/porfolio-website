import React from 'react'

// data
import featuredData from '../../data/certificatesFeatured.json'
import datacampData from '../../data/certificatesDataCamp.json'
import dataScience360Data from '../../data/certificatesDataScience365.json'
import kaggleData from '../../data/certificatesKaggle.json'
import courseraData from '../../data/certificatesCoursera.json'
import socialLinks from '../../data/socialLinks.json'

// components
import PageTitle from '../common/PageTitle'
import SectionHeading from '../common/SectionHeading'
import HorizontalSlider from '../common/HorizontalSlider'
import Paragraph from '../common/Paragraph'
import CertificateStats from './CertificateStats'
import LazyNote from '../common/LazyNote'

function index() {
    window.scrollTo(0, 0);
    const allData = {
        featured: featuredData,
        dataScience360: dataScience360Data,
        dataCamp: datacampData,
        kaggle: kaggleData,
        coursera: courseraData
    }

  return (
    <div>
        <PageTitle title="My Certificates"/>
        <div className='flex justify-center'>
            <Paragraph text={`All of my certificates are currently present in my <a href='${socialLinks.linkedin}' class='link'> Linkedin Profile</a>. There are many certificates and I will move all of them in this page as soon as I get some time. For the time being, you can simply visit my <a href='${socialLinks.linkedin}' class='link'> Linkedin Profile</a> and view all of the certificates there.`} />

        </div>
        <Paragraph text={"<span class='font-bold'>Note</span> that this is an incomplete list and it is still WIP."}/>
        <LazyNote/>
        <CertificateStats data={allData}/>

        <HorizontalSlider data={featuredData} title={"Featured"} buttonText={"view"}/>
        <HorizontalSlider data={courseraData} title={"Coursera"} buttonText={"view"}/>
        <HorizontalSlider data={datacampData} title={"Data Camp"} buttonText={"view"}/>
        <HorizontalSlider data={dataScience360Data} title={"DataScience 360"} buttonText={"view"}/>
        <HorizontalSlider data={kaggleData} title={"Kaggle"} buttonText={"view"}/>

    </div>
  )
}

export default index