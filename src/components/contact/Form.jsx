import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import MultiSelectInput from "./MultiSelectInput";
import CheckBox from "./CheckBox";
import TextArea from "./TextArea";

function Form(props) {
  /**
   * Full Name
   * Email (optional)
   * Purpose of Contact/ What interests you (Services, Just an Inquiry, Wanna hang out)
   * Want to hire me? as what? SELECT(Tech Resource, Mentor, other?)
   * Message TEXTAREA
   *  */

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

  console.log("STATE DATA", formData);

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

        <button
          data-twe-ripple-init
          data-twe-ripple-color="light"
          type="submit"
          value="Submit"
          className="transition-all duration-500 text-white bg-gradient-to-r from-primary to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 text-center my-2 border-0 shadow-md shadow-shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
