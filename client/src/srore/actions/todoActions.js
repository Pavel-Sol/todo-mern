import axios from 'axios';
import { getTodosAC, deleteTodoAC, updateTodoAC } from './../reducers/todoReducer';

export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      await axios.post('http://localhost:5000/todo/add', todo);

      dispatch(getTodos(todo.userId));
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

export const getTodos = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5000/todo/', { params: { userId } });

      const todos = response.data;

      dispatch(getTodosAC(todos.reverse()));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTodo = (todo) => {
  return async (dispatch) => {
    try {
      const response = await axios.put('http://localhost:5000/todo/update', todo);

      dispatch(updateTodoAC(response.data.updatedTodo));
    } catch (error) {
      console.log(error);
    }
  };
};
