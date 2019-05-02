import React from "react";
import { connect } from "react-redux";

// Style
import "./PlayersInfo.css";

import PlayerData from "../Presentational Components/PlayerData";

const PlayersInfo = ({ players, currentPlayer }) => {
  return (
    <div className="PlayersInfo">
      {players.map(player => {
        return (
          <PlayerData
            key={player.id}
            playerName={player.playerName}
            points={player.points}
            myTurn={player.id === currentPlayer}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  players: state.playerInfo,
  currentPlayer: state.currentPlayer
});

export default connect(mapStateToProps)(PlayersInfo);
