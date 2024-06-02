import React from "react";
import PropTypes from "prop-types";

// data
import contactList from "../../data/contactAlt.json";
import socialLinks from '../../data/socialLinks.json';

// constants
import svgList from '../../constants/svg'

function ContactSideSection(props) {
  return (
    <div className="px-6 rounded-md mb-16 w-fit">
      <h1 className="text-3xl font-bold text-title my-3">Hello!</h1>
      <p>I'd love to hear from you! Feel free to drop me a line if you have any questions, project inquiries, or just want to chat.</p>

      {contactList.map((item, ind) => {
        return (
          <a href={socialLinks[item.icon]} target="_blank" className="w-full">
            <div
              key={ind}
              className="flex flex-row gap-4 items-center text-content hover:text-primary hover:cursor-pointer my-4"
            >
              <div className="w-12 rounded-full">
                {svgList.socialIcons[item.icon]}
              </div>
              <span className="font-bold">{item.name}</span>
            </div>
          </a>
        );
      })}

      <p>I'm always happy to connect!</p>
    </div>
  );
}

ContactSideSection.propTypes = {};

export default ContactSideSection;
