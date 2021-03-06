import axios from 'axios';
import { setUserAC, showLoaderAC, hideLoaderAC } from './../reducers/authReducer';

export const registration = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoaderAC());
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', {
        email,
        password,
      });

      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideLoaderAC());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoaderAC());
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      dispatch(setUserAC(response.data.currentUser));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(hideLoaderAC());
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    dispatch(showLoaderAC());

    try {
      const response = await axios.get('http://localhost:5000/auth/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      dispatch(setUserAC(response.data.currentUser));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(hideLoaderAC());
    }
  };
};
