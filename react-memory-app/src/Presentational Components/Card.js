import React from "react";
import PropTypes from "prop-types";

// Style
import "./Card.css";

const Card = ({ card, onClick, open, backside }) => {
  return (
    <div
      className="Card"
      name={card.name}
      onClick={() => onClick(card.id, card.name)}
    >
      <img src={open ? card.img : backside} className="Card-img" alt="" />
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  backside: PropTypes.object.isRequired
};
