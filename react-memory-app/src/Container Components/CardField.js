import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

// Style
import "./CardField.css";

import Card from "../Presentational Components/Card";

const CardField = ({ deck }) => (
  <div className="CardField">
    {deck.map(card => (
      <Card id={card.id} card={card} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  deck: state.deck
});

Card.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default connect(mapStateToProps)(CardField);
