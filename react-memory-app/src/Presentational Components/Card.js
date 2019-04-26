import React from "react";
import PropTypes from "prop-types";

const Card = ({ card }) => {
  return (
    <div className="Card" name={card.name}>
      <img src={card.img} className="Card-img" alt="" />
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.objectOf(
    PropTypes.string.isRequired,
    PropTypes.img.isRequired
  )
};
