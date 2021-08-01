import * as api from './api';
import { GET_ALL_TESTIMONIALS } from '../actionsType';

export const getAllTestimonials = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTestimonials();
    dispatch({
      type: GET_ALL_TESTIMONIALS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};