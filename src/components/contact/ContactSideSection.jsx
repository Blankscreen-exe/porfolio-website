import React from "react";
import PropTypes from "prop-types";

// data
import contactList from "../../data/contactAlt.json";

function ContactSideSection(props) {
  return (
    <div className="px-6 rounded-md mb-16 w-fit">
      <h1 className="text-3xl font-bold text-title my-3">Hello!</h1>
      <p>You can try the following alternatives to contact me as well.</p>

      {contactList.map((item, ind) => {
        return (
          <a href={item.link} target="_blank" className="w-full">
            <div
              key={ind}
              className="flex flex-row gap-4 items-center text-content hover:text-primary hover:cursor-pointer my-4"
            >
              <img
                src="https://dummyimage.com/400x400/878787/fff"
                className="w-12 rounded-full"
              />
              <span className="font-bold">{item.name}</span>
            </div>
          </a>
        );
      })}

      <p>Short note at the end of the section.</p>
    </div>
  );
}

ContactSideSection.propTypes = {};

export default ContactSideSection;
