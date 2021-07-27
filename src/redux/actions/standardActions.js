import * as api from './api';
import { GET_ALL_STANDARDS } from '../actionsType';

export const getAllStandards = () => async (dispatch) => {
  try {
    const { data } = await api.getAllStandards();
    data.sort((a, b) => (a.class > b.class) ? 1 : ((b.class > a.class) ? -1 : 0));
    dispatch({
      type: GET_ALL_STANDARDS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};