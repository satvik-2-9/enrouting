import * as api from './api';

export const helpMail = (formData) => async (dispatch) => {
  try {
    const { data } = await api.helpMail(formData);
    // console.log(data);
    return data;
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    console.log(message);
  }
};
