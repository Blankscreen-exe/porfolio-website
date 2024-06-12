import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import emailjs from '@emailjs/browser';

// Components
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import MultiSelectInput from "./MultiSelectInput";
import CheckBox from "./CheckBox";
import TextArea from "./TextArea";
import { Turnstile } from '@marsidev/react-turnstile'

function Form(props) {
  /**
   * Full Name
   * Email (optional)
   * Purpose of Contact/ What interests you (Services, Just an Inquiry, Wanna hang out)
   * Want to hire me? as what? SELECT(Tech Resource, Mentor, other?)
   * Message TEXTAREA
   *  */

  // 1= ready for submission, 0=submitted
  const [formState, setFormState] = useState(1)

  const formConstants = {
    purpose: {
      services: "services",
      inquiry: "inquiry",
      hangout: "hangout",
    },
    hireAs: {
      techResource: "tech-resource",
      mentor: "mentor",
      consultant: "consultant",
    },
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactPurpose: [],
    hireAs: [],
    message: "",
  });

  const form = useRef();

  const handleSubmit = async () => {
    emailjs.init({
      publicKey: "2u2IBkz4SNHuJ3jqF",
    })
    emailjs.send("service_jjms90v","template_he0fd6r",{
      from_name: formData.fullName,
      message: formData.message,
      email: formData.email ? formData.email : "none",
      hireAs: formData.hireAs.reduce( (acc, curr) => acc + ", " + curr),
      purpose: formData.contactPurpose.reduce( (acc, curr) => acc + ", " + curr),
      
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormState( prevState => !prevState)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }

  const handleFillAgain = () => {
    setFormData({
      fullName: "",
      email: "",
      contactPurpose: [],
      hireAs: [],
      message: "",
    })
    setFormState( prevState => !prevState)
  }

  return (
    <div className="mb-16" id="contact-form-container">
      {formState ?
      (<form className="flex flex-col md:min-w-96">
        <TextInput
          id="contact-name"
          label="Full Name"
          name="fullName"
          isRequired={true}
          formData={formData}
          setFormData={setFormData}
        />
        <EmailInput
          id="contact-email"
          label="Email Address"
          name="email"
          isRequired={true}
          formData={formData}
          setFormData={setFormData}
        />

        <h3 className="text-content/80 my-2">Purpose of Contact</h3>

        <CheckBox
          label="I want one(or more) of your services"
          id="contactform-service"
          name={formConstants.purpose.services}
          formData={formData}
          setFormData={setFormData}
        />
        <CheckBox
          label="I want to inquire about something"
          id="contactform-inquiry"
          name={formConstants.purpose.inquiry}
          formData={formData}
          setFormData={setFormData}
        />
        <CheckBox
          label="Just want to hang out"
          id="contactform-hangout"
          name={formConstants.purpose.hangout}
          formData={formData}
          setFormData={setFormData}
        />

        {formData.contactPurpose.includes(formConstants.purpose.hangout) && (
          <div className="tooltip tooltip-left mx-12 my-4" data-tip="Not an error! I repeat, not an error!">
            <p
              className="text-primary text-left"
            >
              You do know that my Discord link is right <br/>beside this form? ...
              right? <br/>But go on write your message 😊
            </p>
          </div>
        )}

        {formData.contactPurpose.includes(formConstants.purpose.services) && (
          <MultiSelectInput
            label="You want to hire me as ...?"
            formData={formData}
            formConstants={formConstants}
            setFormData={setFormData}
          />
        )}

        <TextArea
          label="What would you like to tell me?"
          id="contact-message"
          formData={formData}
          setFormData={setFormData}
        />

        {/* <button
          data-twe-ripple-init
          data-twe-ripple-color="light"
          onClick={handleSubmit}
          type="submit"
          value="Submit"
          className="transition-all duration-500 text-white bg-gradient-to-r from-primary hover:via-cyan-300 hoverto-blue-200 to-blue-500   focus:outline-none focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 text-center my-2 border-0 shadow-md shadow-shadow ease-in"
        >
          Submit
        </button> */}

          <Turnstile 
				  	siteKey='0x4AAAAAAAcY1yqOBIph005P'
				  	options={{
						  size: 'normal'
						}}
						className='mx-auto my-4'
			  	/>
        <a href="#_" 
          type="submit"
          value="Submit"
          onClick={handleSubmit} class="relative p-0.5 inline-flex items-center justify-center overflow-hidden group rounded-md">
          <span class="w-full h-full bg-gradient-to-br from-primary via-blue-300 to-cyan-300 group-hover:from-primary/40 group-hover:via-cyan-300 group-hover:to-primary absolute"></span>
          <span class="relative px-6 py-3 w-full transition-all ease-out bg-bg1 rounded-md group-hover:bg-opacity-0 duration-400 flex justify-center">
          <span class="relative text-content group-hover:text-gray-700 ">Submit</span>
          </span>
        </a>
      </form>)
      :
      (<div className="md:min-w-96 text-center">
        <p className="text-xl font-bold text-primary mb-4">I Just Recieved Your Message! 🥳</p>
        <p className="mb-4">Thank you or taking the time to write a wonderful message. I'll make sure to read it and get back to you as soon as possible (probably within 24 hours)</p>
        <p>But hey! if you would like to send another <span className="text-primary hover:underline cursor-pointer" onClick={handleFillAgain}>click here</span></p>
      </div>)}
      {/**<div class="cf-turnstile" data-sitekey="0x4AAAAAAAcY1yqOBIph005P" data-callback="() => console.log('CAptcha RAN!!')"></div>**/}
    </div>
  );
}

Form.propTypes = {};

export default Form;
