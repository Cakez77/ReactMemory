import React from "react";

import CardNameField from "../Presentational Components/CardNameField";

const SelectedCards = ({ selectedCardNames }) => (
  <div className="SelectedCards">
    {selectedCardNames.map(name => (
      <CardNameField name={name} />
    ))}
  </div>
);

export default SelectedCards;
