import React, { useState } from "react";
import PropTypes from "prop-types";

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { updateFormAction } from '../../redux/reducers/contactFormSlice'

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
    <div className="my-2 custom-tw-input-elem">
      {isRequired ? (
        <TEInput
          type="text"
          id={id ? id : "customTextInput"}
          name={name}
          label={<span className="bg-bg1 px-2">{label}</span>}
          onChange={handleChange}
          value={formData.fullName}
          required
        ></TEInput>
      ) : (
        <TEInput
          type="text"
          id={id ? id : "customTextInput"}
          label={<span className="bg-bg1 px-2">{label}</span>}
          onChange={handleChange}
          value={formData.fullName}
        ></TEInput>
      )}
    </div>
  );
}

Input.propTypes = {};

export default Input;
