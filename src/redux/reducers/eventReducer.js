import {
  GET_ALL_EVENTS,
  GET_USER_EVENTS,
  MAKE_SUBMISSION,
  EDIT_SUBMISSION,
} from '../actionsType';

const initialState = {
  allEvents: [],
  userEvents: null,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        allEvents: action?.payload,
      };
    case GET_USER_EVENTS:
      return {
        ...state,
        userEvents: action?.payload,
      };
    case MAKE_SUBMISSION:
    case EDIT_SUBMISSION:
      return state;
    default:
      return state;
  }
};

export default eventReducer;
