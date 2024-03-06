import React, {useState} from 'react'
import PropTypes from 'prop-types'
import techStack from '../../data/techStack.json'
import { capitalizeWords, classAdd } from '../../helpers/common'

function TechStack(props) {
    const stackList = Object.keys(techStack)
    const [listItem, setListItem] = useState(techStack['languages'])
    const [currentSelectedItem, setCurrentSelectedItem] = useState("languages")
    console.log("--------------------")
    console.log(stackList)
    console.log("--------------------")

    const handleStackClick = (item) => {
        setCurrentSelectedItem(item)
        setListItem(techStack[item])
    }

    return (
    <div className='flex flex-col justify-center items-center'>

        <h1 className='text-3xl font-bold text-slate-700 mb-10'>My Tech Stack</h1>
    <div className="mb-10 flex flex-col md:flex-row gap-10 w-full">
        <div className="container flex flex-col items-center justify-center w-[fit-content] h-[fit-content] mx-auto bg-slate-100 rounded-lg shadow dark:bg-gray-800">
            <ul className="flex flex-col divide-y divide">
                {stackList.map( (item) => {

                    return(
                    <li 
                        onClick={() => handleStackClick(item)}
                        className={classAdd(
                        "flex flex-row hover:text-slate-800 dark:text-white",
                        currentSelectedItem==item ? "text-slate-800" : "text-slate-500"
                        )}>
                        <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                            <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                <a href="#" className="relative block">
                                    <img alt="profil" src="https://dummyimage.com/100x100/eee/444" className="mx-auto object-cover rounded-md h-10 w-9 "/>
                                </a>
                            </div>
                            <div className="flex-1 pl-1 mr-16">
                                <div className="font-medium ">
                                    {capitalizeWords(item)}
                                </div>
                            </div>
                        </div>
                    </li>)
                
                } )}
            </ul>
        </div>

        {/* <div className='bg-slate-400 rounded-md p-3 w-full'>
            <ul>
                {listItem.map(item => <li 
                    key={item.name}
                    className=''
                    >{capitalizeWords(item.name)}</li>)}
            </ul>
        </div> */}
        <div className='border border-slate-200 rounded-md p-3 w-full h-min overflow-y-auto'>
            <table class="table-fixed">
                {listItem.map(item => <tr 
                    key={item.name}
                    className=''
                    >
                        <td className='text-lg font-bold text-slate-300'>🔹 {capitalizeWords(item.name)}</td>
                    </tr>)}
            </table>
        </div>
    </div>

    </div>
  )
}

TechStack.propTypes = {}

export default TechStack
