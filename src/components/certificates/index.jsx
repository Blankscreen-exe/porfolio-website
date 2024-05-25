import React from 'react'

// data
import featuredData from '../../data/certificatesFeatured.json'
import datacampData from '../../data/certificatesDataCamp.json'
import dataScience360Data from '../../data/certificatesDataScience365.json'
import kaggleData from '../../data/certificatesKaggle.json'
import courseraData from '../../data/certificatesCoursera.json'

// components
import PageTitle from '../common/PageTitle'
import SectionHeading from '../common/SectionHeading'
import HorizontalSlider from '../common/HorizontalSlider'
import Paragraph from '../common/Paragraph'
import CertificateStats from './certificateStats'

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
            <Paragraph text={"some description i want to talk about some description i want to talk about vsome description i want to talk about some description i want to talk about some description i want to talk about some description i want to talk about"} />
        </div>

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