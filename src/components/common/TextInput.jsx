import React from "react";
import PropTypes from "prop-types";

// Components
import { TEInput } from "tw-elements-react";

function Input(props) {
  const { id, label, isRequired } = props;
  return (
    <div className="my-2 custom-tw-input-elem">
      {isRequired ? (
        <TEInput
          type="text"
          id={id ? id : "customTextInput"}
          label={<span className="bg-bg1 px-2">{label}</span>}
          required
        ></TEInput>
      ) : (
        <TEInput
          type="text"
          id={id ? id : "customTextInput"}
          label={<span className="bg-bg1 px-2">{label}</span>}
        ></TEInput>
      )}
    </div>
  );
}

Input.propTypes = {};

export default Input;
