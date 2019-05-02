import React from "react";
import "./App.css";

import RandomizedDeck from "./Container Components/RandomizedDeck";
import SelectedCards from "./Container Components/SelectedCards";
import PlayerInfo from "./Container Components/PlayersInfo";

const App = () => {
  return (
    <div className="App">
      <SelectedCards />
      <RandomizedDeck />
      <PlayerInfo />
    </div>
  );
};

export default App;
