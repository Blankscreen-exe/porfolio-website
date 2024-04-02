import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import TextInput from "../common/TextInput";
import EmailInput from "../common/EmailInput";
import MultiSelectInput from "../common/MultiSelectInput";
import CheckBox from "../common/CheckBox";
import TextArea from "../common/TextArea";

function Form(props) {
  /**
   * Full Name
   * Email (optional)
   * Purpose of Contact/ What interests you (Services, Just an Inquiry, Wanna hang out)
   * Want to hire me? as what? SELECT(Tech Resource, Mentor, other?)
   * Message TEXTAREA
   *  */

  const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      contactPurpose: [],
      hireAs: [],
      message: ""
    })

    console.log("STATE DATA",formData)

  const hireAsOptions = [
    {
      text: "Technical Resource",
      value: "tech-resource",
      secondaryText: "I will work on your projects",
    },
    {
      text: "Mentor",
      value: "mentor",
      secondaryText: "I will teach you according to a custom tailored syllabus",
    },
    {
      text: "Consultant",
      value: "consultant",
      secondaryText: 
        "I will answer your inquiries to the best of my abilities and knowledge",
    },
  ];

  return (
    <div className="mb-16 min-w-[26rem]" id="contact-form-container">
      <form className="flex flex-col">
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

        <h3 className="text-content/80">Purpose of Contact</h3>

        <CheckBox
          label="I want one(or more) of your services"
          id="contactform-service"
          name="service"
          formData={formData} 
          setFormData={setFormData}
        />
        <CheckBox
          label="I want to inquire about something"
          id="contactform-inquiry"
          name="inquiry"
          formData={formData} 
          setFormData={setFormData}
        />
        <CheckBox 
          label="Just want to hang out" 
          id="contactform-hangout" 
          name="hangout" 
          formData={formData} 
          setFormData={setFormData}
        />

        <MultiSelectInput
          label="You want to hire me as ...?"
          listData={hireAsOptions}
        />

        <TextArea
          label="What would you like to tell me?"
          id="contact-message"
        />

        <button
          data-twe-ripple-init
          data-twe-ripple-color="light"
          type="submit"
          value="Submit"
          className="transition-all duration-500 text-white bg-gradient-to-r from-primary to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 text-center my-2 border-0"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
