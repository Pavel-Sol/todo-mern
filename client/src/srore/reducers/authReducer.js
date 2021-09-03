import { SET_USER, LOGOUT, HIDE_LOADER, SHOW_LOADER } from './../actionTypes';

const defaultState = {
  currentUser: {},
  isAuth: false,
  isFetching: false,
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, currentUser: action.payload, isAuth: true };

    case LOGOUT:
      return { ...state, currentUser: {}, isAuth: false };

    case SHOW_LOADER:
      return { ...state, isFetching: true };

    case HIDE_LOADER:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};

export const setUserAC = (user) => {
  return { type: SET_USER, payload: user };
};

export const logOutAC = () => {
  return { type: LOGOUT };
};

export const showLoaderAC = () => {
  return { type: SHOW_LOADER };
};

export const hideLoaderAC = () => {
  return { type: HIDE_LOADER };
};
