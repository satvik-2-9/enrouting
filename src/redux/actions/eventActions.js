import * as api from './api';
import { GET_ALL_EVENTS, GET_USER_EVENTS } from '../actionsType';

export const getAllEvents = () => async (dispatch) => {
  try {
    const { data } = await api.getAllEvents();
    dispatch({
      type: GET_ALL_EVENTS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};

export const getUserEvents = () => async (dispatch) => {
  try {
    const { data } = await api.getUserEvents();
    dispatch({
      type: GET_USER_EVENTS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};