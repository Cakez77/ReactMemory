const SELECT_CARD = "SELECT_CARD";

export const selectCard = (cardName) => {
    return {
        type: SELECT_CARD,
        id: cardName
    }
}

export default SELECT_CARD;