import { GET_TODOS, DELETE_TODO, UPDATE_TODO } from './../actionTypes';

const defaultState = {
  todos: [],
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload };

    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((item) => item._id !== action.payload._id) };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };

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
  return {
    type: DELETE_TODO,
    payload: deletedTodo,
  };
};

export const updateTodoAC = (updatedTodo) => {
  return {
    type: UPDATE_TODO,
    payload: updatedTodo,
  };
};
