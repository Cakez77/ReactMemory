import React from "react";
import PropTypes from "prop-types";
import Card from "../Presentational Components/Card";

const CardField = ({ cards, onClick }) => {
  return cards.map(cardName => {
    return <Card name={cardName} onClick={onClick} />;
  });
};

export default CardField;

CardField.propTypes = {
  cards: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
