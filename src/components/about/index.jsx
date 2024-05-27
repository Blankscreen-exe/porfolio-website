import React from "react";
import PropTypes from "prop-types";

// Components
import SectionHeading from "../common/SectionHeading";
import BlockQuote from "../common/BlockQuote";
import PageTitle from "../common/PageTitle";
import Education from "./Education";
import Languages from "./Languages";
import Hobbies from "./Hobbies";

function About(props) {
  window.scrollTo(0, 0);
  return (
    <div>
      <PageTitle title={"Who Am I?"} />

      <BlockQuote text="<span class='font-italic'>Code is a language I can speak</span>, therefore I can communicate with computers and make them do what I want." />

      <SectionHeading title="Education Timeline" />
      <Education />

      <br />

      <SectionHeading title="Languages I Can Speak~" />
      <Languages />

      <br />

      <SectionHeading title="Hobbies" />
      <Hobbies/>
    </div>
  );
}

About.propTypes = {};

export default About;
