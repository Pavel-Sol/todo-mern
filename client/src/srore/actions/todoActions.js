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

export const getTodo = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5000/todo/', { params: { userId } });

      const todos = response.data;
      // console.log(todos);

      dispatch(getTodosAC(todos));
    } catch (error) {
      console.log(error);
    }
  };
};
