import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

// Style
import "./CardField.css";

import { select_card } from "../Redux/Actions/actions";
import Card from "../Presentational Components/Card";

const CardField = ({ deck, onClick, backside, openCards }) => {
  console.log("The open Cards", openCards);

  return (
    <div className="CardField">
      {deck.map(card => (
        <Card
          key={card.id}
          card={card}
          onClick={onClick}
          backside={backside}
          open={openCards.find(openCard => openCard.id === card.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  deck: state.deck,
  backside: state.backside,
  openCards: state.openCards
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, name) => {
    dispatch(select_card(id, name));
  }
});

Card.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardField);
