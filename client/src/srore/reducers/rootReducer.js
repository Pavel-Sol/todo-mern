import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  authReducer,
  todoReducer,
});
