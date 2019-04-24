import React from "react";
import PropTypes from "prop-types";
import Card from "../Presentational Components/Card";

const CardField = ({ reset, cardNames, onClick, selectable }) => {
  let id = -1;
  const cards = cardNames.map(cardName => {
    id += 1;
    return (
      <Card
        key={id}
        reset={reset}
        name={cardName}
        onClick={onClick}
        selectable={selectable}
      />
    );
  });

  return (
    <div
      style={{
        width: 300,
        height: 110
      }}
    >
      {cards}
    </div>
  );
};

export default CardField;

CardField.propTypes = {
  reset: PropTypes.bool.isRequired,
  cardNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  selectable: PropTypes.bool.isRequired
};
