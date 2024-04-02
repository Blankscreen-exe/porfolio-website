import React from "react";
import PropTypes from "prop-types";

// Components
import { TEInput } from "tw-elements-react";

function Input(props) {
  const { 
    id, 
    label, 
    name,
    isRequired, 
    formData, 
    setFormData 
  } = props;

  const handleChange = (event) => {
    setFormData( prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      } 
    })
  };

  return (
    <div className="my-2">
      {isRequired ? (
        <TEInput
          type="email"
          id={id ? id : "email"}
          name={name}
          label={<span className="bg-bg1 px-2">{label}</span>}
          onChange={handleChange}
          value={formData.email}
          required
        ></TEInput>
      ) : (
        <TEInput
          type="email"
          id={id ? id : "email"}
          name={name}
          label={<span className="bg-bg1 px-2">{label}</span>}
          onChange={handleChange}
          value={formData.email}
        ></TEInput>
      )}
    </div>
  );
}

Input.propTypes = {};

export default Input;
