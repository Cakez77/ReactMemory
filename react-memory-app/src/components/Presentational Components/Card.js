import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import backside from "../../assets/backside.svg";

// eslint-disable-next-line react/prop-types
const Card = ({ card, reset, onClick, selectable }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (reset) {
      setSelected(false);
    }
  });
  return !selected ? (
    <div
      role="presentation"
      onClick={() => {
        if (!selected && selectable) {
          setSelected(true);
          onClick(card.name);
        }
      }}
      style={{
        height: 110,
        width: 110,
        border: "2px solid #000000",
        display: "inline-block"
      }}
    >
      <img src={backside} alt="" />
    </div>
  ) : (
    <div
      role="presentation"
      onClick={() => {
        if (!selected && selectable) {
          setSelected(true);
          onClick(card.name);
        }
      }}
      style={{
        height: 110,
        width: 110,
        border: "2px solid #000000",
        display: "inline-block"
      }}
    >
      <img src={card.image} alt="" />
    </div>
  );
};

export default Card;

Card.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  card: PropTypes.object.isRequired,
  reset: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  selectable: PropTypes.bool.isRequired
};
