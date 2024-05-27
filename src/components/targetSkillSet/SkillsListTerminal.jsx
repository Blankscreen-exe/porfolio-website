import React from 'react'
import PropTypes from 'prop-types'


// data
import skillsData from '../../data/targetSkills.json'

function SkillsListTerminal(props) {
    return (
        <div className='flex justify-center'>
            <div className="mockup-code w-[100%] md:w-[80%]">
                {skillsData.map((item) => {
                    return item.isHighlight
                        ? (
                            <pre data-prefix={item.prefix} className={`bg-${item.colorType} text-${item.colorType}-content`}><code dangerouslySetInnerHTML={{ __html: item.text }}></code></pre>
                        ) : (
                            <pre data-prefix={item.prefix} className={`text-${item.colorType}`}><code dangerouslySetInnerHTML={{ __html: item.text }}></code></pre>
                        )
                })}

                {/* <pre data-prefix="$"><code>npm i daisyui</code></pre>
            <pre data-prefix=">" className="text-warning"><code>[x] installing...</code></pre>
            <pre data-prefix=">" className="text-success"><code>[ ] Done!</code></pre>
            <pre data-prefix="3" className="bg-info text-info-content"><code>Error!</code></pre> */}
            </div>
        </div>
    )
}

SkillsListTerminal.propTypes = {}

export default SkillsListTerminal
