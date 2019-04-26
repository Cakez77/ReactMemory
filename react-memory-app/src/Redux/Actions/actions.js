/**
 * The type of actions the app needs, in this MemoryApp we need to be able to select Cards,
 * add points in case 2 Cards of the same name are selected and determine the winner
 * out of 2 players by these points.
 */
export const SELECT_CARD = "SELECT_CARD";
export const ADD_POINTS = "ADD_POINTS";
export const CHANGE_PLAYER = "CHANGE_PLAYER";

/**
 * Functions to create actions, these functions need to return the type of action and additional information the action needs.
 * Thsese functions are called from within the app.
 */
export const select_card = cardName => ({
  type: SELECT_CARD,
  id: cardName
});

export const add_points = points => ({
  type: ADD_POINTS,
  id: points
});

export const change_player = () => ({
  type: CHANGE_PLAYER
});
