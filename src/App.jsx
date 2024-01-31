import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/reducers/commonSlice'


// Components
import NavBar from './components/common/navbar'
import BlogCard from './components/blog/BlogCard'

function App() {
    
  const count = useSelector((state) => {
    console.log(state)
    return state.persistedCommonReducer.myValue
  })
  const dispatch = useDispatch()

  return (
    <>
    <NavBar/>

    <button
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
    </button>

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
