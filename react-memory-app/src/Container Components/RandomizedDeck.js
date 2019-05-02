import { connect } from "react-redux";
import { select_card } from "../Redux/Actions/actions";
import CardField from "./CardField";

function randomizeCards(cards) {
  const deck = cards;

  let currentIndex = deck.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }

  return deck;
}

const getRandomizedDeck = (deck, randomize) => {
  if (randomize) {
    return randomizeCards(deck);
    // Change randomize to false somewhere
  }
};

const mapStateToProps = state => ({
  deck: getRandomizedDeck(state.deck, state.randomize),
  backside: state.backside
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, name) => {
    dispatch(select_card(id, name));
  }
});

const RandomizedDeck = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardField);

export default RandomizedDeck;
