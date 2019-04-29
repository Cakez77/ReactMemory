import React from "react";
import PropTypes from "prop-types";

// Style
import "./PlayerPoints.css";

const PlayerPoints = ({ playerOnePoints, playerTwoPoints }) => {
  // don't know yet if i need thise

  return (
    <div className="PlayerPoints">
      <Points points={playerOnePoints} />
      <Points points={playerTwoPoints} />
    </div>
  );
};

export default PlayerPoints;

PlayerPoints.propTypes = {
  playerOnePoints: PropTypes.number.isRequired,
  playerTwoPoints: PropTypes.number.isRequired
};
