import React, { useState } from "react";
import "./App.css";

import TextField from "./components/TextField";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(false);

  return (
    <div className="App">
      <TextField name={name} />
      <Card
        name="Card"
        selected={selected}
        onClick={() => {
          setName("Carddddd");
          setSelected(true);
        }}
      />
    </div>
  );
};

export default App;
