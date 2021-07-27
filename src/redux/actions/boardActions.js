import * as api from './api';
import { GET_ALL_BOARDS } from '../actionsType';

export const getAllBoards = () => async (dispatch) => {
  try {
    const { data } = await api.getAllBoards();
    data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    dispatch({
      type: GET_ALL_BOARDS,
      payload: data,
    });
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};