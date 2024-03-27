import React from 'react'
import PropTypes from 'prop-types'

// Components
import { TEInput } from "tw-elements-react";

function Form(props) {
  return (
    <div className=''>
        
        <form className='flex flex-col'>

        <TEInput
            type="text"
            id="full-name"
            label={(<span class='bg-bg1 px-2'>Full Name</span>)}
            className='text-secondary focus:text-primary'
            required
        ></TEInput>
        
        <TEInput
            type="email"
            id="email"
            label={(<span class='bg-bg1 px-2'>Email Address</span>)}
            className='text-secondary focus:text-primary'
            required
        ></TEInput>

            <label for="full_name">Full Name:</label>
            <input type="text" id="full_name" name="full_name" placeholder="Enter your full name" required />

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="youremail@example.com" required />

            <h3>Purpose of Contact:</h3>
            <input type="radio" id="avail_service" name="contact_purpose" value="avail_service" required />
            <label for="avail_service">Avail a Service</label>
            <input type="radio" id="recruitment" name="contact_purpose" value="recruitment" />
            <label for="recruitment">Recruitment Inquiry</label>
            <input type="radio" id="hang_out" name="contact_purpose" value="hang_out" />
            <label for="hang_out">Just Want to Hang Out</label>

            <h3>What would you like to hire me as? (Optional)</h3>
            <select id="hire_as" name="hire_as">
                <option value="">Select an option (optional)</option>
                <option value="tech_resource">Tech Resource</option>
                <option value="mentor">Mentor</option>
            </select>

            <label for="urgency">Are you in urgency?</label>
            <input type="radio" id="urgent_yes" name="urgency" value="yes" />
            <label for="urgent_yes">Yes</label>
            <input type="radio" id="urgent_no" name="urgency" value="no" checked />
            <label for="urgent_no">No</label>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message here..."></textarea>

            <input type="submit" value="Submit"/>
        </form>

    </div>
  )
}

Form.propTypes = {}

export default Form
