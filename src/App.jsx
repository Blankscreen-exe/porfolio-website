import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/reducers/commonSlice'

import "tw-elements-react/dist/css/tw-elements-react.min.css";

// Components
import NavBar from './components/common/navbar'
import BlogCard from './components/blog/BlogCard'
import Hero from './components/home/Hero'
import Testimonials from './components/home/Testimonials'
import Footer from './components/common/Footer';
import BlockQuote from './components/common/BlockQuote';
import BlogList from "./components/blog/BlogList.jsx"
import TimeLine from './components/common/TimeLine.jsx';
import TechStack from './components/home/TechStack.jsx';
import FloatingSidebar from './components/common/FloatingSidebar.jsx';
import aboutMeText from './data/aboutMe.json';
import HorizontalSlider from './components/common/HorizontalSlider.jsx';

//data
import certificateData from './data/certificates.json'
import RoutesList from './components/Routes.jsx';

function App() {
    
  const count = useSelector((state) => {
    console.log(state)
    return state.persistedReducer.common.myValue
  })

  const posts = useSelector((state) => {
    console.log(state)
    return state.persistedReducer.post
  })

  const dispatch = useDispatch()

  return (
    <>
    <RoutesList/>
{/*     
    <NavBar/>
    <Hero/>
    <BlockQuote
    text={aboutMeText.aboutMeHome}/>
    <HorizontalSlider
      title={"Certificates"}
      data={certificateData}
      />
    <Testimonials/>
    <TechStack/>
    <TimeLine/>
    <BlogList/>
    <Footer/> */}

    {/* REVIEW: Redux check */}
    {/* <button
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
      className='bg-slate-100 hover:bg-slate-400 p-2 border-l-neutral-400 hover:border-neutral-600 border-2'
    >
      Increment
    </button>

    <span className='text-sky-500 hover:text-sky-600'>{count}</span>
    
    <button
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
      className='bg-slate-100 hover:bg-slate-400 p-2 border-l-neutral-400 hover:border-neutral-600 border-2'
    >
      Decrement
    </button> */}

{/* 
          <br/>
          <br/> */}

    {/* <div class="grid grid-cols-5 gap-4">
      <div className='col-span-4'>
        <div class="flex flex-row flex-wrap gap-5 justify-around">
            {posts.map((item) => (
              <BlogCard
                cardTitle={item.title}
                cardDescription={item.description}
                tags={item.tags}
                date={item.date}
                imgUrl={item.imageUrl}
                postLink={item.postLink}
              />)
            )}
        </div>
      </div>
      <div className='col-span-1'>asd</div>
    </div> */}

    </>
  )
}

export default App
