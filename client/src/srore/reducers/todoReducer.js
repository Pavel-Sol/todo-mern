import { GET_TODOS, DELETE_TODOS } from './../actionTypes';

const defaultState = {
  todos: [],
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload };

    case DELETE_TODOS:
      return { ...state, todos: state.todos.filter((item) => item._id !== action.payload._id) };

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

export const deleteTodoAC = (deletedTodo) => {
  // debugger;
  return {
    type: DELETE_TODOS,
    payload: deletedTodo,
  };
};
