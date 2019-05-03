import React from "react";
import "./App.css";

import CardField from "./Container Components/CardField";
import SelectedCards from "./Container Components/SelectedCards";
import PlayerInfo from "./Container Components/PlayersInfo";

const App = () => {
  return (
    <div className="App">
      <SelectedCards />
      <CardField />
      <PlayerInfo />
    </div>
  );
};

export default App;
