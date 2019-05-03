import React from "react";
import { connect } from "react-redux";
import "./App.css";

import CardField from "./Container Components/CardField";
import SelectedCards from "./Container Components/SelectedCards";
import PlayerInfo from "./Container Components/PlayersInfo";
import { reset_game } from "./Redux/Actions/actions";

const App = ({ dispatch }) => {
  return (
    <div className="App">
      <SelectedCards />
      <CardField />
      <PlayerInfo />
      <button
        onClick={() => {
          dispatch(reset_game());
        }}
      >
        {"Reset"}
      </button>
    </div>
  );
};

export default connect()(App);
