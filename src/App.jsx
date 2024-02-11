import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/reducers/commonSlice'


// Components
import NavBar from './components/common/navbar'
import BlogCard from './components/blog/BlogCard'
import Hero from './components/home/Hero'

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
    <NavBar/>
    <Hero/>
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


          <br/>
          <br/>
    <div class="grid grid-cols-5 gap-4">
      <div className='col-span-4'>
        <div class="flex flex-row flex-wrap gap-5 justify-around">
          {/* {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((number) => (
            // <div className="dummy-div" key={number}>
            //   {number.toString().padStart(2, '0')}
            // </div>
            <BlogCard tags={["ML", "React", "Tensorflow", "Redux"]}/>
          ))} */}

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
    </div>

    </>
  )
}

export default App
