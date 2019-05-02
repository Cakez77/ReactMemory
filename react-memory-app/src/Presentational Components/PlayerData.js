import React from "react";
import PropTypes from "prop-types";

// Style
import "./PlayerData.css";

import Points from "../Presentational Components/Points";
import PlayerName from "../Presentational Components/PlayerName";

const PlayerData = ({ playerName, points, myTurn }) => {
  // don't know yet if i need thise

  return (
    <div className="PlayerData">
      <PlayerName name={playerName} myTurn={myTurn} />
      <Points points={points} />
    </div>
  );
};

export default PlayerData;

PlayerData.propTypes = {
  playerName: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  myTurn: PropTypes.bool.isRequired
};
