import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ name, onClick }) => {
  const [selected, setSelected] = useState(false);
  return !selected ? (
    <div
      role="presentation"
      onClick={() => {
        if (!selected) {
          setSelected(true);
          onClick(name);
        }
      }}
      style={{ height: 200, width: 200, backgroundColor: "#555555" }}
    >
      {name}
    </div>
  ) : (
    <div
      role="presentation"
      onClick={() => {
        if (!selected) {
          setSelected(true);
          onClick(name);
        }
      }}
      style={{
        height: 200,
        width: 200,
        backgroundColor: "#555555",
        border: "2px solid #000000"
      }}
    >
      {name}
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
