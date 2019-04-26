import { SELECT_CARD, ADD_POINTS, CHANGE_PLAYER } from "../Actions/actions";

// Images for the Cards
import vader from "../../assets/vader.svg";
import delfin from "../../assets/delfin.svg";
import witchen from "../../assets/witchen.jpg";
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
      id: 1,
      name: "Vader",
      img: vader
    },
    {
      id: 2,
      name: "Delfin",
      img: delfin
    },
    {
      id: 3,
      name: "Witchen",
      img: witchen
    },
    {
      id: 4,
      name: "Trooper",
      img: trooper
    },
    {
      id: 5,
      name: "Fußball",
      img: fußball
    },
    {
      id: 6,
      name: "Jaguar",
      img: jaguar
    },
    {
      id: 7,
      name: "Spinne",
      img: spinne
    },
    {
      id: 8,
      name: "Wolf",
      img: wolf
    },
    {
      id: 9,
      name: "Vader",
      img: vader
    },
    {
      id: 10,
      name: "Delfin",
      img: delfin
    },
    {
      id: 11,
      name: "Witchen",
      img: witchen
    },
    {
      id: 12,
      name: "Trooper",
      img: trooper
    },
    {
      id: 13,
      name: "Fußball",
      img: fußball
    },
    {
      id: 14,
      name: "Jaguar",
      img: jaguar
    },
    {
      id: 15,
      name: "Spinne",
      img: spinne
    },
    {
      id: 16,
      name: "Wolf",
      img: wolf
    }
  ],
  backside: backside,
  openCards: [],
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
      return {
        ...state,
        selectedCards: [
          ...state.selectedCards,
          { id: action.id, name: action.name }
        ]
      };
    }
    case ADD_POINTS: {
      return {
        ...state,
        points: state.points[state.player] + 1,
        openCards: [
          ...state.openCards,
          state.selectedCards[0].id,
          state.selectedCards[1].id
        ]
      };
    }
    case CHANGE_PLAYER: {
      return {
        ...state,
        player: (state.player + 1) % 2,
        selectedCards: []
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
