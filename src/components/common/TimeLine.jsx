import React, {useState} from 'react'
import PropTypes from 'prop-types'

function TimeLine(props) {
    const [description, setDescription] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);

    const timeLine = [
        {
            title: "Apple",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Mac",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPhone",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPad",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Apple",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Mac",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPhone",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPad",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Apple",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "Mac",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPhone",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        },
        {
            title: "iPad",
            tooltip: "lorem ipsum dolor set amet",
            date: "2024"
        }
    ];

    const handleOpenDescription = (index, content) => {
        setDescription(index + " " +content)
        setActiveIndex(index)
    }
  return (
    <div className='flex flex-col justify-center items-center'>
    <div style={{overflow:"scroll"}}>
        <ul className="timeline">


  {
    timeLine.map( (item, index) => {
        return (
            <li>
                {index!=0 && <hr/>}
                
                <div className={(index%2==0 ? "timeline-end" : "timeline-start") + " " + (index==activeIndex && "bg-blue-200") + " timeline-box hover:bg-slate-200 hover:bg-opacity-50 hover:cursor-pointer" } title={item.tooltip}>
                    <div className={index%2==0 ? "tooltip tooltip-top" : "tooltip tooltip-bottom"} data-tip={item.tooltip} onClick={() => handleOpenDescription(index, item.tooltip)}>{item.title} {index}</div>
                </div>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className={index%2==0 ? "timeline-start text-blue-700 font-medium" : "timeline-end text-blue-700 font-medium"} tooltip={item.tooltip}>{item.date}</div>

                {index!=(timeLine.length-1) && <hr/>}

                {console.log(timeLine.length-1, index, timeLine.length=== index)}

            </li>  
             
        )
    })
  }
  
</ul>
</div>
  <div className='border-2 p-1 rounded-md'>

    <div className='w-[80%] h-[500px] m-5 p-3 rounded-md bg-slate-200'>{description ? description : timeLine[activeIndex].tooltip}</div>
    </div>
  </div>
  )
}

TimeLine.propTypes = {}

export default TimeLine
