import axios from 'axios';
import { getTodosAC, deleteTodoAC, updateTodoAC } from './../reducers/todoReducer';

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

export const completeTodo = (checked, id) => {
  return async (dispatch) => {
    try {
      // console.log(checked, id);

      const response = await axios.put('http://localhost:5000/todo/complete', {
        checked,
        todoId: id,
      });

      console.log(response.data.todo);

      dispatch(updateTodoAC(response.data.todo));
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

// ---------------------------------------

export const updateTodo = (todo) => {
  return async (dispatch) => {
    try {
      const response = await axios.put('http://localhost:5000/todo/update', todo);

      // console.log(response.data.updatedTodo);

      dispatch(updateTodoAC(response.data.updatedTodo));
    } catch (error) {
      console.log(error);
    }
  };
};
