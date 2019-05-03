import { connect } from "react-redux";
import React from "react";

// Style
import "./SelectedCards.css";

import {
  add_points,
  change_player_after_5_sec
} from "../Redux/Actions/actions";
import CardNameField from "../Presentational Components/CardNameField";

const SelectedCards = ({ selectedCards, dispatch }) => {
  if (selectedCards.length > 1) {
    if (selectedCards[0].name === selectedCards[1].name) {
      dispatch(add_points());
    } else {
      dispatch(change_player_after_5_sec());
    }
  }

  return (
    <div className="SelectedCards">
      {selectedCards !== undefined ? (
        selectedCards.map(card => (
          <CardNameField key={card.id} name={card.name} />
        ))
      ) : (
        <div />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedCards: state.deck.filter(card => card.selected === true)
});

export default connect(mapStateToProps)(SelectedCards);
