import React from "react";
import PropTypes from "prop-types";

// Style
import "./Points.css";

const Points = ({ points }) => <div className="Points">{points}</div>;

export default Points;

Points.propTypes = {
  points: PropTypes.number.isRequired
};
