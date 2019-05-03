import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Style
import "./CardField.css";

import Card from "../Presentational Components/Card";
import { select_card } from "../Redux/Actions/actions";

const CardField = ({ deck, onClick, backside }) => {
  let cards = deck;
  const [random, setRandom] = useState(true);

  function randomizeDeck() {
    let currentIndex = cards.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }

    console.log("randomize done");
    return deck;
  }

  async function reset() {
    await setRandom(false);
    await randomizeDeck();
  }

  useEffect(() => {
    if (random) {
      reset();
      console.log("After resetting");
    }
  });

  return (
    <div className="CardField">
      {cards.map(card => (
        <Card key={card.id} card={card} onClick={onClick} backside={backside} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  deck: state.deck,
  backside: state.backside
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
