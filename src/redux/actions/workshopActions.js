import * as api from './api';
import { GET_ALL_WORKSHOPS, GET_USER_WORKSHOPS } from '../actionsType';

export const getAllWorkshops = () => async (dispatch) => {
  try {
    const { data } = await api.getAllWorkshops();
    dispatch({
      type: GET_ALL_WORKSHOPS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};

export const getUserWorkshops = () => async (dispatch) => {
  try {
    const { data } = await api.getUserWorkshops();
    dispatch({
      type: GET_USER_WORKSHOPS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};