import { GET_TODOS } from './../actionTypes';

const defaultState = {
  todos: [],
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export const getTodosAC = (todos) => {
  return {
    type: GET_TODOS,
    payload: todos,
  };
};
