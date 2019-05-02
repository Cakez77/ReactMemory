import React from "react";
import PropTypes from "prop-types";

// Style
import "./PlayerName.css";

const PlayerName = ({ name, myTurn }) => (
  <div className={myTurn ? "PlayerName Selected" : "PlayerName"}>{name}</div>
);

export default PlayerName;

PlayerName.propTypes = {
  name: PropTypes.string.isRequired,
  myTurn: PropTypes.bool.isRequired
};
