import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Style
import "./CardField.css";

import Card from "../Presentational Components/Card";
import { set_randomize } from "../Redux/Actions/actions";

const CardField = ({ deck, onClick, backside, dispatch }) => {
  useEffect(() => {
    dispatch(set_randomize(false));
  });
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
  onClick: PropTypes.func.isRequired,
  sort: PropTypes.bool.isRequired
};

export default CardField;
