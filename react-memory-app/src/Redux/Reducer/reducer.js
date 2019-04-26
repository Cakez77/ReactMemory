import { SELECT_CARD, ADD_POINTS, CHANGE_PLAYER } from "../Actions/actions";

// Images for the Cards
import vader from "../../assets/vader.svg";
import delfin from "../../assets/delfin.svg";
import witchen from "../../assets/witchen.svg";
import trooper from "../../assets/trooper.svg";
import fußball from "../../assets/fußball.svg";
import jaguar from "../../assets/jaguar.png";
import spinne from "../../assets/spinne.png";
import wolf from "../../assets/wolf.png";

// Back image of the Cards
import backside from "../../assets/backside.svg";

const INITIAL_STATE = {
  deck: [
    {
      name: "Vader",
      img: vader
    },
    {
      name: "Delfin",
      img: delfin
    },
    {
      name: "Witchen",
      img: witchen
    },
    {
      name: "Trooper",
      img: trooper
    },
    {
      name: "Fußball",
      img: fußball
    },
    {
      name: "Jaguar",
      img: jaguar
    },
    {
      name: "Spinne",
      img: spinne
    },
    {
      name: "Wolf",
      img: wolf
    }
  ],
  backside: backside,
  selectedCards: [],
  points: [[0], [0]],
  player: 1
};

/**
 * Reducer function that handles the actions.
 *
 * @param {*} state The current state of the application
 */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CARD: {
      if (state.selectedCards.length < 2) {
        return {
          ...state,
          selectedCards: state.selectedCards.push(action.id)
        };
      }
      // Because otherwise it will fall through
      break;
    }
    case ADD_POINTS: {
      return {
        ...state,
        points: (state.points[state.player] += 1)
      };
    }
    case CHANGE_PLAYER: {
      return {
        ...state,
        player: (state.player + 1) % 2
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
