import React, { useState } from "react";
import PropTypes from "prop-types";

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { updateFormAction } from '../../redux/reducers/contactFormSlice'

// Components
import { TEInput } from "tw-elements-react";

function Input(props) {
  const { id, label, isRequired } = props;

  const formData = useSelector((state) => {
    return state.persistedReducer.contactForm
  })

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const updatedFullName = event.target.value;
    dispatch(updateFormAction({ fullName: updatedFullName }));
  };

  return (
    <div className="my-2 custom-tw-input-elem">
      {isRequired ? (
        <TEInput
          type="text"
          id={id ? id : "customTextInput"}
          label={<span className="bg-bg1 px-2">{label}</span>}
          onClick={handleChange}
          value={formData.fullName}
          required
        ></TEInput>
      ) : (
        <TEInput
          type="text"
          id={id ? id : "customTextInput"}
          label={<span className="bg-bg1 px-2">{label}</span>}
          onClick={useDispatch(updateFormAction({fullName:formData.fullName}))}
        ></TEInput>
      )}
    </div>
  );
}

Input.propTypes = {};

export default Input;
