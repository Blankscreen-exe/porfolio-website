import React from "react";
import PropTypes from "prop-types";

function CheckBox(props) {
  const { id, name, label, formData, setFormData } = props;

  const handleClick = (event) => {
    setFormData((prevState) => {
      let prevStateContactPurposeCopy = prevState.contactPurpose.map((x) => x);
      if (event.target.checked) {
        prevStateContactPurposeCopy.push(event.target.name);
      } else {
        const index = prevStateContactPurposeCopy.indexOf(event.target.name);
        if (index !== -1) {
          prevStateContactPurposeCopy.splice(index, 1);
        }
      }
      return {
        ...prevState,
        contactPurpose: prevStateContactPurposeCopy,
      };
    });
  };

  return (
    <div>
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        {formData.contactPurpose.includes(name) ? (
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-primary before:opacity-0 before:transition-opacity checked:border-bg2 checked:bg-primary checked:before:bg-primary hover:before:opacity-10 hover:bg-primary after:hover:bg-contrast focus:bg-bg2 focus:outline-none"
            id={id}
            name={name}
            onClick={handleClick}
            checked
          />
        ) : (
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-primary before:opacity-0 before:transition-opacity checked:border-bg2 checked:bg-primary checked:before:bg-primary hover:before:opacity-10 hover:bg-primary after:hover:bg-contrast focus:bg-bg2 focus:outline-none"
            id={id}
            name={name}
            onClick={handleClick}
          />
        )}
        <label
          className="inline-block pl-2 hover:cursor-pointer text-content/80"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

CheckBox.propTypes = {};

export default CheckBox;
