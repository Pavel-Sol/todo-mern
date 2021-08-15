import axios from 'axios';
import { setUserAC } from './../reducers/authReducer';

export const registration = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', {
        email,
        password,
      });

      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      // console.log(response.data.currentUser);
      dispatch(setUserAC(response.data.currentUser));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');

    // console.log(token);

    try {
      const response = await axios.get('http://localhost:5000/auth/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      // console.log(response.data.currentUser);

      dispatch(setUserAC(response.data.currentUser));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };
};
