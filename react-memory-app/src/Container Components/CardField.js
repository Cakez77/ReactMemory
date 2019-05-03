import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Style
import "./CardField.css";

import Card from "../Presentational Components/Card";
import { select_card } from "../Redux/Actions/actions";

const CardField = ({ deck, onClick, backside, selectedCards }) => {
  return (
    <div className="CardField">
      {deck.map(card => {
        return (
          <Card
            key={card.id}
            card={card}
            onClick={onClick}
            selectable={
              !(selectedCards !== undefined && selectedCards.length === 2)
            }
            backside={backside}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  deck: state.deck,
  backside: state.backside,
  selectedCards: state.deck.filter(card => card.selected === true)
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, name) => {
    dispatch(select_card(id, name));
  }
});

Card.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object.isRequired),
  onClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardField);
