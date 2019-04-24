import React, { useState } from "react";
import "./App.css";

import TextField from "./components/Presentational Components/TextField";
import CardField from "./components/Container Components/CardField";

const App = () => {
  const cards = ["Card1", "Card2", "Card1"];
  const [selectedCards, setSelectedCards] = useState(["", ""]);
  const [selectable, setSelectable] = useState(true);

  return (
    <div className="App">
      <TextField name={selectedCards[0]} />
      <TextField name={selectedCards[1]} />
      <CardField
        cards={cards}
        onClick={cardName => {
          if (selectedCards[0] === "") {
            setSelectedCards([cardName, ""]);
          } else if (selectedCards[1] === "") {
            setSelectedCards([selectedCards[0], cardName]);
            setSelectable(false);
          }
        }}
        selectable={selectable}
      />
    </div>
  );
};

export default App;
