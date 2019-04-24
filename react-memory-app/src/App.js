import React, { useState, useEffect } from "react";
import "./App.css";

import TextField from "./components/Presentational Components/TextField";
import CardField from "./components/Container Components/CardField";

const App = () => {
  const cards = ["Card1", "Card2", "Card1"];
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectable, setSelectable] = useState(true);
  const [border, setBorder] = useState(false);
  const [color, setColor] = useState("#0000009");
  const [reset, setReset] = useState(false);

  async function resetGame() {
    await setSelectedCards([]);
    await setSelectable(true);
    await setBorder(false);
    await setColor("#000000");
  }

  useEffect(() => {
    if (reset) {
      resetGame();
      setReset(false);
    }
    if (selectedCards.length === 2) {
      setSelectable(false);
      setBorder(true);
      if (selectedCards[0] === selectedCards[1]) {
        setColor("#008000");
      } else {
        setColor("#FF0000");
      }
    }
  });

  return (
    <div className="App">
      <div style={{ width: 200, height: 60 }}>
        <TextField name={selectedCards[0]} border={border} color={color} />
        <TextField name={selectedCards[1]} border={border} color={color} />
      </div>

      <CardField
        reset={reset}
        cardNames={cards}
        onClick={cardName => {
          if (selectedCards.length <= 2) {
            setSelectedCards([...selectedCards, cardName]);
          }
        }}
        selectable={selectable}
      />
      <button
        style={{ width: 50, height: 20 }}
        type="button"
        onClick={() => {
          setReset(true);
        }}
      >
        {"Reset"}
      </button>
    </div>
  );
};

export default App;
