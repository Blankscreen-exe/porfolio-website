import React from 'react'
import PageTitle from '../common/PageTitle'
import Paragraph from '../common/Paragraph'
import BlockQuote from '../common/BlockQuote'
import SectionHeading from '../common/SectionHeading'
import SkillsListTerminal from './SkillsListTerminal'

function index() {
    window.scrollTo(0, 0);
    return (
        <div>
            <PageTitle title='Upcoming Skills' />
            <BlockQuote text={"The only constant in the tech industry is <span class='font-bold'>change</span>. If you're not learning new things, you're falling behind. <br/> - <span class='font-italic'>Satya Nadella, CEO Microsoft</span>"} />
            
            {/* <div className='flex justify-center align-middle'>
            <Paragraph text={"<span class='font-bold'>Note:</span> This skills section is updated on the first of each month."}/>
                </div> */}

            {/* <SectionHeading title="Frontend Skills" />
            <div class="mockup-browser border bg-base-300  mx-32">
                <div class="mockup-browser-toolbar">
                    <div class="input">https://daisyui.com</div>
                </div>
                <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
            </div> */}

            {/* <SectionHeading title="Backend Skills" /> */}
            <SkillsListTerminal/>

            <br/>
            <div className='flex justify-center align-middle'>
                <div className='w-[80%]'>

            <Paragraph text={"<span class='font-bold'>Note:</span> This skills section is updated on the first of each month."}/>
                </div>
                </div>
            <br/>
            <br/>
        </div>
    )
}

export default index