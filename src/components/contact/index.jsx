import React from "react";
import PropTypes from "prop-types";
import PageTitle from "../common/PageTitle";
import Form from "./Form";
import SectionHeading from "../common/SectionHeading";
import ContactSideSection from "./ContactSideSection";

function Contact(props) {
  return (
    <div>
      <PageTitle title="Let's Get In Touch!" />
      <div className="flex flex-col md:flex-row justify-around gap-10">
        <ContactSideSection/>
        <Form />
      </div>
    </div>
  );
}

Contact.propTypes = {};

export default Contact;
