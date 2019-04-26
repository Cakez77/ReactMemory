import React from "react";
import "./App.css";

import CardField from "./Container Components/CardField";
import SelectedCards from "./Container Components/SelectedCards";

const App = () => {
  return (
    <div className="App">
      <CardField />
      <SelectedCards />
    </div>
  );
};

export default App;
