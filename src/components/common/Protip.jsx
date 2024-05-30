import React from "react";
import PropTypes from "prop-types";

function Protip(props) {

  return (
    <div className="mx-auto w-fit my-6 md:visible invisible text-center">
      <p>
        <b>Protip:</b> <span className="kbd">Shift</span>+
        <span className="kbd">Scroll Wheel</span> to scroll horizontally
      </p>
    </div>
  );
}

Protip.propTypes = {};

export default Protip;
