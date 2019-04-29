import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const TextField = ({ name, border, color }) => {
  return (
    <div
      style={{
        height: 50,
        width: 95,
        border: border ? `2px solid ${color}` : "2px solid #000000",
        display: "inline-block"
      }}
    >
      {name}
    </div>
  );
};

export default TextField;

TextField.propTypes = {
  border: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired
};
