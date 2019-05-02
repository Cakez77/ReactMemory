import React from "react";
import PropTypes from "prop-types";

// Style
import "./CardField.css";

import Card from "../Presentational Components/Card";

const CardField = ({ deck, onClick, backside }) => {
  return (
    <div className="CardField">
      {deck.map(card => (
        <Card key={card.id} card={card} onClick={onClick} backside={backside} />
      ))}
    </div>
  );
};

Card.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object.isRequired),
  onClick: PropTypes.func.isRequired
};

export default CardField;
