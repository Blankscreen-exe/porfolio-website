import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

function TimeLine(props) {
    const [description, setDescription] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [contentToShow, setContentToShow] = useState("");

    const timeLine = [
        {
            title: "Apple",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Mac",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPhone",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPad",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Apple",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Mac",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPhone",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPad",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Apple",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Mac",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPhone",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPad",
            tooltip: "lorem ipsum dolor set amet",            
            description: "lorem ipsum dolor set amet",
            date: "2024"
        }
    ];


    const sliderId = "timeline-slider-1"
    const scrollMagnitude = 150
    const scrollButtonSize = 60
    const scrollButtonClass = "opacity-50 cursor-pointer rounded-full hover:opacity-100 h-fit ease-in-out duration-300"

    // typewriter effect
    
    var i = 0;
    var j = 0;
    var currentWord = "";
    var isDeleting = false;

    function typewriterEffect(content) {
        

        for (let index = 0; index < content.length; index++) {
            document.getElementById("timeline-description-1").textContent = content.substring(0, i)
          }

        // if (isDeleting) {
        //     document.getElementById("timeline-description-1").textContent = currentWord.substring(0, j-1);
        //     j--;
        //     if (j == 0) {
        //     isDeleting = false;
        //     i++;
        //     if (i == content.length) {
        //         i = 0;
        //     }
        //     }
        // } else {
        //     document.getElementById("timeline-description-1").textContent = currentWord.substring(0, j+1);
        //     j++;
        //     if (j == currentWord.length) {
        //     isDeleting = true;
        //     }
        // }
        setTimeout(typewriterEffect, 100);
    }

    const handleOpenDescription = (index, content) => {
        setActiveIndex(index)
        setContentToShow(index+ " " +content)
        // typewriterEffect(index + " " +content)
        // document.getElementById("timeline-description-1-innerspan").classList.remove("animate-typing")
        // setTimeout(() => {
        //     document.getElementById("timeline-description-1-innerspan").classList.add("animate-typing")
        // }, 1000);
        // setDescription(index + " " +content)

        // const timePerLetter = 300
        // console.log(content.length)
        // for (let i=0; i== content.length; i++){
        //     console.log(i)
        // }

        // // function typeWriter(content, containerId, timePerLetter = 50, isHTML = false) {
        //     let container = document.getElementById("timeline-description-1-innerspan");
        //     if (!container) {
        //       return console.error(`Element with ID '${"timeline-description-1-innerspan"}' not found.`);
        //     }
          
        //     var i = 0;
        //     let intervalId = setInterval(() => {
        //       if (i < content.length) {
        //         console.log("index at ", i)
        //         console.log("CONTENT  >> " +content)
        //         const letter = content.charAt(i);
        //         const content = letter;
        //         container.insertAdjacentHTML("beforeend", content);
        //         i++;
        //       } else {
        //         clearInterval(intervalId);
        //       }
        //     }, timePerLetter);
          
    }

const slideLeft = () => {
    let slider = document.getElementById(sliderId)
    slider.scrollLeft = slider.scrollLeft - scrollMagnitude
}

const slideRight = () => {
    let slider = document.getElementById(sliderId)
    slider.scrollLeft = slider.scrollLeft + scrollMagnitude
}
    
  return (
  <div id="timeline-container"  className='flex flex-col justify-center items-center'>

    <div  className="h-[300%] w-[90%] relative flex items-center gap-7" >
        <MdChevronLeft className={scrollButtonClass} onClick={slideLeft} size={scrollButtonSize}/>
        {/* TODO: add a key to this id name */}
        <div id={sliderId} className=' h-full scroll overflow-x-scroll whitespace-nowrap scroll-smooth styled-scroll-none sticky' style={{overflowX: "scroll"}}>
            <ul className="timeline touch-auto mb-3" >
                {
                    timeLine.map( (item, index) => {
                        return (
                            <li>
                                {index!=0 && <hr/>}
                                
                                <div 
                                    className={
                                        (index%2==0 ? "timeline-end" : "timeline-start") 
                                        + " " 
                                        + (index==activeIndex ? "bg-[#86DAB3] " : "hover:bg-[#86DAB3] hover:bg-opacity-50") 
                                        + " timeline-box hover:bg-[#86DAB3] hover:bg-opacity-50 hover:cursor-pointer" 
                                        } 
                                    onClick={() => handleOpenDescription(index, item.tooltip)}
                                    >
                                    <div className={
                                        "tooltip " 
                                        + (index==0? "tooltip-right" : index!=(timeLine.length-1) ? "tooltip-left" : index%2==0 ? "tooltip-top" : "tooltip-bottom") 
                                        + "z-100 float-start"
                                        } 
                                        data-tip={item.tooltip}>{item.title} {index}</div>
                                </div>

                                <div className="timeline-middle">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 20 20" 
                                        fill="#239962" 
                                        className="w-5 h-5">
                                            <path 
                                                fillRule="evenodd" 
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" 
                                                clipRule="evenodd" 
                                            />
                                    </svg>
                                </div>
                                
                                <div className={(index%2==0 ? "timeline-start " : "timeline-end ") + "text-[#45AD7D] font-medium" } >{item.date}</div>

                                {index!=(timeLine.length-1) && <hr/>}

                            </li>  
                            
                        )
                    })
                }
            </ul>
        </div>
        <MdChevronRight className={scrollButtonClass} onClick={slideRight} size={scrollButtonSize}/>
    </div>

    <div className='border-2 p-2 mt-5 rounded-md w-[90%]'>
        <div id="timeline-description-1" className=' p-3 rounded-md bg-slate-100'>
            <span id="timeline-description-1-innerspan" >{contentToShow ? contentToShow : timeLine[activeIndex].description}</span>
            {/* <span id="timeline-description-1-innerspan" >{contentToShow}</span> */}
        </div>
        {/* <div id="timeline-description-1" className=' animate-typing w-[100%] h-[200px] p-3 rounded-md bg-slate-100'></div> */}
    </div>

  </div>
  )
}

TimeLine.propTypes = {}

export default TimeLine
