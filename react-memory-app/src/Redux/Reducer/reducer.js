import SELECT_CARD from "../Actions/actions";
import ADD_POINTS from "../Actions/actions";
import CHANGE_PLAYER from "../Actions/actions";

const INITIAL_STATE = {
  deck: [
    {
      name: "Vader"
      //img: vader
    },
    {
      name: "Delfin"
      //img: delfin
    },
    {
      name: "Witchen"
      //img: witchen
    },
    {
      name: "Trooper"
      //img: trooper
    },
    {
      name: "Fußball"
      //img: fußball
    },
    {
      name: "Panther"
      //img: panther
    }
  ],
  selectedCards: [],
  points: [[0], [0]],
  player: 1
};

/**
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
