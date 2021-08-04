import { GET_ALL_WORKSHOPS, GET_USER_WORKSHOPS } from '../actionsType';

const initialState = {
  allWorkshops: [],
  userWorkshops: null,
};

const workshopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_WORKSHOPS:
      return {
        ...state,
        allWorkshops: action?.payload,
      };
    case GET_USER_WORKSHOPS:
      return {
        ...state,
        userWorkshops: action?.payload,
      };
    default:
      return state;
  }
};

export default workshopReducer;
