import React from "react";
import PropTypes from "prop-types";

// Components
import { TESelect } from "tw-elements-react";

function MultiSelectInput(props) {
  const { label, formData, setFormData, formConstants } = props;

  const listData = [
    {
      text: "Technical Resource",
      value: formConstants.hireAs.techResource,
      secondaryText: "I will work on your projects",
    },
    {
      text: "Mentor",
      value: formConstants.hireAs.mentor,
      secondaryText: "I will teach you according to a custom tailored syllabus",
    },
    {
      text: "Consultant",
      value: formConstants.hireAs.consultant,
      secondaryText: 
        "I will answer your inquiries to the best of my abilities and knowledge",
    },
  ];


  const handleChange = (data) => {
    console.log("CHANGED", data)
    setFormData(prevState => {
      return {
        ...prevState,
        hireAs: data.map( item => item.value)
      }
    })
  }

  return (
    <div className="w-full my-2 transition-opacity duration-300">
      <div className="relative mb-3 pt-5 text-secondary focus:text-primary">
        <TESelect
          data={listData}
          optionHeight={52}
          clearBtn
          multiple
          label={<span className="bg-bg1 px-2">{label}</span>}
          required
          id="multiselectbox"
          className="!text-content/70 hover:text-content/70 focus:text-primary"
          onValueChange={handleChange}
        />
      </div>
    </div>
  );
}

MultiSelectInput.propTypes = {};

export default MultiSelectInput;
