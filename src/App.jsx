import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/common/navbar'

// test import 
import BlogCard from './components/blog/BlogCard'

function App() {
  const [count, setCount] = useState(0)
  console.log(window.innerWidth)

  const getGridCol = () => {
    Math. window.innerWidth
  }

  return (
    <>
    <NavBar/>


<div className=''>
      <div className='flex flex-row gap-10'>
        <div className='flex flex-wrap gap-10'>
                      
              <BlogCard
              cardTitle={"Blog post 1"}
              cardDescription={"Long Long Description 1"}
              tags={["Machine Learning", "AI"]}/>

              <BlogCard
              cardTitle={"Blog post 1"}
              cardDescription={"Long Long Description 1"}
              tags={["Machine Learning", "AI"]}/>

              <BlogCard
              cardTitle={"Blog post 1"}
              cardDescription={"Long Long Description 1"}
              tags={["Machine Learning", "AI"]}/>

              <BlogCard
              cardTitle={"Blog post 1"}
              cardDescription={"Long Long Description 1"}
              tags={["Machine Learning", "AI"]}/>

              <BlogCard
              cardTitle={"Blog post 1"}
              cardDescription={"Long Long Description 1"}
              tags={["Machine Learning", "AI"]}/>
            

          
        </div>

        <div className='w-1/4 bg-slate-100 rounded-lg p-10'>
          sadf
        </div>
      </div>

      </div>
    </>
  )
}

export default App
