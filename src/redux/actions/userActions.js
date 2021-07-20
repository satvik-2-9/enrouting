import * as api from './api';
import { SIGNUP, LOGIN, SET_USER_DETAILS, LOGOUT } from '../actionsType';

export const signup = (signupData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(signupData);
    dispatch({
      type: SIGNUP,
      payload: { userDetails: data.result, token: data.accessToken },
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};

export const login = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(loginData);
    dispatch({
      type: LOGIN,
      payload: { userDetails: data.result, token: data.accessToken },
    });
    history.push('/');
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};

export const logout = (history) => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
    history.push('/');
  } catch (err) {
    console.log('something went wrong');
  }
};

export const setUserDetails = (history) => async (dispatch) => {
  try {
    const user = await api.getUser();
    dispatch({
      type: SET_USER_DETAILS,
      payload: user.data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};

export const updateUserDetails = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updateUserDetails(updates);
    dispatch({
      type: SET_USER_DETAILS,
      payload: data.user,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};