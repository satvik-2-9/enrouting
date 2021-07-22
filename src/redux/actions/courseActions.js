import * as api from './api';
import { GET_ALL_COURSES, GET_USER_COURSES } from '../actionsType';

export const getAllCourses = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCourses();
    dispatch({
      type: GET_ALL_COURSES,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};

export const getUserCourses = () => async (dispatch) => {
  try {
    const { data } = await api.getUserCourses();
    dispatch({
      type: GET_USER_COURSES,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};