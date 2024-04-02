import React from "react";
import PropTypes from "prop-types";

// Components
import { TETextarea } from "tw-elements-react";

function TextArea(props) {
  const { id, label, rows } = props;
  return (
    <div>
      <div className="w-full my-2">
        <div className="relative mb-3 ">
          <TETextarea
            id={id}
            label={<span className="bg-bg1 px-2">{label}</span>}
            rows={rows ? rows : 4}
            className="text-secondary focus:text-primary"
          ></TETextarea>
        </div>
      </div>
    </div>
  );
}

TextArea.propTypes = {};

export default TextArea;
