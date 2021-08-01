import * as api from './api';
import { GET_ALL_EVENTS } from '../actionsType';

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