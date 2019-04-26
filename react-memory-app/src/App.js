import React, { useState, useEffect } from "react";
import "./App.css";

import TextField from "./components/Presentational Components/TextField";
import CardField from "./components/Container Components/CardField";

import jaguar from "./assets/jaguar.png";
import fußball from "./assets/fußball.svg";
import wolf from "./assets/wolf.png";
import delfin from "./assets/delfin.svg";
import schneewitchen from "./assets/schneewitchen.jpg";
import spinne from "./assets/spinne.png";
import trooper from "./assets/trooper.svg";
import vader from "./assets/vader.svg";

const App = () => {
  const cards = [
    {
      name: "Jaguar",
      image: jaguar
    },
    {
      name: "Fußball",
      image: fußball
    },
    {
      name: "Wolf",
      image: wolf
    },
    {
      name: "Delfin",
      image: delfin
    },
    {
      name: "Schneewitchen",
      image: schneewitchen
    },
    {
      name: "Spinne",
      image: spinne
    },
    {
      name: "Trooper",
      image: trooper
    },
    {
      name: "Vader",
      image: vader
    }
  ];

  function randomizeCards() {
    const deck = cards.concat(cards);

    let currentIndex = deck.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }

    return deck;
  }

  const [selectedCards, setSelectedCards] = useState([]);
  const [selectable, setSelectable] = useState(true);
  const [border, setBorder] = useState(false);
  const [color, setColor] = useState("#0000009");
  const [reset, setReset] = useState(true);
  const [randomizedCards, setRandomizedCards] = useState(randomizeCards());

  async function resetGame() {
    await setSelectedCards([]);
    await setSelectable(true);
    await setBorder(false);
    await setColor("#000000");
    await setRandomizedCards(randomizeCards());
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
      <div style={{ width: 300, height: 60 }}>
        <TextField name={selectedCards[0]} border={border} color={color} />
        <TextField name={selectedCards[1]} border={border} color={color} />
      </div>

      <CardField
        reset={reset}
        cards={randomizedCards}
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
