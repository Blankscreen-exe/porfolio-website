import React from "react";
import PropTypes from "prop-types";

// Components
import { TEInput } from "tw-elements-react";

function TextInputFilter(props) {
  const { id, label, name, value, isRequired, formData, setFormData, handleChange } = props;
  return (
    <div className="my-2 custom-tw-input-elem">
      {isRequired ? (
        <TEInput
          type="text"
          id={id ? id : "customTextInput"}
          name={name}
          label={<span className="bg-bg1 px-2">{label}</span>}
          onChange={(e) => handleChange(e.target.value)}
          value={value}
          required
          className="focus:text-primary text-secondary"
        ></TEInput>
      ) : (
        <TEInput
          type="text"
          id={id ? id : "customTextInput"}
          label={<span className="bg-bg1 px-2">{label}</span>}
          onChange={(e) => handleChange(e.target.value)}
          value={value}
          className="focus:text-primary text-secondary"
        ></TEInput>
      )}
    </div>
  );
}

TextInputFilter.propTypes = {};

export default TextInputFilter;
