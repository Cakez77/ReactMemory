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
      img: vader,
      selected: false,
      open: false
    },
    {
      id: 2,
      name: "Delfin",
      img: delfin,
      selected: false,
      open: false
    },
    {
      id: 3,
      name: "Witchen",
      img: witchen,
      selected: false,
      open: false
    },
    {
      id: 4,
      name: "Trooper",
      img: trooper,
      selected: false,
      open: false
    },
    {
      id: 5,
      name: "Fußball",
      img: fußball,
      selected: false,
      open: false
    },
    {
      id: 6,
      name: "Jaguar",
      img: jaguar,
      selected: false,
      open: false
    },
    {
      id: 7,
      name: "Spinne",
      img: spinne,
      selected: false,
      open: false
    },
    {
      id: 8,
      name: "Wolf",
      img: wolf,
      selected: false,
      open: false
    },
    {
      id: 9,
      name: "Vader",
      img: vader,
      selected: false,
      open: false
    },
    {
      id: 10,
      name: "Delfin",
      img: delfin,
      selected: false,
      open: false
    },
    {
      id: 11,
      name: "Witchen",
      img: witchen,
      selected: false,
      open: false
    },
    {
      id: 12,
      name: "Trooper",
      img: trooper,
      selected: false,
      open: false
    },
    {
      id: 13,
      name: "Fußball",
      img: fußball,
      selected: false,
      open: false
    },
    {
      id: 14,
      name: "Jaguar",
      img: jaguar,
      selected: false,
      open: false
    },
    {
      id: 15,
      name: "Spinne",
      img: spinne,
      selected: false,
      open: false
    },
    {
      id: 16,
      name: "Wolf",
      img: wolf,
      selected: false,
      open: false
    }
  ],
  backside: backside,
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
        deck: state.deck.map((card, i) =>
          i === action.id - 1 ? { ...card, selected: true } : card
        )
      };
    }
    case ADD_POINTS: {
      return {
        ...state,
        points: state.points[state.player] + 1,
        deck: state.deck.map(card =>
          card.selected === true
            ? { ...card, open: true, selected: false }
            : card
        )
      };
    }
    case CHANGE_PLAYER: {
      return {
        ...state,
        player: (state.player + 1) % 2,
        deck: state.deck.map(card =>
          card.selected === true ? { ...card, selected: false } : card
        )
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
