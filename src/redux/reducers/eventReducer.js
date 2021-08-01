import { GET_ALL_EVENTS } from '../actionsType';

const initialState = {
  allEvents: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        allEvents: action?.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
