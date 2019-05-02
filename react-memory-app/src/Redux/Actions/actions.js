/**
 * The type of actions the app needs, in this MemoryApp we need to be able to select Cards,
 * add points in case 2 Cards of the same name are selected and determine the winner
 * out of 2 players by these points. There should also be a way to reset the game
 */
export const SELECT_CARD = "SELECT_CARD";
export const ADD_POINTS = "ADD_POINTS";
export const CHANGE_PLAYER = "CHANGE_PLAYER";
export const RESET_GAME = "RESET_GAME";
export const SET_RANDOMIZE = "SET_RANDOMIZE";

/**
 * Functions to create actions, these functions need to return the type of action and additional information the action needs.
 * Thsese functions are called from within the app.
 */
export const select_card = (id, cardName) => ({
  type: SELECT_CARD,
  id: id,
  name: cardName
});

export const add_points = points => ({
  type: ADD_POINTS,
  id: points
});

export const change_player = () => ({
  type: CHANGE_PLAYER
});

export const reset_game = () => ({
  type: RESET_GAME
});

export const set_randomize = id => ({
  type: SET_RANDOMIZE,
  id: id
});
