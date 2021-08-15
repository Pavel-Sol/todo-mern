import axios from 'axios';
import { getTodosAC } from './../reducers/todoReducer';

export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      console.log(todo);

      const response = await axios.post('http://localhost:5000/todo/add', todo);
    } catch (error) {
      console.log(error);
    }
  };
};
