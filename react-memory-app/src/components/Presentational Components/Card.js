import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ name, onClick, selectable }) => {
  const [selected, setSelected] = useState(false);
  return !selected ? (
    <div
      role="presentation"
      onClick={() => {
        if (!selected && selectable) {
          setSelected(true);
          onClick(name);
        }
      }}
      style={{
        height: 100,
        width: 100,
        backgroundColor: "#555555",
        display: "inline-block"
      }}
    >
      {name}
    </div>
  ) : (
    <div
      role="presentation"
      onClick={() => {
        if (!selected && selectable) {
          setSelected(true);
          onClick(name);
        }
      }}
      style={{
        height: 95,
        width: 95,
        backgroundColor: "#555555",
        border: "2px solid #000000",
        display: "inline-block"
      }}
    >
      {name}
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selectable: PropTypes.bool.isRequired
};
