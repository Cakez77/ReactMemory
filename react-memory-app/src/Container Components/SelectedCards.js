import React from "react";

import CardNameField from "../Presentational Components/CardNameField";

const SelectedCards = ({ selectedCardNames }) => (
  <div className="SelectedCards">
    {selectedCardNames !== undefined ? (
      selectedCardNames.map(name => <CardNameField name={name} />)
    ) : (
      <div />
    )}
  </div>
);

export default SelectedCards;
