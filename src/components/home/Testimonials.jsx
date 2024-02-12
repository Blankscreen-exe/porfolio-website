import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import { TECarousel, TECarouselItem } from 'tw-elements-react'

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

    <TECarousel showControls showIndicators ride="carousel"
    prevBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
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
          </>
        }
    nextBtnIcon={
        <div>
        <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
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
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
        </span>
        </div>
    }
    theme={{
        indicator:
        "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
    }}>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/* TODO: dummy array */}
            { [1,2,3,4].map( item => {
                return (
                <TECarouselItem
                    key={item}
                    itemID={item}
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                    <div className="flex flex-col justify-items-center items-center h-[650px] md:h-[450px]">
                        <img
                            src="https://dummyimage.com/250x250/a9a9a9/fff"
                            className="w-32 h-32 rounded-full"
                            alt="dummy image ${item}"
                            />
                        <h3 className='text-xl font-medium text-gray-600 mt-5'>Some Title {item}</h3>
                        <h4 className='text-lg italic font-medium text-gray-400'>Some Designation {item}</h4>
                        <p className='font-light text-gray-600 mt-5 w-[65%] text-center mb-8'>{"Lorem ipsum dolor sit amet consectetur, adipisicing elit.".repeat(item)}</p>
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
