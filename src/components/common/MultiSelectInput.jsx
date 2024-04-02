import React from "react";
import PropTypes from "prop-types";

// Components
import { TESelect } from "tw-elements-react";

function MultiSelectInput(props) {
  const { label, listData } = props;

  return (
    <div className="w-full my-2">
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
        />
      </div>
    </div>
  );
}

MultiSelectInput.propTypes = {};

export default MultiSelectInput;
