import React from "react";
import PropTypes from "prop-types";
import Card from "../Presentational Components/Card";

const CardField = ({ cards, onClick, selectable }) => {
  return (
    <div
      style={{
        width: 300,
        height: 300
      }}
    >
      {cards.map(cardName => {
        return (
          <Card name={cardName} onClick={onClick} selectable={selectable} />
        );
      })}
    </div>
  );
};

export default CardField;

CardField.propTypes = {
  cards: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selectable: PropTypes.bool.isRequired
};
