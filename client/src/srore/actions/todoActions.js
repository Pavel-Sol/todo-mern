import axios from 'axios';
import { getTodosAC, deleteTodoAC } from './../reducers/todoReducer';

export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      console.log(todo);

      const response = await axios.post('http://localhost:5000/todo/add', todo);
      dispatch(getTodo(todo.userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete('http://localhost:5000/todo/delete', {
        params: { todoId: id },
      });

      const deletedTodo = response.data.deletedTodo;

      dispatch(deleteTodoAC(deletedTodo));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTodo = (userId) => {
  // console.log(userId);
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5000/todo/', { params: { userId } });

      const todos = response.data;
      // console.log(todos);

      dispatch(getTodosAC(todos.reverse()));
    } catch (error) {
      console.log(error);
    }
  };
};
