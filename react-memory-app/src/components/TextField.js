import React from "react";
import PropTypes from "prop-types";

const TextField = ({ name }) => {
  return <div style={{ height: 50, width: 200 }}>{name}</div>;
};

export default TextField;

TextField.propTypes = {
  name: PropTypes.string.isRequired
};
