import React from "react";
import PropTypes from "prop-types";

import Card from "../Presentational Components/Card";

const CardField = ({ deck }) => (
  <div className="CardField">
    {deck.map(card => (
      <Card id={card.id} card={card} />
    ))}
  </div>
);

export default CardField;

Card.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object.isRequired)
};
