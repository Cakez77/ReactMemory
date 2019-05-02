import React from "react";
import PropTypes from "prop-types";

// Style
import "./Card.css";

const Card = ({ card, onClick, backside }) => {
  return (
    <div
      className="Card"
      name={card.name}
      onClick={() => {
        if (!card.open) {
          onClick(card.id, card.name);
        }
      }}
    >
      <img
        src={card.selected || card.open ? card.img : backside}
        className="Card-img"
        alt=""
      />
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  backside: PropTypes.object.isRequired
};
