import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import { TECarousel, TECarouselItem } from 'tw-elements-react'

// data
import testimonialData from '../../data/testimonials.json';

function Testimonials(props) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
  
    const handleNextSlide = () => {
      const slides = carouselRef.current.children.length;
      setCurrentSlide((currentSlide + 1) % slides);
    };
  
    const handlePrevSlide = () => {
      const slides = carouselRef.current.children.length;
      setCurrentSlide((currentSlide - 1 + slides) % slides);
    };
  
    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
    };
  
    const handleTouchMove = (event) => {
      const deltaX = event.touches[0].clientX - startX;
      if (deltaX > 50) {
        handlePrevSlide();
      } else if (deltaX < -50) {
        handleNextSlide();
      }
    };


  return (
    <div className="container my-24 mx-auto md:px-6">

{/* ============================================================== */}

    <TECarousel showControls  ride="carousel"
    prevBtnIcon={
          <div className='hidden md:inline'>
            <span className="inline-block text-content h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </div>
        }
    nextBtnIcon={
        <div className='hidden md:inline'>
        <span className="inline-block text-content h-8 w-8 [&>svg]:h-8">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
            </svg>
        </span>
        <span className="!absolute !hover:bg-none !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
        </span>
        </div>
    }
    >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            { testimonialData.map( (item, ind) => {
                return (
                <TECarouselItem
                    key={ind}
                    itemID={ind+1} // itemID starts from 1
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                    <div className="flex flex-col justify-items-center items-center h-[550px] md:h-[350px]">
                        <img
                            src={item.avatarUrl}
                            className="w-32 h-32 rounded-full"
                            alt={item.title}
                            />
                        <h3 className='text-xl font-medium text-content mt-5'>{item.title}</h3>
                        <h4 className='text-lg italic font-medium text-content/60'>{item.designation}</h4>
                        <div className='flex flex-col justify-between h-full'>
                          <p className='font-light text-content mt-5  w-full text-center mb-8'>{item.content}</p>
                    <div className='text-sm text-content/40 md:hidden inline w-full flex justify-center border-white/5 border-t-slate-300'> slide for more testimonials </div>
                        </div>
                    </div>
                </TECarouselItem>);
            })}


                
          
        </div>
      </TECarousel>

   
    </div>
  )
}

Testimonials.propTypes = {}

export default Testimonials
