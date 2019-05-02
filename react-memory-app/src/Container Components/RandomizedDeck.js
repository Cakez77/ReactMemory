import { connect } from "react-redux";
import { select_card } from "../Redux/Actions/actions";
import CardField from "./CardField";

const getRandomizedDeck = (deck, randomize) => {
  if (randomize) {
    return deck.sort(() => Math.random() - 0.5);
  }
};

const mapStateToProps = state => ({
  deck: getRandomizedDeck(state.deck, state.randomize),
  backside: state.backside,
  sort: state.sort
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
