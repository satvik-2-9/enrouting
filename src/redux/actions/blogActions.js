import * as api from './api';
import { GET_ALL_BLOGS } from '../actionsType';

export const getAllBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.getAllBlogs();
    dispatch({
      type: GET_ALL_BLOGS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};