import { connect } from "react-redux";
import React from "react";

// Style
import "./SelectedCards.css";

import { add_points, change_player } from "../Redux/Actions/actions";
import CardNameField from "../Presentational Components/CardNameField";

const SelectedCards = ({ selectedCards, dispatch }) => {
  if (selectedCards.length > 1) {
    if (selectedCards[0].name === selectedCards[1].name) {
      console.log("Test, both selected Cards contain the same Name");
      dispatch(add_points());
    } else {
      console.log("Test, the player should change now");
      dispatch(change_player());
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
  selectedCards: state.selectedCards
});

export default connect(mapStateToProps)(SelectedCards);
