import * as api from './api';
import {
  GET_ALL_EVENTS,
  GET_USER_EVENTS,
  MAKE_SUBMISSION,
  EDIT_SUBMISSION,
} from '../actionsType';

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

export const makeSubmission = (id, formData) => async (dispatch) => {
  try {
    await api.makeSubmission(id, formData);
    dispatch({ type: MAKE_SUBMISSION });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};

export const checkSubmission = (eventId) => async (dispatch) => {
  try {
    const { data } = await api.checkSubmission(eventId);
    return data;
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};

export const editSubmission = (id, formData) => async (dispatch) => {
  try {
    await api.editSubmission(id, formData);
    dispatch({ type: EDIT_SUBMISSION });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};
