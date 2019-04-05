import SELECT_CARD from "./actions";

export const reducer = (state = {
    card: "Card",
    selected: ""
}, action) => {
    switch (action.type) {
        case SELECT_CARD: 
            return {
                ...state,
                selected: action.id
            }

        default: 
            return state;
    }
}