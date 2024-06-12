import React, {useState} from "react";
import PropTypes from "prop-types";

// Components
import { TEInput } from "tw-elements-react";

function validateEmail(email) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

function Input(props) {
	const [isInvalidEmail, setIsInvalidEmail] = useState(false);

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
    
    validateEmail(formData.email) 
    ? setIsInvalidEmail(false)
    : setIsInvalidEmail(true)
    
    console.log(isInvalidEmail)
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
      	{isInvalidEmail && <p>Please use a valid email address</p>}
    </div>
  );
}

Input.propTypes = {};

export default Input;
